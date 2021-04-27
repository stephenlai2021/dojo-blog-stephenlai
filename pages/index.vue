<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
// import { projectFirestore } from '../firebase/config'

export default {
  // async asyncData() {
  //   const res = await projectFirestore
  //     .collection('dojo-blog-posts')
  //     .orderBy('createdAt', 'desc')
  //     .get()

  //   const posts = res.docs.map((doc) => {
  //     return { ...doc.data(), id: doc.id }
  //   })

  //   return { posts }
  // },

  setup() {
    const { posts, error, load } = getPosts()
    load()
    return { posts, error }
  },
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
</style>
