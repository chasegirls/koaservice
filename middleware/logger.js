const { dateFormat } = require('../util')

async function logger(ctx, next) {
  const date = `[${dateFormat(new Date(), 'yyyy/MM/dd hh:mm:ss')}]`
  ctx.log = {
    success: function(o) {
      console.log(`${date} ${o}`)
    },
    error: function(o) {
      console.error(`${date} ${o}`)
    }
  }
  ctx.log.success(`${ctx.method} ${ctx.originalUrl}`)
  await next()
}

module.exports = logger