<template>
    <meals :item="meals"></meals>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

import store from "../store";

const route = useRoute();
const meals = computed(()=> store.state.mealsByIngredients)

onMounted(() => {
  store.dispatch('mealsByIngredients', route.params.ingredient)
  console.log(store.dispatch('mealsByIngredients',route.params.ingredient)
)
});
</script>
