<template>
  <b-button :block="block" :variant="variant" :class="styleClass" class="btn"><slot>버튼</slot></b-button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    variant: {
      type: String
    },
    block: {
      type: Boolean
    },
    large: {
      type: Boolean
    }
  },
  computed: {
    styleClass() {
      return {
        large: this.large
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  height: 40px;
  border-radius: 5px;
}

.large {
  height: 60px;
  font-size: 1.375rem;
}
</style>
