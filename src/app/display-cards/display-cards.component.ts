import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-display-cards',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './display-cards.component.html',
  styleUrl: './display-cards.component.css'
})
export default class DisplayCardsComponent {
  @Input() cards: any[] = [];

  displayedCards: any[] = [];

  constructor() {
    this.filterAndSliceCards();
  }

  filterAndSliceCards() {
    this.displayedCards = this.cards.filter(card => card.types[0] === 'Creature').slice(0, 30);
    console.log(this.displayedCards)
  }

}
