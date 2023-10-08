import { green, red } from 'colorette';
import { BaseOptions, TCommands } from '../types/commands.js';

export function handleErrors(error: Error) {
  process.stderr.write(red(error.message) + '\n\n');
}

export function commandWrapper(input: string, options: BaseOptions, command: TCommands) {
  try {
    command(input, options);
    process.stdout.write(`\n\n${green('Conversion complete.')}\n\n`);
  } catch (e: any) {
    handleErrors(e);
  }
}
