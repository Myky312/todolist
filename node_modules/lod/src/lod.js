/* lòd
 * https://github.com/leny/lod
 *
 * Copyright (c) 2016 leny
 * Licensed under the MIT license.
 */

export default function( aSource, aOrders, bStrictMode = false ) { // eslint-disable-line func-style
    let aOrderedOutput = [],
        fCheckType = ( mElt ) => {
            return typeof mElt !== "number";
        },
        fCheckRange = ( iElt ) => {
            return iElt > aSource.length;
        },
        fArrayUnique = ( aSrc ) => {
            let oValues = {};

            for ( let mValue of aSrc ) {
                oValues[ mValue ] = null;
            }

            return Object.keys( oValues );
        };

    if ( bStrictMode && aSource.length !== aOrders.length ) {
        throw new RangeError( "NOT_EQUAL_LENGTH" );
    }

    if ( bStrictMode && aOrders.length !== fArrayUnique( aOrders ).length ) {
        throw new RangeError( "INVALID_DUPLICATE_IN_ORDERS" );
    }

    if ( aOrders.findIndex( fCheckType ) > -1 ) {
        throw new Error( "INVALID_ORDER_CONTENT" );
    }

    if ( aOrders.findIndex( fCheckRange ) > -1 ) {
        throw new RangeError( "OUT_OF_BOUNDS_ORDER_INDEX" );
    }

    for ( let iIndex of aOrders ) {
        aOrderedOutput.push( aSource[ iIndex ] );
    }

    return aOrderedOutput;
}
