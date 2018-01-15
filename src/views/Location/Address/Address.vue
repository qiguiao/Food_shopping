<template>
    <div id="address">
        <header class="address-header">
            <div class="address-prev" @click="add_prev">
                <i class="fa fa-angle-left"></i>
            </div>
            <h1>收货地址</h1>
            <div class="address-home" @click="add_home">
                <i class="fa fa-home"></i>
            </div>
        </header>
        <section class="address-section">
            <div class="adderss-list">
                <ul>
                    <addresslist v-for="(item,idx) in user_list" :key="idx" :item="item" :bool="bool"></addresslist>
                </ul>
            </div>
            <div class="add-addresss" >
                <button @click="add_consignee"> + 新增收地址</button>
            </div>
        </section>
    </div>
</template>

<script>
import addresslist from '../../../components/Address/addresslist.vue'
export default {
    data () {
        return{
            user_list:[],
            bool:false
        }
    },
    components:{
        addresslist
    },
    created () {
        this.user_list = this.$store.state.user_address
        console.log(this.user_list)
    },
    methods:{
        add_prev () {
            this.$router.push({name:'Mine'})
        },
        add_home () {
            this.$router.push({name:'Home'})
        },
        add_consignee () {
            this.$router.push({name:'Consignee'})
        },
        
    }
}
</script>

<style scoped>
#address{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.address-header{
    width: 100%;
    height: 0.9rem;
    background: #fff;
    position: relative;
}
.address-header h1{
    text-align: center;
    line-height: .9rem;
    font-size: .36rem;
}
.address-prev{
    position: absolute;
    left:.2rem;
    top:.2rem;
}
.address-prev i{
    font-size: .42rem;
}
.address-home{
    position: absolute;
    right: 0.2rem;
    top:.2rem;
}
.address-home i{
     font-size: .42rem;
     color:#333;
}
.address-section{
    flex:1;
    overflow-y: scroll;
}
.add-addresss{
    width: 100%;
    height: 0.8rem;
    margin-top: 1rem;
    text-align: center;
}
.add-addresss button{
    width: 60%;
    height: 100%;
    background: #fc4141;
    border-radius: 15px;
    color:#fff;
    border:none;
    font-size: .36rem;
}
.adderss-list{
    

}
.adderss-list ul{
   border-top: 1px solid #ccc;
}
</style>
