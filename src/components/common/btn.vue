<template>
  <b-button :block="block" :variant="variant" :class="styleClass" @click="$emit('click')" class="btn"
    ><slot>버튼</slot></b-button
  >
</template>

<script>
export default {
  name: 'Btn',
  props: {
    variant: {
      type: String
    },
    icon: {
      type: Boolean
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
        xs: this.size === 'xs',
        icon: this.icon
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

.icon {
  height: auto;
  background: none;
  border: 0;

  &:active,
  &:focus {
    border: 0 !important;
    box-shadow: none !important;
  }
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
