<template>
  <div>
      <h1>Hi these are the blog posts</h1>
      <!-- <div>{{blogPosts}}</div> -->
      <div v-for="posts in blogPosts" :key="key">
          <!-- <p>{{posts}}</p> -->
          <nuxt-link :to="`${posts.slug}`"><i>{{posts.title}}</i></nuxt-link>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
  },
};
</script>

<style>

</style>