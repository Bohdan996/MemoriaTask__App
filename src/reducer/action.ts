import {
  STUDENTS_LOAD,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
} from "./types";

export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON,
  };
};

export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  };
};

export function studentsLoad(page: string, size: string): (dispatch: any) => Promise<void> {
  return async dispatch => {
    try {
      dispatch(loaderOn());
      const response = await fetch(`https://test-task-j.herokuapp.com/data?page=${page}&size=${size}`);
      const jsonData = await response.json();
      dispatch({
        type: STUDENTS_LOAD,
        students: jsonData,
      })
      dispatch(loaderOff());
    } catch (err) {
      dispatch(loaderOff())
    }
  }
};
