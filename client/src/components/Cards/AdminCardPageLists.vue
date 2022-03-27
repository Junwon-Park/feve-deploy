<template>
  <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">
            {{ title }}
          </h3>
        </div>
        <div
            class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
        >
          <router-link to="/admin/addProduct">
          <button
              class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
          >
            상품 생성하기
          </button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
        <tr>
          <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
          >
            번호
          </th>
          <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold "
          >
            상품 이름
          </th>
          <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold "
          >
            브랜드
          </th>
          <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold "
          >
            상품 원가
          </th>
          <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold "
          >
            카테고리
          </th>
          <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold "
          >
            거래 수
          </th>
          <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold "
          >
            검수 요청
          </th>
          <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold "
          >
            검수중
          </th>
          <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold left"
          >
            검수 완료
          </th>
          <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold "
          >
            상태
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{ seq }}
          </th>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{ PRODUCT_NAME }}
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{  PRODUCT_BRAND  }}
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{  PRODUCT_ORIPRICE  }}
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{  PRODUCT_CATE }}
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{ dealCount }}
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{ inspecCount }}
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{ inspecStatus }}
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{ inspecComplete }}
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            <button
                class="bg-orange-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
            >
              자세히 보기
            </button>
          </td>
        </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "리스트",
    },
    seq: {
      type: String,
      default: "1",
    },
    PRODUCT_NAME: {
      type: String,
      default: "Lego Firehouse Headquarters",
    },
    PRODUCT_BRAND: {
      type: String,
      default: "Lego",
    },
    PRODUCT_CATE: {
      type: String,
      default: "Architecture",
    },
    PRODUCT_ORIPRICE: {
      default: 550000
    },
    dealCount: {
      default: 5
    },
    inspecCount: {
      default: 10
    },
    inspecStatus: {
      default: 2
    },
    inspecComplete: {
      default: 7
    },
  },
}
</script>
