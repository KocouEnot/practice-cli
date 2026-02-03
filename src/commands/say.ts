import { Command } from 'commander'
import { getLogger } from "../logger"


export function registerSayCommand(program: Command) {
    program
        .command('say <message>')
        .option('-c, --capitalize', 'Capitalize the message')
        .description('Print message')
        .action(
            (message: string, opts: { capitalize?: boolean }) => {
                const log = getLogger(program)

                log.debug('[say] command started')
                log.debug('[say] message received:', message)


                if (opts.capitalize) {
                    log.debug('[say] received the flag --capitalize (-c)')
                    log.debug('[say] result:', message.toUpperCase())
                    console.log(message.toUpperCase())
                } else {
                    log.debug('[say] result:', message)
                    console.log(message)
                }
            }
        )
}