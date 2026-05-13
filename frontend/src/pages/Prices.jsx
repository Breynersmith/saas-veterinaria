import { Link } from "react-router-dom"
export default function Prices() {
  return (
    <div className="bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      {/* HEADER */}
      <header className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">

          <div className="flex items-center gap-2 cursor-pointer">
            <span className="material-symbols-outlined text-primary text-5xl">pets</span>
            <span className="text-h1 font-black text-primary">VetSystemSaas</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">             <Link className="text-slate-600 hover:text-emerald-700" to="/">                  Inicio
             </Link>
             <Link className="text-slate-600 hover:text-emerald-700" to="/features">
              Caracteristicas
            </Link>
            <Link className="text-emerald-600 border-b-2 border-emerald-500 pb-1" to="/prices">                  Precios
            </Link>

          </nav>

          <Link
            to="/login"
            className="bg-primary text-white px-6 py-2.5 rounded-full text-sm"
          >
            Iniciar sesion
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-24">
        {/* Hero Section */}
        <section className="pt-20 pb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-secondary-container/30 text-secondary px-4 py-1.5 rounded-full mb-6">
            <span className="material-symbols-outlined text-sm" data-icon="auto_awesome">auto_awesome</span>
            <span className="text-caption font-bold tracking-wide uppercase">Nuevas Funciones Multi-Clínica</span>
          </div>
          <h1 className="font-h1 text-h1 text-on-background mb-6">Planes simples para clínicas de todos los tamaños</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
            Escala tu práctica veterinaria con nuestra arquitectura multi-tenant. Desde consultorios independientes hasta redes hospitalarias nacionales.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-primary text-on-primary px-8 py-4 rounded-xl font-h3 text-body-md hover:bg-secondary transition-colors shadow-lg">
              Empezar gratis
            </button>
            <button className="w-full sm:w-auto border-[1.5px] border-secondary text-secondary px-8 py-4 rounded-xl font-h3 text-body-md hover:bg-surface-container transition-colors">
              Ver demo
            </button>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="soft-card p-8 flex flex-col h-full border border-emerald-50">
            <div className="mb-8">
              <h3 className="font-h3 text-h3 text-on-background mb-2">Basic</h3>
              <p className="font-body-md text-on-surface-variant text-sm">Para clínicas pequeñas y consultorios independientes.</p>
            </div>
            <div className="mb-8">
              <span className="font-h1 text-h1 text-on-background">$0</span>
              <span className="text-on-surface-variant">/siempre gratis</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                <span className="font-body-md text-sm">Gestión de clientes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                <span className="font-body-md text-sm">Fichas de mascotas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                <span className="font-body-md text-sm">Agenda básica</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                <span className="font-body-md text-sm">1 usuario (Admin)</span>
              </li>
            </ul>
            <button className="w-full border border-outline-variant text-on-surface-variant py-3 rounded-lg font-label-sm hover:bg-surface-container transition-colors">
              Comenzar con Basic
            </button>
          </div>

          {/* Professional Plan */}
          <div className="soft-card p-8 flex flex-col h-full ring-2 ring-primary relative bg-surface-container-lowest">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-caption font-bold">
              Más popular
            </div>
            <div className="mb-8">
              <h3 className="font-h3 text-h3 text-primary mb-2">Professional</h3>
              <p className="font-body-md text-on-surface-variant text-sm">Para clínicas en crecimiento que necesitan control total.</p>
            </div>
            <div className="mb-8">
              <span className="font-h1 text-h1 text-on-background">$29</span>
              <span className="text-on-surface-variant">/mes</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                <span className="font-body-md text-sm font-semibold italic text-primary">Todo lo de Basic, más:</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                <span className="font-body-md text-sm">Multi-usuarios (Admin, Vet, Aux)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                <span className="font-body-md text-sm">Historial médico completo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                <span className="font-body-md text-sm">Auto-recordatorios (SMS/Email)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                <span className="font-body-md text-sm">Métricas del dashboard</span>
              </li>
            </ul>
            <button className="w-full bg-primary text-on-primary py-3 rounded-lg font-label-sm hover:bg-secondary transition-colors shadow-md">
              Probar 14 días gratis
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="soft-card p-8 flex flex-col h-full border border-emerald-50">
            <div className="mb-8">
              <h3 className="font-h3 text-h3 text-on-background mb-2">Enterprise</h3>
              <p className="font-body-md text-on-surface-variant text-sm">Redes de clínicas y hospitales veterinarios complejos.</p>
            </div>
            <div className="mb-8">
              <span className="font-h1 text-h1 text-on-background">Personalizado</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                <span className="font-body-md text-sm font-semibold italic text-primary">Todo lo de Pro, más:</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                <span className="font-body-md text-sm font-bold">Gestión Multi-tenant</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                <span className="font-body-md text-sm">Reportes avanzados BI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                <span className="font-body-md text-sm">Soporte prioritario 24/7</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                <span className="font-body-md text-sm">API completa &amp; Integraciones</span>
              </li>
            </ul>
            <button className="w-full border border-primary text-primary py-3 rounded-lg font-label-sm hover:bg-primary-container/10 transition-colors">
              Contactar Ventas
            </button>
          </div>
        </section>

        {/* Trust & Tech Section */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="font-h2 text-h2 text-on-background mb-4">Seguridad de grado clínico</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Utilizamos tecnología de punta para asegurar que los datos de tus pacientes estén siempre protegidos y aislados.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-white p-8 rounded-3xl shadow-sm border border-emerald-50 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="w-12 h-12 bg-secondary-container/30 rounded-xl flex items-center justify-center mb-4 text-secondary">
                  <span className="material-symbols-outlined" data-icon="lock">lock</span>
                </div>
                <h4 className="font-h3 text-xl mb-2">Arquitectura Multi-tenant</h4>
                <p className="font-body-md text-sm text-on-surface-variant">Cada clínica tiene su propio espacio de base de datos aislado. Nunca habrá fugas de información entre sucursales o clientes competidores.</p>
              </div>
              <div className="flex-1 w-full bg-surface-container-low rounded-2xl p-6 relative overflow-hidden">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-white p-2 rounded shadow-sm border-l-4 border-primary">
                    <span className="material-symbols-outlined text-xs text-primary" data-icon="domain" data-weight="fill">domain</span>
                    <span className="text-caption">Clínica San Roque - Datos Aislados</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2 rounded shadow-sm border-l-4 border-secondary opacity-40 blur-[1px]">
                    <span className="material-symbols-outlined text-xs text-secondary" data-icon="domain" data-weight="fill">domain</span>
                    <span className="text-caption">Clínica Los Pinos - Protegido</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 bg-primary p-8 rounded-3xl text-on-primary shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white" data-icon="verified_user">verified_user</span>
                </div>
                <h4 className="font-h3 text-xl mb-3">Seguridad JWT</h4>
                <p className="font-body-md text-sm text-on-primary/80">Autenticación moderna basada en tokens para accesos rápidos y seguros desde cualquier dispositivo.</p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <span className="font-label-sm uppercase tracking-widest opacity-60">Status: Encriptado</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Comparison Table */}
        <section className="py-16 overflow-x-auto">
          <h2 className="font-h2 text-h2 text-on-background text-center mb-12">Compara las capacidades</h2>
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="text-left border-b border-outline-variant">
                <th className="py-6 px-4 font-h3 text-lg text-on-surface w-1/4">Característica</th>
                <th className="py-6 px-4 font-label-sm text-center">Basic</th>
                <th className="py-6 px-4 font-label-sm text-center text-primary">Professional</th>
                <th className="py-6 px-4 font-label-sm text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody className="font-body-md text-sm">
              <tr className="border-b border-emerald-50 hover:bg-surface-container-low transition-colors">
                <td className="py-6 px-4 font-semibold">Multi-tenant Isolation</td>
                <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-primary" data-icon="check_circle">check_circle</span></td>
                <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-primary" data-icon="check_circle">check_circle</span></td>
                <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-primary" data-icon="check_circle">check_circle</span></td>
              </tr>
              <tr className="border-b border-emerald-50 hover:bg-surface-container-low transition-colors">
                <td className="py-6 px-4 font-semibold">JWT Authentication</td>
                <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-primary" data-icon="check_circle">check_circle</span></td>
                <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-primary" data-icon="check_circle">check_circle</span></td>
                <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-primary" data-icon="check_circle">check_circle</span></td>
              </tr>
              <tr className="border-b border-emerald-50 hover:bg-surface-container-low transition-colors">
                <td className="py-6 px-4 font-semibold">Roles (Admin/Vet/Assist)</td>
                <td className="py-6 px-4 text-center text-on-surface-variant opacity-40">—</td>
                <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-primary" data-icon="check_circle">check_circle</span></td>
                <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-primary" data-icon="check_circle">check_circle</span></td>
              </tr>
              <tr className="border-b border-emerald-50 hover:bg-surface-container-low transition-colors">
                <td className="py-6 px-4 font-semibold">Dashboard Metrics</td>
                <td className="py-6 px-4 text-center text-on-surface-variant opacity-40">—</td>
                <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-primary" data-icon="check_circle">check_circle</span></td>
                <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-primary" data-icon="check_circle">check_circle</span></td>
              </tr>
              <tr className="border-b border-emerald-50 hover:bg-surface-container-low transition-colors">
                <td className="py-6 px-4 font-semibold">Soporte Prioritario</td>
                <td className="py-6 px-4 text-center text-on-surface-variant opacity-40">—</td>
                <td className="py-6 px-4 text-center text-on-surface-variant opacity-40">—</td>
                <td className="py-6 px-4 text-center"><span className="material-symbols-outlined text-primary" data-icon="check_circle">check_circle</span></td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Final CTA */}
        <section className="mt-20 mb-20 bg-emerald-900 rounded-[32px] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              alt="Pattern"
              className="w-full h-full object-cover grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW7F3rvn8Lx1nPu_vCkKPSmG2hiy1PrW2Ip88UfsSAMQ4EzLWmMzV7nMd2oBEoJoCtFi3-xoLjAlY_dEmHGAqZiyQiSksTP8mkaJamzDoC4DqaXBAtWfuONSOFKfQD6bo114j1XEoJDtnBICACl0m2FTnms_k0aYSn5SJGCbbVYK8rJRAu2iJcBuj40dgVFBP96AztR3OCrR_EmKv9Jm8Yp7juwyILjO7eAv5xl5ClJDeGXDu8R5hrtxwHzl-SJmkLN-7WO0p5BXYT"
            />
          </div>
          <div className="relative z-10">
            <h2 className="font-h1 text-h1 mb-6">Empieza gratis hoy</h2>
            <p className="font-body-lg text-emerald-100 max-w-xl mx-auto mb-10">
              Únete a más de 500 clínicas que ya están transformando el cuidado animal con VetSystemSaas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded-xl font-h3 hover:bg-white hover:text-primary transition-all">
                Crear cuenta
              </button>
              <button className="bg-transparent border border-white text-white px-10 py-4 rounded-xl font-h3 hover:bg-white/10 transition-all">
                Hablar con experto
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-50 dark:bg-emerald-950/20 w-full rounded-t-3xl border-t border-emerald-100 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 max-w-7xl mx-auto gap-8">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="material-symbols-outlined text-primary" data-icon="pets">pets</span>
              <span className="text-lg font-black text-emerald-800 tracking-tighter">VetSystemSaas</span>
            </div>
            <p className="text-slate-500 font-body-md text-sm max-w-xs">
              Optimizado para clínicas modernas. La excelencia clínica se une a la eficiencia digital.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a className="text-slate-500 hover:text-emerald-600 transition-all underline font-label-sm" href="#">Product</a>
            <a className="text-slate-500 hover:text-emerald-600 transition-all underline font-label-sm" href="#">Solutions</a>
            <a className="text-emerald-700 underline underline-offset-4 font-label-sm" href="#">Pricing</a>
            <a className="text-slate-500 hover:text-emerald-600 transition-all underline font-label-sm" href="#">Privacy Policy</a>
            <a className="text-slate-500 hover:text-emerald-600 transition-all underline font-label-sm" href="#">Terms of Service</a>
          </div>
          <div className="text-slate-500 text-caption font-medium">
            © 2024 VetSystemSaas Clinical Excellence. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
