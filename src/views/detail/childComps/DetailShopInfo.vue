<template>
  <div class="all">
    <div>
      <span class="box"
        ><img :src="message.result.shopInfo.shopLogo" alt=""
      /></span>
      <span class="bot">{{ message.result.shopInfo.name }}</span>
    </div>

    <div class="sj">
      <div class="left">
        <span class="le-top">{{ message.result.shopInfo.cSells }}</span>
        <span class="le-top">{{ message.result.shopInfo.cGoods }}</span>
        <br />
        <span class="le-bot">总销量</span>
        <span class="le-bot">全部宝贝</span>
      </div>

      <br />
      
      <div class="right">
        <div class="jl">
          <span class="ri-top">{{
            message.result.shopInfo.score[0].name
          }}</span>
          <span
            :class="message.result.shopInfo.score[0].isBetter ? 're' : 'gre'"
            >{{ message.result.shopInfo.score[0].score }}</span
          >
          <span v-if="message.result.shopInfo.score[0].isBetter" class="t"
            >高</span
          >
          <span class="f" v-if="!message.result.shopInfo.score[0].isBetter"
            >低</span
          >
        </div>

        <br />

        <div class="jl">
            <span class="ri-top">{{
            message.result.shopInfo.score[1].name
          }}</span>
          <span
            :class="message.result.shopInfo.score[1].isBetter ? 're' : 'gre'"
            >{{ message.result.shopInfo.score[1].score }}</span
          >
          <span v-if="message.result.shopInfo.score[1].isBetter" class="t"
            >高</span
          >
          <span class="f" v-if="!message.result.shopInfo.score[1].isBetter"
            >低</span
          >
        </div>

        <br />

        <div class="jl">
          <span class="ri-top">{{
            message.result.shopInfo.score[2].name
          }}</span>
          <span
            :class="message.result.shopInfo.score[2].isBetter ? 're' : 'gre'"
            >{{ message.result.shopInfo.score[2].score }}</span
          >
          <span v-if="message.result.shopInfo.score[2].isBetter" class="t"
            >高</span
          >
          <span class="f" v-if="!message.result.shopInfo.score[2].isBetter"
            >低</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  props: {
    message: {
      type: Object,
      default() {
        return {};
      },
    },
  },
});
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  border-radius: 50%;
  display: inline-block;
}
img {
  text-align: center;
  width: 60%;
  margin: 20%;
}
.bot {
  display: inline-block;
  font-size: 25px;
}

.sj {
  margin-top: 50px;
}
.left {
  float: left;
  width: 45%;
  line-height: 50px;
  border-right: 1px solid #000;
}
.le-top,
.le-bot {
  margin-left: 13%;
}
.le-top {
  font-size: 25px;
  margin-bottom: 10%;
  display: inline-block;
}

.right {
  float: left;
  width: 45%;
  margin-left: 5%;
}
.colo {
  color: green;
}
.t {
  background-color: red;
  color: #fff;
  margin-left: 32%;
}
.f {
  background-color: green;
  color: #fff;
  margin-left: 20%;
}
.gre {
  color: green;
  margin-left: 10%;
}
.re {
  color: red;
  margin-left: 10%;
}
</style>
