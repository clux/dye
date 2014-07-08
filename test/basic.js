var set = require('subset')
  , dye = require('../');

exports.codes = function (t) {
  t.equal(dye.bold('XXX'), '\x1B[1mXXX\x1B[22m', dye.bold('bold'));
  t.equal(dye.italic('XXX'), '\x1B[3mXXX\x1B[23m', dye.italic('italic'));
  t.equal(dye.underline('XXX'), '\x1B[4mXXX\x1B[24m', dye.italic('underline'));
  t.equal(dye.inverse('XXX'), '\x1B[7mXXX\x1B[27m', dye.italic('italic'));
  t.equal(dye.white('XXX'), '\x1B[37mXXX\x1B[39m', dye.white('white'));
  t.equal(dye.grey('XXX'), '\x1B[90mXXX\x1B[39m', dye.grey('grey'));
  t.equal(dye.black('XXX'), '\x1B[30mXXX\x1B[39m', dye.black('black'));
  t.equal(dye.blue('XXX'), '\x1B[34mXXX\x1B[39m', dye.blue('blue'));
  t.equal(dye.cyan('XXX'), '\x1B[36mXXX\x1B[39m', dye.cyan('cyan'));
  t.equal(dye.green('XXX'), '\x1B[32mXXX\x1B[39m', dye.green('green'));
  t.equal(dye.magenta('XXX'), '\x1B[35mXXX\x1B[39m', dye.magenta('magenta'));
  t.equal(dye.red('XXX'), '\x1B[31mXXX\x1B[39m', dye.red('red'));
  t.equal(dye.yellow('XXX'), '\x1B[33mXXX\x1B[39m', dye.yellow('yellow'));
  t.equal(dye.stripColors(dye.red("abcdefghijklmnop")), "abcdefghijklmnop", "strip");
  t.done();
};

exports.zalgo = function (t) {
  var str = 'he comes';
  var zalgd = dye.zalgo(str, [10,10,10]);
  t.ok(zalgd, "zalgo works");
  t.ok(zalgd.length >= str.length, "zalgolizer generally expands the string");
  var souls = dye.zalgo.souls();
  var allSouls = [].concat(souls[0], souls[1], souls[2]);

  var diff = set.nub(set.difference(zalgd.split(''), str.split('')));
  t.ok(set.isSubsetOf(diff, allSouls), "(zalgo(str)) \\ str) ⊆ souls");

  // test that max rolls work
  var zalgHi = dye.zalgo(str, 1, [1, 0, 0]);
  var diffHi = set.nub(set.difference(zalgHi.split(''), str.split('')));
  t.ok(set.isSubsetOf(diffHi, souls[0]), "(zalgo(str, High) \\ str) ⊆ soulsHigh");

  var zalgMid = dye.zalgo(str, 1, [0, 1, 0]);
  var diffMid = set.nub(set.difference(zalgMid.split(''), str.split('')));
  t.ok(set.isSubsetOf(diffMid, souls[1]), "(zalgo(str, Mid) \\ str) ⊆ soulsMid");

  var zalgLo = dye.zalgo(str, 1, [0, 0, 1]);
  var diffLo = set.nub(set.difference(zalgLo.split(''), str.split('')));
  t.ok(set.isSubsetOf(diffLo, souls[2]), "(zalgo(str, Low) \\ str) ⊆ soulsLow");

  t.done();
};
