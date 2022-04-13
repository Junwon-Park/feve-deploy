<template>
  <div class="text-left">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="light-gray lighten-2" dark v-bind="attrs" v-on="on" class="mb-3">
          검수사항
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2" style="text-align:center">
          검수 사항
        </v-card-title>
        <v-card-text style="font-size:1rem; color:black;">
          * 주의 feve 검수기준은 거래 당사자간 원활한 거래와 보다 균형있는 검수기준 확립을 위해 지속적으로 업데이트 되고 있습니다. 거래에 앞서 최신 검수기준을 참고하시기 바랍니다.
          회원님께서 판매 또는 구매하신 모든 상품은 KREAM의 전문 검수팀이 제품의 컨디션을 꼼꼼하게 확인한 후, 검수 합격 시에만 출고하고 있습니다. </v-card-text>

        <v-card-text style="font-size:1rem; color:black;">
          1.레고 총 피스를 잘 확인해 주시기 바랍니다.
        </v-card-text>
        <v-card-text style="font-size:1rem; color:black;">
          2.상품의 하자가 있을시 검수할수 없습니다.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </template>

<script>
 export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>