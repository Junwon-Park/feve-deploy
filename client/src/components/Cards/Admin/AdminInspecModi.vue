<template>
  <v-row justify="center" class="mt-2">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
        :table="table"
        v-bind="items"
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
                  sm="6"
                  md="4"
              >
                <v-text-field
                    readonly
                    :label="table[1]"
                    :value="items[0].PRODUCT_NAME"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="4"
              >
                <v-text-field
                    readonly
                    :label="table[2]"
                    :value="items[0].PRODUCT_BRAND"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="4"
              >
                <v-text-field
                    readonly
                    :label="table[3]"
                    :value="items[0].PRODUCT_CATE"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="6"
              >
                <v-text-field
                    readonly
                    :label="table[5]"
                    :value="items[0].USER_ID"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="6"
              >
                <v-text-field
                    :label="table[7]"
                    :value="items[0].INSPECTION_ADATE"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="6"
              >
                <v-select
                    :label="table[8]"
                    :items="items[0].INSPECTION_STATUS"
                    required
                ></v-select>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="6"
              >
                <v-select
                    :label="table[10]"
                    :items="items[0].INSPECTION_RESULT"
                    required
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
          <small>*검수 상태와 결과를 입력한 뒤 저장버튼을 눌러주세요.</small>
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
              @click="dialog = false"
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
    dialog: false,
  }),
  props: {
    dialog:{},
    table: [],
    items:{},
    title:{},
  },
  mounted(){
    // console.log(this.$props.table)
    // console.log(this.$props.items)
  },
  method:{
    sendDialog(){
      this.recDialog = true
    },
    closeDialog(){
      this.dialog=false
    }
  }
}
</script>