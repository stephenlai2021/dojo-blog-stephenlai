<template>
  <header>
    <h1>The Dojo Blog</h1>
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/create">Create Post</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
header h1 {
  color: #dfdfdf;
  font-size: 48px;
}
header a {
  color: #bbb;
  text-decoration: none;
  margin-left: 20px;
}
header a.nuxt-link-exact-active {
  color: #444;
  font-weight: bold;
}
</style>