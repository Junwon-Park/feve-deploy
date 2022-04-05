<template>
  <v-card
    class="mx-auto w-full"
    outlined
  >

    <v-list three-line class="mt-4">
        <v-list-item
        >
          <v-list-item-avatar>
            <v-img
                :src="account"
                alt="account icon"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              {{userInfo.USER_NAME}}
             <small class="block text-blueGray-400"> {{userInfo.USER_MAIL}}</small>
            </v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn
                outlined
                rounded
                text
            >
              프로필 수정
            </v-btn></v-list-item-action>
        </v-list-item>
    </v-list>

  </v-card>
</template>

<script>
import account from "@/assets/img/icon_account.png"
export default {
  props:{
    userInfo:Object
  },
  data() {
    return {
      account
    };
  },
 
};
</script>
