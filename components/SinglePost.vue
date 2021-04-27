<template>
  <div class="post">
    <nuxt-link :to="`/posts/${post.id}`">
      <!-- <nuxt-link :to="{ name: 'PostDetails', params: { id: post.id } }"> -->
      <h3>{{ post.title }}</h3>
    </nuxt-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag">
      <nuxt-link :to="`/tags/${tag}`"> #{{ tag }} </nuxt-link>
    </span>
  </div>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'

export default {
  props: ['post'],
  setup({ post }) {
    const snippet = computed(() => {
      return post.body.substring(0, 100) + '....'
    })

    return { snippet }
  },
}
</script>

<style scoped>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e7e7e7;
}
.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
.post h3::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
