import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Admin, Biologist, User} from "../../types/user.type";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  user: User | Admin | Biologist = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    role: 'user', // Default role
    label: '' // Label is optional
  };

  isAdmin(user: User | Admin | Biologist): user is Admin {
    return user.role === 'admin';
  }

  isBiologist(user: User | Admin | Biologist): user is Biologist {
    return user.role === 'biologist';
  }

  roles = ['user', 'admin', 'biologist']; // Available roles
  message: string = '';

  constructor(private userService: UserService) {}

  // Handle Signup
  signup(): void {
    this.userService.signupUser(this.user).subscribe({
      next: (response) => {
        this.message = `User ${response.data.signupUser.first_name} signed up successfully!`;
        this.resetForm();
      },
      error: (err) => {
        this.message = `Error: ${err.message}`;
      }
    });
  }

  // Reset form after successful submission
  resetForm(): void {
    this.user = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      role: 'user',
      label: ''
    };
  }
}
