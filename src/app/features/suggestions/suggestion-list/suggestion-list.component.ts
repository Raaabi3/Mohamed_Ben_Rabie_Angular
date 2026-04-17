import { Component } from '@angular/core';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrl: './suggestion-list.component.css'
})
export class SuggestionListComponent {
  suggestions = [
    { id: 1, title: 'Dark mode', description: 'Add a dark theme option for users.' },
    { id: 2, title: 'Email notifications', description: 'Notify users for important updates.' },
    { id: 3, title: 'Profile picture', description: 'Allow users to upload avatars.' }
  ];
}
