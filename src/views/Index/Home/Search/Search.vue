<template>
  <div id="search">
        <header class="seh-header">
            <div class="prev" @click="seh_prev">
                <i class="fa fa-angle-left"></i>
            </div>
            <h1><input type="text" placeholder="请输入您要找的商品" v-model="searchInput"></h1>
            <div class="seh-search" @click="seh_search">
                搜索
            </div>
        </header>
        <section class="seh-section">
            <div class="lately">
                <p><span>最近搜索</span><span><i class="fa fa-bank" @click="_clear"></i></span></p>
                <h4 v-if="this.searchHistoryList.length==0">无搜索历史....</h4>
                <ul class="lately-list" v-else>
                    <li v-for="(item,idx) in searchHistoryList" :key="idx">{{item}}</li>
                </ul>
            </div>
            <div class="everyone">
                <p><span>大家都在搜</span></p>
                <ul class="everyone-list">
                    <li>蜂蜜</li>
                    <li>三黄鸡</li>
                  
                </ul>
            </div>
        </section>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
    data () {
        return{
            searchInput:'',
            searchHistoryList:[]
        }
    },
    created () {
       this.getHistory()
    },
    methods:{
        seh_prev () {
            this.$router.push({name:'Home'})
        },
        seh_search () {
          
          if(this.searchInput=='') return;

          let ls = localStorage;
          let shistory = ls.getItem('searchHistory');
          if(!shistory){
              ls.setItem('searchHistory',JSON.stringify([this.searchInput]))
          }else{
             let newHistory =  JSON.parse(shistory);
              
              newHistory.unshift(this.searchInput);

              newHistory =  _.uniq(newHistory);

              ls.setItem('searchHistory',JSON.stringify(newHistory));

               this.getHistory()
            
          }
       
        },
        getHistory () {
            let ls = localStorage;
            this.searchHistoryList = JSON.parse(ls.getItem('searchHistory'))
        },
        _clear () {
            this.searchHistoryList = ''
            
        }
    }
}
</script>

<style scoped>
#search{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
}
.seh-header{
    width: 100%;
    height: .88rem;
}
.seh-header h1{
    text-align: center;
    line-height: .88rem;
    font-size: .24rem;
}
.seh-header h1 input{
    width: 3.9rem;
    height: .6rem;
    background: #f6f6f6;
    border:none;
    padding-left: .25rem;
    border-radius: 3px;
}
.prev{
    position: absolute;
    left: .2rem;
    top:.2rem;
  
}
.prev i{
    font-size: .42rem;
    color:#333;
}
.seh-search{
    position: absolute;
    right: .2rem;
    top:.15rem;
    font-size: .36rem;
    color:#333;
}
.seh-section{
    flex:1;
    overflow-y: scroll;
}
.lately{
    width: 100%;
    height: auto;
}
.lately h4{
    padding-left: .3rem;
    font-size: .32rem;
}
.lately p{
    display: flex;
    justify-content: space-between;
    padding-left: .3rem;
    padding-right: .3rem;
    height: 0.8rem;
    line-height: .8rem;
}
.lately p span{
    font-size: .32rem;
    color:#666;
}
.lately-list{
    padding-left: .2rem;
    padding-right: .2rem;
    width: 100%;
    height: auto;
    background: #fff;
    margin-top: .1rem;
}
.lately-list li{
    float: left;
    padding-left: .35rem;
    padding-right: .35rem;
    padding-top: .1rem;
    padding-bottom: .1rem;
    border:1px solid #666;
    border-radius: 5px;
    margin-right: .07rem;
    margin-left: .07rem;
    font-size: .32rem;
    margin-bottom: .25rem;
    
}
.everyone p{
    clear: both;
    margin-top: .1rem;
    padding-left: .3rem;
    padding-right: .3rem;
    height: 0.8rem;
    line-height: .8rem;
}
.everyone span{
    font-size: .32rem;
    color:#666;
}
.everyone-list{
    padding-left: .2rem;
    padding-right: .2rem;
    width: 100%;
    height: auto;
    margin-top: .1rem;
}
.everyone-list > li{
     float: left;
    padding-left: .35rem;
    padding-right: .35rem;
    padding-top: .1rem;
    padding-bottom: .1rem;
    border:1px solid #666;
    border-radius: 5px;
    margin-right: .05rem;
    margin-left: .05rem;
    font-size: .32rem;
    margin-bottom: .25rem;
}
</style>
