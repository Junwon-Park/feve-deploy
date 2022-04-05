<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-200"
  >
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
            통계
          </h6>
          <h2 class="text-blueGray-700 text-xl font-semibold">
            총 거래 / 회원 수 비교
          </h2>
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
  data(){
    return{
      month:[],
    }
  },
  props:{
    countUser: [],
    userCnt: [],
    dealCnt: [],
  },
  methods: {
    makeMonthArray(){
      for(let i=0; i<this.$props.countUser.length;i++) {
        this.month.push(this.$props.countUser[i].month +'월')
      }
    },
    drawChart(){
      var config = {
        type: "line",
        data: {
          //labels: this.month,
          labels: [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월",
          ],
          datasets: [
            {
              //label: new Date().getFullYear(),
              label:"총 거래",
              backgroundColor: "#A855F7",
              borderColor: "#A855F7",
              //data: [65, 78, 66, 44, 56, 86, 74, 56, 60, 87, 67, 75],
              data: this.dealCnt,
              fill: false,
            },
            {
              //label: new Date().getFullYear() - 1,
              label: "회원 수",
              fill: false,
              backgroundColor: "#F97316",
              borderColor: "#F97316",
              data: this.userCnt,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: "Sales Charts",
            fontColor: "rgba(0,0,0,.7)",
          },
          legend: {
            labels: {
              fontColor: "rgba(0,0,0,.7)",
            },
            align: "end",
            position: "bottom",
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "rgba(0,0,0,.7)",
                },
                display: true,
                scaleLabel: {
                  display: true,
                  labelString:  new Date().getFullYear()+" 월별 통계",
                },
                gridLines: {
                  display: false,
                  borderDash: [2],
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.3)",
                  zeroLineColor: "rgba(33, 37, 41, 0.3)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  fontColor: "rgba(0,0,0,.7)",
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
                  color: "rgba(33, 37, 41, 0.3)",
                  zeroLineColor: "rgba(33, 37, 41, 0.3)",
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
    }
  },
  created: function () {
    this.$nextTick(function () {
      this.drawChart();
    });
  },
  ready() {
    this.$nextTick(function() {
      this.drawChart();
    })
  },
};
</script>
