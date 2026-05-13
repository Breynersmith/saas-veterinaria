import React from "react";
import { Link } from "react-router-dom";
import "../index.css"
const Features = () => {
  return (
    <div className="bg-surface text-on-surface flex flex-col min-h-screen">

      {/* HEADER */}
      <header className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">

          <div className="flex items-center gap-2 cursor-pointer">
            <span className="material-symbols-outlined text-primary text-5xl">pets</span>
            <span className="text-h1 font-black text-primary">VetSystemSaas</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">             <Link className="text-slate-600 hover:text-emerald-700" to="/">                  Inicio
             </Link>
             <Link className="text-emerald-600 border-b-2 border-emerald-500 pb-1" to="/features">
              Caracteristicas
            </Link>
            <Link className="text-slate-600 hover:text-emerald-700" to="/prices">                  Precios
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

      <main className="flex-grow">

        {/* HERO */}
  <section className="relative pt-32 pb-24 px-6">
  <div className="paw-pattern absolute inset-0 pointer-events-none"></div>
  <div className="max-w-7xl mx-auto text-center relative z-10">
  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/50 border border-emerald-100 text-primary mb-10 shadow-sm backdrop-blur-sm animate-bounce-subtle">
  <span className="material-symbols-outlined text-lg" data-icon="auto_awesome">auto_awesome</span>
  <span className="font-bold text-xs uppercase tracking-widest">SaaS de nueva generación</span>
  </div>
  <h1 className="font-h1 text-h1 text-on-surface mb-8 max-w-5xl mx-auto tracking-tight">
                  Potencia tu clínica con <span className="text-gradient">herramientas inteligentes</span>
  </h1>
  <p className="font-body-lg text-lg text-on-surface-variant mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
                  Gestiona cada detalle de tu práctica veterinaria con una plataforma diseñada para la eficiencia, la seguridad y el cuidado animal excepcional.
              </p>
  <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
  <button className="w-full sm:w-auto h-14 px-10 bg-primary text-white rounded-2xl font-bold text-base hover:bg-secondary hover:scale-[1.02] transition-all shadow-2xl shadow-emerald-500/30 flex items-center justify-center gap-2">
                      Comenzar prueba gratuita
                      <span className="material-symbols-outlined text-lg" data-icon="arrow_forward">arrow_forward</span>
  </button>
  <button className="w-full sm:w-auto h-14 px-10 bg-white text-on-surface border border-emerald-100 rounded-2xl font-bold text-base hover:bg-emerald-50 transition-all flex items-center justify-center gap-2">
  <span className="material-symbols-outlined text-lg" data-icon="play_circle">play_circle</span>
                      Ver demo en vivo
                  </button>
  </div>

  </div>
  </section>


      {/* Social Proof */}
      <div className="mt-16 flex flex-col items-center gap-4">
      <div className="flex -space-x-3">
      <img alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCouAgcdCdH-nLA352XeA0z_Vn4pU-icjDQrBpEVkpYa3pYWbR9x38GMwvOQiD7GA1o0qr-RTzlF5AbV9PxwI_dZj0sAs4TpxBAXDJgSgVckbZem9why90gSD2P1Ukxo0FNXtkn7UPcXA9PXJmuFmwomPRJNYksHgNF3VLK7hq7iScmsThVMPgyVFXPOdZ412pMmMb1YwKxZZBcNFCAMUIszxXV9DxaeoOEDZE9yFUKxgcixpjfWdcWILPgHXcq4gFKSGbXoIeBmZ1F"/>
      <img alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAogE3s63Z83v2veDS-6NXgW_ORyz0qx3E6CHBEOG_EcPSEsShN3hxtaxVv_Ocy1Q7Hs_RUs5QxG-C65gtDaSMP9__Zb3_UnrN8htOLrQLYuilCTzKrsOraZ7WvshY6gUCYazFs5XoElDzDkZty9QriAPMDDk5UqoRI6y2InbarqPtMH1MbYjMOAO0YphYGa-e1W3dvxR1SRNkaZ1adwBW1QTWAu877R_EsCZRID3PoWXZ83KnNfgNFWysRLED6rW-vqLOXOnsLQtYz"/>
      <img alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOjxpoCBvQ-d27Vo4mHxbvewuNIZMqalexLA2OnE9T_0P3vRJYiW3L7fPYDbiUK2xQ17Qnnc2-85UVDZr7jzC0aOnFWat0Tv3l1K2D4rk7B7Om1xOnFoyTk_EFr30Na-sX0A6iI4nPrawqWvIbGrmOBfKhe0G6m4RY6e0NCvk4nbOlWsGQ8iwXlnmGG_pPKs9QWms46g3pwkYcmHFGR8QboRBtPTH7zXmg2_YjnDl1x0-42R-wW-d8Gzd4VX1LJ8pYiPtZNxADEhru"/>
      <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-primary shadow-sm">+500</div>
      </div>
      <p className="text-sm font-semibold text-on-surface-variant/80">Más de 500 clínicas ya confían en VetSystemSaas</p>
      </div>

      <div className="text-center my-16">
      <h2 className="font-h2 text-h2 mb-4">Todo lo que necesitas en un solo lugar</h2>
      <p className="text-on-surface-variant max-w-2xl mx-auto">Una suite completa de herramientas optimizadas para veterinarios modernos.</p>
      </div>

        {/* FEATURES GRID */}
        <div className="bento-grid px-24">
        {/* Gestión de Clientes */}
        <div className="bento-item col-span-12 md:col-span-8 flex flex-col justify-between min-h-[340px]">
        <div>
        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 border border-emerald-100/50">
        <span className="material-symbols-outlined text-primary text-3xl" data-icon="groups">groups</span>
        </div>
        <h3 className="font-h3 text-h3 mb-4">Gestión de Clientes Premium</h3>
        <p className="text-on-surface-variant text-lg max-w-lg">Base de datos centralizada con perfiles enriquecidos, segmentación inteligente y CRM integrado para fidelizar a los propietarios.</p>
        </div>
        <div className="flex items-center gap-3 mt-8">
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/50 text-primary text-xs font-bold uppercase tracking-wider">
        <span className="material-symbols-outlined text-sm" data-icon="bolt">bolt</span>
                                CRM Avanzado
                            </span>
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/50 text-blue-600 text-xs font-bold uppercase tracking-wider">
        <span className="material-symbols-outlined text-sm" data-icon="mail">mail</span>
                                Mail Automático
                            </span>
        </div>
        </div>
        {/* Mascotas e Historial Clínico */}
        <div className="bento-item col-span-12 md:col-span-4 flex flex-col bg-gradient-to-br from-emerald-50/50 to-white">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
        <span className="material-symbols-outlined text-primary text-2xl" data-icon="clinical_notes">clinical_notes</span>
        </div>
        <h3 className="font-h3 text-2xl mb-4 leading-tight">Expedientes Clínicos Digitales</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Historiales médicos 100% digitales con soporte para imágenes DICOM, laboratorios y evolución gráfica del paciente.</p>
        <div className="mt-auto pt-6 border-t border-emerald-100/50">
        <div className="flex items-center gap-2 text-primary font-bold text-sm">
        <span>Configurar ahora</span>
        <span className="material-symbols-outlined text-sm" data-icon="north_east">north_east</span>
        </div>
        </div>
        </div>
        {/* Agenda Inteligente */}
        <div className="bento-item col-span-12 md:col-span-4 flex flex-col border-emerald-100">
        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
        <span className="material-symbols-outlined text-primary text-2xl" data-icon="calendar_month">calendar_month</span>
        </div>
        <h3 className="font-h3 text-2xl mb-3">Agenda &amp; IA</h3>
        <p className="text-on-surface-variant text-sm mb-6">Calendario inteligente que optimiza tus huecos y envía recordatorios por WhatsApp reduciendo el no-show en un 40%.</p>
        <div className="mt-auto bg-emerald-50/30 p-3 rounded-xl border border-emerald-100/50 text-xs font-medium text-primary flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            8 citas agendadas hoy
                        </div>
        </div>
        {/* Dashboard de Métricas */}
        <div className="bento-item col-span-12 md:col-span-8 overflow-hidden group">
        <div className="flex flex-col lg:flex-row gap-8 items-center h-full">
        <div className="flex-1">
        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
        <span className="material-symbols-outlined text-primary text-2xl" data-icon="analytics">analytics</span>
        </div>
        <h3 className="font-h3 text-2xl mb-4">Analíticas de Negocio</h3>
        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Visualiza el crecimiento de tu clínica en tiempo real. Ingresos, procedimientos más rentables y KPIs de retención en un clic.</p>
        <button className="text-primary font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform">
                                    Ver reporte completo
                                    <span className="material-symbols-outlined text-sm" data-icon="arrow_right_alt">arrow_right_alt</span>
        </button>
        </div>
        <div className="w-full lg:w-1/2 aspect-video bg-emerald-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative">
        <img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700" data-alt="Modern analytics dashboard interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEcZOVgA_jz16XjqoU8lRWHz5nD-gVm-TUZfzFhHtftfcqy_s7w5yDOJt8UGqf-tconVs4Rbt-bSkoh5_fEkjNlHQCiNya4CMA6iGmS15qNTwbbHWGl_5NO_QK7330WvyQtPasHxHpNlcT_hTAoGj5KGOczy4oBh9iPs0xM8YAKOU1_qRjg_n2kp_wzS3lvvHy6vBl4IDzAiOIhHetBtgizvrFuprUpC6ktLqA9dVX1R-4V2Zr0toGkRzIQ5crTvtu2dTw3agvVdUS"/>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent pointer-events-none"></div>
        </div>
        </div>
        </div>
        {/* Facturación y Finanzas */}
        <div className="bento-item col-span-12 md:col-span-6 border-l-4 border-l-primary">
        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
        <span className="material-symbols-outlined text-primary text-2xl" data-icon="receipt_long">receipt_long</span>
        </div>
        <h3 className="font-h3 text-2xl mb-4">Control Financiero</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Módulo de facturación electrónica integrado, control de caja diario y gestión de proveedores automatizada.</p>
        <div className="bg-surface p-4 rounded-xl border border-emerald-50 flex items-center justify-between">
        <div className="flex flex-col">
        <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Flujo Mensual</span>
        <span className="text-lg font-bold text-on-surface">+12.500€</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
        <span className="material-symbols-outlined text-primary text-xl" data-icon="trending_up">trending_up</span>
        </div>
        </div>
        </div>
        {/*<!-- Multi-clínica -->*/}
        <div className="bento-item col-span-12 md:col-span-6 bg-emerald-900 text-on-surface  border-none group">
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 relative z-10">
        <span className="material-symbols-outlined text-primary text-2xl" data-icon="business">business</span>
        </div>
        <h3 className="font-h3 text-2xl mb-4  relative z-10">Escalabilidad Multi-sede</h3>
        <p className="text-on-surface text-sm leading-relaxed mb-8 relative z-10">Controla todas tus sucursales desde un panel maestro. Unifica inventarios, empleados y protocolos clínicos de forma global.</p>
        <div className="mt-auto flex items-center gap-4 relative z-10">
        <div className="flex -space-x-2">
        <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-[10px]">S1</div>
        <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-[10px]">S2</div>
        <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-[10px]">S3</div>
        </div>
        <span className="text-xs font-semibold text-emerald-700">Sincronización total</span>
        </div>
        </div>
        {/*  Sistema de Roles */}
        <div className="bento-item col-span-12 md:col-span-5 lg:col-span-4 bg-white shadow-sm">
        <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-4">
        <span className="material-symbols-outlined text-primary text-xl" data-icon="admin_panel_settings">admin_panel_settings</span>
        </div>
        <h4 className="font-h3 text-xl mb-2">Permisos Granulares</h4>
        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Gestiona qué puede ver y hacer cada miembro del equipo: desde veterinarios junior hasta recepcionistas.</p>
        <div className="flex flex-wrap gap-2">
        <div className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-bold text-on-surface-variant">ADMIN</div>
        <div className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-bold text-on-surface-variant">DOCTOR</div>
        <div className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-bold text-on-surface-variant">NURSE</div>
        </div>
        </div>
        {/* Seguridad JWT */}
        <div className="bento-item col-span-12 md:col-span-7 lg:col-span-8 flex flex-col md:flex-row items-center gap-8">
        <div className="w-20 h-20 shrink-0 bg-emerald-50 rounded-3xl flex items-center justify-center shadow-inner">
        <span className="material-symbols-outlined text-primary text-4xl" data-icon="lock_person">lock_person</span>
        </div>
        <div>
        <h3 className="font-h3 text-2xl mb-2">Seguridad Grado Bancario</h3>
        <p className="text-on-surface-variant text-sm mb-4 leading-relaxed max-w-lg">Implementamos arquitectura JWT (JSON Web Token) y cifrado AES-256 para garantizar que los datos de tus pacientes y clientes estén siempre protegidos.</p>
        <div className="inline-flex items-center gap-2 text-primary bg-emerald-100/50 px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider">
        <span className="material-symbols-outlined text-sm" data-icon="verified_user">verified_user</span>
                                Certificación HIPAA Compliant
                            </div>
        </div>
        </div>
        </div>


        {/* CTA */}
        <section className="py-24 px-6 mb-16">
        <div className="max-w-6xl mx-auto bg-emerald-900 rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
        {/* Decorative circle */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-[100px]"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-10 border border-white/20">
        <span className="material-symbols-outlined text-white text-3xl" data-icon="rocket_launch">rocket_launch</span>
        </div>
        <h2 className="font-h2 text-4xl md:text-5xl mb-8 leading-tight">¿Tu clínica está lista para el siguiente nivel?</h2>
        <p classNNanme="font-body-lg text-lg text-emerald-100/80 mb-12 leading-relaxed">
                            Únete a la comunidad de VetFlow y transforma la gestión operativa de tu práctica veterinaria hoy mismo. 14 días gratis, sin tarjeta de crédito.
                        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <button className="w-full sm:w-auto h-16 px-12 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-emerald-900 hover:scale-[1.05] transition-all shadow-xl shadow-black/20 flex items-center justify-center">
                                Probar gratis ahora
                            </button>
        <button className="w-full sm:w-auto h-16 px-10 border border-white/30 bg-white/5 backdrop-blur-sm text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                Reservar consultoría
                                <span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
        </button>
        </div>
        </div>
        </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full bg-white border-t border-emerald-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-1 md:col-span-1">
      <div className="flex items-center gap-2 mb-6">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
      <span className="material-symbols-outlined text-white text-lg" data-icon="pets">pets</span>
      </div>
      <span className="text-xl font-black text-on-surface tracking-tight">VetSystemSaas</span>
      </div>
      <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                          Redefiniendo la gestión veterinaria con software de alta fidelidad y calidez humana.
                      </p>
      <div className="flex gap-4">
      <a className="w-8 h-8 bg-surface-container rounded-full flex items-center justify-center hover:bg-emerald-100 text-on-surface-variant hover:text-primary transition-colors" href="#">
      <span className="material-symbols-outlined text-lg" data-icon="public">public</span>
      </a>
      <a className="w-8 h-8 bg-surface-container rounded-full flex items-center justify-center hover:bg-emerald-100 text-on-surface-variant hover:text-primary transition-colors" href="#">
      <span className="material-symbols-outlined text-lg" data-icon="share">share</span>
      </a>
      </div>
      </div>
      <div>
      <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-on-surface">Producto</h5>
      <ul className="space-y-4 text-sm text-on-surface-variant">
      <li><a className="hover:text-primary transition-colors" href="#">Características</a></li>
      <li><a className="hover:text-primary transition-colors" href="#">Actualizaciones</a></li>
      <li><a className="hover:text-primary transition-colors" href="#">Seguridad</a></li>
      </ul>
      </div>
      <div>
      <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-on-surface">Compañía</h5>
      <ul className="space-y-4 text-sm text-on-surface-variant">
      <li><a className="hover:text-primary transition-colors" href="#">Sobre nosotros</a></li>
      <li><a className="hover:text-primary transition-colors" href="#">Precios</a></li>
      <li><a className="hover:text-primary transition-colors" href="#">Contacto</a></li>
      </ul>
      </div>
      <div>
      <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-on-surface">Soporte</h5>
      <ul className="space-y-4 text-sm text-on-surface-variant">
      <li><a className="hover:text-primary transition-colors" href="#">Centro de Ayuda</a></li>
      <li><a className="hover:text-primary transition-colors" href="#">Documentación API</a></li>
      <li><a className="hover:text-primary transition-colors" href="#">Privacidad</a></li>
      </ul>
      </div>
      </div>
      <div className="pt-8 border-t border-emerald-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-on-surface-variant/60">
      <p>© 2024 VetSystemSaas Inc. Todos los derechos reservados.</p>
      <div className="flex gap-6">
      <a className="hover:text-primary transition-colors" href="#">Términos de Servicio</a>
      <a className="hover:text-primary transition-colors" href="#">Política de Cookies</a>
      </div>
      </div>
      </div>
      </footer>

    </div>
  );
};

export default Features;
