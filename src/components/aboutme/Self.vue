<template>
    <div class="self">
            <div>
                <div class="sign-in-out">
                    <span @click="login">登录</span>&nbsp;|
                    <span @click="register">注册</span>
                </div>
                <div>
                    <div :is="com"></div>
                </div>
            </div>
    </div>
</template>

<script>
import Register from '@/components/aboutme/Register'
import Login from '@/components/aboutme/Login'

export default {
    data(){
        return {
            com:Login,
        }
    },
    methods:{
        register(){
            this.com=Register;
        },
        login(){
            this.com=Login;
        }
    },
    beforeRouteEnter (to, from, next) {
      if(tomydata){
          next({path:'/mydata'});
      }else{
          next();
      }     
    }
};
</script>

<style scoped>
.self{
  margin: 1rem 0.1rem;
  font-size: .3rem;
}
.sign-in-out{
    color: forestgreen;
    margin-bottom: 1rem;
}
.self-info input{
    border: gray solid 1px;
    height: .5rem;
    margin-bottom: .2rem;
}
.self-content{
    margin: 1rem 0;
}
</style>
