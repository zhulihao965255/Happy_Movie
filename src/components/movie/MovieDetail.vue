<template>
    <div class="movie">
        <div class="movie-detail">
            <div class="movie-img">
               <img :src="moviedetail.img" alt="">
            </div>
            <div class="movie-content">
                <h3>{{moviedetail.nm}}</h3>
                <p>导演:{{moviedetail.dir}}</p>
                <p>演员:{{moviedetail.star}}</p>
                <p>{{moviedetail.cat}}</p>
                <p>上映时间:{{moviedetail.rt}}</p>                                
            </div>
        </div>
        <div class="movie-detail-content">
            <h2>简述</h2>
            <div v-html="moviedetail.dra"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            moviedetail:{},
        }
    },
    methods:{
        getDetail(){
            axios.get(`${API_PROXY}http://m.maoyan.com/movie/${this.$route.params.movieid}.json`)
        .then(res => {
            this.moviedetail=res.data.data.MovieDetailModel;
        }).catch(res => {
            console.log('error');
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
        margin: 1rem;
        margin-left: .1rem;
        font-size: 16px;
    }
    .movie-detail{
        display: flex;
    }
    .movie-img{
        flex-grow: 1;
        width: 0;
    }
    .movie-content{
        flex-grow: 1;
        width: 0;
    }
    .movie-detail-content h2{
        text-align: center;
    }
    .movie-photo{
        display: flex;
    }
    .movie-photo div{
        flex-grow: 1;
    }
</style>
