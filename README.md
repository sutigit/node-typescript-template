# Simple Node TypeScript Template

## Overview

This is a basic Node.js project template using TypeScript to demonstrate a simple setup. It uses `ts-node` for TypeScript execution and REPL for node.js, with source map and native ESM support. In other words, copy this template, do `npm install` and you should be good to go, or setup manually.

## Table of contents


## Requirements

- Node.js (>= 14)
- npm (>= 6)

## Installation

### Copy repository
1. Copy repository
2. Install dependencies: `npm install`
3. Navigate to project folder

### Manual installation

1. Create project folder: `mkdir project-name`
2. init node project: `npm init`
2. Install dependencies:
  ```
    # Locally in your project.
    npm install -D typescript
    npm install -D ts-node

    # Or globally with TypeScript.
    npm install -g typescript
    npm install -g ts-node

    # Depending on configuration, you may also need these
    npm install -D tslib @types/node
  ```
3. Create typescript config file: `tsc --init`
4. Make sure in package.json the `main` is set to the entry file. Example:
```
{
  "name": "node_typescript",
  "version": "1.0.0",
  "main": "src/main.ts",
  // ...
}
```
5. For building, adjust settings in `tsconfig.json`
    1. Set source path. Look for entry `rootDir` and change to: `"rootDir": "./src"`
    2. Set build path. Look for entry `outDir` and change to: `"outDir": "./build"`

6. Make typescript ignore everything except the src folder when building. Add to the bottom of `tsconfig.json`:
```
  {
    // ...
    "skipLibCheck": true                                 
  },
  "include": [
    "src"
  ]
```
7. Make sure you have an appropriate .gitignore in the root folder.