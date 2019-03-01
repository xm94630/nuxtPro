import Router from 'koa-router'

const router = new Router({
  prefix: '/city'
})

router.get('/list', async (ctx) => {
  ctx.body = {
    list: ['默认城市上海', '默认城市北京']
  }
})

export default router
