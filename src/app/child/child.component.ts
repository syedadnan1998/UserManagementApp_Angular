import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input()
  owner: any;
  @Output()
  notification: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  ngOnInit(): void {
    console.log(this.owner);
  }

  sendToParent() {
    this.notification.emit('You have successfully Send the data to parent');
  }
}
