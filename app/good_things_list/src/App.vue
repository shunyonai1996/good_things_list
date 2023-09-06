<template>
  <div id="app">
    <HeaderComponent />
    <router-view/>
    <FooterComponent />
  </div>
</template>


<script lang="ts">
import HeaderComponent from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue'


export default {
    components: {
        HeaderComponent,
        FooterComponent,
    },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #5C5470;
}

li {
  list-style: none;
}
</style>
