import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdeactivateComponent } from "../Services/candeactivate-guard.service"




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, 
IdeactivateComponent

{

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ProcessForm(){
    //Write logic to process the form
    this.router.navigate(['About']);
  }


  firstName;
  lastName;
  country;
  subject;
  canExit(){
    if(this.firstName || this.lastName || this.subject || this.country){
      return confirm('you have unsaved changes! do you really want to discard these changes?')
    }else{
      return true; //if the user not entered anything user has to be exited
    }
  }

}
