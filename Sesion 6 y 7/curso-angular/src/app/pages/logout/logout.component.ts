
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private route: Router, private authService: AuthService) { 
   this.authService.logout();
    route.navigateByUrl('/login');
  }

  ngOnInit(): void {
  }

}
