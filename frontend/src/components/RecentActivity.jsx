import { useEffect, useState } from "react";
import { getAppointments } from "../services/appointmentService";

export default function RecentActivity() {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    getAppointments().then((data) => {
      const sorted = [...data]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
      setRecent(sorted);
    });
  }, []);

  const timeAgo = (iso) => {
    const diff = Math.floor((new Date() - new Date(iso)) / 1000);
    if (diff < 60) return "Hace un momento";
    if (diff < 3600) return `Hace ${Math.floor(diff / 60)} min`;
    if (diff < 86400) return `Hace ${Math.floor(diff / 3600)} h`;
    return `Hace ${Math.floor(diff / 86400)} días`;
  };

  const STATUS_COLOR = {
    confirmed: "bg-emerald-500",
    pending: "bg-amber-400",
    cancelled: "bg-red-400",
  };

  return (
    <div className="bg-white rounded-2xl p-8 soft-tinted-shadow border border-white h-full">
      <h3 className="font-h3 text-h3 text-on-surface mb-8">Actividad Reciente</h3>
      <div className="relative space-y-6 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-emerald-100">
        {recent.length === 0 && (
          <p className="text-caption text-on-surface-variant pl-8">Sin actividad reciente</p>
        )}
        {recent.map((a) => (
          <div key={a.id} className="relative pl-8">
            <div className={`absolute left-0 top-1.5 w-[24px] h-[24px] ${STATUS_COLOR[a.status] || "bg-slate-300"} border-4 border-white rounded-full`}></div>
            <p className="font-label-sm text-on-surface">{a.notes || "Cita registrada"}</p>
            <p className="text-caption text-on-surface-variant">
              {a.pet_name} • {timeAgo(a.date)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
