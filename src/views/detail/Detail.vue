<template>
  <div id="detail">
    
    <detailnavbar @titleClick="titleClick" id="shop"/>
    <detailswiper :topimages="topImages"></detailswiper>
    <div class="introduce">{{ res.result.skuInfo.title }}</div>

    <span class="you">{{ res.result.skuInfo.priceRange }}</span>
    <span
      ><s>{{ res.result.skuInfo.defaultPrice }}</s></span
    >
    <span class="huo">活动价</span>
    <br />
    <span>{{ res.result.columns[0] }}</span>
    <span class="right">{{ res.result.columns[1] }}</span>
    <span>{{ res.result.columns[2] }}</span>

    <detailshopinfo :message="res" class="wi" />

    <div class="xia">
      <detailgoodsinfo :image="detailimage" />
    </div>

    <detailparamsinfo :params="params" id="canshu" />

    <detailcommentinfo :commentinfo="commentInfo" id="pl" />

    <goodslist :goods="recommends" id="tj" />

    <div></div>

    <detailbottombar @addCart="addToCart" />

  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

import detailnavbar from "@/views/detail/childComps/DetailNavBar";
import detailswiper from "./childComps/DetailSwiper.vue";
import detailshopinfo from "./childComps/DetailShopInfo.vue";
import detailgoodsinfo from "./childComps/DetailGoodsInfo.vue";
import detailparamsinfo from "./childComps/DetailParamsInfo.vue";
import detailcommentinfo from "./childComps/DetailCommentInfo.vue";
import detailbottombar from './childComps/DetailBottomBar.vue'

import { getDetail, getRecommend } from "@/network/detail.js";

import goodslist from "@/components/content/goods/GoodsList";

export default defineComponent({
  setup() {},
  data() {
    return {
      iid: null,
      topImages: [],
      res: null,
      detailimage: null,
      params: null,
      commentInfo: null,
      recommends: [],

      themeTopYs: [0, 1000, 2000, 3000],
    };
  },

  components: {
    detailnavbar,
    detailswiper,
    detailshopinfo,
    detailgoodsinfo,
    detailparamsinfo,
    detailcommentinfo,
    goodslist,
    detailbottombar
  },

  created() {
    // 保存传入的id
    this.id = this.$route.params.iid;
    this.iid = this.id;
    console.log(this.iid);

    //根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      // 获取顶部的图片轮播数据
      this.topImages = res.result.itemInfo.topImages;
      this.res = res;

      // console.log(res);

      this.detailimage = res.result.detailInfo;
      this.params = res.result.itemParams;

      if (res.result.rate.cRate != 0) {
        this.commentInfo = res.result.rate.list[0];
      }
    });

    //3.请求推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list;
      console.log(res);
    });
  },

  
  methods: {
    titleClick(index) {
      // console.log(index);
      // this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
    
    },

    addToCart(){
      //1.获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0]
      product.title = this.res.result.skuInfo.title; 
      product.desc = this.res.result.detailInfo.desc;
      product.price = this.res.result.itemInfo.price;
      product.iid = this.iid
      // console.log(this.res);

      //2.将商品添加到购物车
      this.$store.comit('addCart',product)
      
    }
  },
});
</script>

<style scoped>
.introduce {
  font-size: 20px;
}
.you {
  font-size: 25px;
  color: red;
}
.huo {
  display: inline-block;
  color: #fff;
  width: 70px;
  text-align: center;
  border-radius: 20%;
  background-color: pink;
}

.right {
  margin: 20%;
}

#detail {
  position: absolute;
  z-index: 999;
  background-color: #fff;
  width: 100%;
  overflow: hidden;
}

.wi {
  width: 100%;
  display: inline-block;
}

.xia {
  margin-top: 30px;
}


#shop{
  position: fixed;
  background-color: #fff;
  top: 0;
  z-index: 99999;
  /* display: flex; */
  width: 100%;

}
</style>
