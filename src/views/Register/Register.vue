<template>
  <div id="register">
    <header class="register-header">
        <div class="register-prev">
            <i class="fa fa-angle-left"></i>
        </div>
        <h1>注册717</h1>
        <div class="register-login">
            <span @click="go_user_login">登陆</span>
        </div>
    </header>
    <section class="register-section">
        <form action="" class="register-form">
            <ul>
                <li><img src="http://www.lb717.com/static/mobile/images/denglu_img/number.png" alt="账号"><input type="text" placeholder="请输入您的手机号" v-model="user_tel"></li>
                <li><img src="http://www.lb717.com/static/mobile/images/denglu_img/code.png" alt="验证马"><input type="text" placeholder="请输入验证码" v-model="yzms"> <span @click="yzm">获取验证码</span></li>
                <li><img src="http://www.lb717.com/static/mobile/images/denglu_img/password.png" alt="密码"><input type="password" placeholder="请输入您的密码" v-model="user_password"></li>
            </ul>
        </form>
        <div class="go_registerg">
            <button @click="go_to_register">立即注册</button>
        </div>
    </section>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data () {
        return{
            user_tel:'',
            user_password:'',
            rendoms:'',
            yzms:''
        }
    },
  methods:{
    go_user_login () {
      this.$router.push({'name':'Login'})
    },
    go_to_register () {
        
    if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.user_tel))){ Toast('请输入正确的手机号'); this.user_tel=''; return;}
    if(!this.user_tel){Toast('请输入手机号'); return;}  
    if(!this.user_password){Toast('请输入密码'); return;} 

    this.$http.post('/admin/registerUser',{
            user_password:this.user_password,
            user_tel:this.user_tel
        }).then((res)=>{
           if(res.data.code=='1'){
              this.rendoms = res.data.rendoms
               Toast('注册成功')
               
           }
        })
    },
    yzm () {
        this.yzms = this.rendoms
    }
  }
}
</script>

<style scoped>
#register{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  
}
.register-header{
    width: 100%;
    height: 0.9rem;
    background: #fafafb;
    position: relative;
}
.register-header h1{
    text-align: center;
    line-height: .9rem;
    font-size: .32rem;
}
.register-prev{
    position: absolute;
    left: 0.2rem;
    top:.25rem;

}
.register-prev i{
    color:#4e4e4e;
    font-size: .45rem;
}
.register-login{
    position: absolute;
    right: 0.2rem;
    top:.2rem;
}
.register-login span{
    color:#fc4141;
    font-size: .32rem;
}

.register-section{
    flex:1;
    overflow-y: auto;
}
.register-form{
    width: 100%;
    height:auto;
     margin-top: .3rem;    
}
.register-form ul li{
    height: 1rem;
    background: #fff;
    display: flex;
    padding-left: .2rem;
    padding-right: .2rem;
    position: relative;
}
.register-form ul li span{
  position: absolute;
  right: 0.15rem;
  top:0.1rem;
  width: 2rem;
  height: 0.8rem;
  border:1px solid #fc4141;
  color:#fc4141;
  border-radius: .25rem;
  text-align: center;
  line-height: .8rem;
  font-size: .32rem;
}
.register-form ul li img{
    width: 0.45rem;
    height: 0.45rem;
    position: relative;
    top:.3rem;
}
.register-form ul li input{
    flex:1;
    border:none;
    padding-left: .2rem;
    border:1px solid #fff;
    outline: none; 
}
.go_registerg{
    margin-top: 1rem;
    text-align: center;

}
.go_registerg button{
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
