<template>
  <card>
    <div class="feed__type">
      <div class="feed__category">category네임</div>
      <div class="feed__id">i디</div>
    </div>
    <divider />
    <div class="feed__write">
      <div class="feed__writer">이경환</div>
      <divider vertical class="display-none-m" />
      <div class="feed_date display-none-m">2020--02-02</div>
    </div>
    <h2 class="card__title text-truncate">
      Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Ti Title
      Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Ti
    </h2>
    <div class="card__contents text-truncate">
      contents contents contents contents contents contents contents contents contents contents contents con…contents
      contents contents contents contents contents contents contents contents contents contents con…
    </div>
  </card>
</template>

<script>
import Card from '../ui/card'

export default {
  name: 'Feed',
  components: {
    Card
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
