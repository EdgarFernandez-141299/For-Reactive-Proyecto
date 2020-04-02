import { Component, OnInit } from '@angular/core';
import { DataDbService} from '../../services/data-db.service';
import { FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  createFormGroup(){
    return new  FormGroup({
      email : new FormControl(''),
      name : new FormControl(''),
      message : new FormControl('')
    });
  }

  contactForm: FormGroup;
  ejecuto:boolean;

  constructor(private dbData: DataDbService) { 
    this.contactForm=this.createFormGroup();
  }

  
  
  ngOnInit(): void {
  }

  onResetForm(){
    this.contactForm.reset();
  }

  onSaveForm(){
    this.valLetNum();
    if(this.ejecuto==true){   }else if(this.ejecuto==false){      
      this.dbData.saveMessage(this.contactForm.value);
      console.log("Datos Guardados Con Exito!!!");
    }    
  }
  

  valLetNum(){    
    let parametro = (document.getElementById('txtNom') as HTMLInputElement).value;
    var patron = /^[a-zA-Z0-9\s]*$/;
    
    //console.log(parametro.search(patron));

    if(parametro.search(patron)== -1){     
       window.alert('No se Permiten Teclas Especiales, Intentelo De Nuevo');
       this.ejecuto=true;       
    }else if(parametro.search(patron)== 0){
      this.ejecuto=false;
    }

  }

  

}
