import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-states',
  imports: [CommonModule, RouterLink],
  templateUrl: './states.html',
  styleUrl: './states.css'
})
export class States {

  region = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.region = params['region'] || '';
    });
  }
}