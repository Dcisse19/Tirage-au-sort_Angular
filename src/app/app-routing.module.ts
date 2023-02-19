import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsentsComponent } from './pages/absents/absents.component';
import { TirageComponent } from './pages/tirage/tirage.component';

const routes: Routes = [
  {
    path: "",
    component: TirageComponent
  },
  {
    path: "absences",
    component: AbsentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
