import { BaseOptions } from '../types/commands';
import { checkFileExtension } from '../utils/utils';
import yaml from 'yaml';
import fs from 'fs';

export function toYaml(input: string, options: BaseOptions) {
  const dataToParse = fs.readFileSync(input, 'utf8');
  checkFileExtension(input, ['json']);

  const jsonData = JSON.parse(dataToParse);
  const doc = new yaml.Document();
  doc.contents = jsonData;
  const yamlString = doc.toString();

  if (options.output) {
    fs.writeFileSync(options.output, yamlString);
    return;
  }

  process.stdout.write(yamlString);
}
