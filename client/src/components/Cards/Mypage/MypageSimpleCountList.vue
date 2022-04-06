<template>
  <div
    class="mx-auto flex mb-24 py-2"
    style="background: rgba(0,0,0,0.03)"
    @click="onMoreClicked"
    type="button"
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
        @click="onMoreClicked"
      >
        더보기
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import {EventBus} from "@/common/EventBus.js"

export default {
  props:{
    state:Number,
    counts:Array,
  },
  data() {
    return {
      names:["전체", "입찰 중", "진행 중", "종료"],
    };
  },
  methods:{
    onMoreClicked(event){
      event.stopPropagation();
      EventBus.$emit("mypageViewStateChange", this.state);
    }
  }
};
</script>
