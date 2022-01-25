<template>
  <div class="paramsinfo">

      <div>
    <table v-for="(table,index) in params.rule.tables" :key="index">
      <tr v-for="(tr,index) in table" :key="index" >
        <td v-for="(td,index) in tr" :key="index">{{ td }}</td>
      </tr>
    </table>
    </div>

    <div class="box">
        <table>
            <tr v-for="(item,index) in params.info.set" :key ='index' class="tr">
                <td class="td">{{item.key}}</td>
                <td class="td size">{{item.value}}</td>
            </tr>
        </table>
    </div>

    <div v-if="params.info.image">
        <img :src="params.info.images[0]" alt="">
    </div>

  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  props: {
    params: {
      type: Object,
      default() {
        return {};
      },
    },
  },

});
</script>

<style scoped>
table {
  text-align: center;
  margin: 0 auto;
}
td {
  padding: 10px;
}


   
    .table{
       margin: 0 auto;
    }
    .td{
        padding: 10px;
    }
    .size{
        color: red;
        font-size: 13px;
    }


</style>
