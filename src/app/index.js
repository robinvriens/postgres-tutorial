const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = Router()

router.get('/test', ctx => {
  ctx.body = 'test'
})

app.use(router.routes())

exports.start = async () => {
  try {
    this.server = await app.listen(3000)
  } catch (error) {
    console.log(error)
  }
}
