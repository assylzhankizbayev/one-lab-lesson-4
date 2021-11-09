import { Component } from '@angular/core';
import { ForkifyService } from '../../services/forkify.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count = 1;

  constructor(private forkifyService: ForkifyService) { }

  dec() {
    this.count--;
    this.forkifyService.setCount(this.count);
  }

  inc() {
    this.count++;
    this.forkifyService.setCount(this.count);
  }
}
