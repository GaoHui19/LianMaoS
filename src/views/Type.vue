<template>
    <div>
        <h3 class="title">商品分类</h3>
        <van-tree-select v-model:main-active-index="activeIndex" height="90vh" :items="navList">
            <template #content>
                <div class="con">
                    <div class="conItem">
                        <template v-for=" (item, index) in navList">
                            <div class="item" v-for="item in item.list" v-if="activeIndex == index">
                                <h3 class="con_title">{{ item.title }}</h3>
                                <div class="conWrap">
                                    <div v-for="item in item.productList" class="list" @click="remderHandler">
                                        <img :src="item.imgUrl" alt="">
                                        <p>{{ item.title }}</p>
                                    </div>
                                </div>
                            </div>
                        </template>

                    </div>
                </div>
            </template>
        </van-tree-select>
    </div>
</template>

<script setup>
import { getCategoryData } from '../api/index'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
let router = useRouter()
let navList = ref([])
const activeIndex = ref(0);
getCategoryData().then(res => {
    navList.value = res.categoryData
    navList.value = navList.value.filter(i => {
        return i.text = i.name
    })
    console.log(navList.value)
}
)
function remderHandler() {
    router.push('/remder')
}
</script>

<style scoped lang="less">
h3 {
    margin: 0;
    padding: 0;
}

.title {
    text-align: center;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
}

.con {
    width: 100%;

    .conItem {
        .item {



            .con_title {
                font-size: 14px;
                margin-left: 40px;
            }

            .conWrap {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin: 10px;

                .list,
                .div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin: 10px;
                }

                img {
                    width: 50px;
                    height: 50px;
                }

                p {
                    font-size: 12px;
                }
            }
        }
    }
}

.nav {
    height: 100vw;
}
</style>