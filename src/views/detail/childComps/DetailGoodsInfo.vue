<template>
    <div>
        
        <div>{{image.desc}}</div>
        <div>{{image.detailImage[0].key}}</div>

       <div v-for="item in image.detailImage[0].list" :key="item">
            <img :src="item" alt="">
       </div>

    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    props:{
        image:{
            type:Object,
            default(){
                return{};
            }
        }
    },

    
})
</script>


<style scoped>
    img{
        width: 100%;
    }
</style>
