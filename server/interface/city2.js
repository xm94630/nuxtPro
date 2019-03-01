import Router from 'koa-router'

const router = new Router({
  prefix: '/city'
})

router.get('/list2', async (ctx) => {
  ctx.body = {
    list: ['绍兴', '上虞']
  }
})

export default router
