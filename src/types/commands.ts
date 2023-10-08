import { toJson } from '../commands/to-json';
import { toYaml } from '../commands/to-yaml';

export type TCommands = typeof toJson | typeof toYaml;

export type BaseOptions = {
  output?: string;
};
