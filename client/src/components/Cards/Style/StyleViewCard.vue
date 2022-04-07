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
            <v-btn
                class="ml-6"
                icon
                @click="show = !show"
            >
              <v-icon>{{ show ? 'mdi-comment' : 'mdi-comment-outline' }}</v-icon>
            </v-btn>
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
}
</script>