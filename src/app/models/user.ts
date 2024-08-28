import { Routine } from "./routine";

export interface User {
  id: number;
  name: string;
  email: string;
  favoriteRoutines: Routine[];
}
