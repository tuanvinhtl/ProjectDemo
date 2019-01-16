import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './students/studen-state';
import { ActionTypes } from './students/student-actions';

@Component({
  selector: 'lib-main',
  template: `
    <p>
      main works!
      <button (click)="increment()">Increment</button>
    </p>
  `,
  styles: []
})
export class MainComponent implements OnInit {

  constructor(private store: Store<State>) {

  }

  ngOnInit() {
    this.store.select('student').subscribe(data => console.log(data))
  }

  increment() {
    this.store.dispatch({ type: ActionTypes.LOAD_STUDENT })
  }
}
