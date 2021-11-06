import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { IRecipe } from '../../models/forkify.model';
import { ForkifyService } from '../../services/forkify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  recipes: IRecipe[] = [];
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
        console.log('recipes count:', this.count);
      }),
      map(response => response.recipes),
    )
    .subscribe(recipesRes => {
      this.recipes = recipesRes;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
