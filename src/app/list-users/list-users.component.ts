import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../../models/users.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit {

  listUsers!: User[];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data: User[]) => {
      this.listUsers = data;
    });
  }
  
  delete(id: number) {
    this.usersService.deleteUser(id).subscribe(() => {
      alert('User deleted successfully!');
      this.ngOnInit();
    });
  }

}
