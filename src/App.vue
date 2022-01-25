<template>
  <div id="app">
    <tabbar class="top">
 
      <tabbaritem path='/home' >
        <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path='/category'>
        <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem path='/cart'>
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path='/profile'>
        <div slot="item-text">我的</div>
      </tabbaritem>
  
    </tabbar>

    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from "./components/common/tabbar/tabbar";
import tabbaritem from "./components/common/tabbar/tabbaritem";

import {gets} from "@/views/detail/childComps/index"

export default {
  name: "App",
  components: {
    tabbar,
    tabbaritem,
  },
  created(){
    gets(1,2).then(res=>{
      console.log(res);
    })
  }
};

require("./assets/css/base.css");
</script>

<style>
#app{
  margin-bottom: 50px;
}

</style>
