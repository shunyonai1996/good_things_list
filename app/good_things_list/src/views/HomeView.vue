<template>
  <home-component />
</template>

<script lang="ts">
  import Vue from 'vue'
  import HomeComponent from '../components/HomeComponent.vue'

  export default Vue.extend({
    name: 'HomeView',

    components: {
      HomeComponent,
    },
  })
</script>
