'use strict'
const path = require('path')
const argvs = process.argv.slice(2)

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}
console.log(argvs)
module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      '@comp': resolve(`src/components`),
    }
  },
}
