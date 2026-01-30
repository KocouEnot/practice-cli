#!/usr/bin/env node

import { Command } from 'commander'

export function registerGetMaxNumberCommand(program: Command) {
    program
        .command('get-max-number <numbers...>')
        .description('Print max number from list')
        .action((numbers: string[]) => {
            const { verbose } = program.opts<{ verbose?: boolean }>()

            if (verbose) {
                console.error('[get-max-number] command started')
                console.error('[get-max-number] raw args:', numbers)
            }

            const nums = numbers.map(Number)

            if (nums.some(Number.isNaN)) {
                console.error('Error: all arguments must be numbers')
                process.exitCode = 1
                return
            }

            if (verbose) {
                console.error('[get-max-number] parsed numbers:', nums)
            }

            const maxNum = Math.max(...nums)

            if (verbose) {
                console.error('[get-max-number] result:', maxNum)
            }

            console.log(`Max: ${maxNum}`)
        })
}