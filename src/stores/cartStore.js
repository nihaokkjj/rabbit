import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from './user'
import { insertCartAPI, findNewCartListAPI } from '@/apis/cart'

export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)

  const cartList = ref([])

  const addCart = async (goods) => {

    const { skuId, count } = goods
    
    if (isLogin) {
      await insertCartAPI({ skuId, count })
      const res = await findNewCartListAPI()
      cartList.value = res.result

    } else {
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if (item) {
        item.count++
      } else {
        cartList.value.push(goods)
      }
    }
  }

  const delCart = (skuId) => {
    const id = cartList.value.findIndex((item) => skuId === item.id )

    cartList.value.splice(id, 1)
  }
  return {
    cartList,
    addCart,
    delCart,
  }
}, {
  persist: true,
})


