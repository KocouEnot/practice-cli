#!/usr/bin/env node

import { Command } from 'commander'

export function registerSayCommand(program: Command) {
    program
        .command('say <message>')
        .option('-c, --capitalize', 'Capitalize the message')
        .description('Print message')
        .action(
            (message: string, opts: { capitalize?: boolean }) => {
                const { verbose } = program.opts<{ verbose?: boolean }>()

                if (verbose) {
                    console.error('[say] command started')
                    console.error('[say] message received:', message)
                }

                if (opts.capitalize) {
                    if (verbose) {
                        console.error('[say] received the flag --capitalize (-c)')
                        console.error('[say] result:', message.toUpperCase())
                    }
                    console.log(message.toUpperCase())
                } else {
                    if (verbose) {
                        console.error('[say] result:', message)
                    }
                    console.log(message)
                }
            }
        )
}