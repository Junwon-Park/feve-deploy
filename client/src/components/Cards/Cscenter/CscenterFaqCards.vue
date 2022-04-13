<template>
  <v-row justify="center">

    <v-expansion-panels
        accordion
    >
      <v-expansion-panel>
        <v-expansion-panel-header>[이용정책] 페널티 정책 </v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              <p>판매자와 구매자의 건전한 거래를 위하여 아래 사유에 따라 페널티가 부과됩니다.</p>
              <p>결제정보 오류로 페널티 결제 실패시, 이용약관 제24조 ("서비스수수료")에 따라</p> 
              <p>별도의 고지 없이 재결제를 시도합니다.</p>
            </div>
        </v-expansion-panel-content> 
        </v-expansion-panel>

         <v-expansion-panel>
        <v-expansion-panel-header>[이용정책] 가품, 중고품 판매에 대한 제재 </v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              <p>가품, 중고품 판매를 시도하여 적발된 경우 판매금액의 15% 페널티가 부과되며 판매자는 </p>
              <p>적발 즉시 이용정지 처리됩니다. 가품 판매의 경우 상표법 108조에 의거 민사상 손해배상 책임</p> 
              <p>및 형사상 7년 이하의 징역 또는 1억원 이하의 벌금 처벌을 받을 수 있습니다.</p>
            </div>
        </v-expansion-panel-content> 
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>[이용정책] 부적절행위 금지 </v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              <p>아래에 해당하는 경우, 이용약관 제7조(이용제한 등)에 따라 일시 정지나 영구이용정지 조치 됩니다. </p>
              <p>허위사실 유포 관련 고의성이 확인될 시, 유관부서로 이관되어 처리될 수 있습니다.</p> 
              <p>- 가품 거래 시도</p>
              <p>- 중고품 거래 시도</p>
              <p>- 여러 개의 계정을 생성하여 자전거래</p>
              <p>- 포인트 획득, 시세 조작 등의 목적으로 지인과 공모한 허위 거래</p>
              <p>- 신용카드 불법 현금 유통 (소위 카드깡)</p>
              <p>- 커뮤니티 내 허위사실 유포 등 서비스 운영을 방해하는 각종 부정행위</p>
            </div>
        </v-expansion-panel-content> 
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>[이용정책] 거래 실패 시 반송 운임 기준 </v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              <p>거래 실패로 인한 상품 반송 시, 택배 운임의 선불/착불 기준은 아래와 같습니다. </p>
              <br><br>
              <p>검수 불합격</p>
              <p>- 착불 : 검수 기준상 '불합격' 에 해당하는 반송건</p> 
              <p>- 선불 : '구매의사 확인' 이후 발생하는 반송건</p>
              <br><br>
              <p>발송지연 및 미입고</p>
              <p>발송지연 및 미입고는 반송 운임은 모두 착불 입니다.</p>
            </div>
        </v-expansion-panel-content> 
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>[이용정책] 검수 및 품질 보증 관련 주의사항 </v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              <p>FEVE의 검수기준은 거래 당사자간 원활한 거래와 보다 균형있는 검수 기준 확립을 위해 지속적으로 </p>
              <p>업데이트 되고 있습니다. 거래에 앞서 최신 검수기준을 참고 하시기 바랍니다.</p>
              <p>회원님께서 판매 또는 구매하신 모든 상품은 FEVE의 전문 검수팀이 제품의 컨디션을 꼼꼼하게 확인</p> 
              <p>한 후, 검수 합격 시에만 출고하고 있습니다.</p>
              <br><br>
              <p>FEVE의 검수기준으로 고지된 사항 이외 제조사에서 불량으로 인정하지 않는 기준, 또는 제조사의</p>
              <p>공정상 발생하는 상품상태 중 당사 검수기준에 따라 그 여부를 명확히 분별할 수 없는 상품의 경우</p>
              <p>하자로 판단하지 않으며, 이로 인한 구매취소는 불가하므로 신중한 거래 부탁 드립니다.</p>
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
