import { Exercise } from "./exercise";

export interface Routine {
  id: number;
  name: string;
  description: string;
  duration: number; // Duration in minutes
  exercises: Exercise[];
  isUserCreated: boolean;
  category?: string; // Nueva propiedad para la categoría
  type?: 'Fuerza' | 'Hipertrofia' | 'Resistencia'; // Tipo de entrenamiento
}
