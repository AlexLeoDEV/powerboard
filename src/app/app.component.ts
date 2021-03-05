import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PowerBoard';
  isSidenavOpened = true;
  sidenavClass = 'sidenav-open';
  panelOpenState = false;

  toggleSideNav(): void {
    this.sidenavClass = this.isSidenavOpened ? 'sidenav-open' : 'sidenav-close';
  }
}
