<template>
    <div class="w-full flex-wrap mt-3 pt-6">
                  <h2>구매 전 꼭 확인해주세요!</h2>
                  <div class="mt-2">
                    <div>
                      <div style="float:left" >배송 기간 안내</div>
                      <div class="ml-auto relative" @click="detailOnOff('1')">
                           <img :src="downArrow" alt="..." class="h-8 w-8"/>
                      </div>
                      <ul v-show="isStatusOn1">
                          <li> FEVE는 최대한 빠르게 모든 상품을 배송하기 위해 노력하고 있습니다. 
                            배송 시간은 판매자가 검수를 위하여 상품을 검수센터로 보내는 속도에 따라 차이가 있습니다.</li>
                          <li>[일반 구매]</li>
                          <li>거래가 체결된 시점부터 48시간(일요일•공휴일 제외) 내에 판매자가 상품을 발송해야 하며, 
                            통상적으로 발송 후 1-2일 내에 FEVE 검수센터에 도착합니다.</li>
                          <li> - 검수센터에 도착한 상품은 입고 완료 후 3영업일 이내에 검수를 진행합니다. 검수 합격시 배송을 준비합니다.</li>
                          <li> * 상품 종류 및 상태에 따라 검수 소요 시간은 상이할 수 있으며, 
                            구매의사 확인에 해당할 경우 구매자와 상담 진행으로 인해 지연이 발생할 수 있습니다.</li>
                          <li> - 검수센터 출고는 매 영업일에 진행하고 있으며, 출고 마감시간은 오후 5시입니다. 
                            출고 마감시간 이후 검수 완료건은 운송장번호는 입력되지만 다음 영업일에 출고됩니다</li>
                      </ul>
                    </div>
                    <div>
                      <div style="float:left" >검수 안내</div>
                      <div class="ml-auto relative" @click="detailOnOff('2')">
                           <img :src="downArrow" alt="..." class="h-8 w-8"/>
                      </div>
                      <ul v-show="isStatusOn2">
                          <li>판매자의 상품이 검수센터에 도착하면 전담 검수팀이 철저한 분석과 검사로 정가품 확인을 진행합니다.</li>
                          <li> - 검수센터에서는 정가품 여부를 확인하기 위하여, 지속적으로 데이터를 쌓고 분석하여 기록하고 있습니다.</li>
                          <li> - 업계 전문가로 구성된 검수팀은 박스와 상품의 라벨에서 바느질, 접착, 소재 등 모든 것을 검수합니다.</li>
                          <li>검수 결과는 불합격•검수 보류•합격의 세가지 상태로 결과가 변경됩니다.</li>
                          <li> * 검수 합격: FEVE 검수택(Tag)이 부착되어 배송을 준비함</li>
                          <li> * 검수 보류: 앱에서 사진으로 상품의 상태 확인 및 구매 여부를 선택. (24시간 이후 자동 검수 합격)</li>
                          <li> * 검수 불합격: 즉시 거래가 취소되고 구매하신 금액을 환불 처리함.(환불 수단은 결제 수단과 동일)</li>
                      </ul>
                    </div>
                    <div>
                      <div style="float:left" >구매 환불/취소/교환 안내</div>
                      <div class="ml-auto relative" @click="detailOnOff('3')">
                           <img :src="downArrow" alt="..." class="h-8 w-8"/>
                      </div>
                      <ul v-show="isStatusOn3">
                        <li>
                          FEVE 익명 거래를 기반으로 판매자가 판매하는 상품을 구매자가 실시간으로 구매하여 거래를 체결합니다.
                        </li>
                        <li>
                         - 단순 변심이나 실수에 의한 취소/교환/반품이 불가능합니다. 상품을 원하지 않으시는 경우 언제든지 FEVE 재판매를 하실 수 있습니다.
                        </li>
                        <li>
                          - 상품 수령 후, 이상이 있는 경우 FEVE 고객센터로 문의해주시기 바랍니다.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div class="mt-2">
                        <div style="float:left;">
                          <v-icon>fas fa-lock</v-icon>
                        </div>
                        <div>
                          <p class="mb-2">100% 정품 보증</p>
                          <p class="mb-2">FEVE는 검수한 상품이 정품이 아닐 경우, 구매가의 3배를 보상합니다.</p>
                        </div>
                      </div>
                    
                      <div class="mt-2">
                        <div style="float:left;">
                          <v-icon>fas fa-search</v-icon>
                        </div>
                        <div>
                          <p class="mb-2">엄격한 검수</p>
                          <p class="mb-2">모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의 체계적인 시스템을 거쳐 검수를 진행합니다.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  
                </div>
</template>
<script>
import downArrow from "@/assets/img/downArrow.png";

export default{
    data(){
        return{
            downArrow,
            isStatusOn1: false,
            isStatusOn2: false,
            isStatusOn3: false
        };
    },
    methods:{
        detailOnOff(arg){
            if(arg==='1')
                this.isStatusOn1 = !this.isStatusOn1;
            else if(arg==='2')
                this.isStatusOn2 = !this.isStatusOn2;
            else
                this.isStatusOn3 = !this.isStatusOn3;
        }
    }
}
</script>