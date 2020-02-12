<template>
  <div class="detail">
    <card class="card__question">
      <h2 class="card__title">
        {{ feedDetail.title }}
      </h2>
      <div class="card__contents">
        {{ feedDetail.contents }}
      </div>
      <div class="date">
        <span>{{ (feedDetail.user || {}).email }}</span>
        <span>{{ feedDetail.created_at }}</span>
      </div>
    </card>

    <div class="answer__count">
      답변 <span class="text-primary">{{ answerCount }}</span>
    </div>

    <ul class="answer_list">
      <li v-for="answer in feedDetail.reply" :key="answer.id">
        <card class="card__answer">
          <div class="answer__user">
            {{ answer.user.name }}
          </div>
          <divider />
          <h2 class="card__title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, atque voluptate. Voluptatem non modi et
            perferendis maiores culpa sed, facere natus dignissimos nobis. Vel porro, dignissimos exercitationem sequi
            amet fugit?
          </h2>
          <div class="card__contents">
            {{ answer.contents }}
          </div>
          <div class="date">
            <span>{{ answer.user.email }}</span>
            <span>{{ answer.created_at }}</span>
          </div>
        </card>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Card from '@/components/ui/card'

export default {
  name: 'Detail',
  components: {
    Card
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('feed', {
      feedDetail: 'feedDetail'
    }),
    answerCount() {
      return (this.feedDetail.reply || []).length || 0
    }
  },
  watch: {},
  methods: {},
  created() {
    this.$store.dispatch('feed/fetchFeedDetail', this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>
.detail {
  padding-top: 50px;
}

.card {
  margin-bottom: 30px;

  .card__title {
    margin-bottom: 6px;
  }
  .card__contents {
    margin-bottom: 15px;
  }
  .date {
    display: flex;
    justify-content: space-between;
    font-size: 0.8125rem;
    color: $gray-500;
  }
}

.answer__count {
  margin-bottom: 10px;
}

.card__question {
  border-color: $primary;
}
.divider {
  margin: 10px 0 15px;
}
.answer__user {
  color: $gray-600;
}

@media screen and (max-width: $contents-width-m) {
  .detail {
    padding: 20px 15px 0;
  }
  .card {
    padding: 20px 0;
    border-top: 1px solid $secondary;
    border-bottom: 1px solid $secondary;
    box-shadow: none;
  }
  .card__question {
    border-color: $primary;
  }
}
</style>
