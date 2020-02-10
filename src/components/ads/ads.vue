<template>
  <card>
    <div class="ads__type">
      sponsored
    </div>
    <div class="ads_contents_wrap">
      <div class="ads__image">
        <img src="http://placehold.it/310x180" alt="" />
      </div>
      <div class="ads__contents">
        <h2 class="card__title">
          Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Ti Title
          Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Ti
        </h2>
        <div class="card__contents">
          contents contents contents contents contents contents contents contents contents contents contents
          con…contents contents contents contents contents contents contents contents contents contents contents con…
        </div>
      </div>
    </div>
  </card>
</template>

<script>
import Card from '../ui/card'

export default {
  name: 'Ads',
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
.ads__type {
  margin-bottom: 16px;
  font-size: 0.8125rem;
  color: $gray-500;
}

.ads_contents_wrap {
  display: flex;
  justify-content: space-between;
}
.ads__image {
  flex: none;
  width: 310px;
}
.ads__contents {
  flex: none;
  width: 463px;
}

.card__title {
  @include line-clamp(2);
}
.card__contents {
  @include line-clamp(4);
}
</style>
