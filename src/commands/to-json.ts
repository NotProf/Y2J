import yaml from 'yaml';
import fs from 'fs';
import { BaseOptions } from '../types/commands';
import { checkFileExtension } from '../utils/utils';

export function toJson(input: string, options: BaseOptions) {
  checkFileExtension(input, ['yaml', 'yml']);

  const dataToParse = fs.readFileSync(input, 'utf8');
  const parsedData = yaml.parse(dataToParse);
  const jsonString = JSON.stringify(parsedData, null, 2);

  if (options.output) {
    fs.writeFileSync(options.output, jsonString);
    return;
  }

  process.stdout.write(jsonString);
}
