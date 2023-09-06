<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/Goody.jpg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      
      <v-col class="mb-4">
        <h1 class="font-weight-bold mb-3">
          PosiMoments
        </h1>

        <p class="subheading font-weight-regular">
          1日の終わりに良かった出来事を振り返ると精神に
          <br>良い影響を与えるという研究結果があります。
        </p>
      </v-col>

      <v-col cols="12">
        <h3 class="font-weight-bold mb-3">小さなgoodを3つ探す</h3>
        <p>どんなに些細なことでも構いません。大切なのは「小さなgood」を積み重ねることです。</p>
        <ul class="mb-12">
          <li>・久しぶりに〇〇さんに会った</li>
          <li>・雨予報だったのに晴れた</li>
          <li>・すれ違った赤ちゃんが可愛くて癒された</li>
          <li>・推しの動画をじっくり見れた etc...</li>
        </ul>
        <p>「小さなgood」は誰にも見られることはありません。</p>
        <video autoplay muted loop width="90%" src="../assets/discription.mp4"></video>
      </v-col>

      <v-col cols="12">
        <h3 class="font-weight-bold mb-3">たった2STEP</h3>
        <ul>
          <ol>1.ユーザー登録（たった10秒）</ol>
          <ol>2.投稿する</ol>
        </ul>
      </v-col>
      
    </v-row>
    <blockquote>
      参考文献<br>
      <a href="https://core.ac.uk/download/pdf/228735283.pdf" target="_blank">
        振り返り日記が精神的健康に及ぼす効果の検討<br>https://core.ac.uk/download/pdf/228735283.pdf
      </a>
    </blockquote>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
      ],
    }),

  })
</script>

<style>
</style>