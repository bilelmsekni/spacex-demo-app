import { NgModule } from '@angular/core';
import { RocketDetailsPage } from './rocket-details.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'details',
        component: RocketDetailsPage,
        children: [
            {
                path: 'overview',
                loadChildren: () => import('../rocket-overview/rocket-overview.module').then(m => m.RocketOverviewPageModule)
            },
            {
                path: 'upcoming',
                loadChildren: () => import('../rocket-upcoming/rocket-upcoming.module').then(m => m.RocketUpcomingPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: 'details/overview',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [RocketDetailsPage],
    providers: [],
})
export class RocketDetailsModule { }
