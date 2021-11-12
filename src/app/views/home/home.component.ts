import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo!: string;
  public texto!: string;

  classTooDiv ={};

  constructor() { 
    this.classTooDiv ={
      "text-success": true


    };
    
  }

  ngOnInit() {
  
  
    this.titulo! = " -----⏬VEJA OPINIÕES DOS MELHORES JOGOS----- ";
    this.texto! = "TUDO QUE VOCÊ PROCURA SOBRE JOGOS ESTÁ AQUI";
  
  }
}

