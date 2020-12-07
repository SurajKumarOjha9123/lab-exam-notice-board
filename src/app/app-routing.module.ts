import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentDisplayComponent } from './department-display/department-display.component';
import { NoticeDisplayComponent } from './notice-display/notice-display.component';

const routes: Routes = [
  { path: 'notice', component: NoticeDisplayComponent },
  { path: 'department', component: DepartmentDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
