import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, 
  MatGridListModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule],
  exports: [MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule]
})
export class MaterialModule {

}