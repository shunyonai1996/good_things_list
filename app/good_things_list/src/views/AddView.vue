<template>
  <v-app>
  <v-card width="400px" class="mx-auto mt-5">
    <v-card-title>
      <h1>Create</h1>
    </v-card-title>
    <v-card-text>
      <v-form ref="test_form">
        <v-text-field v-model="email" label="メールアドレス" :rules="[required, password_valid]" prepend-icon="mdi-email" />
        <v-text-field v-model="password" label="パスワード(6~10文字)" :rules="[required, limit_length]" counter="10"
          v-bind:type="showPassword ? 'text' : 'password'" 
          @click:append="showPassword = !showPassword" prepend-icon="mdi-lock" v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
        />
        <v-text-field v-model="passwordConfirm" label="確認用パスワード" :rules="[required, password_match]" counter="10"
          v-bind:type="showPasswordConfirm ? 'text' : 'password'" 
          @click:append="showPasswordConfirm = !showPasswordConfirm" prepend-icon="mdi-lock" v-bind:append-icon="showPasswordConfirm ? 'mdi-eye' : 'mdi-eye-off'"
        />
        <v-card-actions>
          <v-btn @click="createUser()">登録</v-btn>
          <span v-if="success" class="ma-2 success--text">登録完了</span>
          <span v-else-if="error" class="ma-2 error--text">登録失敗</span>
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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(firebaseApp)

export default {
  name: 'AddView',
  data: () => ({
    email: '',
    password: '', 
    passwordConfirm: '',
    showPassword: false,
    showPasswordConfirm: false,
    emailErrors: [],
    passwordErrors: [], 
    success: false,
    error: false,
    loading: false,
  }),
  methods: {
    // validation
    required: (value: string) => !!value || "必ず入力してください",
    limit_length: (value: string) => value.length <= 10 || "10文字以内で入力してください",
    password_valid: (value: string) => {
      if(!value.match(/^[\w\-._]+@[\w\-._]+\.[A-Za-z]+$/)) {
        return "有効なメールアドレスを入力して下さい";
      }
      return true;
    },
    password_match: function () {
      if (this.password === this.passwordConfirm) {
        return true;
      } else {
        return "パスワードが一致していません";
      }
    },
    createUser: function () {
      this.loading = true;
      if (this.$refs.test_form.validate() && this.password == this.passwordConfirm) {
        // すべてのバリデーションが通過したときのみ
        // if文の中に入る
        createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user
          console.log(userCredential)
          console.log('create user success.' + user)
          this.success = true;
          this.loading = false;
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log('errorCode: ' + errorCode)
          console.log('errorMessage: ' + errorMessage)
          errorCode == 'auth/invalid-email' ? alert('メールアドレスが不正です') : 
          this.loading = false;
          this.error = true;
        })
      } else {
        this.error = true;
        this.loading = false;
      }
    }
  }
}
</script>
