<template>
<div>
    <dl>
        <span class="shop-circle" @click="check_radio"> 
            <a :class="{active:item.checked}"></a>
        </span>
        <dt>
            <img :src="item.url" alt="购物清单">
        </dt>
        <dd>
            <h4>{{item.goods_name}}</h4>
            <p><strong>￥{{item.price}}</strong></p>
            <div class="num">
            <b class="num-add" @click="add_num">+</b><b class="num-nums">{{item.count}}</b><b class="num-minus" @click="minus_num">-</b>
        </div>
        </dd>
        
        </dl>
</div>
</template>

<script>

export default {
    props:['item','idx'],
    methods:{
        add_num () {
           ++this.item.count; //改变数据容器
           this.$store.commit('change_price')

        },
        minus_num () {
            --this.item.count
           this.$store.commit('change_price')
        },
        check_radio () {
            // this.item.checked = !this.item.checked;
           
             this.$store.commit('change_selected_radio',{
                 id:this.item.id,
                 checked:!this.item.checked
             })

             this.$store.commit('change_price')
        }
    }
}
</script>

<style scoped>
 .shop-cont dl{
    display: flex;
    background: #fff;
    padding-top: .2rem;
    padding-bottom: .2rem;
    padding-left: 1rem;
    padding-right: .2rem;
    position: relative;
}
.shop-cont dl dt{
    width: 1.9rem;   
    height: 1.9rem;
}
.shop-cont dl dt img{
    width: 100%;
    height: 100%;
} 
.shop-cont dl dd{
    margin-left: .2rem;
    position: relative;
}
.shop-cont dl dd h4{
    color:#666;
    width: 4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .36rem;
}
.shop-cont dl dd p{
    padding-top: .15rem;
    font-size: .36rem;
    color:#fc4141;
    font-weight: bold;
}
.shop-cont .shop-circle{
    position: absolute;
    top:50%;
    left:2%;
    width: .55rem;
    height: .55rem;
    border:1px solid #c9c9c9;
    border-radius: 50%;
    transform: translate(0,-50%);
}
.shop-cont .active{
    width: 90%;
    height: 90%;
    display: inline-block;
    background:#fc4141;
    color: #fff;
    border-radius: 50%;
    font-size: .36rem;
    margin-left: 4%;
    margin-top: 4%;
    text-align: center;
}
.shop-circle .active::after{
    content: '√'
}
.num{
    position: absolute;
    right:.2rem;
    bottom: .5rem;
}
.num b{
    width: .6rem;
    height: .6rem;
    border:1px solid #ccc;
    display: inline-block;
    text-align: center;
    line-height: .6rem;
}
</style>
