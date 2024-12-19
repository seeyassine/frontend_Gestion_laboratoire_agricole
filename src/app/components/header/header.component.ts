import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // Add any logic here if needed
  isLoggedIn: boolean = false; // Example of login state
  userName: string = 'John Doe'; // Example of dynamic user name (optional)

  // Mock logout function
  logout(): void {
    this.isLoggedIn = false;
    console.log('User logged out.');
  }
}
