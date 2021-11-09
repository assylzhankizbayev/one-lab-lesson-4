import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  queryControl = new FormControl(null);

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.search.emit('Pizza');

    this.queryControl.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(700),
        distinctUntilChanged(),
        tap(query => {
          this.search.emit(query);
        })
      )
      .subscribe();
  }
}
