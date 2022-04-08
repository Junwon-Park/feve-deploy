<template>
  <v-container class="border mb-24">
    <v-row justify="space-around">
      <v-card class="w-full " :elevation="0">
        <img
            :src="imageUrl+POST_PIC" crossorigin
        >
        <v-card-actions>

          <v-card-text>
            <div class="font-semibold ml-8 mb-2">
              {{ POST_WDATE }}
            </div>
            <div class="ml-8 mb-2">
              {{ POST_CONTENT }}
            </div>
            <div class="mt-8">
              <v-btn
                  v-if="USER_KEY===user_key"
                  class="ml-auto"
                  icon
                  @click="deletePost(`${POST_KEY}`)"
              >
                <v-icon>{{ show ? 'mdi-delete-empty' : 'mdi-delete-empty-outline' }}</v-icon>
              </v-btn>
            <v-btn
                class="ml-2"
                icon
                @click="showComment()"
            >
              <v-icon>{{ show ? 'mdi-comment' : 'mdi-comment-outline' }}</v-icon>
              <span class="ml-1 text-black">{{ totalCommentCount.toLocaleString('ko-KR') }}</span>
            </v-btn>
            </div>
          </v-card-text>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-row class="pl-10 pr-10 mt-5">
                <v-textarea
                    v-model="postcomment_content"
                    class="mx-2"
                    label="댓글을 남겨주세요!"
                    no-resize
                    rows="1"
                    prepend-icon="mdi-comment"
                ></v-textarea>
                <v-icon @click="addComment(`${POST_KEY}`)">mdi-send-circle</v-icon>
            </v-row>
            <v-card-text class="pl-10 pr-10 mt-5">
                <div
                    v-for="message in messages"
                    :key="message.time"
                    small
                    class=" mb-5"
                >
                  <div>
                    <div class="font-weight-normal">
                      <strong class="text-">{{ message.USER_ID }}</strong>
                      <small class="ml-2">@ {{ message.COMMENT_WDATE }}</small>
                    </div>
                    <div>{{ message.COMMENT_CONTENT }}</div>
                  </div>
                </div>
            </v-card-text>
          </div>
        </v-expand-transition>

      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    POST_KEY: {
      type: Number,
      default: 0,
    },
    POST_CONTENT: {
      type: String,
      default: "",
    },
    POST_WDATE: {
      type: String,
      default: "",
    },
    POST_PIC: {
      type: String,
      default: "",
    },
    USER_KEY: {
      type: Number,
      default: 0,
    },
    USER_ID: {
      type: String,
      default: "",
    },
    USER_NAME: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      user_key: JSON.parse(localStorage.getItem('userKey')),
      imageUrl: this.$store.getters.ServerUrl + '/getStyleImage?imageName=',
      show: false,
      postcomment_content: "",
      totalCommentCount: "",
      messages: [{
          USER_ID: "",
          COMMENT_CONTENT: "",
          COMMENT_WDATE: "",
        }],
    }
  },
  methods:{
    deletePost(POST_KEY){
      let that = this;
        if(confirm("정말로 삭제하시겠습니까? 한번 삭제한 게시물은 되돌릴 수 없습니다.")) {

          that.$axios.post('http://localhost:8080/style/deletePost',{
            POST_KEY: POST_KEY,
          })
        .then(function(){
          alert("게시글을 삭제했습니다.")
          that.$router.go(that.$router.currentRouter);
        })
        .catch(function(err){
          console.log(err);
        });
        } else {
          return
        }
    },
    showComment(){
      this.show=!this.show
    },

    addComment(POST_KEY){
      let that = this;

      that.$axios.post('http://localhost:8080/style/addComment',{
        POST_KEY: POST_KEY,
        USER_KEY: this.user_key,
        POSTCOMMENT_CONTENT: this.postcomment_content,

      })
      .then(function(){
        that.$router.go(that.$router.currentRouter);
      })
      .catch(function(err){
        console.log(err);
      });
    },

    countPost(){
      this.$axios.post('http://localhost:8080/style/addComment/count', {
        POST_KEY: this.POST_KEY,
      })
          .then((res) => {
            this.totalCommentCount = res.data[0].cnt;
          })
          .catch((error) => {
            console.log(error);
          })
    },

    loadComment(){
      let that = this;

      that.$axios.post('http://localhost:8080/style/loadComment',{
        POST_KEY: this.POST_KEY,
      })
      .then(function(res){
        res.data.forEach(function(value){
          let commentDate = value['COMMENT_WDATE'].replace('T', ' ').split('.')[0];
          value['COMMENT_WDATE']=that.timeForToday(commentDate);
        });
        that.messages=res.data;
      })
      .catch(function(err){
        console.log(err);
      });
    },

     timeForToday(value) {
        const today = new Date();
        const timeValue = new Date(value);

        const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
        if (betweenTime < 1) return '방금 전';
        if (betweenTime < 60) {
          return `${betweenTime}분 전`;
        }

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) {
          return `${betweenTimeHour}시간 전`;
        }

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 365) {
          return `${betweenTimeDay}일 전`;
        }

        return `${Math.floor(betweenTimeDay / 365)}년 전`;
      },
  },
  created(){
    this.countPost()
    this.loadComment()
  }
}
</script>