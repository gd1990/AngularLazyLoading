// Angular
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  // {path: '', component: AppComponent},
  // {path: '', redirectTo: 'demo2', pathMatch: 'full'},
  {path: 'demo', loadChildren: 'app/views/themes/demo2/theme.module#ThemeModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
