import { Command } from 'commander'
import { getLogger } from "../logger"


export function registerGetMaxNumberCommand(program: Command) {
    program
        .command('get-max-number <numbers...>')
        .description('Print max number from list')
        .action((numbers: string[]) => {
            const log = getLogger(program)

            log.debug('[get-max-number] command started')
            log.debug('[get-max-number] raw args:', numbers)

            const nums = numbers.map(Number)

            if (nums.some(Number.isNaN)) {
                log.error('Error: all arguments must be numbers')
                process.exitCode = 1
                return
            }

            log.debug('[get-max-number] parsed numbers:', nums)

            const maxNum = Math.max(...nums)

            log.debug('[get-max-number] result:', maxNum)

            console.log(maxNum)
        })
}