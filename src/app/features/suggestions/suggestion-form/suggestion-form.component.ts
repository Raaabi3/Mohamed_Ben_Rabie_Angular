import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuggestionsService } from '../services/suggestions.service';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent implements OnInit {
  suggestionForm!: FormGroup;

  categories: string[] = [
    'Infrastructure et batiments',
    'Technologie et services numeriques',
    'Restauration et cafeteria',
    'Hygiene et environnement',
    'Transport et mobilite',
    'Activites et evenements',
    'Securite',
    'Communication interne',
    'Accessibilite',
    'Autre'
  ];

  constructor(
    private fb: FormBuilder,
    private suggestionsService: SuggestionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.suggestionForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[A-Z][a-zA-Z]*$')]],
      description: ['', [Validators.required, Validators.minLength(30)]],
      category: ['', [Validators.required]],
      date: [this.getSystemDate(), [Validators.required]],
      status: ['en attente', [Validators.required]]
    });
  }

  submit(): void {
    if (this.suggestionForm.invalid) {
      this.suggestionForm.markAllAsTouched();
      return;
    }

    const formValue = this.suggestionForm.value;

    this.suggestionsService.addSuggestion({
      title: formValue.title,
      description: formValue.description,
      category: formValue.category,
      date: this.parseFrDate(formValue.date),
      status: formValue.status
    });

    this.router.navigate(['/suggestions']);
  }

  private getSystemDate(): string {
    return new Intl.DateTimeFormat('fr-FR').format(new Date());
  }

  private parseFrDate(dateStr: string): Date {
    const parts = dateStr.split('/');
    if (parts.length !== 3) {
      return new Date();
    }

    const day = Number(parts[0]);
    const month = Number(parts[1]) - 1;
    const year = Number(parts[2]);

    return new Date(year, month, day);
  }

  get title() {
    return this.suggestionForm.get('title');
  }

  get description() {
    return this.suggestionForm.get('description');
  }

  get category() {
    return this.suggestionForm.get('category');
  }

}
