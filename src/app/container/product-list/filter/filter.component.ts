import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  // Using @Input decorator to pass data from parent component(product-list) to child component
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0;

  // Using @Output decorator to pass data from child component(filter-component) to parent component(product-list)
  @Output() selectedFilterRadioButtonChanged: EventEmitter<string> =
    new EventEmitter<string>(); // Custom event binding by using porperty called selectedFilterRadioButtonChanged and using EventEmitter class.

  // Keeping track of the selected filter radio button in child component
  selectedFilterRadioButton: string = 'all';

  onSelectedFilterRadioButtonChanged() {
    //console.log(this.selectedFilterRadioButton);
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }
}
