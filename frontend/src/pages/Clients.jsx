import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { getClients } from "../services/ClientService"
import AddClient from "../components/AddClient"
import SearchInput from "../components/SearchInput"

const Clients = () => {
  const [ clients, setClients ] = useState([])
  const [ showAddClient, setShowAddClient] = useState(false)
  const [search, setSearch] = useState("")
  const [filteredClients, setFilteredClients] = useState([])

  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)

    if (value.trim() === "") {
      setFilteredClients([])
      return
    }

    const results = clients.filter(client =>
      client.name.toLowerCase().includes(value.toLowerCase()) ||
      String(client.id).includes(value)
    )
    setFilteredClients(results)
  }

  const handleSelectClient = (client) => {
    setForm({ ...form, client: client.id })
    setSearch(client.name)
    setFilteredClients([])
  }


    const handleModalAddClient = () => {
      setShowAddClient(!showAddClient)
    }

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



  return (
    <div className="bg-background text-on-background min-h-screen">

      <main className="pt-20 pb-20 md:pb-8 px-6 md:pl-52 md:pr-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="font-h1 text-h1 text-primary">Clientes</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Gestiona los clientes de tu clínica</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-grow sm:min-w-[320px]">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>

              <SearchInput
                value={search}
                onChange={handleSearch}
                onSelect={handleSelectClient}
                results={filteredClients}
                placeholder="Buscar cliente por nombre o ID"
                getKey={(client) => client.id}
                renderItem={(client) => (
                  <>{client.name} <span className="w-full pl-4 pr-4 py-3 font-body-md text-on-surface opacity-50">#{client.id}</span></>
                )}
              />
            </div>
            <button
                onClick={ handleModalAddClient }
                type="button"
                className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/10 active:scale-95 duration-150 transition-all">
              <span className="material-symbols-outlined">add</span>
              Nuevo Cliente
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/*Modal agregar clients*/}
        {
            showAddClient &&
              <div >
                <AddClient
                    handleModalAddClient={ handleModalAddClient }
                    fetchClients={ fetchClients }/>
              </div>
          }


          {/* lista de clientes*/}

          {clients.map(client => (
            <div key={client.id} className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_8px_30px_rgb(22,101,52,0.06)] hover:shadow-[0_12px_40px_rgb(22,101,52,0.1)] transition-all flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center border-2 border-secondary-container">
                    <span className="material-symbols-outlined text-on-secondary-container">person</span>
                  </div>
                  <div>
                    <h3 className="font-h3 text-body-lg font-bold text-on-surface">{client.name}</h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="material-symbols-outlined text-[16px] text-primary">pets</span>
                      <span className="text-caption font-caption text-on-surface-variant">{client.pets?.length ?? 0} mascotas</span>
                    </div>
                  </div>
                </div>
                <span className="bg-secondary-container/30 text-on-secondary-container px-3 py-1 rounded-full text-caption font-bold">Activo</span>
              </div>
              <div className="space-y-2 py-2">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  <span className="text-label-sm font-label-sm">{client.email}</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span className="text-label-sm font-label-sm">{client.phone}</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-surface-container-highest">
                <div className="flex gap-1">
                  <button className="p-2 text-on-surface-variant hover:bg-surface-container hover:text-primary rounded-lg transition-colors">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                  <button className="p-2 text-on-surface-variant hover:bg-surface-container hover:text-primary rounded-lg transition-colors">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                </div>
                <button className="p-2 text-on-surface-variant hover:bg-error-container/20 hover:text-error rounded-lg transition-colors">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          ))}



          <button
              onClick={ handleModalAddClient }
              type="button"
              className="bg-surface-container-lowest border-2 border-dashed border-outline-variant rounded-xl p-6 flex flex-col items-center justify-center gap-3 text-on-surface-variant hover:bg-emerald-50/50 hover:border-primary-container transition-all cursor-pointer">
            <span className="material-symbols-outlined text-[48px] text-primary/40">person_add</span>
            <p className="font-label-sm text-label-sm text-center">Añadir nuevo cliente para<br/>gestión de clínica</p>
          </button>

        </div>
      </main>

    </div>
  )

  ;
};

export default Clients;
