import { Routes, RouterModule } from '@angular/router';
import { InsurancePoliciesComponent } from './components/insurance-policies/insurance-policies.component';

import { LoginComponent } from './components/login/login.component';
import {PolicyFormComponent} from './components/policy-form/policy-form.component';



const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'insurancePolicies', component: InsurancePoliciesComponent },
    { path: 'policyForm', component: PolicyFormComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);