<template>
    <ul class="footer" :style="{background:bgc}">
        <li><router-link to="/">电影</router-link></li>
        <li><router-link to="/music">音乐</router-link></li>
        <li><router-link to="/book">书籍</router-link></li>
        <li><router-link to="/photo">照片</router-link></li>
    </ul>
</template>
<script>
export default {
    props:['bgc']
}
</script>
<style scoped>
    .footer{
        height: 1rem;
        width: 100%;
        background-color: darkturquoise;
        display: flex;
        list-style-type: none;
        position: fixed;
        bottom: 0;
    }
    .footer li{
        flex-grow: 1;
    }
    a{
        line-height: 1rem;
        opacity: .4;
        color: white;
    }
    a.router-link-exact-active.router-link-active{
        opacity: 1;
    }
</style>