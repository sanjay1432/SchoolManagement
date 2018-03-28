import { Component, OnInit } from '@angular/core';
import { AuthService } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { SignService } from '../service/sign.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signType: string;
  signuporin: boolean = false;
  private user: SocialUser;
  private loggedIn: boolean;
 
  constructor(private authService: AuthService, private signService: SignService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {

      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
 
  signOut(): void {
    this.authService.signOut();
  }

  onSignup(data){
    console.log(data?data.form.value:null)
    this.signuporin = true;
    this.signType ='Signup';
    this.signService.create(data?data.value:null);
  }
  onSignin(data){
    console.log(data)
    this.signuporin = true;
    this.signType ='Signin';
    
  }
}
