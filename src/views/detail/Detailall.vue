<template>
  <div>
    <div>
      <router-link to="detail">商品</router-link>
      <router-link to="parameter">数据</router-link>
      <router-view></router-view>
    </div>

    <detail :id="iid"></detail>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

import detail from "./Detail.vue";

export default defineComponent({
  setup() {},
  data() {
    return {
      iid: null,
    };
  },
  created() {
    //保存传入的id
    this.iid = this.$route.params.iid;
    // console.log(this.iid);
  },
  components: {
    detail,
  },
});
</script>
