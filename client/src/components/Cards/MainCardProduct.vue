<template>
  <v-card
      class=" mt-5 relative flex flex-row min-w-0 break-words bg-white rounded xl:mb-0"
      elevation="0"
  >
    <div class="flex-auto p-4" v-for="(item, i) in items" :key="i"
    >
      <div class="flex flex-wrap">
    <v-list-item three-line class="relative w-full max-w-full flex-grow flex-1" >
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{ item.cate }}
        </div>
        <v-list-item-avatar
            tile
            width="20vw"
            height="20vw"
            color="#f4f4f4"
            rounded="true"
        ></v-list-item-avatar>
        <v-list-item-title class="font-semibold mb-1" style="text-decoration: underline">
          {{ item.title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ item.desc }}</v-list-item-subtitle>
        <v-list-item-title class="font-semibold mb-1">
          {{ item.price }}
        </v-list-item-title>
        <small style="color: #999;" class="text-xs">즉시 구매가</small>
      </v-list-item-content>

    </v-list-item>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data(){
    return{
      items:[{
        cate:"lego",
        title:"가나다",
        desc:"설명중ㅇㅇㅇ",
        price: 550000,
      },{
        cate:"lego",
        title:"가나다",
        desc:"설명중ㅇㅇㅇ",
        price: 550000,
      },{
        cate:"lego",
        title:"가나다",
        desc:"설명중ㅇㅇㅇ",
        price: 550000,
      }]
    }
  }
}
</script>