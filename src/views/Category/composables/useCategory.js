import { getCategoryAPI } from '@/apis/category'
import {ref, onMounted} from 'vue'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategory() {
  const categoryData = ref({})
  const route = useRoute()

  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
    // console.log(res, '----')
  }
  onMounted(() => getCategory())
  
  onBeforeRouteUpdate((to) => {
    // console.log('route change!', to)
    getCategory(to.params.id)
  })

  return {
    categoryData
  }
}
