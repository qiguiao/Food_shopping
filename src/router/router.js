
import Index from '../views/Index/Index.vue'
import Home from '../views/Index/Home/Home.vue'
import Classify from '../views/Index/Classify/Classify.vue'
import Shopping from '../views/Index/Shopping/Shopping.vue'
import Mine from '../views/Index/Mine/Mine.vue'
import Search from '../views/Index/Home/Search/Search.vue'
import Login from '../views/Login/Login.vue'
import Register from '../views/Register/Register.vue'
import Detailpage from '../views/Index/Detailpage/Detailpage.vue'
import Indent from '../views/Index/Mine/Indent/Indent.vue'
import Address from '../views/Location/Address/Address.vue'
import Consignee from '../views/Location/Consignee/Consignee.vue'
 let  router =  [
    {
      path: '/',
      // redirect:'/index/home'
    },
    {
      path:'/index',
      name:'Index',
      component:Index,
      children:[
          {
            path: 'home',
            name: 'Home',
            component: Home
          },
          {
            path: 'shopping',
            name: 'Shopping',
            component: Shopping
          },
          {
            path: 'classify',
            name: 'Classify',
            component: Classify
          },
          {
            path: 'mine',
            name: 'Mine',
            component: Mine,
            meta:{
              requireAuth:true
            }
          }
      ]
    },
    {
      path:'/search',
      name:'Search',
      component:Search
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/detailpage',
      name:'Detailpage',
      component:Detailpage
    },
    {
      path:'/indent',
      name:'Indent',
      component:Indent
    },
    {
      path:'/address',
      name:'Address',
      component:Address
    },
    {
      path:'/consignee',
      name:'Consignee',
      component:Consignee
    }
    
  ]

export default router