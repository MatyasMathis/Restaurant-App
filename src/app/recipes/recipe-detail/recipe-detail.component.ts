import { Component, OnInit,Input } from '@angular/core';
import { RecipesManager } from 'src/app/services/recipes.service';

import { Recipes } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipes;
  constructor() { }
 

  
  
  
  ngOnInit(): void {
  }
}
