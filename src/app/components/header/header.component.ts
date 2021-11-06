import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  queryControl = new FormControl();

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.queryControl.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(700),
        distinctUntilChanged()
      )
      .subscribe(query => {
        this.search.emit(query);
      });
  }
}
