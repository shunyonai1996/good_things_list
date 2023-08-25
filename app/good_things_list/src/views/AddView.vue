<template>
  <v-app>
  <v-card width="400px" class="mx-auto mt-5">
    <v-card-title>
      <h1>Create</h1>
    </v-card-title>
    <v-card-text>
      <v-text-field label="メールアドレス" v-model="email" prepend-icon="mdi-email" required />
      <v-text-field label="パスワード" required
        v-model="pw" v-bind:type="showPassword ? 'text' : 'password'" 
        @click:append="showPassword = !showPassword" prepend-icon="mdi-lock" v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
      />
      <v-text-field v-model="passwordConfirm" required label="パスワード（確認用）"
        v-bind:type="showPasswordConfirm ? 'text' : 'password'" 
        @click:append="showPasswordConfirm = !showPasswordConfirm" prepend-icon="mdi-lock" v-bind:append-icon="showPasswordConfirm ? 'mdi-eye' : 'mdi-eye-off'"
      />
      <v-btn @click="createUser()">作成</v-btn>
    </v-card-text>
  </v-card>
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
    pw: '',
    passwordConfirm: '',
    showPassword: false,
    showPasswordConfirm: false,
  }),
  methods: {
    createUser: function () {
      if(this.pw == this.passwordConfirm) {
        createUserWithEmailAndPassword(auth, this.email, this.pw)
        .then((userCredential) => {
          const user = userCredential.user
          console.log(userCredential)
          console.log('create user success.' + user)
          alert('作成成功')
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log('errorCode: ' + errorCode)
          console.log('errorMessage: ' + errorMessage)
          alert('作成失敗')
        })
      }else{
        alert('パスワードに誤りがあります')
      }
    }
  }
}
</script>
