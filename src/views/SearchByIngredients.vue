<template>
     <div v-if="!meals.length" class="flex justify-center text-gray-600">
        There are no meals
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <meal-item :food="meals"></meal-item>
    </div>
 
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import store from "../store";

const route = useRoute();
const meals = computed(()=> store.state.mealsByIngredients)

onMounted(() => {
  store.dispatch('mealsByIngredients',route.params.ingredients)
});
</script>
