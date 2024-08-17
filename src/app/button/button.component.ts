import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  interval: any;
  lastNum = 0;
  @Output() intervalFired = new EventEmitter<Number>();
  onStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNum + 1);
      this.lastNum++;
    }, 1000);
  }
  onStop() {
    clearInterval(this.interval);
  }
}
