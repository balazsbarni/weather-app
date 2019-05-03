import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() { }

  city = 'Udvarhely';
  country = 'Romania';
  temperature = 20;
  status = 'sunny';

  ngOnInit() {
  }
}
