<script setup>
import HomePanel from './HomePanel.vue'
import { useNewStore } from '@/stores/home'
import { onMounted } from 'vue'

const NewStore = useNewStore()

onMounted(
  () => NewStore.getNewList(),
)

</script>

<template>
  <HomePanel title="新鲜好物" subTitle="新鲜好物, 好多商品">
    <ul class="goods-list">
    <li v-for="item in NewStore.newList" :key="item.id">
      <RouterLink :to="`/detail/${item.id}`">
        <img  v-img-lazy="item.picture" alt="" />
        <p class="name">{{ item.name }}</p>
        <p class="price">&yen;{{ item.price }}</p>
      </RouterLink>
    </li>
  </ul>
  </HomePanel>


</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
