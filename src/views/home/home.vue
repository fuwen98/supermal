<template>
  <!-- <h2>主页</h2></template> -->
  <div id="home">
    <div id="top"></div>

    <nav-bar class="home-nav"> <div slot="center">购物街</div> </nav-bar>

    <swipe></swipe>

    <recommendview :recommends="recommends" />
    <featureview />
    <tabcontrol
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl"
      class="tabcontrol"
    ></tabcontrol>
    <goodslist :goods="showGoods" />

    <div style="clear: both"></div>

    <div class="backtop">
       <a href="#top"> <img src="@//assets/img/top.jpeg" alt=""></a>
    </div>

    
      
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

import NavBar from "@/components/common/navbar/NavBar";
import tabcontrol from "@/components/content/tabControl/TabControl";
import goodslist from "@/components/content/goods/GoodsList";

import swipe from "./childComps/swipe";
import recommendview from "./childComps/recommendview";
import featureview from "./childComps/FeatureView.vue";

import { getHomeMultidata, getHomeGoods } from "../../network/home";


import { request } from "../../network/a";

export default defineComponent({
  setup() {},
  name: "Home",
  components: {
    NavBar,
    swipe,
    recommendview,
    featureview,
    tabcontrol,
    goodslist,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      tabOffsetTop:0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata();

    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");


    request().then((res=>{
      console.log(res);
    }))

  },

  mounted(){
     //获取tabControl的offsetTop
    this.tabOffsetTop = this.$refs.tabcontrol
    // console.log(this.$refs.tabControl.$el.offsetTop); 
     setTimeout(() => {
      // console.log(this.$refs.tabControl.$el.scrollTop);
    }, 1000);
  },
  
  methods: {
    //事件监听相关的方式
    tabClick(index) {
      if (index == 0) {
        this.currentType = "pop";
      } else if (index == 1) {
        this.currentType = "new";
      } else if (index == 2) {
        this.currentType = "sell";
      }
    },

    // 网络请求相关的方式
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        (this.banners = res.data.banner.list),
          (this.recommends = res.data.recommend.list);
      });
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {      
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        
      });
    },
  },
});
</script>

<style scoped>
.home-nav {
  background-color: pink;
  color: #fff;
  width: 100%;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
}
#home {
  padding-top: 55px;
}
#home .tabcontrol {
  position: sticky;
  top: 40px;
  background-color: #bfa;
}


 .backtop{
        position: fixed;
        right: 15px;
        bottom: 55px;
        width: 43px;
        height: 43px;
        border-radius: 50%;
        overflow: hidden;
    }
    .backtop img{
        width: 43px;
        height: 43px;
    }
</style>
 