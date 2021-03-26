import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import {AvailabilityComponent} from './pages/availability/availability.component';
import {ScheduleComponent} from './pages/schedule/schedule.component';
import {LeaderboardComponent} from './pages/leaderboard/leaderboard.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  }, {
    path: 'availability',
    component: AvailabilityComponent
  }, {
    path: 'schedule',
    component: ScheduleComponent
  }, {
    path: 'leaderboard',
    component: LeaderboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
