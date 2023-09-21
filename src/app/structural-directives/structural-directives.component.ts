import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: [ './structural-directives.component.scss' ]
})
export class StructuralDirectivesComponent implements OnInit {
  public condition: boolean = true // ngIf

  public fruits: string[] = [ 'Apple', 'Banana', 'Grape' ] // ngFor
  public currentFruit: string = ''

  public name: string = 'Mariana' // ngSwitch

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.condition = (this.condition ? false : true)
    }, 5000);
  }

  public addFruit(): void {
    this.fruits.push(this.currentFruit)
    this.currentFruit = ''
  }

  public alertFruit(fruit: string): void {
    alert(fruit)
  }
}
