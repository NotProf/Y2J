# Y2J Converter CLI

## Overview

The Y2J is a command-line tool built in Node.js that enables you to easily convert between JSON and YAML formats.
This tool provides two main commands: toJson and toYaml, each with the option to specify an output file.

## Installation

You can install the Y2J globally using npm:

```bash
npm install -g y2j
```

## Usage

### Convert JSON to YAML

To convert a JSON file to YAML, use the `toYaml` command. You can also specify an output file using the `--output` option:

```bash
y2j toJson input.json --output output.yaml
```

- `input.json`: The input JSON file to convert.
- `--output output.yaml`: (Optional) The name of the output YAML file. If not provided, the converted YAML will be printed to the console.

### Convert YAML to JSON

To convert a YAML file to JSON, use the `toJson` command. You can also specify an output file using the `--output` option:

```bash
y2j toYaml input.yaml --output output.json
```

- `input.yaml`: The input YAML file to convert.
- `--output output.json`: (Optional) The name of the output JSON file. If not provided, the converted JSON will be printed to the console.

## Examples

### Example 1: Convert JSON to YAML

```bash
y2j toJson data.json --output data.yaml
```

This command will convert the `data.json` file to YAML and save it as `data.yaml`.

## Example 2: Convert YAML to JSON

```bash
y2j toYaml config.yaml --output config.json
```

This command will convert the `config.yaml` file to JSON and save it as `config.json`.

### Example 3: Convert JSON to YAML (Print to Console)

```bash
y2j toJson input.json
```

This command will convert the `input.json` file to YAML and print the result to the console without saving it to a file.
