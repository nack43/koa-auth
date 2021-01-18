const jwt = require('jsonwebtoken')

module.exports = async (ctx) => {
  const {username, password} = ctx.request.body

  if (!username) ctx.throw(422, 'Username required')
  if (!password) ctx.throw(422, 'Password required')

  // should be check user exist in db

  // payload: data i want to store in the token
  // secret: key we sign the token with
  if (password === 'pass') {
    const payload = {userId: 1}
    const token = jwt.sign(payload, 'very secure')
    ctx.body = token
  } else {
    ctx.throw(401, 'Incorrect password')
  }
}
