<template>
  <div id="app">
       <div class="flex-box" sroll="no">
        <transition enter-active-class="animated bounceInLeft">
            <keep-alive include="home">
              <router-view></router-view>
            </keep-alive> 
        </transition>
      </div>
    <footer class="home-footer">
        <router-link v-for="(item,idx) in ROUTERLINK"
                   :key='idx' 
                   :to='item.to'>
        <icon-cell v-bind:text='item.text' v-bind:icon='item.icon'></icon-cell>    
      </router-link>
    </footer> 
    
  </div>
</template>

<script>
import {ROUTERLINK} from '../../api/RouterMap.js'
import iconCell from '../../components/Footer/Footer.vue'
export default {
data () {
    return{
      ROUTERLINK
    }
  },
  components:{
      iconCell
  }
}
</script>

<style scoped>
#app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
}
.flex-box{
   height: 100%;
    flex:1;  
    overflow-y: auto;
    overflow-x: hidden;
   
}

</style>
