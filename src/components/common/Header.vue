<template>
    <div class="header">
        <span><router-link @click.native="$emit('change','Movie')" to="/">首页</router-link></span>
        <slot name="title">Movie</slot>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
    .header{
        height: 1rem;
        width: 100%;
        position: fixed;
        top: 0; 
        color: snow;
    }
    span{
        position: absolute;
        left: .1rem;
        line-height: 1rem;
    }
    span a{
        outline: none;
        color: snow;
    }
    h2{
        line-height: 1rem;
        text-align: center
    }
</style>