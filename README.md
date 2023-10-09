# Y2J Converter CLI

## Overview

The Y2J is a command-line tool built in Node.js that enables you to easily convert between JSON and YAML formats.
This tool provides two main commands: toJson and toYaml, each with the option to specify an output file.

## Installation

You can install the Y2J globally using npm:

```bash
npm install -g y2j-cli
```

## Usage

### Convert JSON to YAML

To convert a JSON file to YAML, use the `toYaml` command. You can also specify an output file using the `--output` option:

```bash
y2j to-yaml input.json --output output.yaml
```

- `input.json`: The input JSON file to convert.
- `--output output.yaml`: (Optional) The name of the output YAML file. If not provided, the converted YAML will be printed to the console.

### Convert YAML to JSON

To convert a YAML file to JSON, use the `toJson` command. You can also specify an output file using the `--output` option:

```bash
y2j to-json input.yaml --output output.json
```

- `input.yaml`: The input YAML file to convert.
- `--output output.json`: (Optional) The name of the output JSON file. If not provided, the converted JSON will be printed to the console.

## Examples

### Example 1: Convert JSON to YAML

```bash
y2j to-json data.yaml --output data.json
```

This command will convert the `data.yaml` file to JSON and save it as `data.json`.

## Example 2: Convert YAML to JSON

```bash
y2j to-yaml config.json --output config.yaml
```

This command will convert the `config.json` file to YAML and save it as `config.yaml`.

### Example 3: Convert JSON to YAML (Print to Console)

```bash
y2j to-json input.yaml
```

This command will convert the `input.yaml` file to JSON and print the result to the console without saving it to a file.
