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
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      >
        <template v-for="feed in feeds">
          <a href="#" class="link" :key="feed.id">
            <feed :feed="feed" />
          </a>
          <!-- <a v-if="(index + 1) % 3 === 0" href="#" class="link" :key="index">
            <ads></ads>
          </a> -->
        </template>
      </div>
    </section>

    <b-modal id="modal_filter" ref="modal" centered @show="resetModal" @hidden="resetModal">
      <template v-slot:modal-header="{ close }">
        <h5 class="modal__title">필터</h5>
        <btn icon class="close" @click="close()">
          &times;
        </btn>
      </template>

      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          I accept the terms and use
        </b-form-checkbox>
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          I accept the terms and use
        </b-form-checkbox>
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          I accept the terms and use
        </b-form-checkbox>
      </form>

      <template v-slot:modal-footer>
        <btn variant="primary" @click="handleOk">저장하기</btn>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Feed from '@/components/feed/feed'
// import Ads from '@/components/ads/ads'

export default {
  name: 'Home',
  components: {
    Feed
    // Ads
  },
  data() {
    return {
      status: true
    }
  },
  computed: {
    ...mapState('feed', {
      loading: 'loading',
      ord: 'ord',
      page: 'page',
      lasPage: 'lastPage'
    }),
    ...mapGetters('feed', {
      feeds: 'feeds'
    })
  },
  methods: {
    async changeOrd(ord) {
      await this.$store.dispatch('feed/initFeeds', {
        ord
      })
      this.$store.dispatch('feed/fetchFeeds')
    },
    async loadMore() {
      await this.$store.dispatch('feed/fetchFeeds')
    },
    resetModal() {
      console.log('reset')
    },
    handleOk() {
      console.log('ok')
      this.$bvModal.hide('modal_filter')
    },
    handleSubmit() {
      console.log('handlesubmit')
    }
  },
  async created() {
    await this.$store.dispatch('feed/fetchCategory')
    this.loadMore()
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
