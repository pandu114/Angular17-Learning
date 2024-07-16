import { Routes } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { SignalComponent } from './signal/signal.component';
import { StructuralComponent } from './structural/structural.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';

export const routes: Routes = [
    {
        path:'admin',
        loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
    },
    {
        path:'add-user',
        loadComponent:()=>import('./admin/add-user/add-user.component').then(c=>c.AddUserComponent)
        //component:AddUserComponent
    },
    {
        path:'two-way',
        component:TwoWayComponent
    },
    {
        path:'signals',
        component:SignalComponent
    },
    {
        path:'structural',
        component:StructuralComponent
    },
    {
        path:'attributes',
        component:AttributeDirectivesComponent
    },
    {
        path:'built-in-pipes',
        component:BuiltInPipesComponent
    }
];
