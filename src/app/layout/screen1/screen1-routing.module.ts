import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Screen1Component } from './screen1.component';
import {NewRegistroComponent} from './new-registro/new-registro.component';

const routes: Routes = [
    {
        path: '',
        component: Screen1Component,

    },
    {path: 'crear', component: NewRegistroComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Screen1RoutingModule {}
