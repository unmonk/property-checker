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




});
