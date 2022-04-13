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
          <span class="text-h5">{{ title }}</span>
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
                    :value="item.USER_ID"
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
                    label="내용"
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
                    outlined
                    auto-grow
                    label="답변 작성하기"
                    rows="4"
                    row-height="30"
                    shaped
                    v-model="cscenterComment"
                ></v-textarea>
              </v-col>

            </v-row>
          </v-container>
          <small>*질문에 대한 답변을 입력한 뒤 저장버튼을 눌러주세요.</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="$emit('sendDialog')"
          >
            취소
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="updateCscenterList"
          >
            저장
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    //dialog: false,
    cscenterComment:"",
  }),
  props: {
    dialog:{},
    table: [],
    title:{},
    item:{}
  },

  methods:{
    sendDialog(){
      this.recDialog = true
    },
    closeDialog(){
      this.dialog=false
    },
    updateCscenterList(){
      let cscenterComment=this.cscenterComment;
      this.$emit('updateList', cscenterComment)
      alert("답변을 등록했습니다.");
      this.$router.go(this.$router.currentRouter);
    },
  },
  created(){
    //console.log(this.$props.item)
  }
}
</script>
<style>
textarea{
  background: none !important;
}
</style>