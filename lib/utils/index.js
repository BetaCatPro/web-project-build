const fg = require('fast-glob')
const path = require('path')
const fs = require('fs')
const log = require('./log')
const DEFAULT_CONFIG_FILE = ['wpb-config.(mjs|js|json)']

function getConfigFile({ cwd = process.cwd() } = {}) {
    const [configFile] = fg.sync(DEFAULT_CONFIG_FILE, { cwd, absolute: true })
    log.verbose('configFile', configFile)
    return configFile
}

module.exports = {
    getConfigFile
}
