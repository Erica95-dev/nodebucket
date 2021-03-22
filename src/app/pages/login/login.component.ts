/*
Title: Nodebucket
Author: Erica Perry
Date:03/20/21
Description: 
*/


/* importing all the files used in login */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, } from '@angular/router';
import { CookieService} from 'ngx-cookie-service';
import { HttpClient, HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/* LoginComponent exported */
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string;

  constructor(private fb: FormBuilder, private router: Router, private cookieService: CookieService, private http: HttpClient ) { }

  ngOnInit(): void {
    
/* setting my loginForm */
    this.loginForm = this.fb.group({
      empId: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    });
  }

login() {
  const empId = this.loginForm.controls['empId'].value;
  
/* creating a this statement */
  
  this.http.get('/api/employees/' + empId).subscribe(res => {
    if(res['data']) {
      this.cookieService.set('session_user', empId, 1);
      this.router.navigate(['/']);
    }
    /* creating a else statement */
    else{
      this.errorMessage = res['message'];
    
    }
  })
}
}
