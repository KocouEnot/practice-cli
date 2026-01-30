#!/usr/bin/env node

import { Command } from 'commander'

import { registerSayCommand } from './commands/say'
import { registerAddCommand } from './commands/add'
import { registerGetMaxNumberCommand } from './commands/getMaxNumber'
import { version } from '../package.json'

// Declare the program

const program = new Command()

program
    .option('-v, --verbose', 'Show detailed output')
    .name('practice')
    .description('My practice CLI')
    .version(version)

registerSayCommand(program)
registerAddCommand(program)
registerGetMaxNumberCommand(program)


// Execute the CLI with the given arguments

program.parse(process.argv)