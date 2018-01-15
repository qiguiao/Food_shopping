<template>
   <div id="mine">
      <header class="mine-header">
        <div class="mine-set">
          <i class="fa fa-cog"></i>
        </div>
          <h1>我的717商城</h1>
          <div class="mine-finfo">
            <i class="fa fa-commenting"></i>
          </div>
      </header>
      <section class="mine-section">
          <div class="mine-baner">
              <div class="pic">
                <img src="http://www.lb717.com//public/upload/temp/2017/07-17/a1324f85faeab4bb134a74f5d9f1b1e4.jpg" alt="头像">
              </div>
              <div class="pic-text">
                <span>QQQ</span>
              </div>
          </div>
          <div class="mine-shop">
            <p><img src="http://www.lb717.com/static/mobile/images/myimg/my9.png" alt="我的店铺"><span>我的店铺</span></p>
            <p><i class="fa fa-angle-right"></i></p>
          </div>
          <div class="mine-tab">
            <dl>
              <dt>
                <i class="fa fa-file"></i>
              </dt>
              <dd>代付款</dd>
            </dl>
            <dl>
              <dt>
                <i class="fa fa-tag"></i>
              </dt>
              <dd>代发货</dd>
            </dl>
            <dl>
              <dt>
                <i class="fa fa-cart-arrow-down"></i>
              </dt>
              <dd>代收货</dd>
            </dl>
            <dl>
              <dt>
                <i class="fa fa-apple"></i>
              </dt>
              <dd>售后</dd>
            </dl>
            <dl @click="my_indent">
              <dt>
                <i class="fa fa-diamond"></i>
              </dt>
              <dd>我的订单</dd>
            </dl>
          </div>
          <div class="mine-list">
            <ul>
              <li><span><i class="fa fa-cube"></i>我的社区</span><span><i class="fa fa-angle-right"></i></span></li>
              <li><span><i class="fa fa-bicycle"></i>账户余额</span><span><i class="fa fa-angle-right"></i></span></li>
              <li @click="add_address"><span><i class="fa fa-bell"></i>地址管理</span><span><i class="fa fa-angle-right"></i></span></li>
            </ul>
          </div>
      </section>
   </div>
</template>

<script>
export default {
  methods:{
    my_indent () {
      this.$router.push({name:'Indent'})
    },
    add_address () {
      this.$router.push({name:'Address'})
    }
  }
}
</script>

<style scoped>
#mine{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.mine-header{
  width: 100%;
  height: .9rem;
  background: #fff;
  position: relative;
}
.mine-header h1{
  text-align: center;
  line-height: .9rem;
  font-size: .36rem;
  color:#333;
}
.mine-set{
  position: absolute;
  left:.2rem;
  top:.25rem;
}
.mine-set i{
  font-size: .42rem;
}
.mine-finfo{
  position: absolute;
  right: 0.2rem;
  top:.2rem;
}
.mine-finfo i{
  font-size: .42rem;
}
.mine-section{
  flex:1;
  overflow-y: scroll;
}
.mine-baner{
  width: 100%;
  height: 2.1rem;
  background: url('http://www.lb717.com/static/mobile/images/my/phpot.png');
  background-size: cover;
  /* background: #fd804c; */
    overflow: hidden;
}
.pic{
  width: 1.2rem;
  height: 1.2rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}
.pic img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.pic-text{
  text-align: center;
  padding-top: .1rem;
  color:#fff;
}
.mine-shop{
  width: 100%;
  height: 1rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: .2rem;
  padding-right: .2rem;
}
.mine-shop p img{
  width: 0.57rem;
  height: 0.57rem;
  vertical-align: middle;
}
.mine-shop p span{
  color:#fc4141;
  margin-left: .3rem;
  position: relative;
  top:.07rem;
}
.mine-shop p i{
  font-size: .42rem;
}
.mine-tab{
  width: 100%;
  height: 1.3rem;
  background: #fff;
  margin-top: .05rem;
  display: flex;
}
.mine-tab dl{
  flex:1;
  text-align: center;
  padding-top: .15rem;
}
.mine-tab dl dt i{
  font-size: .36rem;
  color:#7a7a7a;
} 
.mine-tab dl dd{
  padding-top: .14rem;
  font-size: .3rem;
  color:#7a7a7a;
}
.mine-list{
    background: #fff;
    margin-top: .2rem;
}
.mine-list ul{
    padding-left: .4rem;
}
.mine-list ul li{

  border-bottom: 1px solid #e5e5e5;
}
.mine-list ul li{
  width: 100%;
  height: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mine-list ul li span i{
  margin-right: .2rem;
  font-size: .32rem;
}
</style>
