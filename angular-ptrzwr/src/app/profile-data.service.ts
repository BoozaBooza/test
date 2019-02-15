import { Injectable } from '@angular/core';
import { Profile } from './profile';
import { of } from 'rxjs';

let profiles: Profile[] = [
  { id: 1,name: 'One' },
  { id: 2,name: 'Two' },
  { id: 3,name: 'Three' },
  { id: 4,name: 'Four' },
  { id: 5,name: 'Five' },
  { id: 6,name: 'Six' },
  { id: 7,name: 'Seven' },
  { id: 8,name: 'Eight' },
  { id: 9,name: 'Nine' },
  { id: 10,name: 'Ten' },
  { id: 1,name: 'One' },
  { id: 2,name: 'Two' },
  { id: 3,name: 'Three' },
  { id: 4,name: 'Four' },
  { id: 5,name: 'Five' },
  { id: 6,name: 'Six' },
  { id: 7,name: 'Seven' },
  { id: 8,name: 'Eight' },
  { id: 9,name: 'Nine' },
  { id: 10,name: 'Ten' },
  { id: 1,name: 'One' },
  { id: 2,name: 'Two' },
  { id: 3,name: 'Three' },
  { id: 4,name: 'Four' },
  { id: 5,name: 'Five' },
  { id: 6,name: 'Six' },
  { id: 7,name: 'Seven' },
  { id: 8,name: 'Eight' },
  { id: 9,name: 'Nine' },
  { id: 10,name: 'Ten' },
  { id: 1,name: 'One' },
  { id: 2,name: 'Two' },
  { id: 3,name: 'Three' },
  { id: 4,name: 'Four' },
  { id: 5,name: 'Five' },
  { id: 6,name: 'Six' },
  { id: 7,name: 'Seven' },
  { id: 8,name: 'Eight' },
  { id: 9,name: 'Nine' },
  { id: 10,name: 'Ten' }
];

@Injectable({
  providedIn: 'root',
})
export class ProfileDataService {

  constructor() { }

  getProfiles() {
    return profiles;
  }

  addProfile(id: number, name: number) {
    let index: number;
    if((index = profiles.findIndex(x=>x.id == +id))>=0) {
      profiles.splice(index, 1);
    }
    profiles.splice(profiles.length, 0, { id, name });
  }

  deleteProfile(id: number) {
    let index: number;
    if((index = profiles.findIndex(x=>x.id == id))>=0) {
      profiles.splice(index, 1);
    }
    else {
      alert("Not Found. ID: " + id);
    }
  }
}