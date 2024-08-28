// exercise.service.ts
import { Injectable } from '@angular/core';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private exercises: Exercise[] = [
    { id: 1, name: 'Bench Press', sets: 0, reps: 0, weight: 0 },
    { id: 2, name: 'Incline Bench Press', sets: 0, reps: 0, weight: 0 },
    { id: 3, name: 'Chest Fly', sets: 0, reps: 0, weight: 0 },
    { id: 4, name: 'Deadlift', sets: 0, reps: 0, weight: 0 },
    { id: 5, name: 'Pull Ups', sets: 0, reps: 0, weight: 0 },
    { id: 6, name: 'Lat Pulldown', sets: 0, reps: 0, weight: 0 },
    { id: 7, name: 'Bent Over Rows', sets: 0, reps: 0, weight: 0 },
    { id: 8, name: 'Squats', sets: 0, reps: 0, weight: 0 },
    { id: 9, name: 'Leg Press', sets: 0, reps: 0, weight: 0 },
    { id: 10, name: 'Lunges', sets: 0, reps: 0, weight: 0 },
    { id: 11, name: 'Leg Curls', sets: 0, reps: 0, weight: 0 },
    { id: 12, name: 'Leg Extensions', sets: 0, reps: 0, weight: 0 },
    { id: 13, name: 'Calf Raises', sets: 0, reps: 0, weight: 0 },
    { id: 14, name: 'Overhead Press', sets: 0, reps: 0, weight: 0 },
    { id: 15, name: 'Lateral Raises', sets: 0, reps: 0, weight: 0 },
    { id: 17, name: 'Shrugs', sets: 0, reps: 0, weight: 0 },
    { id: 18, name: 'Bicep Curls', sets: 0, reps: 0, weight: 0 },
    { id: 19, name: 'Hammer Curls', sets: 0, reps: 0, weight: 0 },
    { id: 20, name: 'Tricep Dips', sets: 0, reps: 0, weight: 0 },
    { id: 21, name: 'Tricep Pushdown', sets: 0, reps: 0, weight: 0 },
    { id: 22, name: 'Skull Crushers', sets: 0, reps: 0, weight: 0 },
    { id: 24, name: 'Russian Twists', sets: 0, reps: 0, weight: 0 },
  ];

  getExercises(): Exercise[] {
    return this.exercises;
  }
}
