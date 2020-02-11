<template>
  <div class="home">
    <aside class="side">
      <btn variant="primary" size="lg" block class="btn__login">로그인</btn>
    </aside>
    <section class="home_contents">
      <div class="filter_wrap">
        <ul class="orderd">
          <li class="active">오름차순</li>
          <li>내림차순</li>
        </ul>
        <btn variant="outline-secondary" size="xs" class="btn_filter">필터</btn>
      </div>
      <div class="feed_list">
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
      </div>
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

.filter_wrap {
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  .orderd {
    display: flex;
    font-size: 0.8125rem;
    color: $gray-500;

    li {
      margin-right: 10px;
      cursor: pointer;

      &::before {
        content: '';
        margin-right: 5px;
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: $gray-500;
        vertical-align: middle;
      }

      &.active {
        color: $gray-700;

        &::before {
          background-color: $primary;
        }
      }
    }
  }

  .btn_filter {
    margin-left: auto;
    color: $gray-500;
  }
}

@media screen and (max-width: $contents-width-m) {
  .side {
    display: none;
  }
}
</style>
