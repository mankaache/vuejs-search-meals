<template>
    <header class="bg-white shadow h-16 flex justify-between items-center">
      <router-link :to="{name: 'home'}" class="home ml-6 font-bold h-full flex items-center px-4 text-red-600 text-xl  md:text-3xl">Home</router-link>
      <div class="toggle"></div>
      <div class="links flex gap-1 items-center mr-4">
        <router-link :to="{name:'byName'}" class="lik inline-block transition-colors  px-4 md:h-full hover:bg-red-600  hover:text-white py-2">
          Search Meals
        </router-link>
        <router-link :to="{name:'byLetter'}" class="lik inline-block transition-colors px-4 md:h-full hover:bg-red-600  hover:text-white py-2">
          Meals By Letter
        </router-link>
        <router-link :to="{name:'ingredients'}" class="lik inline-block transition-colors px-4 md:h-full hover:bg-red-600  hover:text-white py-2">
          Meals By ingredients
        </router-link>
      </div>
    </header>
</template>

<style scoped>
@media screen and (max-width:650px) {
  .lik{
    font-size: 10px;
    font-weight: bold;
  }
  .home{
    font-size: 15px;
    
  }
}
</style>
