import Router from 'koa-router'

const router = new Router({
  prefix: '/city'
})

router.get('/list', async (ctx) => {
  ctx.body = ['上海']
})

export default router
