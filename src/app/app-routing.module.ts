import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PointsComponent } from './components/points/points.component';
import { SavedListsComponent } from './components/saved-lists/saved-lists.component';
import { SquaresComponent } from './components/squares/squares.component';

const routes: Routes = [
  { path: '', component: PointsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'squares', component: SquaresComponent },
  { path: 'savedlists', component: SavedListsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
