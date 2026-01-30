#!/usr/bin/env node

import { Command } from 'commander'

export function registerAddCommand(program: Command) {
    program
        .command('add <numbers...>')
        .description('Add number and log the total')
        .action((numbers: string[]) => {
            const { verbose } = program.opts<{ verbose?: boolean }>()

            if (verbose) {
                console.error('[add] command started')
                console.error('[add] raw args:', numbers)
            }

            const nums = numbers.map((n) => Number(n))

            if (nums.some((n) => Number.isNaN(n))) {
                console.error('Error: all arguments must be numbers')
                process.exitCode = 1
                return
            }

            if (verbose) {
                console.error('[add] parsed numbers:', nums)
            }

            const total = nums.reduce((a, b) => a + b, 0)

            if (verbose) {
                console.error('[add] result:', total)
            }

            console.log(`Total: ${total}`)
        })
}