<template>
  <h1 class="text-orange-600 font-bold px-8 pt-4 text-5xl md:text-xl">Random Meals</h1>
  <Meals :item="meals"/>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import Meals from '../components/Meals.vue';

  const meals = ref([])

  onMounted(async () =>{
    for(let i = 0; i < 10; i++){
      axiosClient.get('random.php')
      .then(({data})=> meals.value.push(data.meals[0]))
    }
  })
</script>

<style>

</style>
