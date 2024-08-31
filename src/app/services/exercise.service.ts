import { Injectable } from '@angular/core';
import { Exercise } from '../models/exercise';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private exercises: Exercise[] = [
    {
      id: 1, name: 'Press de Banca', sets: 4, reps: 10, weight: 0,  descanso: '',
      category: '',
      videoUrl: 'assets/images/benchPress.mp4'
    },
    {
      id: 2, name: 'Press De Banca Inclinado', sets: 4, reps: 10, weight: 0,
      category: '',
      videoUrl: 'assets/images/press de banca inclinado con barra.mp4',
      descanso: '2-3 mins'
    },
    {
      id: 3, name: 'Chest Fly', sets: 0, reps: 0, weight: 0,
      category: '',
      videoUrl: '',
      descanso: ''
    },
    {
      id: 4, name: 'Deadlift', sets: 0, reps: 0, weight: 0,
      category: '',
      videoUrl: '',
      descanso: ''
    },
    {
      id: 5, name: 'Pull Ups', sets: 0, reps: 0, weight: 0,
      category: '',
      videoUrl: '',
      descanso: ''
    },
    {
      id: 6, name: 'Lat Pulldown', sets: 0, reps: 0, weight: 0,
      category: '',
      videoUrl: '',
      descanso: ''
    },
    {
      id: 7, name: 'Bent Over Rows', sets: 0, reps: 0, weight: 0,
      category: '',
      videoUrl: '',
      descanso: ''
    },
    {
      id: 8, name: 'Squats', sets: 0, reps: 0, weight: 0,
      category: '',
      videoUrl: '',
      descanso: ''
    },
    {
      id: 9, name: 'Leg Press', sets: 0, reps: 0, weight: 0,
      category: '',
      videoUrl: '',
      descanso: ''
    },
    {
      id: 10, name: 'Lunges', sets: 0, reps: 0, weight: 0,
      category: '',
      videoUrl: '',
      descanso: ''
    },
    {
      id: 11, name: 'Leg Curls', sets: 0, reps: 0, weight: 0,
      category: '',
      videoUrl: '',
      descanso: ''
    },
    {
      id: 12, name: 'Leg Extensions', sets: 0, reps: 0, weight: 0,
      category: '',
      videoUrl: '',
      descanso: ''
    },
    {
      id: 13, name: 'Calf Raises', sets: 0, reps: 0, weight: 0,
      category: '',
      videoUrl: '',
      descanso: ''
    },
    {
      id: 14, name: 'ilitary press with dumbbells', sets: 0, reps: 0, weight: 0,
      category: '',
      videoUrl: '',
      descanso: ''
    },
    {
      id: 15, name: 'Lateral Raises', sets: 0, reps: 0, weight: 0,
      category: '',
      videoUrl: '',
      descanso: ''
    },
    {
      id: 17, name: 'Shrugs', sets: 0, reps: 0, weight: 0,
      category: '',
      videoUrl: '',
      descanso: ''
    },
    {
      id: 18, name: 'Bicep Curls', sets: 0, reps: 0, weight: 0,
      category: '',
      videoUrl: '',
      descanso: ''
    },
    {
      id: 19, name: 'Hammer Curls', sets: 0, reps: 0, weight: 0,
      category: '',
      videoUrl: '',
      descanso: ''
    },
    {
      id: 20, name: 'Tricep Dips', sets: 0, reps: 0, weight: 0,
      category: '',
      videoUrl: '',
      descanso: ''
    },
    {
      id: 21, name: 'Tricep Pushdown', sets: 0, reps: 0, weight: 0,
      category: '',
      videoUrl: '',
      descanso: ''
    },
    {
      id: 22, name: 'Skull Crushers', sets: 0, reps: 0, weight: 0,
      category: '',
      videoUrl: '',
      descanso: ''
    },
    {
      id: 24, name: 'Russian Twists', sets: 0, reps: 0, weight: 0,
      category: '',
      videoUrl: '',
      descanso: ''
    },
  ];


  getAllExercises(): Observable<Exercise[]> {
    return of(this.exercises);
  }

  getExercisesByCategory(category: string): Observable<Exercise[]> {
    if (category === '') {
      return this.getAllExercises();
    }
    return of(this.exercises.filter(exercise => exercise.category === category));
  }
}

