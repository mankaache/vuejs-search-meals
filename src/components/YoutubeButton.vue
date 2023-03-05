<template>

        <a :href="link" target="_blank" class="px-3 py-2 rounded border-2 bg-red-500 mr-2 hover:bg-red-600 border-red-700 text-white transition-colors">
        <slot></slot>
    </a>

    
</template>

<script setup>
 const props = defineProps({
    link:String
 })
</script>