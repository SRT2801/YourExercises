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
  categories: string[] = [];
  selectedCategory: string = '';

  constructor(
    private routineService: RoutineService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCategories();
    this.loadRoutines();
  }

  ionViewWillEnter() {
    this.loadRoutines();
  }

  loadCategories() {
    this.routineService.getCategories().subscribe(
      (categories: string[]) => {
        this.categories = categories;
      },
      (error: any) => {
        console.error('Error al cargar las categorías', error);
      }
    );
  }

  loadRoutines() {
    if (this.selectedCategory && this.selectedCategory !== 'all') {
      this.routineService.getRoutinesByCategory(this.selectedCategory).subscribe(routines => {
        this.routines = routines;
        console.log('Rutinas filtradas:', this.routines);
      });
    } else {
      this.routineService.getRoutines().subscribe(routines => {
        this.routines = routines;
        console.log('Todas las rutinas:', this.routines);
      });
    }
  }


  filterByCategory(event: any) {
    this.selectedCategory = event.detail.value;
    console.log('Categoría seleccionada:', this.selectedCategory);
    this.loadRoutines();
  }

  viewRoutineDetails(routineId: number) {
    this.router.navigate(['/routine-details', routineId]);
  }

  navigateToAddRoutine() {
    this.router.navigate(['/add-routine']);
  }
}
