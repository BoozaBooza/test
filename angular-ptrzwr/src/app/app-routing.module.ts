import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCardGridComponent } from './profile-card-grid/profile-card-grid.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileAddComponent, ModalComponent } from './profile-add/profile-add.component';
import { ProfileCarouselComponent } from './profile-carousel/profile-carousel.component';

const routes: Routes = [
  { path: 'add', component: ProfileAddComponent },
  { path: '', component: ProfileCardGridComponent, outlet: 'grid' },
  { path: '', component: NavbarComponent, outlet: 'nav' },
  { path: '', component: ProfileCarouselComponent, outlet: 'carousel' },    
  { path: '', component: ModalComponent, outlet: 'modal' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }

