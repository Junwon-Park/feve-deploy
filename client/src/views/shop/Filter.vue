<template>
<div>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>선택: {{ picked }}</span>
</div>

</template>
<script>
export default{
    
}
</script>