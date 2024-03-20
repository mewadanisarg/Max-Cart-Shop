import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0;

  @Output() selectedFilterRadioButtonChanged: EventEmitter<string> =
    new EventEmitter<string>();

  // Keeping track of the selected filter radio button in child component
  selectedFilterRadioButton: string = 'all';
  // What should
  onSelectedFilterRadioButtonChanged() {
    console.log(this.selectedFilterRadioButton);
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }
}
