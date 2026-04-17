import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css'
})
export class SuggestionDetailsComponent implements OnInit {
  suggestionId = 0;
  suggestion: { id: number; title: string; description: string } | undefined;

  private readonly suggestions = [
    { id: 1, title: 'Dark mode', description: 'Add a dark theme option for users.' },
    { id: 2, title: 'Email notifications', description: 'Notify users for important updates.' },
    { id: 3, title: 'Profile picture', description: 'Allow users to upload avatars.' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.suggestionId = Number(params.get('id'));
      this.suggestion = this.suggestions.find((item) => item.id === this.suggestionId);
    });
  }

}
