import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  geoJsonData: any;
  loading: boolean = false;

  onZipCodeSubmit(zipCode: string) {
    this.loading = true;

    // mock
    this.geoJsonData = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [-118.4164, 34.0668],
                [-118.4164, 34.103],
                [-118.3944, 34.103],
                [-118.3944, 34.0668],
                [-118.4164, 34.0668]
              ]
            ]
          },
          "properties": {
            "zipcode": "90210"
          }
        }
      ]
    }
    

    this.loading = false;
    
    // Call the Boundaries.IO API and handle the response
    // this.boundariesService.getZipCodeBoundary(zipCode).subscribe(data => {
    //   this.geoJsonData = data;
    //   this.loading = false;
    // }, error => {
    //   this.loading = false;
    //   // TODO: handle error
    // });
  }
}
