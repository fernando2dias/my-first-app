import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('Special Omelet 😊🍳', 
    "Put the eggs in a blender and mix on high until the egg mixture is almost white...",
    `Put the eggs in a blender and mix on high until the egg mixture is almost white.
    On a grill pan, sauté the potato, onion, ham, and bacon for about 30 seconds.
    Pour the egg mixture over the sautéed vegetables.
    Let the eggs cook until slightly firm around the edges.
    Add the cheese slices.
    Gently roll the eggs over into an omelet shape.
    Cook for an additional 2 minutes until firm.`, "../../../assets/images/recipes/omelet.jfif"),

    new Recipe('Special Omelet 😊🍳', 
    "Put the eggs in a blender and mix on high until the egg mixture is almost white...",
    `Put the eggs in a blender and mix on high until the egg mixture is almost white.
    On a grill pan, sauté the potato, onion, ham, and bacon for about 30 seconds.
    Pour the egg mixture over the sautéed vegetables.
    Let the eggs cook until slightly firm around the edges.
    Add the cheese slices.
    Gently roll the eggs over into an omelet shape.
    Cook for an additional 2 minutes until firm.`, "../../../assets/images/recipes/omelet.jfif"),

    new Recipe('Special Omelet 😊🍳', 
    "Put the eggs in a blender and mix on high until the egg mixture is almost white...",
    `Put the eggs in a blender and mix on high until the egg mixture is almost white.
    On a grill pan, sauté the potato, onion, ham, and bacon for about 30 seconds.
    Pour the egg mixture over the sautéed vegetables.
    Let the eggs cook until slightly firm around the edges.
    Add the cheese slices.
    Gently roll the eggs over into an omelet shape.
    Cook for an additional 2 minutes until firm.`, "../../../assets/images/recipes/omelet.jfif")
  ];

  constructor(){}

  ngOnInit(): void {
    
  }
}
