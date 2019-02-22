import { Injectable } from '@angular/core';
import { Task } from './task';


let tasks: Task[] = [
  {profile_id: 1, title: 'A', description: 'First Task'},
  {profile_id: 1, title: 'B', description: 'Second Task'},
  {profile_id: 1, title: 'C', description: 'Third Task'},
  
  {profile_id: 2, title: 'A', description: 'First Task'},
  {profile_id: 2, title: 'B', description: 'Second Task'},
  {profile_id: 2, title: 'C', description: 'Third Task'},
  
  {profile_id: 3, title: 'A', description: 'First Task'},
  {profile_id: 3, title: 'B', description: 'Second Task'},
  {profile_id: 3, title: 'C', description: 'Third Task'},
  
  {profile_id: 4, title: 'A', description: 'First Task'},
  {profile_id: 4, title: 'B', description: 'Second Task'},
  {profile_id: 4, title: 'C', description: 'Third Task'},
  
  {profile_id: 5, title: 'A', description: 'First Task'},
  {profile_id: 5, title: 'B', description: 'Second Task'},
  {profile_id: 5, title: 'C', description: 'Third Task'},
  
  {profile_id: 6, title: 'A', description: 'First Task'},
  {profile_id: 6, title: 'B', description: 'Second Task'},
  {profile_id: 6, title: 'C', description: 'Third Task'},
  
  {profile_id: 7, title: 'A', description: 'First Task'},
  {profile_id: 7, title: 'B', description: 'Second Task'},
  {profile_id: 7, title: 'C', description: 'Third Task'},
];

@Injectable()
export class TaskDataService {

  constructor() { }

}