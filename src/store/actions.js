import axiosClient from '../axiosClient.js'

export function searchMeals ({commit},keyword){
    axiosClient.get(`search.php?s=${keyword}`)
    .then( ({data})=>{
        // debugger
        commit('setSearchMeals', data.meals)
    })

}
export function mealsByLetter ({commit},keyLetter){
    axiosClient.get(`search.php?f=${keyLetter}`)
    .then( ({data})=>{
        // debugger
        commit('setMealsByLetter', data.meals)
    })

}
export function  mealsByIngredients ({commit},keyIngredient){
    axiosClient.get(`filter.php?i=${keyIngredient}`)
    .then( ({data})=>{
        // debugger
        commit('setMealsByIngredients', data.meals)
    })

}