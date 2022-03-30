<template>
  <v-card
    class="mx-auto"
    outlined
  >
    <v-list-item style="text-align:center">
      <v-list-item-content>
        <v-list-item-title class="text-h5 mt-6">
          {{userInfo.USER_NAME}}
        </v-list-item-title>
        <v-list-item-subtitle class="-mt-12">{{userInfo.USER_MAIL}}</v-list-item-subtitle>
      </v-list-item-content>

      <!-- <v-list-item-avatar
        tile
        size="80"
        color="grey"
        class="mr-4 mt-8"
      ></v-list-item-avatar> -->
      
    </v-list-item>

    <v-card-actions class="justify-center">
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

export default {
  data() {
    return {
      userInfo:{
        USER_NAME:'', 
        USER_MAIL:'',
      }
    };
  },
  beforeCreate() {
    console.log("simpleUserInfo.beforeCreate()");
    this.$axios.post('http://localhost:8080/mypage/getSimpleUserInfo', {
        USER_KEY : '1',
      })
      .then((result) => {
        console.log(result);
        this.userInfo = result.data;
        console.log(this.userInfo);
      })
      .catch((error) => {
        console.log(error);
      })
  },
};
</script>
