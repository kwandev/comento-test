<template>
  <div id="app">
    <c-header />

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import cHeader from './components/base/cHeader'

export default {
  components: {
    cHeader
  }
}
</script>

<style lang="scss">
@import './assets/scss/bootstrap/custom.scss';
@import './assets/scss/common.scss';
</style>
