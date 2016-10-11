import { Component, OnInit } from '@angular/core';
import * as ol from "openlayers";


@Component({
  selector: 'my-app',
  template: `<h1>My First ol3 ng2 App</h1>
             <div id="map" class="map"></div>
  `
})
export class AppComponent implements OnInit {

    map: ol.Map;

    ngOnInit() {        
        this.map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })],
            view: new ol.View({
                center: ol.proj.fromLonLat([36.5369974,34.7302175]),
                zoom: 7
            })
        });
    }

 }
 