import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import axios from 'axios'
import element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import Students from "./routers/Students.vue";
import exp3 from "./routers/Exp3.vue"
import updateStudent from "./routers/UpdateStudent.vue"
import updateTeacher from "./routers/UpdateTeacher.vue"
import updateCourse from "./routers/UpdateCourse.vue"
import alreadySelectedCourse from "./routers/AlreadySelectedCourse"
import selectCourse from "./routers/SelectCourse"
import exp6_1 from "./routers/Exp6_1"
import exp6_2 from "./routers/Exp6_2"
import exp6_3 from "./routers/Exp6_3"
import exp6_4 from "./routers/Exp6_4"
import exp6_6 from "./routers/Exp6_6"
import exp6_8 from "./routers/Exp6_8"
import exp6_9 from "./routers/Exp6_9"

axios.defaults.baseURL = 'http://localhost:27017';
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios
Vue.use(VueRouter)
Vue.use(element)


const routes=[
  //单个路由均为对象类型，path代表的是路径，component代表组件
  {path:"/exp3",component:exp3},
  {path:"/students",component:Students},
  {path:"/updateStudent",component:updateStudent},
  {path:"/updateTeacher",component:updateTeacher},
  {path:"/updateCourse",component:updateCourse},
  {path:"/alreadySelectedCourse",component: alreadySelectedCourse},
  {path:"/selectCourse",component:selectCourse},
  {path:"/exp6/1",component: exp6_1},
  {path:"/exp6/2",component: exp6_2},
  {path:"/exp6/3",component: exp6_3},
  {path:"/exp6/4",component: exp6_4},
  {path:"/exp6/6",component: exp6_6},
  {path:"/exp6/8",component: exp6_8},
  {path:"/exp6/9",component: exp6_9},

]

//实例化VueRouter并将routes添加进去
const router=new VueRouter({
//ES6简写，等于routes：routes
  routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
