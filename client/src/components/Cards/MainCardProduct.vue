<template>

  <div class="flex flex-wrap">
    <div class="w-full lg:w-6/12 xl:w-3/12 px-4 mb-5" v-for="(item, i) in items" :key="i"  >
  <div
      class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0"
  >
    <div class="flex-auto p-4">
      <div class="flex flex-wrap">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <div class="w-full mb-5" style="height: 20vh; overflow: hidden;" >
            <img alt="아이템 사진" style="object-fit: cover;border-radius: .5rem;  background: #f4f4f4; width:100%; height: 100%;">
          </div>
          <h5 class="text-black uppercase font-bold text-xs underline">
            {{ item.cate }}
          </h5>
          <span class="text-sm text-black">
            {{ item.desc }}
          </span>
          <span class="font-semibold text-sm text-blueGray-700 block">
            {{ item.price.toLocaleString('ko-KR') }} 원
          </span>
        </div>
      </div>
      <p class="text-xs text-blueGray-400">
        <span class="whitespace-nowrap">즉시구매가</span>
      </p>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items:[{
        cate:"lego",
        title:"가나다",
        desc:"설명중ㅇㅇㅇ",
        price: 550000,
      },{
        cate:"lego",
        title:"가나다",
        desc:"설명중ㅇㅇㅇ",
        price: 550000,
      },{
        cate:"lego",
        title:"가나다",
        desc:"설명중ㅇㅇㅇ",
        price: 550000,
      },{
        cate:"lego",
        title:"가나다",
        desc:"설명중ㅇㅇㅇ",
        price: 550000,
      },]
    }
  }
}
</script>