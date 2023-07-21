<template>
    <div class="wrap">
        <div class="header">
            <div class="banner">
                <van-swipe :autoplay="3000" lazy-render>
                    <van-swipe-item v-for="item in swiperData" :key="item.categoryId" @click="jumpProduct(item)">
                        <img :src="item.imgUrl" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <router-link to="search">
                <div class="search">
                    <van-search placeholder="请输入搜索关键词" input-align="center" />
                    <van-icon name="service-o" class="icon" color="#fff" />
                </div>
            </router-link>

        </div>
        <div class="scrollBanner">
            <van-swipe :loop="false" :width="260" :show-indicators="false">
                <van-swipe-item v-for="item in swiperData" :key="item.categoryId"><img :src="item.imgUrl"
                        alt=""></van-swipe-item>
            </van-swipe>
        </div>
        <div class="nav">
            <nav v-for="item in navList" :key="item.id" class="nav-item" @click="jumpSearch">
                <img :src="'/src/images/home/' + item.img" alt="">
                <span> {{ item.name }} </span>
            </nav>
        </div>
        <div class="show">
            <div class="showHeader">
                <div class="sniping">
                    <div class="item-header">
                        <h3 class="title">链猫秒杀</h3>
                        <div class="dataTime">
                            <p class="presetTime">8点场</p>
                            <p class="countDown"><van-count-down :time="time" /></p>
                        </div>
                    </div>
                    <div class="item-con">
                        <div v-for="item in sniping">
                            <img :src="'/src/images/home/' + item.img" alt="">
                            <span class="price-now">{{ item.price_now }}</span>
                            <del class="price-old">{{ item.price_old }}</del>
                        </div>
                    </div>
                </div>
                <div class="products">
                    <div class="item-header products-header">
                        <h3 class="title">发现好物</h3>
                        <div class="good-quality">
                            品质好物
                        </div>
                    </div>
                    <span>好物不贵</span>
                    <div class="con-img">
                        <img src="../images/home/demo4.png" alt="">
                        <img src="../images/home/demo5.png" alt="">
                    </div>
                </div>
            </div>
            <div class="con-list">
                <div v-for="item in conList" :key="item.id">
                    <h4>{{ item.title }}</h4>
                    <span>{{ item.name }}</span>
                    <img :src="'/src/images/home/' + item.img" alt="">
                </div>
            </div>
            <div class="item-footer">
                <div class="products">
                    <div class="item-header products-header">
                        <h3 class="title">大牌购走</h3>
                        <div class="good-quality">
                            戴尔 >
                        </div>
                    </div>
                    <span>信赖大品牌</span>
                    <div class="con-img">
                        <img src="../images/home/demo10.png" alt="">
                        <img src="../images/home/demo11.png" alt="">
                    </div>
                </div>
                <div class="products">
                    <div class="item-header products-header">
                        <h3 class="title">爱逛好店</h3>
                        <div class="good-quality">
                            懂你所要
                        </div>
                    </div>
                    <span>来逛个够</span>
                    <div class="con-img">
                        <img src="../images/home/demo12.png" alt="">
                        <img src="../images/home/demo13.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- tab -->
        <div class="tab">
            <van-tabs v-model:active="active" :ellipsis="false" background="none" animated>
                <van-tab v-for="item in conTab">
                    <template #title>
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.name }}</p>
                    </template>
                    <div class="tab-con">
                        <div v-for="item in item.list" @click="jumpProduct(item)">
                            <img :src="item.img" alt="">
                            <p class="title">{{ item.title }}</p>
                            <div class="price">
                                <span>{{ item.forceValue }}倍算</span>
                                <p @click.stop="addCar(item)">+</p>
                                <p class="a" ref="ball" ></p>
                            </div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <footer></footer>
    </div>
</template>

<script setup>
import { ref,provide } from 'vue';
import { getHomeData } from '../api/index'
import { useRouter } from 'vue-router';
import {useStore} from 'vuex'
const store = useStore()
let router = useRouter()
let swiperData = ref([])
let scrollBanner = ref([])
const active = ref(0);
let navList = ref([
    {
        id: 0,
        name: '链猫精品',
        img: 'nav1.png'
    },
    {
        id: 1,
        name: 'MC专区',
        img: 'nav2.png'
    },
    {
        id: 2,
        name: '领MC币',
        img: 'nav3.png'
    },
    {
        id: 3,
        name: '领券',
        img: 'nav4.png'
    },
    {
        id: 4,
        name: '链猫会员',
        img: 'nav5.png'
    }
])

const time = ref(30 * 60 * 60 * 1000);
let sniping = ref([
    {
        id: 0,
        img: 'demo1.png',
        price_now: '￥298',
        price_old: '￥399'
    }, {
        id: 1,
        img: 'demo2.png',
        price_now: '￥298',
        price_old: '￥399'
    }, {
        id: 2,
        img: 'demo3.png',
        price_now: '￥298',
        price_old: '￥399'
    }

])
let conList = ref([
    {
        id: 0,
        title: '特价秒杀',
        name: '10元抢购',
        img: 'demo6.png'
    },
    {
        id: 1,
        title: '品牌秒杀',
        name: '笔记本秒杀',
        img: 'demo7.png'
    },
    {
        id: 2,
        title: '新品首发',
        name: '小黑盒新品',
        img: 'demo8.png'
    },
    {
        id: 3,
        title: '优品排行',
        name: '榜上好物购',
        img: 'demo9.png'
    },
])
let conTab = ref([])
getHomeData().then(res => {
    if (res.code === 200) {
        swiperData.value = res.banners
        scrollBanner.value = res.banners2
        conTab.value = res.tabList
    }
    
    console.log(res)
})
function jumpProduct(item){
    router.push({path:'/product',query:item})
}
function jumpSearch(){
    router.push({path:'/search'})
}
// let shopArr = JSON.parse(localStorage.getItem('shopArr')) ? JSON.parse(localStorage.getItem('shopArr')):[]
function addCar(item){
    // shopArr.unshift(item)
    // console.log(shopArr)
    // localStorage.setItem('shopArr',JSON.stringify(shopArr))
    store.commit('addCart',item)
}
// 小球
// let ball = ref(ball)
// onMounted(
//     console.log(ball)
// )
</script>

<style scoped lang="less">
p,
h3,
h4 {
    margin: 0;
    padding: 0;
}

.wrap {
    background-color: #eee;
    width: 100vw;
}

.header {
    position: relative;
}

.my-swipe .van-swipe-item {
    color: #fff;
    width: 100%;
    height: 260px;
    background-color: #39a9ed;
}

.banner img {
    width: 100%;
    height: 100%;
}

.search {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    top: 10px;
}

.van-search {
    background: none;
}

.icon {
    margin-left: 20px;
}

.scrollBanner van-swipe {
    display: flex;
}

.scrollBanner .van-swipe-item {
    display: flex;
    align-items: center;
    justify-content: center;
}

.scrollBanner img {
    width: 222px;
    height: 90px;
    border-radius: 16px;
}

.nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
}

.nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
}

.nav-item img {
    width: 43px;
    height: 43px;
    border-radius: 50%;
    margin-bottom: 10px;
}

.show {
    width: 90vw;
    margin: 10px auto;
    background-color: #fff;
    border-radius: 10px;
    padding: 5px;
}

.dataTime {
    display: flex;
    justify-content: center;
    align-items: center;
}

.presetTime {
    width: 42px;
    height: 18px;
    background-color: red;
    color: #fff;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    margin-left: 10px;
}

.countDown {
    border: 1px solid #eee;
    width: 80px;
    text-align: center;
    color: red;
}

.item-header {
    display: flex;
    align-items: center;
    font-size: 13px;
}

.item-con {
    display: flex;
    justify-content: space-around;
}

.item-con div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
}

.item-con div .price-now {
    color: red;
}

.item-con div img {
    width: 54px;
    height: 54px;
}

.sniping {
    width: 195px;
}

.showHeader {
    display: flex;
    justify-content: space-between;
}

.good-quality {
    width: 64px;
    height: 18px;
    border: 1px solid orangered;
    color: orangered;
    line-height: 18px;
    text-align: center;
    margin-left: 5px;
}

.products span {
    font-size: 12px;
    color: #ccc;
}

.products {
    position: relative;
}

.products span {
    position: absolute;
    top: 35px;
}

.products .con-img {
    margin: 10px 0;
}

.con-list {
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
}

.con-list div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
}

.con-list div h4 {
    font-size: 14px;
    margin: 0;
}

.con-list div span {
    margin-top: 5px;
}

.con-list div:nth-child(1)>span {
    color: blue;
}

.con-list div:nth-child(2)>span {
    color: aqua;
}

.con-list div:nth-child(3)>span {
    color: orange;
}

.con-list div:nth-child(4)>span {
    color: orangered;
}

.item-footer {
    display: flex;
    justify-content: space-around;
}

.van-tab__text h3 {
    margin: 0;
    font-size: 12px;
    text-align: center;
}

.van-tab__text p {
    margin: 0;
    font-size: 12px;
    text-align: center;

}

.tab .van-tabs__nav {
    width: 100%;
    box-sizing: border-box;
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
footer{
    height: 50px;
}
.price{
    position: relative;
}
.ani {
    position: absolute;
    right: 28px;
    z-index: -1;
    animation: move 1s ease-in .5s ;
}
@keyframes move {
    from{
        top: 0;
        z-index: -1;
    }
    to{
        top: 100%;
        z-index: 10;
    }
}
</style>