<template>
    <ul class="footer">
        <li><router-link @click.native="$emit('change','Movie')" to="/">电影</router-link></li>
        <li><router-link @click.native="$emit('change','Mine')" :to="ref">我的</router-link></li>
    </ul>
</template>
<script>
export default {
    data(){
        return {
            ref:tomydata == false ? '/self' : `/mydata/${username}`
        }
    }
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