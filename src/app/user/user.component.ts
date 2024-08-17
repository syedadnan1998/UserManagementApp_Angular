import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}
  user: any;
  ngOnInit(): void {
    let Userid = this.route.snapshot.params['id'];
    this.userService.getUserById(Userid).subscribe((result) => {
      this.user = result;
    });
  }
}
