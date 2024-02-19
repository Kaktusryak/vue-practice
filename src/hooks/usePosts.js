import axios from 'axios'
import {onMounted, ref} from 'vue'

export default function usePosts(limit) {
    const posts = ref([])
    const totalPages = ref(0)
    const isPostLoading = ref(true)
    const isWorking = ref(false)

    const fetching = () => {
        try {
            // this.isPostLoading = true
            setTimeout(async () => {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: 1,
                        _limit: limit
                    }
                })
                posts.value = response.data
                isPostLoading.value = false
                totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
                isWorking.value = true
                
            }, 300)


            //console.log(response)

        } catch (error) {
            alert('Error')
        } finally { }

    }
    onMounted(fetching)
    return{
        posts,totalPages,isPostLoading,isWorking
    }
   
}