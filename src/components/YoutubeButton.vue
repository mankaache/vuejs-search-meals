<template>

        <a :href="link" target="_blank" class="px-3 py-2 rounded border-2 bg-orange-400 mr-2 hover:bg-orange-600  border-orange-500 text-white transition-colors">
        <slot></slot>
    </a>

    
</template>

<script setup>
 const props = defineProps({
    link:String
 })
</script>