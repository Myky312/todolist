# lòd

[![NPM version](http://img.shields.io/npm/v/lod.svg)](https://www.npmjs.com/package/lod) [![Build Status](http://img.shields.io/travis/leny/lod.svg)](https://travis-ci.org/leny/lod) ![Dependency Status](https://david-dm.org/leny/lod.svg) ![Downloads counter](http://img.shields.io/npm/dm/lod.svg)

> Change the order of an array

* * *

## Getting Started

### From **browsers** and **node**.

Install the module with: `npm install lod`.

> **NOTE:** lòd use the ES6 module definition. For now, it uses Babel to transpile to ES5.  
> So, if you use ES5, you should require lòd with `var lod = require( "lod" ).default;`, and, if you use ES6, you should import lòd with `import lod from "lod";`.

## Documentation

**lòd** returns a new, reordered version of an array, using another array of ordered indexes.

### Signature

`reordered_array = lod( source_array, order_array[, strict_mode ] );`

#### Example

```javascript
var lod = require( "lod" ).default;

var source_array = [ "one", "two", "three", "four" ];

var reordered_array = lod( source_array, [ 2, 3, 0, 1 ] ); // [ "three", "four", "one", "two" ]
```

See [tests](./test/lod_test.js) for other examples.

### Strict mode

When the `strict_mode` arguments is set to true, `source_array` and `order_array` must have the same length and the `order_array` can't have duplicate values.

### Restrictions & errors

* **lòd** will throw a `Error( "INVALID_ORDER_CONTENT" )` if the `order_array` contains elements that are not **Number**.

* **lòd** will throw a `Error( "OUT_OF_BOUNDS_ORDER_INDEX" )` if the `order_array` contains numbers that are not inside the `source_array` range.

* **lòd** will throw a `Error( "NOT_EQUAL_LENGTH" )` if the `order_array` and `source_array` doesn't have equal length (**strict_mode only**).

* **lòd** will throw a `Error( "INVALID_DUPLICATE_IN_ORDERS" )` if the `order_array` contains duplicate values (**strict_mode only**).

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* **0.1.0**: Initial release (*20/01/16*)

## License
(Un)licensed under the UNLICENSE
