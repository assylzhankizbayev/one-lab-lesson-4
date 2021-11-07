import { Component, Input } from '@angular/core';
import { IRecipeDetails } from '../../models/forkify.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  // @Input() recipe: IRecipeDetails | null = null;

  _recipe: IRecipeDetails | null = null;
  @Input() set recipe(value: any) {
    this._recipe = value;
    console.log(this._recipe);
  }
  get recipe() {
    return this._recipe;
  }
}
