<template>

  <div >
    <mt-swipe :show-indicators="false" class="pi">
      <mt-swipe-item>
          <img src="@/assets/img/dy.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
          <img src="https://s10.mogucdn.com/mlcdn/c45406/180926_7d5c521e0aa3h38786lkakebkjlh8_750x390.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
          <img src="https://s10.mogucdn.com/mlcdn/c45406/180926_14l41d2ekghbeh771g3ghgll54224_750x390.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>

</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  name:"swipe",
});
</script>

<style scoped>
.pi{
    
    height: 300px;
}
.pi img{
    height: 100%;
    width: 100%;
}
</style>
