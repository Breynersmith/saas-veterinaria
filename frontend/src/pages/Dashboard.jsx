import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getMe } from "../services/auth"
import { getClients } from "../services/ClientService"
import { getPets } from "../services/petService"
import { getAppointments } from "../services/appointmentService"
import AddClient from "../components/AddClient"
import RegisterPets from "../components/RegisterPets"
import CreateAppointments from "../components/CreateAppointments"
import UpcomingEvents from "../components/UpcomingEvents"
import RecentActivity from "../components/RecentActivity"
import TotalMonthly from "../components/TotalMonthly"
import { getInvoices } from "../services/invoiceService"



export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [ clients, setClients ] = useState([])
  const [ pets, setPets ] = useState([])
  const [ appointments, setAppointments] = useState([])
  const [ showAddClient, setShowAddClient ] = useState(false)
  const [ showRegisterPets, setShowRegisterPets ] = useState(false)
  const [ modalCreateAppointment, setModalCreateAppointment ] = useState(false)
  const [monthlyIncome, setMonthlyIncome] = useState(0)
  const [incomePct, setIncomePct] = useState(null)

  useEffect(() => {
    getInvoices().then((data) => {
      const now = new Date();
      const thisY = now.getFullYear();
      const thisM = now.getMonth();
      const paid = data.filter((i) => i.status === "paid");
      const sumMonth = (y, m) =>
        paid.filter((i) => {
          const d = new Date(i.date);
          return d.getFullYear() === y && d.getMonth() === m;
        }).reduce((acc, i) => acc + Number(i.amount), 0);
      const current = sumMonth(thisY, thisM);
      const prevM = thisM === 0 ? 11 : thisM - 1;
      const prevY = thisM === 0 ? thisY - 1 : thisY;
      const previous = sumMonth(prevY, prevM);
      setMonthlyIncome(current);
      setIncomePct(previous === 0 ? null : (((current - previous) / previous) * 100).toFixed(1));
    });
  }, []);


  const handleModalAddClient = () => {
    setShowAddClient(!showAddClient)
  }

  const handleCreateAppointments = () => {
    setModalCreateAppointment(!modalCreateAppointment)
  }

  const handleRegisterPets = () => {
    setShowRegisterPets(!showRegisterPets)
  }
  const fetchAppointments = async () => {
        try {
          const data = await getAppointments()
          setAppointments(data)
        } catch (error) {
          console.error("error al cargar citas", error)
        }
      }

  useEffect(() => {
    fetchAppointments()
  }, [])

  const fetchPets = async () => {
        try {
          const data = await getPets()
          setPets(data)
        } catch (error){
          console.error("Error al cargar mascotas", error)
        }
      }

  useEffect(() => {
    fetchPets()
  }, [])

  const fetchClients = async () => {
          try {
            const data = await getClients()
            setClients(data)
          } catch (error) {
              console.error("error cargando clientes", error)
          }
      }

  useEffect(() => {
     fetchClients()
  }, [])

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

  return (
    <div className="bg-background font-body-md text-on-background min-h-screen">
<main className="pt-20 pb-20 md:pb-8 px-6 md:pl-52 md:pr-12 max-w-screen-2xl mx-auto">
    <section className="mb-10">
    { user && <h1 className="font-h1 text-h1 text-primary">Bienvenido de nuevo, Dr. {user.username}</h1> }
    <p className="font-body-lg text-body-lg text-on-surface-variant">Aquí tienes el resumen de tu clínica hoy</p>
    </section>
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
    <div className="bg-white rounded-xl p-6 soft-tinted-shadow border border-white flex flex-col gap-4">
    <div className="flex items-center justify-between">
    <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-primary">
    <span className="material-symbols-outlined" data-icon="group">group</span>
    </div>
    <span className="px-2 py-1 bg-emerald-100 text-primary text-[10px] font-bold rounded-full">+12% este mes</span>
    </div>
    <div>
    <p className="font-label-sm text-on-surface-variant">Clientes Totales</p>
    {clients.length === 0 ? (
       <p className=" text-h3  text-on-surface">0</p>       ): ( <p className="text-h3 text-on-surface">{clients.length}</p>
       )}

    </div>
    </div>
    <div className="bg-white rounded-xl p-6 soft-tinted-shadow border border-white flex flex-col gap-4">
    <div className="flex items-center justify-between">
    <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-primary">
    <span className="material-symbols-outlined" >pets</span>
    </div>
    <span className="px-2 py-1 bg-emerald-100 text-primary text-[10px] font-bold rounded-full">Saludable</span>
    </div>
    <div>
    <p className="font-label-sm text-on-surface-variant">Mascotas</p>
     {pets.length === 0 ? (
       <p className="text-h3 text-on-surface">0</p>
       ): (
        <p className="text-h3 text-on-surface">{ pets.length }</p>
       )}
    </div>
    </div>

    <div className="bg-white rounded-xl p-6 soft-tinted-shadow border border-white flex flex-col gap-4">
    <div className="flex items-center justify-between">
    <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-primary">
    <span className="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
    </div>
    <span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-full">{appointments.length} pendientes</span>
    </div>
    <div>
    <p className="font-label-sm text-on-surface-variant">Citas Hoy</p>
    {appointments.length === 0 ? (
           <p className="text-h3 text-on-surface">0</p> ): (
           <p className="text-h3 text-on-surface">{ appointments.length}</p>
           )}

    </div>
    </div>


    <div className="bg-white rounded-xl p-6 soft-tinted-shadow border border-white flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">monetization_on</span>
        </div>
        <span className="px-2 py-1 bg-emerald-100 text-primary text-[10px] font-bold rounded-full">
          {incomePct !== null ? `${incomePct > 0 ? "+" : ""}${incomePct}%` : "—"}
        </span>
      </div>
      <div>
        <p className="font-label-sm text-on-surface-variant">Ingresos Mes</p>
        <p className="text-h3 text-on-surface">
          ${monthlyIncome.toLocaleString("es-CO", { minimumFractionDigits: 2 })}
        </p>
      </div>
    </div>

    </section>
    <section className="mb-12">
    {
    showAddClient &&
      <div >
        <AddClient
            handleModalAddClient={ handleModalAddClient }
            fetchClients={ fetchClients }/>
      </div>
      }

    {
        modalCreateAppointment &&
          <div >
            <CreateAppointments
                handleCreateAppointments={ handleCreateAppointments }
                pets={ pets }/>
          </div>
    }


        {
        showRegisterPets &&
        <div >
          < RegisterPets
              handleRegisterPets={ handleRegisterPets }
              fetchPets={ fetchPets }
              clients={ clients } />
        </div>
        }

  { /* Acciones rapidas */}
    <h3 className="font-label-sm text-on-surface-variant mb-4 uppercase tracking-widest">Acciones Rápidas</h3>
    <div className="flex flex-wrap gap-4">
    <button onClick={handleModalAddClient} className="h-12 px-6 rounded-full bg-primary text-white font-label-sm flex items-center gap-3 hover:bg-secondary transition-colors shadow-lg shadow-emerald-900/10 active:scale-95">
    <span className="material-symbols-outlined text-[20px]" data-icon="person_add">person_add</span>
                        Nuevo cliente
                    </button>
    <button onClick={ handleCreateAppointments } className="h-12 px-6 rounded-full border-[1.5px] border-primary text-primary font-label-sm flex items-center gap-3 hover:bg-emerald-50 transition-colors active:scale-95">
    <span className="material-symbols-outlined text-[20px]" data-icon="add_circle">add_circle</span>
                        Nueva cita
                    </button>


    <button onClick={handleRegisterPets} className="h-12 px-6 rounded-full border-[1.5px] border-primary text-primary font-label-sm flex items-center gap-3 hover:bg-emerald-50 transition-colors active:scale-95">
    <span className="material-symbols-outlined text-[20px]" data-icon="potted_plant">potted_plant</span>
                        Registrar mascota
                    </button>
    </div>
    </section>


    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 ">

    { /* proximas citas*/ }

    <div className="lg:col-span-7 flex flex-col gap-6">
        <div className="bg-white rounded-2xl p-8 soft-tinted-shadow border border-white">
          < UpcomingEvents />
        </div>
    </div>

    {/* Recent Activity */}
    <div className="lg:col-span-5">

      <RecentActivity />

    </div>
    </div>
    </main>
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe h-16 bg-white dark:bg-slate-900 border-t border-emerald-50 dark:border-emerald-900/20 shadow-[0_-4px_20px_rgba(22,101,52,0.08)]">
    <Link className="flex flex-col items-center justify-center text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl px-4 py-1 transition-transform scale-95 active:scale-90" to="/dashboard">
    <span className="material-symbols-outlined" >home</span>
    <span className="font-['Manrope'] text-[10px] font-semibold">Home</span>
    </Link>
    <Link className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 transition-transform scale-95 active:scale-90" to="/clients">
    <span className="material-symbols-outlined" >group</span>
    <span className="font-['Manrope'] text-[10px] font-semibold">Clients</span>
    </Link>
    <Link className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 transition-transform scale-95 active:scale-90" to="/pets">
    <span className="material-symbols-outlined">pets</span>
    <span className="font-['Manrope'] text-[10px] font-semibold">Pets</span>
    </Link>
    <Link className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 transition-transform scale-95 active:scale-90" to="/event">
    <span className="material-symbols-outlined">event</span>
    <span className="font-['Manrope'] text-[10px] font-semibold">Calendar</span>
    </Link>
    <Link className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 transition-transform scale-95 active:scale-90" to="/menu">
    <span className="material-symbols-outlined">menu</span>
    <span className="font-['Manrope'] text-[10px] font-semibold">More</span>
    </Link>
    </nav>
    </div>

  );
}
