import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Modelo1(){
    this.router.navigate(['/Modelo1']);
  }
  Modelo2(){
    this.router.navigate(['/Modelo2']);
  }
  Modelo3(){
    this.router.navigate(['/Modelo3']);
  }
  Modelo4(){

  }

}
