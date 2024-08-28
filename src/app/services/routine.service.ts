import { Injectable } from '@angular/core';
import { Routine } from '../models/routine';
import { Exercise } from '../models/exercise';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoutineService {
  private routines: Routine[] = [];
  private categories = ['Hipertrofia', 'Fuerza', 'Resistencia'];
  private routinesSubject = new BehaviorSubject<Routine[]>([]);
  constructor() {
    this.routinesSubject.next(this.routines);
    this.routines = [
      // Rutina de Push Day
      {
        id: 1,
        name: 'Push Day - Fuerza',
        description: 'Entrenamiento enfocado en fuerza para pecho, hombros y tríceps',
        duration: 60,
        exercises: [
          {
            id: 1, name: 'Bench Press', sets: 4, reps: 5, weight: 80,
            category: ''
          },
          {
            id: 2, name: 'Incline Bench Press', sets: 4, reps: 5, weight: 70,
            category: ''
          },
          {
            id: 14, name: 'Overhead Press', sets: 4, reps: 5, weight: 50,
            category: ''
          },
          {
            id: 17, name: 'Shrugs', sets: 3, reps: 8, weight: 80,
            category: ''
          },
          {
            id: 21, name: 'Tricep Pushdown', sets: 3, reps: 10, weight: 35,
            category: ''
          },
        ],
        category: 'Push',
        type: 'Fuerza',
        isUserCreated: false
      },
      {
        id: 2,
        name: 'Push Day - Hipertrofia',
        description: 'Entrenamiento enfocado en hipertrofia para pecho, hombros y tríceps',
        duration: 60,
        exercises: [
          {
            id: 1, name: 'Bench Press', sets: 4, reps: 10, weight: 60,
            category: ''
          },
          {
            id: 2, name: 'Incline Bench Press', sets: 4, reps: 10, weight: 55,
            category: ''
          },
          {
            id: 3, name: 'Chest Fly', sets: 3, reps: 12, weight: 15,
            category: ''
          },
          {
            id: 15, name: 'Lateral Raises', sets: 3, reps: 15, weight: 10,
            category: ''
          },
          {
            id: 20, name: 'Tricep Dips', sets: 3, reps: 12, weight: 0,
            category: ''
          },
        ],
        category: 'Push',
        type: 'Hipertrofia',
        isUserCreated: false
      },
      {
        id: 3,
        name: 'Push Day - Resistencia',
        description: 'Entrenamiento enfocado en resistencia para pecho, hombros y tríceps',
        duration: 60,
        exercises: [
          {
            id: 1, name: 'Bench Press', sets: 3, reps: 15, weight: 50,
            category: ''
          },
          {
            id: 14, name: 'Overhead Press', sets: 3, reps: 15, weight: 30,
            category: ''
          },
          {
            id: 15, name: 'Lateral Raises', sets: 3, reps: 20, weight: 5,
            category: ''
          },
          {
            id: 17, name: 'Shrugs', sets: 3, reps: 20, weight: 50,
            category: ''
          },
          {
            id: 21, name: 'Tricep Pushdown', sets: 3, reps: 20, weight: 20,
            category: ''
          },
        ],
        category: 'Push',
        type: 'Resistencia',
        isUserCreated: false
      },

      // Rutina de Pull Day
      {
        id: 4,
        name: 'Pull Day - Fuerza',
        description: 'Entrenamiento enfocado en fuerza para espalda y bíceps',
        duration: 60,
        exercises: [
          {
            id: 4, name: 'Deadlift', sets: 4, reps: 5, weight: 100,
            category: ''
          },
          {
            id: 7, name: 'Bent Over Rows', sets: 4, reps: 5, weight: 70,
            category: ''
          },
          {
            id: 5, name: 'Pull Ups', sets: 4, reps: 8, weight: 0,
            category: ''
          },
          {
            id: 19, name: 'Hammer Curls', sets: 4, reps: 5, weight: 25,
            category: ''
          },
          {
            id: 22, name: 'Skull Crushers', sets: 3, reps: 8, weight: 40,
            category: ''
          },
        ],
        category: 'Pull',
        type: 'Fuerza',
        isUserCreated: false
      },
      {
        id: 5,
        name: 'Pull Day - Hipertrofia',
        description: 'Entrenamiento enfocado en hipertrofia para espalda y bíceps',
        duration: 60,
        exercises: [
          {
            id: 4, name: 'Deadlift', sets: 4, reps: 8, weight: 80,
            category: ''
          },
          {
            id: 6, name: 'Lat Pulldown', sets: 4, reps: 10, weight: 50,
            category: ''
          },
          {
            id: 7, name: 'Bent Over Rows', sets: 4, reps: 8, weight: 60,
            category: ''
          },
          {
            id: 19, name: 'Hammer Curls', sets: 3, reps: 12, weight: 15,
            category: ''
          },
          {
            id: 18, name: 'Bicep Curls', sets: 3, reps: 12, weight: 15,
            category: ''
          },
        ],
        category: 'Pull',
        type: 'Hipertrofia',
        isUserCreated: false
      },
      {
        id: 6,
        name: 'Pull Day - Resistencia',
        description: 'Entrenamiento enfocado en resistencia para espalda y bíceps',
        duration: 60,
        exercises: [
          {
            id: 5, name: 'Pull Ups', sets: 3, reps: 15, weight: 0,
            category: ''
          },
          {
            id: 7, name: 'Bent Over Rows', sets: 3, reps: 15, weight: 40,
            category: ''
          },
          {
            id: 6, name: 'Lat Pulldown', sets: 3, reps: 20, weight: 30,
            category: ''
          },
          {
            id: 18, name: 'Bicep Curls', sets: 3, reps: 20, weight: 10,
            category: ''
          },
          {
            id: 24, name: 'Russian Twists', sets: 3, reps: 20, weight: 10,
            category: ''
          },
        ],
        category: 'Pull',
        type: 'Resistencia',
        isUserCreated: false
      },

      // Rutina de Legs Day
      {
        id: 7,
        name: 'Legs Day - Fuerza',
        description: 'Entrenamiento enfocado en fuerza para piernas',
        duration: 60,
        exercises: [
          {
            id: 8, name: 'Squats', sets: 4, reps: 5, weight: 100,
            category: ''
          },
          {
            id: 9, name: 'Leg Press', sets: 4, reps: 5, weight: 120,
            category: ''
          },
          {
            id: 13, name: 'Calf Raises', sets: 4, reps: 8, weight: 40,
            category: ''
          },
          {
            id: 10, name: 'Lunges', sets: 3, reps: 8, weight: 30,
            category: ''
          },
          {
            id: 12, name: 'Leg Extensions', sets: 3, reps: 10, weight: 60,
            category: ''
          },
        ],
        category: 'Legs',
        type: 'Fuerza',
        isUserCreated: false
      },
      {
        id: 8,
        name: 'Legs Day - Hipertrofia',
        description: 'Entrenamiento enfocado en hipertrofia para piernas',
        duration: 60,
        exercises: [
          {
            id: 8, name: 'Squats', sets: 4, reps: 8, weight: 80,
            category: ''
          },
          {
            id: 9, name: 'Leg Press', sets: 4, reps: 10, weight: 100,
            category: ''
          },
          {
            id: 10, name: 'Lunges', sets: 3, reps: 12, weight: 20,
            category: ''
          },
          {
            id: 12, name: 'Leg Extensions', sets: 3, reps: 15, weight: 45,
            category: ''
          },
          {
            id: 13, name: 'Calf Raises', sets: 4, reps: 15, weight: 25,
            category: ''
          },
        ],
        category: 'Legs',
        type: 'Hipertrofia',
        isUserCreated: false
      },
      {
        id: 9,
        name: 'Legs Day - Resistencia',
        description: 'Entrenamiento enfocado en resistencia para piernas',
        duration: 60,
        exercises: [
          {
            id: 8, name: 'Squats', sets: 3, reps: 15, weight: 60,
            category: ''
          },
          {
            id: 9, name: 'Leg Press', sets: 3, reps: 15, weight: 80,
            category: ''
          },
          {
            id: 10, name: 'Lunges', sets: 3, reps: 20, weight: 15,
            category: ''
          },
          {
            id: 11, name: 'Leg Curls', sets: 3, reps: 20, weight: 30,
            category: ''
          },
          {
            id: 13, name: 'Calf Raises', sets: 4, reps: 20, weight: 20,
            category: ''
          },
        ],
        category: 'Legs',
        type: 'Resistencia',
        isUserCreated: false
      },
    ];
  }
  getCategories(): Observable<string[]> {
    return of(this.categories); // devuelves un observable de categorías
  }

  getRoutines(): Observable<Routine[]> {
    return of(this.routines); // devuelves un observable de rutinas
  }

  getRoutinesByCategory(category: string): Observable<Routine[]> {
    console.log('Filtrando por categoría:', category);
    const filteredRoutines = this.routines.filter(routine =>
      routine.category === category || routine.type === category
    );
    console.log('Rutinas filtradas:', filteredRoutines);
    return of(filteredRoutines);
  }

  getRoutineById(id: number): Routine | undefined {
    return this.routines.find(routine => routine.id === id);
  }

  addRoutine(routine: Routine): void {
    routine.id = this.routines.length ? this.routines[this.routines.length - 1].id + 1 : 1;
    this.routines.push(routine);
  }

  updateRoutine(routine: Routine): void {
    const index = this.routines.findIndex(r => r.id === routine.id);
    if (index !== -1) {
      this.routines[index] = routine;
    }
  }

  deleteRoutine(id: number): void {
    this.routines = this.routines.filter(routine => routine.id !== id);
  }
}

