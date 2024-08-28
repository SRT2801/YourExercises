import { Injectable } from '@angular/core';
import { Routine } from '../models/routine';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root',
})
export class RoutineService {
  private routines: Routine[] = [];

  constructor() {
    // Inicializamos con las rutinas del plan PPL (Push, Pull, Legs)
    this.routines = [
      // Rutina de Push Day
      {
        id: 1,
        name: 'Push Day - Fuerza',
        description: 'Entrenamiento enfocado en fuerza para pecho, hombros y tríceps',
        duration: 60,
        exercises: [
          { id: 1, name: 'Bench Press', sets: 4, reps: 5, weight: 80 },
          { id: 2, name: 'Incline Bench Press', sets: 4, reps: 5, weight: 70 },
          { id: 14, name: 'Overhead Press', sets: 4, reps: 5, weight: 50 },
          { id: 17, name: 'Shrugs', sets: 3, reps: 8, weight: 80 },
          { id: 21, name: 'Tricep Pushdown', sets: 3, reps: 10, weight: 35 },
        ],
      },
      {
        id: 2,
        name: 'Push Day - Hipertrofia',
        description: 'Entrenamiento enfocado en hipertrofia para pecho, hombros y tríceps',
        duration: 60,
        exercises: [
          { id: 1, name: 'Bench Press', sets: 4, reps: 10, weight: 60 },
          { id: 2, name: 'Incline Bench Press', sets: 4, reps: 10, weight: 55 },
          { id: 3, name: 'Chest Fly', sets: 3, reps: 12, weight: 15 },
          { id: 15, name: 'Lateral Raises', sets: 3, reps: 15, weight: 10 },
          { id: 20, name: 'Tricep Dips', sets: 3, reps: 12, weight: 0 },
        ],
      },
      {
        id: 3,
        name: 'Push Day - Resistencia',
        description: 'Entrenamiento enfocado en resistencia para pecho, hombros y tríceps',
        duration: 60,
        exercises: [
          { id: 1, name: 'Bench Press', sets: 3, reps: 15, weight: 50 },
          { id: 14, name: 'Overhead Press', sets: 3, reps: 15, weight: 30 },
          { id: 15, name: 'Lateral Raises', sets: 3, reps: 20, weight: 5 },
          { id: 17, name: 'Shrugs', sets: 3, reps: 20, weight: 50 },
          { id: 21, name: 'Tricep Pushdown', sets: 3, reps: 20, weight: 20 },
        ],
      },

      // Rutina de Pull Day
      {
        id: 4,
        name: 'Pull Day - Fuerza',
        description: 'Entrenamiento enfocado en fuerza para espalda y bíceps',
        duration: 60,
        exercises: [
          { id: 4, name: 'Deadlift', sets: 4, reps: 5, weight: 100 },
          { id: 7, name: 'Bent Over Rows', sets: 4, reps: 5, weight: 70 },
          { id: 5, name: 'Pull Ups', sets: 4, reps: 8, weight: 0 },
          { id: 19, name: 'Hammer Curls', sets: 4, reps: 5, weight: 25 },
          { id: 22, name: 'Skull Crushers', sets: 3, reps: 8, weight: 40 },
        ],
      },
      {
        id: 5,
        name: 'Pull Day - Hipertrofia',
        description: 'Entrenamiento enfocado en hipertrofia para espalda y bíceps',
        duration: 60,
        exercises: [
          { id: 4, name: 'Deadlift', sets: 4, reps: 8, weight: 80 },
          { id: 6, name: 'Lat Pulldown', sets: 4, reps: 10, weight: 50 },
          { id: 7, name: 'Bent Over Rows', sets: 4, reps: 8, weight: 60 },
          { id: 19, name: 'Hammer Curls', sets: 3, reps: 12, weight: 15 },
          { id: 18, name: 'Bicep Curls', sets: 3, reps: 12, weight: 15 },
        ],
      },
      {
        id: 6,
        name: 'Pull Day - Resistencia',
        description: 'Entrenamiento enfocado en resistencia para espalda y bíceps',
        duration: 60,
        exercises: [
          { id: 5, name: 'Pull Ups', sets: 3, reps: 15, weight: 0 },
          { id: 7, name: 'Bent Over Rows', sets: 3, reps: 15, weight: 40 },
          { id: 6, name: 'Lat Pulldown', sets: 3, reps: 20, weight: 30 },
          { id: 18, name: 'Bicep Curls', sets: 3, reps: 20, weight: 10 },
          { id: 24, name: 'Russian Twists', sets: 3, reps: 20, weight: 10 },
        ],
      },

      // Rutina de Legs Day
      {
        id: 7,
        name: 'Legs Day - Fuerza',
        description: 'Entrenamiento enfocado en fuerza para piernas',
        duration: 60,
        exercises: [
          { id: 8, name: 'Squats', sets: 4, reps: 5, weight: 100 },
          { id: 9, name: 'Leg Press', sets: 4, reps: 5, weight: 120 },
          { id: 13, name: 'Calf Raises', sets: 4, reps: 8, weight: 40 },
          { id: 10, name: 'Lunges', sets: 3, reps: 8, weight: 30 },
          { id: 12, name: 'Leg Extensions', sets: 3, reps: 10, weight: 60 },
        ],
      },
      {
        id: 8,
        name: 'Legs Day - Hipertrofia',
        description: 'Entrenamiento enfocado en hipertrofia para piernas',
        duration: 60,
        exercises: [
          { id: 8, name: 'Squats', sets: 4, reps: 8, weight: 80 },
          { id: 9, name: 'Leg Press', sets: 4, reps: 10, weight: 100 },
          { id: 10, name: 'Lunges', sets: 3, reps: 12, weight: 20 },
          { id: 12, name: 'Leg Extensions', sets: 3, reps: 15, weight: 45 },
          { id: 13, name: 'Calf Raises', sets: 4, reps: 15, weight: 25 },
        ],
      },
      {
        id: 9,
        name: 'Legs Day - Resistencia',
        description: 'Entrenamiento enfocado en resistencia para piernas',
        duration: 60,
        exercises: [
          { id: 8, name: 'Squats', sets: 3, reps: 15, weight: 60 },
          { id: 9, name: 'Leg Press', sets: 3, reps: 15, weight: 80 },
          { id: 10, name: 'Lunges', sets: 3, reps: 20, weight: 15 },
          { id: 11, name: 'Leg Curls', sets: 3, reps: 20, weight: 30 },
          { id: 13, name: 'Calf Raises', sets: 4, reps: 20, weight: 20 },
        ],
      },
    ];
  }

  getRoutines(): Routine[] {
    return this.routines;
  }

  getRoutineById(id: number): Routine | undefined {
    const routine = this.routines.find(routine => routine.id === id);
    if (!routine) {
      console.error(`Routine with ID ${id} not found.`);
    }
    return routine;
  }

  addRoutine(routine: Routine): void {
    // Asigna un ID único a la nueva rutina
    routine.id = this.routines.length ? this.routines[this.routines.length - 1].id + 1 : 1;
    this.routines.push(routine);
  }

  updateRoutine(routine: Routine): void {
    const index = this.routines.findIndex(r => r.id === routine.id);
    if (index !== -1) {
      this.routines[index] = routine;
    } else {
      console.error(`Routine with ID ${routine.id} not found for update.`);
    }
  }

  deleteRoutine(id: number): void {
    const initialLength = this.routines.length;
    this.routines = this.routines.filter(routine => routine.id !== id);
    if (this.routines.length === initialLength) {
      console.error(`Routine with ID ${id} not found for deletion.`);
    }
  }
}
