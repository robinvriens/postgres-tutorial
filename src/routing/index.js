const Router = require('koa-router')
const database = require('database')

const router = new Router()

router.get('/test', async ctx => {
  console.log(await database.query('SELECT 1 + 1 AS result'))
})

module.exports = router
