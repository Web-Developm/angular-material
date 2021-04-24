import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { DeleteComponent } from './delete/delete.component';
import { SampleComponent } from './sample/sample.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:"sample", component:SampleComponent
  },

  {
    path:"data", component:DataComponent
  },

  {
    path:'update', component:UpdateComponent
  },

  {
    path:'delete', component:DeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const route=[SampleComponent,DataComponent,UpdateComponent,DeleteComponent];
