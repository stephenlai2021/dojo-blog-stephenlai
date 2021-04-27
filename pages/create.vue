<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label for="title">Title:</label>
      <input id="title" type="text" required v-model="title">
      <label for="body">Content:</label>
      <textarea required id="body" v-model="body"></textarea>
      <label for="tag">Tags (hit enter to add a tag)</label>
      <input 
        id="tag" 
        type="text" 
        v-model="tag"
        @keydown.enter.prevent="handleKeydown"
      >
      <div v-for="tag in tags" :key="tag" class="pill">
        #{{ tag }}
      </div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref, useRouter } from '@nuxtjs/composition-api'
import { projectFirestore, timestamp } from '~/plugins/firebase-config'

export default {
  setup() {
    const title = ref('')
    const body = ref('')
    const tag = ref('')
    const tags = ref([])

    const router = useRouter()

    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        createdAt: timestamp()
      }

      const res = await projectFirestore.collection('dojo-blog-posts').add(post)
      console.log(res)

      router.push('/')
    }

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, '') // removes all whitespace
        tags.value.push(tag.value)
      }
      tag.value = ''
    }

    return { title, body, tag, tags, handleKeydown, handleSubmit }
  }  
}
</script>

<style scoped>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align-last: left;
}
input, textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: var(--main-color);
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: var(--main-color);
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>