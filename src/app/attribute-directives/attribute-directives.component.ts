import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: [ './attribute-directives.component.scss' ]
})
export class AttributeDirectivesComponent implements OnInit {
  public active: boolean = true //ngClass

  public name: string = "" //ngModel

  public list: Array<{ name: string }> = [ { name: 'Guilherme' }, { name: 'Fernanda' } ] //ng-template

  public date: Date = new Date()

  public lastname: Promise<string | null>

  constructor() {
    this.lastname = this.getLastname()
  }

  ngOnInit(): void {
    setInterval(() => {
      this.active = (this.active ? false : true)
    }, 3000);
  }

  public getLastname(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Fornagiero")
      }, 3000)
    })
  }
}
