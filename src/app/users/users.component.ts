import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: any = [];
  errorMsg: any;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (result) => {
        this.users = result;
      },
      (err) => {
        console.log(err.message);
        this.errorMsg = err.message;
      }
    );
  }
}
