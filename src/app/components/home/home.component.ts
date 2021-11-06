import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IRecipe } from '../../models/forkify.model';
import { ForkifyService } from '../../services/forkify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  recipes: IRecipe[] = [];
  destroy$ = new Subject();

  constructor(private forkifyService: ForkifyService) { }

  ngOnInit(): void {
  }

  searchDish(query: string) {
    console.log('dish name', query);

    this.forkifyService.search(query)
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      res => {
        console.log('dishes', res);
        this.recipes = res.recipes;
      },
      err => console.log('error in search', err),
      () => console.log('search completed')
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
