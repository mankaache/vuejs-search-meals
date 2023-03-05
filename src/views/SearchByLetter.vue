<template>
  <div class="flex gap-2 mt-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter in letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <meal-item :food="meals"></meal-item>
  </div>
</template>

<script setup>
import { computed, onMounted, watch} from "vue";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
import store from "../store";


const meals = computed(() => store.state.mealsByLetter);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const route = useRoute()
watch(route,()=>{
  store.dispatch('mealsByLetter',route.params.letter)
})

onMounted(() => {
  store.dispatch('mealsByLetter',route.params.letter)

});
</script>
