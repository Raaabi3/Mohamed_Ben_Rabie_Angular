import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../../../../models/suggestion';
import { SuggestionsService } from '../services/suggestions.service';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrl: './suggestion-list.component.css'
})
export class SuggestionListComponent implements OnInit {
  suggestions: Suggestion[] = [];

  constructor(private suggestionsService: SuggestionsService) {}

  ngOnInit(): void {
    this.suggestions = this.suggestionsService.getSuggestions();
  }
}
