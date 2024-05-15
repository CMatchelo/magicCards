import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import SetSearchComponent from './set-search/set-search.component';
import SetListComponent from './set-list/set-list.component';
import DisplayCardsComponent from './display-cards/display-cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule, SetSearchComponent, SetListComponent, DisplayCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'magicCards';
  loadedSets: any[] = [];
  loadedCards: any[] = [];

  constructor() {}

  onSetsLoaded(sets: any[]) {
    this.loadedSets = sets;
  }
  onCardsLoaded(cards: any[]) {
    this.loadedCards = cards;
  }
}
