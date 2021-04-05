<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <error-msg :errors="errors" />
          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="post.title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="post.description"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="post.body"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="newTag"
                  @keyup.enter="addTag"
                />
                <div class="tag-list">
                  <span class="tag-default tag-pill" v-for="(tag, index) in post.tagList" :key="tag">
                    <i class="ion-close-round" @click="removeTag(tag, index)"></i>
                    {{tag}}
                  </span>
                </div>
              </fieldset>
              <button @click="onSubmit"
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorMsg from '@/components/error-msg'
import { createArticle, updateArticle } from '@/api/article'

export default {
  // 在路由匹配组件渲染之前先执行中间件处理，有多个定义成数组
  middleware: 'authenticated',
  name: "EditorIndex",
  data() {
    return {
      post: {
        title: '',
        description: '',
        body: '',
        tagList: []
      },
      newTag: '',
      errors: []
    }
  },

  mounted() {
    // debugger
    console.log(this.$route.params);
    
    if (!this.$route.params) return
    this.post = { ...this.$route.params }
  },

  components: {
    ErrorMsg
  },

  methods: {
    addTag() {
      this.post.tagList && this.post.tagList.push(this.newTag)
      this.newTag = ''
    },
    removeTag(tag, idx) {
      this.post.tagList && this.post.tagList.splice(idx, 1)
    },
    async onSubmit() {
      try {
        const { data } = this.post.slug ? await updateArticle({
          slug: this.post.slug, // 更新时才有
          article: this.post
        }) : await createArticle({
          article: this.post
        })
        
        this.$router.push({
          name: 'article',
          params: {
            slug: data.article.slug
          }
        })
      } catch (err) {
        this.errors = err.response.data.errors || []
      }
    }
  }
};
</script>
<style lang="" scoped></style>
