import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule, MatGridListModule, MatSelectModule, MatInputModule, MatCardModule, MatPaginatorModule } from '@angular/material';
import {  } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { ProfileDataService } from './profile-data.service';

import { ProfileCardsComponent } from './profile-cards/profile-cards.component';
import { ProfileCardGridComponent } from './profile-card-grid/profile-card-grid.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileAddComponent } from './profile-add/profile-add.component';
import { ProfileCarouselComponent } from './profile-carousel/profile-carousel.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule,
                  MatButtonModule, MatGridListModule, MatSelectModule,
                  MatInputModule, MatCardModule, MatPaginatorModule,
                  NgbModule, RouterModule, AppRoutingModule, NgbDropdownModule ],
  declarations: [ AppComponent, ProfileCardsComponent, ProfileCardGridComponent, NavbarComponent, ProfileAddComponent, ProfileCarouselComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ProfileDataService ]
})
export class AppModule { }
