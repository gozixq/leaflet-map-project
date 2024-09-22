import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import L from 'leaflet';

// Define LayersControl for base layers
const { BaseLayer } = LayersControl;

const Map = () => {
  const _onCreated = (e: any) => {
    const { layerType, layer } = e;
    console.log(`Created layer of type: ${layerType}`, layer);
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
    <MapContainer center={[18.7964, 98.9540]} zoom={15} style={{ height: '100vh', width: '100%' }}>
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
            circlemarker: false,
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
