import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent {
  public name: string = 'Guilherme'
  public age: number = 22
  public disabled: boolean = true

  public position: { x: number, y: number } = { x: 0, y: 0 }

  public alertInformation = (value: string) => alert(value)

  public locateMouse = (value: MouseEvent) => {
    console.log(value.offsetX, value.offsetY)

    this.position.x = value.offsetX
    this.position.y = value.offsetY
  }
}
