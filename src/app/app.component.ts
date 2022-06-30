import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // TODO: Clean up inline styling. Move to global stylesheet on encapsulate within component styles.
  // TODO: Fix "Manage Recipe" dropdown. Dropdown Directive is not available in recipe module.

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
