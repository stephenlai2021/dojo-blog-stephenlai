<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <div class="btn-wrapper">
        <button @click="handleDelete" class="delete">delete post</button>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { useRouter } from '~/node_modules/@nuxtjs/composition-api/dist'
import { firestore } from '~/plugins/firebase-config'
import getPost from '../composables/getPost'

export default {
  props: ['id'],
  setup({ id }) {
    const { post, error, load } = getPost(id)
    const router = useRouter()

    load()

    const handleDelete = async () => {
      await firestore.collection('dojo-blog-posts').doc(id).delete()

      router.push('/')
    }

    return { post, error, handleDelete }
  },
}
</script>

<style scoped>
.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 800px;
  margin: 10px auto 30px auto;
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
button.delete {
  margin: 10px auto;
  background: var(--primary);
}
</style>
