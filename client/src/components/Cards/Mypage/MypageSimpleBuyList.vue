<template>
  <v-card
    class="mx-auto flex mb-24"
    outlined
  >
  
  <div class="flex" style="">
  <v-list-item >
    <v-list-item-content class="">
      <v-list-item-subtitle class=" text-center">
        전체
      </v-list-item-subtitle>
      <v-list-item-title class="text-h6 font-bold text-center">
        0
      </v-list-item-title>
    </v-list-item-content>

    <hr style="border:0.1px solid gray; width:0.01px; height:60%;">

    <v-list-item-content class="">
      <v-list-item-subtitle class=" text-center">
        입찰 중
      </v-list-item-subtitle>
      <v-list-item-title class="text-h6 font-bold text-center">
        0
      </v-list-item-title>
    </v-list-item-content>

    <v-list-item-content class="">
      <v-list-item-subtitle class=" text-center">
        진행 중
      </v-list-item-subtitle>
      <v-list-item-title class="text-h6 font-bold text-center">
        0
      </v-list-item-title>
    </v-list-item-content>

    <v-list-item-content class="">
      <v-list-item-subtitle class=" text-center">
        종료
      </v-list-item-subtitle>
      <v-list-item-title class="text-h6 font-bold text-center">
        0
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
  data() {
    return {
    };
  },
};
</script>
