import { useEffect, useState } from "react";
import { getInvoices } from "../services/invoiceService";

export default function PaidInvoice({ refreshKey }) {
  const [paid, setPaid] = useState(0);
  const [today, setToday] = useState(0);

  useEffect(() => {
    getInvoices().then((data) => {
      const todayStr = new Date().toISOString().slice(0, 10);
      const paidAll = data.filter((i) => i.status === "paid");
      setPaid(paidAll.length);
      setToday(paidAll.filter((i) => i.date.slice(0, 10) === todayStr).length);
    });
  }, [refreshKey]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-[0_12px_24px_rgba(22,101,52,0.06)] border border-emerald-50/50 flex flex-col justify-between h-32 relative overflow-hidden group">
      <div className="relative z-10">
        <p className="text-zinc-500 font-label-sm text-label-sm mb-1">Facturas pagadas</p>
        <h3 className="text-zinc-900 font-h2 text-h2">{paid}</h3>
      </div>
      <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <span className="material-symbols-outlined text-[100px]">check_circle</span>
      </div>
      <div className="flex items-center gap-1 text-emerald-600 text-caption font-caption">
        <span className="material-symbols-outlined text-[14px]">history</span>
        <span>Procesado hoy: {today}</span>
      </div>
    </div>
  );
}
