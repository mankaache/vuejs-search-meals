<template>
  <h1 class="text-red-600  font-bold px-8 pt-4 md:text-4xl md:mt-6 text-2xl">Random Meals</h1>
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
