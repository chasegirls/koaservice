async function resFormat(ctx, next) {
  ctx.successJson = function(data) {
    ctx.body = { code: 0, data}
  }
  ctx.errorJson = function(data, code = -1) {
    ctx.body = { code, data }
  }
  await next()
}

module.exports = resFormat