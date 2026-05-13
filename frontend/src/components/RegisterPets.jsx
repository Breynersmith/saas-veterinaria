import { createPets } from "../services/petService"
import { useState } from "react"
import SearchInput from "../components/SearchInput"


export default function RegisterPets ({handleRegisterPets, fetchPets, clients }) {

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

  const [ form, setForm ] = useState({
    name: "",
    species: "dog",
    breed: "",
    client: "",
    age: "",
    gender: "",
    weight: 0,
    image: null,
  })
  const [ loading, setLoading ] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    try {
      await createPets(form)

      alert("Mascota Registrada")

      setForm({
          name: "",
          species: "",
          breed: "",
          owner: 1,
          birth_date: "",
          gender: "",
          weight: 0,
          image: null,
      })

      handleRegisterPets()

    } catch (error){
      console.error("Error al registrar mascota ",error.response?.data)
    } finally {
      fetchPets()
      handleRegisterPets()
      setLoading(false)

    }

}

return (
    <div className="bg-background font-body-md text-on-background min-h-screen">

    <div className="fixed inset-0 overflow-hidden pointer-events-none filter blur-lg grayscale opacity-40 ">
    <header className="bg-[#f0fdf4] border-b border-[#dcfce7] px-6 py-4 flex justify-between items-center w-full">
    <div className="flex items-center gap-2">
    <span className="material-symbols-outlined text-[#166534]">pets</span>
    <span className="font-manrope text-xl font-extrabold text-[#166534]">VetSystem</span>
    </div>
    <div className="flex gap-4">
    <div className="w-8 h-8 rounded-full bg-surface-container"></div>
    </div>
    </header>

    </div>


    <form onSubmit={ handleSubmit } className="fixed inset-0 bg-[#161d16]/60 backdrop-blur-sm z-50 flex items-center justify-center p-gutter">


    <div className="bg-white w-full max-w-2xl rounded-[16px] custom-shadow overflow-hidden flex flex-col  relative">


    <div className="px-gutter py-stack-md border-b border-surface-container flex justify-between items-center">
    <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
    <span className="material-symbols-outlined text-on-secondary-container">add_reaction</span>
    </div>
    <div>
    <h2 className="font-h3 text-h3 text-on-surface">Registrar mascota</h2>
    <p className="font-caption text-caption text-outline">Complete los detalles para el nuevo paciente clínico.</p>
    </div>
    </div>
    <button onClick={ handleRegisterPets } className="text-outline hover:text-on-surface transition-colors p-2 rounded-full hover:bg-surface-container-low">
    <span className="material-symbols-outlined">close</span>
    </button>
    </div>

    <div className="p-gutter overflow-y-auto max-h-[663px]">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">


    <div className="col-span-1 md:col-span-2">
    <h3 className="font-label-sm text-label-sm text-primary mb-stack-md flex items-center gap-2">
    <span className="material-symbols-outlined text-[18px]">info</span>
                                Información Básica
                            </h3>
    </div>


    <div className="flex flex-col gap-unit">
    <label className="font-label-sm text-label-sm text-on-surface-variant">Nombre de la mascota</label>
    <input
    className="w-full px-4 py-3 rounded-lg border border-[#dcfce7] bg-white text-on-surface focus:border-primary-container transition-all"
    placeholder="Ej. Luna"
    required=""
    type="text"
    name="name"
    onChange={ handleChange }/>
    </div>

    <div className="flex flex-col gap-unit">
    <label className="font-label-sm text-label-sm text-on-surface-variant">Especie</label>
    <div className="relative">
    <select
        className="w-full px-4 py-3 rounded-lg border border-[#dcfce7] bg-white text-on-surface appearance-none focus:border-primary-container transition-all"
        name="species"
        onChange={ handleChange }>
    <option value="dog">Perro</option>
    <option value="cat">Gato</option>
    <option value="bird">Ave</option>
    <option value="exotic">Exótico</option>
    </select>
    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
    </div>
    </div>


    <div className="flex flex-col gap-unit">
    <label className="font-label-sm text-label-sm text-on-surface-variant">Raza</label>
    <input
          className="w-full px-4 py-3 rounded-lg border border-[#dcfce7] bg-white text-on-surface focus:border-primary-container transition-all"
          placeholder="Ej. Golden Retriever"
          type="text"
          name="breed"
          onChange={ handleChange }/>
    </div>

    <div className="flex flex-col gap-unit">
    <label className="font-label-sm text-label-sm text-on-surface-variant">Dueño / Cliente</label>
    <div className="relative">
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
    </div>
    <div className="col-span-1 md:col-span-2 pt-stack-sm border-t border-surface-container mt-stack-sm"></div>


    <div className="col-span-1 md:col-span-2">
    <h3 className="font-label-sm text-label-sm text-primary mb-stack-md flex items-center gap-2">
    <span className="material-symbols-outlined text-[18px]">monitor_weight</span>
                                Atributos Físicos
                            </h3>
    </div>


    <div className="flex flex-col gap-unit">
    <label className="font-label-sm text-label-sm text-on-surface-variant">Fecha de Nacimiento</label>
    <div className="flex gap-2">
    <input
    className="w-48 px-4 py-3 rounded-lg border border-[#dcfce7] bg-white text-on-surface focus:border-primary-container transition-all"
    placeholder=""
    type="date"
    name="birth_date"
    onChange={ handleChange }/>

    </div>
    </div>

  <div className="flex flex-col gap-unit">
    <label className="font-label-sm text-label-sm text-on-surface-variant">Género</label>
    <div className="flex p-1 bg-surface-container-low rounded-lg gap-1 border border-[#dcfce7]">
      <button
        type="button"
        onClick={() => setForm({ ...form, gender: "male" })}
        className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md font-label-sm transition-colors ${
          form.gender === "male"
            ? "bg-white shadow-sm text-primary"
            : "text-outline hover:bg-surface-container-high"
        }`}
      >
        <span className="material-symbols-outlined text-[18px]">male</span>
        Macho
      </button>
      <button
        type="button"
        onClick={() => setForm({ ...form, gender: "female" })}
        className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md font-label-sm transition-colors ${
          form.gender === "female"
            ? "bg-white shadow-sm text-primary"
            : "text-outline hover:bg-surface-container-high"
        }`}
      >
        <span className="material-symbols-outlined text-[18px]">female</span>
        Hembra
      </button>
    </div>
  </div>

    <div className="flex flex-col gap-unit">
    <label className="font-label-sm text-label-sm text-on-surface-variant">Peso (Kg) <span className="text-caption text-outline font-normal">(Opcional)</span></label>
    <div className="relative">
    <input
    className="w-full px-4 py-3 rounded-lg border border-[#dcfce7] bg-white text-on-surface focus:border-primary-container transition-all"
    placeholder="0.0" step="0.1"
    type="number"
    name="weight"/>
    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-outline font-medium">kg</span>
    </div>
    </div>


    <div className="flex flex-col gap-unit">
    <label className="font-label-sm text-label-sm text-on-surface-variant">Foto de perfil</label>
    <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#dcfce7] flex items-center justify-center bg-surface overflow-hidden">

     {form.photo
        ? <img src={URL.createObjectURL(form.photo)} alt="Pet Preview" className="w-full h-full object-cover"/>
        : <span className="material-symbols-outlined text-outline">pets</span>
      }
    </div>
    <input
          id="photo-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => setForm({ ...form, photo: e.target.files[0] })}
        />

    <button
      className="text-primary text-label-sm hover:underline font-semibold flex items-center gap-1"
      type="button"
      onClick={() => document.getElementById("photo-upload").click()}>
    <span className="material-symbols-outlined text-[18px]">upload</span>
                                    Subir foto
                                </button>
    </div>
    </div>
    </div>
    </div>


    <div className="px-gutter py-stack-md bg-surface-container-lowest border-t border-surface-container flex flex-col-reverse sm:flex-row justify-end gap-3">
    <button className="px-6 py-3 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container-high transition-all font-label-sm" type="button">
                        Cancelar
                    </button>
    <button
    type="submit"
    className="px-8 py-3 rounded-lg bg-primary-container text-white hover:bg-secondary font-h3 text-[16px] shadow-sm hover:shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
    >
    <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                        Registrar mascota
                    </button>
    </div>
    </div>
    </form>


    <div className="fixed bottom-10 right-10 z-10 hidden lg:block opacity-20 scale-150 grayscale rotate-12">
    <span className="material-symbols-outlined text-[120px] text-primary" data-weight="fill">pets</span>
    </div>
    </div>
  )
}
