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
  cards: any[] = [];
  displayedCards: any[] = [];

  constructor(private http: HttpClient) {}

  onSetClick(setCode: string) {
    let url = 'https://api.magicthegathering.io/v1/sets/' + setCode +'/booster';

    this.http.get<any>(url).subscribe(
      data => {
        this.cards = data.cards;
        this.displayedCards.push(...this.cards.filter(card => card.types[0] === 'Creature'))
        console.log(this.displayedCards)
        if(this.displayedCards.length >= 30) {
          this.displayedCards = this.displayedCards.slice(0, 30)
          console.log(this.displayedCards)
          this.cardsLoaded.emit(this.displayedCards);
        } else {
          this.onSetClick(setCode)
        }
      },
      error => {
        console.log('Error fetching sets:', error);
      }
    );
  }
}
