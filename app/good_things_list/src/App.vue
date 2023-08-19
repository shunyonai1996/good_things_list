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
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
