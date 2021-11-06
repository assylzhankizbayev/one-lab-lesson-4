import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from '../../models/forkify.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() recipes: IRecipe[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
