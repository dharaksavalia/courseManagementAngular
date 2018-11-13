import {Lesson} from './Lesson';

export interface MyModule {
  id?: number;
  title: string;
  lessons?: Lesson[];
}
