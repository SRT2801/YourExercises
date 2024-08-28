import { Exercise } from './exercise';

export interface Routine {
  id: number;
  name: string;
  description: string;
  duration: number;
  exercises: Exercise[];
}
