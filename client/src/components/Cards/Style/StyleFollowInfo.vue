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
               @click="fDialog()"
            >
              게시글 올리기
            </v-btn>
          </v-list-item-action>
        </v-list-item>

      <small class="block text-center text-blueGray-400">프로필 수정은 마이페이지에서 진행해주세요.</small>

      <div class="flex flex-row text-center justify-center">
      <v-list-item>
        <v-list-item-content>
        <v-list-item-title>
          게시물
          <span class="block text-black font-bold">
            {{totalPostCount}}
          </span>
        </v-list-item-title>
      </v-list-item-content>
      </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              팔로우
              <span class="block text-black font-bold">
                {{ totalFollowerCount }}
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              팔로잉
              <span class="block text-black font-bold">
                {{ totalFollowingCount }}
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
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
      user_key: JSON.parse(localStorage.getItem('userKey')),
      account,
      totalFollowerCount: 0,
      totalFollowingCount: 0,
      totalPostCount : 0,
    }
  },
  created(){
    this.countPost()
    this.follow()
  },
  methods:{
    fDialog(){
      this.$emit('sendDialog');
    },
    countPost(){
      this.$axios.post('http://localhost:8080/style/loadPost/count', {
        USER_KEY : this.user_key
      })
          .then((res) => {
            this.totalPostCount = res.data[0].totalPostCount;
            console.log(res.data)
          })
          .catch((error) => {
            console.log(error);
          })
    },
    follow(){
        this.$axios.post('http://localhost:8080/style/follow/count/following', {
          user_key: this.user_key
        })
            .then((res) => {
              this.totalFollowerCount = res.data[0].cnt;
              console.log(res.data)
            })
            .catch((error) => {
              console.log(error);
            });


        this.$axios.post('http://localhost:8080/style/follow/count/follower', {
          user_key : this.user_key,
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
};
</script>
