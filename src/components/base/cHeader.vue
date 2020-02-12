<template>
  <header class="header">
    <div class="container" :class="subPage">
      <h1 class="title">[제출일] 이경환</h1>
      <btn icon class="btn__back" @click="back">
        &lt;
      </btn>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CHeader',
  computed: {
    subPage() {
      return {
        sub_page: this.$route.path !== '/'
      }
    }
  },
  methods: {
    back() {
      this.$router.back()
    }
  },
  created() {
    console.log(this)
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
.title {
  font-size: 1rem;
}
.btn__back {
  display: none;
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
      margin-right: auto;
      font-size: 1.375rem;
      font-weight: 700;
    }
  }
}
</style>
