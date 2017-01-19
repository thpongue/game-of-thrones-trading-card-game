import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CardSelectionComponent } from './card-selection/card-selection.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'card-selection',
    pathMatch: 'full'
  },
  {
    path: 'card-selection',
    component: CardSelectionComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CardSelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		RouterModule.forRoot(ROUTES)
  ],
	exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
