import { Routes } from '@angular/router';
import { Users } from './users';
import { Home } from './home';
import {Viestit} from './viestit'

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: Home,
    },

    {
        path: 'users',
        title: 'Users list',
        component: Users,
    },
        {
        path: 'viestit',
        title: 'Messages',
        component: Viestit,
    },

];
