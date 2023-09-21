import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  public title = 'Welcome...';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'Welcome again...';
    }, 5000);
  }
}
