import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auction-stars',
  templateUrl: './stars.html',
  styles: [`.starrating { color: #d17581; }`],
  inputs: ['rating', 'count']
})

export class StarsComponent implements OnInit {
  count: number = 5;
  rating: number = 0;
  stars: boolean[] = [];

  ngOnInit() {
    for (let i = 1; i <= this.count; i++) {
      this.stars.push(i > this.rating);
    }

  }
}
