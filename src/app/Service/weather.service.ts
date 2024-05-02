import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
URI:string;
apiKey: string = "9c50140b78824034a72e0276708a7719"

  constructor(private http:HttpClient) { 
this.URI=`https://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}`;

  }
getWeather(cityName:string, countryName:string){
return this.http.get(`${this.URI}&q=${cityName},${countryName}`)
}
}
