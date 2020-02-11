<template>
  <card>
    <div class="feed__type">
      <div class="feed__category">{{ feed.category_name }}</div>
      <div class="feed__id">{{ feed.id }}</div>
    </div>
    <divider />
    <div class="feed__write">
      <div class="feed__writer">{{ feed.user_id }}</div>
      <divider vertical class="display-none-m" />
      <div class="feed_date display-none-m">{{ feed.created_at }}</div>
    </div>
    <h2 class="card__title text-truncate">
      {{ feed.title }}
    </h2>
    <div class="card__contents text-truncate">
      {{ feed.contents }}
    </div>
  </card>
</template>

<script>
import Card from '../ui/card'

export default {
  name: 'Feed',
  components: {
    Card
  },
  props: {
    feed: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.feed__type {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 0.8125rem;
  .feed__category {
    color: $gray-600;
  }
  .feed__id {
    color: $gray-500;
  }
}

.feed__write {
  margin: 15px 0;
  display: flex;
  font-size: 0.8125rem;

  .feed__writer {
    color: $primary;
  }
  .feed_date {
    color: $gray-700;
  }
}
</style>
