<template>
  <div class="home">
    <aside class="side">
      <btn variant="primary" size="lg" block class="btn__login">로그인</btn>
    </aside>
    <section class="home_contents">
      <div class="filter_wrap">
        <ul class="orderd">
          <li :class="{ active: ord === 'asc' }" @click="changeOrd('asc')">오름차순</li>
          <li :class="{ active: ord === 'desc' }" @click="changeOrd('desc')">내림차순</li>
        </ul>
        <btn variant="outline-secondary" size="xs" class="btn_filter" v-b-modal.modal_filter>필터</btn>
      </div>
      <div
        class="feed_list"
        v-infinite-scroll="getFeeds"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      >
        <template v-for="(feed, index) in feeds">
          <router-link :to="{ name: 'Detail', params: { id: feed.id } }" :key="feed.id" class="link">
            <feed :feed="feed" />
          </router-link>
          <template v-if="(index + 1) % 3 === 0">
            <a :key="`ads_${index}`" href="#" class="link">
              <ads ref="ads" :ad="ads[getAdsIndex(index)]"></ads>
            </a>
          </template>
        </template>
      </div>
    </section>

    <modal-filter v-if="categories.length > 0" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Feed from '@/components/feed/feed'
import Ads from '@/components/ads/ads'
import ModalFilter from './modal/filter'

export default {
  name: 'Home',
  components: {
    Feed,
    Ads,
    ModalFilter
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('feed', {
      loading: 'loading',
      ord: 'ord'
    }),
    ...mapGetters('feed', {
      feeds: 'feeds',
      categories: 'categories'
    }),
    ...mapGetters('ads', {
      ads: 'ads'
    })
  },
  watch: {
    'feeds.length'(value) {
      if (value !== 0 && value % 30 === 0) {
        this.getAds()
      }
    }
  },
  methods: {
    // 정렬 변경
    async changeOrd(ord) {
      localStorage.setItem('ord', ord)

      this.$store.commit('feed/setOrd', ord)

      await this.$store.dispatch('feed/initFeeds')
      this.getFeeds()

      await this.$store.dispatch('ads/initAds')
      this.getAds()
    },
    // 피드 조회
    getFeeds() {
      this.$store.dispatch('feed/fetchFeeds')
    },
    // 광고 조회
    getAds() {
      this.$store.dispatch('ads/fetchAds')
    },
    getAdsIndex(feedIndex) {
      const adIndex = (feedIndex + 1) / 3 - 1
      return adIndex
    }
  },
  async created() {
    await this.$store.dispatch('feed/fetchCategories')
    this.getFeeds()
    this.getAds()
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  padding-top: 50px;
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
  .home {
    padding-top: 0;
    background-color: #f4f5f7;
  }

  .side {
    display: none;
  }

  .home_contents {
    width: 100%;

    .link {
      margin-bottom: 10px;
    }
  }

  .filter_wrap {
    margin: 0;
    @include padding-m;
    height: 44px;
    border-bottom: 1px solid $secondary;
    background-color: $white;
  }
}
</style>
