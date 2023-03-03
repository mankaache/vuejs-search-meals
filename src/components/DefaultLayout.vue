<template>
    <div class="bg-gray-100 h-full">
        <nav-bar></nav-bar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
 import NavBar from '../components/NavBar.vue'
</script>