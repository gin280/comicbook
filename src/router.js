export default function (router) {
  router.map({
    '*': {
      component (resolve) {
        require(['./views/home'], resolve)
      }
    },
    '/': {
      component (resolve) {
        require(['./views/home'], resolve)
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
    '/user': {
      component (resolve) {
        require(['./views/user'], resolve)
      }
    }
  })
}
