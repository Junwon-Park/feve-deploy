<template>
  <v-card class="mx-auto w-full" outlined>
    <v-list three-line class="">
      <v-list-item class="align-center">
        <v-list-item-avatar style="align-self: center !important">
          <v-img :src="account" alt="account icon"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            {{ userInfo.USER_NAME }}
            <small class="block text-blueGray-400">
              {{ userInfo.USER_MAIL }}</small
            >
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn outlined rounded text @click="onModifyClicked" class="my-1">
            프로필 수정
          </v-btn>

          <v-btn
            outlined
            rounded
            text
            @click="onWithdrawalClicked"
            class="my-1"
          >
            회원 탈퇴
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import account from '@/assets/img/icon_account.png';
import { EventBus } from '@/common/EventBus.js';

export default {
  props: {
    userInfo: Object
  },
  data() {
    return {
      EventBus,
      account
    };
  },
  methods: {
    getUserKey() {
      return localStorage.getItem('userKey');
    },

    onModifyClicked() {
      EventBus.$emit('mypageViewStateChange', 4); //4:프로필 수정
    },
    onWithdrawalClicked() {
      if (confirm('정말로 탈퇴하시겠습니까?')) {
        let that = this;
        that.$axios
          .post('http://localhost:8080/mypage/removeAccount', {
            USER_KEY: this.getUserKey()
          })
          .then(() => {
            localStorage.setItem('isLogin', false);
            localStorage.setItem('Authorization', null);
            localStorage.setItem('userId', null);
            localStorage.setItem('userAdmin', null);
            localStorage.setItem('userKey', null);
            alert('성공적으로 탈퇴하였습니다.');
            return (location.href = `${this.$store.getters.LocalUrl}`);
          })
          .catch((error) => {
            console.error(error);
            return alert('탈퇴에 실패하였습니다.');
          });
      } else {
        return alert('탈퇴에 실패하였습니다.');
      }
    }
  }
};
</script>
