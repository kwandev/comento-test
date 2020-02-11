<template>
  <card>
    <div class="ads__type">sponsored</div>
    <div class="ads_contents_wrap">
      <div class="ads__image">
        <img v-if="ad.id" :src="`https://cdn.comento.kr/assignment/${ad.img}`" :alt="ad.title" />
      </div>
      <div class="ads__contents">
        <h2 class="card__title">
          {{ ad.title }}
        </h2>
        <div class="card__contents">
          {{ ad.contents }}
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
  },
  props: {
    ad: {
      type: Object,
      required: true,
      default: () => ({})
    }
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

  .card__title {
    margin-bottom: 11px;
  }
}

.card__title {
  @include line-clamp(2);
}
.card__contents {
  @include line-clamp(4);
}

@media screen and (max-width: $contents-width-m) {
  .ads_contents_wrap {
    flex-direction: column;
  }
  .ads__image {
    margin-bottom: 16px;
    width: 100%;
  }
  .ads__contents {
    width: 100%;

    .card__title {
      margin-bottom: 6px;
    }
  }
}
</style>
