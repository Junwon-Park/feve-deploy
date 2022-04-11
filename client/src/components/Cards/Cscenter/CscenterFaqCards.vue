<template>
  <v-row justify="center">

    <v-expansion-panels
        accordion
    >
      <v-expansion-panel
          v-for="(item,i) in 5"
          :key="i"
      >
        <v-expansion-panel-header>제목 넣기 </v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
            <div class="text-left bg-blueGray-200 rounded py-5 px-4">
              내용 넣기
            </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
export default {
  data(){
    return {

    }
  }
 
}
</script>
