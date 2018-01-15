import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
    state:{
        cart_list:[],
        all_price:0,
        select_all:false,
        user_address:[]
    },
    mutations:{
        updated_cart(state,data){
            var flag = true;
            state.cart_list = state.cart_list.map(item=>{
                if(item.id == data.id){
                    flag = false
                    ++item.count
                }
                return item
            })
            if(flag){
                state.cart_list.push(data)
            }
             
           
        },
        change_selected_all (state,data){   //全选
            state.cart_list.forEach((item)=>{
                item.checked = data.select_all
            })
        },
        change_price (state) {   //金钱
            var sum = 0;
            state.cart_list.forEach((item)=>{
                if(item.checked){
                     sum+=item.count*item.price;
                }
            })
            state.all_price = sum.toFixed(2)
        },
        change_selected_radio(state,data){   //所有的单选选中 全选也 选中
            var flag = true;
            state.cart_list.forEach((item)=>{
                if(item.id == data.id){
                     item.checked = data.checked
                }
                if(!item.checked){
                    flag = false
                }
            })
            if(flag){
                state.select_all = true
            }else{
                state.select_all = false
            }
        },
        shopcar_list_remove(state,data){  //购物车删除
            state.cart_list.forEach((item,idx)=>{
                if(item.checked){
                    state.cart_list.splice(idx,data.length)
                }
            })
            if(state.cart_list.length==0){
                state.select_all = !state.select_all
            }
        },
        updated_user_address(state,data){   //收货人地址信息
            state.user_address.push(data)
        },
        user_address_remove(state,data){   //删除收货地址
          state.user_address.forEach((item,idx)=>{
            if(item.id == data.id){
                state.user_address.splice(idx,1)
            }
          })
        },
        replace_address(state,data){
           state.user_address.forEach((item,idx)=>{   //编辑 根据id 更改
            if(item.id == data.id){
                item.id = data.user_tel,
                item.user_name=data.user_name,
                item.user_tel=data.user_tel,
                item.province=data.province,
                item.city=data.city,
                item.eaer=data.eaer,
                item.detailed_address=data.detailed_address
            }
          })
        }

    }
})
store.subscribe(()=>{
 console.log(store.state.user_address)
})
export {store}