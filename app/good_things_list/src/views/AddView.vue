<template>
  <div>
    <h2>新規ユーザー登録</h2>
    <form @submit.prevent="registerUser">
      <label for="name">名前</label>
      <input type="text" v-model="name" required>
      <br>
      <label for="email">Eメール</label>
      <input type="email" v-model="email" required>
      <br>
      <label for="password">パスワード</label>
      <input type="password" v-model="password" required>
      <br>
      <label for="passwordConfirm">パスワード（確認）</label>
      <input type="password" v-model="passwordConfirm" required>
      <br>
      <button type="submit">登録</button>
    </form>
  </div>
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
      passwordConfirm: ''
    };
  },
  methods: {
    async registerUser() {
      if (this.password !== this.passwordConfirm) {
        alert('パスワードが一致しません');
        return;
      }

      try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
        // ユーザーの名前を更新
        const user = userCredential.user;
        await user.updateProfile({
          displayName: this.name
        });
        
        alert('ユーザー登録が成功しました');
        // 登録後の処理をここに追加
      } catch (error) {
        alert('ユーザー登録に失敗しました');
        console.error(error);
      }
    }
  }
};
</script>
