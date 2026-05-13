import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/auth"

export default function Register() {
  const navigate = useNavigate()
  const [ form, setForm ] = useState({
    username: "",
    email: "",
    password: "",
    organization_name: ""
  })

  const [error, setError ] = useState(null)
  const [ loading, setLoading ] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null)

    try {
      setLoading(true)

      await register(form)

      navigate("/login")
    } catch (error) {
       console.error(error.response?.data)

       const errors = error.response?.data

       if (errors) {
        const firstError = Object.values(errors)[0][0]
        setError(firstError)
       } else {
        setError("la Clinica ya Existe")
       }
    } finally {
      setLoading(false)
    }
  }



  return (
    <div className="bg-background px-20 font-body-md text-on-surface min-h-screen flex flex-col">
      {/* TopAppBar */}
      <header className="bg-emerald-50/50 backdrop-blur-md sticky top-0 z-50 border-b border-emerald-100 shadow-[0_8px_30px_rgb(22,101,52,0.05)]">
        <div className="flex items-center justify-between px-8 py-4 w-full max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-emerald-600 flex items-center gap-2 font-manrope tracking-tight">
            <span className="material-symbols-outlined">pets</span>
            VetSystemSaas
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/features" className="text-slate-600 font-label-sm text-label-sm hover:text-emerald-700 transition-colors">Características</Link>
            <Link to="/pricing" className="text-slate-600 font-label-sm text-label-sm hover:text-emerald-700 transition-colors">Precios</Link>
            <Link to="/login" className="px-5 py-2 rounded-full border border-primary text-primary font-label-sm text-label-sm hover:bg-primary-container/10 transition-all">Iniciar sesión</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-16 px-gutter relative overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
          <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-secondary-container blur-[100px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] bg-primary-container/20 blur-[100px] rounded-full"></div>
        </div>

        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Value Proposition */}
          <div className="lg:col-span-5 flex flex-col gap-stack-lg">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-on-secondary-container/10 text-on-secondary-container rounded-full w-fit">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="font-label-sm text-label-sm">Standard de Excelencia Clínica</span>
            </div>
            <div>
              <h1 className="font-h1 text-h1 text-on-background mb-4">Crea tu cuenta profesional</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                Únete a la red de clínicas veterinarias más eficiente y transforma el cuidado animal con herramientas diseñadas para expertos.
              </p>
            </div>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-container/15 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">clinical_notes</span>
                </div>
                <div>
                  <h4 className="font-label-sm text-label-sm text-on-background">Historial Clínico Digital</h4>
                  <p className="text-caption font-caption text-on-surface-variant">Gestión completa de pacientes y tratamientos en la nube.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-container/15 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">calculate</span>
                </div>
                <div>
                  <h4 className="font-label-sm text-label-sm text-on-background">Calculadora de Dosis</h4>
                  <p className="text-caption font-caption text-on-surface-variant">Precisión médica garantizada con cálculos automáticos.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Registration Card */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg bg-surface-container-lowest rounded-xl p-10 ambient-shadow border border-emerald-50">
              <div className="mb-8">
                <h2 className="font-h3 text-h3 text-on-background">Comienza tu registro</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Tardará menos de 2 minutos.</p>
              </div>

              {error && (
                  <p className="text-red-500 text-sm mb-4">{error}</p> )}


              <form onSubmit={ handleSubmit } className="space-y-6">
                {/* Clinic Name */}
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant block ml-1">Nombre de la clínica</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">local_hospital</span>
                    <input className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all placeholder:text-outline-variant"
                    placeholder="Ej: Veter Valledupar"
                    name="organization_name"
                    type="text"
                    onChange={handleChange} />
                  </div>
                </div>

                {/* Full Name */}
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant block ml-1">Nombre completo</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">person_outline</span>
                    <input className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all placeholder:text-outline-variant"
                     placeholder="BreynerU1992"
                     name="username"
                     type="text"
                     onChange={ handleChange } />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant block ml-1">Correo electrónico</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">mail</span>
                    <input className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all placeholder:text-outline-variant"
                    placeholder="breynersmithustariz@gmail.com"
                    type="email"
                    name="email"
                    onChange={ handleChange }/>
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant block ml-1">Contraseña</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">lock_open</span>
                    <input className="w-full pl-12 pr-12 py-3 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all placeholder:text-outline-variant"
                    placeholder="••••••••"
                    name="password"
                    type="password"
                    onChange={ handleChange } />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant hover:text-outline transition-colors" type="button">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </div>
                  <p className="text-caption font-caption text-outline ml-1">Mínimo 8 caracteres, incluye un número.</p>
                </div>

                {loading ? "Creando..." : "Registrarse"}


                <button className="w-full bg-primary-container text-white font-label-sm text-label-sm py-4 rounded-xl hover:bg-secondary transition-all transform active:scale-[0.98] shadow-lg shadow-primary-container/20 flex items-center justify-center gap-2" type="submit">
                  Empezar ahora
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-surface-container text-center">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  ¿Ya tienes cuenta?
                  <Link to="/login" className="text-secondary font-semibold hover:underline underline-offset-4 ml-1">Iniciar sesión</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-emerald-100 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 w-full max-w-7xl mx-auto gap-6 font-manrope">
          <div className="flex flex-col gap-2">
            <div className="text-lg font-bold text-emerald-700">VetSystemSaas</div>
            <p className="text-sm font-medium text-slate-500">© 2024 VetSystemSaas. Todos los derechos reservados.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy" className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors">Politica de privacidad</Link>
            <Link to="/terms" className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors">Terminos de uso</Link>
            <Link to="/help" className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors">Centro de ayuda</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
