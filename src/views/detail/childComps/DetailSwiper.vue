<template>
  <div id="wraper">
    <mt-swipe :show-indicators="false" class="all">
      <mt-swipe-item v-for="(item, index) in topimages" :key="index" >
        <img class="p1" :src="item" alt="" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  props: {
    topimages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
});
</script>

<style scoped>
#wraper{
  width: 100%;
}

.p2{
  height: 300px;
}
.pict{
  height: 100px;
}
.all{
  height: 500px;
}
img{
  width: 100%;
  /* height: 600px; */
}
</style>
