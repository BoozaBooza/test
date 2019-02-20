import { Injectable } from '@angular/core';
import { Profile } from './profile';

let profiles: Profile[] = [
  { id: 1,name: 'One', cover_src: 'http://hdqwalls.com/wallpapers/aurora-borealis-moon-night-ce.jpg' },
  { id: 2,name: 'Two', cover_src: 'https://s3-us-gov-west-1.amazonaws.com/cg-c877c3f0-e413-40cd-a59c-ad2d6b211d1b/uploads/2016/08/forest.jpg' },
  { id: 3,name: 'Three', cover_src: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Underwater-Backgrounds-For-Desktop.jpg' },
  { id: 4,name: 'Four', cover_src: 'https://www.selectcitywalk.com/wp-content/uploads/2018/09/1.png' },
  { id: 5,name: 'Five', cover_src: 'https://www.thehappycatsite.com/wp-content/uploads/2017/12/grow.jpg' },
  { id: 6,name: 'Six', cover_src: 'https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1493764650017/' },
  { id: 7,name: 'Seven', cover_src: 'https://www.selectcitywalk.com/wp-content/uploads/2018/09/1.png' },
  { id: 8,name: 'Eight', cover_src: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Underwater-Backgrounds-For-Desktop.jpg' },
  { id: 9,name: 'Nine', cover_src: 'https://s3-us-gov-west-1.amazonaws.com/cg-c877c3f0-e413-40cd-a59c-ad2d6b211d1b/uploads/2016/08/forest.jpg' },
  { id: 10,name: 'Ten', cover_src: 'http://hdqwalls.com/wallpapers/aurora-borealis-moon-night-ce.jpg' },
  { id: 1,name: 'One', cover_src: 'http://hdqwalls.com/wallpapers/aurora-borealis-moon-night-ce.jpg' },
  { id: 2,name: 'Two', cover_src: 'https://s3-us-gov-west-1.amazonaws.com/cg-c877c3f0-e413-40cd-a59c-ad2d6b211d1b/uploads/2016/08/forest.jpg' },
  { id: 3,name: 'Three', cover_src: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Underwater-Backgrounds-For-Desktop.jpg' },
  { id: 4,name: 'Four', cover_src: 'https://www.selectcitywalk.com/wp-content/uploads/2018/09/1.png' },
  { id: 5,name: 'Five', cover_src: 'https://www.thehappycatsite.com/wp-content/uploads/2017/12/grow.jpg' },
  { id: 6,name: 'Six', cover_src: 'https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1493764650017/' },
  { id: 7,name: 'Seven', cover_src: 'https://www.selectcitywalk.com/wp-content/uploads/2018/09/1.png' },
  { id: 8,name: 'Eight', cover_src: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Underwater-Backgrounds-For-Desktop.jpg' },
  { id: 9,name: 'Nine', cover_src: 'https://s3-us-gov-west-1.amazonaws.com/cg-c877c3f0-e413-40cd-a59c-ad2d6b211d1b/uploads/2016/08/forest.jpg' },
  { id: 10,name: 'Ten', cover_src: 'http://hdqwalls.com/wallpapers/aurora-borealis-moon-night-ce.jpg' },
  { id: 1,name: 'One', cover_src: 'http://hdqwalls.com/wallpapers/aurora-borealis-moon-night-ce.jpg' },
  { id: 2,name: 'Two', cover_src: 'https://s3-us-gov-west-1.amazonaws.com/cg-c877c3f0-e413-40cd-a59c-ad2d6b211d1b/uploads/2016/08/forest.jpg' },
  { id: 3,name: 'Three', cover_src: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Underwater-Backgrounds-For-Desktop.jpg' },
  { id: 4,name: 'Four', cover_src: 'https://www.selectcitywalk.com/wp-content/uploads/2018/09/1.png' },
  { id: 5,name: 'Five', cover_src: 'https://www.thehappycatsite.com/wp-content/uploads/2017/12/grow.jpg' },
  { id: 6,name: 'Six', cover_src: 'https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1493764650017/' },
  { id: 7,name: 'Seven', cover_src: 'https://www.selectcitywalk.com/wp-content/uploads/2018/09/1.png' },
  { id: 8,name: 'Eight', cover_src: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Underwater-Backgrounds-For-Desktop.jpg' },
  { id: 9,name: 'Nine', cover_src: 'https://s3-us-gov-west-1.amazonaws.com/cg-c877c3f0-e413-40cd-a59c-ad2d6b211d1b/uploads/2016/08/forest.jpg' },
  { id: 10,name: 'Ten', cover_src: 'http://hdqwalls.com/wallpapers/aurora-borealis-moon-night-ce.jpg' },
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