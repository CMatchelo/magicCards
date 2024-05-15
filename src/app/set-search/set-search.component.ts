// set-search.component.ts

import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-set-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './set-search.component.html',
  styleUrls: ['./set-search.component.css']
})
export default class SetSearchComponent {
  @Output() setsLoaded = new EventEmitter<any[]>();
  @Output() cardsLoaded = new EventEmitter<any[]>();
  @Output() isLoading = new EventEmitter();
  name: string = '';
  block: string = '';
  hasError: boolean = false;

  constructor(private http: HttpClient) {}

  searchSets() {
    this.isLoading.emit(true)
    this.hasError = false;
    let url = 'https://api.magicthegathering.io/v1/sets';
    if (this.name) {
      url += `?name=${this.block}|${this.name}`;
    } else {
      url += `?block=${this.block}`;
    }

    this.http.get<any>(url).subscribe(
      data => {
        this.cardsLoaded.emit([]);
        console.log(this.cardsLoaded)
        this.setsLoaded.emit(data.sets);
        this.isLoading.emit(false)
      },
      error => {
        console.log('Error fetching sets:', error);
        this.isLoading.emit(false)
        this.hasError = true;
      }
    );
  }
}
