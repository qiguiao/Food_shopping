<template>
  <div id="detailpage">
    <header class="detail-header">
      <div class="detail-prev" @click="detail_prev">
        <i class="fa fa-angle-left"></i>
        <span>返回</span>
      </div>
      <h1>
        <a class="active">商品</a>
        <a>详情</a>
      </h1>
      <div class="detail-info">
        <i class="fa fa-bars"></i>
      </div>
    </header>
    <section class="detail-section">
      <div class="detail-banner">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <img v-lazy='this.imgurl' alt="图片">
          </mt-swipe-item>
          <mt-swipe-item>
            <img v-lazy='this.imgurl' alt="图片">
          </mt-swipe-item>
          <mt-swipe-item>
            <img v-lazy='this.imgurl' alt="图片">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="detail-description">
        <h4>{{this.lists.goods_name}}</h4>
      </div>
      <div class="detail-price">
        <p>
          <b>￥{{this.lists.discount_price}}</b>
          <s>￥{{this.lists.location}}.0</s>
        </p>
        <p>
          <big>运费:(￥:{{this.lists.biz_type}}.00)</big>
        </p>
        <span>溯源查询</span>
      </div>
      <div class="detail-sult">
        <p>
          <span>店铺优惠</span> 满三件包邮</p>
      </div>
      <div class="detail-user">
        <dl>
          <dt><img :src="this.lists.store_logo" alt="店铺"></dt>
          <dd>
            <h4>{{this.lists.store_name}}</h4>
            <p>店主: HR123456</p>
          </dd>
        </dl>
      </div>
      
        <div class="wrapper" ref="wrapper">
          <ul class="content">
            <li>
              <dl>
                <dt>
                   <img v-lazy='this.imgurl' alt="图片">
                </dt>
                <dd>
                  <h4>御龙源 北大荒酸菜棵500克</h4>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>
                   <img v-lazy='this.imgurl' alt="图片">
                </dt>
                <dd>
                   <h4>御龙源 北大荒酸菜棵500克</h4>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>
                   <img v-lazy='this.imgurl' alt="图片">
                </dt>
                <dd>
                   <h4>御龙源 北大荒酸菜棵500克</h4>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>
                   <img v-lazy='this.imgurl' alt="图片">
                </dt>
                <dd>
                   <h4>御龙源 北大荒酸菜棵500克</h4>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>
                   <img v-lazy='this.imgurl' alt="图片">
                </dt>
                <dd>
                   <h4>御龙源 北大荒酸菜棵500克</h4>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>
                   <img v-lazy='this.imgurl' alt="图片">
                </dt>
                <dd>
                   <h4>御龙源 北大荒酸菜棵500克</h4>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
    
    </section>
    <footer class="detail-footer">
      <p class="small">
        <i class="fa fa-user-circle"></i> <br>
        <span>客服</span>
      </p>
      <p class="small">
        <i class="fa fa-truck"></i> <br>
        <span>购物车</span>
      </p>
      <p class="big">加入购物车</p>
      <p class="big red">立即购买</p>
    </footer>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      lists: '',
      imgurl: ''
    }
  },
  created() {
    this.lists = JSON.parse(this.$route.query.lists)
    this.imgurl = 'http://www.lb717.com/' + this.lists.obj_data
    console.log(this.lists)
  },
  methods: {
    detail_prev() {
      this.$router.push({ 'name': 'Home' })
    }
  },
  mounted() {
    const wrapper = document.querySelector('.wrapper')
    const scroll = new BScroll(wrapper, {
      scrollX: true
    })

  }
}
</script>

<style scoped>
#detailpage {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.detail-header {
  width: 100%;
  height: 0.9rem;
  background: #fff;
  position: relative;
}

.detail-header h1 {
  text-align: center;
  line-height: .9rem;
  font-size: .36rem;
}

.detail-header h1 a {
  color: #333;
  padding-left: .15rem;
  padding-right: .15rem;
}

.detail-header h1 a.active {
  border-bottom: 3px solid #333;
  padding-bottom: .15rem;
}

.detail-prev {
  position: absolute;
  left: 0.2rem;
  top: .2rem;
}

.detail-prev i {
  font-size: .48rem;
  vertical-align: sub;
  position: relative;
  top: -.03rem;
}

.detail-prev span {
  font-size: .36rem;
  margin-left: .1rem;
}

.detail-info {
  position: absolute;
  right: 0.2rem;
  top: .22rem;
}

.detail-info i {
  font-size: .42rem;
}

.detail-section {
  flex: 1;
  overflow-y: scroll;
}

.detail-banner {
  width: 100%;
  height: 6rem;
  background: rgba(0, 0, 0, .5)
}

.detail-banner img {
  width: 100%;
  height: 100%;
}

.detail-description {
  padding-left: .2rem;
  padding-right: .2rem;
  background: #fff;
  padding-top: .2rem;
}

.detail-description h4 {
  font-size: .28rem;
  color: #333;
}

.detail-price {
  padding-left: .2rem;
  padding-right: .2rem;
  padding-top: .15rem;
  position: relative;
  background: #fff;
  padding-bottom: .15rem;
}

.detail-price span {
  position: absolute;
  right: .2rem;
  top: .2rem;
  width: 1.9rem;
  height: 0.8rem;
  background: #4f99f2;
  text-align: center;
  line-height: .8rem;
  border-radius: 5px;
  color: #fff;
  font-size: .28rem;
}

.detail-price p b {
  color: #fc4141;
  margin-right: .2rem;
  font-size: .34rem;
}

.detail-sult {
  padding-left: .2rem;
  padding-right: .2rem;
  height: 0.8rem;
  background: #fafafa;
  line-height: .8rem;
}

.detail-sult span {
  width: 1.5rem;
  height: 0.49rem;
  border: 1px solid #fc4141;
  display: inline-block;
  text-align: center;
  line-height: .45rem;
  color: #fc4141;
  border-radius: 5px;
  margin-right: .15rem;
}

.detail-footer {
  width: 100%;
  height: 0.9rem;
  background: #fff;
  display: flex;
  align-items: center;
}

.detail-footer p.small {
  text-align: center;
  width: 1.5rem;
  height: 0.9rem;
}

.detail-footer p.big {
  width: 2.5rem;
  height: 0.9rem;
  background: #fe8282;
  text-align: center;
  line-height: .9rem;
  color: #fff;
  font-size: .32rem;
}

.detail-footer p.red {
  background: #fc4141;
}

.detail-user {
  width: 100%;
  height: 0.95rem;
  background: #fff;
  margin-top: .2rem;
}

.detail-user dl {
  display: flex;
  padding-left: .2rem;
  padding-right: .2rem;
}

.detail-user dl dt {
  width: .8rem;
  height: .8rem;
  margin-top: .03rem;
}

.detail-user dl dt img {
  width: 100%;
  height: 100%;
}

.detail-user dl dd {
  flex: 1;
  padding-left: .3rem;
  font-size: .3rem;
}
.wrapper{
  width: 100%;
  height: 100px;
  overflow:hidden;
  position: relative;
  margin-top: .2rem;
  background: #fff;
}
.content{
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
}
.content li{
  width: 100px;
  flex-shrink: 0;
}
.content li dl{
  text-align: center;
}
.content li dl dt{
  width:1.3rem;
  height: 1.3rem;
  margin-left: auto;
  margin-right: auto;
}
.content li dl dt img{
  width: 100%;
  height: 100%;
}
.content li dl dd{
  color:#000;
  padding-left: .2rem;
  padding-right:.2rem;
  margin-top: .1rem;
}
</style>
