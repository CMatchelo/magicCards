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
  name: string = '';
  block: string = '';

  constructor(private http: HttpClient) {}

  searchSets() {
    let url = 'https://api.magicthegathering.io/v1/sets';
    if (this.name) {
      url += `?name=${this.name}`;
    }
    if (this.block) {
      url += `?block=${this.block}`;
    }

    this.http.get<any>(url).subscribe(
      data => {
        this.setsLoaded.emit(data.sets);
      },
      error => {
        console.log('Error fetching sets:', error);
      }
    );
  }
}
