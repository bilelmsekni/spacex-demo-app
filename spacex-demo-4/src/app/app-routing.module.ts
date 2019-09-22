import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'rockets',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'my-camera', loadChildren: './my-camera/my-camera.module#MyCameraPageModule' },
  { path: 'my-vibrator', loadChildren: './my-vibrator/my-vibrator.module#MyVibratorPageModule' },
  { path: 'my-navigation', loadChildren: './my-navigation/my-navigation.module#MyNavigationPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
