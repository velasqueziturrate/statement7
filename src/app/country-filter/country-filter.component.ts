import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.scss']
})

export class CountryFilter implements OnInit {
  @Input() countryList: string[];

  filteredCountryList: string[];

  searchText: string;

  ngOnInit() {
    this.filteredCountryList = this.countryList;
  }

  change(searchText: any){
    if(searchText){
      this.filteredCountryList = this.countryList.filter((element) => element.toLowerCase().includes(searchText.toLowerCase()))
    }else{
      this.filteredCountryList = this.countryList;
    }
  }

}
