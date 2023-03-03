<template>
  <div class="flex p-8 justify-center flex-col">
  


  <div class="flex gap-2 mt-2">
    <router-link :to="{name:'byLetter', params:{letter}}" v-for="letter in letters" :key="letter">
        {{letter}}
    </router-link>
  </div>

  <!-- <div>{{ ingredients }}</div> -->
  </div>
</template>

<script setup>
import { computed,onMounted, ref } from "vue";
import axiosClient from '../axiosClient.js'
import store from "../store";

const meals = computed(() => store.state.meals);
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
const ingredients = ref([])


onMounted( async ()=>{
   const response = await axiosClient.get('list.php?i=list')
    console.log(response.data)
    ingredients.value = response.data
})


</script>

<style></style>
