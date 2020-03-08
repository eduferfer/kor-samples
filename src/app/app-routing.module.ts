import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StreamsComponent } from './components/streams/streams.component';
import { ClipsComponent } from './components/clips/clips.component';
import { PlayerComponent } from './components/player/player.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'streams',
    component: StreamsComponent,
  },
  {
    path: 'streams/:id',
    component: PlayerComponent,
  },
  {
    path: 'clips',
    component: ClipsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
