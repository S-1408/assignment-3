import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostTitleComponent } from './components/post-title/post-title.component';

const routes: Routes = [
  {
    path:'', redirectTo:"/post-title", pathMatch:"full"
  },
  {
    path:'post-title', component:PostTitleComponent
  },
  {
    path:'post-details', component:PostDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
