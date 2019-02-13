import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../profile';



@Component({
  selector: 'app-profile-cards',
  templateUrl: './profile-cards.component.html',
  styleUrls: ['./profile-cards.component.css']
})
export class ProfileCardsComponent implements OnInit {

  @Input('profile') profile: Profile;

  constructor() { }

  ngOnInit() {
  }

}