<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
});
</script>

<style scoped>
  #tab-bar {
    width: 100%;
    display: flex;
    background-color: #bfa;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
 
</style>
