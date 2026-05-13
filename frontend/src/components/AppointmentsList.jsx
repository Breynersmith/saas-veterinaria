import { useEffect, useState } from "react";
import { getAppointments } from "../services/appointmentService";

const STATUS_STYLES = {
  confirmed: "bg-emerald-100 text-emerald-700",
  pending: "bg-amber-100 text-amber-700",
  cancelled: "bg-red-100 text-red-700",
};
const STATUS_DOT = {
  confirmed: "bg-emerald-500",
  pending: "bg-amber-500",
  cancelled: "bg-red-500",
};
const STATUS_LABEL = {
  confirmed: "Confirmado",
  pending: "Pendiente",
  cancelled: "Cancelado",
};

const PAGE_SIZE = 4;

export default function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getAppointments().then((data) => {
      const sorted = data.sort((a, b) => new Date(a.date) - new Date(b.date));
      setAppointments(sorted);
    });
  }, []);

  const total = appointments.length;
  const paginated = appointments.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <div className="bg-white rounded-2xl shadow-sm shadow-emerald-900/5 border border-emerald-50 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-emerald-50/30 border-b border-emerald-100">
              <th className="pl-4 pr-2 py-4 font-label-sm text-slate-600 uppercase tracking-wider">Hora</th>
              <th className="px-4 py-4 font-label-sm text-slate-500 uppercase tracking-wider">Mascota</th>
              <th className="px-4 py-4 font-label-sm text-slate-500 uppercase tracking-wider">Propietario</th>
              <th className="px-4 py-4 font-label-sm text-slate-500 uppercase tracking-wider">Servicio</th>
              <th className="px-4 py-4 font-label-sm text-slate-500 uppercase tracking-wider">Estado</th>
              <th className="px-4 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-50">
            {paginated.map((a) => {
              const hora = new Date(a.date).toLocaleTimeString("es-CO", {
                hour: "2-digit",
                minute: "2-digit",
              });
              const status = a.status || "pending";
              return (
                <tr key={a.id} className="hover:bg-emerald-50/20 transition-colors group">
                  <td className="pl-4 pr-2 py-5 font-label-sm text-on-surface">{hora}</td>
                  <td className="px-4 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">pets</span>
                      </div>
                      <div>
                        <p className="font-label-sm text-on-surface">{a.pet_name}</p>
                        <p className="text-caption text-slate-400">
                          {a.pet_species}{a.pet_breed ? ` (${a.pet_breed})` : ""}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-5 text-body-md text-on-surface">{a.client_name}</td>
                  <td className="px-4 py-5">
                    <span className="font-body-md text-on-surface">{a.notes || "—"}</span>
                  </td>
                  <td className="px-2 py-5">
                    <span className={`px-2 py-1 ${STATUS_STYLES[status]} font-label-sm rounded-full flex items-center gap-1 w-fit`}>
                      <span className={`w-2 h-2 rounded-full ${STATUS_DOT[status]}`}></span>
                      {STATUS_LABEL[status]}
                    </span>
                  </td>
                  <td className="px-4 py-5 text-right">
                    <button className="material-symbols-outlined text-slate-400 hover:text-emerald-600 transition-colors">more_vert</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-emerald-100 flex items-center justify-between">
        <span className="text-caption text-slate-500">
          Mostrando {paginated.length} de {total} citas
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="p-2 border border-emerald-100 rounded-lg hover:bg-emerald-50 transition-colors disabled:opacity-40"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
          <button
            onClick={() => setPage((p) => (p + 1) * PAGE_SIZE < total ? p + 1 : p)}
            disabled={(page + 1) * PAGE_SIZE >= total}
            className="p-2 border border-emerald-100 rounded-lg hover:bg-emerald-50 transition-colors disabled:opacity-40"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
