import {MyModule} from './module';

export interface Course {
  id?: number;
  title: string;
  created?: Date;
  modified?: Date;
  modules?: MyModule[];
}
