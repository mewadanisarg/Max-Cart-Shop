import { Component } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  searchText: string = '';
  updateSearchText(event: any) {
    this.searchText = event.target.value;
  }

  setSearchText(value: string) {
    this.searchText = value;
  }
}
