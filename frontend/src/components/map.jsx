import React, {useState} from 'react'
import ReactMapGl, {Marker, Popup} from 'react-map-gl'
import * as gearData from  '../data/rent-data.json'
import honey from '../images/honey.svg'
import '../scss/layout/map.scss'

export default function Map(props) {
  const [viewport, setViewport] = useState({
    latitude: 37.779026,
    longitude: -122.419906,
    width: '600px',
    height: '600px',
    zoom: 11,
  })
  const [selectedGear, setSelectedGear] = useState(null)
  
  return (
    <div>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/bvsillorequez/ckce92lky0d7n1is0wbx78xkf"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {gearData.features.map((gear) => (
          <Marker
            key={gear.properties.PARK_ID}
            latitude={gear.geometry.coordinates[0]}
            longitude={gear.geometry.coordinates[1]}
          >
            <button
              className="honey-button"
              onClick={(e) => {
                e.preventDefault();
                setSelectedGear(gear);
              }}
            >
              <img src={honey} alt="honey-icon" className="honey-marker" />
            </button>
          </Marker>
        ))}

        {selectedGear && (
          <Popup
            latitude={selectedGear.geometry.coordinates[0]}
            longitude={selectedGear.geometry.coordinates[1]}
            onClose={() => {
              setSelectedGear(null)
            }}
          >
            <div>
              <h3>{selectedGear.properties.TITLE}</h3>
              <p>{selectedGear.properties.ADDRESS}</p>
              <p>{selectedGear.properties.DESCRIPTION}</p>
              <p>{selectedGear.properties.AVAIL}</p>
            </div>
          </Popup>
        )}
      </ReactMapGl>
    </div>
  );
}