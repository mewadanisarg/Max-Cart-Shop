import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';
  //1. Create an Event to send the data to Parent Component(Container Component)
  @Output() searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {}
  updateSearchText(inputEl: HTMLInputElement) {
    //this.searchText = event.target.value;
    //console.log(inputEl.value);
    this.searchText = inputEl.value;
    this.searchTextChange.emit(this.searchText);
  }
}
