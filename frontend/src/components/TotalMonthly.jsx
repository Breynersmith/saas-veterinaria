import { useEffect, useState } from "react";
import { getInvoices } from "../services/invoiceService";

export default function TotalMonthly({ refreshKey }) {
  const [thisMonth, setThisMonth] = useState(0);
  const [pct, setPct] = useState(null);

  useEffect(() => {
    getInvoices().then((data) => {
      const now = new Date();
      const thisY = now.getFullYear();
      const thisM = now.getMonth();

      const paid = data.filter((i) => i.status === "paid");

      const sumMonth = (y, m) =>
        paid
          .filter((i) => {
            const d = new Date(i.date);
            return d.getFullYear() === y && d.getMonth() === m;
          })
          .reduce((acc, i) => acc + Number(i.amount), 0);

      const current = sumMonth(thisY, thisM);
      const prevM = thisM === 0 ? 11 : thisM - 1;
      const prevY = thisM === 0 ? thisY - 1 : thisY;
      const previous = sumMonth(prevY, prevM);

      setThisMonth(current);
      setPct(previous === 0 ? null : (((current - previous) / previous) * 100).toFixed(1));
    });
  }, [refreshKey]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-[0_12px_24px_rgba(22,101,52,0.06)] border border-emerald-50/50 flex flex-col justify-between h-32 relative overflow-hidden group">
      <div className="relative z-10">
        <p className="text-zinc-500 font-label-sm text-label-sm mb-1">Total ingresos mes</p>
        <h3 className="text-zinc-900 font-h2 text-h2">
          ${thisMonth.toLocaleString("es-CO", { minimumFractionDigits: 2 })}
        </h3>
      </div>
      <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <span className="material-symbols-outlined text-[100px]">payments</span>
      </div>
      <div className="flex items-center gap-1 text-emerald-600 text-caption font-caption">
        <span className="material-symbols-outlined text-[14px]">trending_up</span>
        <span>
          {pct !== null ? `${pct > 0 ? "+" : ""}${pct}% vs mes anterior` : "Sin datos mes anterior"}
        </span>
      </div>
    </div>
  );
}
