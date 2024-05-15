import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-set-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './set-list.component.html',
  styleUrl: './set-list.component.css'
})
export default class SetListComponent {
  @Input() sets: any[] = [];
  @Output() cardsLoaded = new EventEmitter<any[]>();
  @Output() setsLoaded = new EventEmitter<any[]>();
  @Output() isLoading = new EventEmitter();
  cards: any[] = [];
  displayedCards: any[] = [];
  hasError: boolean = false;

  constructor(private http: HttpClient) {}

  onSetClick(setCode: string) {
    let url = 'https://api.magicthegathering.io/v1/sets/' + setCode +'/booster';
    this.isLoading.emit(true)
    this.hasError = false
    this.http.get<any>(url).subscribe(
      data => {
        this.setsLoaded.emit([]);
        this.cards = data.cards;
        this.displayedCards.push(...this.cards.filter(card => card.types[0] === 'Creature'))
        console.log(this.displayedCards)
        if(this.displayedCards.length >= 30) {
          this.displayedCards = this.displayedCards.slice(0, 30)
          console.log(this.displayedCards)
          this.cardsLoaded.emit(this.displayedCards);
          this.isLoading.emit(false)
        } else {
          this.isLoading.emit(true)
          this.onSetClick(setCode)
        }
      },
      error => {
        console.log('Error fetching sets:', error);
        this.isLoading.emit(false)
        this.hasError = true
      }
    );
  }
}
