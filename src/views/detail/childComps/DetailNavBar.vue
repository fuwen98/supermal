<template>
  <div>
    <navbar>
      <div slot="left" class="left">
        <span class="j" @click="backClick">⬅</span>
      </div>
      <div slot="center" class="title">
        <!-- <div
          v-for="(item, index) in titles"
          :key="index"
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="itemClick(index)"
        >
          {{ item }} -->
        <div
          class="title-item">
          <a href="#shop"
            @click="itemClick(0)"
          :class="{ active: 0 === currentIndex }">
          商品</a>
        </div>

        <div
          class="title-item"
          
          
        >
         <a href="#canshu" @click="itemClick(1)"
          :class="{ active: 1 === currentIndex }"> 参数</a>
        </div>

        <div
          class="title-item"
          
        >
          <a href="#pl" @click="itemClick(2)"
          :class="{ active: 2 === currentIndex }">评论</a>
        </div>

        <div
          class="title-item"
         
        >
          <a href="#tj"  @click="itemClick(3)"
          :class="{ active: 3 === currentIndex }">推荐</a>
        </div>
        <!-- </div> -->
        
      </div>
    </navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

import navbar from "@/components/common/navbar/NavBar";
import parameter from "../../home/childComps/router/parameter.vue";

export default defineComponent({
  setup() {},
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick',index);
    },
    backClick() {
      this.$router.back();
    },
    
  },
  components: {
    navbar,
    parameter,
  },
});
</script>

<style scoped>

.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active {
  color: red;
}
.j {
  font-size: 40px;
}
a{
  color: #000;
  text-decoration: none;
}
</style>
