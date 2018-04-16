<template>
        <div class="comments">
            <p @click="$router.push(`/moviedetail/${$route.params.movieid}`)" class="return-movie">回到电影详情</p>
            <ul class="comment">
                <li v-for="(comment,index) in comments" :key="index">
                    <div class="clearfix">
                        <div>
                            <img :src="comment.avatarurl" alt="">
                            <span>{{ comment.nick }}:</span>
                            <span class="time clearfix">{{ comment.time }}</span>
                        </div>                        
                        <p class="comment-content">{{ comment.content }}</p>
                    </div>
                </li>
            </ul>
            <p @click="getMoreComment" v-if="showMore" class="more-comment">加载更多评论</p>
            <div class="loading" v-show="isload">
                <img src="/static/img/loading.gif" alt="">
            </div>
        </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            comments:[],
            offset:0,
            isload:true,
            showMore:false
        }
    },
    methods:{
        getComment(){
            axios.get(API_PROXY+`http://m.maoyan.com/comments.json?movieid=${this.$route.params.movieid}&limit=5&offset=${this.offset}`)
            .then(res=>{
                this.comments=this.comments.concat(res.data.data.CommentResponseModel.cmts);
                this.comments.forEach((cmt)=>{
                    if(cmt.avatarurl===''){
                        cmt.avatarurl='/static/img/title.png';
                    }
                })
                this.isload=false;
                this.showMore=true;
            }).catch(res=>{
                alert('数据获取失败');
            });           
        },
        getMoreComment(){
            this.offset+=5;
            this.getComment();
        }
    },
    created(){
        this.getComment();
    }
}
</script>

<style scoped>
    .comments{
        margin: 1rem 0.1rem;
    }
    .comment{
        font-size: .3rem;
    }
    .time{
        right:0;
        font-size: .3rem;
    }
    img{
        width: .5rem;
        height: .5rem;
    }
    .loading{
        text-align: center;
    }
    .loading img{
        width: 1rem;
        height: 1rem;
    }
    .more-comment{
        font-size: .3rem;
        text-align: center;
        color: forestgreen;
        transition: cubic-bezier(1, 0, 0, 1);
    }
    .clearfix::before{
        content: "";
        clear: both;
        display: block;
    }
    .movie-comment{
        margin:1rem .1rem;
    }
    .return-movie{
        font-size: .3rem;
        position: fixed;
        top: 1rem;
        right:.1rem;
        color: firebrick;
    }
</style>
