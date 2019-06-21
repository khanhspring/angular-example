import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-user-addition',
  templateUrl: './user-addition.component.html',
  styleUrls: ['./user-addition.component.css']
})
export class UserAdditionComponent implements OnInit {

  private user: User;

  constructor() { }

  ngOnInit() {
    this.user = new User();
  }

  handleOnSubmit() {
    console.log(this.user);
  }
}
