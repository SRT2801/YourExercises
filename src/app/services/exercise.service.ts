import { Injectable } from '@angular/core';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private exercises: Exercise[] = [];

  constructor() {
    // Lista de ejercicios más usados actualmente
    this.exercises = [
      // Pecho
      { id: 1, name: 'Bench Press', sets: 4, reps: 10, weight: 60 },
      { id: 2, name: 'Incline Bench Press', sets: 4, reps: 10, weight: 55 },
      { id: 3, name: 'Chest Fly', sets: 3, reps: 12, weight: 15 },

      // Espalda
      { id: 4, name: 'Deadlift', sets: 4, reps: 6, weight: 80 },
      { id: 5, name: 'Pull Ups', sets: 4, reps: 10, weight: 0 },
      { id: 6, name: 'Bent Over Rows', sets: 4, reps: 8, weight: 60 },
      { id: 7, name: 'Lat Pulldown', sets: 4, reps: 10, weight: 50 },

      // Piernas
      { id: 8, name: 'Squats', sets: 4, reps: 8, weight: 80 },
      { id: 9, name: 'Leg Press', sets: 4, reps: 10, weight: 100 },
      { id: 10, name: 'Lunges', sets: 3, reps: 12, weight: 20 },
      { id: 11, name: 'Leg Curls', sets: 3, reps: 15, weight: 50 },
      { id: 12, name: 'Leg Extensions', sets: 3, reps: 15, weight: 45 },
      { id: 13, name: 'Calf Raises', sets: 4, reps: 20, weight: 25 },

      // Hombros
      { id: 14, name: 'Overhead Press', sets: 4, reps: 8, weight: 40 },
      { id: 15, name: 'Lateral Raises', sets: 3, reps: 15, weight: 10 },
      { id: 16, name: 'Front Raises', sets: 3, reps: 12, weight: 10 },
      { id: 17, name: 'Shrugs', sets: 4, reps: 15, weight: 60 },

      // Brazos
      { id: 18, name: 'Bicep Curls', sets: 3, reps: 12, weight: 15 },
      { id: 19, name: 'Hammer Curls', sets: 3, reps: 12, weight: 15 },
      { id: 20, name: 'Tricep Dips', sets: 3, reps: 12, weight: 0 },
      { id: 21, name: 'Tricep Pushdown', sets: 3, reps: 15, weight: 25 },
      { id: 22, name: 'Skull Crushers', sets: 3, reps: 10, weight: 30 },

      // Core
      { id: 23, name: 'Plank', sets: 3, reps: 60, weight: 0 }, // 60 segundos
      { id: 24, name: 'Russian Twists', sets: 3, reps: 20, weight: 10 },
      { id: 25, name: 'Leg Raises', sets: 3, reps: 15, weight: 0 },
      { id: 26, name: 'Bicycle Crunches', sets: 3, reps: 20, weight: 0 },
    ];
  }

  // Obtener todos los ejercicios
  getExercises(): Exercise[] {
    return this.exercises;
  }

  // Obtener un ejercicio por su ID
  getExerciseById(id: number): Exercise | undefined {
    return this.exercises.find(exercise => exercise.id === id);
  }

  // Añadir un nuevo ejercicio
  addExercise(exercise: Exercise): void {
    this.exercises.push(exercise);
  }

  // Editar un ejercicio existente
  updateExercise(exercise: Exercise): void {
    const index = this.exercises.findIndex(e => e.id === exercise.id);
    if (index !== -1) {
      this.exercises[index] = exercise;
    }
  }

  // Eliminar un ejercicio
  deleteExercise(id: number): void {
    this.exercises = this.exercises.filter(exercise => exercise.id !== id);
  }
}
