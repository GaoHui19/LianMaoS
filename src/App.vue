<template>
  <!-- <keep-alive :include="['home','product']"> -->
  <RouterView v-slot="{ Component }">
    <Transition :name="transitionName">
      <component :is="Component"></component>
    </Transition>
  </RouterView>
 <!-- </keep-alive> -->
  <van-tabbar route v-model="active" active-color="#ee0a24" v-if="$route.meta.showTab">
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="orders-o" to="/Type">分类</van-tabbar-item>
    <van-tabbar-item icon="cart-o" to="/Cart" :badge="num">购物车</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/Mine">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { watch,computed } from 'vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import {useStore} from 'vuex'
const store = useStore()
let num = computed(()=> store.state.cart.product.length)
let transitionName = ref('slide-left')
const route = useRoute()
watch(()=> route.meta.index,(to,from)=>{
  console.log(to,from)
  if(to<from){
    transitionName.value = 'slide-right'
  }else{
    transitionName.value = 'slide-left'
  } 
  console.log(transitionName.value)
})
let active = ref(0)
</script>

<style scoped lang="less">
// .slide-left-enter-active,
// .slide-left-leace-active{
//   transition: all ease-in .5;
// }
// .slide-left-enter-from {
//   transform: translateX(100%);
// }
// .slide-left-enter-to{

// }
// .slide-left-leave-from{}
// .slide-left-leave-to{
//   transform: translateX(-100%);
// }
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all ease-in .3s;
  position: absolute;
}

.slide-left-enter-from{
  transform: translateX(100%);
}
.slide-left-leave-to {
  transform: translateX(-100%);
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all ease-in .3s;
  position: absolute;
}

.slide-right-enter-from{
  transform: translateX(-100%);
}
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>