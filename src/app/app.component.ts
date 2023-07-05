import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularRouting';

  constructor(private activatedRoute: ActivatedRoute ,private authService: AuthService){}


  ngOnInit(){
this.activatedRoute.fragment.subscribe((value)=>{
  console.log(value);
  this.jumpTo(value);
})
  }

  jumpTo(section){
   document.getElementById(section).scrollIntoView({behavior: 'smooth'})
  }


  login(){
this.authService.login();
  }
  logout(){
this.authService.logout();
  }
}
