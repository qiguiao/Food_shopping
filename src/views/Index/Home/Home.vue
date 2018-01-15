<template>
 
  <div id="home">
     
    <header class="home-header">
        <div class="logo">
            <img src="../../../assets/images/logo/img_logo.png" alt="">
        </div>
        <h1><input type="text" placeholder="请输入您要购买的商品" @click="search"></h1>
        <div class="info">
            <dl>
                <dt>
                    <i class="fa fa-star"></i>
                </dt>
                <dd>我的店铺</dd>
            </dl>
            <dl>
                <dt>
                    <i class="fa fa-flickr"></i>
                </dt>
                <dd>消息</dd>
            </dl>
        </div>
    </header>
    <section class="home-section" @scroll="scrollFn">
        <div class="contentBox">
            <div class="banner">
                <mt-swipe :auto="4000">
                    <mt-swipe-item>
                        <img src="http://www.lb717.com/static/mobile/images/homeImg/video717.png" alt="安全食品">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="http://www.lb717.com/static/mobile/images/homeImg/home.png" alt="味道">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="http://www.lb717.com/static/mobile/images/activity/banner_activite.jpg" alt="食品节">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="http://www.lb717.com/static/mobile/images/homeImg/video.png" alt="安全">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="list-icon">
                <dl>
                    <dt>
                        <img src="http://www.lb717.com/static/mobile/images/homeImg/nav3.png" alt="牛奶乳品">
                    </dt>
                    <dd>牛奶乳品</dd>
                </dl>
                <dl>
                    <dt>
                        <img src="http://www.lb717.com/static/mobile/images/homeImg/nav1.png" alt="家乡味道">
                    </dt>
                    <dd>家乡味道</dd>
                </dl>
                <dl>
                    <dt>
                        <img src="http://www.lb717.com/static/mobile/images/homeImg/nav4.png" alt="休闲零食">
                    </dt>
                    <dd>休闲零食</dd>
                </dl>
                <dl>
                    <dt>
                        <img src="http://www.lb717.com/static/mobile/images/homeImg/nav3.png" alt="米面粮油">
                    </dt>
                    <dd>米面粮油</dd>
                </dl>
                <dl>
                    <dt>
                        <img src="http://www.lb717.com/static/mobile/images/homeImg/nav7.png" alt="调味调料">
                    </dt>
                    <dd>调味调料</dd>
                </dl>
                <dl>
                    <dt>
                        <img src="http://www.lb717.com/static/mobile/images/homeImg/nav8.png" alt="酒水饮料">
                    </dt>
                    <dd>酒水饮料</dd>
                </dl>
                <dl>
                    <dt>
                        <img src="http://www.lb717.com/static/mobile/images/homeImg/nav5.png" alt="生鲜果蔬">
                    </dt>
                    <dd>生鲜果蔬</dd>
                </dl>
                <dl>
                    <dt>
                        <img src="http://www.lb717.com/static/mobile/images/homeImg/nav2.png" alt="进口食品">
                    </dt>
                    <dd>进口食品</dd>
                </dl>
            </div>
            <div class="advertise">
                <span>动态商城</span>
                <div class="adv-news">
                    <mt-swipe :show-indicators="false">
                        <mt-swipe-item><p>7.17安全食品商城周年庆，暑期放价嗨不停！好吃、安全、放心的食品，陪你度假期！</p></mt-swipe-item>
                        <mt-swipe-item><p>717商城社区服务功能正式上线！抢红包！晒家乡！好吃、好玩、好看尽在717商城社区！</p></mt-swipe-item>
                        <mt-swipe-item><p>7.17安全食品商城周年庆，暑期放价嗨不停！好吃、安全、放心的食品，陪你度假期！</p></mt-swipe-item>
                    </mt-swipe>
                </div>
            </div>
            <div class="today">
                <span>
                    <img src="http://www.lb717.com/static/mobile/images/homeImg/todayimg.png" alt="天天特惠">
                    <b>天天特惠</b>
                    <small>每天有惊喜</small>
                </span>
                <a href="#" class="more">更多 <i class="fa fa-angle-right"></i> </a>
            </div>
            <div class="coupon">
                <div class="coupon-left">
                    <img src="http://www.lb717.com/static/mobile/images/homeImg/home1.png" alt="家乡特产">
                </div>
                <div class="coupon-right">
                    <div class="coupon-right-top">
                        <img src="http://www.lb717.com/static/mobile/images/homeImg/ruwei.png" alt="内脏">
                    </div>
                    <div class="coupon-right-bot">
                        <img src="http://www.lb717.com/static/mobile/images/homeImg/gaodian.png" alt="糕点">
                    </div>
                </div>
            </div>
            <div class="recommend">
                <div class="line"></div>
                    <p><img src="http://www.lb717.com/static/mobile/images/homeImg/homelandlogo.png" alt="天天特惠">家乡味道</p>
                    <a href="#" class="more">更多 <i class="fa fa-angle-right"></i> </a>
            </div>
            <div class="homelandlrt">
                <articles :list="list"></articles>
            </div>
            <h4>别滑了</h4>
        </div>
    </section>
    
  </div>
</template>

<script>
import articles from '../../../components/Article/Article.vue'
export default{
    name:'home',
    data(){
        return {
            list:[],
            channelId:2
        }
    },
    components:{
        articles
    },
    created(){
        this.queryGoodsList()
    },
      methods:{
        queryGoodsList:function(){
            this.$http.post('/mall/index/getGoodsChannel',{
                channel_id:this.channelId
            }).then(res=>{
                var data = JSON.parse(JSON.stringify(res.data))
                this.list = this.list.concat(data.data.data)
            })
        },
        scrollFn(e){
            var section = document.getElementsByTagName('section')[0];
            var contentBox = document.getElementsByClassName('contentBox')[0];
            var scrollerH = section.offsetHeight;
            var scrollTop = section.scrollTop;  
            var sectionH = contentBox.offsetHeight;
            // console.log(contentBox)

            // var clientHeight = document.body.clientHeight;

            // var height = section.scrollHeight;
            
            if(sectionH-scrollerH-scrollTop<30){
                this.channelId++;
                this.queryGoodsList()
                 
            }
            // console.log(scrollerH,scrollTop,sectionH)
            
        },
        search () {
           this.$router.push({'name':'Search'})
        }
    }
  
}

</script>

<style scoped src='./Home.css'>

</style>
