'use strict';

/**
 *
 * Returns true if an Object
 * @param data
 * @returns {boolean}
 */
function isObject(data) {
    return !!data && typeof data === 'object';
}

/**
 *
 * Returns true if an Array
 * @param data
 * @returns {boolean}
 */
function isArray(data) {
    return !!data && data.constructor === Array;
}

/**
 *
 * Returns true if Array is populated
 * @param data
 * @returns {boolean}
 */
function isPopulatedArray(data) {
    return isArray(data) && data.length > 0;
}

/**
 *
 * Returns true if a String
 * @param data
 * @returns {boolean}
 */
function isString(data) {
    return !!data && typeof data === 'string';
}


/**
 *
 * Checks object for a given property
 * @param object
 * @param property
 * @returns {boolean}
 */
function doesPropertyExist(object, property) {

    var ans = false;

    if(isObject(object) && isString(property) && object[property] != null) { // jshint ignore: line
        ans = true;
    }

    return ans;
}

/**
 *
 * Checks object for given properties
 * @param object
 * @param arrayOfProperties
 * @returns {boolean}
 */
function doesAnyPropertyExist(object, arrayOfProperties) {

    var ans = false;

    if (isObject(object) && isArray(arrayOfProperties)) {

        var length = arrayOfProperties.length;

        for (var i = 0; i < length; i++) {
            if(doesPropertyExist(object, arrayOfProperties[i])) {
                ans = true;
                break;
            }
        }
    }

    return ans;
}

/**
 *
 * Checks object for ALL given properties
 * @param object
 * @param arrayOfProperties
 * @returns {boolean}
 */
function doAllPropertiesExist(object, arrayOfProperties) {

    var ans = true;

    if (!isObject(object) || !isPopulatedArray(arrayOfProperties)) {

        ans = false;

    } else {

        var length = arrayOfProperties.length;

        for (var i = 0; i < length; i++) {
            if(!doesPropertyExist(object, arrayOfProperties[i])) {
                ans = false;
                break;
            }
        }
    }

    return ans;
}


/**
 * Returns true if properties exist on the object, otherwise false is returned
 * @param object
 * @returns {boolean}
 */
function propertiesExist(object) {

    var ans = false;

    if (typeof object === 'object') {
        for(var key in object) {
            if(object.hasOwnProperty(key)) {
                ans = true;
                break;
            }
        }
    }

    return ans;
}

module.exports = {
    doesPropertyExist: doesPropertyExist,
    doesAnyPropertyExist: doesAnyPropertyExist,
    doAllPropertiesExist: doAllPropertiesExist,
    propertiesExist: propertiesExist,
    isString: isString,
    isObject: isObject,
    isArray: isArray,
    isPopulatedArray: isPopulatedArray
};
