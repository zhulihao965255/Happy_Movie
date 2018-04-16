<template>
    <div class="login">
        <form action="" class="self-info">
            <label for="username">你的名字:</label>
            <input v-model="name" type="text" name="" id="username"><br/>
            <label for="password">你的密码:</label>
            <input v-model="password" type="password" name="" id="password"><br/>
            <button type="button" @click="login">登录</button>
        </form>
    </div>       
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: "",
      oPassword: "",
    };
  },
  methods: {
    login(){     
        if(this.password===cookie.search(this.name)){
            tomydata=true;
            username=this.name;
            this.$router.push(`/mydata/${username}`);
        }else{
            alert('账号和密码不匹配');
        }
    }
  },
  
};
</script>

<style scoped>
.login {
  margin: 1rem 0.1rem;
  font-size: 0.3rem;
}
.login input {
  border: gray solid 1px;
}
</style>
