<template>
    <header class="bg-white shadow h-16 flex justify-between items-center">
      <router-link :to="{name: 'home'}" class="font-bold text-gray-500 text-lg h-full flex items-center px-4">Home</router-link>
    
      <div class="flex gap-1 items-center">
        <router-link :to="{name:'byName'}" class="inline-block transition-colors  px-4 h-full hover:bg-purple-500 hover:text-white py-2">
          Search Meals
        </router-link>
        <router-link :to="{name:'byLetter'}" class="inline-block transition-colors px-4 h-full hover:bg-purple-500 hover:text-white py-2">
          Meals By Letter
        </router-link>
        <router-link :to="{name:'ingredients'}" class="inline-block transition-colors px-4 h-full hover:bg-purple-500 hover:text-white py-2">
          Meals By ingredients
        </router-link>
      </div>
    </header>
</template>