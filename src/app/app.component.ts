import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'exercise-1';
  evenNums: any = [];
  oddNums: any = [];
  owner: string = 'Syed Mohammad Adnan';
  data2: any;

  onstartClick(count: any) {
    if (count % 2 == 0) {
      this.evenNums.push(count);
    } else {
      this.oddNums.push(count);
    }
  }
  getChildData(data: string) {
    this.data2 = data;
  }
}
