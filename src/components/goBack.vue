<template>
    <div class="go" @click="() => this.$router.go(-1)"> &lt; </div>
</template>

<script setup>

</script>

<style scoped>
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

</style>