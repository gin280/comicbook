export default function (router) {
  router.map({
    '*': {
      component (resolve) {
        require(['./views/welcome'], resolve)
      }
    },
    '/': {
      component (resolve) {
        require(['./views/welcome'], resolve)
      }
    },
    '/home': {
      component (resolve) {
        require(['./views/home'], resolve)
      }
    },
    '/home/details': {
      component (resolve) {
        require(['./views/home/details'], resolve)
      }
    },
    '/search': {
      component (resolve) {
        require(['./views/search'], resolve)
      }
    },
    '/list': {
      component (resolve) {
        require(['./views/list'], resolve)
      }
    },
    '/user': {
      component (resolve) {
        require(['./views/user'], resolve)
      }
    },
    '/user/message': {
      component (resolve) {
        require(['./views/user/message'], resolve)
      }
    },
    '/user/parallax': {
      component (resolve) {
        require(['./views/user/parallax'], resolve)
      }
    },
    '/user/details/:itemId': {
      name: 'item',
      component (resolve) {
        require(['./views/user/details'], resolve)
      }
    }
  })

  router.beforeEach(({to, from, next}) => {
    let toPath = to.path
    let fromPath = from.path
    console.log('to: ' + toPath + ' from: ' + fromPath)
    if (toPath.replace(/[^/]/g, '').length > 1) {
      router.app.isIndex = false
    } else {
      let depath = toPath === '/' || toPath === '/invite' || toPath === '/rank'
      router.app.isIndex = depath ? 0 : 1
    }
    next()
  })
}
