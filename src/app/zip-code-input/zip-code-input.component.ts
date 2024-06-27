import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-zip-code-input',
  templateUrl: './zip-code-input.component.html',
  styleUrls: ['./zip-code-input.component.scss']
})
export class ZipCodeInputComponent {
  @Output() zipCodeSubmit = new EventEmitter<string>();
  zipCode: string = '';

  onSubmit() {
    this.zipCodeSubmit.emit(this.zipCode);
  }
}
