import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-cadastro-jogos',
  templateUrl: './cadastro-jogos.component.html',
  styleUrls: ['./cadastro-jogos.component.css']
})
export class CadastroJogosComponent {


  exibir(){
    let id: string = (<HTMLInputElement>document.getElementById("inputId")).value;

    if(id == ""){
      alert("preencha o campo ID")
    }else{
      alert("você clicou em EXIBIR")
    }
  };
  cadastrar(){
    let id: string = (<HTMLInputElement>document.getElementById("inputId")).value;
    let nome: string = (<HTMLInputElement>document.getElementById("inputNome")).value;
    let tipo: string = (<HTMLInputElement>document.getElementById("inputTipo")).value;
    let empresa: string = (<HTMLInputElement>document.getElementById("inputEmpresa")).value;

    if(id ==""){
      alert("Preencha todos os CAMPOS");
    }else if (nome ==""){
      alert("Preencha todos os CAMPOS");
    }else if (tipo ==""){
      alert("Preencha todos os CAMPOS");
    }else if (empresa ==""){
      alert("Preencha todos os CAMPOS");
    }else{
      alert("você clicou em CADASTRAR")
    }
  };
  atualizar(){
    let nome: string = (<HTMLInputElement>document.getElementById("inputNome")).value;

    if (nome ==""){
      alert("preencha o Nome");
    }else{
      alert("você clicou em ATUALIZAR")
    }
  };
  deletar(){
    let id: string = (<HTMLInputElement>document.getElementById("inputId")).value;
    
    
  
  if (id ==""){
    alert("preencha pelomenos o ID do jogo");
  }else{
    alert("você clicou em DELETAR")
  }
};

}
