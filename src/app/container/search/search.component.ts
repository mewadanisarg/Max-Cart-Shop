import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = 'Iphone 16';

  updateSearchText(event: any) {
    this.searchText = event.target.value;
  }
}
