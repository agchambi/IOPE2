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
  ro=0;
  Aef=0;
  L=0;
  Lq=0;
  W=0;
  Wq=0;
  //Fin Variables
  Algoritmo(): void{
    let ro;
    ro=this.cola.A/this.cola.U;
    console.log(ro);
    let P0=0;
    this.ro=ro;
    var p = [];
    if(ro!=1)
    {
      P0=(1-ro)/(1-Math.pow(ro,this.cola.K+1));
      console.log("P0");
      console.log(P0);
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
    this.colammk();

  }
  colammk(){
    if(this.ro!=1)
    {
      let Aef=0;
      let L=0;
      let Lq=0;
      let W=0;
      let Wq=0;
      Aef=this.cola.A*(1-this.P[this.cola.K]);
      for(let i=0;i<=this.cola.K;i++)
      {
        L+=i*this.P[i];
        console.log(this.P[i]);
      }

      Lq=L-(1-this.P[0]);
      W=L/Aef;
      Wq=Lq/Aef;
      //salidas
      this.Aef=Aef;
      this.L=L;
      this.Lq=Lq;
      this.W=W;
      this.Wq=Wq;
    }

  }

}
