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
    <div v-for="meal of meals" :key="idMeal" class="mt-5 bg-white shadow rounded-xl">
     <router-link :to="{name:'mealDetails', params:{id: meal.idMeal}}">
      <img
        :src="meal.strMealThumb"
        alt=""
        class="rounded-t-xl md:h-48 md:w-full object-cover"
      />
     </router-link>
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
          consequuntur libero voluptas molestiae nostrum maiores.
        </p>
      </div>
      <div class="p-3 flex items-center justify-between">
        <a href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border-2 bg-red-500 mr-2 hover:bg-red-600 border-red-700 text-white transition-colors">Youtube</a>
  
      </div>
    </div>
    <!-- <p>{{ meals }}</p> -->
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
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
