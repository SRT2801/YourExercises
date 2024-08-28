import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutineService } from '../../services/routine.service';
import { ExerciseService } from '../../services/exercise.service';

@Component({
  selector: 'app-add-routine',
  templateUrl: './add-routine.page.html',
  styleUrls: ['./add-routine.page.scss'],
})
export class AddRoutinePage implements OnInit {
  routineForm: FormGroup;
  exercises: { id: number; name: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private routineService: RoutineService,
    private exerciseService: ExerciseService,
    private router: Router
  ) {
    this.routineForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      duration: ['', Validators.required],
      exercises: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.exercises = this.exerciseService.getExercises();
    this.initializeFormControls();
  }

  initializeFormControls() {
    this.exercises.forEach(exercise => {
      this.routineForm.addControl('sets_' + exercise.id, this.fb.control(''));
      this.routineForm.addControl('reps_' + exercise.id, this.fb.control(''));
      this.routineForm.addControl('weight_' + exercise.id, this.fb.control(''));
    });
  }

  get exercisesFormArray(): FormArray {
    return this.routineForm.get('exercises') as FormArray;
  }

  addRoutine() {
    if (this.routineForm.valid) {
      const routine = this.routineForm.value;

      routine.exercises = this.exercisesFormArray.controls.map((control, index) => {
        const exerciseId = control.value;
        const exercise = this.exercises.find(ex => ex.id === exerciseId);

        return {
          id: exerciseId,
          name: exercise?.name,  // Incluye el nombre del ejercicio
          sets: this.routineForm.get('sets_' + exerciseId)?.value,
          reps: this.routineForm.get('reps_' + exerciseId)?.value,
          weight: this.routineForm.get('weight_' + exerciseId)?.value,
        };
      });

      this.routineService.addRoutine(routine);
      this.router.navigate(['/home']);
    }
  }

  onExerciseChange(exerciseId: number, isChecked: boolean) {
    const exercisesFormArray = this.exercisesFormArray;
    if (isChecked) {
      exercisesFormArray.push(this.fb.control(exerciseId));
    } else {
      const index = exercisesFormArray.controls.findIndex(x => x.value === exerciseId);
      exercisesFormArray.removeAt(index);
    }
  }

  isExerciseSelected(exerciseId: number): boolean {
    return this.exercisesFormArray.controls.some(control => control.value === exerciseId);
  }
}
