<template>
  <nav
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-13rem z-10 py-4 px-6 h-40rem"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto "
    >
      <div class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded">
        <hr class="my-4 md:min-w-full" />

        <button
          type="button"
          @click="onTapClicked(0)"
          class="py-7"
          style="outline:none"
        >
          <h6 class ="md:min-w-full text-xl text-black hover:text-blueGray-500 mt-12 font-bold block">마이 페이지</h6>
        </button>

      <div v-for="(tapText,i) in tapTexts" :key='i'>  
        <div v-if="i===0">
          <h6
            class="md:min-w-full text-black text-xs uppercase font-bold block pt-1 pb-4 no-underline"
          >
            쇼핑 정보
          </h6>
        </div>
        <div v-else-if="i===3">
          <hr class="my-4 md:min-w-full" />
          <h6
            class="md:min-w-full text-black text-xs uppercase font-bold block pt-1 pb-4 no-underline"
          >
            내 정보
          </h6>
        </div>

        <ul class="md:flex-col md:min-w-full flex flex-col list-none">
          <li class="items-center">
              <button
                type="button"
                @click="onTapClicked(i+1)"
                class="text-xs uppercase py-3 font-bold block text-blueGray-400 hover:text-black"
                style="outline:none"
              >
                <i :class="[tapIcons[i]]"></i>
                {{tapText}}
              </button>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </nav>
</template>
); }

<script>
export default {
  data() {
    return {
      tapTexts: ['구매 내역', '판매 내역', '관심 상품', '프로필 정보', '주소록', '결제 정보', '판매 정산 계좌'],
      tapIcons: ['fas fa-clipboard-list', 'fas fa-clipboard-list', 'fas fa-star', 'fas fa-address-card', 'fas fa-address-book', 'fab fa-cc-visa', 'fas fa-calculator'],
      tapActive: [false, false, false, false, false, false, false],
    };
  },
  methods: {
    onTapClicked: function(viewState){
      this.$emit("onViewStateChanged", viewState);
      
      for(let i = 0; i < this.tapActive.length; i++)
        this.tapActive[i] = false;
      
      this.tapActive[viewState] = true;
    },
  },
  components: {
  },
};
</script>
