# array-prototype-cutAndPush [![Build Status](https://secure.travis-ci.org/spolischook/array-prototype-cutAndPush.png?branch=master)](http://travis-ci.org/spolischook/array-prototype-cutAndPush)

A simple lightweight function for cut pice of array and push it to another array

## Getting Started
Install the module with: `npm install array-prototype-cutAndPush`

```javascript
require('array-prototype-cutAndPush');
var a = [1,2,3,4,5,6,7,8,9,10],
    b = [1,2,3,4,5,6,7,8,9,10];
a.cutAndPush(function(el) { return a > 5; }, b);

console.log(a); // [1,2,3,4,5]
console.log(b); // [1,2,3,4,5,6,7,8,9,10,6,7,8,9,10]
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2015 Serhii Polishchuk  
Licensed under the MIT license.
