import { useState } from "react"
import { createClient } from "../services/ClientService"

export default function AddClient ({ handleModalAddClient, fetchClients }){
  const [ form, setForm ] = useState({
    name: "",
    phone: "",
    email: "",
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
      await createClient(form)

      alert("cliente agregado")

      setForm({
        name: "",
        phone: "",
        email: ""
      })

      handleModalAddClient()

    } catch (error){
      console.error("Error al guardar cliente ",error.response?.data)
    } finally {
      fetchClients()
      setLoading(false)

    }
  }

  return (
    <div >

    <div  >

    <header >

    <div >
    <span className="material-symbols-outlined text-emerald-500" data-icon="pets">pets</span>
    <h1 className="font-h3 text-h3 font-bold text-emerald-600">Clinic Overview</h1>
    </div>
    <div className="w-10 h-10 rounded-full bg-surface-container"></div>
    </header>
    </div>

    <form onSubmit={ handleSubmit } className="fixed inset-0 bg-[#161d16]/60 backdrop-blur-sm z-50 flex items-center justify-center p-gutter">

    <div className="bg-surface-container-lowest   w-full max-w-[560px] rounded-xl custom-shadow overflow-hidden relative border border-emerald-50">

    <button onClick={ handleModalAddClient } className="absolute top-gutter right-gutter p-unit text-outline hover:bg-surface-container rounded-full transition-colors">
    <span className="material-symbols-outlined" data-icon="close">close</span>
    </button>

    <div className="p-stack-lg  border-b border-surface-container-high">
    <div className="flex items-center gap-stack-sm mb-unit">
    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
    <span className="material-symbols-outlined text-primary" data-icon="person_add">person_add</span>
    </div>
    <h2 className="font-h3 text-h3 text-on-surface">Nuevo Cliente</h2>
    </div>
    <p className="text-body-md text-outline">Ingresa la información básica del dueño de la mascota.</p>
    </div>

    <div class="p-stack-lg flex flex-col gap-stack-lg">

    <div className="space-y-unit">
    <label className="block font-label-sm text-label-sm text-on-surface">Nombre Completo</label>
    <div className="relative">
    <input className="w-full bg-white border border-[#dcfce7] rounded-lg px-stack-md py-stack-sm focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all placeholder:text-outline-variant"
    placeholder="Ej: María García"
    type="text"
    onChange={handleChange}
    name="name"/>
    </div>
    </div>

    <div className="space-y-unit">
    <label className="block font-label-sm text-label-sm text-on-surface">Teléfono</label>
    <div className="flex gap-unit">
    <div className="flex items-center bg-surface-container px-3 rounded-lg border border-[#dcfce7] text-on-surface-variant font-label-sm">
    <span className="material-symbols-outlined text-[18px] mr-1" data-icon="flag">flag</span>
                                +57
                            </div>
    <input className="flex-1 bg-white border border-[#dcfce7] rounded-lg px-stack-md py-stack-sm focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all placeholder:text-outline-variant"
    placeholder="3009947274"
    type="tel"
    onChange={handleChange}
    name="phone"/>
    </div>
    </div>

    <div className="space-y-unit">
    <div className="flex justify-between items-center">
    <label classNName="block font-label-sm text-label-sm text-on-surface">Correo Electrónico</label>
    <span className="text-caption text-outline italic">Opcional</span>
    </div>
    <input className="w-full bg-white border border-[#dcfce7] rounded-lg px-stack-md py-stack-sm focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all placeholder:text-outline-variant"
    placeholder="ejemplo@email.com"
    type="email"
    onChange={handleChange}
    name="email"/>
    </div>


    </div>


    <div className="p-stack-lg bg-surface-container-low flex flex-col sm:flex-row-reverse gap-stack-md">

    <button type="submit" className="flex-1 h-12 bg-primary-container text-on-primary-container font-semibold rounded-lg flex items-center justify-center gap-3 shadow-md hover:bg-primary transition-all active:scale-[0.98]">
    <span className="material-symbols-outlined text-[20px] animate-spin" data-icon="progress_activity">progress_activity</span>
                        {loading ? "Guardando..." : "Guardar Cliente"}
                    </button>
    <button className="flex-1 h-12 bg-transparent border-[1.5px] border-outline text-on-surface font-semibold rounded-lg hover:bg-surface-variant transition-colors">
                        Cancelar
                    </button>
    </div>

    <div className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-on-secondary-container text-white px-stack-md py-2 rounded-full flex items-center gap-2 shadow-lg scale-90 opacity-0 transition-all">
    <span className="material-symbols-outlined text-[18px]" data-icon="check_circle" data-weight="fill">check_circle</span>
    <span className="text-label-sm">Cliente agregado correctamente</span>
    </div>
    </div>
    </form>

    <div className="fixed bottom-0 right-0 p-gutter opacity-10 pointer-events-none">
    <img alt="vet clinic abstract" className="w-64 grayscale" data-alt="Abstract soft focus background of a modern veterinary examination room with clinical equipment and natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNuXmHsyZytK5JHYFJ0Pfdu2cB8imH7Mv8qNG1SKUYQH5XwXvdvx1jRZ5_wisjY5bhlHW2uKJ6dHVk6Y5N-gjg-25hecAI4LbUc9zfHgLGlpZR3cv3GueDmeLJhZN8mWzdl4w6es6NAqDCp_Mm2pTMICKl-l_hOvFdqoCNnfjPsXarPiYIG9Drmj3YVRGrfkvTL_T4ZStFtD7foIMyJJxK7kBy8q9PMd9lhvBmd15YhypHQ-qqRLGVH7y50bGmvL0K4oA4ORJsejtm"/>
    </div>
    </div>
  )
}
