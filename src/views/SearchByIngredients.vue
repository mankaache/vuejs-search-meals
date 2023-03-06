<template>
  <div class="p-8">
    <h2 class="text-xl font-bold mb-3">ingredients</h2>
    <router-link
      :to="{
        name: 'byIngredients',
        params: { ingredients: ingredient.idIngredient },
      }"
      v-for="ingredient in ingredients"
      :key="ingredient.idIngredient"
      class="block cursor-pointer bg-white rounded p-3 mb-3 shadow"
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
import store from "../store";

const route = useRoute();

const ingredients = ref([]);

onMounted(() => {
  // store.dispatch('mealsByIngredients',route.params.ingredients)
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
    console.log(data.meals);
  });
});
</script>
