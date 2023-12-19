import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/component/dashboard/dashboard.component';
import { AboutComponent } from './dashboard/component/about/about.component';
import { ContactComponent } from './dashboard/component/contact/contact.component';

export const routes: Routes = [
    {path: 'home', component: DashboardComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contacts', component: ContactComponent}
];
