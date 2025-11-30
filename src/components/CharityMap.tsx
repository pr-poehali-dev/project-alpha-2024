import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const charityLocations = [
  {
    id: 1,
    name: "Центр помощи детям",
    address: "Невский проспект, 28",
    coordinates: [59.9343, 30.3351] as [number, number],
    description: "Помощь детям из малообеспеченных семей"
  },
  {
    id: 2,
    name: "Фонд поддержки пожилых",
    address: "ул. Ломоносова, 14",
    coordinates: [59.9311, 30.2969] as [number, number],
    description: "Социальная поддержка пожилых людей"
  },
  {
    id: 3,
    name: "Приют для животных",
    address: "Васильевский остров, 12 линия, 5",
    coordinates: [59.9411, 30.2848] as [number, number],
    description: "Забота о бездомных животных"
  },
  {
    id: 4,
    name: "Благотворительная столовая",
    address: "Лиговский проспект, 44",
    coordinates: [59.9261, 30.3598] as [number, number],
    description: "Бесплатное питание для нуждающихся"
  },
  {
    id: 5,
    name: "Центр реабилитации",
    address: "Петроградская набережная, 34",
    coordinates: [59.9576, 30.3152] as [number, number],
    description: "Помощь людям в трудной жизненной ситуации"
  },
  {
    id: 6,
    name: "Детский дом творчества",
    address: "Московский проспект, 78",
    coordinates: [59.8913, 30.3195] as [number, number],
    description: "Творческое развитие детей из детских домов"
  }
];

const CharityMap = () => {
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-2xl border-4 border-primary/20">
      <MapContainer
        center={[59.9311, 30.3609]}
        zoom={12}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {charityLocations.map((location) => (
          <Marker 
            key={location.id} 
            position={location.coordinates}
            icon={markerIcon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg mb-1">{location.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{location.address}</p>
                <p className="text-sm">{location.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CharityMap;
