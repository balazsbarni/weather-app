import { Component, OnInit } from '@angular/core';
import { Location } from '../Location';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs';
import { res } from '../res';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})

export class LocationComponent implements OnInit {

  constructor(private weatherService: WeatherService) {}

  locations: Location[];

  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
   this.weatherService.getLocations()
     .subscribe(x => this.transformLocations(x.list), err => console.log(err), () => console.log(1));
  }

  transformLocations(x) {
    console.log("JHrll")
    this.locations = x.map(loc => new Location(loc.name, loc.sys.country, loc.main.temp, loc.weather[0].description));
    console.log(this.locations);
  }
}
