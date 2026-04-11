import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {
  genders = ['female', 'male'];
  signupForm!: FormGroup;  

constructor(private usersService: UsersService , private router: Router) {
}

  get username() {
    return this.signupForm.get('username');
  }

  get email() {
    return this.signupForm.get('email');
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'gender': new FormControl('female'),
    })
  }

  
  adduser() {
    const data = this.signupForm.value;
      this.usersService.addUser(data).subscribe(() => {
      alert('User added successfully!');
      this.signupForm.reset();
    });
    
  }



}
