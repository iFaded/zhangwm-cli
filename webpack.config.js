// 费时分析
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const config = {
  
}

module.exports = (env, argv) => {
  // 这里可以通过不同的模式修改 config 配置


  return smp.wrap(config);
}
