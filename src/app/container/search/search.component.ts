import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
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

  // First property of @ViewChild decorator is "read" property: Use it to read the differrent toke from the queried elements.
  // Second property of @ViewChild decorator is "static" property: Determines when the query is resolved.
  //          True is when the view is initialized (before the first change detection) for the first time.
  //          False if you want it to be re-evaluated on every change detection cycle.
  @ViewChild('searchInput') searchInputElement: ElementRef; // 2. Create & accessing a reference to the input element

  updateSearchText() {
    //this.searchText = event.target.value;
    //console.log(inputEl.value);
    this.searchText = this.searchInputElement.nativeElement.value;
    this.searchTextChange.emit(this.searchText);
  }
}
