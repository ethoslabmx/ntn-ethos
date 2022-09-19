if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
// reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })
// Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
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
