<template>

        <a :href="link" target="_blank" class="px-3 py-2 rounded border-2 bg-red-600 mr-2 hover:bg-red-800  border-red-600 text-white transition-colors">
        <slot></slot>
    </a>

    
</template>

<script setup>
 const props = defineProps({
    link:String
 })
</script>