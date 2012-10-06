# Dye [![Build Status](https://secure.travis-ci.org/clux/logule.png)](http://travis-ci.org/clux/dye)

Dye is a coloring/styling library for wrapping common ANSI escape sequences around text that produce colors/styling when sent to `stdout`. It also comes with a much more customizable and easy to use [zalgolizer](#zalgo)

The interface mostly mirrors the popular `colors` module on `npm`, but does not introduce implicit global dependencies in your code via `String.prototype`, and has been cleaned up for terminal use only.

## Safe Usage
Basic usage is simply `dye.red(str)`. All the exported colors with `bold` (aka bright) variants should work everywhere. Here we test all the methods in both variants.

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

## Fun / Experimental Stuff
The `inverse`, `underline`, `italic` functions have sparse support (no worky on windows).

### zebra()
Alternates between unwrapped chars and `inverse` applied chars to create a zebra effect.
Because of the reliance on `inverse`, this is not widely supported.

### rainbow()
Cycles through `red`, `yellow`, `green`, `blue` and `magenta` to create a rainbow effect on text.

Direct use of this should work everywhere, but a bold/bright version, i.e. `dye.bold(dye.rainbow('bright rainbow'))` might fail depending on how escape code parsing handles nesting in your terminal (no worky on windows).

### zalgo()
[H̸̡̪̯ͨ͊̽̅̾̎Ȩ̬̩̾͛ͪ̈́̀́͘ ̶̧̨̱̹̭̯ͧ̾ͬC̷̙̲̝͖ͭ̏ͥͮ͟Oͮ͏̮̪̝͍M̲̖͊̒ͪͩͬ̚̚͜Ȇ̴̟̟͙̞ͩ͌͝S̨̥̫͎̭ͯ̿̔̀ͅ](http://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags/1732454#1732454).

This is a uniform-clustered zalgolizer. It picks up to a specified number of symbols from each [subarray of souls](https://github.com/clux/dye/blob/master/dye.js#L42) at uniform randomness (with probability `p`), or picks from it no symbols at all (with probability `1-p`).

The probability lets you specify how clustered you want the symbols (`p=1` ⇒ completely uniform distribution, `p=0.5` ⇒ on average half the letters get nothing, the rest are uniformly distributed)

The different [soul types](https://github.com/clux/dye/blob/master/dye.js#L42) contain symbols that go above, in the middle of, or underneath the text respectively.

Some examples

```js
dye.zalgo('default zalgolization'); // p=.2, maxPicks = [5, 3, 5]
'd̠̤̟̰efauḻt z͂̈al̊̚g͈oli̷za̪͉t̽̅i̘̪̫̼on'

dye.zalgo('less clustered zalgolization', 0.7, [2, 1, 2]);
'l̠̇es̞̏s ̌cl̟usṯer͑eͦd ̲z̮̅aḻ̽g̞o̮l͉̉iza̐t̄iͅỏ͖n͖'

dye.zalgo('intense, clustered zalgolization', 0.2, [10, 5, 10])
'i̛̩͖̤̯̮͠ͅn̷͟t͢en̝͎͇͙̭sͧͤͨ̓͗̾e͑̐ͫ̒ͨ̓ͮ̏̑, c̓lů͚̺̦̰̪͓͐ͯ̈ster͍̤͖͗͌̇ͨͦͥ̚é͜d̨̡͘͞ za̋ͬͫlgͧ̏ͧ̃ͫͭͯ̈̆ol̲͕̳͓͍̯̠i̢͢z̙ation͡'
```

A windows command line is impenetrable by zalgo and will display question marks instead.

Finally, if you would like to sanitize / attempt to exorcise such a string, you can take the difference with the characters available via the exported `souls` function.

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
