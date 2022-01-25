<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" :class='{"active": index == currentIndex }' @click='itemClick(index)'
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods:{
      itemClick(index){
          this.currentIndex = index

          this.$emit('tabClick',index)
      }
   }, 
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
});

   

</script>

<style scoped>
.tab-control {
  display: flex;
  line-height: 50px;
  font-size: 20px;
}
.tab-control div {
  flex: 1;
  text-align: center;
}

.active {
  color: pink;
}
.active span {
  border-bottom: 3px solid pink;
}
</style>
