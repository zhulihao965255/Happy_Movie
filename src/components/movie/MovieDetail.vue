<template>
    <div class="movie">
        <div class="movie-detail">
            <div class="movie-img">
               <img :src="moviedetail.img" alt="">
            </div>
            <div class="movie-content">
                <p>{{moviedetail.nm}}</p>
                <p>导演:{{moviedetail.dir}}</p>
                <p>演员:{{ this.stars }}</p>
                <p>{{moviedetail.cat}}</p>
                <p>上映时间:{{moviedetail.rt}}</p> 
                <p><router-link :to="`/comment/${moviedetail.id}`">评论</router-link></p>                               
            </div>
        </div>
        <div class="movie-detail-content">
            <h4>剧情介绍</h4>
            <div class="decr" v-html="moviedetail.dra">
            </div>
        </div>
        <div class="loading" v-show="isload">
            <img src="/static/img/loading.gif" alt="">
        </div>
        <div>
            <video :src="moviedetail.vd" controls width="100%"></video>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            moviedetail:{},
            stars:'',
            isload:true
        }
    },
    methods:{
        getDetail(){
            axios.get(`${API_PROXY}http://m.maoyan.com/movie/${this.$route.params.movieid}.json`)
        .then(res => {
            this.stars=res.data.data.MovieDetailModel.star.split(' ').splice(0,2).join(' ');
            this.moviedetail=res.data.data.MovieDetailModel;
            this.isload=false;
        }).catch(res => {
            alert('获取数据失败');
        })
        }
    },
    created(){
        this.getDetail();
    },
    
}
</script>

<style scoped>
    .movie{
        margin-left: .1rem;
        font-size: 16px;
    }
    .movie-detail{
        display: flex;
        align-items: flex-end;
    }
    .movie-img{
        flex-grow: 1;
        width: 0;
        height: 3.5rem;
    }
    .movie-content{
        flex-grow: 2;
        width: 0;
        font-size: .25rem;
        margin-left: .2rem;
         height: 3.5rem;
    }
    .movie-content p:first-child{
        font-weight: bolder;
        font-size: .3rem;
        color:forestgreen;
    }
    .movie-content p{
        padding: .05rem 0
    }
    .movie-detail-content h4{
        text-align: left;
        font-size: .5rem;
        color: green;
    }
    .movie-photo{
        display: flex;
    }
    .movie-photo div{
        flex-grow: 1;
    }
    .loading{
        text-align: center;
    }
    .loading img{
        width: 1rem;
        height: 1rem;
    }
</style>
