<template>
    <div class="p-8">
      <h2 class="text-xl font-bold mb-3">ingredients</h2>
      <input
      v-model="keyword"
      type="text"
      class="rounded border-2 border-gray-200 w-full mb-5"
      placeholder="Search for Ingredients"
      
    />
      <router-link
        v-for="ingredient in computedIngredients"
        :key="ingredient.idIngredient"
        class="block cursor-pointer bg-white rounded p-3 mb-3 shadow" 
        :to="{
          name: 'byIngredients',
          params: {ingredient: ingredient.strIngredient},
        }"
      >
        <h3 class="text-2xl font-bold mb-3">{{ ingredient.strIngredient }}</h3>
        <p>{{ ingredient.strDescription }}</p>
      </router-link>
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted, ref } from "vue";
  import { useRoute } from "vue-router";
  import axiosClient from "../axiosClient";
  
  
  const route = useRoute();
  const keyword = ref("")
  const ingredients = ref([]);

  const computedIngredients = computed(()=>{
    if(!computedIngredients) return ingredients
    return ingredients.value.filter(i=>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))

    
  })
  
  onMounted(() => {
    axiosClient.get("list.php?i=list").then(({ data }) => {
      ingredients.value = data.meals;
      console.log(data.meals);
    });
  });
  </script>
  