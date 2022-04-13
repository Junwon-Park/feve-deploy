<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ma-2"
          large
          fab
          color="rgb(239, 68, 68)"
          v-bind="attrs"
          v-on="on"
          style="position: fixed; bottom: 40px; right: 40px; z-index: 100"
        >
          <v-icon color="white">mdi-chat</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">문의하기</span>
        </v-card-title>
        <hr />
        <v-card-text>
          <v-container>
            <div
              id="container"
              style="height: 500px; overflow-y: scroll; overflow-x: hidden"
              ref="chatContainer"
            >
              <v-row
                id="chatMessage"
                v-for="(chat, i) in chat"
                :key="i"
                style="margin-right: 20px"
              >
                <v-col cols="12" sm="12" md="12" v-if="chat.sender">
                  <v-chip> {{ chat.message }} </v-chip>
                  <v-chip class="ma-2" x-small> {{ chat.messageTime }} </v-chip>
                </v-col>

                <v-col v-else cols="12" sm="12" md="12" class="text-right">
                  <v-chip
                    class="ma-2"
                    x-small
                    color="orange"
                    text-color="white"
                  >
                    {{ chat.messageTime }}
                  </v-chip>
                  <v-chip color="orange" text-color="white">
                    {{ chat.message }}
                  </v-chip>
                </v-col>
              </v-row>
            </div>
            <hr style="margin-top: 20px" />
            <v-col cols="12" sm="12" md="12">
              <input
                ref="inputFocus"
                type="text"
                name=""
                id="inputText"
                placeholder="내용을 입력해주세요."
                style="width: 80%; outline: none; border-color: #ccc"
                v-model="inputMessage"
                v-on:keyup.enter="sendMessage"
                autocomplete="off"
              />
              <span>
                <v-btn
                  small
                  color="orange"
                  dark
                  @click="sendMessage"
                  style="
                    font-size: 20px;
                    height: 42px;
                    margin: 0px 0px 5px 20px;
                  "
                >
                  전송
                </v-btn>
              </span>
            </v-col>
            <hr />
          </v-container>
          <small class="mt-10"
            >* 상담내용은 따로 저장되지 않으니 주의하시기 바랍니다.</small
          >
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="orange darken-1" text @click="dialog = false">
            상담 완료
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import moment from 'moment';

export default {
  data: () => ({
    chat: [],
    dialog: false,
    inputMessage: ''
  }),
  methods: {
    setFocus() {
      this.$nextTick(() => {
        this.$refs.inputFocus.focus();
      });
    },
    sendMessage() {
      if (this.inputMessage.length !== 0) {
        this.$socket.emit('chat', {
          message: this.inputMessage,
          sender: 0,
          messageTime: moment().format('HH:mm')
        });
        this.chat.push({
          message: this.inputMessage,
          sender: 0,
          messageTime: moment().format('HH:mm')
        });
        this.inputMessage = '';
      }
    },
    submitEnter() {
      if (this.inputMessage.length !== 0) {
        this.$socket.emit('chat', {
          message: this.inputMessage,
          sender: 0,
          messageTime: moment().format('HH:mm')
        });
      }
    }
  },
  updated() {
    this.setFocus();
    const chatContainer = this.$refs.chatContainer;
    chatContainer.scrollTop = chatContainer.scrollHeight;
  },
  created() {
    this.$socket.on('chat', (msg) => {
      this.chat.push(msg);
    });
  }
};
</script>
