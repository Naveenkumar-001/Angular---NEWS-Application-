import { TechnologyComponent } from './technology/technology.component';
import { SportComponent } from './sport/sport.component';
import { HealthComponent } from './health/health.component';
import { GeneralComponent } from './general/general.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { BusinessComponent } from './business/business.component';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',component : TopHeadlineComponent
  },
  {
    path : 'top-headline',component : TopHeadlineComponent
  },
  {
    path : 'business',component : BusinessComponent
  },
  {
    path : 'entertainment',component : EntertainmentComponent
  },
  {
    path : 'general',component : GeneralComponent
  },
  {
    path : 'health',component : HealthComponent
  },
  {
    path : 'sport',component : SportComponent
  },
  {
    path : 'technology',component : TechnologyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
