<script setup lang="ts">
const handleClick = () => {
  console.log('hellosf')
}
handleClick()
</script>

<template>
  <div class="box">
    <h1>APP</h1>
  </div>
</template>

<style scoped lang="scss">
.box {
  width: 200px;

  h1 {
    color: red;
  }
}
</style>
