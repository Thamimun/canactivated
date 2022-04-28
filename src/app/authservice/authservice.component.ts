import {Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class Authservice {

  constructor() { }

 loggedIn():any{

 if (localStorage.getItem('name')){
   return true;
 }
 else{
   return false
 }
 }

}
