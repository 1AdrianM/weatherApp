import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { WeatherService } from './Service/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
 weather:any;

  ngOnInit() {
      // This is to prevent the initial load of the app component from showing a loading indicator in the browser
    // Hide the menu by default and show it only when there is a child route to display
  }

  get_Weather(cityName:string, countryName:string){
  this._weather.getWeather(cityName, countryName).subscribe(
    res=>{
      this.weather=res;
      console.log(res)
    }
   )
}
constructor(private _weather:WeatherService){
}

SubmitLoc(cityName:HTMLInputElement, countryName:HTMLInputElement){

  this.get_Weather(cityName.value,countryName.value)
cityName.value='';
countryName.value='';
cityName.focus();
return false;
}

}


  
