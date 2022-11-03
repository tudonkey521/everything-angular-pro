import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-components-folder-all/admin-dashboard/admin-dashboard.component';
import { AdminGeneralComponent } from './admin-components-folder-all/admin-general/admin-general.component';
import { AugmentedRealityComponent } from './admin-components-folder-all/augmented-reality/augmented-reality.component';
import { GeolocationIdentifierComponent } from './admin-components-folder-all/geolocation-identifier/geolocation-identifier.component';
import { MonthlyReminderComponent } from './admin-components-folder-all/monthly-reminder/monthly-reminder.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'admin-general', component: AdminGeneralComponent },
      { path: 'augmented-reality', component: AugmentedRealityComponent },
      {
        path: 'geolocation-identifier',
        component: GeolocationIdentifierComponent,
      },
      { path: 'monthly-reminder', component: MonthlyReminderComponent },
      { path: '', redirectTo: '/admin', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
