<template>
  <v-row justify="center">

    <v-expansion-panels
        accordion
    >
      <v-expansion-panel>
        <v-expansion-panel-header>[구매] 상품 구매는 어떻게 하나요? </v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              <p>FEVE 서비스 가입 후 로그인 한 회원은 누구나 상품을 구매할 수 있습니다.</p>
              <p>상품을 검색하고, 원하는 상품의 구매버튼을 누르면 즉시 구매 혹은 구매 입찰이</p> 
              <p>가능합니다. 즉시 구매하거나 입찰 후 거래가 체결되면 판매자가 상품을 검수 센터로</p>
              <p>전달하여 검수를 진행하게 되며, 검수를 합격한 상품은 구매자에게 배송됩니다.</p>
            </div>
        </v-expansion-panel-content> 
        </v-expansion-panel>

         <v-expansion-panel>
        <v-expansion-panel-header>[구매] 결제는 언제 진행되나요? </v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              <p>구매 입찰을 통해 구매 희망가를 제시하신 경우, 해당 가격에 판매를 원하는 판매자가 판매 희망가를 </p>
              <p>등록하면 해당 시점에 바로 일시불로 결제가 진행됩니다. 즉시 구매는 바로 결제가 진행됩니다.</p> 
            </div>
        </v-expansion-panel-content> 
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>[구매] 구매 입찰이 만료되었어요. </v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              <p>잔액 부족, 기한 만료, 한도 초과 등의 이유로 결제에 실패하게 되면 판매/구매 입찰한 주문은 모두 </p>
              <p>만료되어 서비스에 노출되지 않습니다.</p> 
              <p>결제 정보 업데이트를 통해 새로운 카드를 등록하신 후 만료된 입찰주문을 다시 등록해 주셔야 합니다.</p>
              <p>이는 기존에 결제정보 오류로 인해 보류되었던 입찰이 결제정보 업데이트후 자동 활성화 되면서,</p>
              <p>원치않는 가격으로 입찰 거래가 체결되는 것을 방지하기 위함입니다.</p>
            </div>
        </v-expansion-panel-content> 
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>[구매] 구매한 상품을 반품할 수 있나요?</v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              <p>원칙적으로는 검수 합격을 한 상품에 대하여 반품이 불가능 합니다. </p>
              <p>단순 변심의 경우에는 FEVE 에서 다시 판매하실 수 있습니다.</p>
            </div>
        </v-expansion-panel-content> 
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>[구매] 일반 구매 거래 체결 후, 진행상황을 설명해주세요. </v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              <p>[대기 중] 판매자의 상품 발송을 기다립니다. 판매자는 거래 체결 후 48시간(일요일,공휴일 제외)</p>
              <p>이내에 운송장 정보를 입력하여야 합니다.</p>
              <br>
              <p>[발송완료] 판매자가 FEVE로 상품을 발송하여, 택배가 이동중입니다.</p> 
              <br>
              <p>[입고대기] 검수센터 도착 후, 판매자가 입력한 발송정보의 택배를 확인하였습니다.</p>
              <br>
              <p>[입고완료] 포장을 개봉하여 체결된 거래의 상품이 맞는지 확인합니다. 발송정보는 일치하나</p>
              <p>상품이 일치하지 않는 경우 해당 단계에서 미입고 처리됩니다.</p>
              <br>
              <p>[검수 중] 전문 검수팀에서 검수를 진행합니다. 주문내역과 다른 상품은 바로 검수 불합격 처리</p>
              <p>됩니다.상품에 따라 검수소요시간은 상이 합니다.</p>
              <br>
              <p>[배송 중] 구매자에게 발송하는 운송장번호가 택배사에 접수되었습니다.</p>
              <p>운송장조회는 택배사 수거 이후에 가능하게 됩니다.</p>
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
