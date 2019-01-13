import {Student} from '../../models/student.model';

export interface StudentsState {
  data: Student[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: StudentsState = {
  data: [],
  loaded: false,
  loading: false,
};
