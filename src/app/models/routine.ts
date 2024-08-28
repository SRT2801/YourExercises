import { Exercise } from "./exercise";

export interface Routine {
  id: number;
  name: string;
  description: string;
  duration: number; // Duración en minutos
  exercises: Exercise[];
}
export { Exercise };

