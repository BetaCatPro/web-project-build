#!/usr/bin/env node
checkDebug()

const commander = require('commander')
const pkg = require('../package.json')
const checkNode = require('../lib/checkNode')
const startServer = require('../lib/start/startServer')
const build = require('../lib/build/build')

const MIN_NODE_VERSION = '14.4.0'

const { program } = commander

function checkDebug() {
    if (
        process.argv.indexOf('--debug') >= 0 ||
        process.argv.indexOf('-d') >= 0
    ) {
        process.env.LOG_LEVEL = 'verbose'
    } else {
        process.env.LOG_LEVEL = 'info'
    }
}

;(async () => {
    try {
        if (!checkNode(MIN_NODE_VERSION)) {
            throw new Error(`Please update node version to ${MIN_NODE_VERSION}`)
        }

        program
            .command('start')
            .description('start web-project-build service')
            .allowUnknownOption()
            .action(startServer)

        program
            .command('build')
            .description('build project')
            .allowUnknownOption()
            .action(build)

        program.option('-d, --debug', '开启调试模式')

        program.version(pkg.version)
        program.parse(process.argv)
    } catch (e) {
        console.log(e.message)
    }
})()
