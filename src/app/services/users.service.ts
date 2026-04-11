import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = 'http://localhost:3000/users';

    constructor(private http: HttpClient) { }

    getUsers() {
      return this.http.get<User[]>(this.apiUrl);
   }
  
   deleteUser(id: number) {
     return this.http.delete(`${this.apiUrl}/${id}`);
   }

   addUser(user: User) {
     return this.http.post<User>(this.apiUrl, user);
   }

   updateUser(id : number, user: User) {
    return this.http.put<User>(`${this.apiUrl}/${id}`,user)
   }

   getUserById(id : number){
     return this.http.get<User>(`${this.apiUrl}/${id}`);
   }
}
