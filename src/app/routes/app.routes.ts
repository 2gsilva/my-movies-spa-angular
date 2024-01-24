import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from '../views/about/about.component';
import { NotfoundComponent } from '../views/notfound/notfound.component';

/****************************************************************
Arquivo de rotas criado seguindo as orientações da documentação:
https://angular.io/guide/router
*****************************************************************/

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule]
  })
export class AppRoutes {
}