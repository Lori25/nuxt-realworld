<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="user.image" class="user-img" />
            <h4>{{ user.username }}</h4>
            <p>{{ user.bio }}</p>
            <button class="btn btn-sm btn-outline-secondary action-btn" v-show="!isUser" @click="toggleFollow">
              <i class="ion-plus-round" v-show="!user.following"></i>
              &nbsp; {{ user.following ? 'Unfollow' : 'Follow' }} {{ user.username }}
            </button>
            <nuxt-link class="btn btn-sm btn-outline-secondary action-btn" :to="{
              name: 'settings',
              params: { ...user }
            }" v-show="isUser">
              <i class="ion-gear-a"></i>
              &nbsp; Edit Profile Settings
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link 
                  :class="{ active: tab==='mine' }"
                  class="nav-link" 
                  :to="{
                    path: './'+user.username,
                    query: { tab: 'mine' }
                  }"
                  exact
                >My Articles
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link 
                  class="nav-link" 
                  :class="{ active: tab==='favo' }"
                  :to="{
                    path: './'+user.username,
                    query: { tab: 'favo' }
                  }"
                  exact
                >Favorited Articles
                </nuxt-link>
              </li>
            </ul>
          </div>

          <article-preview :articles="articles" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlePreview from '@/components/article-preview'
import { getUser, followUser, unfollowUser } from '@/api/profile'
import { getArticles } from '@/api/article'

export default {
  middleware: 'authenticated',
  name: "profile",
  data() {
    return {

    }
  },
  components: { ArticlePreview },
  async asyncData({ params, store, query }) {
    const tab = query.tab || 'mine'
    const { data } = await getUser(params.username)
    const { data:result } = /* tab==='mine' ? await getArticles({
      author: data.profile.username
    }) : */ await getArticles({
      [tab==='mine'?'author':'favorited']: data.profile.username
    })

    return {
      tab,
      user: data.profile,
      isUser: data.profile.username === store.state.user.username,
      articles: result.articles
    }
  },

  methods: {
    async toggleFollow () {
      const user = this.user
      const { data } = user.following ? await unfollowUser(user.username) : await followUser(user.username)
      this.user.following = data.profile.following
    },
  },
  watchQuery: ["tab"]
}
</script>
<style lang="" scoped></style>
