const ts = require('typescript');
const fs = require('fs');
const glob = require('glob');
const path = require('path');

function readCompilerOptions(configPath, rootDir) {
  configPath = path.resolve(rootDir, configPath);
  const loaded = ts.readConfigFile(configPath, file => {
    const read = ts.sys.readFile(file);
    if (!read) {
      throw new Error(
        `ENOENT: no such file or directory, open '${configPath}'`,
      );
    }
    return read;
  });
  if (loaded.error) {
    throw new Error(JSON.stringify(loaded.error, null, 4));
  }

  const basePath = path.dirname(configPath); // equal to "getDirectoryPath" from ts, at least in our case.
  const parsedConfig = ts.parseJsonConfigFileContent(
    loaded.config,
    ts.sys,
    basePath,
  );
  if (parsedConfig.errors.length > 0) {
    const formattedErrors = formatTscParserErrors(parsedConfig.errors);
    throw new Error(
      `Some errors occurred while attempting to read from ${configPath}: ${formattedErrors}`,
    );
  }
  return parsedConfig.options;
}

function check (tsconfigPath) {
  const tsConfigObj = readCompilerOptions(tsconfigPath, '');
  const config = ts.parseJsonSourceFileConfigFileContent(tsConfigObj, ts.sys, tsconfigPath.replace('tsconfig.json', ''));
  
  const program = ts.createProgram(config.fileNames, tsConfigObj);
  
  let allDiagnostics = ts.getPreEmitDiagnostics(program);
  
  allDiagnostics.forEach(diagnostic => {
      if (diagnostic.file) {
          let { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
          let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
          console.error(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
      }
      else {
          console.error(`${ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')}`);
      }
  });
  
  return allDiagnostics;
}

describe('typescript compile', () => {
  for (const tsconfigPath of glob.sync('./packages/*/tsconfig.json')) {
    it('checking: ' + tsconfigPath, () => {
      const res = check(tsconfigPath);
      expect(res.length).toEqual(0);
    });
  }
});
