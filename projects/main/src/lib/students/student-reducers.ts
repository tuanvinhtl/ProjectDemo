import * as studentActions from "./student-actions";
import { StudentActions } from "./student-actions";
import { State } from "./studen-state";

export const initialState: State = {
    dataStudent: [],
    statusReponse: '',
    totalRecord: 0
};

export function reducer(state = initialState, action: StudentActions): State {
    switch (action.type) {
        case studentActions.ActionTypes.LOAD_STUDENT_SUCCESS: {
            return {
                ...state,
                dataStudent: action.dataReponse
            }
        }
        case studentActions.ActionTypes.LOAD_STUDENT_ERROR: {
            return {
                ...state,
                dataStudent: [],
                statusReponse: action.dataReponseError,
            }
        }
    }
    return state
}