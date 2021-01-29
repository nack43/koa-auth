module.exports = async (ctx) => {
  const { userId } = ctx.request.jwtPayload
  // fetch some data with userId

  ctx.body = {userId, message: 'reeeee'}
}
