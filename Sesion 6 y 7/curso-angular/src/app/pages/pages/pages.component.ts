import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { 
  if(!authService.isAuthenticated()){
    this.router.navigateByUrl('logout');
  }
  }

  ngOnInit(): void {
  }

}
