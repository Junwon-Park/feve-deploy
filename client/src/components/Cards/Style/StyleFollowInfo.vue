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
            <v-btn v-if="userInfo.USER_KEY===isLoginUser"
                outlined
                rounded
                text
               @click="fDialog()"
            >
              게시글 올리기
            </v-btn>
            <v-btn v-else
                   outlined
                   rounded
                   text
            >
              팔로우
            </v-btn>
          </v-list-item-action>
        </v-list-item>

      <small class="block text-center text-blueGray-400">프로필 수정은 마이페이지에서 진행해주세요.</small>

      <div class="flex flex-row text-center justify-center">
      <v-list-item>
        <v-list-item-content>
        <v-list-item-title>
          게시물
          <span class="block text-black font-bold">0</span>
        </v-list-item-title>
      </v-list-item-content>
      </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              팔로우
              <span class="block text-black font-bold">0</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              팔로잉
              <span class="block text-black font-bold">0</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list>

  </v-card>
</template>

<script>
import account from "@/assets/img/icon_account.png"
//import {EventBus} from "@/common/EventBus.js"

export default {
  props:{
    userInfo:Object
  },
  data() {
    return {
      //EventBus,
      account,
      isLoginUser: JSON.parse(localStorage.getItem('userKey')),
    };
  },
  methods:{
    fDialog(){
      this.$emit('sendDialog');
    },

    follow(){
      if( this.userInfo.USER_KEY != this.user_key){
        this.$axios.post('http://localhost:8080/style/follow/count/following', {
          following_id : this.$route.params.USER_KEY,
          follower_id: this.user_key
        })
            .then((res) => {
              this.totalFollowerCount = res.data[0].cnt;
              console.log(res.data)
            })
            .catch((error) => {
              console.log(error);
            });


        this.$axios.post('http://localhost:8080/style/follow/count/follower', {
          following_id : this.$route.params.USER_KEY,
          follower_id: this.user_key
        })
            .then((res) => {
              this.totalFollowingCount = res.data[0].cnt;
              console.log(res.data)
            })
            .catch((error) => {
              console.log(error);
            })
      }
    }
  }
};
</script>
