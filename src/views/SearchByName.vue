<template>
  <div class="pb-4 p-8">
    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals"
      @change="searchMeals"
    />
  </div>
  <div class="grid grid-col-1 md:grid-cols-3 gap-3 p-8">
   
    <meal-item :food="meals"></meal-item>
    <!-- <p>{{ meals }}</p> -->
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import MealItem from "../components/MealItem.vue";

import store from "../store";
import {useRoute} from 'vue-router'

const keyword = ref("");
const meals = computed(() => store.state.searchMeals.data);

const route = useRoute()
function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(()=>{
  keyword.value = route.params.name
  if(keyword.value){
    searchMeals()
  }
})
</script>
