<template>
  <div class="commentinfo">
    <div class="infoheard">
      <div class="heard-title">用户评价</div>
      <div class="heard-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>

    <div class="info-user">
      <img :src="commentinfo.user.avatar" alt="" />
      <span>{{ commentinfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ commentinfo.content }}</p>
      <div class="info-other">

        <span class="date">{{ commentinfo.created | showDate}}</span>

        <span>{{ commentinfo.style }}</span>
      </div>
      <div class="info-imgs">
        <img
          :src="item"
          v-for="(item, index) in commentinfo.images"
          :key="index"
          alt=""
        />
      </div>
    </div>
  
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

import  {formatDate} from "../../../network/utils"

export default defineComponent({
  setup() {},
  props: {
    commentinfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters:{
      showDate(value){
          //1.将时间戳转成Date对象
          const date = new Date(value * 1000)

          //2.将Date进行格式化
          return formatDate(date,'yyyy-MM-dd')
      }
  }
});
</script>


<style scoped>
.commentinfo {
  margin-top: 20%;
}

.infoheard {
    display: flex;
    justify-content:space-between;
    line-height: 50px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
}


.info-user{
    margin-top: 10%;
    line-height: 30%;
}
img{
    width: 20%;
    border-radius: 50%;
}
.info-user span{
    display: inline-block;
    position: relative;
    top: -35px;
}

p{
    color: #A0A09F;
    font-size: 10px;
    margin: 10px 0;
}
.info-other span{
    color: #A0A09F;
}


</style>
