const ts = require('typescript');
const fs = require('fs');
const glob = require('glob');

function check (tsconfigPath) {
  const tsconfig = fs.readFileSync(tsconfigPath, 'utf8');
  const tsConfigObj = ts.parseConfigFileTextToJson(tsconfigPath, tsconfig);
  
  const config = ts.parseJsonSourceFileConfigFileContent(tsConfigObj, ts.sys, tsconfigPath.replace('tsconfig.json', ''));
  
  const program = ts.createProgram(config.fileNames, tsConfigObj);
  
  let allDiagnostics = ts.getPreEmitDiagnostics(program);
  
  allDiagnostics.forEach(diagnostic => {
      if (diagnostic.file) {
          let { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
          let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
          console.log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
      }
      else {
          console.log(`${ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')}`);
      }
  });
  
  return allDiagnostics.length === 0;
}


let ok = true;
for (const tsconfigPath of glob.sync('./packages/*/tsconfig.json')) {
  console.log('checking: ', tsconfigPath);
  ok &= check(tsconfigPath);
}

let exitCode = ok ? 0 : 1;
console.log(`\nProcess exiting with code '${exitCode}'.`);
process.exit(exitCode);
