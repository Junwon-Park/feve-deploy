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
                class="ml-6"
                icon
                @click="show = !show"
            >
              <v-icon>{{ show ? 'mdi-comment' : 'mdi-comment-outline' }}</v-icon>
            </v-btn>
            <v-btn
                v-if="USER_KEY===user_key"
                class="ml-auto"
                icon
                @click="deletePost(`${POST_KEY}`)"
            >
              <v-icon>{{ show ? 'mdi-delete-empty' : 'mdi-delete-empty-outline' }}</v-icon>
            </v-btn>
            </div>
          </v-card-text>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
              <v-timeline
                  align-top
                  dense
              >
                <v-timeline-item
                    v-for="message in messages"
                    :key="message.time"
                    :color="message.color"
                    small
                >
                  <div>
                    <div class="font-weight-normal">
                      <strong>{{ message.from }}</strong> @{{ message.time }}
                    </div>
                    <div>{{ message.message }}</div>
                  </div>
                </v-timeline-item>
              </v-timeline>
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
      messages: [
        {
          from: 'You',
          message: `Sure, I'll see you later.`,
          time: '10:42am',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'John Doe',
          message: 'Yeah, sure. Does 1:00pm work?',
          time: '10:37am',
          color: 'green',
        },
        {
          from: 'You',
          message: 'Did you still want to grab lunch today?',
          time: '9:47am',
          color: 'deep-purple lighten-1',
        },
      ],
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
    }
  }
}
</script>