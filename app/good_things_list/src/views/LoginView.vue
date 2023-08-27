<template>
  <v-card width="400px" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="">Login</h1>
    </v-card-title>
  <v-card-text>
    <v-form>
      <v-text-field v-model="email" required prepend-icon="mdi-email" label="メールアドレス" />
      <v-text-field v-model="password" required label="パスワード"
        v-bind:type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword" prepend-icon="mdi-lock" v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      />
      <v-card-actions>
        <v-btn @click="submit">ログイン</v-btn>
      </v-card-actions>
    </v-form>
  </v-card-text>
  </v-card>
  
</template>

<script lang="ts">
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default {
  name: "LoginView",
  data(){
    return {
    showPassword: false as boolean,
    email: '' as string,
    password: '' as string,
  }},
  methods: {
    async login() {
      try {
        await firebase.auth().signInWithEmailAndPassword((this as any).email, (this as any).password);
        // ログイン成功時の処理
        console.log('ログイン成功');
      } catch (error: any) {
        // エラー処理
        console.error('ログインエラー:', error.message);
      }
    },
    submit() {
      // console.log(this.email, this.password);
    },
  },
};
</script>

<style scoped>
/* 必要なスタイルをここに追加 */
</style>
