<template>
  <v-card
    class="mx-auto flex mb-24"
    outlined
  >
    <div class="flex" v-for="(item,i) in names" :key="i">

      <hr v-if="i==1" style="border:0.1px solid gray; width:0.01px; height:60%; margin-top:0.85rem">

      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle class=" text-center">
            {{names[i]}}
          </v-list-item-subtitle>
          <v-list-item-title class="text-h6 font-bold text-center">
            {{counts[i]}}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>

    <v-card-actions style="margin-left:42%" >
      <v-btn
        outlined
        rounded
        text
      >
        더보기
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props:{
    counts:Array,
  },
  data() {
    return {
      names:["전체", "입찰 중", "진행 중", "종료"],
    };
  },
  
};
</script>
