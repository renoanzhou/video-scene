const { spawn } = require('child_process');
const fs = require('fs');
const path = './packages';

const excludeDir = ['utils'];



// require('zx/globals');

// await $`cat package.json | grep name`


function getDirNames(dir) {
  return fs.readdirSync(dir).filter((item) => {
    return excludeDir.includes(item) === false;
  });
}

console.log(process.env);
