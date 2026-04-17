import { Injectable } from '@angular/core';
import { Suggestion } from '../../../../models/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {
  private suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Infrastructure',
      description: 'Renforcer la maintenance des salles et equipements du campus.',
      category: 'Infrastructure et batiments',
      date: new Date('2025-11-23'),
      status: 'en attente',
      nbLikes: 0
    },
    {
      id: 2,
      title: 'Transport',
      description: 'Ajouter plus de navettes aux heures de pointe pour les etudiants.',
      category: 'Transport et mobilite',
      date: new Date('2025-11-23'),
      status: 'en attente',
      nbLikes: 0
    },
    {
      id: 3,
      title: 'Securite',
      description: 'Ameliorer l eclairage exterieur et la surveillance nocturne du site.',
      category: 'Securite',
      date: new Date('2025-11-23'),
      status: 'en attente',
      nbLikes: 0
    }
  ];

  getSuggestions(): Suggestion[] {
    return [...this.suggestions];
  }

  getSuggestionById(id: number): Suggestion | undefined {
    return this.suggestions.find((suggestion) => suggestion.id === id);
  }

  addSuggestion(data: Omit<Suggestion, 'id' | 'nbLikes'>): void {
    const maxId = this.suggestions.reduce((max, current) => Math.max(max, current.id), 0);

    this.suggestions.push({
      id: maxId + 1,
      title: data.title,
      description: data.description,
      category: data.category,
      date: data.date,
      status: data.status,
      nbLikes: 0
    });
  }
}
