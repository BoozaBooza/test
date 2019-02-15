import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileDataService } from '../profile-data.service';

@Component({
  selector: 'app-profile-card-grid',
  templateUrl: './profile-card-grid.component.html',
  styleUrls: ['./profile-card-grid.component.css']
})
export class ProfileCardGridComponent implements OnInit {

  private profiles: Profile[];
  private selectedProfile: Profile = null;

  constructor(private profileDataService: ProfileDataService) {
  }

  ngOnInit() {
    this.profiles = this.profileDataService.getProfiles();
  }

  pageIndex: number = 0;
  startIndex: number = 0;
  endIndex: number = 5;
  
  pageEvent(event) {
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex = this.startIndex + event.pageSize;
  }
}