import { Command } from 'commander'
import { getLogger } from "../logger"

export function registerAddCommand(program: Command) {
    program
        .command('add <numbers...>')
        .description('Add number and log the total')
        .action((numbers: string[]) => {
            const log = getLogger(program)

            log.debug('[add] started')
            log.debug('[add] raw args:', numbers)

            const nums = numbers.map((n) => Number(n))

            if (nums.some((n) => Number.isNaN(n))) {
                log.error('Error: all arguments must be numbers')
                process.exitCode = 1
                return
            }

            const total = nums.reduce((a, b) => a + b, 0)

            log.debug('[add] result:', total)

            console.log(total)
        })
}