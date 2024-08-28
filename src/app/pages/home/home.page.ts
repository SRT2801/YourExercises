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
    this.routines = this.selectedCategory
      ? this.routineService.getRoutinesByCategory(this.selectedCategory)
      : this.routineService.getRoutines();
  }

  viewRoutineDetails(routineId: number) {
    this.router.navigate(['/routine-details', routineId]);
  }

  navigateToAddRoutine() {
    this.router.navigate(['/add-routine']);
  }

  filterByCategory(event: any) {
    const value = event.detail.value as string;
    this.selectedCategory = value || ''; // Proporciona un valor predeterminado
    this.loadRoutines(); // Llama a loadRoutines para aplicar el filtro
  }

  showAllRoutines() {
    this.selectedCategory = '';
    this.loadRoutines();
  }
}
