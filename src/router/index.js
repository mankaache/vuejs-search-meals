import { createRouter, createWebHistory } from "vue-router";
import GuestLayout from '../components/GuestLayout.vue'
import Home from '../views/Home.vue'
import SearchByName from '../views/SearchByName.vue'
import SearchByLetter from '../views/SearchByLetter.vue'
import SearchByIngredients from '../views/SearchByIngredients.vue'
import MealDetails from '../views/MealDetails.vue'



const routes = [
    

        {
                path:'/',
                name:'home',
                component:Home
            },
            {
                path:'/by-name/:name?',
                name:'byName',
                component:SearchByName
            },
            {
                path:'/ingredients/:ingredients?',
                name:'byIngredients',
                component:SearchByIngredients
            },
            {
                path:'/letter/:letter?',
                name:'byLetter',
                component: SearchByLetter
            },
            {
                path:'/auth',
                name:'guest',
                component: GuestLayout
            },
            {
                path:'/meal/:id',
                name:'mealDetails',
                component: MealDetails
            },

   
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router