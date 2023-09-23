import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterationComponent } from './component/registeration/registeration.component';
import { AppComponent } from './app.component';
import { ListComponent } from './component/list/list.component';


const routes: Routes = [

  { path: 'register', component: RegisterationComponent },
  { path: 'registered', component: ListComponent },
  { path: 'update/:id', component: RegisterationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
