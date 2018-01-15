<template>
  <div id="login">
    <header class="login-header">
        <div class="login-prev">
            <i class="fa fa-angle-left"></i>
        </div>
        <h1>登陆717</h1>
        <div class="login-register">
            <span @click="go_user_register">注册</span>
        </div>
    </header>
    <section class="login-section">
        <form action="" class="login-form">
            <ul>
                <li><img src="http://www.lb717.com/static/mobile/images/denglu_img/number.png" alt="账号"><input type="text" placeholder="请输入您的手机号" v-model="user_tel"></li>
                 
                <li><img src="http://www.lb717.com/static/mobile/images/denglu_img/password.png" alt="密码"><input type="password" placeholder="请输入您的密码" v-model="user_password"></li>
            </ul>
        </form>
        <div class="go_loging">
            <button @click="go_to_login">立即登陆</button>
        </div>
        
        <div :class="{mark:bool}">
            <mt-spinner type="double-bounce" color="#fc4141" v-if="bool"></mt-spinner>
        </div>
       
    </section>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import {setCookie} from '../../util/utils.js';
export default {
    data () {
        return{
            user_tel:'',
            user_password:'',
            bool:false
        }
    },
    methods:{
        go_user_register () {
            this.$router.push({name:'Register'})
        },
        go_to_login () {
            if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.user_tel))){ Toast('请输入正确的手机号'); this.user_tel=''; return;}
            if(!this.user_tel){Toast('请输入手机号'); return;}  
            if(!this.user_password){Toast('请输入密码'); return;} 
             this.$http.post('/admin/loginUser',{
                user_password:this.user_password,
                user_tel:this.user_tel
            }).then((res)=>{
               
                if( res.data.code=='1'){
                    setCookie('token',res.data.token)
                    Toast('登陆成功');
                    this.bool=true
                    setTimeout(()=>{
                        this.$router.push({name:'Home'});
                        this.bool=false
                    },1500)
                }
            })
        }
    }
}
</script>

<style scoped>
#login{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.mark{
    position: fixed;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255,.6);
    display: flex;
    align-items: center;
    justify-content: center;
}
.mint-spinner-double-bounce{
    width: 48px;
    height: 48px;
}
.login-header{
    width: 100%;
    height: 0.9rem;
    background: #fafafb;
    position: relative;
}
.login-header h1{
    text-align: center;
    line-height: .9rem;
    font-size: .32rem;
}
.login-prev{
    position: absolute;
    left: 0.2rem;
    top:.25rem;

}
.login-prev i{
    color:#4e4e4e;
    font-size: .45rem;
}
.login-register{
    position: absolute;
    right: 0.2rem;
    top:.2rem;
}
.login-register span{
    color:#fc4141;
    font-size: .32rem;
}

.login-section{
    flex:1;
    overflow-y: auto;
}
.login-form{
    width: 100%;
    height:auto;
     margin-top: .3rem;    
}
.login-form ul li{
    height: 1rem;
    background: #fff;
    display: flex;
    padding-left: .2rem;
    padding-right: .2rem;
}
.login-form ul li img{
    width: 0.45rem;
    height: 0.45rem;
    position: relative;
    top:.3rem;
}
.login-form ul li input{
    flex:1;
    border:none;
    padding-left: .2rem;
    border:1px solid #fff;
    outline: none;
}
.go_loging{
    margin-top: 1rem;
    text-align: center;

}
.go_loging button{
    width: 70%;
    height: 1rem;
    background: #fc4141;
    border:none;
    border-radius: 20px;
    font-synthesis: .36rem;
    color:#fff;
    outline: none;
}
</style>
