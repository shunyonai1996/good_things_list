<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1>Profile</h1>
      </v-card-title>

      <v-card-text>
        <v-form>
          <v-text-field v-model="name" prepend-icon="mdi-account" label="ユーザー名" :readonly="isEditing" />
          <v-text-field v-model="email" prepend-icon="mdi-email" label="メールアドレス" :readonly="isEditing" />
          <v-btn v-if="isEditing" @click="isEditing = false" color="primary">編集</v-btn>
          <v-btn v-else @click="saveProfile" color="success">保存</v-btn>
          <v-progress-circular v-if="loading" indeterminate color="primary"></v-progress-circular>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data() {
    return {
      name: '',
      email: '',
      isEditing: true,
      loading: false
    };
  },
  mounted() {
    // ユーザーのプロフィール情報を取得するロジック（Firebaseからデータを取得するなど）が必要です
    // 以下は仮のデータをセットしている例です
    this.name = 'ユーザー名';
    this.email = 'user@example.com';
  },
  methods: {
    async saveProfile() {
      try {
        this.loading = false; // 保存処理が始まったことを示すためにローディングを開始

        // プロフィール情報をFirebaseに保存するロジックが必要です

        // 保存が成功した場合
        this.isEditing = false; // 編集モードを終了
        // 成功メッセージを表示したり適切な処理を行ったりする

      } catch (error) {
        // エラーが発生した場合の処理
        console.error('Profile update error:', error.message);
        // エラーメッセージを表示したり、適切なエラーハンドリングを行ったりする

      } finally {
        this.loading = false; // 保存処理が終了したことを示すためにローディングを終了
      }
    }
  }
};
</script>

