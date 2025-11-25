import { Routes } from '@angular/router';
import { Productos } from './productos/productos';
import { Login } from './auth/login/login';
import { Home } from './home/home';
import { Layout } from './layout/layout';
import { authGuard } from './auth/auth-guard';

export const routes: Routes = [
    { 
        path: "",
        component: Layout,
        children: [
            { path: "productos", component: Productos },
            { path: "home", component: Home },
        ],
        canActivate: [authGuard]
    },
    
    { path: "login", component: Login }
];
