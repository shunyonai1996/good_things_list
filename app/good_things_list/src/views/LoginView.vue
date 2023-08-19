<template>
  <v-app>
    <v-card>
      <v-card-title>
        <h1 class="">ログイン</h1>
      </v-card-title>
    </v-card>
    <v-card-text>
      <v-form>
        <v-text-field label="ユーザ名" />
        <v-text-field label="パスワード" />
      </v-form>
    </v-card-text>
  </v-app>
</template>

<script lang="ts">
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
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
    }
  }
};
</script>

<style scoped>
/* 必要なスタイルをここに追加 */
</style>
