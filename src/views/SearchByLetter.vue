<template>
  <div class="flex justify-center gap-2 mt-10">
    <router-link
      class="text-2xl font-semibold"
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter in letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
 <Meals :item="meals"/>
</template>

<script setup>
import { computed, onMounted, watch} from "vue";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
import store from "../store";


const meals = computed(() => store.state.mealsByLetter);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const route = useRoute()
watch(route,()=>{
  store.dispatch('mealsByLetter',route.params.letter)
})

onMounted(() => {
  if(route.params.letter){
    store.dispatch('mealsByLetter',route.params.letter)
  }else{
    store.commit('setMealsByLetter',[])
  }
  

});
</script>
