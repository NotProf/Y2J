import { toJson } from '../commands/to-json.js';
import { toYaml } from '../commands/to-yaml.js';

export type TCommands = typeof toJson | typeof toYaml;

export type BaseOptions = {
  output?: string;
};
