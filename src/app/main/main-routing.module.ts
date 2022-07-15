﻿import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                children: [
                    
                    
                    // {
                    //     path: 'phonebook',
                    //     loadChildren: () => import('./phonebook/phonebook.module').then(m => m.PhoneBookModule)
                    // },
                    {
                        path: 'phonebook',
                        loadChildren: () => import('./phonebook/phonebook.module').then(m => m.PhoneBookModule),
                        data: { permission: 'Pages.Tenant.PhoneBook' }
                    },
                    
                    {
                        path: 'dashboard',
                        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
                        data: { permission: 'Pages.Tenant.Dashboard' },
                    },
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: '**', redirectTo: 'dashboard' },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class MainRoutingModule {}
