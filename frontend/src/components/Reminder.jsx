import { useEffect, useState } from "react";
import { getAppointments } from "../services/appointmentService";

export default function Reminder() {
  const [next, setNext] = useState(null);

  useEffect(() => {
    getAppointments().then((data) => {
      const upcoming = data
        .filter((a) => a.status === "pending")
        .sort((a, b) => new Date(a.date) - new Date(b.date))[0];
      setNext(upcoming || null);
    });
  }, []);

  if (!next) return null;

  const hora = new Date(next.date).toLocaleTimeString("es-CO", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bg-emerald-600 p-6 rounded-2xl shadow-sm shadow-emerald-900/10 text-white relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="font-h3 text-h3 mb-2">Recordatorio</h3>
        <p className="font-caption opacity-80 mb-4">
          Cita programada para {next.pet_name} a las {hora}
        </p>
        <button className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg font-label-sm transition-colors backdrop-blur-md">
          Ver Detalles
        </button>
      </div>
      <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-white/10 text-[120px]">
        medical_services
      </span>
    </div>
  );
}
