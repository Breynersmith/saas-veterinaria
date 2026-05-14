# 🐾 VetSaaS - Sistema de Gestión para Clínicas Veterinarias

VetSaaS es una aplicación SaaS (Software as a Service) diseñada para clínicas veterinarias. Permite gestionar clientes, mascotas, citas, facturación y usuarios con soporte multi-tenant, de manera que cada clínica maneja su información de forma aislada y segura.

---

## 🚀 Demo

> Próximamente disponible.

* Frontend: ****** pendiente
* Backend API: **** pendiente

---

## ✨ Características

### 🔐 Autenticación y Seguridad

* Registro de nuevas clínicas con usuario administrador.
* Login con JWT.
* Endpoint `/me` para obtener el usuario autenticado.
* Rutas protegidas en frontend.

### 🏢 Multi-Tenant

* Cada usuario pertenece a una organización (clínica).
* Los datos están completamente aislados por organización.

### 👥 Gestión de Clientes

* Crear, editar y eliminar clientes.
* Visualización de mascotas asociadas.

### 🐶 Gestión de Mascotas

* Registro de mascotas.
* Foto, especie, raza, peso, género y fecha de nacimiento.

### 📅 Gestión de Citas

* Programación y seguimiento de citas.
* Estados de citas.

### 💰 Facturación

* Generación de facturas.
* Seguimiento de pagos.

### 📊 Dashboard

* Actividad reciente.
* Citas próximas.
* Indicadores y métricas.

---

## 🛠️ Stack Tecnológico

### Backend

* Python
* Django
* Django REST Framework
* Simple JWT
* SQLite (desarrollo)
* PostgreSQL (producción)

### Frontend

* React
* Vite
* React Router
* Axios
* Tailwind CSS

### Despliegue

* Render (backend)
* Vercel (frontend)

---

## 📁 Arquitectura del Proyecto

```text
Veterinary-Saas/
├── config/                 # Backend Django
│   ├── accounts/
│   ├── organizations/
│   ├── clients/
│   ├── pets/
│   ├── appointments/
│   ├── billing/
│   ├── core/
│   ├── config/
│   └── manage.py
│
└── frontend/               # Frontend React
    ├── src/
    │   ├── components/
    │   ├── layout/
    │   ├── pages/
    │   ├── services/
    │   └── api.js
    └── package.json
```

---

## 🗂️ Modelo de Negocio

### Organization

Representa una clínica veterinaria.

### User

Usuarios con roles:

* Admin
* Veterinario
* Asistente

### Client

Propietarios de mascotas.

### Pet

Mascotas registradas.

### Appointment

Citas veterinarias.

### Invoice

Facturación.

---

## 🔌 API Endpoints

### Autenticación

| Método | Endpoint              | Descripción                   |
| ------ | --------------------- | ----------------------------- |
| POST   | `/api/auth/register/` | Crear clínica + usuario admin |
| POST   | `/api/auth/login/`    | Obtener tokens JWT            |
| POST   | `/api/auth/refresh/`  | Renovar access token          |
| GET    | `/api/auth/me/`       | Obtener usuario autenticado   |

### Clientes

| Método | Endpoint             |
| ------ | -------------------- |
| GET    | `/api/clients/`      |
| POST   | `/api/clients/`      |
| GET    | `/api/clients/{id}/` |
| PUT    | `/api/clients/{id}/` |
| DELETE | `/api/clients/{id}/` |

### Mascotas

| Método | Endpoint          |
| ------ | ----------------- |
| GET    | `/api/pets/`      |
| POST   | `/api/pets/`      |
| GET    | `/api/pets/{id}/` |
| PUT    | `/api/pets/{id}/` |
| DELETE | `/api/pets/{id}/` |

### Citas

| Método | Endpoint             |
| ------ | -------------------- |
| GET    | `/api/appointments/` |
| POST   | `/api/appointments/` |

### Facturas

| Método | Endpoint         |
| ------ | ---------------- |
| GET    | `/api/invoices/` |
| POST   | `/api/invoices/` |

---

## ⚙️ Instalación Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/Breynersmith/saas-veterinaria.git
cd saas-veterinaria
```

---

## 🐍 Backend

### Crear entorno virtual

```bash
cd config
python -m venv venv
source venv/bin/activate
```

### Instalar dependencias

```bash
pip install -r requirements.txt
```

### Migraciones

```bash
python manage.py migrate
```

### Ejecutar servidor

```bash
python manage.py runserver
```

Backend disponible en:

```text
http://127.0.0.1:8000
```

---

## ⚛️ Frontend

### Instalar dependencias

```bash
cd ../frontend
npm install
```

### Variables de entorno

Crear archivo `.env`:

```env
VITE_API_URL=http://127.0.0.1:8000/api
```

### Ejecutar aplicación

```bash
npm run dev
```

Frontend disponible en:

```text
http://localhost:5173
```

---

## 🔐 Variables de Entorno del Backend

Crear archivo `.env` en `config/`:

```env
SECRET_KEY=tu-clave-secreta
DEBUG=True
ALLOWED_HOSTS=127.0.0.1,localhost
```

---

## 🧪 Credenciales de Prueba

Puedes registrar una nueva clínica desde la pantalla de registro.

---

## 📸 Capturas de Pantalla

> Agrega aquí imágenes del Home, Login, Dashboard, Clientes y Mascotas.

---

## 🧠 Decisiones de Arquitectura

### Multi-Tenancy

Se implementa mediante el modelo `Organization` y una clase base `BaseOrganizationViewSet` que:

* Filtra automáticamente por `request.user.organization`.
* Asigna la organización al crear nuevos registros.
* Impide acceso a datos de otras clínicas.

### JWT

Se utiliza Simple JWT para autenticación basada en tokens.

### Frontend

Se separa la lógica por páginas, componentes y servicios para mantener el código escalable.

---

## 📈 Mejoras Futuras

* Historial clínico.
* Recordatorios por WhatsApp o email.
* Reportes y estadísticas.
* Gestión de inventario.
* Suscripciones y pagos en línea.

---

## 👨‍💻 Autor

**Breyner Ustariz**

* GitHub: [https://github.com/Breynersmith](https://github.com/Breynersmith)
* LinkedIn: Agrega aquí tu perfil.

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
