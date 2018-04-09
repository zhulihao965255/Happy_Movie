<template>
  <div id="app">
    <c-header :style="{background:bgC}" @change="tabCut">
           <h2 slot="title">{{ title }}</h2>
    </c-header>
    <router-view/>
    <c-footer @change="tabCut" :style="{background:bgC}"></c-footer>
  </div>
</template>

<script>
import cHeader from '@/components/common/Header'
import cFooter from '@/components/common/Footer'

export default {
  name:'App',
  components:{
     cHeader,
     cFooter
   },
  data(){
     return {
       title:'Movie',
       bgC:'#808040'
     }
   },
  methods:{       //抽取出来，更加抽象，容易使用
     tabCut(tab){
       this.title=tab;
       switch (tab){
         case 'Movie':this.bgC="#808040";
         break;
         case 'Music':this.bgC='#408080';
         break;
         case 'Book':this.bgC='#5A5AAD';
         break;
         case 'Photo':this.bgC='#8F4586';
         break;
         default:this.bgC='#808040';
       }
     }
   }
}
</script>

<style>

</style>
