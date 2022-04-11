<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
  >
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
            <!-- <v-tabs fixed-tabs>
              <v-tab>전체</v-tab>
              <v-tab>1개월</v-tab>
              <v-tab>3개월</v-tab>
              <v-tab>6개월</v-tab>
            </v-tabs> -->
          </h6>
        </div>
      </div>
    </div>
    <div class="p-4 flex-auto">
      <!-- Chart -->
      <div class="relative h-350-px">
        <canvas id="line-chart"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js";

export default {

  props:{
    CHART_PRICES:[],
    CHART_DATES:[]
  },
  // mounted:async function(){
  //   this.drawChart();
  // },
  // watch:{
  //   CHART_PRICES(){
  //    this.drawChart();
  //    console.log(this.CHART_PRICES);
  //   },
  //   CHART_DATES(){
  //     this.drawChart()
  //     console.log(this.CHART_DATES);
  //   }
  // },
  methods:{
  drawChart() {
    this.$nextTick(function () {
      var config = {
        type: "line",
        data: {
          labels: this.CHART_DATES,
          datasets: [
            {
              label: "거래 가격",
              backgroundColor: "#4c51bf",
              borderColor: "#FFD700",
              data: this.CHART_PRICES,
              fill: false,
            }
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: "Sales Charts",
            fontColor: "black",
          },
          legend: {
            labels: {
              fontColor: "black",
            },
            align: "end",
            position: "bottom",
          },
          tooltips: {
            mode: "index",
            intersect: false,
            callbacks: {
            label: function(data) {
              //console.log(data.yLabel);
            return data.yLabel.toLocaleString('ko-KR') + "원";
            }
            
           }
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "black",
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Month",
                  fontColor: "white",
                },
                gridLines: {
                  display: false,
                  borderDash: [2],
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.3)",
                  zeroLineColor: "rgba(0, 0, 0, 0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  fontColor: "black",
                  beginAtZero: true,
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Value",
                  fontColor: "white",
                },
                gridLines: {
                  borderDash: [3],
                  borderDashOffset: [3],
                  drawBorder: false,
                  color: "rgba(255, 255, 255, 0.15)",
                  zeroLineColor: "rgba(33, 37, 41, 0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
          },
        },
      };
      var ctx = document.getElementById("line-chart").getContext("2d");
      window.myLine = new Chart(ctx, config);
      })
    }
  },
  created() {
    this.$nextTick( ()=> {
      this.drawChart();
    });
    //console.log("***********라인차트********")
    //console.log(this.CHART_PRICES);
    //console.log(this.CHART_DATES);
  },
  ready() {
    this.$nextTick(()=> {
      this.drawChart();
    })
  },
  
};
</script>
