import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PointsComponent } from './components/points/points.component';
import { PointItemComponent } from './components/point-item/point-item.component';
import { AddPointComponent } from './components/add-point/add-point.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ClearPointsComponent } from './components/clear-points/clear-points.component';
import { SquaresComponent } from './components/squares/squares.component';
import { SquareItemComponent } from './components/square-item/square-item.component';
import { SavePointsComponent } from './components/save-points/save-points.component';
import { SavedListsComponent } from './components/saved-lists/saved-lists.component';
import { SavedListsItemComponent } from './components/saved-lists-item/saved-lists-item.component';
import { SavedPointComponent } from './components/saved-point/saved-point.component';
import { DeteleSavedListComponent } from './components/detele-saved-list/detele-saved-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PointsComponent,
    PointItemComponent,
    AddPointComponent,
    HeaderComponent,
    AboutComponent,
    ClearPointsComponent,
    SquaresComponent,
    SquareItemComponent,
    SavePointsComponent,
    SavedListsComponent,
    SavedListsItemComponent,
    SavedPointComponent,
    DeteleSavedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
