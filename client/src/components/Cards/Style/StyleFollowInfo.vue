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
            <v-list-item-title
                id="followBtn"
                class="followBtns"
                @click.stop="dialog = true"
                @click="follower=true, following=false">
              팔로우
              <span class="block text-black font-bold">
                {{ totalFollowerCount }}
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
                id="followingBtn"
                class="followBtns"
                @click.stop="dialog = true"
                @click="following=true, follower=false">
              팔로잉
              <span class="block text-black font-bold">
                {{ totalFollowingCount }}
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list>

    <v-dialog
        v-model="dialog"
        min-width="290"
        max-width="350"
        >
      <v-card class="p-4">
        <span class="text-md font-semibold" v-if="follower===true">
            FOLLOW
        </span>
        <span class="text-md font-semibold" v-else>
          FOLLOWING
        </span>
        <div v-if="follower">
          <table class=" w-full bg-transparent border-collapse">
            <thead class="thead-light">
            <tr>
              <th
                  class="px-6  border-b-2  text-black  align-middle border border-solid  py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold "
                  style="border-color: black"
                  v-for="(table, idx) in table" :key="idx"
              >
                {{ table }}
              </th>
            </tr>
            </thead>
            <tbody>
          <StyleFollowTable
              v-for="(followList, idx) in followList"
              :key="idx"
              :followList="followList"
              :follower="follower"
              v-bind="followList"
          />

            </tbody>
          </table>
        </div>
        <div v-if="following">
          <table class=" w-full bg-transparent border-collapse">
            <thead class="thead-light">
            <tr>
              <th
                  class="px-6  border-b-2  text-black  align-middle border border-solid  py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold "
                  style="border-color: black"
                  v-for="(table, idx) in table" :key="idx"
              >
                {{ table }}
              </th>
            </tr>
            </thead>
            <tbody>
          <StyleFollowTable
              v-for="(followingList, idx) in followingList"
              :key="idx"
              :following="following"
              :followingList="followingList"
              :v-bind="followingList"
          />
            </tbody>
          </table>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              color="white "
              style="background: black !important;"
              text
              @click="dialog = false"
          >
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-card>
</template>

<script>
import account from "@/assets/img/icon_account.png"
import StyleFollowTable from "@/components/Cards/Style/StyleFollowTable"

export default {
  props:{
    userInfo:Object
  },
  data() {
    return {
      user_key: JSON.parse(localStorage.getItem('userKey')),
      account,
      dialog: false,
      follower: false,
      following: false,
      table: ['아이디'],
      totalFollowerCount: 0,
      totalFollowingCount: 0,
      totalPostCount : 0,
      followList:[{
        FOLLOWER_ID: "",
        USER_ID:"",
      }],
      followingList:[{
        FOLLOWING_ID: "",
        USER_ID:"",
      }],
    }
  },
  components:{
    StyleFollowTable
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
      let that = this;
      that.$axios.post('http://localhost:8080/style/loadPost/count', {
        USER_KEY : that.user_key
      })
          .then((res) => {
            that.totalPostCount = res.data[0].totalPostCount;
            //console.log(res.data)
          })
          .catch((error) => {
            console.log(error);
          })
    },
    follow(){
      let that = this;
      that.$axios.post('http://localhost:8080/style/follow/count/following', {
          user_key: that.user_key
        })
            .then((res) => {
              that.totalFollowerCount = res.data[0].cnt;
              //console.log(res.data)
            })
            .catch((error) => {
              console.log(error);
            });

        this.$axios.post('http://localhost:8080/style/follow/count/follower', {
          user_key : that.user_key,
        })
            .then((res) => {
              that.totalFollowingCount = res.data[0].cnt;
              //console.log(res.data)
            })
            .catch((error) => {
              console.log(error);
            })

      this.$axios.post('http://localhost:8080/style/follow/loadFollower', {
        user_key : that.user_key,
      })
          .then((res) => {
            that.followList = res.data;
            //console.log(res.data)
            //console.log(that.followList)
          })
          .catch((error) => {
            console.log(error);
          })

      this.$axios.post('http://localhost:8080/style/follow/loadFollowing', {
        user_key : that.user_key,
      })
          .then((res) => {
            that.followingList = res.data;
            //console.log(res.data)
            //console.log("following list::::::",that.followingList)
          })
          .catch((error) => {
            console.log(error);
          })
    }
  }
};
</script>

<style>
.followBtns:hover {
  transition: .4s;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
}
</style>
