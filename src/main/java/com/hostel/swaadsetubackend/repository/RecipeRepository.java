package com.hostel.swaadsetubackend.repository;

import com.hostel.swaadsetubackend.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
}