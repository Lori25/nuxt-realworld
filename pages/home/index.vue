<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="$store.state.user">
                <nuxt-link
                  class="nav-link"
                  :class="{ active: tab === 'your_feed' && !tag }"
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'your_feed',
                    },
                  }"
                  exact
                  >Your Feed</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{ active: tab === 'global_feed' && !tag }"
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'global_feed',
                    },
                  }"
                  exact
                  >Global Feed</nuxt-link
                >
              </li>
              <li class="nav-item" v-if="tag">
                <a class="nav-link active">#{{ tag }}</a>
              </li>
            </ul>
          </div>
          <article-preview :articles="articles" />
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <template v-for="item in tags">
                <nuxt-link
                  :to="{
                    name: 'home',
                    query: {
                      tag: item,
                    },
                  }"
                  class="tag-pill tag-default"
                  v-if="item.replace(/\u200C/g, '')"
                  :key="item"
                  >{{ item }}</nuxt-link
                >
              </template>
            </div>
          </div>
        </div>
      </div>

      <!-- nav -->
      <nav>
        <ul class="pagination">
          <li
            class="page-item"
            :class="{ active: item === page }"
            v-for="item in totalPage"
            :key="item"
          >
            <nuxt-link
              class="page-link"
              :to="{
                name: 'home',
                query: {
                  page: item,
                  tag: $route.query.tag,
                },
              }"
              >{{ item }}</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { getArticles, getFeedArticles, addFavorite, deleteFavorite } from "@/api/article";
import { getTags } from "@/api/tag";
import ArticlePreview from '@/components/article-preview'

export default {
  name: "HomeIndex",
  data() {
    return {};
  },

  async asyncData({ query, store }) {
    const page = Number.parseInt(query.page) || 1;
    const limit = Number.parseInt(query.limit) || 10;
    const tab = query.tab || "global_feed";
    const loadArticles =
      store.state.user && tab === "your_feed" ? getFeedArticles : getArticles;

    const [{ data }, { data: tagData }] = await Promise.all([
      loadArticles({
        limit,
        offset: (page - 1) * limit,
        tag: query.tag,
      }),
      getTags(),
    ]);

    data.articles.forEach(article => article.favoriteDisabled = false)

    return {
      articles: data.articles,
      articlesCount: data.articlesCount,
      limit,
      page,
      tags: tagData.tags,
      tag: query.tag,
      tab,
    };
  },

  components: {ArticlePreview},

  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },
  },

  mounted() {},

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
  watchQuery: ["page", "tag", "tab"],
};
</script>
<style lang="" scoped></style>
