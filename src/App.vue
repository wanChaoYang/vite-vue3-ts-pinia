<template>
  <div>
    <vue-qr 
     :size="150" 
     :logoSrc="img" 
     colorDark="#4c8dae"
      :margin="20"
      :binarize="true"
      :correctLevel="3"
      text="https://www.npmjs.com/package/vue-qr"
      ></vue-qr>
  </div>
</template>y
<script setup lang="ts">
import img from "./assets/vue.svg";
import vueQr from 'vue-qr/src/packages/vue-qr.vue';
</script>

<style scoped>
</style>
