import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { apiService } from './api.service';
import { of } from "rxjs";
import { mergeMap, map, catchError } from "rxjs/operators";
import { ActionTypes } from "./student-actions";

@Injectable()
export class StudentEffects {

    constructor(private api: apiService, private actions$: Actions) { }
    // Listen for the 'LOGIN' action
    @Effect() loadData$ = this.actions$.pipe(
        ofType(ActionTypes.LOAD_STUDENT),
        mergeMap(() => this.api.getData().
            pipe(
                map(data => ({ type: ActionTypes.LOAD_STUDENT_SUCCESS, dataReponse: data })
                ), catchError(error => of(({ type: ActionTypes.LOAD_STUDENT_ERROR, dataReponseError: error }))
                )
            )
        )
    );

}