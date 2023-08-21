<template>
    <div>
        <h2>投稿一覧</h2>
        <ul>
            <li>あとで実装</li>
            <li v-for="(post, index) in posts" :key="index">{{ post }}</li>
        </ul>

        <h2>{{ msg }}</h2>
        <textarea v-model="postText" rows="4" cols="50"></textarea>
        <button @click="submitPost">投稿する</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
  

const PostComponent = Vue.extend({
data() {
    return {
    postText: '',
    posts: [] as string[],
    };
},
props: {
    msg: String,
},
methods: {
    async submitPost() {
    // ユーザーの投稿を非同期でサーバーに送信
    // ここでAPIリクエストを実行し、投稿をサーバーに送信する処理を行う
    // 例：await axios.post('/api/posts', { text: this.postText });

    // ローカルの投稿一覧に追加
    this.posts.push(this.postText);

    // フォームをリセット
    this.postText = '';
    }
}
});
export default PostComponent;
</script>