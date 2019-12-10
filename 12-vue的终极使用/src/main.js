const {add,mul} = require('./mathUtils.js')
console.log(add(20,30));
console.log(mul(20,30));

//3.依赖css文件
require('./css/normal.css')    //需要安装css-loader和style-loader (npm install --save-dev css-loader)
//4.依赖less文件
require('./css/special.less')   //需要安装less-loader (npm install --save-dev less-loader less)
//document.writeln('<h2>你好啊，张兆伟</h2>')

// 5.使用vue进行开发
import Vue from 'vue'  //依赖vue
//6.
//import App from './vue/app'
import App from './vue/App.vue'

new Vue({
  el: '#app',
  template: '<App/>',
  /*<div>
    <h2>{{message}}</h2>   //将模板中的内容和data挪到App这个组件中
    <h2>{{name}}</h2>
</div>
  /*data: {
    message: '你好啊，张兆伟'
  }*/
  components: {
    App
  }
})
