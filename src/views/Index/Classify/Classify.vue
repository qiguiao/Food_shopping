<template>
  <div id="classify">
    <header class="class-header">
            <div class="prev">
                <i class="fa fa-angle-left"></i>
            </div>
            <h1><input type="text" placeholder="请输入您要找的商品"></h1>
            <div class="class-search">
                <i class="fa fa-commenting"></i>
            </div>
        </header>
    <section class="class-section">
      <div class="class-box">
        <div class="class-box-left"> 
            <ul>
              <li v-for="(item,idx) in list" :key="idx" @click="tabs(idx)" :class="{active:bool}">{{item.cate_name}}</li>
            </ul>
        </div>
        <div class="class-box-right">
          <div class="list-cont">
            <dl v-for="(item,idx) in right_list" :key="idx">
              <dt>
                  <img v-lazy="'http://www.lb717.com/'+item.cate_icon" alt="图片">
              </dt>
              <dd>{{item.cate_name}}</dd>
            </dl>
             <!-- v-on:click=" this.bool = !this.bool" -->
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  data () {
      return{
        list:[],
        right_list:[],
        bool:false
      }
  },
  created () {
     this.$http.post('/mall/category/topCategory',{
            channel_id:'1111'
        }).then(res=>{
           this.list =  res.data.data
        })
      this.publick_classify(0); //默认显示第一页
  },
  methods:{
    tabs(val){
      this.publick_classify(val);
    },
    publick_classify:function(val){
      this.$http.post('/mobile/Category/categorySon',{
            sonid:val
        }).then(res=>{ 
          this.right_list = res.data
        })
    }
  }
}
</script>

<style scoped>
#classify{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
}
.class-header{
    width: 100%;
    height: .88rem;
    
}
.class-header h1{
    text-align: center;
    line-height: .88rem;
    font-size: .24rem;
}
.class-header h1 input{
    width: 3.9rem;
    height: .6rem;
    background: #f6f6f6;
    border:none;
    padding-left: .25rem;
    border-radius: 3px;
}
.prev{
    position: absolute;
    left: .2rem;
    top:.2rem;
  
}
.prev i{
    font-size: .42rem;
    color:#333;
}
.class-search{
    position: absolute;
    right: .2rem;
    top:.15rem;
    font-size: .36rem;
    color:#333;
}
.class-section{
  flex:1;
  overflow-y: auto;
}
.class-box{
  display: flex;
  width: 100%;
  height: 100%;
}
.class-box-left{
  flex-basis: 30%;
  height: 100%;
  background: #eee;
  margin-right: .1rem;
}
.class-box-left ul li{
  line-height: .75rem;
  text-align: center;
  color:#666;
   border-left: 3px solid transparent;
}
.class-box-left ul li.active{
  background: #fff;
  color:#fc4141;
  border-left: 3px solid #fc4141;
}
 .class-box-left ul li:hover{
  background: #fff;
  color:#fc4141;
  border-left: 3px solid #fc4141;
} 
.class-box-right{
  flex:1;

  padding-left: .15rem;
  padding-top: .15rem;
}
.list-cont{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.list-cont dl{
  flex-basis: 33.3%;
  text-align: center;
  margin-bottom: .19rem;
}
.list-cont dl dt{
  width: 1.5rem;
  height: 1.5rem;
}
.list-cont dl dt img{
  width: 100%;
  height: 100%;
}
.list-cont dl dd{
  color:#757575;
  padding-top: .15rem;
}
img[lazy=loading] {
  width: 40px;
  height: 40px;
  margin: auto;
  background:rgba(0,0,0,.5);
}
</style>
