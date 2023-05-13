#!/usr/bin/env node

const { program } = require('commander');

program
    .option('--first')
    .option('-s, --separator <char>');

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;
console.log(program.args[0].split(options.separator, limit));

// $ node split.js -s / --fits a/b/c
// error: unknown option '--fits'
// (Did you mean --first?)
// $ node split.js -s / --first a/b/c
//     [ 'a' ]
