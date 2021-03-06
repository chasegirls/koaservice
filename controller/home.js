var Router = require('koa-router')
var router = new Router({
  prefix: '/home'
})
const { homeService } = require('../service')

router.get('/', function (ctx, next) {
  //  接收参数name
  const { name } = ctx.query
  // ctx.successJson(homeService.getHomeData(name))
  ctx.body='测试代码'
})
router.get('/test',function(ctx,next){
  const { name } = ctx.query
  ctx.successJson(homeService.getHomeData(name))
})

router.get('/error', function (ctx, next) {
  ctx.log.error('服务器发生错误')
  ctx.errorJson('未知错误')
})

module.exports = router