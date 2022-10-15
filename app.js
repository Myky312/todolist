const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://sattarovmyktybek:Test123@cluster0.m7ttwoc.mongodb.net/todolistDB", {useNewUrlParser: true});

const itemsSchema = {
  name: String
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "Welcome to your todolist!"
});
const item2 = new Item({
  name: "Hit the + button to add a new item."
});
const item3 = new Item({
  name: "<-- Check this to delete an Item"
});

const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String, 
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);

app.get("/", function (req, res) {
  if (req.params.listTitle != "favicon.ico" && req.params.listTitle != "Favicon.ico"){
    Item.find({}, function(err, foundItems){
      if(foundItems.length === 0){
        Item.insertMany(defaultItems, function (err) {
          if (err){
            console.log(err);
          } else {
            console.log("Success!");
          }
        });
      }else {
        res.render("list", {
          listTitle: "Today",
          newListItems: foundItems,
        });
      };
    });
  }else{
    console.log("zdes problema");
  }
});

app.get("/:customListName", function(req, res){
  if (req.params.customListName != "favicon.ico" && req.params.customListName != "Favicon.ico"){
    const customListName = _.capitalize(req.params.customListName);
    List.findOne({name: customListName}, function(err, foundList) {
      if(!err){
        if(!foundList){
          const list = new List({
            name: customListName,
            items: defaultItems
          });
          list.save();
          // console.log("Doesnt exist");
          res.redirect("/"+customListName);
        }else{
          // console.log("Exists");
          res.render("list", {listTitle: foundList.name, newListItems: foundList.items});
      };
    };
  });
  };
});

app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  const item = new Item({
    name: itemName
  });
  
  if(listName === "Today"){
    item.save();
    res.redirect("/");
  } else{
    List.findOne({name: listName}, function(err, foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect("/"+listName);
    });
  }
});

app.post("/delete", function(req, res){
  const checkedItedmId = req.body.checkbox;
  const listName = req.body.listName; 
  if(listName === "Today"){
    Item.findByIdAndRemove(checkedItedmId, function(err){
      if(!err){
        console.log("Successfully deleted checked item. ");
        res.redirect("/");
      }
    });
  }else{
    List.findOneAndUpdate({name:listName}, {$pull: {items: {_id: checkedItedmId}}}, function(err, foundList){
      if(!err){
        res.redirect("/"+listName);
      }
    });
  }
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, function () {
  console.log("Server is running on port successfully!");
});
