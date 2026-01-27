#!/usr/bin/env node

import { Command } from 'commander'

// Declare the program

const program = new Command()

// Add actions into that CLI

program
    .argument('<string>', 'string to split')
    .option("-c, --capitalize", "Capitalize the message")
    .action(
        (
            message: string,
            opts: {
                capitalize?: boolean
            },
        ) => {
            if (opts.capitalize) {
                console.log(message.toUpperCase())
            } else {
                console.log(message)
            }
        },
    )
    .description('Say hello')

program
    .command('add <numbers...>')
    .action((numbers: string[]) => {
        const nums: number[] = numbers.map(Number)
        const total = nums.reduce((a, b) => a + b, 0)
        console.log(`Total: ${total}`)
    })
    .description('Add numbers and log the total')

program
    .command('get-max-number <numbers...>')
    .action((numbers: number[]) => {
        const max = Math.max(...numbers)
        console.log(`Max: ${max}`)
    })
    .description('Add numbers and log the total')


// Execute the CLI with the given arguments

program.parse(process.argv)