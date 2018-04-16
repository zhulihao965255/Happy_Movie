<template>
    <div class="register">
        <form action="" class="self-info">
            <label for="username">你的名字:</label>
            <input v-model="name" type="text" name="" id="username"><br/>
            <label for="password">你的密码:</label>
            <input v-model="password" type="password" name="" id="password"><br/>
            <label for="same-password">确认密码:</label>
            <input @blur="compare" v-model.lazy="oPassword" type="password" name="" id="same-password"><br/>
            <button type="button" @click="register">注册</button>
        </form>
    </div>       
</template>

<script>
export default {
     data(){
        return {
            name:'',
            password:'',
            oPassword:''
        }
    },
    methods:{
        compare(){
                if(this.password!==this.oPassword){
                    alert("密码必须一致");
                }            
        },
        register(){
                if(this.name==''||this.password==''||this.oPassword==''){
                    alert('不能为空');
                }else{
                    cookie.add(this.name,this.password,1);
                    tomydata=true;
                    username=this.name;
                    this.$router.push(`/mydata/${username}`);
                }
            }
    },
}
</script>

<style scoped>
.register{
  margin: 1rem 0.1rem;
  font-size: .3rem;
}
.register input{
     border: gray solid 1px;
}
</style>
