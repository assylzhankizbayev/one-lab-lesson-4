import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { IRecipe, IRecipeDetails } from '../../models/forkify.model';
import { ForkifyService } from '../../services/forkify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  recipes: IRecipe[] = [];
  recipeDetails: IRecipeDetails | null = null;
  count = 0;
  destroy$ = new Subject();

  constructor(private forkifyService: ForkifyService) { }

  ngOnInit(): void {
  }

  searchDish(query: string) {
    this.forkifyService.search(query)
    .pipe(
      takeUntil(this.destroy$),
      tap(response => {
        this.count = response.count;
        this.recipes = response.recipes;
      })
    )
    .subscribe();
  }

  getDishDetails(id: string) {
    this.forkifyService.getDetails(id)
      .pipe(
        takeUntil(this.destroy$),
        tap(details => {
          this.recipeDetails = details.recipe;
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
