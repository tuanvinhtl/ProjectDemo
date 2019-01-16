import { Action } from '@ngrx/store';

export enum ActionTypes {
    LOAD_STUDENT = '[Load] Student',
    LOAD_STUDENT_SUCCESS = '[Load] Student Success',
    LOAD_STUDENT_ERROR = '[Load] Student Error',
    DELETE_STUDENT = '[Delete] Student',
    ADD_NEW_STUDENT = '[Add] Student',
}

export class LoadStudent implements Action {
    readonly type = ActionTypes.LOAD_STUDENT;
    constructor() { }
}

export class LoadStudentSuccess implements Action {
    readonly type = ActionTypes.LOAD_STUDENT_SUCCESS;
    constructor(public dataReponse: any) { }
}

export class LoadStudentError implements Action {
    readonly type = ActionTypes.LOAD_STUDENT_ERROR;
    constructor(public dataReponseError: string) { }
}

export class DeleteStudent implements Action {
    readonly type = ActionTypes.DELETE_STUDENT;
    constructor(public id: number) { }
}

export class AddNewStudent implements Action {
    readonly type = ActionTypes.ADD_NEW_STUDENT;
    constructor(public student: Object) { }
}

export type StudentActions = LoadStudent | LoadStudentSuccess | LoadStudentError | DeleteStudent | AddNewStudent;