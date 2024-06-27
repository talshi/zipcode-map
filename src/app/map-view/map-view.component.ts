import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { GeoJSONSource } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit, OnChanges {
  @Input() geoJsonData: any;
  map: mapboxgl.Map | null = null;
  style = 'mapbox://styles/mapbox/streets-v11';
  mapboxAccessToken = 'pk.eyJ1IjoidGFsc2hpcmFuIiwiYSI6ImNseHhsOXNuZzAzenIya3NtZXkwc3Q0eGgifQ.raHngc-xnDradTl4ibZQFQ';

  ngOnInit() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 5,
      center: [-98.35, 39.50], // Center of USA
      accessToken: this.mapboxAccessToken // Pass the access token here
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['geoJsonData'] && this.geoJsonData) {
      this.updateMap(this.geoJsonData);
    }
  }

  updateMap(geoJsonData: any) {
    if (this.map) {
      const source = this.map.getSource('zipBoundary') as GeoJSONSource;
      if (source) {
        source.setData(geoJsonData);
      } else {
        this.map.addSource('zipBoundary', {
          type: 'geojson',
          data: geoJsonData
        });
        this.map.addLayer({
          id: 'zipBoundary',
          type: 'fill',
          source: 'zipBoundary',
          layout: {},
          paint: {
            'fill-color': '#888888',
            'fill-opacity': 0.4
          }
        });
      }
      const bounds = new mapboxgl.LngLatBounds();
      geoJsonData.features.forEach((feature: any) => {
        feature.geometry.coordinates[0].forEach((coord: any) => {
          bounds.extend(coord);
        });
      });
      this.map.fitBounds(bounds, { padding: 20 });
    }
  }
}
