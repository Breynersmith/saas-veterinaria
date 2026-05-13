import { useEffect, useState } from "react";
import { getAppointments } from "../services/appointmentService";
import { Link } from "react-router-dom";

const STATUS_COLOR = {
  confirmed: "bg-emerald-500",
  pending: "bg-amber-400",
  cancelled: "bg-red-400",
};
const STATUS_LABEL = {
  confirmed: "Confirmado",
  pending: "Pendiente",
  cancelled: "Cancelado",
};

export default function UpcomingEvents() {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    getAppointments().then((data) => {
      const now = new Date();
      const sorted = data
        .filter((a) => a.status !== "cancelled" && new Date(a.date) >= now)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 5);
      setUpcoming(sorted);
    });
  }, []);

  const formatTime = (iso) => {
    const d = new Date(iso);
    const isToday = d.toDateString() === new Date().toDateString();
    const hora = d.toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" });
    return { label: isToday ? "HOY" : d.toLocaleDateString("es-CO", { day: "2-digit", month: "short" }).toUpperCase(), hora };
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-h3 text-h3 text-on-surface">Próximas Citas</h3>
        <Link to="/appointments" className="text-primary font-label-sm hover:underline">Ver calendario</Link>
      </div>
      <div className="space-y-4">
        {upcoming.length === 0 && (
          <p className="text-caption text-on-surface-variant">Sin citas próximas</p>
        )}
        {upcoming.map((a) => {
          const { label, hora } = formatTime(a.date);
          return (
            <div key={a.id} className="flex items-center justify-between p-4 rounded-xl bg-surface hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex flex-col items-center justify-center bg-white rounded-lg shadow-sm">
                  <span className="text-[10px] font-bold text-on-surface-variant">{label}</span>
                  <span className="text-lg font-black text-primary leading-none">{hora}</span>
                </div>
                <div>
                  <h4 className="font-label-sm text-on-surface">
                    {a.pet_name} <span className="text-on-surface-variant font-normal">({a.pet_species})</span>
                  </h4>
                  <p className="text-caption text-on-surface-variant">
                    {a.client_name} • {a.notes || "—"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${STATUS_COLOR[a.status]}`}></span>
                <span className="text-caption text-on-surface-variant">{STATUS_LABEL[a.status]}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
