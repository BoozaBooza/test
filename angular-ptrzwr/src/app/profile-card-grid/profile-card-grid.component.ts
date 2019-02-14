import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileDataService } from '../profile-data.service';
import { PageEvent } from '@angular/material';

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

  addProfile(id: number, name: string) {
    let index: number;
    if ((index = this.profiles.findIndex(x => x.id == id)) >= 0) {
      this.profiles.splice(index, 1);
    }
    this.profileDataService.addProfile(id, name);
    this.profiles.sort((p1, p2) => {
      return p1.id - p2.id;
    })
  }

  deleteProfile() {

    this.profileDataService.deleteProfile(this.selectedProfile.id);
    alert(this.profiles.length);
  }

  pageIndex: number = 0;
  pageSize: number = 5;
  lowValue: number = 0;
  highValue: number = 5;

  getPaginatorData(event) {
    if(this.pageSize != event.pageSize) {
      this.highValue = this.highValue + (event.pageSize - this.pageSize);
      this.pageSize = event.pageSize;
    }
    console.log(event);
    if (event.pageIndex === this.pageIndex + 1) {
      this.lowValue = this.lowValue + this.pageSize;
      this.highValue = this.highValue + this.pageSize;
    }
    else if (event.pageIndex === this.pageIndex - 1) {
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue = this.highValue - this.pageSize;
    }
    this.pageIndex = event.pageIndex;
  }
}