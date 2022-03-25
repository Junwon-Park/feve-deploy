<template>
  <div>
    <main class="">
      <section class="mt-48 relative block py-24 lg:pt-0">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center">
            <div class="w-full ">
              <div
                  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200"
              >
                <div class="flex-auto p-5 lg:p-10">
                  <h4 class="text-2xl font-semibold">
                    상품 등록
                  </h4>

                  <div class="flex flex-wrap">
                  <div class="relative mb-3 mt-8 w-full lg:w-6/12 pr-3 ">
                    <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                    >
                      상품명
                    </label>
                    <input
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="상품명"
                        v-model="product.product_name"
                    />
                  </div>

                  <div class="relative mb-3  mt-8 w-full lg:w-6/12 pr-3 ">
                    <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="브랜드명"
                    >
                      브랜드명
                    </label>
                    <input
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="브랜드명"
                        v-model="product.product_brand"
                    />
                  </div>

                  <div class="relative mb-3  mt-8 w-full lg:w-6/12 pr-3 ">
                    <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="모델명"
                    >
                      모델명
                    </label>
                    <input
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="모델명"
                        v-model="product.product_mnum"
                    />
                  </div>

                  <div class="relative mb-3  mt-8 w-full lg:w-6/12 pr-3 ">
                    <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="카테고리"
                    >
                      카테고리
                    </label>
                    <select  id="category" class=" w-full px-3 py-3 shadow" v-model="product.product_cate">
                      <option value="">카테고리 선택</option>
                      <option value="가가가">가가가</option>
                      <option value="나나나">나나나</option>
                      <option value="다다다">다다다</option>
                    </select>
                  </div>

                  <div class="relative mb-3  mt-8 w-full lg:w-6/12 pr-3 ">
                    <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="출시일"
                    >
                      출시일
                    </label>
                    <input
                        type="date"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="출시일"
                        v-model="product.product_ldate"
                    />
                  </div>

<!--                  <div class="relative mb-3  mt-8 w-full lg:w-6/12 pr-3 ">-->
<!--                    <label-->
<!--                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"-->
<!--                        htmlFor="상품사진경로"-->
<!--                    >-->
<!--                      사진-->
<!--                    </label>-->
<!--                    <input-->
<!--                        type="file"-->
<!--                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"-->
<!--                        placeholder="사진경로"-->
<!--                        v-model="product_pic"-->
<!--                    />-->
<!--                  </div>-->

                  <div class="relative mb-3  mt-8 w-full lg:w-6/12 pr-3 ">
                    <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="상품원가"
                    >
                      상품원가(발매가)
                    </label>
                    <input
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="상품원가"
                        v-model="product.product_oriprice"
                    />
                  </div>

                  <div class="relative w-full mb-3">
                    <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="상품 설명"
                    >
                      상품 설명
                    </label>
                    <textarea
                        rows="15"
                        cols="80"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="상품 설명"
                        v-model="product.product_desc"
                    />
                  </div>
                  <div class="text-center mt-6">
                    <button
                        class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        @click="formSubmit()"
                    >
                      작성하기
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {
        product_name: '',
        product_brand: '',
        product_mnum: '',
        product_cate: '',
        product_ldate: '',
        //product_pic: '',
        product_oriprice: '',
        product_desc: '',
        product_wdate:'',
      }
    };
  },
  components: {

  },
  methods: {
    formSubmit() {
      this.$axios.post('http://localhost:8080/addproduct', {
          product_name: this.product.product_name,
          product_brand: this.product.product_brand,
          product_mnum: this.product.product_mnum,
          product_cate: this.product.product_cate,
          product_ldate: this.product.product_ldate,
          //product_pic: this.product_pic,
          product_oriprice: this.product.product_oriprice,
          product_desc: this.product.product_desc,
          product_wdate: "2022-02-22",
      })
          .then((res) => {
            console.log(this.product.product_name);
            console.log(res);
          })
          .catch((error) => {
            console.log(this.product.product_name);
            console.log(error);
          })
    }
  }
};
</script>
