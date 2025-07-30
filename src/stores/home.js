import { ref } from 'vue'
import { defineStore } from 'pinia'
import { findNewAPI } from '@/apis/home'
import { findHotAPI } from '@/apis/home'

export const useNewStore = defineStore('new', () => {

  const newList = ref([])

  const getNewList = async () => {

    const res = await findNewAPI()

    newList.value = res.result
  }

  return {
    newList,
    getNewList,
   }
})

export const useHotStore = defineStore('hot', () => {

  const hotList = ref([])

  const getHotList = async () => {

    const res = await findHotAPI()

    hotList.value = res.result
    // console.log(res)

  }

  return {
    hotList,
    getHotList,
  }
})
