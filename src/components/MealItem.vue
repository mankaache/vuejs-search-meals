<template>
     <div v-for="meal of food" :key="idMeal" class="mt-5 bg-white shadow rounded-xl">
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
        <youtube-button :link="meal.strYoutube">Youtube</youtube-button>
  
      </div>
    </div>
</template>

<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";
const props = defineProps({
    food: Object
})

</script>