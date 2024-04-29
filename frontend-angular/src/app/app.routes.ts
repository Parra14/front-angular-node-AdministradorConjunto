import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import {HeaderComponent} from './shaders/header/header.component'
import {ListReservationComponent} from './components/list-reservation/list-reservation.component'
import {CreateReservationComponent} from './components/create-reservation/create-reservation.component'



export const routes: Routes = [
    {
        path: '',
        redirectTo: 'list-reservation',
        pathMatch: 'full'
    },
    {
        path: 'list-reservation',
        component: ListReservationComponent
    }
];
