import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { apiService } from './students/api.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { reducer } from "./students/student-reducers";
import { StudentEffects } from "./students/studen-effects";

@NgModule({
  declarations: [MainComponent],
  imports: [
    HttpClientModule,
    StoreModule.forFeature('student', reducer),
    EffectsModule.forFeature([StudentEffects])
  ],
  exports: [MainComponent],
  providers: [apiService]
})
export class MainModule { }
