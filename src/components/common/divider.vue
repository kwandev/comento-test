<template>
  <div class="divider" :class="{ vertical }"></div>
</template>

<script>
export default {
  name: 'Divider',
  props: {
    vertical: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.divider {
  width: 100%;
  height: 1px;
  background-color: $secondary;
}
.vertical {
  margin: 0 10px;
  width: 1px;
  height: inherit;
}
</style>
