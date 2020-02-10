<template>
  <header class="header">
    <div class="container">
      <h1 class="title">[제출일] 이경환</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CHeader'
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  height: 70px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.07);
}
.title {
  font-size: 1rem;
}
</style>
