<template>
  <div>
    <PostDetails :id="$route.params.postId" />
    <!-- <PostDetails :post="post" /> -->
  </div>
</template>

<script>
export default {
  // async asyncData({ params }) {
  //   const res = await fetch(`http://localhost:8080/posts/${params.postId}`)
  //   const post = await res.json()
  //   return { post }
  // }
}
</script>

<style scoped>

</style>