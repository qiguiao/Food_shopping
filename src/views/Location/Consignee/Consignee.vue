<template>
    <div id="consignee">
        <header class="con-header">
            <div class="con-prev" @click="con_prev">
                <i class="fa fa-angle-left"></i>
            </div>
            <h1>收货人</h1>
            <div class="con-home" @click="con_home">
                <i class="fa fa-home"></i>
            </div>
        </header>
        <section class="con-section">
            <div class="con-from">
                <p><input type="text" placeholder="收货人姓名" v-model="user_name"></p>
                <p><input type="tel" placeholder="手机号" v-model="user_tel"></p>
                <p class="con-selcet-cont">
                    <select v-model="province" @change="changePro">
                        <option value="请选择省份" selected>请选择省份</option>
                         <option v-for="item in options" :key="item.name">{{item.name}}</option> 
                    </select>
                    <select v-model="city" @change="changeCity">
                          <option value="请选择市" selected>请选择市</option>
                        <option v-for="item in cityList" :key="item.name" :value="item.name" >{{item.name}}</option>
                    </select>
                </p>
                <p class="con-repeat">
                    <select  v-model="eaer" @change="changeEaer">
                         <option value="请选择区" selected>请选择区</option>
                        <option v-for="item in areaList" :key="item" :value="item">{{item}}</option>
                    </select>
                </p>
                <p><input type="tel" placeholder="详细地址" v-model="detailed_address"></p>
                <pre class="mt5"><span><b class="active"></b></span> <span>设为默认地址</span></pre>
            </div>
            <div class="con-publish">
                <button @click="save">保存</button>
            </div>
        </section>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            province:'请选择省份',
            city:'请选择市',
            eaer:'请选择区',
            options: [],
            cityList:[],
            areaList:[],
            user_name:'',
            user_tel:'',
            detailed_address:''
        }
    },
    methods: {
        con_prev() {
            this.$router.push({ name: 'Address' })
        },
        con_home() {
            this.$router.push({ name: 'Home' })
        },
        changePro () {
            this.options.forEach((item,idx)=>{
              if(item.name == this.province){
                this.cityList = item.city
              }
          })
          this.city='';
          this.eaer='';
        },
        changeCity () {
            this.cityList.forEach((item,idx)=>{
              if(item.name == this.city){
                this.areaList = item.area
              }
          })
           this.eaer='';
        },
        changeEaer () {
            // this.eaer = val;
            // this.collectInfo();
        },
        save () {

            if(this.$route.query.data){
                if(!this.user_name){Toast('请输入收货人姓名'); this.user_name=''; return;}  
                if(!this.user_tel){Toast('请输入手机号'); return;} 
                if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.user_tel))){ Toast('请输入正确的手机号'); this.user_tel=''; return;}
                if(!this.detailed_address){Toast('请输入详细地址'); this.detailed_address=''; return;} 
                if(!this.province){Toast('请输入省份'); return;} 
                if(!this.city){Toast('请输入市'); return;} 
                if(!this.eaer){Toast('请输入区'); return;} 
               this.$store.commit('replace_address',{
                        id:this.$route.query.data.id,
                        user_name:this.user_name,
                        user_tel:this.user_tel,
                        province:this.province,
                        city:this.city,
                        eaer:this.eaer,
                        detailed_address:this.detailed_address
               })
               Toast('保存成功');
                  setTimeout(()=>{
                    this.$router.push({ name: 'Address' })
                  },1500)

            }else{
                    if(!this.user_name){Toast('请输入收货人姓名'); this.user_name=''; return;}  
                    if(!this.user_tel){Toast('请输入手机号'); return;} 
                    if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.user_tel))){ Toast('请输入正确的手机号'); this.user_tel=''; return;}
                    if(!this.detailed_address){Toast('请输入详细地址'); this.detailed_address=''; return;} 
                    if(!this.province){Toast('请输入省份'); return;} 
                    if(!this.city){Toast('请输入市'); return;} 
                    if(!this.eaer){Toast('请输入区'); return;} 
                    
                    this.$store.commit('updated_user_address',{
                        id:this.user_tel,
                        user_name:this.user_name,
                        user_tel:this.user_tel,
                        province:this.province,
                        city:this.city,
                        eaer:this.eaer,
                        detailed_address:this.detailed_address
                    })
                    Toast('保存成功')
                        setTimeout(()=>{
                            this.$router.push({ name: 'Address' })
                        },1500)
                    }
           
        }
    },
    created() {
        this.$http.post('/admin/location/root').then((res) => {
            this.options = res.data
        });

        console.log(this.$route.query.data)
    }
}
</script>

<style scoped>
#consignee {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.con-header {
    width: 100%;
    height: 0.9rem;
    background: #fafafb;
    position: relative;
}

.con-header h1 {
    text-align: center;
    line-height: .9rem;
    font-size: .36rem;
}

.con-prev {
    position: absolute;
    left: .2rem;
    top: .2rem;
}

.con-prev i {
    font-size: .46rem;
}

.con-home {
    position: absolute;
    right: 0.2rem;
    top: .2rem;
}

.con-home i {
    font-size: .46rem;
}

.con-from p {
    width: 90%;
    height: 0.9rem;
    background: #fff;
    margin-left: auto;
    margin-right: auto;
    margin-top: .3rem;
}

.con-from p select {
    width: 40%;
    border: none;
    font-size: .28rem;
    padding-left: .15rem;
}

.con-from p.con-selcet-cont {
    display: flex;
    justify-content: space-between;
    background: #eee;
}

.con-from p.con-repeat select {
    width: 100%;
    height: 100%;
}

.con-from pre {
    width: 90%;
    height: 0.9rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: .5rem;
}

.con-from p input {
    width: 100%;
    height: 100%;
    border: none;
    padding-left: .15rem;
}

.con-from pre span {
    font-weight: bold;
    letter-spacing: 5px;
}

.con-from pre span b {
    border: 1px solid #ccc;
    width: 0.45rem;
    height: 0.45rem;
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: .05rem;
    text-align: center;
    color: #fff;
    font-size: .36rem;
}

.con-from pre span b.active {
    background: #fc4141;
}

.con-from pre span b.active::after {
    content: '√'
}

.con-publish {
    width: 100%;
    height: 0.8rem;
    text-align: center;
}

.con-publish button {
    width: 60%;
    height: 100%;
    background: #fc4141;
    border-radius: 15px;
    color: #fff;
    border: none;
    font-size: .36rem;
}
</style>
