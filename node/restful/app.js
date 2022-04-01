/**
 * 
 * 创建 http 服务，简单返回
 */
const server = http.createServer(async (req, res) => {
  // 获取 get 参数
  const pathname = url.parse(req.url).pathname;
  paramStr = url.parse(req.url).query,
  param = querystring.parse(paramStr);
  // 过滤非拉取用户信息请求
  if('/v1/userinfos' != pathname) {
    return setResInfo(res, false, 'path not found');
  }
  // 参数校验，没有包含参数时返回错误
  if(!param || !param['user_ids']) {
    return setResInfo(res, false, 'params error');
  }
});
