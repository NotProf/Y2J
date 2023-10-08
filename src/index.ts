import { Command } from 'commander';
import { toJson } from './commands/to-json.js';
import { commandWrapper } from './utils/command-wrapper.js';
import { toYaml } from './commands/to-yaml.js';
const program = new Command();

program
  .name('Y2J')
  .version('0.0.1')
  .description('CLI for converting json to yaml and yaml to json');

program
  .command('to-json')
  .description('Convert YAML to JSON')
  .argument('<string>', 'Path to yaml file')
  .option('-o, --output , <string>', 'Path to output file')
  .action((argument, option) => commandWrapper(argument, option, toJson));

program
  .command('to-yaml')
  .description('Convert JSON to YAML')
  .argument('<string>', 'Path to json file, or JSON string (use -s option to pass string content)')
  .option('-o, --output , <string>', 'Path to output file')
  .action((argument, option) => commandWrapper(argument, option, toYaml));

program.parse();
