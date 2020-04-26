'use strict'

/**
 * Source-map-support mimics node's stack trace making debugging easier
 * ts-node register helps importing and compiling TypeScript modules into JS
 */
require('source-map-support').install()
require('ts-node').register()

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = require('./gatsby-config.ts')
