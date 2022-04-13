<template>
  <v-row justify="center" class="mt-2">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="900px"
        :table="table"
        :item="item"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">문의 내역 확인하기</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  sm="8"
                  md="8"
              >
                <v-text-field
                    readonly
                    :label="table[1]"
                    :value="item.CSCENTER_TITLE"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="4"
                  md="4"
              >
                <v-text-field
                    readonly
                    :label="table[2]"
                    :value="item.USER_NAME"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="12"
                  md="12"
              >
                <v-textarea
                    readonly
                    filled
                    auto-grow
                    label="문의 내용"
                    rows="4"
                    row-height="30"
                    shaped
                    :value="item.CSCENTER_CONTENTS"
                ></v-textarea>
              </v-col>

              <v-col
                  cols="12"
                  sm="12"
                  md="12"
              >
                <v-textarea
                    readonly
                    outlined
                    auto-grow
                    label="관리자 답변 내용"
                    rows="4"
                    row-height="30"
                    shaped
                    :value="item.CSCENTER_COMMENT"
                ></v-textarea>
              </v-col>

            </v-row>
          </v-container>
          <small>*자신의 문의 내역을 확인 가능합니다.</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="$emit('sendDialog')"
          >
            돌아가기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    //dialog: false
   
  }),
  props: {
      dialog:{},
      table:[],
      item:{
        CSCENTER_COMMENT:{
          default:'답변 대기 중 입니다.'
        }

      }
      },

  methods:{
    sendDialog(){
      this.recDialog = true
    },
    closeDialog(){
      this.dialog=false
    }
  },
  created(){
    console.log(this.$props.item)
  }
}
</script>
<style>
textarea{
  background: none !important;
}
</style>