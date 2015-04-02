var dye = require(process.env.DYE_COV ? '../dye-cov.js' : '../');

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

