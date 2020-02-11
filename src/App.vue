<template>
  <div id="app">
    <c-header />

    <main class="main">
      <div class="container">
        <router-view />
      </div>
    </main>
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

.main {
  padding-top: 70px;
}

@media screen and (max-width: $contents-width-m) {
  .main {
    padding-top: 45px;
  }
}
</style>
