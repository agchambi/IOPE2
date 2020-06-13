import { Component, OnInit } from '@angular/core';
import { Colas2 } from '../colas2.model';

@Component({
  selector: 'app-colas3',
  templateUrl: './colas3.component.html',
  styleUrls: ['./colas3.component.css']
})
export class Colas3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   //Variales
   cola:Colas2={
    A:null,
    u:null,
    s:null,
    K:null
  }
  P:any;
  ro=0;
  Aef=0;
  L=0;
  Lq=0;
  W=0;
  Wq=0;
  //Fin Variables
  Algoritmo(){

  }
  p(){

  }

}
