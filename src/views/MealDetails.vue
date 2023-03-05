<template>
    <div class="w-[800px] mx-auto p-8">
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" alt="">
        
        <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
            </div>
            <div>
                <strong class="font-bold"> Area:</strong>{{ meal.strArea }}
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
                <ul>
                    <template v-for="(elt,idx) of new Array(20)">
                        <li v-if="meal[`strIngredient${idx + 1}`]">
                           {{ idx }}. {{ meal[`strIngredient${idx + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-3">Measures</h2>
                <ul>
                    <template v-for="(elt,idx) of new Array(20)">
                        <li v-if="meal[`strMeasure${idx + 1}`]">
                           {{idx}}. {{ meal[`strMeasure${idx + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </div>


</template>

<script setup>
    import {computed, onMounted, ref} from 'vue'
    import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
    
    const route = useRoute()
    const meal = ref({})

    onMounted(()=>{
        axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({data})=>{
            debugger;
            meal.value = data.meals[0]
            console.log(data.meals[0])
        })
    })
</script>