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
 * Returns true if a Boolean
 * @param data
 * @returns {boolean}
 */
function isBoolean(data) {
    return !!data && typeof data === 'boolean';
}

/**
 *
 * Returns true if a Symbol
 * @param data
 * @returns {boolean}
 */
function isSymbol(data) {
    return !!data && typeof data === 'symbol';
}

/**
 *
 * Returns true if a Number
 * @param data
 * @returns {boolean}
 */
function isNumber(data) {
    return !!data && typeof data === 'number';
}

/**
 *
 * Returns true if a Float
 * @param data
 * @returns {boolean}
 */
function isFloat(data) {
    return !!data && (data % 1 !== 0);
}

/**
 *
 * Checks object for a given property
 * @param object
 * @param property
 * @returns {boolean}
 */
function doesPropertyExist(object, property) {
    return isObject(object) && object[property] != null;
}

/**
 *
 * Checks object for a given property
 * @param array
 * @param property
 * @returns {boolean}
 */
function doesArrayContain(array, property) {
    let ans = false;
    if(isArray(array) && property !== null) { // jshint ignore: line
        array.forEach(function(item){
            if(item === property){
                ans = true;
            }
        });
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
    if (typeof object === 'object') {
        const descriptor = Object.getOwnPropertyDescriptor(object, prop);
        return descriptor.writable === false;
    }
    else{
        return false;
    }
}

/**
 * Returns true if a property is enumerable, otherwise false is returned
 * @param object
 * @param prop
 * @returns {boolean}
 */
function isPropertyEnumerable(object, prop) {
    if (typeof object === 'object') {
        const descriptor = Object.getOwnPropertyDescriptor(object, prop);
        return(descriptor.enumerable);
    }
    else{
        return false;
    }
}

/**
 * Returns true if a property is configurable, otherwise false is returned
 * @param object
 * @param prop
 * @returns {boolean}
 */
function isPropertyConfigurable(object, prop) {
    if (typeof object === 'object') {
        const descriptor = Object.getOwnPropertyDescriptor(object, prop);
        return(descriptor.configurable);
    }
    else{
        return false;
    }
}

/**
 * Returns true if an array is two dimensional
 * @param array
 * @returns {boolean}
 */
function is2dArray(array){
    if(array[0] === undefined){
        return false;
    }
    else{
        return(array[0].constructor === Array);
    }
}




module.exports = {
    doesArrayContain: doesArrayContain,
    doesPropertyExist: doesPropertyExist,
    doesAnyPropertyExist: doesAnyPropertyExist,
    doAllPropertiesExist: doAllPropertiesExist,
    propertiesExist: propertiesExist,
    isString: isString,
    isObject: isObject,
    isArray: isArray,
    is2dArray: is2dArray,
    isSymbol: isSymbol,
    isBoolean: isBoolean,
    isFloat: isFloat,
    isNumber: isNumber,
    isPopulatedArray: isPopulatedArray,
    isReadOnly: isReadOnly,
    isPropertyEnumerable: isPropertyEnumerable,
    isPropertyConfigurable: isPropertyConfigurable,


};
