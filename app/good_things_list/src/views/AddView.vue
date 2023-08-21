<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1>新規登録</h1>
      </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="registerUser">
          <v-text-field v-model="name" prepend-icon="mdi-account" label="ユーザー名" required />
          <v-text-field v-model="email" prepend-icon="mdi-email" label="メールアドレス" required />
          <v-text-field v-model="password" v-bind:type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword" prepend-icon="mdi-lock" v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" label="パスワード" required />
          <v-text-field v-model="passwordConfirm" v-bind:type="showPasswordConfirm ? 'text' : 'password'" @click:append="showPasswordConfirm = !showPasswordConfirm" prepend-icon="mdi-lock" v-bind:append-icon="showPasswordConfirm ? 'mdi-eye' : 'mdi-eye-off'" label="パスワード（確認用）" required />
          <v-card-actions>
            <v-btn :disabled="!passwordsMatch" type="submit" color="primary">登録</v-btn>
            <v-progress-circular v-if="loading" indeterminate color="primary"></v-progress-circular>
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
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      showPassword: false,
      showPasswordConfirm: false,
      loading: false
    };
  },
  computed: {
    passwordsMatch() {
      return this.password === this.passwordConfirm;
    }
  },
  methods: {
    async registerUser() {
      if (!this.passwordsMatch) {
        // パスワードが一致しない場合の処理
        return;
      }

      try {
        this.loading = true;
        await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
        // ユーザー登録成功時の処理
      } catch (error) {
        // エラーが発生した場合の処理
        this.loading = true;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

