import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/users">User</a>
      |
      <a routerLink="/viestit">Messages</a>
    </nav>
    <router-outlet />
  `,
  imports: [RouterOutlet, RouterLink],
})
export class App {}
