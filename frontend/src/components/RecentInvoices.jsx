import { useEffect, useState } from "react";
import { getInvoices, updateInvoice } from "../services/invoiceService";

const STATUS_STYLES = {
  paid: "bg-emerald-100 text-emerald-700",
  pending: "bg-amber-100 text-amber-700",
  cancelled: "bg-red-100 text-red-700",
};
const STATUS_ICON = {
  paid: "check",
  pending: "schedule",
  cancelled: "close",
};
const STATUS_LABEL = {
  paid: "Pagado",
  pending: "Pendiente",
  cancelled: "Cancelado",
};

const PAGE_SIZE = 4;

export default function RecentInvoices({ refreshKey, onStatusChange }) {
  const [invoices, setInvoices] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
      getInvoices().then(setInvoices);
    }, [refreshKey]);


  const filtered = invoices.filter((inv) =>
    `${inv.client_name} ${inv.pet_name} FAC-${String(inv.id).padStart(4, "0")}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const handleMarkPaid = async (id) => {
      await updateInvoice(id, { status: "paid" });
      setInvoices((prev) =>
        prev.map((inv) => (inv.id === id ? { ...inv, status: "paid" } : inv))
      );
      onStatusChange?.();
    };

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString("es-CO", { day: "2-digit", month: "short", year: "numeric" });
  };

  return (
    <div className="bg-white rounded-xl shadow-[0_12px_24px_rgba(22,101,52,0.06)] overflow-hidden border border-emerald-50/50">
      <div className="px-6 py-5 border-b border-emerald-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="font-h3 text-h3 text-zinc-900">Facturas Recientes</h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-[20px]">search</span>
            <input
              className="pl-10 pr-4 py-2 bg-background border-none rounded-lg text-label-sm font-label-sm focus:ring-2 focus:ring-primary-container w-full md:w-64"
              placeholder="Buscar factura..."
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(0); }}
            />
          </div>
          <button className="p-2 text-zinc-500 hover:bg-emerald-50 rounded-lg transition-colors">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-surface-container-low border-b border-emerald-50/50">
            <tr>
              <th className="px-6 py-4 font-label-sm text-label-sm text-zinc-500">Factura ID</th>
              <th className="px-6 py-4 font-label-sm text-label-sm text-zinc-500">Cliente / Paciente</th>
              <th className="px-6 py-4 font-label-sm text-label-sm text-zinc-500">Fecha</th>
              <th className="px-6 py-4 font-label-sm text-label-sm text-zinc-500">Monto</th>
              <th className="px-6 py-4 font-label-sm text-label-sm text-zinc-500">Estado</th>
              <th className="px-6 py-4 font-label-sm text-label-sm text-zinc-500 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-50/50">
            {paginated.map((inv) => {
              const facId = `#FAC-${String(inv.id).padStart(4, "0")}`;
              const status = inv.status || "pending";
              return (
                <tr key={inv.id} className="hover:bg-emerald-50/30 transition-colors group">
                  <td className="px-6 py-4 font-label-sm text-zinc-900">{facId}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-zinc-900">{inv.client_name}</span>
                      <span className="text-caption font-caption text-zinc-400">
                        Paciente: {inv.pet_name}{inv.pet_breed ? ` (${inv.pet_breed})` : ""}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-label-sm text-zinc-500">{formatDate(inv.date)}</td>
                  <td className="px-6 py-4 font-bold text-zinc-900">${Number(inv.amount).toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`${STATUS_STYLES[status]} px-3 py-1 rounded-full text-caption font-label-sm flex items-center gap-1 w-fit`}>
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {STATUS_ICON[status]}
                      </span>
                      {STATUS_LABEL[status]}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {status === "pending" && (
                        <button
                          onClick={() => handleMarkPaid(inv.id)}
                          className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-caption font-label-sm hover:bg-emerald-100 transition-colors"
                        >
                          Marcar como pagado
                        </button>
                      )}
                      <button className="p-2 text-zinc-400 hover:text-primary hover:bg-emerald-50 rounded-lg transition-all" title="Ver">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                      <button className="p-2 text-zinc-400 hover:text-primary hover:bg-emerald-50 rounded-lg transition-all" title="Descargar">
                        <span className="material-symbols-outlined text-[20px]">download</span>
                      </button>
                      {status !== "pending" && (
                        <button className="p-2 text-zinc-400 hover:bg-emerald-50 rounded-lg transition-all" title="Opciones">
                          <span className="material-symbols-outlined text-[20px]">more_vert</span>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 bg-surface-container-low flex items-center justify-between border-t border-emerald-50/50">
        <span className="text-caption font-caption text-zinc-500">
          Mostrando {paginated.length} de {filtered.length} facturas
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="p-1 hover:bg-emerald-50 rounded text-zinc-400 transition-colors disabled:opacity-40"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => (
              <span
                key={i}
                onClick={() => setPage(i)}
                className={`px-3 py-1 text-caption font-label-sm rounded cursor-pointer ${
                  page === i ? "bg-primary text-white" : "hover:bg-emerald-50 text-zinc-500"
                }`}
              >
                {i + 1}
              </span>
            ))}
          </div>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page >= totalPages - 1}
            className="p-1 hover:bg-emerald-50 rounded text-zinc-400 transition-colors disabled:opacity-40"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
