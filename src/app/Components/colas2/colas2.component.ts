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
  Rho=0;
  Aef=0;
  L=0;
  Lq=0;
  W=0;
  Wq=0;
  P:any;
  //Fin Variables
  Algoritmo()
  {
    this.Probabilidades();
    this.cola_MMsK();
  }

  cola_MMsK() {
    let Lq;
    let L;
    let Aef;
    let W;
    let Wq;
    let rho=this.cola.A/(this.cola.s*this.cola.u);
    let aux=this.cola.A/this.cola.u;
    let s=this.cola.s;
    let k=this.cola.K;
    let sum1=0;
    let sum2=0;
    if(rho!=1)
    {
      Lq=((this.P[0]*Math.pow(aux,s)*rho))/(this.factorial(s)*Math.pow((1-rho),2))
    *((1-Math.pow(rho,k-s))-(((k-s)*Math.pow(rho,(k-s))*(1-rho))));
    for(let n=0;n<=(s-1);n++)
    {
      sum1+=(n*this.P[n]);
      sum2+=(this.P[n]);
    }
    L=(sum1+Lq+s)*sum2;
    console.log("L");
    console.log(sum2);
    Aef=this.cola.A*(1-this.P[k]);
    Wq=Lq/Aef;
    W=L/Aef;
    this.Rho=rho;
    this.Aef=Aef;
    this.L=L;
    this.Lq=Lq;
    this.W=W;
    this.Wq=Wq;
    }
    else{
      alert("El RHO es: "+rho+ " por lo tanto la cola Explota");
      alert("Calculando por la otra formula");
      for(let n=0;n<=k;n++)
      {
        sum1+=(n*this.P[n]);
      }
      for(let n=s;n<=k;n++)
      {
        sum2+=(n-s)*this.P[n];
      }
      L=sum1;
      Lq=sum2;
      Aef=this.cola.A*(1-this.P[k]);
      Wq=Lq/Aef;
      W=L/Aef;
      this.Rho=rho;
      this.Aef=Aef;
      this.L=L;
      this.Lq=Lq;
      this.W=W;
      this.Wq=Wq;
    }
  }
  Probabilidades(){
    let p0;
    var P=[];
    let rho=this.cola.A/(this.cola.s*this.cola.u);
    let s=this.cola.s;
    let sum1=0;
    let sum2=0;
    let k=this.cola.K;
    let aux=(this.cola.A/this.cola.u);
    for(let n=0;n<=s; n++)
    {
      sum1+=(Math.pow(aux,n)/this.factorial(n))+((Math.pow(aux,s)/this.factorial(s)));
    }
    for(let n=s+1;n<=k;n++)
    {
      sum2+=Math.pow(rho,(n-s));
    }
    p0=Math.pow(sum1*sum2,-1);
    P.push(p0);
    let aux1=0;
    for(let n=1;n<=k;n++)
    {
      if(n<=s)
      {
        aux1=(Math.pow(aux,n)/this.factorial(n))*p0;
        P.push(aux1);
      }
      else
      {
        aux1=(Math.pow(aux,n)/(this.factorial(s)*Math.pow(s,n-s))*p0);
        P.push(aux1);
      }
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
