<template>
  <div
    v-if="isInitialized"
    class="full-container is-flex is-flex-column"
    style="height: 100vh; width: 100vw"
  >
    <Topbar />

    <Notification ref="notification"/>

    <div
      v-if="!isNetworkError"
      class="is-flex-auto"
    >
      <router-view />
    </div>
  </div>
  <div v-else>
    <div class="loading"></div>
  </div>
</template>

<script>
import token from './bootstrap/token'
import Topbar from './layout/Topbar'
import Notification from '@/components/Notification'

export default {
  name: 'App',

  mixins: [token],

  components: {
    Topbar,
    Notification: Notification.component
  },

  computed: {
    isInitialized () {
      return this.$store.state.token.isLoaded
    },

    isNetworkError () {
      return this.$store.state.error.network
    }
  },

  updated () {
    Notification.register(this.$refs.notification)
  }
}
</script>

<style lang="sass">
@import '@/assets/index.sass'
</style>
