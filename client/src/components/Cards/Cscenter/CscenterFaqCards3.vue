<template>
  <v-row justify="center">

    <v-expansion-panels
        accordion
    >
      <v-expansion-panel>
        <v-expansion-panel-header>[판매] 판매과정을 설명 해주세요. </v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              <p>FEVE 서비스 가입 후 로그인 한 회원은 상품을 판매할 수 있습니다.</p>
              <p>판매하실 상품을 검색하고, 사이즈를 선택한 후 판매버튼을 누르면 즉시 판매 혹은 판매</p> 
              <p>입찰이 가능합니다. 즉시 판매하거나 입찰 후 거래가 체결되면 상품을 검수 센터로 발송하고,</p>
              <p>검수에 합격하게 되면 판매 대금을 정산해 드립니다.</p>
            </div>
        </v-expansion-panel-content> 
        </v-expansion-panel>

         <v-expansion-panel>
        <v-expansion-panel-header>[판매] 판매 거래 체결 후, 진행상황을 설명해주세요. </v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              <p>[발송요청] 체결 후 48시간(일요일, 공휴일 제외)내 상품을 발송하신 후, 발송 정보를 입력 해주세요. </p>
              <p>발송 정보 입력 마감기한 이내에는 직접 발송 정보를 수정할 수 있습니다.</p> 
              <br>
              <p>[발송완료] 입력하신 발송정보의 상품이 검수센터로 이동하고 있습니다.</p>
              <br>
              <p>[입고대기] 검수센터 도착 후, 판매자가 입력한 발송정보의 택배를 확인하였습니다.</p>
              <br>
              <p>[입고완료] 포장을 개봉하여 체결된 거래의 상품이 맞는지 확인합니다. 발송정보는 일치하나 상품이</p>
              <p>일치하지 않는 경우 해당 단계에서 미입고 처리됩니다.</p>
              <br>
              <p>[검수 중] 전문 검수팀에서 검수를 진행합니다. 주문내역과 다른 상품은 바로 검수 불합격 처리됩니다.</p>
              <p>상품에 따라 검수소요시간은 상이 합니다.</p>
              <br>
              <p>- 검수 합격 : 검수 합격 다음 영업일에 정산 처리됩니다.</p>
              <p>- 검수 불합격 : 판매자에게 반송 처리 됩니다.</p>
              <br>
              <p>[정산완료] 판매대금이 지급 되었습니다.</p>
            </div>
        </v-expansion-panel-content> 
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>[판매] 판매 후 입고처리 과정이 궁금해요. </v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              <p>판매자가 발송하신 상품이 검수센터에 도착하면 택배에 겉면에 붙여진 송장정보를 기준으로, 주문에 </p>
              <p>저장된 발송정보와 동일한 경우 입고 처리를 진행하고 있습니다.</p> 
              <p>발송정보와 일치하는 주문이 없는 경우에는 정상적인 입고가 불가능합니다.</p>
            </div>
        </v-expansion-panel-content> 
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>[판매] 판매 대금은 언제 정산이 되나요?</v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              <p>보내주신 상품이 검수에 합격한 후 다음 영업일에 정산처리가 됩니다. 예를들어, </p>
              <p>검수 합격일이 금요일이라면 다음 영업일인 월요일에 정산처리 됩니다.</p>
              <p>대금은 판매시 입력하신 계좌로 즉시 입금됩니다.</p> 
            </div>
        </v-expansion-panel-content> 
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>[판매] 도착한 상품이 가품 같아요. </v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              <p>도착한 상품이 가품으로 의심될 경우, 고객센터로 즉시 연락 해 주시기 바랍니다.</p>
              <p>가품이 입증된 경우에는 판매 금액의 300%를 보상해 드립니다.</p>
              <br>
              <p>고객센터 또는 서비스 내 1:1 채팅 으로 문의주시기 바랍니다.</p> 
            </div>
        </v-expansion-panel-content> 
      </v-expansion-panel>

    </v-expansion-panels>
  </v-row>
</template>

<script>
export default {
  data(){
    return {

    }
  }
 
}
</script>
