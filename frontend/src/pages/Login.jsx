import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/auth"


const Login = () => {
const navigate = useNavigate();
const [ email, setEmail ] = useState("")
const [ password, setPassword ] = useState("")
const [ username, setUserName ] = useState("")

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await login(username, password)

    navigate("/dashboard")
  } catch (error) {
    console.log(error)
    alert("CREEDENCIALES INCORRECTAS")
  }

};


  return (

   <div className="min-h-screen flex items-center justify-center p-6 bg-[#f0fdf4]">
   <div className="w-full max-w-md flex flex-col gap-stack-lg">

   <header className="flex flex-col items-center gap-stack-sm text-center">
   <div className="flex items-center gap-2 mb-2">
   <span className="material-symbols-outlined text-primary text-4xl" data-icon="pets">pets</span>
   <span className="font-h1 text-h1 text-on-surface tracking-tight text-primary">VetSystemSaas</span>
   </div>
   <h1 className="font-h2 text-h3 text-on-surface">Bienvenido de nuevo</h1>
   <p className="font-body-md text-on-surface-variant max-w-[280px]">Gestione su clínica veterinaria con precisión y empatía.</p>
   </header>

   <main className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow border border-emerald-100/20">
   <form  className="flex flex-col gap-stack-md" onSubmit={handleSubmit}
    >

   <div className="flex flex-col gap-2">
   <label className="font-label-sm text-on-surface-variant px-1" htmlFor="email">Usuario</label>
   <div className="relative group">
   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
   <span className="material-symbols-outlined">email</span>
   </div>
   <input className="w-full bg-white border border-outline-variant rounded-lg py-4 pl-12 pr-4 font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-primary transition-all placeholder:text-outline-variant/60" id="email" name="usernname" placeholder="Usuirio o correo" required="" onChange={(e) => setUserName(e.target.value)}/>
   </div>
   </div>

   <div className="flex flex-col gap-2">
   <div className="flex justify-between items-center px-1">
   <label className="font-label-sm text-on-surface-variant" htmlFor="password">Contraseña</label>

   <a className="font-label-sm text-secondary hover:text-primary transition-colors" href="#">¿Olvidaste tu contraseña?</a>
   </div>
   <div className="relative group">
   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
   <span className="material-symbols-outlined" data-icon="lock">lock</span>
   </div>
   <input className="w-full bg-white border border-outline-variant rounded-lg py-4 pl-12 pr-12 font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-primary transition-all placeholder:text-outline-variant/60" id="password" name="password" placeholder="••••••••" required="" type="password" onChange={(e) => setPassword(e.target.value)}/>
   <button className="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-on-surface transition-colors" type="bsubmit">
   <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
   </button>
   </div>
   </div>

   <div className="flex items-center gap-3 mt-2">
   <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" id="remember" type="checkbox"/>
   <label className="font-body-md text-on-surface-variant cursor-pointer" htmlFor="remember">Recordar mi sesión</label>
   </div>

   <button className="w-full bg-primary-container text-on-primary font-h3 text-body-lg py-4 rounded-lg shadow-lg hover:bg-primary transition-all active:scale-95 flex items-center justify-center gap-2 mt-4" type="submit">
   <span>Iniciar sesión</span>
   <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
   </button>
   </form>

   <div className="relative my-8">
   <div className="absolute inset-0 flex items-center">
   <span className="w-full border-t border-outline-variant"></span>
   </div>

   </div>


   </main>

   <footer className="text-center flex flex-col gap-4">
   <p className="font-body-md text-on-surface-variant">
       ¿Aún no tienes cuenta?
      <Link className="text-secondary font-bold hover:underline underline-offset-4 ml-1" to="/register">Crear cuenta</Link>
   </p>
   <div className="flex justify-center gap-6 mt-4">
   <a className="font-caption text-outline hover:text-on-surface transition-colors" href="#">Soporte</a>
   <a className="font-caption text-outline hover:text-on-surface transition-colors" href="#">Privacidad</a>
   </div>
   </footer>
   </div>

   <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/30 rounded-full blur-[120px] -z-10"></div>
   <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-fixed-dim/20 rounded-full blur-[100px] -z-10"></div>
   </div>
  );
};

export default Login
