<template>
  <div class="header">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/add">Add</router-link> |
      <router-link to="/post">Post</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HeaderComponent',
  // props: {
  //   msg2: String,
  // },
});
</script>
