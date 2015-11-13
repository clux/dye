# dye
[![npm status](http://img.shields.io/npm/v/dye.svg)](https://www.npmjs.org/package/dye)
[![build status](https://secure.travis-ci.org/clux/dye.svg)](http://travis-ci.org/clux/dye)
[![dependency status](https://david-dm.org/clux/dye.svg)](https://david-dm.org/clux/dye)
[![coverage status](http://img.shields.io/coveralls/clux/dye.svg)](https://coveralls.io/r/clux/dye)

Dye is a coloring/styling library for wrapping common ANSI escape sequences around text that produce colors/styling when logged to a terminal.

The interface mostly mirrors the popular `colors` module on `npm`, but does not introduce implicit global dependencies in your code via `String.prototype`, and has been cleaned up for terminal use only.

## Usage
Basic usage is simply `dye.red(str)`. All the exported colors with `bold` (aka bright) variants should work everywhere. Here we test all the methods in both variants.

```js
var dye = require('dye');
var cols = ['white', 'black', 'grey', 'blue', 'cyan', 'green', 'magenta', 'red','yellow'];
cols.forEach(function (col) {
  var colored = dye[col](col);
  console.log(colored);
  console.log(dye.bold(colored));
});
```

![example output!](https://github.com/clux/dye/raw/master/imgs/output.png)

## Experimental
The `inverse`, `underline`, `italic` functions have sparse support (no worky on windows).

### Installation

```sh
$ npm install dye
```

## License
MIT-Licensed. See LICENSE file for details.
