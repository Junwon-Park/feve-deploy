<template>
  <v-card
      class=" mt-5"
      max-width="344"
      outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          카테고리
        </div>
        <v-list-item-avatar
            tile
            size="300"
            color="grey"
        ></v-list-item-avatar>
        <v-list-item-title class="text-h5 mb-1">
          상품명
        </v-list-item-title>
        <v-list-item-subtitle>상품정보</v-list-item-subtitle>
        <v-list-item-subtitle>금액</v-list-item-subtitle>
      </v-list-item-content>

    </v-list-item>

    <v-card-actions>
      <v-btn
          outlined
          rounded
          text
          color="orange"
      >
        보러가기
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {}
</script>