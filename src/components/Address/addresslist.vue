<template>
  <li class="li_element">
    <h4><span>{{item.user_name}}</span> <b>{{item.user_tel}}</b> </h4>
    <p>{{item.province}}{{item.city}}{{item.eaer}}{{item.detailed_address}}</p>
    <pre><span><b :class="{active:bool}" @click="bool = !bool"></b><big>默认地址</big></span><span><a @click="edito(item)">编辑</a><a @click="remove(item.user_tel)">删除</a></span></pre>
</li>
</template>

<script>
export default {
    props:['item'],
    data () {
        return{
            bool:false
        }
    },
    methods:{
        remove (val) {
            this.$store.commit('user_address_remove',{
                id:val
            })
           
        },
        edito (val) {
            this.$router.push({name:'Consignee',query:{data:val}})
        }
    }
}
</script>

<style scoped>
li.li_element{
    background: #fff;
     padding-left: .2rem;
    padding-right: .2rem;
    padding-top: .15rem;
    padding-bottom: .15rem;
   border-bottom: 1px solid #333;
}
.adderss-list ul li h4{
    font-size: .36rem;
}
.adderss-list ul li p{
    line-height: 1.5;
    border-bottom: 1px solid #ccc;
    padding-bottom: .2rem;
    font-size: .28rem;
    color:#333;
    padding-top: .15rem;
}
.adderss-list ul li pre{
    padding-top: .2rem;
    display: flex;
    justify-content: space-between;
}
.adderss-list ul li pre b{
    border:1px solid #ccc;
    width: 0.45rem;
    height: 0.45rem;
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: .25rem;
    text-align: center;
    color:#fff;
    font-size: .36rem;
}
.adderss-list ul li pre b.active{
    background: #fc4141;
}
.adderss-list ul li pre b.active::after{
    content: '√'
}
.adderss-list ul li pre big{
    font-size: .3rem;
    position: relative;
    top:1px;
}
.adderss-list ul li pre span a{
    color:red;
    margin-left: .1rem;
    margin-right: .1rem;
}
</style>
