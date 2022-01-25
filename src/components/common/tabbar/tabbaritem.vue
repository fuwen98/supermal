<template>
  <div class="tab-bar-item" @click="itemclick">
    <div :style="activeStyle  "><slot name="item-text"></slot></div>

    <!-- <div>首页</div> -->
  </div>
</template>


<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  name: "tabbaritem",
 
  props: {
    path: String,

    activeColor:{
      type:String,
      default:'red'
    }
  },
  methods: {
    itemclick() {
      this.$router.replace(this.path).catch((error)=>{});

    }
  },

  computed:{
    isActive(){
     
      return this.$route.path.indexOf(this.path) != -1
    },
    
    activeStyle(){
      return this.isActive ? {backgroundColor:this.activeColor} : {}
    }
  }
});
</script>


<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  line-height: 49px; /* 移动端开发常用高度 */
}
</style>