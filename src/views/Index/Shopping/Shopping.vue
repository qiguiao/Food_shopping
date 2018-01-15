<template>
  <div id="shopping">
    <header class="shop-header">
      <div class="shop-prev" @click="prev">
        <i class="fa fa-angle-left" ></i>
      </div>
        <h1>购物车</h1>
      <div class="shop-compile" @click="compile">
        <span v-if="bool">编辑</span>
        <span v-else>完成</span>
      </div>
    </header>
    <section class="shop-section">
        <div class="shop-cont">
          <shops v-for="(item,idx) in $store.state.cart_list" :key="item.id" :item="item" :idx="idx"></shops>
        </div>
    </section>
    <div class="shop-accounts">
      <b>
        <span class="all" @click="checked_all">
        <a :class="{'all-active':$store.state.select_all}"></a>
      </span>
      </b>
      <u>全选</u>
       <div v-if="bool">
        <p class="total">
        <big>合计: <b>￥{{$store.state.all_price}}</b></big> <br>
        <small>(运费:￥{{$store.state.all_price}})</small>
      </p>
      <button class="calculate">结算</button>
      </div> 
      <div v-else>
        <button class="remove" @click="shop_car_remove">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
import shops from '../../../components/ShopCar/ShopCar.vue'
export default {
  data () {
      return{
        bool:true
      }
  },
  methods:{
    prev () {
      this.$router.push({name:'Home'})
    },
    checked_all () {
        this.$store.state.select_all = !this.$store.state.select_all
        //点击全选的时候 把全选的状态发送过去 遍历 所有的单选状态 == 全选状态
        this.$store.commit('change_selected_all',{
          select_all:this.$store.state.select_all
        })
         this.$store.commit('change_price')
    },
    compile () {
      this.bool = !this.bool
    },
    shop_car_remove () {
      var sum = 0;
      this.$store.state.cart_list.forEach((item)=>{
        if(item.checked){
          sum++;
        }
      })
      this.$store.commit('shopcar_list_remove',{
          length:sum
      }
     );
      
    }
  },
  components:{
    shops
  }
}
</script>

<style scoped src='./Shopping.css'>

</style>
