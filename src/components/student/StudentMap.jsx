import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

import { FaBus } from "react-icons/fa";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";

const busIcon = L.divIcon({
  html: renderToStaticMarkup(
    <div className="bg-blue-600 p-2 rounded-full shadow-lg">
      <FaBus color="white" size={18} />
    </div>
  ),
  className: "",
  iconSize: [36, 36],
});

const home = [12.9698, 77.75];
const college = [12.9775, 77.7585];

const busRoute = [
  [12.9725, 77.754],
  [12.9732, 77.7548],
  [12.974, 77.7556],
  [12.975, 77.7566],
  [12.976, 77.7575],
];

export default function StudentMap() {
  const [bus, setBus] = useState(busRoute[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % busRoute.length;
      setBus(busRoute[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-5">

        <div>
          <h2 className="text-lg sm:text-xl font-bold">
            Live Bus Tracking
          </h2>

          <p className="text-sm sm:text-base text-gray-500">
            Bus is approaching your pickup point
          </p>
        </div>

        <span className="self-start sm:self-auto bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium text-sm">
          ● LIVE
        </span>

      </div>

      <MapContainer
        center={bus}
        zoom={14}
        style={{
          height: window.innerWidth < 640 ? "300px" : "420px",
          width: "100%",
          borderRadius: "16px",
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={home}>
          <Popup>🏠 Your Pickup Point</Popup>
        </Marker>

        <Marker position={bus} icon={busIcon}>
          <Popup>
            🚌 NovaTransit Bus
            <br />
            Driver: Rahul Kumar
            <br />
            ETA: 8 Minutes
          </Popup>
        </Marker>

        <Marker position={college}>
          <Popup>🎓 BGS College</Popup>
        </Marker>

        <Polyline
          positions={[home, bus, college]}
          pathOptions={{
            color: "#2563eb",
            weight: 5,
            opacity: 0.8,
          }}
        />
      </MapContainer>

      <div className="mt-4 border-t pt-4 flex flex-col sm:flex-row sm:justify-between gap-4">

        <div>
          <p className="text-sm text-gray-500">
            Current Route
          </p>

          <p className="font-semibold text-sm sm:text-base">
            🏠 Home → 📍 MG Road → 🎓 BGS College
          </p>
        </div>

        <div className="sm:text-right">
          <p className="text-sm text-gray-500">
            Estimated Arrival
          </p>

          <p className="font-bold text-green-600 text-lg">
            8 Minutes
          </p>
        </div>

      </div>

    </div>
  );
}