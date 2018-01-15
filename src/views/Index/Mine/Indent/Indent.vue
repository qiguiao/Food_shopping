<template>
    <div id="indent">
        <header class="ind-header">
            <div class="ind-prev" @click="ind_prev">
                <i class="fa fa-angle-left"></i>
            </div>
            <h1>我的订单</h1>
            <div class="ind-home" @click="ind_home">
                <i class="fa fa-home"></i>
            </div>
        </header>
        <section class="ind-section">
            <nav class="ind-nav">
                <a>全部</a>
                <a>待付款</a>
                <a>待发货</a>
                <a>待收货</a>
                <a>售后</a>
            </nav>
        </section>
    </div>
</template>

<script>
export default {
    methods:{
        ind_prev () {
            this.$router.push({name:'Mine'})
        },
        ind_home () {
            this.$router.push({name:'Home'})
        }
    }
}
</script>

<style scoped>
#indent{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.ind-header{
    width: 100%;
    height: 0.9rem;
    background: #fafafb;
    position: relative;
}
.ind-header h1{
    text-align: center;
    line-height: .9rem;
    font-size: .36rem;
    color:#787878;
}
.ind-prev{
    position: absolute;
    left: 0.2rem;
    top:.2rem;
}
.ind-prev i{
    font-size: .46rem;
}
.ind-home{
    position: absolute;
    right: 0.2rem;
    top:.2rem;
}
.ind-header i{
   font-size: .46rem;
   color:#787878;
}
.ind-section{
    flex:1;
    overflow: auto;
}
.ind-nav{
    width: 100%;
    height: 0.9rem;
    background: #fff;
    margin-top: .02rem;
    margin-bottom: .02rem;
    display: flex;
}
.ind-nav a{
    flex:1;
    text-align: center;
    line-height: .9rem;
    text-decoration: none;
}
.ind-nav a:hover{
    color:#fc4141;
    border-bottom: 2px solid #fc4141;
}
</style>
