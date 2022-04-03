<template>
  <!-- Header -->
  <div class="relative bg-gray-200 md:pt-32 pb-48 pt-12">
    <div class="px-1 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="총 거래 건수"
              statTitle="350,897"
              statArrow="up"
              statPercent="3.48"
              statPercentColor="text-emerald-500"
              statDescripiron="지난 달"
              statIconName="far fa-chart-bar"
              statIconColor="bg-purple-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="새로 가입한 회원"
              statTitle="2,356"
              statArrow="down"
              statPercent="3.48"
              statPercentColor="text-red-500"
              statDescripiron="지난 주"
              statIconName="fas fa-users"
              statIconColor="bg-orange-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="판매 입찰 건수"
              statTitle="924"
              statArrow="down"
              statPercent="1.10"
              statPercentColor="text-orange-500"
              statIconName="fas fa-chart-pie"
              statDescripiron="어제"
              statIconColor="bg-emerald-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="구매 입찰 건수"
              statTitle="1,924"
              statArrow="up"
              statPercent="12"
              statDescripiron="어제"
              statIconName="fas fa-chart-pie"
              statIconColor="bg-red-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from "@/components/Cards/Admin/CardStats.vue";

export default {
  components: {
    CardStats,
  },
};
</script>
