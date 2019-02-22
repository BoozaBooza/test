import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileDataService } from '../profile-data.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-profile-add',
  templateUrl: './profile-add.component.html',
  styleUrls: ['./profile-add.component.css']
})
export class ProfileAddComponent implements OnInit {

  private profiles: Profile[];
  private selectedProfile: Profile = null;

  constructor(private profileDataService: ProfileDataService ) { }

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
  }
}
// --------------------------------------------------------------------------------

@Component({
  selector: 'add-modal-component',
  template: `<button class="btn btn-lg btn-outline-primary" (click)="open()">Add profile</button>`
})
export class ModalComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(ProfileAddComponent, {centered: true});
  }
}