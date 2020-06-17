<template>
  <div>
    <h1>Hi these are the blog posts</h1>
    <!-- <div>{{blogPosts}}</div> -->
    <div v-for="posts in blogPosts" :key="posts">
      <!-- <p>{{posts}}</p> -->
      <nuxt-link :to="`${posts.slug}`">
        <i>{{posts.title}}</i>
      </nuxt-link>
    </div>
{{citiesPosts}}

    <div v-for="city in citiesPosts" :key="city">
        <h1>{{city.cityName}}</h1>
        <img :src="city.cityIcon" alt="">
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    },
    citiesPosts() {
      return this.$store.state.cities
    }
  }
}
</script>

<style>
body {
    background-color: darkslategray;
    color: white;
}
</style>