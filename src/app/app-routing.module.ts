
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';

const routes: Routes = [
  

  {path:'', component: HomeComponent},
  {path:'register', component: RegistrationUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}