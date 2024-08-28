import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutineService } from '../../services/routine.service';
import { Routine } from '../../models/routine';
import { Exercise } from '../../models/exercise'; // Asegúrate de tener el modelo Exercise

@Component({
  selector: 'app-add-routine',
  templateUrl: 'add-routine.page.html',
  styleUrls: ['add-routine.page.scss'],
})
export class AddRoutinePage {
  routine: Routine = {
    id: 0, // ID se asignará automáticamente
    name: '',
    description: '',
    duration: 0,
    exercises: []
  };

  exercises: Exercise[] = []; // Lista de ejercicios disponibles
  selectedExercises: Exercise[] = [];

  constructor(
    private routineService: RoutineService,
    private router: Router
  ) {}

  // Método para agregar un ejercicio a la rutina
  addExercise(exercise: Exercise) {
    if (!this.selectedExercises.includes(exercise)) {
      this.selectedExercises.push(exercise);
    }
  }

  // Método para eliminar un ejercicio de la rutina
  removeExercise(exercise: Exercise) {
    this.selectedExercises = this.selectedExercises.filter(e => e !== exercise);
  }

  // Método para guardar la nueva rutina
  addRoutine() {
    if (this.routine.name && this.routine.description && this.routine.duration > 0) {
      this.routine.exercises = this.selectedExercises;
      this.routineService.addRoutine(this.routine);
      this.router.navigate(['/home']); // Redirige a la página principal
    } else {
      // Manejo de errores, por ejemplo, mostrar un mensaje
      alert('Por favor, complete todos los campos.');
    }
  }

}
