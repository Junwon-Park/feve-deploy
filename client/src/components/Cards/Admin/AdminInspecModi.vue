<template>
  <v-row justify="center" class="mt-2">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
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
                  sm="6"
                  md="4"
              >
                <v-text-field
                    readonly
                    :label="table[1]"
                    :value="item.PRODUCT_NAME"
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
                    :value="item.PRODUCT_BRAND"
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
                    :value="item.PRODUCT_CATE"
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  sm="6"
                  md="6"
              >
                <v-text-field
                    readonly
                    label="모델명"
                    :value="item.PRODUCT_MNUM"
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
                    :value="item.USER_ID"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="12"
                  md="12"
              >
                <v-text-field
                    readonly
                    :label="table[7]"
                    :value="item.INSPECTION_ADATE"
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  sm="6"
                  md="6"
              >
                <label class="text-xs">검수상태</label>
                <v-select
                    v-model="inspectionStatus"
                    :items="inspectionStatusList"
                    item-text="name"
                    item-value="value"
                    :selected="true"
                    required
                ></v-select>
              </v-col>

              <v-col
                  cols="12"
                  sm="6"
                  md="6"
              >
                <label class="text-xs">검수결과</label>
                <v-select
                    v-model="inspectionResult"
                    :items="inspectionResultList"
                    item-text="name"
                    item-value="value"
                    :selected="true"
                    required
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
          <small style="color: orangered">*검수 상태와 결과는 필수 입력입니다.</small><br>
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
              @click="updateInspectionList"
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
    inspectionStatus: "",
    inspectionStatusList:[
      { name: '검수완료', value: 1 },
      { name: '검수중', value: 0 },
    ],
    inspectionResult: "",
    inspectionResultList:[
      { name: '불합격', value: 0 },
      { name: '합격', value: 1 },
    ],
    newInspectionStatus:"",
    newInspectionResult:"",
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
    updateInspectionList(){
      let newInspectionStatus=this.inspectionStatus;
      let newInspectionResult=this.inspectionResult;
      this.$emit('updateList', newInspectionStatus, newInspectionResult)
      alert("검수를 완료했습니다.");
      this.$router.go(this.$router.currentRouter);
    },
  },
}
</script>