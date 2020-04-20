import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {MusicCrudComponent} from './views/music-crud/music-crud.component';
import { MusicCreateComponent } from './components/music/music-create/music-create.component';
import { MusicUpdateComponent } from './components/music/music-update/music-update.component';
import { MusicDeleteComponent } from './components/music/music-delete/music-delete.component';


const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "musics",
  component: MusicCrudComponent
},
{
  path: "musics/music-create",
  component: MusicCreateComponent
},
{
  path: "musics/update/:id",
  component: MusicUpdateComponent
},
{
  path: "musics/delete/:id",
  component: MusicDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
