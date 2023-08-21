<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="">ログイン</h1>
      </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field v-model="email" prepend-icon="mdi-email" label="メールアドレス" />
        <v-text-field v-model="password" v-bind:type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword" prepend-icon="mdi-lock" v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" label="パスワード" />
        <v-card-actions>
          <v-btn class="info" @click="submit">ログイン</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: "LoginView",
  data(){
    return {
    showPassword: false,
    email: '',
    password: '',
  }},
  methods: {
    async login() {
      try {
        const { email, password } = this;
        await firebase.auth().signInWithEmailAndPassword(email, password);
        // ログイン成功時の処理
        console.log('ログイン成功');
      } catch (error) {
        // エラー処理
        console.error('ログインエラー:', error.message);
      }
    },
    submit() {
      console.log(this.email this.password);
    }
  }
};
</script>

<style scoped>
/* 必要なスタイルをここに追加 */
</style>
