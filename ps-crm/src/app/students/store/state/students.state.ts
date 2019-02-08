import { Student } from '../../models/student.model';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export interface StudentsState extends EntityState<Student> {
  loaded: boolean;
  loading: boolean;
}

export const studentAdapter = createEntityAdapter<Student>({
  sortComparer: false,
});

export const initialState: StudentsState = studentAdapter.getInitialState({
  loaded: false,
  loading: false
});
