#!/usr/bin/env node
const program = require('commander')
program
  .version(require('../package.json').version)
  .usage('<command> [options]')
program
  .command('list')
  .description('查看所有的模版')
  .alias('l')
  .action(() => {
    require('../lib/list')()
  })
program
  .command('init')
  .description('生成一个新项目')
  .alias('i')
  .action(() => {
    require('../lib/init')()
  })
program
  .command('plop')
  .description('我要自己学习一下不行么')
  .alias('i')
  .action(() => {
    require('../lib/plop')()
  })
program
  .parse(process.argv)
 
if(!program.args.length){
  program.help()
}