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
  <Meals :item="meals"/>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Meals from "../components/Meals.vue";
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
