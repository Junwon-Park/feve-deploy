<template>
  <div class="mt-7rem ml-14rem">
    <main class="profile-page"> 
      <section class="relative block h-150-px">
      </section>
      <section class="relative py-16 bg-blueGray-200">
        <div class="">
        <div class="p-8 relative flex flex-col min-w-0 break-words  pd-8 bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
          
          <div class="flex flex-wrap">
            <div class="w-full xl:w-4/12 px-4 mt-12">
               <v-carousel v-model="model">
                    <v-carousel-item v-for="(color, i) in colors" :key="color">
                    <v-sheet :color="color" height="100%" tile>
                        <v-row class="fill-height" align="center" justify="center">
                        <div class="text-h2">
                            Slide {{ i + 1 }}
                        </div>
                        </v-row>
                    </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </div>
            <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mt-12">
              <div class="w-full">
                  구매버튼
              </div>
              <div class="w-full">
                  상품정보
              </div>
              <div class="w-full">
                  배송정보
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
    data: () => ({
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    }),
  }
</script>
