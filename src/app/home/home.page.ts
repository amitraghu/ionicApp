import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private route: ActivatedRoute) {}

  Goto(){
    this.router.navigate(['/recipes']);
  }

  reload(){
    this.router.navigate([''],
    {
      relativeTo: this.route
    });
  }

}
