const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const errorHandler = require('./errorHandler')
const authRoute = require('./routes/auth')
const authenticated = require('./middleware/authenticated') 
const petsRoute = require('./routes/pets')

const app = new Koa()
const router = new Router()

app.use(errorHandler)

router.post('/auth', bodyParser(), authRoute)
router.get('/my-pets', authenticated, petsRoute)

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000)


