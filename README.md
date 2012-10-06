# Dye [![Build Status](https://secure.travis-ci.org/clux/logule.png)](http://travis-ci.org/clux/dye)

Dye is a coloring/styling library for wrapping common ANSI escape sequences around text that produce colors/styling when sent to `stdout`.

The interface is mirror the popular `colors` module on `npm`, but does not introduce implicit global dependencies in your code via `String.prototype`, and has been cleaned up for terminal use only.

## Safe Usage
The basic colors with `bold` (aka bright) variants should work everywhere.

```js
var dye = require('dye');
var cols = ['white', 'black', 'grey', 'blue', 'cyan', 'green', 'magenta', 'red','yellow'];
cols.forEach(function (col) {
  var escapedStr = dye[col](col);
  console.log(escapedStr);
  console.log(dye.bold(escapedStr));
});
```

![example output!](https://github.com/clux/dye/raw/master/imgs/output.png)

The
## Experimental Stuff
The `inverse`, `underline`, `italic` functions have sparse support (no worky on windows).

### zebra()
Alternates between unwrapped chars and `inverse` applied chars to create a zebra effect.
Because of the reliance on `inverse`, this is not widely supported.

### rainbow()
Cycles through `red`, `yellow`, `green`, `blue` and `magenta` to create a rainbow effect on text.

It the non-bright version should work everywhere, the bright version, i.e. `dye.bold(dye.rainbow('bright rainbow'))` might fail depending on how escape code parsing handles nesting in your terminal (no worky on windows).

### zalgo()
[H̸̡̪̯ͨ͊̽̅̾̎Ȩ̬̩̾͛ͪ̈́̀́͘ ̶̧̨̱̹̭̯ͧ̾ͬC̷̙̲̝͖ͭ̏ͥͮ͟Oͮ͏̮̪̝͍M̲̖͊̒ͪͩͬ̚̚͜Ȇ̴̟̟͙̞ͩ͌͝S̨̥̫͎̭ͯ̿̔̀ͅ](http://www.ghostwoods.com/2009/11/stack-overflow-zalgo-he-comes-807/).

This is a standard, non-deterministic zalgolizer. It works as follows:

Take three random integers, and append a random selection of symbols from each subarray of [souls](https://github.com/clux/dye/blob/master/dye.js#L42).

By default it picks up to `3` symbols from the top and bottom set (the symbols extending above and below the text resp.), and up to `1` from the middle set (that overlays the text) and appends to the first character. Roll again and append to the second character, etc.

How intense the effect should be can be regulated by passing in your own upper maxima in an array.

```js
dye.zalgo('default', [3, 1, 3]); // intensities can be omitted here
'd̜e͔f̡͖̆ͨ̀̕a̴̕ū̸̒ͬ͟͜l̟ͬ̓̌̀͜͟t̢͑̇'

dye.zalgo('intense', [6, 3, 6]);
'ḭ͙̘̓͒ͩ͠n̢̛͕̰̗ͩ̆͗ͧ͋ṫ̨̀̀͘ȅ͔̮̊̈̎͡ǹ͕̥͜s̶̲̺ͥ̓ͮ͘͠͝͞e̫̩̲̍ͩͬ҉̵̴́'
```

Note that windows seem impenetrable by zalgo and might display question marks.

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
