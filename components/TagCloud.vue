<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag">
      <nuxt-link :to="`/tags/${tag}`">
        #{{ tag }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import useTags from '../composables/useTags'

export default {
  props: ['posts'],
  setup({ posts }) {
    const {tags} = useTags(posts)
    return { tags }
  }
  
}
</script>

<style scoped>
.tag-cloud {
  padding: 10px;
}
.tag-cloud h3 {
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}
.tag-cloud div {
  display: inline-block;
  padding: 10px;
}
.tag-cloud a {
  color: #ccc;
  text-decoration: none;
}
.tag-cloud a.nuxt-link-active {
  color: var(--main-color);
  font-weight: bold;
}
</style>