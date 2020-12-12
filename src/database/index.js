require('dotenv').config()

const { Pool } = require('pg')

exports.start = async () => {
  const host = process.env.PG_HOST
  const user = process.env.PG_USER
  const password = process.env.PG_PASSWORD
  const database = process.env.PG_DATABASE
  const port = process.env.PG_PORT

  this.pool = await new Pool({ host, user, password, database, port })
}

exports.close = async () => {
  await this.pool.end()
}

exports.query = async (q, data) => {
  return await this.pool.query(q, data)
}
