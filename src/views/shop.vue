<template>
    <div class="wrap">
        <div class="go" @click="() => this.$router.go(-1)"> > </div>
    <div class="shopPro">
        <h3>店铺详情</h3>
        <img src="../images/product/store-headerM.png" alt="">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repudiandae fugit</p>
        <p>电话:18838080742</p>
        <p>地址：广东省深圳市</p>
        <van-button type="danger" size="small">联系店家</van-button>
    </div>
    <div class="order">
        <div :class="index==0?'actvie':''" @click="()=>index=0">默认排序</div>
        <div :class="index==1?'actvie':''" @click="()=>index=1"><span>按价格</span>
            <div class="arrow">
                <van-icon name="play" class="up" />
                <van-icon name="play" class="down" />
            </div>
        </div>
        <div :class="index==2?'actvie':''" @click="()=>index=2"><span>按销量</span>
            <div class="arrow">
                <van-icon name="play" class="up" />
                <van-icon name="play" class="down" />
            </div>
        </div>
        <div>
            <van-icon name="search" size="20px"  @click="jumpSearch"/>
        </div>
    </div>
    <div class="tab-con">
        <div v-for="item in conTab" @click="jumpProduct(item)">
            <img :src="item.img" alt="">
            <p class="title">{{ item.title }}</p>
            <div class="price">
                <span>{{ item.forceValue }}倍算</span>
                <p>+</p>
            </div>
        </div>
    </div>
    </div>
    
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import { getHomeData } from '../api';
import { watch } from 'vue';
let index = ref(0)
let router = useRouter()
let conTab = ref([])
watch(index,(a,b)=>{
    console.log(a,b)
})
getHomeData().then(res => {
    if (res.code === 200) {
        conTab.value = res.tabList[0].list
    }
    console.log(res)
})
function jumpProduct(item){
    router.push({path:'/product',query:item})
}
function jumpSearch(){
    router.push({path:'/search'})
}
</script>

<style scoped lang="less">
.actvie{
    color: red;
}
.wrap{
    background-color: #eee;
}
.arrow {
    position: relative;
}

.up {
    transform: rotate(90deg);
    position: absolute;
    top: 8px;
    left: 0;
}

.down {
    transform: rotate(-90deg);
    position: absolute;
    bottom: 8px;
    left: 1px;
}

.go {
    width: 30px;
    height: 30px;
    border: 1px solid greenyellow;
    color: greenyellow;
    line-height: 30px;
    text-align: center;
    position: absolute;
    top: 30px;
    left: 30px;
    border-radius: 50%;
    z-index: 500;
}

.shopPro {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 16px;
        width: 90vw;
        margin: 10px auto;
    }
}

h3 {
    margin: 10px 0;
    padding: 0;
}

.order {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    align-items: center;
    background-color: #fff;
    div {
        display: flex;
        background-color: #fff;
        padding: 10px;
    }
}
.tab-con {
    width: 90vw;
    margin: 0 auto;
}

.tab-con {
    columns: 2;
    margin-top: 10px;
}

.tab-con>div {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 10px;
    break-inside: avoid;
}

.tab-con>div img {
    width: 100%;
    height: 196px;
}

.tab-con>div>.title {
    text-indent: 2em;
    font-size: 12px;
    margin-top: 10px;
}

.tab-con>div>.price {
    display: flex;
    font-size: 12px;
    justify-content: space-around;
    margin: 10px 0;

    span {
        width: 50px;
        height: 20px;
        border-radius: 10px;
        background-color: red;
        line-height: 20px;
        text-align: center;
    }

    p {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background-color: red;
        text-align: center;
        line-height: 20px;
    }
}
</style>