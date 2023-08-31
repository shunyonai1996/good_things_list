<template>
  <v-app>
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
          <v-btn @click="login">ログイン</v-btn>
          <span v-if="success" class="ma-2 success--text">ログイン</span>
        </v-card-actions>
      </v-form>
    </v-card-text>
    </v-card>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script lang="ts">
import firebaseApp from '../plugins/firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(firebaseApp)

export default {
  name: "LoginView",
  data(){
    return {
    showPassword: false as boolean,
    email: '' as string,
    password: '' as string,
    loading: false as boolean,
    success: false as boolean,
  }},
  methods: {
    login: function() {
      (this as any).loading = true;
      signInWithEmailAndPassword(auth, (this as any).email, (this as any).password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(userCredential);
        console.log('create user success.' + user.email);
        (this as any).success = true;
        (this as any).loading = false;
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('errorCode: ' + errorCode);
        console.log('errorMessage: ' + errorMessage);
        if(errorCode == 'auth/user-not-found') {
          alert('登録されていないメールアドレスです')
        } else if (errorCode == 'auth/wrong-password') {
          alert('パスワードに誤りがあります')
        } else if (errorCode == 'auth/invalid-email') {
          alert('メールアドレスが不正です')
        } else if (errorCode == 'auth/missing-password') {
          alert('パスワードを入力して下さい')
        }
        (this as any).loading = false;
      })
    },
  },
};
</script>

<style scoped>
/* 必要なスタイルをここに追加 */
</style>
