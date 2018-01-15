import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.js'
import {getCookie} from '../util/utils.js'
Vue.use(VueRouter)
let router = new VueRouter({
    routes
})
router.beforeEach((to,from,next)=>{
    if(to.matched.some(record=>record.meta.requireAuth)){
        var token = getCookie('token');
            if(token){
                next()
              
            }else{
                next({name:'Login',query:{
                    from:to.name
                }})
            }
        
    }else{
        next()
    }
})
export default router