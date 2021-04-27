import { ref } from '@nuxtjs/composition-api'
import { firestore } from '../plugins/firebase-config'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const res = await firestore.collection('dojo-blog-posts').orderBy('createdAt', 'desc').get()
      // console.log(res.docs)
      posts.value = res.docs.map(doc => {
        // console.log(doc.data())
        return { ...doc.data(), id: doc.id }
      })

    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return { posts, error, load }
}

export default getPosts
