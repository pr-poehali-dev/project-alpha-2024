import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current).setView([59.9311, 30.3609], 12);
    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const icon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    charityLocations.forEach((location) => {
      const marker = L.marker(location.coordinates as L.LatLngExpression, { icon }).addTo(map);
      
      marker.bindPopup(`
        <div style="padding: 8px;">
          <h3 style="font-weight: bold; font-size: 1.125rem; margin-bottom: 4px;">${location.name}</h3>
          <p style="font-size: 0.875rem; color: #666; margin-bottom: 8px;">${location.address}</p>
          <p style="font-size: 0.875rem;">${location.description}</p>
        </div>
      `);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[600px] rounded-lg overflow-hidden shadow-2xl border-4 border-primary/20"
    />
  );
};

export default CharityMap;