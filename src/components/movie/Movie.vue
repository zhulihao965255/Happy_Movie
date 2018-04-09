<template>
    <div class="movies">
        <ul>
            <li @click="$router.push(`/moviedetail/${movie.id}`)" v-for="(movie,index) in movielist" :key="index">
                <div class="movie">
                    <div class="movie-img">
                        <img :src="movie.img" alt="">
                    </div>
                    <div class="movie-info">
                        <p class="movie-name">{{movie.nm}}</p>
                        <p>主演:&nbsp;&nbsp;&nbsp;{{movie.star}}</p>
                        <p>导演:&nbsp;&nbsp;&nbsp;{{movie.dir}}</p>
                        <p>{{movie.rt}}</p>
                        <p>{{movie.cat}}</p>
                    </div>
                </div>  
            </li>
        </ul>
        <div class="movie-over" v-show="show">
            数据已经到底了!
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            movielist:[],
            show:false
        }
    },
    methods:{
        getData() {
            axios.get(`${API_PROXY}http://m.maoyan.com/movie/list.json?type=hot&offset=${this.movielist.length}&limit=10`)
            .then(res=>{
                let len=res.data.data.movies.length;
                if(len<10){
                    this.show=true;
                }
                this.movielist=this.movielist.concat(res.data.data.movies);
            }).catch(res=>{
                console.log('error');
            })
        }
    },
    mounted(){
        this.getData();
        window.onscroll = () => {
            let st=document.documentElement.scrollTop;
            let ch=document.documentElement.clientHeight;
            let sh=document.documentElement.scrollHeight;
            if(st+ch==sh){
                this.getData();
            }
        }
    }
    
}
</script>

<style scoped>
    .movies{
        margin: 1rem 0;
        margin-left: .1rem;
    }
    .movie{
        display: flex;
    }
    .movie-img{
        flex-grow: 1;
        width: 0;
        margin-right: .1rem;
    }
    .movie-info{
        flex-grow: 2;
        width: 0;
    }
    .movie-name{
        font-weight: bolder;
    }
    .movie-over{
        text-align: center;
    }
</style>
