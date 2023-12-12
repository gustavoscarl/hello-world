import { Component } from '@angular/core'

@Component({
  selector: 'app-nested',
  template: `
  <app-stupid></app-stupid>
  <app-sucess></app-sucess>`,
})
export class NestedComponent {
  
}