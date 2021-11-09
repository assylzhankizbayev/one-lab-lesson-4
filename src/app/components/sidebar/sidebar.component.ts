import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IRecipe } from '../../models/forkify.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() recipes: IRecipe[] = [];
  @Output() getId = new EventEmitter<string>();
  selectedFoodId?: string;

  getDishId(id: string) {
    this.selectedFoodId = id;
    this.getId.emit(id);
  }
}
