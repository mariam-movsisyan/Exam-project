import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public pages = ['select-dates', 'personal-details', 'guests', 'booking']
  public i = 0
  constructor(
    private router: Router
  ) {

  }
  goNextPage() {
    if(this.i < this.pages.length-1){
      this.i++
      this.router.navigate([this.pages[this.i+1]])
    }
  }

  goPreviousPage(){
    console.log(this.i);
    
    if(this.i >= 1){
      this.i--
      console.log(this.i);
      
      this.router.navigate([this.pages[this.i-1]])
    }
  }
}
