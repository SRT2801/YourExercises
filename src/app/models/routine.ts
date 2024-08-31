import { Exercise } from "./exercise";

export interface Routine {
  id: number;
  name: string;
  description: string;
  duration: number; // Duration in minutes
  descanso: string;
  exercises: Exercise[];
  isUserCreated: boolean;
  category?: string;
  type?: 'Fuerza' | 'Hipertrofia' | 'Resistencia';
  videoUrl: string;
  imageUrl: string;


}
