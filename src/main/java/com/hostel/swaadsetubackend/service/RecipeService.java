package com.hostel.swaadsetubackend.service;

import com.hostel.swaadsetubackend.entity.Recipe;
import com.hostel.swaadsetubackend.repository.RecipeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {

    private final RecipeRepository recipeRepository;

    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    public Recipe getRecipeById(Long id) {
        return recipeRepository.findById(id).orElse(null);
    }

    public Recipe addRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    public Recipe updateRecipe(Long id, Recipe recipe) {
        Recipe existingRecipe = recipeRepository.findById(id).orElse(null);

        if (existingRecipe == null) {
            return null;
        }

        existingRecipe.setName(recipe.getName());
        existingRecipe.setState(recipe.getState());
        existingRecipe.setRegion(recipe.getRegion());
        existingRecipe.setDescription(recipe.getDescription());
        existingRecipe.setIngredients(recipe.getIngredients());
        existingRecipe.setInstructions(recipe.getInstructions());

        return recipeRepository.save(existingRecipe);
    }
}