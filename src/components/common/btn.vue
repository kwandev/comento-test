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
    size: {
      type: String
    }
  },
  computed: {
    styleClass() {
      return {
        lg: this.size === 'lg',
        xs: this.size === 'xs'
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

.lg {
  height: 60px;
  font-size: 1.375rem;
}

.xs {
  padding: 0;
  width: 48px;
  height: 24px;
  font-size: 0.8125rem;
}
</style>
