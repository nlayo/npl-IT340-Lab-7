import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';  
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, JsonPipe],                        
templateUrl: './app.component.html',
})
export class AppComponent {
  health: any;
  error = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getHealth().subscribe({
      next: (res) => (this.health = res),
      error: (err) => (this.error = err?.message || 'Request failed'),
    });
  }
}
