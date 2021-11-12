const performance = require('perf_hooks').performance;
const { collection } = require('static-build/lib/build');

async function main() {
  console.time('build');
  const pages = await collection('posts', '', './content/_posts', './dist');
  console.timeEnd('build');
}

main();
