<template>
<div class="w-full">
    <div class="border-b py-4">
        <span class="text-sm font-semibold" >필터</span>
        <div>
        <a href="#" class="btn-delete text-sm" @click="clearAll">모두지우기</a>
        </div>
    </div>
    <br/>
    <div class="border-b pb-4">
        <div>
            <span  class="text-sm font-semibold">카테고리</span>
        </div>
        <div>
            <ul class="pl-0">
                <li  class="text-sm">
                    <span>
                    <input type="radio" name="depth1" id="lego" value="3,4,5" v-model="cate" @click="getValue($event)">
                    <label for="lego" class="ml-1" @click="showMenu1">레고</label>
                    </span>
                    <ul id="legoMenu" v-if="show1">
                        <li >
                            <a href="#">
                                <input type="radio" name="depth1" id="architecture" value="3" v-model="cate" @click="getValue($event)" >
                                <label for="architecture" class="ml-1">아키텍처</label>
                            </a>
                        </li>
                        <li >
                            <a href="#" >
                                <input type="radio" name="depth1" id="character" value="4" v-model="cate" @click="getValue($event)" >
                                <label for="character" class="ml-1">캐릭터</label>
                            </a>
                        </li>
                        <li >
                            <a href="#" >
                                <input type="radio" name="depth1" id="vehicle" value="5" v-model="cate" @click="getValue($event)" >
                                <label for="vehicle" class="ml-1">탈 것</label>
                            </a>
                        </li>
                    </ul>
                </li>
                <li  class="text-sm">
                    <a href="#"  >
                    <input type="radio" name="depth1" id="bb" value="6,7,8,9" v-model="cate" @click="getValue($event)">
                    <label for="bb" class="ml-1" @click="showMenu2">베어브릭</label>
                    </a>
                    <ul  v-if="show2" id="bearMenu" >
                        <li >
                            <a href="#"  >
                                <input type="radio" name="depth1" id="fr" value="6" v-model="cate" @click="getValue($event)">
                                <label for="fr" class="ml-1">프리사이즈</label>
                            </a>
                        </li>
                        <li >
                            <a href="#"  >
                                <input type="radio" name="depth1" id="100" value="7" v-model="cate" @click="getValue($event)">
                                <label for="100" class="ml-1">100%</label>
                            </a>
                        </li>
                        <li >
                            <a href="#" >
                                <input type="radio" name="depth1" id="200" value="8" v-model="cate" @click="getValue($event)" >
                                <label for="200" class="ml-1">200%</label>
                            </a>
                        </li>
                         <li >
                            <a href="#" >
                                <input type="radio" name="depth1" id="1000" value="9" v-model="cate" @click="getValue($event)">
                                <label for="1000" class="ml-1">1000%</label>
                            </a>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>
    </div>

  <div  class="border-b py-4">
    <div>
         <span   class="text-sm font-semibold">가격</span>
    </div>
        <div class="py-4">
            <ul class="pl-0">
                <li  class="text-sm">
                    <a href="#" >
                    <input type="radio" name="depth1" id="all" value="all" v-model="price"  @click="getPrice($event)">
                    <label for="all" class="ml-1" @click="showMenu3">모든가격</label>
                    </a>
                    <ul  v-if="show3" id="priceMenu" >
                        <li >
                            <a href="#" >
                                <input type="radio" name="depth1" id="10" value="10" v-model="price"  @click="getPrice($event)">
                                <label for="10" class="ml-1">10만원 미만</label>
                            </a>
                        </li>
                        <li >
                            <a href="#" >
                                <input type="radio"  name="depth1" id="30" value="30" v-model="price"  @click="getPrice($event)">
                                <label for="30" class="ml-1">10만원-30만원이하</label>
                            </a>
                        </li>
                        <li >
                            <a href="#" >
                                <input type="radio" name="depth1" id="50" value="50" v-model="price"  @click="getPrice($event)">
                                <label for="50" class="ml-1">30만원-50만원 이하</label>
                            </a>
                        </li>
                        <li >
                            <a href="#" >
                                <input type="radio" name="depth1" id="above" value="above" v-model="price"  @click="getPrice($event)">
                                <label for="above" class="ml-1">50만원 초과</label>
                            </a>
                        </li>
                    </ul>
                </li>
               
            </ul>
        </div>
    </div>
</div>

</template>
<script>
export default{
    data() {
        return {
            show1: false,
            show2: false,
            show3: false,
            cate: '',
            price: ''
        };
    },
    methods:{
        clearAll(){
            //console.log("지우기 선택");
            var options = document.getElementsByName("depth1");
            for (var i = 0; i < options.length; i++) {
                if (options[i].getAttribute('type') === 'radio') {
                        options[i].checked = false;
                }
            }
            this.$parent.getProductList();
        },
        getValue(event){
            //console.log(event.target.value);
            this.$axios.post('http://localhost:8080/shop/filterCate',{
                cate:event.target.value})
            .then( (res) => {			
                //console.log(res.data);
                //window.$ref.Shoplist.item =res.data;
                this.$emit("changeitems",res.data);
            })
            .catch((err)=>{
            console.log(err);
            });

        },
         getPrice(event) {
           //console.log(event.target.value);
           this.$axios.post('http://localhost:8080/shop/filterPrice', {
             price: event.target.value
           })
               .then((res) => {
                 //console.log(res);
                 //console.log(res.data);
                 //window.$ref.Shoplist.item =res.data;
                 this.$emit("changeitems", res.data);
               })
               .catch((err) => {
                 console.log(err);
               });
         },
      showMenu1(){
          this.show1= !this.show1
        console.log('zz', this.show1);
      },
      showMenu2(){
        this.show2= !this.show2
      },
      showMenu3(){
        this.show3= !this.show3
      }
    },

}

</script>

<style>
[type="radio"] {
  border: 1px solid #ddd !important;
  border-radius: 2px !important;
  vertical-align: middle !important;
  color: black !important;
  width: .5rem !important;
  height: .5rem !important;
}

label:hover {
  cursor: pointer
}

[type="radio"]:checked {
  outline: none !important;
  border-color: transparent !important;
  background-color: black !important;
  background-image: none !important;
  background-size: 100% 100% !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}

[type="radio"]:focus {
  outline: none !important;
  outline-offset: 0 !important;
  --tw-ring-inset: none  !important;
  --tw-ring-offset-width: 0 !important;
  --tw-ring-offset-color: black  !important;
  --tw-ring-color: black  !important;
  --tw-ring-offset-shadow: none !important;
  --tw-ring-shadow: none  !important;
  -webkit-box-shadow: none  !important;
  box-shadow: none  !important;
}
</style>