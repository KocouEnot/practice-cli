import type { Command } from "commander"

export type GlobalOptions = {
    verbose?: boolean
}

export type Logger = {
    debug: (...args: unknown[]) => void;
    error: (...args: unknown[]) => void;
}

export function getLogger(program: Command): Logger {
    const { verbose } = program.opts<GlobalOptions>()
    return {
        debug: (...args) => { if (verbose) console.error(...args) },
        error: (...args) => console.error(...args),
    }
}