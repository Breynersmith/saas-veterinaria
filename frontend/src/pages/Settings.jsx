import { Link } from "react-router-dom";

export default function Settings() {
  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen pb-24">
      <main className="pt-20 pb-20 md:pb-8 px-6 md:pl-52 md:pr-12 max-w-screen-2xl mx-auto">
       <header className="mb-8">
        <div className="flex items-center gap-3">
          <h1 className="text-h1 text-primary font-manrope">Configuracion</h1>
        </div>
      </header>

        {/* User Profile Section */}
        <section className="bg-white rounded-xl shadow-[0_8px_32px_rgba(22,101,52,0.04)] p-6 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <span className="material-symbols-outlined text-[80px]">person</span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
              <span className="material-symbols-outlined">account_circle</span>
            </div>
            <h2 className="font-h3 text-h3 text-on-surface">Perfil de Usuario</h2>
          </div>
          <div className="space-y-4">
            <div className="group">
              <label className="font-label-sm text-label-sm text-outline mb-1.5 block">Nombre Completo</label>
              <input
                className="w-full h-12 px-4 rounded-lg border border-emerald-50 bg-surface-container-lowest focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all font-body-md"
                type="text"
                defaultValue="Dr. Breyner Ustariz"
              />
            </div>
            <div className="group">
              <label className="font-label-sm text-label-sm text-outline mb-1.5 block">Email</label>
              <input
                className="w-full h-12 px-4 rounded-lg border border-emerald-50 bg-surface-container-lowest focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all font-body-md"
                type="email"
                defaultValue="breynersmithustariz@gmail.com"
              />
            </div>
            <button className="flex items-center justify-center gap-2 w-full h-12 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-emerald-50 transition-colors active:scale-95 duration-200">
              <span className="material-symbols-outlined text-[20px]">lock_reset</span>
              Change Password
            </button>
          </div>
        </section>

        {/* Clinic Info Section */}
        <section className="bg-white rounded-xl shadow-[0_8px_32px_rgba(22,101,52,0.04)] p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
              <span className="material-symbols-outlined">medical_services</span>
            </div>
            <h2 className="font-h3 text-h3 text-on-surface">Información de la Clínica</h2>
          </div>
          <div className="space-y-4">
            <div className="group">
              <label className="font-label-sm text-label-sm text-outline mb-1.5 block">Nombre de la Clínica</label>
              <input
                className="w-full h-12 px-4 rounded-lg border border-emerald-50 bg-surface-container-lowest focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all"
                type="text"
                defaultValue="VetCare Central"
              />
            </div>
            <div className="group">
              <label className="font-label-sm text-label-sm text-outline mb-1.5 block">Dirección</label>
              <input
                className="w-full h-12 px-4 rounded-lg border border-emerald-50 bg-surface-container-lowest focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all"
                type="text"
                defaultValue="Calle de la Salud 123, Madrid"
              />
            </div>
            <div className="group">
              <label className="font-label-sm text-label-sm text-outline mb-1.5 block">Teléfono</label>
              <input
                className="w-full h-12 px-4 rounded-lg border border-emerald-50 bg-surface-container-lowest focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all"
                type="tel"
                defaultValue="+34 912 345 678"
              />
            </div>
          </div>
        </section>

        {/* Subscription Plan */}
        <section className="bg-primary text-white rounded-xl shadow-[0_12px_40px_rgba(0,110,47,0.15)] p-6 overflow-hidden relative">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary-container/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="bg-primary-container/30 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">Current Plan</span>
                <h2 className="font-h1 text-[32px] mt-2">Plan Pro</h2>
              </div>
              <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 mb-6 backdrop-blur-sm border border-white/10">
              <div className="flex justify-between items-center text-sm mb-2">
                <span>Monthly Usage</span>
                <span className="font-bold">85%</span>
              </div>
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                <div className="bg-white h-full w-[85%] rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <p className="text-white/80 font-body-md flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                Unlimited Patients &amp; Records
              </p>
              <p className="text-white/80 font-body-md flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                Billing: Next 15th of June, 2024
              </p>
            </div>
            <button className="w-full h-14 bg-white text-primary font-bold rounded-xl shadow-lg hover:bg-emerald-50 transition-all active:scale-95 duration-200">
              Manage Plan
            </button>
          </div>
        </section>

        {/* Preferences Section */}
        <section className="bg-white rounded-xl shadow-[0_8px_32px_rgba(22,101,52,0.04)] p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
              <span className="material-symbols-outlined">settings_suggest</span>
            </div>
            <h2 className="font-h3 text-h3 text-on-surface">Preferencias</h2>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="font-semibold text-on-surface">Idioma del Sistema</p>
                <p className="text-sm text-outline">Elige el idioma de la interfaz</p>
              </div>
              <select className="bg-emerald-50 border-none rounded-lg text-emerald-700 font-semibold focus:ring-2 focus:ring-emerald-200">
                <option>Español</option>
                <option>English</option>
                <option>Português</option>
              </select>
            </div>
            <div className="h-px bg-emerald-50"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className="font-semibold text-on-surface">Notificaciones Push</p>
                  <p className="text-sm text-outline">Alertas de citas y pacientes</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className="font-semibold text-on-surface">Email Diario</p>
                  <p className="text-sm text-outline">Resumen de agenda matutino</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Save Button */}
        <div className="flex gap-4 pt-4">
          <button className="flex-1 h-14 bg-primary text-white font-bold rounded-xl shadow-lg active:scale-95 transition-transform duration-200">
            Guardar Cambios
          </button>
        </div>
      </main>
    </div>
  );
}
