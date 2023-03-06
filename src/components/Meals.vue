<template>
    <div v-if="!item.length" class="mt-10 flex justify-center text-gray-600">
        There are no meals
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <meal-item :food="item"></meal-item>
    </div>
</template>

<script setup>
import MealItem from './MealItem.vue';
    const props = defineProps({
        item:Object
    })
</script>