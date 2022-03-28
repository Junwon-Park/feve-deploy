<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            class="ma-2"
            outlined
            large
            fab
            color="red"
            v-bind="attrs"
            v-on="on"
            style="position: fixed; bottom: 40px; right: 40px; z-index: 100"
        >
            Chat
          </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">상담하기</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  sm="12"
                  md="12"
              >
                <v-chip>
                  안녕하세요.
                </v-chip>
              </v-col>
              <v-col
                  cols="12"
                  sm="12"
                  md="12"
              >
                <v-chip>
                  안녕하세요.
                </v-chip>
              </v-col>


              <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  class="text-right"
              >
                <v-chip
                    color="orange"
                    text-color="white">
                  안녕하세요.
                </v-chip>
              </v-col>
              <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  class="text-right"
              >
                <v-chip
                    color="orange"
                    text-color="white">
                  안녕하세요.
                </v-chip>
              </v-col>

            </v-row>
          </v-container>
          <small>* 상담내용은 따로 저장되지 않으니 주의하시기 바랍니다.</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
          >
            취소
          </v-btn>
          <v-btn
              color="orange darken-1"
              text
              @click="dialog = false"
          >
            상담 완료
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
  }),
}
</script>