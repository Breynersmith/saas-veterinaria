import { useEffect, useState } from "react";
import { getAppointments } from "../services/appointmentService";

export default function Today() {
  const [counts, setCounts] = useState({ confirmed: 0, pending: 0, cancelled: 0 });

  useEffect(() => {
    getAppointments().then((data) => {
      const today = new Date().toISOString().slice(0, 10);
      const todayAppts = data.filter((a) => a.date.slice(0, 10) === today);

      setCounts({
        confirmed: todayAppts.filter((a) => a.status === "confirmed").length,
        pending: todayAppts.filter((a) => a.status === "pending").length,
        cancelled: todayAppts.filter((a) => a.status === "cancelled").length,
      });
    });
  }, []);

  const fmt = (n) => String(n).padStart(1, "0");

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm shadow-emerald-900/5 border border-emerald-50">
      <h3 className="font-label-sm text-slate-400 mb-4 uppercase tracking-wider">Hoy</h3>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="font-body-md text-on-surface">Confirmadas</span>
          <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-caption rounded-lg">{fmt(counts.confirmed)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-body-md text-on-surface">Pendientes</span>
          <span className="px-2 py-1 bg-amber-100 text-amber-700 text-caption rounded-lg">{fmt(counts.pending)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-body-md text-on-surface">Canceladas</span>
          <span className="px-2 py-1 bg-red-100 text-red-700 text-caption rounded-lg">{fmt(counts.cancelled)}</span>
        </div>
      </div>
    </div>
  );
}
