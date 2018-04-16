import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import Self from '@/components/aboutme/Self'
import Register from '@/components/aboutme/Register'
import MyData from '@/components/aboutme/MyData'

import Login from '@/components/aboutme/Login'
import MovieDetail from '@/components/movie/MovieDetail'
import Comment from '@/components/movie/Comment'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'movie',
    component: Movie,
  },{
    path:'/moviedetail/:movieid',
    name:'moviedetail',
    component:MovieDetail,
  } ,{
      path:'/comment/:movieid',
      name:'comment',
      component:Comment
  },
    {
    path: '/self',
    name: 'self',
    component: Self,
  },
  {
    path: '/mydata/:name',
    name: 'mydata',
    component: MyData,
    beforeEnter(to,from,next){
        if(tomydata){
          username=to.params.name;          
          next();      
        }else{
          next({path:'/self'});
        }
    }
  },
 ]
})
