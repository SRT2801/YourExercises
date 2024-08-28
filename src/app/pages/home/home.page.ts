import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutineService } from '../../services/routine.service';
import { Routine } from '../../models/routine';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  routines: Routine[] = [];

  constructor(
    private routineService: RoutineService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadRoutines();
  }

  ionViewWillEnter() {
    this.loadRoutines();
  }

  loadRoutines() {
    this.routines = this.routineService.getRoutines();
  }

  viewRoutineDetails(routineId: number) {
    this.router.navigate(['/routine-details', routineId]);
  }
}
