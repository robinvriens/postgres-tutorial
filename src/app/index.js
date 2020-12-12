const Koa = require('koa')
const morgan = require('koa-morgan')
const router = require('routing')
const database = require('database')

const app = new Koa()

app.use(morgan('combined'))
app.use(router.routes())

exports.start = async () => {
  try {
    await database.start()
    console.log('Database connected')
    this.server = await app.listen(3000)
    console.log('Server is running on port, 3000')
  } catch (error) {
    console.log(error)
  }
}

exports.close = async () => {
  await this.server.close()
  await database.close()
}
