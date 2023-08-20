<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h2>新規ユーザー登録</h2>
      </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="registerUser">
          <v-text-field v-model="name" label="ユーザー名" required></v-text-field>
          <v-text-field v-model="email" label="メールアドレス" required></v-text-field>
          <v-text-field v-model="password" label="パスワード" type="password" required></v-text-field>
          <span v-if="passwordsMatch" style="color: green;">パスワードが一致しています</span>
          <span v-else style="color: red;">パスワードが一致していません</span>
          <v-text-field v-model="passwordConfirm" label="パスワード（確認用）" type="password" required></v-text-field>
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

