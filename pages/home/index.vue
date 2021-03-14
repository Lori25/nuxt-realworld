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

          <div
            class="article-preview"
            v-for="article in articles"
            :key="article.slug"
          >
            <div class="article-meta">
              <nuxt-link :to="'/profile/' + article.author.username"
                ><img src="http://i.imgur.com/Qr71crq.jpg"
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
import { getArticles, getFeedArticles } from "@/api/article";
import { getTags } from "@/api/tag";

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

    // const [{ data }, { data: tagData }] = await Promise.all([
    //   loadArticles({
    //     limit,
    //     offset: (page - 1) * limit,
    //     tag: query.tag,
    //   }),
    //   getTags(),
    // ]);
    const data = {
      articles: [],
      articlesCount: 0
    }
    const tagData = {
      tags: []
    }

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

  components: {},

  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },
  },

  mounted() {},

  methods: {},
  watchQuery: ["page", "tag", "tab"],
};
</script>
<style lang="" scoped></style>
