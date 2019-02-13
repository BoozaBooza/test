import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule, MatGridListModule, MatSelectModule, MatInputModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ProfileDataService } from './profile-data.service';
import { ProfileCardsComponent } from './profile-cards/profile-cards.component';
import { ProfileCardGridComponent } from './profile-card-grid/profile-card-grid.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule,
                  MatButtonModule, MatGridListModule, MatSelectModule,
                  MatInputModule, MatCardModule ],
  declarations: [ AppComponent, ProfileCardsComponent, ProfileCardGridComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ProfileDataService ]
})
export class AppModule { }
