<template>
  <div id="app">
    <h1>哈哈哈</h1>
    <!--<router-view></router-view> -->
    <router-link to="/home" tag="button">首页</router-link>   <!--to属性指定跳转的路径 ；tag属性指定渲染的标签类型-->
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <router-view></router-view>   <!--此标签相当于一个占位符，放在那个位置则要展示的内容就显示在哪里-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId: 'zzw'
    }
  },
  methods: {
    userClick(){
      this.$router.push('/user' + this.userId)
    },
    profileClick(){      //此处两个函数对比，第二个为传入数据的方式
      this.$router.push({
        path: '/profile',
        query: {
          name: 'zzw',
          age: 20
        }
      })
    }
  }

}
</script>

<style>

</style>
