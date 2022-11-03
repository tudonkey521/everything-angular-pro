import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-components-folder-all/admin-dashboard/admin-dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MonthlyReminderComponent } from './admin-components-folder-all/monthly-reminder/monthly-reminder.component';
import { GeolocationIdentifierComponent } from './admin-components-folder-all/geolocation-identifier/geolocation-identifier.component';
import { AugmentedRealityComponent } from './admin-components-folder-all/augmented-reality/augmented-reality.component';
import { AdminGeneralComponent } from './admin-components-folder-all/admin-general/admin-general.component';
import { AdminSideNavComponent } from './admin-components-folder-all/admin-side-nav/admin-side-nav.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    MonthlyReminderComponent,
    GeolocationIdentifierComponent,
    AugmentedRealityComponent,
    AdminGeneralComponent,
    AdminSideNavComponent,
  ],
  imports: [
    AdminRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule,
  ],
})
export class AdminModule {}
