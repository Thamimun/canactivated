import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
})
export class loginComponent {
    constructor(private route:Router) { }
title:any;
addvalue(){
  this.title='barath'
  localStorage.setItem("name",this.title);
  this.route.navigate(['/dashboard']);

}

}
