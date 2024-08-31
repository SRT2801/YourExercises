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
            id: 1, name: 'Press de Banca', sets: 4, reps: 10, weight: 0,  descanso: '2-3 mins',
            category: '',
            videoUrl: 'assets/images/benchPress.mp4'

          },
          {
            id: 2, name: 'Press De Banca Inclinado ( Con Mancuernas)', sets: 4, reps: 10, weight: 0,
            category: '',
            videoUrl: 'assets/images/press de banca inclinado con mancuernas.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 3, name: 'Press Militar (Con Mancuernas)', sets: 4, reps: 10, weight: 0,
            category: '',
            videoUrl: 'assets/images/press-militar-con-mancuernas.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 4, name: 'Elevaciones Laterales (Con Mancuernas)', sets: 3, reps: 10, weight: 0,
            category: '',
            videoUrl: 'assets/images/elevaciones-laterales.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 5, name: 'Extensiones de tríceps con agarre en V en polea', sets: 3, reps: 10, weight: 0,
            category: '',
            videoUrl: 'assets/images/02411205-Cable-Triceps-Pushdown-V-bar-attachment_Upper-Ar.mp4',
            descanso: '2-3 mins'
          },

          {
            id: 6, name: 'Extensión de tríceps sobre la cabeza con polea ', sets: 3, reps: 10, weight: 0,
            category: '',
            videoUrl: 'assets/images/01941205-Cable-Overhead-Triceps-Extension-rope-attachment.mp4',
            descanso: '2-3 mins'
          },
        ],
        category: 'Push',
        type: 'Fuerza',
        isUserCreated: false,
        videoUrl: '',
        descanso: '2-3 mins'
      },
      {
        id: 2,
        name: 'Push Day - Hipertrofia',
        description: 'Entrenamiento enfocado en hipertrofia para pecho, hombros y tríceps',
        duration: 60,
        exercises: [
          {
            id: 1, name: 'Press de Banca', sets: 4, reps: 10, weight: 0,  descanso: '2-3 mins',
            category: '',
            videoUrl: 'assets/images/benchPress.mp4'
          },
          {
            id: 2, name: 'Press De Banca Inclinado ( Con Barra)', sets: 4, reps: 10, weight: 0,
            category: '',
            videoUrl: 'assets/images/press de banca inclinado con barra.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 3, name: 'Aperturas En Maquina', sets: 3, reps: 12, weight: 15,
            category: '',
            videoUrl: 'assets/images/aperturas en maquina.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 7, name: 'Press Militar (Con Mancuernas)', sets: 4, reps: 10, weight: 0,
            category: '',
            videoUrl: 'assets/images/press-militar-con-mancuernas.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 4, name: 'Elevaciones Laterales (Con Mancuernas)', sets: 3, reps: 10, weight: 0,
            category: '',
            videoUrl: 'assets/images/elevaciones-laterales.mp4',
            descanso: '2-3 mins'
          },

          {
            id: 7, name: 'Elevaciones Frontales', sets: 3, reps: 12, weight: 0,
            category: '',
            videoUrl: 'assets/images/elevaciones frontales.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 8, name: 'Fondos En Banco Plano', sets: 3, reps: 12, weight: 0,
            category: '',
            videoUrl: 'assets/images/Fondos en banco plano.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 5, name: 'Extensiones de tríceps con agarre en V en polea', sets: 3, reps: 10, weight: 0,
            category: '',
            videoUrl: 'assets/images/02411205-Cable-Triceps-Pushdown-V-bar-attachment_Upper-Ar.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 9, name: 'Patada De Tríceps (Con Mancuernas)', sets: 3, reps: 10, weight: 0,
            category: '',
            videoUrl: 'assets/images/patada de triceps con mancuernas.mp4',
            descanso: '2-3 mins'
          },
        ],
        category: 'Push',
        type: 'Hipertrofia',
        isUserCreated: false,
        videoUrl: '',
        descanso: ''
      },
      {
        id: 3,
        name: 'Push Day - Resistencia',
        description: 'Entrenamiento enfocado en resistencia para pecho, hombros y tríceps',
        duration: 60,
        exercises: [
          {
            id: 1, name: 'Press De Banca', sets: 4, reps: 10, weight: 0,
            category: '',
            videoUrl: 'assets/images/benchPress.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 2, name: 'Press De Banca Inclinado ( Con Mancuernas)', sets: 4, reps: 10, weight: 0,
            category: '',
            videoUrl: 'assets/images/press de banca inclinado con mancuernas.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 10, name: 'Aperturas En banco Plano (Con mancuernas)', sets: 3, reps: 20, weight: 0,
            category: '',
            videoUrl: 'assets/images/aperturas con mancuernas en banco.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 7, name: 'Press Militar (Con Mancuernas)', sets: 4, reps: 10, weight: 0,
            category: '',
            videoUrl: 'assets/images/press-militar-con-mancuernas.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 4, name: 'Elevaciones Laterales (Con Mancuernas)', sets: 3, reps: 10, weight: 0,
            category: '',
            videoUrl: 'assets/images/elevaciones-laterales.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 7, name: 'Elevaciones Frontales', sets: 3, reps: 12, weight: 0,
            category: '',
            videoUrl: 'assets/images/elevaciones frontales.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 8, name: 'Fondos En Banco Plano', sets: 3, reps: 12, weight: 0,
            category: '',
            videoUrl: 'assets/images/Fondos en banco plano.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 5, name: 'Extensiones de tríceps con agarre en V en polea', sets: 3, reps: 10, weight: 0,
            category: '',
            videoUrl: 'assets/images/02411205-Cable-Triceps-Pushdown-V-bar-attachment_Upper-Ar.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 9, name: 'Patada De Tríceps (Con Mancuernas)', sets: 3, reps: 10, weight: 0,
            category: '',
            videoUrl: 'assets/images/patada de triceps con mancuernas.mp4',
            descanso: '2-3 mins'
          },

        ],
        category: 'Push',
        type: 'Resistencia',
        isUserCreated: false,
        videoUrl: '',
        descanso: ''
      },

      // Rutina de Pull Day
      {
        id: 4,
        name: 'Pull Day - Fuerza',
        description: 'Entrenamiento enfocado en fuerza para espalda y bíceps',
        duration: 60,
        exercises: [
          {
            id: 11, name: 'Dominadas', sets: 4, reps: 5, weight: 0,
            category: '',
            videoUrl: 'assets/images/dominadas.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 12, name: 'Jalón Al Pecho', sets: 4, reps: 5, weight: 0,
            category: '',
            videoUrl: 'assets/images/jalon al pech.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 13, name: 'Remo Con Barra Z (Dorsales)', sets: 4, reps: 5, weight: 0,
            category: '',
            videoUrl: 'assets/images/remo con barra z supino.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 14, name: 'Remo En Banco Inclinado Con Mancuernas (Agarre Neutro)', sets: 4, reps: 8, weight: 0,
            category: '',
            videoUrl: 'assets/images/remo en banco inclinado con mancuernas.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 15, name: 'Remo Con Mancuerna (Unilateral)', sets: 4, reps: 5, weight: 0,
            category: '',
            videoUrl: 'assets/images/remo con mancuernas unilateral.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 16, name: 'Curl De Biceps ( Con Barra Z )', sets: 3, reps: 8, weight: 0,
            category: '',
            videoUrl: 'assets/images/curl de biceps con barra z .mp4',
            descanso: '2-3 mins'
          },
          {
            id: 17, name: 'Curl De Martillo ( Con Mancuernas )', sets: 3, reps: 8, weight: 0,
            category: '',
            videoUrl: 'assets/images/curl martillo.mp4',
            descanso: '2-3 mins'
          },
          {
            id: 18, name: 'Curl De Biceps Inclinado ( Con Mancuernas)', sets: 3, reps: 8, weight: 0,
            category: '',
            videoUrl: 'assets/images/curl de biceps inclinado con mancuernas.mp4',
            descanso: '2-3 mins'
          },

        ],
        category: 'Pull',
        type: 'Fuerza',
        isUserCreated: false,
        videoUrl: 'assets/images/',
        descanso: ''
      },
      {
        id: 5,
        name: 'Pull Day - Hipertrofia',
        description: 'Entrenamiento enfocado en hipertrofia para espalda y bíceps',
        duration: 60,
        exercises: [
          {
            id: 4, name: 'Deadlift', sets: 4, reps: 8, weight: 80,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
          {
            id: 6, name: 'Lat Pulldown', sets: 4, reps: 10, weight: 50,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
          {
            id: 7, name: 'Bent Over Rows', sets: 4, reps: 8, weight: 60,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
          {
            id: 19, name: 'Hammer Curls', sets: 3, reps: 12, weight: 15,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
          {
            id: 18, name: 'Bicep Curls', sets: 3, reps: 12, weight: 15,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
        ],
        category: 'Pull',
        type: 'Hipertrofia',
        isUserCreated: false,
        videoUrl: '',
        descanso: ''
      },
      {
        id: 6,
        name: 'Pull Day - Resistencia',
        description: 'Entrenamiento enfocado en resistencia para espalda y bíceps',
        duration: 60,
        exercises: [
          {
            id: 5, name: 'Pull Ups', sets: 3, reps: 15, weight: 0,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
          {
            id: 7, name: 'Bent Over Rows', sets: 3, reps: 15, weight: 40,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
          {
            id: 6, name: 'Lat Pulldown', sets: 3, reps: 20, weight: 30,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
          {
            id: 18, name: 'Bicep Curls', sets: 3, reps: 20, weight: 10,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
          {
            id: 24, name: 'Russian Twists', sets: 3, reps: 20, weight: 10,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
        ],
        category: 'Pull',
        type: 'Resistencia',
        isUserCreated: false,
        videoUrl: '',
        descanso: ''
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
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
          {
            id: 9, name: 'Leg Press', sets: 4, reps: 5, weight: 120,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
          {
            id: 13, name: 'Calf Raises', sets: 4, reps: 8, weight: 40,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
          {
            id: 10, name: 'Lunges', sets: 3, reps: 8, weight: 30,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
          {
            id: 12, name: 'Leg Extensions', sets: 3, reps: 10, weight: 60,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
        ],
        category: 'Legs',
        type: 'Fuerza',
        isUserCreated: false,
        videoUrl: '',
        descanso: ''
      },
      {
        id: 8,
        name: 'Legs Day - Hipertrofia',
        description: 'Entrenamiento enfocado en hipertrofia para piernas',
        duration: 60,
        exercises: [
          {
            id: 8, name: 'Squats', sets: 4, reps: 8, weight: 80,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
          {
            id: 9, name: 'Leg Press', sets: 4, reps: 10, weight: 100,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
          {
            id: 10, name: 'Lunges', sets: 3, reps: 12, weight: 20,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
          {
            id: 12, name: 'Leg Extensions', sets: 3, reps: 15, weight: 45,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
          {
            id: 13, name: 'Calf Raises', sets: 4, reps: 15, weight: 25,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
        ],
        category: 'Legs',
        type: 'Hipertrofia',
        isUserCreated: false,
        videoUrl: '',
        descanso: ''
      },
      {
        id: 9,
        name: 'Legs Day - Resistencia',
        description: 'Entrenamiento enfocado en resistencia para piernas',
        duration: 60,
        exercises: [
          {
            id: 8, name: 'Squats', sets: 3, reps: 15, weight: 60,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
          {
            id: 9, name: 'Leg Press', sets: 3, reps: 15, weight: 80,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
          {
            id: 10, name: 'Lunges', sets: 3, reps: 20, weight: 15,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
          {
            id: 11, name: 'Leg Curls', sets: 3, reps: 20, weight: 30,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
          {
            id: 13, name: 'Calf Raises', sets: 4, reps: 20, weight: 20,
            category: '',
            videoUrl: 'assets/images/',
            descanso: ''
          },
        ],
        category: 'Legs',
        type: 'Resistencia',
        isUserCreated: false,
        videoUrl: '',
        descanso: ''
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

