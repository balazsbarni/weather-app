import { Injectable } from '@angular/core';
import { res } from './res';
import { LOCATIONS } from './mock-locations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from './Location';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  URL = 'http://api.openweathermap.org/data/2.5/group';

  getLocations() {
    const params = new HttpParams().set('id', '671964,673441,7284828,1283240')
                                   .set('appid', '950a1193e2fdf2695dbf30415dc4cb4b')
                                   .set('units', 'metric');
    return this.http.get<res>(this.URL, { params });
  }
}
