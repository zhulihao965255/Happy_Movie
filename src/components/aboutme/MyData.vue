<template>
    <div class="content">
        <div class="self-info">
            <span>{{ $route.params.name }}</span>
            <span @click="off">退出</span>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <div class="input-group">
                <input type="text" class="form-control" placeholder="Search for...">
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button">Go!</button>
                </span>
                </div><!-- /input-group -->
            </div><!-- /.col-lg-6 -->
        </div><!-- /.row -->
        <div>{{ show }}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
           datas:'' 
        }
    },
    methods:{
        off(){
            tomydata=false;
            username='';
            this.$router.push('/self');
        }
    },
    computed:{
        show(){
            this.datas=localStorage.getItem(username+cookie.search(username)).split('---')[1];
            return this.datas;
        }
    }
}
</script>

<style scoped>

</style>
