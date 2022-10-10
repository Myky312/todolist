"use strict";

var lod = require( "../lib/lod.js" ).default;

exports[ "lòd:exceptions" ] = {
    "lòd throws when order array contains invalid elements": function( test ) {
        test.throws( function() {
            lod( [ "one", "two", "three" ], [ 1, "bar", "foo" ] );
        } );
        test.done();
    },
    "lòd throws when order array contains unranged indexes": function( test ) {
        test.throws( function() {
            lod( [ "one", "two", "three" ], [ 1, 0, 4 ] );
        } );
        test.done();
    }
};

exports[ "lòd" ] = {
    "lòd behaves correctly": function( test ) {
        test.deepEqual( lod( [ "one", "two", "three", "four", "five" ], [ 0, 1, 2, 3, 4 ] ), [ "one", "two", "three", "four", "five" ] );
        test.deepEqual( lod( [ "one", "two", "three", "four", "five" ], [ 1, 2, 0, 4, 3 ] ), [ "two", "three", "one", "five", "four" ] );
        test.deepEqual( lod( [ "one", "two", "three", "four", "five" ], [ 4, 3, 2, 0, 1 ] ), [ "five", "four", "three", "one", "two" ] );
        test.deepEqual( lod( [ "one", "two", "three", "four", "five" ], [ 3, 2, 4, 1, 0 ] ), [ "four", "three", "five", "two", "one" ] );
        test.deepEqual( lod( [ "one", "two", "three", "four", "five" ], [ 1, 0, 3, 4, 2 ] ), [ "two", "one", "four", "five", "three" ] );
        test.deepEqual( lod( [ "one", "two", "three", "four", "five" ], [ 1, 0, 4, 2 ] ), [ "two", "one", "five", "three" ] );
        test.deepEqual( lod( [ "one", "two", "three", "four", "five" ], [ 1, 0, 2, 2, 2, 4 ] ), [ "two", "one", "three", "three", "three", "five" ] );
        test.done();
    }
};

exports[ "lòd: strict_mode=true" ] = {
    "lòd throws when source and order array have different length": function( test ) {
        test.throws( function() {
            lod( [ "one", "two", "three" ], [ 1, 0, 2, 2 ], true );
        } );
        test.done();
    },
    "lòd throws when order array have duplicate indexes": function( test ) {
        test.throws( function() {
            lod( [ "one", "two", "three" ], [ 1, 0, 0 ], true );
        } );
        test.done();
    },
    "lòd throws when order array contains invalid elements": function( test ) {
        test.throws( function() {
            lod( [ "one", "two", "three" ], [ 1, "bar", "foo" ], true );
        } );
        test.done();
    },
    "lòd throws when order array contains unranged indexes": function( test ) {
        test.throws( function() {
            lod( [ "one", "two", "three" ], [ 1, 0, 4 ], true );
        } );
        test.done();
    },
    "lòd behaves correctly": function( test ) {
        test.deepEqual( lod( [ "one", "two", "three", "four", "five" ], [ 0, 1, 2, 3, 4 ], true ), [ "one", "two", "three", "four", "five" ] );
        test.deepEqual( lod( [ "one", "two", "three", "four", "five" ], [ 1, 2, 0, 4, 3 ], true ), [ "two", "three", "one", "five", "four" ] );
        test.deepEqual( lod( [ "one", "two", "three", "four", "five" ], [ 4, 3, 2, 0, 1 ], true ), [ "five", "four", "three", "one", "two" ] );
        test.deepEqual( lod( [ "one", "two", "three", "four", "five" ], [ 3, 2, 4, 1, 0 ], true ), [ "four", "three", "five", "two", "one" ] );
        test.deepEqual( lod( [ "one", "two", "three", "four", "five" ], [ 1, 0, 3, 4, 2 ], true ), [ "two", "one", "four", "five", "three" ] );
        test.done();
    }
};
