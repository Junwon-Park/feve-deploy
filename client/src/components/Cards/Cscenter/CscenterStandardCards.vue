<template>
  <v-row justify="center">

    <v-expansion-panels
        accordion
    >
      <v-expansion-panel>
        <v-expansion-panel-header>[검수기준] 불합격/페널티 부과 사항 </v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              <p>모조품/가품 : 페널티 15% , 이용정지</p>
              <p>중고품 : 페널티 15%, 이용정지</p> 
              <p>정보 불일치(품번, 상품 등) : 페널티 10%</p>
              <p>중고품 판정의 경우 제품 외관 컨디션, 사용으로 인한 오염 등의 기준을 종합하여 검수원과</p>
              <p>검수센터 책임자의 최종 판단하에 결정하게 됩니다. </p>
            </div>
        </v-expansion-panel-content> 
        </v-expansion-panel>

        <v-expansion-panel>
        <v-expansion-panel-header>[검수기준] 유의사항 </v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              <p>- '구매자 의사 확인'의 상품은 최초 보류 알림 기준 24시간 이내 회신이 없을 경우에 자동 검수 합격처리</p>
              <p>되며 이와 관련한 취소는 불가능 합니다.</p>
              <br> 
              <p>- 모조품/가품 판매 및 패널티 회피 시 해당 계정은 회원 자격이 정지되며, 새로운 아이디로 가입을 하여도</p>
              <p>이전 거래 기록을 근거로 서비스 이용을 제재할 수 있습니다.</p>
              <br>
              <p>- 국내 발매 제품/해외 발매 제품의 여부는 검수 불합격 사항이 아니며, 이로 인한 구매 취소 또한 불가합니다.</p>
            </div>
        </v-expansion-panel-content> 
        </v-expansion-panel>

        <v-expansion-panel>
        <v-expansion-panel-header>[검수기준] 상품 거래 관련 주의사항 </v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              <p>FEVE는 정가품 판정 및 검수기준에 의한 기본 품질 확인을 수행하고 있으나, 통신판매 중개자로서 제조업체의</p>
              <p>제품별 보증에 대해서는 책임을 지지 않습니다.</p> 
              <p>제품 기능에 관한 사항이나 기타 제품 관련 질문은 제조업체에 문의 하시기 바랍니다.</p>
              <p>단, 제조업체의 A/S여부는 보장하지 않습니다.</p>
            </div>
        </v-expansion-panel-content> 
        </v-expansion-panel>

        <v-expansion-panel>
        <v-expansion-panel-header>[검수기준] 상품 불량 기준 안내  </v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              <p>FEVE의 검수기준으로 고지된 사항 이외 아래와 같이 제조사에서 불량으로 인정하지 않는 기준, 또는</p>
              <p>당사 검수기준에 따라 그 여부를 명확히 분별할 수 없는 상품의 경우 하자로 판단하지 않으며, 이로 인한</p> 
              <p>구매 취소는 불가하므로 신중한 거래 부탁드립니다.</p>
              <br>
              <p>- 유통 및 보관과정에서 발생할 수 있는 실링의 변형 혹은 교체</p>
              <p>- 제조공정, 유통과정 또는 소재 특성 상 발생할 수 있는 사항</p>
            </div>
        </v-expansion-panel-content> 
        </v-expansion-panel>

        <v-expansion-panel>
        <v-expansion-panel-header>[검수기준] 검수기준에 대하여 안내 드립니다. </v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              <p>FEVE의 검수기준은 거래 당사자간 원활한 거래와 보다 균형있는 검수기준 확립을 위해 지속적으로</p>
              <p>업데이트 되고 있습니다. 거래에 앞서 최신 검수기준을 참고하시기 바랍니다.</p> 
              <br>
              <p>회원님께서 판매 또는 구매하신 모든 상품은 FEVE 의 전문 검수팀이 제품의 컨디션을 꼼꼼하게 확인한 후,</p>
              <p>검수 합격 시에만 출고하고 있습니다.</p>
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
  },

}
</script>
