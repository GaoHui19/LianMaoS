<template>
    <div class="wrap">
        <h3>交易详情</h3>
        <goBack></goBack>
        <div class="con">
            <van-icon name="checked" color="greenyellow"/>
            <h4>1099 TOP</h4>
            <p>支付成功</p>
            <div>
                <span>商品</span> <p>好看的衣服</p>
            </div>
            <div>
                <span>支付方式</span> <p>微信</p>
            </div>
            <div>
                <span>支付单号</span> <p>1223451993201201389</p>
            </div>
            <div>
                <span>成交时间</span> <p>{{ date }}</p>
            </div>
            <div>
                 <van-button @click="jumpType">完成</van-button>
                 <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" @click="jumpShop">返回商家</van-button>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import goBack from '../components/goBack.vue';
import { useRouter } from 'vue-router';
import {ref} from 'vue'
let router = useRouter()
let date = ref(new Date())
let y = date.value.getFullYear() 
let m = date.value.getMonth()+1
let d = date.value.getDate()
let h = date.value.getHours()
let f = date.value.getMinutes()
let s = date.value.getSeconds()
date.value = y+'/'+m+'/'+d+' '+h+':'+f+':'+s
function jumpType(){
    router.push({path:'/Type'})
}
function jumpShop(){
    router.push({path:'/shop'})
}
</script>

<style scoped lang="less">
    p,h4,div{
        margin: 0;
        padding: 0;
    }
    .wrap{
       width: 100vw;
       height: 100vh;
        background-color: #eee;
        
        overflow: hidden;
        h3{
            font-size: 16px;
            margin: 10px auto;
            text-align: center;
        }
        .con{
            padding-top: 30px;
            display: flex;
            flex-direction: column;
            // justify-content: center;
            align-items: center;
            width: 90vw;
            margin: 20px auto;
            background-color: #fff;
            h4{
                margin: 20px 0;
            }
            div{
                width: 90%;
                margin-top: 20px;
                font-size: 12px;
                display: flex;
                justify-content: space-between;
                .van-button{
                    width: 100px;
                    margin-bottom: 10px;
                }
            
            }
        }
    }
</style>