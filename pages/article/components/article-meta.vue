<template>
  <div class="article-meta">
    <nuxt-link :to="{
      name: 'profile',
      params: {
        username: article.author.username
      }
    }">
      <img :src="article.author.image"/>
    </nuxt-link>
    <div class="info">
      <nuxt-link class="author" :to="{
        name: 'profile',
        params: {
          username: article.author.username
        }
      }">
        {{ article.author.username }}
      </nuxt-link>
      <span class="date">{{ article.createdAt | date("MMM DD, YYYY")}}</span>
    </div>

    <span v-show="!canModify">
      <button 
        class="btn btn-sm btn-outline-secondary"
        :class="{
          active: article.author.following
        }"
        @click="toggleFollow"
      >
        <i v-if="!article.author.following" class="ion-plus-round"></i>
        &nbsp; {{ article.author.following ? 'unFollow' : 'Follow' }} {{ article.author.username }} 
      </button>
      &nbsp;
      <button 
        class="btn btn-sm btn-outline-primary" 
        :class="{
          active: article.favorited
        }"
        :disabled="false"
        @click="onFavorite"
      >
        <i class="ion-heart"></i>
        &nbsp; {{article.favorited ? 'Unfavorite' : 'Favorite' }} Post <span class="counter">({{ article.favoritesCount }})</span>
      </button>
    </span>
    <span v-show="canModify">
      <nuxt-link 
        class="btn btn-sm btn-outline-secondary"
        @click="toggleFollow"
        :to="{
          name: 'editor',
          params: article
        }"
      >
        <i class="ion-edit"></i>
        &nbsp; Edit Article
      </nuxt-link>
      &nbsp;
      <button 
        class="btn btn-sm btn-outline-danger" 
        @click="onDelete"
      >
        <i class="ion-trash-a"></i>
        &nbsp; Delete Article
      </button>
    </span>
  </div>
</template>

<script>
import { followUser, unfollowUser } from '@/api/profile'
import { addFavorite, deleteFavorite, deleteArticle } from "@/api/article";

export default {
  name: 'ArticleMeta',
  data () {
    return {
      canModify: false
    }
  },
  props: {
    article: Object
  },
  mounted() {
    this.canModify = (this.article.author.username === this.$store.state.user.username)
  },

  methods: {
    async toggleFollow () {
      const { author } = this.article
      const { data } = author.following ? await unfollowUser(author.username) : await followUser(author.username)
      this.article.author.following = data.profile.following
    },
    async onFavorite () {
      const { article } = this
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
    },
    async onDelete() {
      await deleteArticle(this.article.slug)
      this.$router.push('/')
    }
  }
}

</script>
<style lang="" scoped>
</style>