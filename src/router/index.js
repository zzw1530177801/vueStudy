//配置路由信息
import VueRouter from 'vue-router'
import Vue from 'vue'

//import About from '../components/About'
//import Home from '../components/Home'   //导入组件
//import User from '../components/User'

const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')  //子路由的组件也在此导入
const About = () => import('../components/About') //此处用ES6的箭头函数来使路由懒加载，即在路由被访问时才加载相关组件
const User = () => import('../components/User')

//1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)

//2.创建VueRouter对象
const routes = [
  {
    path: '',
    redirect: '/home'  //此处设置路由的默认值
  },
  {
    path: '/home',   //路径，对应于App.vue中router-link的to属性
    component: Home,
    children: [
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  }
]
const router = new VueRouter({
  //配置路由和组件之间的关系
  routes,
  mode: 'history'   //mode能修改路径的显示模式，默认为哈西模式，此处修改为html5模式

})
//3.将router对象传入到Vue实例
export default router    //导出
