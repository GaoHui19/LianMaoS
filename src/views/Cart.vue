<template>
    <div>
        <h3>购物车</h3>
        <template v-if="!shopArr">
            <div>空空当当</div>
        </template>
        <template v-for="i in shopArr">
            <van-swipe-cell>
                <van-card :num="i.num" :price="i.price" :desc="i.name" :title="i.title" :thumb="i.img">
                    <template #tag>
                        <input type="checkbox" ref="check" :checked="i.check" @change="radio(i)">
                    </template>
                </van-card>
                <template #right>
                    <van-button square text="删除" type="danger" class="delete-button" @click="remove(i)" />
                </template>
            </van-swipe-cell>
        </template>
        <input type="checkbox" ref="checkAll" @change="fanquan">
        <van-submit-bar :price="zongjia*100" button-text="提交订单" @submit="onSubmit" />
        <van-action-sheet v-model:show="show" :actions="actions" cancel-text="取消" close-on-click-action @cancel="onCancel"
            @select="goPay" :overlay="true" />
    </div>
</template>

<script setup>
import { ref, computed} from 'vue'
import { showToast, showLoadingToast } from 'vant';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore()
let router = useRouter()
const show = ref(false);
let shopArr = computed(() => store.state.cart.product);
const onSubmit = () => show.value = true;
let check = ref(null)
let checkAll = ref(null)
let zongjia = ref(0)
function remove(item) {
    store.commit('removeCart', item)
    sum()
}

function radio(item) {
    item.check = !item.check
    store.commit('radio',item)
    let flag = check.value.every(item => {
        return item.checked
    })
    if (flag) {
        checkAll.value.checked = true
    } else {
        checkAll.value.checked = false
    }
    sum()
}

function fanquan() {
    checkAll.checked = !checkAll.checked
    store.commit('fanquan',checkAll)
    sum()
}


// 计算总价
function sum() {
    let arr = shopArr.value.filter(item => item.check === true)
    zongjia.value = arr.reduce((pre,item)=>{
        return pre += item.num*item.price
    },0)
    return zongjia 
}

const actions = [
    { name: '微信' },
    { name: '支付宝' },
    { name: '银行卡' },
];
const onCancel = () => showToast('取消');
function goPay(action) {
    if (action.name == "微信") {
        showLoadingToast({
            message: '加载中...',
            forbidClick: true,
            onClose() {
                router.push({ path: '/order' })
            }
        })

    }
}
</script>

<style scoped>
.goods-card {
    margin: 0;
}

.delete-button {
    height: 100%;
}

.van-submit-bar {
    bottom: 50px;
}

h3 {
    margin: 10px auto;
    text-align: center;
    font-size: 16px;
}
</style>