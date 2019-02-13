import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileDataService } from '../profile-data.service';
import { profiles } from './profiles';


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
    if((index = this.profiles.findIndex(x=>x.id == id))>= 0) {
      this.profiles.splice(index, 1);
    }
    // this.profiles.splice(this.profiles.length, 0, {id, name});
    this.profileDataService.addProfile(id, name);
    this.profiles.sort((p1, p2)=>{
      return p1.id-p2.id;
    })
  }
  
  deleteProfile() {
  
    this.profileDataService.deleteProfile(this.selectedProfile.id);
    alert(this.profiles.length);
  }
}

// ---------------------------------------------------------------------------------------------------


// export class ProfileCardGridComponent implements OnInit {

//   private profiles: Profile[];
//   private selectedProfile: Profile = null;

//   constructor() { 
//   }

//   ngOnInit() {
    
//  this.profiles =  [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];

//   }

//   addProfile(id: number, name: string) {
//     let index: number;
//     if((index = this.profiles.findIndex(x=>x.id == id))>= 0) {
//       this.profiles.splice(index, 1);
//     }
//     this.profiles.splice(this.profiles.length, 0, {id, name});
//     this.profiles.sort((p1, p2)=>{
//       return p1.id-p2.id;
//     })
//   }
  
//   deleteProfile() {
//     this.profiles.splice(this.profiles.findIndex(x=>x.id == this.selectedProfile.id) , 1);
//   }
// }