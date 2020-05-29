import { Component, OnInit } from '@angular/core';
import { Colas2 } from '../colas2.model';

@Component({
  selector: 'app-colas2',
  templateUrl: './colas2.component.html',
  styleUrls: ['./colas2.component.css']
})
export class Colas2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //Variables
  cola:Colas2={
    A:null,
    s:null,
    u:null,
    K:null
  };
  ro=0;
  Aef=0;
  Ls=0;
  L=0;
  Lq=0;
  W=0;
  Ws=0;
  Wq=0;
  pn=0;
  c=0;
  P:any;
  //Fin Variables
  Algoritmo()
  {
    var P=[];
    this.ro=this.cola.A/(this.cola.s*this.cola.u);
    console.log(this.cola);
    if(this.ro!=1)
    {
      let N=0;
      let p0=0;
      let a=0;
      let b=0;
      if(this.cola.A==0)
      {
       N=this.cola.K+this.cola.s-1;
      }
      else{}
      for(let n=0;n<=this.cola.s;n++)
      {
        console.log(n);
        a+=this.factorial(this.cola.K)/(this.factorial(this.cola.K-n)*this.factorial(n))*Math.pow((this.cola.A/this.cola.u),n);

      }
      for(let n1=this.cola.s+1;n1<=this.cola.K;n1++)
      {
        console.log(n1);
        b+=this.factorial(this.cola.K)/(this.factorial(this.cola.K-n1))*(1/(this.factorial(this.cola.s)*(Math.pow(this.cola.s,n1-this.cola.s))))*Math.pow((this.cola.A/this.cola.u),n1);
      }
      console.log("a");
      console.log(a);
      console.log("b");
      console.log(b);
      p0=1/(a+b);
      console.log("P0");
      console.log(p0);
      P.push(p0);
      let aux=0;
      if(N<=this.cola.s && N>=0)
      {
        for(;N<=this.cola.s;N++){
          aux=(this.factorial(this.cola.K)/(this.factorial(this.cola.K-N)*this.factorial(N)))*(Math.pow(this.ro,N))*P[0];
          P.push(aux);
        }

      }
      else
      {
        aux=this.factorial(this.cola.K)/(this.factorial(this.cola.K-N))*(1/(this.factorial(this.cola.s)*(Math.pow(this.cola.s,N-this.cola.s))))*Math.pow((this.cola.A/this.cola.u),N);
        P.push(aux);
      }
      this.Lq=(1/this.factorial(this.cola.s))*Math.pow((this.cola.A/this.cola.u),this.cola.s)*
      (this.ro/Math.pow((1-this.ro),2))*P[0]*((1-Math.pow(this.ro,this.cola.K-this.cola.s))-(this.cola.K-this.cola.s)
      *(Math.pow(this.ro,this.cola.K-this.cola.s))*(1-this.ro));
      for(let n=0;n<=this.cola.K;n++)
      {
        this.Ls+=n*P[n];
      }
      this.Aef=this.cola.A*(this.cola.K-this.Ls);
      this.Ws=this.Ls/this.Aef;
      this.Wq=this.Lq/this.Aef;

    }
    this.P=P;
  }

  factorial (n):number {
    var total = 1;
    for (let i=1; i<=n; i++) {
      total = total * i;
    }
    return total;
  }


}
