import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutineService } from '../../services/routine.service';
import { Routine } from '../../models/routine';

@Component({
  selector: 'app-add-routine',
  templateUrl: './add-routine.page.html',
  styleUrls: ['./add-routine.page.scss'],
})
export class AddRoutinePage implements OnInit {
  routineForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private routineService: RoutineService,
    private router: Router
  ) {}

  ngOnInit() {
    this.routineForm = this.fb.group({ // Inicialización en ngOnInit
      name: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['', Validators.required]
    });
  }

  addRoutine() {
    if (this.routineForm.valid) {
      const newRoutine: Routine = {
        id: this.routineService.getRoutines().length + 1, // Generar un nuevo ID
        ...this.routineForm.value
      };
      this.routineService.addRoutine(newRoutine);
      this.router.navigate(['/home']);
    }
  }
}
