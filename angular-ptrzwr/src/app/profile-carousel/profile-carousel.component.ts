import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileDataService } from '../profile-data.service';

@Component({
  selector: 'app-profile-carousel',
  templateUrl: './profile-carousel.component.html',
  styleUrls: ['./profile-carousel.component.css']
})
export class ProfileCarouselComponent implements OnInit {

  private profiles: Profile[]
  constructor(private profileDataService: ProfileDataService) { }

  ngOnInit() {
    this.profiles = this.profileDataService.getProfiles();
  }

}