import { Component, OnInit } from '@angular/core';
import { Colas1 } from '../colas1.model';

@Component({
  selector: 'app-colas1',
  templateUrl: './colas1.component.html',
  styleUrls: ['./colas1.component.css']
})
export class Colas1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //Variales
  cola:Colas1={
    A:null,
    U:null,
    K:null
  }
  P:any;
  
  Algoritmo(): void{
    let ro;
    ro=this.cola.A/this.cola.U;
    console.log(ro);
    let P0=0;
    var p = [];
    if(ro!=1)
    {
      P0=(1-ro)/(1-Math.pow(ro,this.cola.K+1));
      p.push(P0);
    }

    for(let i=1;i<=this.cola.K;i++)
    {
      let aux=P0*(Math.pow(ro,i));
      p.push(aux);
    }
    console.log("P")
    console.log(p);
    this.P=p;
  }
  colammk(){

  }

}
