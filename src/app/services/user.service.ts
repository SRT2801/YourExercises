import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: User | null = null;

  constructor() {
    // Puedes inicializar un usuario de ejemplo aquí
    this.user = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      favoriteRoutines: [],
    };
  }

  // Obtener la información del usuario
  getUser(): User | null {
    return this.user;
  }

  // Actualizar la información del usuario
  updateUser(user: User): void {
    this.user = user;
  }
}
