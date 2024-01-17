<script setup lang="ts">
import type { Recipe } from '@/types/recipe';
import { onMounted } from 'vue';
import { useLocalStorage } from '@vueuse/core';

const recipe = useLocalStorage<Recipe>('recipe', {});

onMounted(() => {
  document.title = 'Recipe details';
});

</script>

<template>
    <main class="w-full h-full bg-rose-200 flex flex-col h-screen">
        <div class="container mx-auto my-8">
        <div class="flex flex-col md:flex-row">
            <!-- Recipe Image -->
            <div class="md:w-1/2">
            <img :src="recipe.strMealThumb" :alt="recipe.strMeal" class="object-cover w-full h-64 rounded-md shadow-md mb-4">
            </div>
            <!-- Recipe Details -->
            <div class="md:w-1/2 md:ml-8">
            <h2 class="text-3xl font-bold mb-4">{{ recipe.strMeal }}</h2>
            <p class="text-gray-600 text-sm mb-4">{{ recipe.strCategory }}</p>
            <!-- Ingredients -->
            <div class="mb-4">
                <h3 class="text-xl font-bold mb-2">Ingredients</h3>
                <ul class="list-disc pl-4">
                <li>{{ `${recipe.strMeasure1} ${recipe.strIngredient1}` }}</li>
                <li>{{ `${recipe.strMeasure2} ${recipe.strIngredient2}` }}</li>
                <li>{{ `${recipe.strMeasure3} ${recipe.strIngredient3}` }}</li>
                <li>{{ `${recipe.strMeasure4} ${recipe.strIngredient4}` }}</li>
                <!-- Add more ingredients as needed -->
                </ul>
            </div>
            </div>
					</div>
				<!-- Instructions -->
				<div>
          <h3 class="text-xl font-bold mb-2">Instructions</h3>
          <p class="text-gray-800">{{ recipe.strInstructions }}</p>
        </div>
        <!-- Tags -->
        <div class="mt-8">
            <h3 class="text-xl font-bold mb-2">Tags</h3>
            <p>{{ recipe.strTags }}</p>
        </div>
        </div>
    </main>
  </template>
