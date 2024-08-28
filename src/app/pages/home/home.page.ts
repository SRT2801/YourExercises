import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../services/exercise.service'; // Asegúrate de que la ruta sea correcta
import { RoutineService } from '../../services/routine.service'; // Asegúrate de que la ruta sea correcta
import { Exercise } from '../../models/exercise';
import { Routine } from '../../models/routine';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  exercises: Exercise[] = [];
  routines: Routine[] = [];

  constructor(
    private exerciseService: ExerciseService,
    private routineService: RoutineService
  ) {}

  ngOnInit() {
    this.loadExercises();
    this.loadRoutines();
  }

  loadExercises() {
    this.exercises = this.exerciseService.getExercises();
  }

  loadRoutines() {
    this.routines = this.routineService.getRoutines();
  }
}
