import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import L from 'leaflet';
import 'leaflet-geometryutil';

// Define LayersControl for base layers
const { BaseLayer } = LayersControl;

const Map = () => {
  const _onCreated = (e: any) => {
    const { layerType, layer } = e;
    const latlngs = layer.getLatLngs();
    
    if (layerType === 'polyline') {
      // Calculate distance for polylines
      const totalDistance = L.GeometryUtil.length(layer);
      console.log(`Created Polyline with total distance: ${totalDistance.toFixed(2)} meters`);
      layer.bindPopup(`Total distance: ${totalDistance.toFixed(2)} meters`).openPopup();
    } else if (layerType === 'polygon') {
      // Calculate area for polygons
      const area = L.GeometryUtil.geodesicArea(latlngs[0]);
      console.log(`Created Polygon with area: ${area.toFixed(2)} square meters`);
      layer.bindPopup(`Area: ${area.toFixed(2)} square meters`).openPopup();
    } else if (layerType === 'circle') {
      // Display the radius for circles
      const radius = layer.getRadius();
      console.log(`Created Circle with radius: ${radius.toFixed(2)} meters`);
      layer.bindPopup(`Radius: ${radius.toFixed(2)} meters`).openPopup();
    } else if (layerType === 'marker') {
      // Show the coordinates for marker
      const { lat, lng } = layer.getLatLng();
      console.log(`Created Marker at coordinates: [${lat}, ${lng}]`);
      layer.bindPopup(`Coordinates: [${lat.toFixed(6)}, ${lng.toFixed(6)}]`).openPopup();
    }
  };

  const _onEdited = (e: any) => {
    let editedLayers = 0;
    e.layers.eachLayer((layer: any) => {
      editedLayers += 1;
    });
    console.log(`Edited ${editedLayers} layers`);
  };

  const _onDeleted = (e: any) => {
    let deletedLayers = 0;
    e.layers.eachLayer((layer: any) => {
      deletedLayers += 1;
    });
    console.log(`Deleted ${deletedLayers} layers`);
  };

  return (
    <MapContainer center={[18.7964, 98.9540]} zoom={15} minZoom={2} maxZoom={18} style={{ height: '100vh', width: '100%' }}>
      <LayersControl position="topright">
        <BaseLayer name="Street View">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </BaseLayer>
        <BaseLayer checked name="Satellite View">
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.png"
            attribution='&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </BaseLayer>
      </LayersControl>

      {/* Drawing Tools */}
      <FeatureGroup>
        <EditControl
          position="topleft"
          onCreated={_onCreated}
          onEdited={_onEdited}
          onDeleted={_onDeleted}
          draw={{
            rectangle: false,
            polyline: true,
            polygon: true,
            circle: true,
            marker: true,
            circlemarker: true,
          }}
        />
      </FeatureGroup>

      {/* Marker */}
      <Marker position={[18.7964, 98.9540]}>
        <Popup>
          Chiang Mai University <br /> A great place to learn.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
