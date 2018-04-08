<template>
    <div class="header" :style="{background:bgc}">
        <span>首页</span>
        <slot name="title">Movie</slot>
    </div>
</template>
<script>
export default {
  props:['bgc']  
}
</script>
<style scoped>
    .header{
        height: 1rem;
        width: 100%;
        /* background-color: darkturquoise; */
        position: fixed;
        top: 0; 
        color: snow;
    }
    span{
        position: absolute;
        left: .1rem;
        line-height: 1rem;
    }
    h2{
        line-height: 1rem;
    }
</style>