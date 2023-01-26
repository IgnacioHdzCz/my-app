import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
 // template: "<p>aqui va un empleado!</p>",
  styleUrls: ['./empleado.component.css']
 // styles:["p{background-color:red};"]

})
export class EmpleadoComponent  {

  nombre="Ignacio";
  apellido="Hernandez";
  edad = 15;
  empresa = "Independiente";

  getNombre(){
    return this.nombre;
  }


  llamaNombre(value:String){

  }

  llamaApellido(value:String){

  }
  llamaEdad(value:String){

  }
  llamaEmpresa(value:String){

  }

  habilitacionCuadro=false;

  usuarioRegistrado=false;
  textoDeRegistro="No hay nadie registrado";


  getRegistroUsuario(){
    this.usuarioRegistrado=false;
  }

  setUsuarioRegistrado(event:Event){
   // alert("El usuario ha sido registrado");
   // this.textoDeRegistro="El usuario ha sido registrado";
   //alert(event.target);
   if((<HTMLInputElement>event.target).value=="si"){
    this.textoDeRegistro="El usuario se acaba de registrar";
   }else{
    this.textoDeRegistro="No hay nadie registrado";
   }
  }

}
