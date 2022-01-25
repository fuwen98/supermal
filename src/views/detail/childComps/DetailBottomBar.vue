<template>
  <div class=".bottom-bar">
    <div class="f">
      <div class="left">
        <div>客服</div>
        <div>店铺</div>
        <div>收藏</div>
      </div>

      <div class="right">
        <div class="color1" @click="addToCart">加入购物车</div>
        <div class="color2">购买</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},

  methods: {
    addToCart() {
      this.$emit("addCart");
    },
  },
});
</script>

<style scoped>
.bottom-bar {
  height: 50px;
  width: 100%;
  background-color: #bfa;
  text-align: center;
  display: flex;
}

.left {
  display: flex;
  flex: 1;
  width: 50%;
  justify-content: space-between;
  line-height: 50px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  text-align: center;
}
.left > div {
  margin: 0 auto;
}

.right {
  display: flex;
  width: 50%;
  justify-content: space-between;
  line-height: 50px;
  position: fixed;
  bottom: 0;
  margin-left: 50%;
  padding-left: 10px;
  text-align: center;
}

.content {
  background-color: #fff;
  height: calc(100% - 44px -49px);
}

.color1 {
  background-color: yellow;
  width: 50%;
}

.color2 {
  background-color: pink;
  width: 50%;
}
</style>
