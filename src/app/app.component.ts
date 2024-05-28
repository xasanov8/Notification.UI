import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Nitification';
  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.onReceiveNotification((message: string) => {
      window.alert(message)
    });
  }
}
