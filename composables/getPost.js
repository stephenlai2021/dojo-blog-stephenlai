import { ref } from '@nuxtjs/composition-api'
// import { projectFirestore } from '../plugins/firebase-config'
import { projectFirestore } from '../firebase/config'

const getPost = id => {
  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const res = await projectFirestore.collection('dojo-blog-posts').doc(id).get()

      if (!res.exists) {
        throw Error('That post doest not exist')
      }

      post.value = { ...res.data(), id: res.id }
      console.log(post.value)
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return { post, error, load }
}

export default getPost
