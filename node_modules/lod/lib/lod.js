"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (aSource, aOrders) {
    var bStrictMode = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
    // eslint-disable-line func-style
    var aOrderedOutput = [],
        fCheckType = function fCheckType(mElt) {
        return typeof mElt !== "number";
    },
        fCheckRange = function fCheckRange(iElt) {
        return iElt > aSource.length;
    },
        fArrayUnique = function fArrayUnique(aSrc) {
        var oValues = {};

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = aSrc[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var mValue = _step.value;

                oValues[mValue] = null;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return Object.keys(oValues);
    };

    if (bStrictMode && aSource.length !== aOrders.length) {
        throw new RangeError("NOT_EQUAL_LENGTH");
    }

    if (bStrictMode && aOrders.length !== fArrayUnique(aOrders).length) {
        throw new RangeError("INVALID_DUPLICATE_IN_ORDERS");
    }

    if (aOrders.findIndex(fCheckType) > -1) {
        throw new Error("INVALID_ORDER_CONTENT");
    }

    if (aOrders.findIndex(fCheckRange) > -1) {
        throw new RangeError("OUT_OF_BOUNDS_ORDER_INDEX");
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = aOrders[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var iIndex = _step2.value;

            aOrderedOutput.push(aSource[iIndex]);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return aOrderedOutput;
};
