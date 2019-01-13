import {Student} from '../../models/student.model';

export interface StudentsState {
  data: Student[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: StudentsState = {
  data: [
    {
      id: 1,
      date_submitted: '01/06/2019',
      ip_address: '1.234.876',
      opt_in: 'unknown',
      name_first: 'Tom',
      name_last: 'Hanks',
      address: '123 Main St',
      phone: '910-999-9989',
      email: 'tom@me.com',
      program_type: 'Segment 1',
      course_time: 'Mon 8pm',
      additional_comments: 'excited',
      }
  ],
  loaded: false,
  loading: false,
};
