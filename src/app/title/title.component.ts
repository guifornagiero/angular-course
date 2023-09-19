import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  public title = 'Bem vindo...';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'Bem vindo carregado...';
    }, 5000);
  }
}
