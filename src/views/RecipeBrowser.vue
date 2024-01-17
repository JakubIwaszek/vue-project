<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';
import router from "@/router";

import type { RecipeResults } from '@/types/recipeResults';
import type { Recipe } from '@/types/recipe';
import { useLocalStorage } from '@vueuse/core';


const recipesDisplay = ref<{ strMeal: string; strMealThumb: string }[]>([]);
var recipes = <Recipe>{};
var selectedRecipe = useLocalStorage<Recipe>('recipe', {});

const fetchRecipes = async () => {
  const { data: dataFirst } = await axios<RecipeResults>('https://themealdb.com/api/json/v1/1/search.php?f=a', {});
  const { data: dataSecond } = await axios<RecipeResults>('https://themealdb.com/api/json/v1/1/search.php?f=b', {});
	const allMeals = [...dataFirst.meals, ...dataSecond.meals];

  recipesDisplay.value = allMeals;
	recipes = allMeals;
};

const setRecipe = (recipe: Recipe) => {
	selectedRecipe.value = recipe;
	router.push({
 		name: 'Recipe details'
	});
};

onMounted(() => {
  document.title = 'Browse recipes';
});

fetchRecipes();

</script>

<template>
    <main class="bg-rose-200">
        <div class="grid grid-cols-3 gap-4 p-4">
					<div v-for="singleRecipe in recipesDisplay" :key="recipesDisplay.strMeal" class="relative cursor-pointer hover:scale-105" @click="setRecipe(singleRecipe)">
							<img :src="singleRecipe.strMealThumb" alt="Image" class="w-full h-48 object-cover mb-2 rounded" />
							<div class="absolute bottom-2 left-0 right-0 bg-gray-800 bg-opacity-50 text-white p-2">
								{{ singleRecipe.strMeal }}
							</div>
					</div>
        </div>
		</main>
</template>
