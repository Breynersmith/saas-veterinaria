import { useEffect, useState } from "react";
import { getInvoices } from "../services/invoiceService";

export default function PendingInvoice({ refreshKey }) {
  const [pending, setPending] = useState(0);

  useEffect(() => {
    getInvoices().then((data) => {
      setPending(data.filter((i) => i.status === "pending").length);
    });
  }, [refreshKey]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-[0_12px_24px_rgba(22,101,52,0.06)] border border-emerald-50/50 flex flex-col justify-between h-32 relative overflow-hidden group">
      <div className="relative z-10">
        <p className="text-zinc-500 font-label-sm text-label-sm mb-1">Pendientes</p>
        <h3 className="text-tertiary font-h2 text-h2">{pending}</h3>
      </div>
      <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <span className="material-symbols-outlined text-[100px]">pending_actions</span>
      </div>
      <div className="flex items-center gap-1 text-tertiary text-caption font-caption">
        <span className="material-symbols-outlined text-[14px]">priority_high</span>
        <span>{pending > 0 ? `${pending} requieren atención` : "Sin pendientes"}</span>
      </div>
    </div>
  );
}
