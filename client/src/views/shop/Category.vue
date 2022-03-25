<template>
<div >
    <div>
        <div>
            <span >필터</span>
        </div>
    </div>
    <div>
        <div>
            <span >카테고리</span>
        </div>
        <div>
            <ul >
                <li>
                    <a href="#" >
                    <input type="radio" id="lego" value="lego" v-model="picked">
                    <label for="lego">레고</label>
                    </a>
                    <ul>
                        <li >
                            <a href="#" >
                                <input type="radio" id="architecture" value="architecture" v-model="picked">
                                <label for="architecture">아키텍처</label>
                            </a>
                            <ul style="display:none;"></ul>
                        </li>
                        <li >
                            <a href="#" >
                                <input type="radio" id="character" value="character" v-model="picked">
                                <label for="character">캐릭터</label>
                            </a>
                            <ul style="display:none;"></ul>
                        </li>
                        <li >
                            <a href="#" >
                                <input type="radio" id="vehicle" value="vehicle" v-model="picked">
                                <label for="vehicle">탈 것</label>
                            </a>
                            <ul style="display:none;"></ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" >
                    <input type="radio" id="lego" value="lego" v-model="picked">
                    <label for="lego">베어브릭</label>
                    </a>
                    <ul>
                        <li >
                            <a href="#" >
                                <input type="radio" id="fr" value="fr" v-model="picked">
                                <label for="fr">프리사이즈</label>
                            </a>
                            <ul style="display:none;"></ul>
                        </li>
                        <li >
                            <a href="#" >
                                <input type="radio" id="100" value="100" v-model="picked">
                                <label for="100">100%</label>
                            </a>
                            <ul style="display:none;"></ul>
                        </li>
                         <li >
                            <a href="#" >
                                <input type="radio" id="1000" value="1000" v-model="picked">
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
                    <input type="radio" id="all" value="all" v-model="picked">
                    <label for="all">모든가격</label>
                    </a>
                    <ul>
                        <li >
                            <a href="#" >
                                <input type="radio" id="architecture" value="architecture" v-model="picked">
                                <label for="architecture">10만원이하</label>
                            </a>
                            <ul style="display:none;"></ul>
                        </li>
                        <li >
                            <a href="#" >
                                <input type="radio" id="character" value="character" v-model="picked">
                                <label for="character">10만원-30만원이하</label>
                            </a>
                            <ul style="display:none;"></ul>
                        </li>
                        <li >
                            <a href="#" >
                                <input type="radio" id="vehicle" value="vehicle" v-model="picked">
                                <label for="vehicle">30만원-50만원이하</label>
                            </a>
                            <ul style="display:none;"></ul>
                        </li>
                        <li >
                            <a href="#" >
                                <input type="radio" id="vehicle" value="vehicle" v-model="picked">
                                <label for="vehicle">50만원이상</label>
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
     name: 'category'
}
</script>