import React, {useState} from 'react'
import ReactMapGl, {Marker, Popup} from 'react-map-gl'
import honey from '../images/honey.svg'
import '../scss/layout/map.scss'

export default function Map({items}) {
  
  const [viewport, setViewport] = useState({
    latitude: 37.779026,
    longitude: -122.419906,
    width: '570px',
    height: '570px',
    zoom: 11,
  })
  const [selectedGear, setSelectedGear] = useState(null)

  return (
    <div className='map-div'>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/bvsillorequez/ckce92lky0d7n1is0wbx78xkf"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {items.map((gear, i) => (
          <Marker
            key={i}
            latitude={Number(Object.values(gear.location[0])[0])}
            longitude={Number(Object.values(gear.location[1])[0])}
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
            latitude={Number(Object.values(selectedGear.location[0])[0])}
            longitude={Number(Object.values(selectedGear.location[1])[0])}
            onClose={() => {
              setSelectedGear(null);
            }}
          >
            <div>
              <h3>{selectedGear.title}</h3>
              <p>{selectedGear.description}</p>
              <p>Cost/Night: {selectedGear.rate}</p>
              <p>Availability: Fuck Yea!</p>
            </div>
          </Popup>
        )}
      </ReactMapGl>
    </div>
  );
}