<template>
  <v-card
    class="mx-auto flex-direction: column"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content class="ml-6">
        <v-list-item-title class="text-h5 mt-6">
          홍길동
        </v-list-item-title>
        <v-list-item-subtitle class="-mt-12">honghong@naver.com</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
        class="mr-4 mt-8"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions style="margin-left:42%" >
      <v-btn
        outlined
        rounded
        text
      >
        프로필 수정
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import team2 from "@/assets/img/team-2-800x800.jpg";

export default {
  data() {
    return {
      team2,
    };
  },
};
</script>
