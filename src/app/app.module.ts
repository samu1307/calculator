import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuCalculatorComponent } from './components/menu-calculator/menu-calculator.component';
import { HistoryComponent } from './components/history/history.component';

const appRouting:Routes=[

  {path: '', component:MenuComponent},
  {path: 'proyects', component:ProyectsComponent},
  {path: 'proyects/calculator', component:CalculatorComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CalculatorComponent,
    MenuComponent,
    ProyectsComponent,
    MenuCalculatorComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
