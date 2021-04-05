<template>
  <div>
    <div
      class="article-preview"
      v-for="article in articles"
      :key="article.slug"
    >
      <div class="article-meta">
        <nuxt-link :to="'/profile/' + article.author.username"
          ><img :src="article.author.image"
        /></nuxt-link>
        <div class="info">
          <nuxt-link
            class="author"
            :to="'/profile/' + article.author.username"
            >{{ article.author.username }}</nuxt-link
          >
          <span class="date">{{
            article.createdAt | date("MMM DD, YYYY")
          }}</span>
        </div>
        <button
          class="btn btn-outline-primary btn-sm pull-xs-right"
          :class="{ active: article.favorited }"
          @click="onFavorite(article)"
          :disabled="article.favoriteDisabled"
        >
          <i class="ion-heart"></i> {{ article.favoritesCount }}
        </button>
      </div>
      <nuxt-link
        :to="{
          name: 'article',
          params: { slug: article.slug },
        }"
        class="preview-link"
      >
        <h1>{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <span>Read more...</span>
        <ul class="tag-list">
          <li
            class="tag-pill tag-default tag-outline"
            v-for="tag in article.tagList"
            :key="tag"
          >
            {{ tag }}
          </li>
        </ul>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { addFavorite, deleteFavorite } from "@/api/article";
export default {
  name: "ArticlePreview",
  props: {
    articles: Array,
  },
  methods: {
    async onFavorite (article) {
      article.favoriteDisabled = true
      if (article.favorited) {
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount += -1
      } else {
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.favoriteDisabled = false
    }
  },
};
</script>
