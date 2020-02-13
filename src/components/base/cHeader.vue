<template>
  <header class="header">
    <div class="container" :class="subPage">
      <h1 class="title">[2020-02-13] 이경환</h1>
      <btn icon class="btn__back" @click="back">
        &lt;
      </btn>

      <b-dropdown size="lg" variant="link" right toggle-class="text-decoration-none" no-caret @click.stop.prevent>
        <template v-slot:button-content>
          <b-icon-gear class="icon__setting" />
          <span class="sr-only">Search</span>
        </template>
        <b-dropdown-text>
          <b-form-checkbox switch v-model="toggle" @change="changeAdsView">광고끄기</b-form-checkbox>
        </b-dropdown-text>
      </b-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CHeader',
  data() {
    return {
      toggle: false
    }
  },
  computed: {
    ...mapState('ads', {
      adsView: 'adsView'
    }),
    subPage() {
      return {
        sub_page: this.$route.path !== '/'
      }
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    changeAdsView(switchValue) {
      this.toggle = switchValue
      this.$store.commit('ads/adsView', switchValue)
    }
  },
  mounted() {
    this.toggle = this.adsView
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: $white;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.07);
}
.container {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.title {
  font-size: 1rem;
}
.btn__back {
  display: none;
}
.icon__setting {
  color: $gray-600;
}

@media screen and (max-width: $contents-width-m) {
  .header {
    @include padding-m;
    height: 45px;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.07);
  }

  .sub_page {
    .title {
      display: none;
    }
    .btn__back {
      display: inline-block;
      font-size: 1.375rem;
      font-weight: 700;
    }
  }
}
</style>
