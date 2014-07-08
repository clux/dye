module.exports = process.env.DYE_COV
  ? require('./lib-cov/dye.js')
  : require('./lib/dye.js');
