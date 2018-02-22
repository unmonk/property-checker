Property-Checker
================

A small library that can be used to check objects for certain properties.

## Installation

  `npm install  property-checker`

## Usage

    const propCheck = require('property-checker');

    propCheck.isString(string);
    propCheck.isArray(array);
    propCheck.isObject(object);
    propCheck.isPopulatedArray(array);

    propCheck.propertiesExist(object);
    propCheck.doesPropertyExist(object, property);
    propCheck.doesAnyPropertyExist(object, arrayOfProperties);
    propCheck.doAllPropertiesExist(object, arrayOfProperties);

    propCheck.isReadOnly(object, property);
    propCheck.isPropertyEnumerable(object, property);





  All outputs are Booleans


## Tests

  `npm test`
