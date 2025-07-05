# 🚀 SimulaPro UI – Aplicación Frontend en Angular 15

**SimulaPro UI** es la interfaz de usuario del sistema **SimulaPro**, construida con **Angular 15**. Esta aplicación permite a los usuarios interactuar con los módulos de simulación, visualización de datos y administración del sistema de forma clara, moderna e intuitiva.

---

## 📦 Tecnologías utilizadas

- ✅ **Angular 15**
- ✅ **Nodejs version 18.16.0**
- 🎨 **Angular Material** – Componentes UI responsivos
- 📊 **ng2-charts + Chart.js** – Visualización de datos con gráficos
- 🔔 **Toastr** – Notificaciones no intrusivas
- 💬 **SweetAlert2** – Diálogos elegantes y personalizables
- 🔄 **RxJS** – Programación reactiva
- ⚙️ **dotenv** – Manejo de variables de entorno

---

## 📁 Estructura del Proyecto (resumen)
## 📁 Estructura del Proyecto

```plaintext
SIMULAPROFRONTEND/
│
├── .angular/               # Configuración interna de Angular CLI
├── .vscode/                # Configuraciones del editor VSCode
├── node_modules/           # Dependencias del proyecto
│
├── src/                    # Código fuente principal
│   ├── app/                # Lógica principal de la aplicación
│   │   ├── guards/         # Protección de rutas (AuthGuard, etc.)
│   │   ├── layout/         # Componentes estructurales (header, footer)
│   │   ├── modules/        # Módulos funcionales (simulador, cursos, etc.)
│   │   ├── shared/         # Componentes y servicios reutilizables
│   │   ├── app-routing.module.ts  # Definición de rutas principales
│   │   ├── app.component.css      # Estilos del componente principal
│   │   ├── app.component.html     # Plantilla principal
│   │   ├── app.component.spec.ts  # Pruebas unitarias del componente principal
│   │   ├── app.component.ts       # Lógica del componente principal
│   │   └── app.module.ts          # Módulo raíz de la app
│   │
│   ├── assets/             # Recursos estáticos como imágenes
│   │   ├── .gitkeep
│   │   ├── pmij.jpg
│   │   └── pmp.webp
│   │
│   ├── environments/       # Configuraciones por entorno (dev, prod)
│   ├── favicon.ico         # Ícono de la app
│   ├── index.html          # HTML principal de la aplicación
│   ├── main.ts             # Punto de entrada principal de Angular
│   └── styles.css          # Estilos globales
│
├── .editorconfig           # Reglas de formato de código
├── .gitignore              # Archivos/carpetas ignorados por Git
├── angular.json            # Configuración general de Angular
├── package.json            # Dependencias y scripts del proyecto
├── package-lock.json       # Detalles de versiones de dependencias
└── README.md               # Este archivo

## ⚙️ Scripts disponibles

Puedes ejecutar los siguientes comandos desde la raíz del proyecto:

```bash
# Desarrollo
npm run dev

# Compilación para producción
npm run build

# Modo observación (build automático)
npm run watch

# Ejecución de pruebas unitarias
npm run test