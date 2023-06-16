import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'country',
        data: { pageTitle: 'saziDemoProperApp.country.home.title' },
        loadChildren: () => import('./country/country.routes'),
      },
      {
        path: 'department',
        data: { pageTitle: 'saziDemoProperApp.department.home.title' },
        loadChildren: () => import('./department/department.routes'),
      },
      {
        path: 'employee',
        data: { pageTitle: 'saziDemoProperApp.employee.home.title' },
        loadChildren: () => import('./employee/employee.routes'),
      },
      {
        path: 'job',
        data: { pageTitle: 'saziDemoProperApp.job.home.title' },
        loadChildren: () => import('./job/job.routes'),
      },
      {
        path: 'job-history',
        data: { pageTitle: 'saziDemoProperApp.jobHistory.home.title' },
        loadChildren: () => import('./job-history/job-history.routes'),
      },
      {
        path: 'location',
        data: { pageTitle: 'saziDemoProperApp.location.home.title' },
        loadChildren: () => import('./location/location.routes'),
      },
      {
        path: 'region',
        data: { pageTitle: 'saziDemoProperApp.region.home.title' },
        loadChildren: () => import('./region/region.routes'),
      },
      {
        path: 'task',
        data: { pageTitle: 'saziDemoProperApp.task.home.title' },
        loadChildren: () => import('./task/task.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
