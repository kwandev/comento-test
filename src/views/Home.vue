<template>
  <div class="home">
    <aside class="side">
      <btn class="btn__login" variant="primary" block large>로그인</btn>
    </aside>
    <section class="home_contents">
      <a href="#" class="link">
        <feed></feed>
      </a>
      <a href="#" class="link">
        <feed></feed>
      </a>
      <a href="#" class="link">
        <feed></feed>
      </a>
      <a href="#" class="link">
        <ads></ads>
      </a>
      <a href="#" class="link">
        <feed></feed>
      </a>
      <a href="#" class="link">
        <feed></feed>
      </a>
    </section>
  </div>
</template>

<script>
import Feed from '@/components/feed/feed'
import Ads from '@/components/ads/ads'

export default {
  name: 'Home',
  components: {
    Feed,
    Ads
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
}
.side {
  flex: none;
  margin-right: 40px;
  width: 235px;

  .btn__login {
    font-weight: 700;
  }
}

.home_contents {
  flex: none;
  width: 865px;

  .link {
    display: block;
    margin-bottom: 30px;
  }
}
</style>
