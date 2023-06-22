import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/Dashboard', icon: 'mail' },
    { title: 'Manage Pig', url: '/folder/Manage Pig', icon: 'paper-plane' },
    { title: 'Set Schedules', url: '/folder/Set Schedules', icon: 'heart' },
    { title: 'Data Entry', url: '/folder/Data Entry', icon: 'archive' },
  ];
}
