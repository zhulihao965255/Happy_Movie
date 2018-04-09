<template>
    <ul class="footer">
        <li><router-link @click.native="$emit('change','Movie')" to="/">电影</router-link></li>
        <li><router-link @click.native="$emit('change','Music')" to="/music">音乐</router-link></li>
        <li><router-link @click.native="$emit('change','Book')" to="/book">书籍</router-link></li>
        <li><router-link @click.native="$emit('change','Photo')" to="/photo">照片</router-link></li>
    </ul>
</template>
<script>
export default {
}
</script>
<style scoped>
    .footer{
        height: 1rem;
        width: 100%;
        display: flex;
        list-style-type: none;
        position: fixed;
        bottom: 0;
    }
    .footer li{
        flex-grow: 1;
        text-align: center
    }
    a{
        line-height: 1rem;
        opacity: .4;
        color: white;
        outline: none;
    }
    a.router-link-exact-active.router-link-active{
        opacity: 1;
    }
</style>