import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocation-identifier',
  templateUrl: './geolocation-identifier.component.html',
  styleUrls: ['./geolocation-identifier.component.scss']
})
export class GeolocationIdentifierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Geolocation Identifier")
  }

}
