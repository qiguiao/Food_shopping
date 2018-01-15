<template>
  <div class="article">
      <dl v-for="(x,i) in list" :key="i" @click="go_to_detailpage(x)">
        <dt>
            <img v-lazy="'http://www.lb717.com/'+x.obj_data"  alt="大白菜">
        </dt>
        <dd>
            <p>{{x.goods_name}}</p>
            <h4><span>￥{{x.discount_price}}</span><img src="http://www.lb717.com/static/mobile/images/homeImg/homeland3.png" alt="加入购物车" @click.stop="add_car(x)"></h4>
        </dd>
    </dl>
  </div>
</template>

<script>
import {getCookie} from '../../util/utils.js';
import { Toast } from 'mint-ui';
export default {
    props:['list'],
    methods:{
        go_to_detailpage (lists) {
           this.$router.push({name:'Detailpage',query:{lists:JSON.stringify(lists)}})
       
        },
        add_car (item) {
            //判断登陆状态
            var token = getCookie('token');
            if(!token){
                this.$router.push({name:'Login',query:{from:'Home'}})
                    return;
            }
            // this.$message(' Add car is success');
            Toast('Add is Success')
            //存贮数据
            this.$store.commit('updated_cart',{
                id:item.goods_id,
                goods_name:item.goods_name,
                price:item.discount_price,
                url:'http://www.lb717.com/'+item.obj_data,
                count:1,
                checked:false
            })
        }
    }
}
</script>

<style scoped>
.homelandlrt .article{
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
}
.homelandlrt .article dl{
    flex-basis: 49.5%;
    margin-top: .1rem;
    background: #fff;
    padding-bottom: .1rem;
    text-align: center;
    margin-left: .02rem;
    margin-right: .01rem;
}

.homelandlrt .article dl dt img{
     width: 100%;
    height: 100%; 
}
.homelandlrt .article dl dd{
    padding-left: .05rem;
    padding-right: .05rem;
}

.homelandlrt dl dd p{
    font-size: .24rem;
    color:#666;
    height: .8rem;
    overflow: hidden;
    margin-top: .03rem;
    
}
.homelandlrt dl dd h4{
    display: flex;
    justify-content: space-between;
    margin-top: .1rem;
}
.homelandlrt dl dd h4 span{
    color:#fc4141;
    font-size: .24rem;
}
.homelandlrt dl dd h4 img{
    width: .45rem;
    height: .45rem;
}
img[lazy=loading] {
  width: 40px;
  height: 40px;
  margin: auto;
  background:rgba(0,0,0,.5);
}
</style>
