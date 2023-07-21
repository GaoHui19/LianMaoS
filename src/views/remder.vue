<template>
    <div class="wrap">
        <van-nav-bar title="推荐" left-text="返回" left-arrow @click-left="() => this.$router.go(-1)" />
        <router-link to="search">
            <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center" />
        </router-link>

        <div class="con">
            <template v-for="i in list" :key="i.id">
                <div @click="jumpPro(i)">
                    <van-card num="2" :price="i.itemPrice" :desc="i.storeName" :title="i.itemTitle" :thumb="i.imgUrl" />
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
let value = ref('')
import { recommendData } from '../api/index'
import { remderImgData } from '../api/index'
let list = ref([])
recommendData().then(res => {
    if (res.code === 200) {
        list.value = res.data
    }
    console.log(res)
})
remderImgData().then(res=>{
    console.log(res)
})
function jumpPro(i){
    console.log(i)
}
</script>

<style scoped lang="less">
.wrap {
    background-color: #eee;

    .van-nav-bar__content {
        background-color: none;
    }

    .search {
        width: 90vw;
        margin: 20px auto;
    }

    .con {
        width: 90vw;
        margin: 20px auto;
        div{
            margin-top: 10px;
        }
    }
}
</style>