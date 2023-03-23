import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'javascript-validation-form';


  //   let phoneError:any=document.getElementById("phone-error");
  //   let emailError:any=document.getElementById("email-error");
  //   let messageError:any=document.getElementById("message-error");
  //   let submitError:any=document.getElementById("submit-error");
 validateName() {
      let nameError: any = document.getElementById("name-error");
      let name: any = document.getElementById("contact-name");
      let contactName = name.value;
      if (contactName.length == 0) {
        nameError.innerHTML = "name is required";
      }
      else {
        nameError.innerHTML = "";
      }
      if (!contactName.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)) {
        nameError.innerHTML = "Write full name";
        // return false;
      }
      nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
      return true;
    }
    validatePhone():any{
      let phone:any=(document.getElementById("phone-number")as any).value;
      let phoneError:any=document.getElementById("phone-error");
     if(phone.length==0){
      phoneError.innerHTML="phone number is required";
     }
     else{
      phoneError.innerHTML="";
     }
     if(phone.length!=10){
      phoneError.innerHTML="phone no should be 10 digits";
     }
    if(!phone.match(/^[0-9]{10}$/)){
      phoneError.innerHTML="Only digits";
     }
     phoneError.innerHTML ='<i class="fa-regular fa-circle-check"></i>';
    }
    validateEmail():any{
      let email:any=(document.getElementById("email")as any).value;
      let emailError:any=document.getElementById("email-error");
      if(email.length==0){
        emailError.innerHTML="Email is required "
      }
      if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[.\][a-z]{2,4}$/)){
        emailError.innerHTML="Invalid email"
      }
      emailError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    }
    validateMessage(){
      let contactMessage:any=(document.getElementById("contact-message")as any).value;
      let messageError:any=document.getElementById("message-error");
      var required=30;
      var left=required-contactMessage.length;
      if(contactMessage.length==0){
        messageError.innerHTML="message is required";
      }
      if(left>0){
        messageError.innerHTML=left+'more character';
      }
      messageError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    }
    validateForm(){
      let submitError:any=document.getElementById("submit-error");
      if(! this.validateName() || !this.validateEmail()){
        submitError.innerHTML="please fix error to submit"
      }
    }
  }
