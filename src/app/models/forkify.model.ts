export interface IRecipes {
  count: number;
  recipes: IRecipe[];
}

export interface IRecipe {
  image_url: string;
  publisher: string;
  publisher_url: string;
  recipe_id: string;
  social_rank: number;
  source_url: string;
  title: string;
  price?: number;
}

export interface IDetailsRes {
  recipe: IRecipeDetails;
}

export interface IRecipeDetails {
  ingredients: string[];
  image_url: string;
  publisher: string;
  publisher_url: string;
  recipe_id: string;
  source_url: string;
  title: string;
  social_rank: number;
}
