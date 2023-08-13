<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <PostComponent msg="good things post"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PostComponent from '@/components/PostComponent.vue';

export default Vue.extend({
  name: 'HomeView',
  components: {
    PostComponent
},
});
</script>
