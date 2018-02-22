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

    let ans = false;

    if(isObject(object) && object[property] != null) { // jshint ignore: line
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

    let ans = false;

    if (isObject(object) && isArray(arrayOfProperties)) {

        const length = arrayOfProperties.length;

        for (let i = 0; i < length; i++) {
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

    let ans = true;

    if (!isObject(object) || !isPopulatedArray(arrayOfProperties)) {

        ans = false;

    } else {

        const length = arrayOfProperties.length;

        for (let i = 0; i < length; i++) {
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

    let ans = false;

    if (typeof object === 'object') {
        for(const key in object) {
            if(object.hasOwnProperty(key)) {
                ans = true;
                break;
            }
        }
    }

    return ans;
}


/**
 * Returns true if a property is read-only, otherwise false is returned
 * @param object
 * @param prop
 * @returns {boolean}
 */
function isReadOnly(object, prop) {

    let ans = false;

    if (typeof object === 'object') {
        const descriptor = Object.getOwnPropertyDescriptor(object, prop);
        if(descriptor.writable === false){
            ans = true;
        }
    }

    return ans;
}

/**
 * Returns true if a property is enumerable, otherwise false is returned
 * @param object
 * @param prop
 * @returns {boolean}
 */
function isPropertyEnumerable(object, prop) {
    let ans = false;

    if (typeof object === 'object') {
        const descriptor = Object.getOwnPropertyDescriptor(object, prop);
        ans  = descriptor.enumerable;
    }
    return ans;
}


/**
 * Returns true if a property is configurable, otherwise false is returned
 * @param object
 * @param prop
 * @returns {boolean}
 */
function isPropertyConfigurable(object, prop) {
    let ans = false;

    if (typeof object === 'object') {
        const descriptor = Object.getOwnPropertyDescriptor(object, prop);
        ans  = descriptor.configurable;
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
    isPopulatedArray: isPopulatedArray,
    isReadOnly: isReadOnly,
    isPropertyEnumerable: isPropertyEnumerable,
    isPropertyConfigurable: isPropertyConfigurable
};
