/*
Title: baselayout
 * Author: Erica Perry
 * Date:3/25/21
 * Description: baselayout
*/


/**
*import
* export class
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  year: number = Date.now();

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }
  // where you would sign out from the login page that was created

  signOut() {
    // calling the cookie services and could also delete browser entries
    this.cookieService.deleteAll();
    // takes you to the signin page.
    this.router.navigate(['/session/login']);

  }
}
