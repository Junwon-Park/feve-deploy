<template>
  <div>
    <main class="profile-page">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://wallpaperaccess.com/full/1587180.jpg');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-blueGray-200">
        <BoxAgreement @click.native="controlModal(true)"/>
        <Modal @close="controlModal(false)" v-if="isModalOpen">
      <!-- header slot starts -->
      <template #title>
        <div>타이틀</div>
      </template>

      <!-- content slot starts -->
      <template #content>
        <p>콘텐츠 내용</p>
      </template>

      <!-- footer slot starts -->
      <template #footer>
        <button @click="controlModal(false)">동의</button>
      </template>
    </Modal>
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                >
                </div> 
              </div>
              <div class="text-center mt-12">
                <h3
                  class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
                >
                  묻고 답하기
                </h3>
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                   <div class="w-full mb-12 px-4">
                    <div class="container">
                      <table class="table table-hover">
                        <thead>
                          <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in items" :key="item.number">
                            <td><span v-html="item.number"></span></td>
                            <td><span v-html="item.title"></span></td>
                            <td><span v-html="item.writer"></span></td>
                          </tr>
                        </tbody>
                      </table>
                      <br>
                      <div class="form-row float-right">
                        <v-btn depressed color="primary" @click="controlModal(false)">
                        문의 작성 하기
                        </v-btn>
                      </div>
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
  name: "CscenterQna",
  data() {
    
    return {
      items: [
          {
            "number": "1",
            "title": "안녕하세요? 사이트 사용법 질문 드려요.",
            "writer": "회원1"
            
          },
          {
             "number": "2",
            "title": "반송 하려면 어떻게 해야 하나요?",
            "writer": "회원2"
          },
          {
             "number": "3",
            "title": "사기를 당한것 같아요. 답변 부탁드려요",
            "writer": "회원3"
          },
          {
            "number": "4",
            "title": "물건을 팔고 싶은데 검수 절차는 어떻게 되요??",
            "writer": "회원4"
          },
          {
            "number": "5",
            "title": "feve 는 무슨 뜻인가요?",
            "writer": "회원5"
            
          },
          {
             "number": "6",
            "title": "정품 맞아요? 아닌거 같은데...",
            "writer": "회원6"
          },
          {
             "number": "7",
            "title": "사이트 잘 만든것 같아요.,",
            "writer": "회원7"
          },
          {
            "number": "8",
            "title": "고객센터 답변이 너무 늦어요.. 빨리 좀 해결해주세요!!",
            "writer": "회원8"
          }
        ],
        
      
    };
  },
  components: {
    
   
  },

};
</script>

<style>
table {
  width: 95%;
  text-align : left;
}
td, th {
  font-weight: border;
  text-align: center;
  padding: 10px;
  border: 1px solid #ccc;
}
body {
  padding: 2rem;
}
</style>

