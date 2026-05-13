import { useState } from "react"
import { createAppointment } from "../services/appointmentService"

export default function CreateAppointments({ handleCreateAppointments, pets }) {

  const [search, setSearch] = useState("")
  const [filteredPets, setFilteredPets] = useState([])
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    pet: "",
    date: "",
    time: "",
    status: "pending",
    notes: "",
  })

  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)
    if (value.trim() === "") {
      setFilteredPets([])
      return
    }
    const results = pets.filter(p =>
      p.name.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredPets(results)
  }

  const handleSelectPet = (pet) => {
    setForm({ ...form, pet: pet.id })
    setSearch(pet.name)
    setFilteredPets([])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const datetime = `${form.date}T${form.time}`
      await createAppointment({ pet: form.pet, date: datetime, status: form.status, notes: form.notes })
      alert("Cita agendada")
      handleCreateAppointments()
    } catch (error) {
      console.error("Error al agendar cita", error.response?.data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div >
      <form onSubmit={handleSubmit} className="fixed inset-0 bg-[#161d16]/60 backdrop-blur-sm z-50 flex items-center justify-center p-gutter">

        <div className="bg-surface-container-lowest rounded-[16px] custom-shadow p-stack-lg space-y-stack-lg">
          <div className="relative mb-stack-lg">
              <h1 className="font-h2 text-h2 text-on-surface mb-unit">Agendar Cita</h1>
              <button
                  onClick={ handleCreateAppointments }
                  className="absolute top-0 right-0 text-outline hover:text-on-surface transition-colors p-2 rounded-full hover:bg-surface-container-low">
                <span className="material-symbols-outlined">close</span>
              </button>

                  <p className="font-body-md text-on-surface-variant">Complete los detalles para programar una nueva consulta veterinaria.</p>
                </div>


          <div className="space-y-unit">
            <label className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">pets</span>
              Seleccionar Mascota
            </label>
            <div className="relative">
              <input
                className="w-full h-[52px] px-4 bg-white border border-emerald-50 rounded-xl focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all font-body-md"
                placeholder="Buscar mascota (ej. Luna - Perro)"
                type="text"
                value={search}
                onChange={handleSearch}
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              {filteredPets.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-[#dcfce7] rounded-lg mt-1 shadow-md max-h-48 overflow-y-auto">
                  {filteredPets.map(pet => (
                    <li
                      key={pet.id}
                      onClick={() => handleSelectPet(pet)}
                      className="px-4 py-3 hover:bg-emerald-50 cursor-pointer text-on-surface font-label-sm"
                    >
                      {pet.name} <span className="text-outline text-caption">#{pet.id}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="space-y-unit">
              <label className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                Fecha
              </label>
              <input
                className="w-full h-[52px] px-4 bg-white border border-emerald-50 rounded-xl focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all font-body-md"
                type="date"
                name="date"
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </div>
            <div className="space-y-unit">
              <label className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                Hora (24h)
              </label>
              <input
                className="w-full h-[52px] px-4 bg-white border border-emerald-50 rounded-xl focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all font-body-md"
                type="time"
                name="time"
                onChange={(e) => setForm({ ...form, time: e.target.value })}
              />
            </div>
          </div>


          <div className="space-y-unit">
            <label className="font-label-sm text-label-sm text-on-surface-variant">Estado de la Cita</label>
            <div className="flex flex-wrap gap-stack-sm">
              {[
                { value: "pending", label: "Pendiente", color: "bg-primary" },
                { value: "confirmed", label: "Confirmada", color: "bg-outline" },
                { value: "cancelled", label: "Cancelada", color: "bg-error" },
              ].map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setForm({ ...form, status: option.value })}
                  className={`px-4 py-2 rounded-full border font-label-sm flex items-center gap-2 transition-all ${
                    form.status === option.value
                      ? "border-primary-container bg-primary-container/10 text-primary"
                      : "border-outline-variant text-on-surface-variant hover:bg-surface-container"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${option.color}`}></span>
                  {option.label}
                </button>
              ))}
            </div>
          </div>


          <div className="space-y-unit">
            <label className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">notes</span>
              Notas de la Consulta
            </label>
            <textarea
              className="w-full px-4 py-3 bg-white border border-emerald-50 rounded-xl focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all font-body-md resize-none"
              placeholder="Observaciones de la consulta..."
              rows="4"
              name="notes"
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            ></textarea>
          </div>


          <div className="pt-stack-md">
            <button
              type="submit"
              disabled={loading}
              className="w-full h-[56px] bg-primary-container hover:bg-secondary text-on-primary-container font-h3 flex items-center justify-center gap-2 rounded-xl transition-all active:scale-95 shadow-lg shadow-emerald-900/10"
            >
              <span className="material-symbols-outlined">event_available</span>
              {loading ? "Agendando..." : "Agendar cita"}
            </button>
          </div>
        </div>

      </form>
    </div>
  )
}
