import Today from "../components/Today"
import Reminder from "../components/Reminder"
import AppointmentsList from "../components/AppointmentsList"
import WeeklyCalendar from "../components/WeeklyCalendar"

export default function Appointments() {
  return (
    <main className="pt-20 pb-20 md:pb-8 px-6 md:pl-52 md:pr-12 max-w-screen-2xl mx-auto">
      {/* Page Header & View Options */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-gutter mb-8">
        <div>
          <h2 className="font-h1 text-h1 text-primary">Citas</h2>
          <p className="font-body-md text-slate-500">Gestión y programación de consultas veterinarias</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-stack-md">
          {/* Toggle Switch */}
          <div className="bg-surface-container-high p-1 rounded-full flex gap-1">
            <button className="px-6 py-2 rounded-full bg-white shadow-sm text-emerald-700 font-label-sm transition-all">Lista</button>
            <button className="px-6 py-2 rounded-full text-slate-500 font-label-sm hover:bg-white/50 transition-all">Calendario</button>
          </div>
          {/* Filter Pill */}
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-emerald-100 rounded-xl font-label-sm text-slate-600 hover:bg-emerald-50 transition-colors">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            Filtros
          </button>
        </div>
      </section>

      {/* Appointments Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

       <aside className="lg:col-span-3 flex flex-col gap-gutter">

             {/* Today */}
              < Today />

             {/*Reminder*/}
              < Reminder />
        </aside>


        {/* Appointment List */}
        <div className="lg:col-span-9">
          <AppointmentsList />
        </div>
      </div>

      {/* Calendar View Preview */}
      <WeeklyCalendar />
    </main>
  );
}
