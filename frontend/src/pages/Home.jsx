import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-background font-body-md text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-emerald-50/50 dark:border-emerald-900/20 shadow-[0_8px_30px_rgb(22,101,52,0.05)]">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">

          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary  text-5xl">
              pets
            </span>
            <span className="text-h1 font-extrabold text-primary">
              VetSystemSaas
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-emerald-600 font-bold border-b-2 border-emerald-500 pb-1 text-sm">
              Inicio
            </Link>
            <Link to="/features" className="text-slate-600 hover:text-emerald-700 text-sm">
              características
            </Link>
            <Link to="/prices" className="text-slate-600 hover:text-emerald-700 text-sm">
              Precios
            </Link>
          </nav>

          <Link className="bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-full text-sm" to="/login">
            Iniciar Sesion
          </Link>
        </div>
      </header>


      <main className="pt-24 px-12">


        <section className="relative overflow-hidden px-6 pt-16 pb-24 lg:pt-32 lg:pb-40">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-3 bg-secondary-container rounded-full mb-6">
                <span className="material-symbols-outlined text-[18px]">
                  auto_awesome
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-6 leading-tight">
                Gestiona tu clínica veterinaria con{" "}
                <span className="text-primary">precisión</span> y{" "}
                <span className="text-primary-container">empatía</span>
              </h1>

              <p className="text-on-surface-variant mb-10 max-w-xl">
                Plataforma integral para veterinarios modernos que buscan eficiencia y el mejor cuidado para sus pacientes.
              </p>

              <div className="flex gap-4">
                <Link to="/register" className="bg-primary text-white h-12 px-8 rounded-xl flex items-center gap-2">
                  Empieza gratis
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>

                <button className="border-2 border-primary text-primary h-12 px-8 rounded-xl">
                  Ver demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-secondary-container/30 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-container/20 rounded-full blur-3xl -z-10"></div>

              <div className="bg-white rounded-[2rem] p-4 shadow-xl relative">
                <div>
                     <img className="rounded-[1.5rem] z-2   w-5/6 object-cover" src="../../public/img/appointments.png" alt="citas"  />
                     <img className="rounded-[1.5rem] absolute top-0 right-0  p-4 bg-white z-4  -mt-12 shadow-lg w-2/3 object-cover" src="../../public/img/billing.png" alt="Facturacion"  />
                     <img className="absolute -bottom-36 p-4 bg-white -left-24 rounded-[1.5rem] shadow-lg w-2/3 object-cover" src="../../public/img/clients.png" alt="clientes"  />
                </div>


              </div>
            </div>

          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Todo lo que tu clínica necesita
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Diseñado para veterinarios modernos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

            <div className="p-6 rounded-xl border">
              <h3 className="font-bold mb-2">Historial Clínico</h3>
              <p>Acceso rápido a datos médicos.</p>
            </div>

            <div className="p-6 rounded-xl border">
              <h3 className="font-bold mb-2">Citas</h3>
              <p>Agenda inteligente automatizada.</p>
            </div>

            <div className="p-6 rounded-xl border">
              <h3 className="font-bold mb-2">Facturación</h3>
              <p>Control financiero completo.</p>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-500">
        © 2026 VetFlow
      </footer>

    </div>
  );
}
