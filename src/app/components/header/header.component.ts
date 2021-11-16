import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  time$: Observable<Date> = interval(1000).pipe(
    map(() => new Date()),
  );
  @Input() queryControl: FormControl;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.search.emit('Pizza');
  }
}
