<template>
    <div>
        <div>
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
    </div>
</template>

<script>
export default {
    methods:{
        off(){
            tomydata=false;
            this.$router.push('/self');
        }
    }
}
</script>

<style scoped>

</style>
