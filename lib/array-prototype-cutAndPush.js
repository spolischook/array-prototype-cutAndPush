/*
 * array-prototype-cutAndPush
 * https://github.com/spolischook/array-prototype-cutAndPush
 *
 * Copyright (c) 2015 Serhii Polishchuk
 * Licensed under the MIT license.
 */

'use strict';

Array.prototype.cutAndPush = function(f,xs) {
  var i = 0;
  while (i < this.length) {
    if (f(this[i])) {
      xs.push(this[i]);
      this.splice(i,1);
    } else {
      i++;
    }
  }
};
