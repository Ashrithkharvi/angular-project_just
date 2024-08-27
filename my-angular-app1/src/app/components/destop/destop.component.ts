import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-destop',
  templateUrl: './destop.component.html',
  styleUrls: ['./destop.component.css']
})

export class DestopComponent {
  constructor(private router: Router) {}

  logout(): void {
    this.router.navigate(['/logout']);
  }
}
