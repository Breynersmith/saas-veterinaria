import { useState, useEffect } from "react"
import { Outlet, Link, useLocation } from "react-router-dom";
import { getMe } from "../services/auth"


export default function MainLayout() {
  const [user, setUser] = useState(null)
  const location = useLocation()

  const fetchUser = async () => {
        try {
           const data = await getMe()
           setUser(data)
        } catch (error){
            console.error("error obteniendo usuario", error)
        }
      };

  useEffect(() =>{
    fetchUser();
  }, [])


  const navLinks = [
    { to: "/dashboard", icon: "grid_view", label: "Dashboard" },
    { to: "/clients", icon: "group", label: "Clientes" },
    { to: "/pets", icon: "pets", label: "Mascotas" },
    { to: "/appointments", icon: "calendar_today", label: "Citas" },
    { to: "/billing", icon: "payments", label: "Facturacion" },
  ]

  return (
    <div className="flex">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40 flex justify-between items-center px-6 h-16 bg-white dark:bg-slate-900 border-b border-emerald-100 dark:border-emerald-900/30 shadow-sm shadow-emerald-900/5">
          <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-2xl">pets</span>
          <span className="text-xl font-extrabold tracking-tight text-emerald-600 dark:text-emerald-400 font-h3">VetSystemSaas</span>
          <div className="h-6 w-px bg-outline-variant mx-2"></div>
          <span className="font-label-sm text-on-surface-variant">
            { user && user.organization }
          </span>
          </div>
          <div className="flex items-center gap-6">
          <button className="relative p-2 rounded-full hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors">
          <span className="material-symbols-outlined text-on-surface-variant" data-icon="notifications">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-outline-variant">
          <div className="text-right">
          <p className="font-label-sm text-on-surface block">
          Dr. {user &&  user.username }</p>
          <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Veterinario Senior</p>
          </div>

          <div className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden">
          <img className="w-full h-full object-cover" data-alt="professional portrait of a middle-aged male veterinarian with a friendly expression in a clean clinic setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUnAaxZGWcr64f-rutmhNFDlf3TXc_VOzpN5XZnMsM65nhTdtdeVozDSwddwjFijzx3hU4F7XLe59b8X0wrhpAfyIoDxC3Sl0hEeJq4fO_0lhbE_QP99YEL448Zf3hFgbMZ3zZMgF6xqE5l3rdxX4NnWeCCHRPVjTCEets88uqXlC-J4kxoyDwlj4f3JcmUWZNr6vfgHDe_taSYxZuA4VUpEIFlQCfj9nwtq0ZpPdxwBEsqHW0b_eDrooaA-iLnfF22iBHoR7E0tjH"/>
          </div>
          </div>
          </div>
          </header>


      {/* Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-16 h-[calc(100vh-64px)] w-48 flex-col p-4 gap-2 bg-emerald-50/30 dark:bg-slate-950 border-r border-emerald-100 dark:border-emerald-900/20 font-['Manrope'] text-sm font-medium">
        <nav className="flex flex-col gap-1">
          {navLinks.map(({ to, icon, label }) => {
            const isActive = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "text-emerald-700 dark:text-emerald-300 bg-white dark:bg-emerald-900/40 shadow-sm shadow-emerald-900/5"
                    : "text-slate-600 dark:text-slate-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/30"
                }`}
              >
                <span className="material-symbols-outlined">{icon}</span>
                <span>{label}</span>
              </Link>
            )
          })}
          <div className="my-4 border-t border-emerald-100"></div>
          <Link
            to="/settings"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              location.pathname === "/settings"
                ? "text-emerald-700 dark:text-emerald-300 bg-white dark:bg-emerald-900/40 shadow-sm shadow-emerald-900/5"
                : "text-slate-600 dark:text-slate-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/30"
            }`}
          >
            <span className="material-symbols-outlined">settings</span>
            <span>Configuracion</span>
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}


