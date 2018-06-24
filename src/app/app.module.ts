import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { BandDataService } from './band-data.service';
import { BandListComponent } from './band-list/band-list.component';
import { UserDataService } from './user-data.service';
import { BandSearchComponent } from './band-search/band-search.component';

const routes: Routes = [
  { path: 'bands', component: BandListComponent },
  { path: 'band-search', component: BandSearchComponent },
  { path: '', redirectTo: 'bands', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    BandListComponent,
    BandSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot()
  ],
  providers: [
    BandDataService,
    UserDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
