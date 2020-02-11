<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss" scoped>
.card {
  padding: 20px 30px;
  border: 1px solid $secondary;
  border-radius: 5px;
}

.card__title {
  width: 100%;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: $gray-800;
}

.card__contents {
  color: $gray-700;
}

@media screen and (max-width: $contents-width-m) {
  .card {
    padding: 20px 15px;
    border: 0;
    border-radius: 0;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
  }
}
</style>
