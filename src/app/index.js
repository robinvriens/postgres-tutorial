const Koa = require('koa')
const morgan = require('koa-morgan')
const router = require('routing')

const app = new Koa()

app.use(morgan('combined'))
app.use(router.routes())

exports.start = async () => {
  try {
    this.server = await app.listen(3000)
  } catch (error) {
    console.log(error)
  }
}
