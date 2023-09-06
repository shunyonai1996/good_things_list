<template>
  <header>
    <v-app-bar
      color="#F57C00"
    >
      <v-img
        :src="require('../assets/PosiMomentsLogo.jpg')"
        max-height="50"
        max-width="50"
        class="ma-1 pa-1"
        contain
      ></v-img>

      <!-- メニューバーアイコン -->
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

      <!-- ハンバーガーメニュー -->
    <v-navigation-drawer v-model="drawer" fixed >
      <v-list
        nav
        dense
      >
        <!-- ハンバーガーメニュー内のリンク -->
        <v-list-item-group>
          <v-list>
            <v-list-item to="/" @click="drawer = false">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item to="/profile" @click="drawer = false">
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item to="/login" @click="drawer = false">
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item>
            <v-list-item to="/add" @click="drawer = false">
              <v-list-item-title>Add</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HeaderComponent',
  data() {
    return {
      drawer: false, // ハンバーガーメニューの表示/非表示
    };
  },
});
</script>

<style>
.header {
  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

nav a {
  font-weight: bold;
  color: #B9B4C7;
}

nav a.router-link-exact-active {
  color: #5C5470;
}
</style>
