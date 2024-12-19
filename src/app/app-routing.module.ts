import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "./components/signup/signup.component";
import {ProjectComponent} from "./components/project/project.component";


const routes: Routes = [
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'Project',
    component:ProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
