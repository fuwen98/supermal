<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item" class="recommend-item">
      <a :href="item.link"></a>
      <img :src="item.image" alt="" />
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  name: "Recommendview",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
});
</script>

<style scoped>
.recommend {
  display: flex;
  margin-top: 10px;
  border-bottom: 8px solid #eee;
  padding-bottom: 20px;
}
.recommend-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.recommend-item img {
  width: 80px;
  margin-bottom: 5px;
}
</style>
