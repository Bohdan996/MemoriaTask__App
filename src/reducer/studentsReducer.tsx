import { STUDENTS_LOAD } from "./types";
import { Data } from '../types/Data';

const initialState = {
  data: [] as Data[],
}

export const studentsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case STUDENTS_LOAD:
      const studentsData = action.students.data.map((res: Data) => {
        return res;
      })

      return {
        ...state,
        data: studentsData,
      }

    default:
      return state;
  }
};
