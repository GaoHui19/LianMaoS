<template>
    <div class="wrap">
        <div class="search">
        <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="() => this.$router.go(-1)">
            <template #title>
                <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center" autofocus />
            </template>
            <template #right>
                <span @click="searchgo">搜索</span>
            </template>
        </van-nav-bar>
    </div>
    <div class="hot">
        <h3>热搜词</h3>
        <ul>
            <li v-for="item in search" :class="[item.hot?'hot':'']" @click="push(item.title)"><span>{{ item.title }}</span> 
                <van-icon name="fire-o" color="#ee0a24" v-if="item.hot"/>
            </li>
        </ul>
    </div>
    <div class="history">
        <div><h3>历史搜索</h3> <span @click="closeHistory">X</span></div>
        <ul>
            <li v-for="item in historyArr">
                <span>{{item}}</span>
            </li>
        </ul>
    </div>
    </div>
    
</template>

<script setup>
import axios  from "axios";
import {ref} from 'vue'
import { showConfirmDialog } from 'vant';
let value = ref('')
let  search = ref([])
let historyArr = ref([])
if(JSON.parse(localStorage.getItem('historyArr'))) historyArr.value = JSON.parse(localStorage.getItem('historyArr'))

axios.get('https://lianmall.usemock.com/hotData').then(
    res =>{
        if(res.data.code){
            search.value = res.data.data
        }
        console.log(res)
    }
)
function push(item){
  historyArr.value.unshift(item) 
  historyArr.value =  Array.from(new Set(historyArr.value))
  localStorage.setItem('historyArr',JSON.stringify(historyArr.value))
}
function closeHistory(){
    showConfirmDialog({
  title: '?',
  message:
    '确定删除历史记录吗',
})
  .then(() => {
    localStorage.removeItem('historyArr')
    historyArr.value = []
  })
  .catch(() => {
  });
}
function searchgo(){
    if(value){
        push(value.value)
    }
    value.value = ''
}
</script>

<style scoped lang="less">
.wrap{
    height: 100vh;
    background-color: #eee;
    .search{
        overflow: hidden;
    }
}
h3 {
    font-size: 14px;
    color: red;
    padding-left:10px ;
}
.hot ul{
    display: flex;
    flex-wrap: wrap;
    li{
        padding: 10px ;
        font-size: 12px;
        border: 1px solid black;
        margin: 10px;
    }
    li.hot{
        color: red;
        border-color: red;
    }
}
  .history>div{
    display: flex;
    justify-content: space-between;
    margin-right:10px ;
    span{
        color: #fff;
    }
  }  
</style>