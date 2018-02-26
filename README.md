Property-Checker
================

A small library that can be used to check objects for certain properties.

## Installation

  `npm install  property-checker`

## Usage

    const propCheck = require('property-checker');

    propCheck.isString(string);
    propCheck.isNumber(number);
    propCheck.isFloat(number);
    propCheck.isSymbol(symbol)
    propCheck.isArray(array);
    propCheck.is2dArray(array);
    propCheck.isObject(object);

    propCheck.isPopulatedArray(array);
    propCheck.doesArrayContain(array, property);


    propCheck.propertiesExist(object);
    propCheck.doesPropertyExist(object, property);
    propCheck.doesAnyPropertyExist(object, arrayOfProperties);
    propCheck.doAllPropertiesExist(object, arrayOfProperties);

    propCheck.isReadOnly(object, property);
    propCheck.isPropertyEnumerable(object, property);
    propcheck.isPropertyConfigurable(object, property);



  All outputs are Booleans
