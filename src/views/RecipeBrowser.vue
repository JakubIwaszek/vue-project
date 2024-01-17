<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import axios from 'axios';

import type { RecipeResults } from '@/types/recipeResults'


const recipes = ref<{ strMeal: string; strMealThumb: string }[]>([]);

const fetchRecipes = async () => {
    const { data: dataFirst } = await axios<RecipeResults>('https://themealdb.com/api/json/v1/1/search.php?f=a', {});
    const { data: dataSecond } = await axios<RecipeResults>('https://themealdb.com/api/json/v1/1/search.php?f=b', {});
		const allMeals = [...dataFirst.meals, ...dataSecond.meals];

    recipes.value = allMeals;
    console.log(recipes.value);
}

onMounted(() => {
  document.title = 'Browse recipes';
});

fetchRecipes();

</script>

<template>
    <main class="bg-rose-200">
        <div class="grid grid-cols-3 gap-4 p-4">
        <div v-for="singleRecipe in recipes" :key="recipes.strMeal" class="relative hover:scale-105">
            <img :src="singleRecipe.strMealThumb" alt="Image" class="w-full h-48 object-cover mb-2 rounded" />
            <div class="absolute bottom-2 left-0 right-0 bg-gray-800 bg-opacity-50 text-white p-2">
            	{{ singleRecipe.strMeal }}
            </div>
        </div>
        </div>
    </main>
</template>
