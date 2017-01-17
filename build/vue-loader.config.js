module.exports = {
  preserveWhitespace: false,
  buble: {
    // enable object spread operator
    // NOTE: you need to provide Object.assign polyfill yourself!
    objectAssign: 'Object.assign',

  },
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    })
  ]
}
