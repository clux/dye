# Dye [![Build Status](https://secure.travis-ci.org/clux/logule.png)](http://travis-ci.org/clux/dye)

Dye is a coloring library very much like the popular `colors` on `npm`, but cleaned up and made explusively commonjs and for the console.


## Usage

```js
var dye = require('dye');
dye.red('this is red'); // '\u001b[31mthis is red\u001b[39m'
```

When printed to the terminal these codes show up as:
![example output!](https://github.com/clux/dye/raw/master/imgs/output.png)

## Installation

```bash
$ npm install dye
```

## Running tests
Install development dependencies

```bash
$ npm install
```

Run the tests

```bash
$ npm test
```

## License
MIT-Licensed. See LICENSE file for details.
