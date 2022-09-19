export default function (to, from, savedPosition) {
  return new Promise((resolve, reject) => {

      if (savedPosition) {
        setTimeout(() => {
          resolve(savedPosition)
        }, 900)
      } else {
        let position = {}
        if (to.hash) {
          position.selector = to.hash
          if (to.hash === '#anchor2') {
            position.offset = { y: 100 }
          }
        }
        else {
          position = { x: 0, y: 0 };
        }
        resolve(position)
      }


  })
}
