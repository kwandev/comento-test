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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: $white;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.07);
}
.title {
  font-size: 1rem;
}

@media screen and (max-width: $contents-width-m) {
  .header {
    @include padding-m;
    height: 45px;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.07);
  }
}
</style>
