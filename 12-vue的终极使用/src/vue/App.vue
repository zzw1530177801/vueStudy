<template>
  <div class="title">
    <h2>{{message}}</h2>
    <h2>{{name}}</h2>
    <h2>哈哈哈</h2>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return { message: '你好啊，张兆伟',
                name: 'coderzzw'}
    }

  }
</script>

<style scoped>
  .title{
    color: green;
  }
</style>
