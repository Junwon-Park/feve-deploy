<template>
<div class="text-lg" >
    <div>
        <span >필터</span>
        <div>
        <a href="#" class="btn-delete" @click="clearAll">모두지우기</a>
        </div>
    </div>
    <br/>
    <div>
        <div>
            <span >카테고리</span>
        </div>
        <div>
            <ul >
                <li>
                    <a href="#" >
                    <input type="radio" name="depth1" id="lego" value="3,4,5" v-model="cate" @click="getValue($event)">
                    <label for="lego">레고</label>
                    </a>
                    <ul>
                        <li >
                            <a href="#" >
                                <input type="radio" name="depth1" id="architecture" value="3" v-model="cate" @click="getValue($event)">
                                <label for="architecture">아키텍처</label>
                            </a>
                            <ul style="display:none;"></ul>
                        </li>
                        <li >
                            <a href="#" >
                                <input type="radio" name="depth1" id="character" value="4" v-model="cate" @click="getValue($event)">
                                <label for="character">캐릭터</label>
                            </a>
                            <ul style="display:none;"></ul>
                        </li>
                        <li >
                            <a href="#" >
                                <input type="radio" name="depth1" id="vehicle" value="5" v-model="cate" @click="getValue($event)">
                                <label for="vehicle">탈 것</label>
                            </a>
                            <ul style="display:none;"></ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" >
                    <input type="radio" name="depth1" id="bb" value="6,7,8,9" v-model="cate" @click="getValue($event)">
                    <label for="bb">베어브릭</label>
                    </a>
                    <ul>
                        <li >
                            <a href="#" >
                                <input type="radio" name="depth1" id="fr" value="6" v-model="cate" @click="getValue($event)">
                                <label for="fr">프리사이즈</label>
                            </a>
                            <ul style="display:none;"></ul>
                        </li>
                        <li >
                            <a href="#" >
                                <input type="radio" name="depth1" id="100" value="7" v-model="cate" @click="getValue($event)">
                                <label for="100">100%</label>
                            </a>
                            <ul style="display:none;"></ul>
                        </li>
                        <li >
                            <a href="#" >
                                <input type="radio" name="depth1" id="200" value="8" v-model="cate" @click="getValue($event)">
                                <label for="200">200%</label>
                            </a>
                            <ul style="display:none;"></ul>
                        </li>
                         <li >
                            <a href="#" >
                                <input type="radio" name="depth1" id="1000" value="9" v-model="cate" @click="getValue($event)">
                                <label for="1000">1000%</label>
                            </a>
                            <ul style="display:none;"></ul>
                        </li>
                    </ul>
                </li>
                
            </ul>
        </div>
    </div>

    <div>
         <span >가격</span>
    </div>
        <div>
            <ul >
                <li>
                    <a href="#" >
                    <input type="radio" name="depth1" id="all" value="all" v-model="price" @click="getPrice($event)">
                    <label for="all">모든가격</label>
                    </a>
                    <ul>
                        <li >
                            <a href="#" >
                                <input type="radio" name="depth1" id="10" value="10" v-model="price" @click="getPrice($event)">
                                <label for="10">10만원 미만</label>
                            </a>
                            <ul style="display:none;"></ul>
                        </li>
                        <li >
                            <a href="#" >
                                <input type="radio"  name="depth1" id="30" value="30" v-model="price" @click="getPrice($event)">
                                <label for="30">10만원-30만원이하</label>
                            </a>
                            <ul style="display:none;"></ul>
                        </li>
                        <li >
                            <a href="#" >
                                <input type="radio" name="depth1" id="50" value="50" v-model="price" @click="getPrice($event)">
                                <label for="50">30만원-50만원 이하</label>
                            </a>
                            <ul style="display:none;"></ul>
                        </li>
                        <li >
                            <a href="#" >
                                <input type="radio" name="depth1" id="up" value="above" v-model="price" @click="getPrice($event)">
                                <label for="above">50만원 초과</label>
                            </a>
                            <ul style="display:none;"></ul>
                        </li>
                    </ul>
                </li>
               
            </ul>
        </div>
    </div>
    

</template>
<script>
export default{
    data() {
        return {

            cate: '',
            price: ''
        };
    },
    methods:{
        clearAll(){
            console.log("지우기 선택");
            var options = document.getElementsByName("depth1");
            for (var i = 0; i < options.length; i++) {
                if (options[i].getAttribute('type') === 'radio') {
                        options[i].checked = false;
                }
            }
        },
        getValue(event){
            console.log(event.target.value);
            this.$axios.post('http://localhost:8080/shop/min',{
                cate:event.target.value})
            .then( (res) => {			
                console.log(res.data);
                //window.$ref.Shoplist.item =res.data;
                this.$emit("changeitems",res.data);
            })
            .catch((err)=>{
            console.log(err);
            });
            
        },
         getPrice(event){
            console.log(event.target.value);
            this.$axios.post('http://localhost:8080/shop/min',{
                price:event.target.value})
            .then( (res) => {			
                console.log(res.data);
                //window.$ref.Shoplist.item =res.data;
                this.$emit("changeitems",res.data);
            })
            .catch((err)=>{
            console.log(err);
            });
            
        }

     
    }
}

</script>