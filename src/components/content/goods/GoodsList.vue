<template>
  <div class="goods">
    <goodslistitem v-for="(item,index) in goods" :key="index" :goodsItem = "item"> 
        
    </goodslistitem> 

 
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

import goodslistitem from "./GoodsListItem.vue";

export default defineComponent({
  setup() {},
  components: {
    goodslistitem,
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.goods[this.goods.length - 1];
        for (let i = 1; i <= 30; i++) {
          this.goods.push(last + i);
        }
        this.loading = false;
      }, 2500);
    },
   
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
});
</script>
<style scoped>
.goods img {
  height: 300px;
  width: 100%;
}
.price {
  font-size: 16px;
  color: red;
  text-align: center;
  display: inline-block;
  width: 100%;
}
.collect {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
li {
  width: 50%;
  display: inline-block;
}
ul {
  width: 100%;
}
</style>


