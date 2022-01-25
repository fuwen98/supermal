<template>
  <div id="all">

    <ul
      v-infinite-scroll="loadMore(this.goods.pop)"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <li @click="itemClick">
        <img :src="ShowImage" alt="" />
        <p>{{ goodsItem.title }}</p>

        <br />
        <span class="price">{{ goodsItem.price }}￥</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

import { getHomeMultidata, getHomeGoods } from "@/network/home";

export default defineComponent({
  setup() {},

  data() {
    return {
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {
    this.getHomeMultidata();
  },
  computed:{
    ShowImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    loadMore() {
      // this.loading = true;
      // setTimeout((ty) => {
      //   // 一步请求数据  将数据
      //   let last = this.goods[this.goods.page];
      //   for (let i = 1; i <= 30; i++) {
      //     this.goods.page.push(last + i);
      //   }
       
      //   this.loading = false;

      // }, 2500);
    },
    itemClick() {
      this.$router.push("/detail" + this.goodsItem.iid);
    },

    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
      });
    },
  },
});

</script>


<style scoped>
img {
  width: 100%;
  height: 260px;
}

li {
  width: 40%;
  float: left;
  margin: 5%;
  list-style: none;
}
.price {
  font-size: 16px;
  color: red;
  text-align: center;
  display: inline-block;
  width: 100%;
}
p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
