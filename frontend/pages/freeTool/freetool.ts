import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Layout } from '../layout/layout';

@Component({
  selector: 'app-free-tools',
  templateUrl: './freetool.html',
  imports: [Layout],
  styleUrls: ['./freetool.scss'] 
})
export class FreeToolsComponent {

  constructor(private router: Router) {}

  goToSOP() {
    this.router.navigate(['/sop-maker']);
  }

}