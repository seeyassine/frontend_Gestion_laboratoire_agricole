import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Admin, Biologist, User} from "../types/user.type";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/graphql'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Signup User (Admin or Biologist)
  signupUser(user: User | Admin | Biologist): Observable<any> {
    const mutation = {
      query: `
        mutation {
          signupUser(input: {
            first_name: "${user.first_name}",
            last_name: "${user.last_name}",
            email: "${user.email}",
            password: "${user.password}",
            role: "${user.role}",
            ${user.role === 'admin' || user.role === 'biologist' ? `label: "${(user as Admin | Biologist).label}"` : ''}
          }) {
            id
            first_name
            last_name
            email
            role
          }
        }
      `
    };
    return this.http.post<any>(this.apiUrl, mutation);
  }
}
