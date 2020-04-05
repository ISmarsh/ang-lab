import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilityModule } from 'utility';

import { AppComponent } from './app.component';
import { EditComponent } from './pages/edit/edit.component';
import { OptionsComponent } from './pages/edit/options/options.component';
import { StatsComponent } from './pages/edit/stats/stats.component';
import { PersonalComponent } from './pages/edit/personal/personal.component';
import { PowerComponent } from './pages/edit/options/power/power.component';
import { PowerDisplayPipe } from './pages/edit/options/power-display.pipe';

const routes: Routes = [
  { path: '', redirectTo: '/edit/options', pathMatch: 'full' },
  { 
    path: 'edit', component: EditComponent,
    children: [
      { path: 'options', component: OptionsComponent },
      { path: 'stats', component: StatsComponent },
      { path: 'personal', component: PersonalComponent },
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    OptionsComponent,
    StatsComponent,
    PersonalComponent,
    PowerComponent,
    PowerDisplayPipe,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    UtilityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
