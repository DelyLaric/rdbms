import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/views/routes'

Vue.use(Router)

export default new Router({
  routes
})

function getValue (value) {
  return typeof value === 'number' ? value.toString() : value
}

Router.prototype.hasMatched = function ({name, params}) {
  const route = this.app.$route
  const hasMatched = route.matched.findIndex(
    route => route.name === name
  ) !== -1

  if (!hasMatched || !params) return hasMatched

  for (let key in params) {
    if (
      getValue(params[key]) !==
      getValue(route.params[key])
    ) {
      return false
    }
  }

  return true
}
