import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutineService } from '../../services/routine.service';
import { Routine } from '../../models/routine';

@Component({
  selector: 'app-routine-details',
  templateUrl: 'routine-details.page.html',
  styleUrls: ['routine-details.page.scss'],
})
export class RoutineDetailsPage implements OnInit {
  routine: Routine | undefined;

  constructor(
    private routineService: RoutineService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.routine = this.routineService.getRoutineById(id);
  }
}
