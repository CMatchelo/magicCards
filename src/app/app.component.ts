import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import SetSearchComponent from './set-search/set-search.component';
import SetListComponent from './set-list/set-list.component';
import DisplayCardsComponent from './display-cards/display-cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule, SetSearchComponent, SetListComponent, DisplayCardsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'magicCards';
  loadedSets: any[] = [];
  loadedCards: any[] = [];
  isLoading: boolean = false;

  constructor() { }

  onSetsLoaded(sets: any[]) {
    this.loadedSets = sets;
  }
  onCardsLoaded(cards: any[]) {
    this.loadedCards = cards;
  }
  onSendRequest(loading: boolean) {
    this.isLoading = loading;
    console.log("Request sent with:", this.isLoading)
  }
}
