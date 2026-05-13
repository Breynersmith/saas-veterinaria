import { useEffect, useState } from "react";
import { getAppointments } from "../services/appointmentService";

const DAYS = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];
const STATUS_STYLES = {
  confirmed: "bg-emerald-100/50 border-emerald-500 text-emerald-800 text-emerald-600",
  pending: "bg-amber-100/50 border-amber-500 text-amber-800 text-amber-600",
  cancelled: "bg-red-100/50 border-red-500 text-red-800 text-red-600",
};

export default function WeeklyCalendar() {
  const [weekDays, setWeekDays] = useState([]);
  const [appointmentsByDay, setAppointmentsByDay] = useState({});

  useEffect(() => {
    const today = new Date();
    const monday = new Date(today);
    monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));

    const days = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      return d;
    });
    setWeekDays(days);

    getAppointments().then((data) => {
      const grouped = {};
      days.forEach((d) => {
        const key = d.toISOString().slice(0, 10);
        grouped[key] = data.filter((a) => a.date.slice(0, 10) === key);
      });
      setAppointmentsByDay(grouped);
    });
  }, []);

  const isWeekend = (date) => date.getDay() === 0 || date.getDay() === 6;

  const getLabel = (date) => {
    const monthNames = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
    return `${monthNames[date.getMonth()]} ${date.getDate()}-${new Date(date.getTime() + 6 * 86400000).getDate()}, ${date.getFullYear()}`;
  };

  return (
    <section className="mt-8 bg-white p-6 rounded-2xl shadow-sm shadow-emerald-900/5 border border-emerald-50 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-h3 text-h3 text-on-surface">Calendario Semanal</h3>
        <div className="flex gap-2">
          <span className="text-body-md text-on-surface">
            {weekDays.length > 0 && getLabel(weekDays[0])}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px bg-emerald-100 border border-emerald-100 rounded-xl overflow-hidden">
        {weekDays.map((day, i) => {
          const key = day.toISOString().slice(0, 10);
          const appts = appointmentsByDay[key] || [];
          const weekend = isWeekend(day);

          return (
            <div key={i} className={weekend ? "bg-slate-50 min-h-[300px]" : "bg-white min-h-[300px]"}>
              <div className={`p-2 text-center border-b ${weekend ? "bg-slate-100 border-slate-200" : "bg-emerald-50/50 border-emerald-100"}`}>
                <span className={`text-caption block ${weekend ? "text-slate-400" : "text-slate-500"}`}>
                  {DAYS[day.getDay()]}
                </span>
                <span className={`font-label-sm ${weekend ? "text-slate-500" : "text-on-surface"}`}>
                  {day.getDate()}
                </span>
              </div>
              <div className="p-2 flex flex-col gap-2">
                {appts.map((a) => {
                  const hora = new Date(a.date).toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" });
                  const style = STATUS_STYLES[a.status] || STATUS_STYLES.pending;
                  const [bg, border, textBold, textLight] = style.split(" ");
                  return (
                    <div key={a.id} className={`p-2 ${bg} border-l-4 ${border} rounded-r-md`}>
                      <p className={`text-[10px] font-bold ${textBold}`}>{hora} - {a.pet_name}</p>
                      <p className={`text-[9px] ${textLight}`}>{a.notes || "—"}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
