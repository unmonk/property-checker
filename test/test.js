'use strict';

const expect = require('chai').expect;
const propertyCheck = require('../index');


describe('#propertyCheck', function() {
    it('should return true for an Object', function () {
        const object = {};
        const result = propertyCheck.isObject(object);
        expect(result).to.equal(true);
    });
    it('should return false if not an Object', function () {
        const object = 1;
        const result = propertyCheck.isObject(object);
        expect(result).to.equal(false);
    });
    it('should return true if an Array', function () {
        const array = [];
        const result = propertyCheck.isArray(array);
        expect(result).to.equal(true);
    });
    it('should return false if not an Array', function () {
        const array = 1;
        const result = propertyCheck.isArray(array);
        expect(result).to.equal(false);
    });
    it('should return true if a String', function () {
        const string = "string";
        const result = propertyCheck.isString(string);
        expect(result).to.equal(true);
    });
    it('should return false if not a String', function () {
        const string = 1;
        const result = propertyCheck.isString(string);
        expect(result).to.equal(false);
    });
    it('should return true if a number', function () {
        const string = 1;
        const result = propertyCheck.isNumber(string);
        expect(result).to.equal(true);
    });
    it('should return false if not a number', function () {
        const string = 'a';
        const result = propertyCheck.isNumber(string);
        expect(result).to.equal(false);
    });
    it('should return false if not a boolean', function () {
        const bool = 'a';
        const result = propertyCheck.isBoolean(bool);
        expect(result).to.equal(false);
    });
    it('should return true if a boolean', function () {
        const bool = true;
        const result = propertyCheck.isBoolean(bool);
        expect(result).to.equal(true);
    });
    it('should return false if not a float', function () {
        const float = 5;
        const result = propertyCheck.isFloat(float);
        expect(result).to.equal(false);
    });
    it('should return true if a float', function () {
        const float = 5.5;
        const result = propertyCheck.isFloat(float);
        expect(result).to.equal(true);
    });
    it('should return true if a symbol', function () {
        const a = Symbol(42);
        const result = propertyCheck.isSymbol(a);
        expect(result).to.equal(true);
    });
    it('should return false if not a symbol', function () {
        const a = 1;
        const result = propertyCheck.isSymbol(a);
        expect(result).to.equal(false);
    });
    it('should return true if a populated Array', function () {
        const array = [1,2,3];
        const result = propertyCheck.isPopulatedArray(array);
        expect(result).to.equal(true);
    });
    it('should return false if not a populated Array', function () {
        const array = [];
        const result = propertyCheck.isPopulatedArray(array);
        expect(result).to.equal(false);
    });
    it('should return true if any property exists on an Object', function () {
        const object = {
            "test": "test"
        };
        const result = propertyCheck.propertiesExist(object);
        expect(result).to.equal(true);
    });
    it('should return false if no property exists on an Object', function () {
        const object = {};
        const result = propertyCheck.propertiesExist(object);
        expect(result).to.equal(false);
    });
    it('should return true if a specific property exists on an Object', function () {
        const object = {
            "test": "test"
        };
        const result = propertyCheck.doesPropertyExist(object, "test");
        expect(result).to.equal(true);
    });
    it('should return false if a specific property does not exists on an Object', function () {
        const object = {
            "test": "test"
        };
        const result = propertyCheck.doesPropertyExist(object, "test2");
        expect(result).to.equal(false);
    });
    it('should return true if a specific property from an array of properties exists on an Object', function () {
        const object = {
            "test": "test"
        };
        const propertyArray = ["test"];
        const result = propertyCheck.doesAnyPropertyExist(object, propertyArray);
        expect(result).to.equal(true);
    });
    it('should return false if a specific property from an array of properties does not exists on an Object', function () {
        const object = {
            "test": "test"
        };
        const propertyArray = ["test2"];
        const result = propertyCheck.doesAnyPropertyExist(object, propertyArray);
        expect(result).to.equal(false);
    });
    it('should return true if a all properties from an array of properties exist on an Object', function () {
        const object = {
            "test": "test",
            "test2": "test2"
        };
        const propertyArray = ["test", "test2"];
        const result = propertyCheck.doAllPropertiesExist(object, propertyArray);
        expect(result).to.equal(true);
    });
    it('should return false if a all properties from an array of properties do not exist on an Object', function () {
        const object = {
            "test": "test"
        };
        const propertyArray = ["test", "test2"];
        const result = propertyCheck.doAllPropertiesExist(object, propertyArray);
        expect(result).to.equal(false);
    });
    it('should return true if a property from an object is read-only', function () {
        const object = {};
        Object.defineProperty(object, "test", {
            value: "test",
            writable: false
        });
        const result = propertyCheck.isReadOnly(object, "test");
        expect(result).to.equal(true);
    });
    it('should return false if a property from an object is writable', function () {
        const object = {};
        Object.defineProperty(object, "test", {
            value: "test",
            writable: false
        });
        const result = propertyCheck.isReadOnly(object, "test");
        expect(result).to.equal(true);
    });
    it('should return false if a property is not enumerable', function () {
        const object = {};
        Object.defineProperty(object, "test", {
            value: "test",
            enumerable: false
        });
        const result = propertyCheck.isPropertyEnumerable(object, "test");
        expect(result).to.equal(false);
    });
    it('should return true if a property is enumerable', function () {
        const object = {};
        Object.defineProperty(object, "test", {
            value: "test",
            enumerable: true
        });
        const result = propertyCheck.isPropertyEnumerable(object, "test");
        expect(result).to.equal(true);
    });
    it('should return false if a property is not configurable', function () {
        const object = {};
        Object.defineProperty(object, "test", {
            value: "test"
        });
        const result = propertyCheck.isPropertyConfigurable(object, "test");
        expect(result).to.equal(false);
    });
    it('should return true if a property is configurable', function () {
        const object = {};
        Object.defineProperty(object, "test", {
            value: "test",
            configurable: true
        });
        const result = propertyCheck.isPropertyConfigurable(object, "test");
        expect(result).to.equal(true);
    });
    it('should return true if the given property is in the given array', function () {
        const array = [1,2,3];
        const result = propertyCheck.doesArrayContain(array, 2);
        expect(result).to.equal(true);
    });
    it('should return false if the given property is not in the given array', function () {
        const array = [1,2,3];
        const result = propertyCheck.doesArrayContain(array, "2");
        expect(result).to.equal(false);
    });
    it('should return true if the given array is two dimensional', function () {
        const array = [[1,2,3]];
        const result = propertyCheck.is2dArray(array);
        expect(result).to.equal(true);
    });
    it('should return false if the given array is not two dimensional', function () {
        const array = [1,2,3];
        const result = propertyCheck.is2dArray(array);
        expect(result).to.equal(false);
    });

});
