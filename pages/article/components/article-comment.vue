<template>
  <div>
    <form class="card comment-form">
      <div class="card-block">
        <textarea
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
          v-model="commentContent"
        ></textarea>
      </div>
      <div class="card-footer">
        <img :src="userInfo.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary" @click="addComment">
          Post Comment
        </button>
      </div>
    </form>

    <div class="card" v-for="comment in comments" :key="comment.id">
      <div class="card-block">
        <p class="card-text">
          {{ comment.body }}
        </p>
      </div>
      <div class="card-footer">
        <nuxt-link class="comment-author" :to="{ 
          name: 'profile',
          params: {
            username: comment.author.username
          }
        }">
          <img :src="comment.author.image" class="comment-author-img">
           &nbsp;{{ comment.author.username }}
        </nuxt-link>
        <span class="date-posted">{{ comment.createdAt | date('MMM DD') }}</span>
        <span class="mod-options" v-if="userInfo.username === comment.author.username">
          <!-- <i class="ion-edit"></i> -->
          <i class="ion-trash-a" @click="deleteComment(comment)"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { addComment, getComments, deleteComment } from '@/api/comment'

export default {
  name: "ArticleComment",
  data() {
    return {
      comments: [],
      commentContent: ''
    };
  },
  props: {
    article: Object
  },
  components: {},

  computed: {
    userInfo () {
      return this.$store.state.user
    }
  },

  mounted() {
    this.getComments()
  },

  methods: {
    async getComments () {
      const { data } = await getComments(this.article.slug)
      this.comments = data.comments || []
    },
    async deleteComment(comment, idx) {
      await deleteComment(this.article.slug, comment.id)
      this.comments.splice(idx, 1)
    },
    async addComment() {
      const { data } = await addComment({
        slug: this.article.slug,
        comment: {
          body: this.commentContent
        }
      })
      this.comments.push(data.comment)
    }
  },
};
</script>
<style lang="" scoped></style>
