import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { getPets } from "../services/petService"
import SearchInput from "../components/SearchInput"
import RegisterPets from "../components/RegisterPets"

export default function PetsList() {
  const [ pets, setPets ] = useState([])
  const [search, setSearch] = useState("")
  const [filteredPets, setFilteredPets] = useState([])
  const [ showRegisterPets, setShowRegisterPets ] = useState(false)

    const handleSearch = (e) => {
      const value = e.target.value
      setSearch(value)

      if (value.trim() === "") {
        setFilteredPets([])
        return
      }

      const results = pets.filter(pet =>
        pet.name.toLowerCase().includes(value.toLowerCase()) ||
        String(pet.id).includes(value)
      )
      setFilteredPets(results)
    }

    const handleSelectPet = (pet) => {
      setSearch(pet.name)
      setFilteredPets([])
    }

    const handleRegisterPets = () => {
      setShowRegisterPets(!showRegisterPets)
    }


  const fetchPets  = async () => {
          try {
            const data = await getPets()
            setPets(data)
          } catch (error) {
              console.error("error cargando mascotas", error)
          }
      }

  useEffect(() => {
     fetchPets()
  }, [])


  return (
    <div className="bg-background font-body-md text-on-surface min-h-screen pb-24">

      <main className="pt-20 pb-20 md:pb-8 px-6 md:pl-52 md:pr-12 max-w-screen-2xl mx-auto">
        {/* Header Section */}
        <div className="mb-stack-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="font-h1 text-h1 text-primary">Mascotas</h2>
              <p className="font-body-md text-on-surface-variant">Gestiona las mascotas registradas</p>
            </div>
            <button
                onClick={ handleRegisterPets }
                type="button"
                className="bg-primary-container text-on-primary-container px-4 py-3 rounded-xl font-label-sm text-label-sm flex items-center gap-2 hover:bg-primary transition-colors active:scale-95">
              <span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
              + Nueva Mascota
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-stack-md">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>

               <SearchInput
                  value={search}
                  onChange={handleSearch}
                  onSelect={handleSelectPet}
                  results={filteredPets}
                  placeholder="Buscar cliente por nombre o ID"
                  getKey={(pet) => pet.id}
                  renderItem={(pet) => (
                            <>{pet.name} <span className="w-full pl-4 pr-4 py-3 font-body-md text-on-surface opacity-50">#{pet.id}</span></>                      )}
                  />
          </div>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            <button className="bg-primary text-white px-4 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap">Todos</button>
            <button className="bg-white text-on-surface-variant border border-green-100 px-4 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap hover:bg-green-50 transition-colors">Perro</button>
            <button className="bg-white text-on-surface-variant border border-green-100 px-4 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap hover:bg-green-50 transition-colors">Gato</button>
            <button className="bg-white text-on-surface-variant border border-green-100 px-4 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap hover:bg-green-50 transition-colors">Exóticos</button>
            <div className="w-px h-6 bg-green-100 mx-2 self-center"></div>
            <button className="bg-white text-on-surface-variant border border-green-100 px-4 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap hover:bg-green-50 transition-colors">Activo</button>
            <button className="bg-white text-on-surface-variant border border-green-100 px-4 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap hover:bg-green-50 transition-colors">Tratamiento</button>
          </div>
        </div>

        { showRegisterPets && <RegisterPets handleRegisterPets={ handleRegisterPets } />}

        {/*  Pet List  */}
        <div className="space-y-stack-md">
          {pets.map(pet => (
            <div key={pet.id} className="bg-white rounded-[16px] p-4 soft-shadow border border-green-50/50 flex gap-4 relative">
              <div className="relative">
                {pet.photo
                  ? <img className="w-20 h-20 rounded-full object-cover" alt={pet.name} src={pet.photo}/>
                  : <div className="w-20 h-20 rounded-full bg-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-secondary-container text-[36px]">pets</span>
                    </div>
                }
                <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">pets</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-h3 text-body-lg font-bold">{pet.name}</h3>
                    <p className="text-caption font-caption text-outline">{pet.breed || pet.species}</p>
                  </div>
                  <span className="bg-primary/15 text-primary px-3 py-1 rounded-full text-[12px] font-bold">Activo</span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-outline">person</span>
                  <span className="text-label-sm font-label-sm text-on-surface-variant">
                    {pet.client_name ?? `Cliente #${pet.client}`}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-center ml-2">
                <button className="p-2 hover:bg-green-50 rounded-lg text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
                <button className="p-2 hover:bg-green-50 rounded-lg text-outline transition-colors">
                  <span className="material-symbols-outlined text-[20px]">edit</span>
                </button>
                <button className="p-2 hover:bg-red-50 rounded-lg text-error transition-colors">
                  <span className="material-symbols-outlined text-[20px]">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </main>


    </div>
  );
}
