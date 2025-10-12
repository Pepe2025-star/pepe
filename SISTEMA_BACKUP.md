# Sistema de Backup y Exportación - TV a la Carta

## 📦 Funcionalidades Implementadas

Este documento describe las funcionalidades de backup y exportación implementadas en el panel de control del sistema TV a la Carta.

---

## 🎯 Características Principales

### 1. **Exportar Configuración** ✅
- **Ubicación:** Panel de Control → Sección Sistema → Botón "Exportar Configuración"
- **Función:** Genera un archivo JSON con toda la configuración actual del sistema
- **Contenido:**
  - Precios (películas, series, novelas, recargo por transferencia)
  - Zonas de entrega completas
  - Catálogo de novelas
  - Configuración del sistema
  - Metadatos y estado de sincronización
  - Fecha de exportación

**Archivo generado:** `tv-a-la-carta-config-[FECHA].json`

### 2. **Importar Configuración** ✅
- **Ubicación:** Panel de Control → Sección Sistema → Botón "Importar Configuración"
- **Función:** Importa una configuración previamente exportada
- **Proceso:**
  1. Click en "Importar Configuración"
  2. Pegar el contenido del archivo JSON
  3. Click en "Importar"
  4. El sistema valida y aplica la configuración

### 3. **Exportar Backup Full** ✅ NUEVO
- **Ubicación:** Panel de Control → Sección Sistema → Botón "Exportar Backup Full"
- **Función:** Genera un backup completo del sistema con TODOS los archivos de código fuente
- **Características:**
  - ✅ Incluye TODOS los archivos del proyecto (.tsx, .ts, .css, .json, etc.)
  - ✅ Embebe la configuración actual en los archivos correspondientes
  - ✅ Genera README con información detallada del backup
  - ✅ Incluye todas las novelas, zonas de entrega y precios configurados
  - ✅ Listo para desplegar inmediatamente

**Archivo generado:** `TV_a_la_Carta_Backup_Full_[FECHA].zip`

---

## 📂 Contenido del Backup Full

El backup full incluye la estructura completa del proyecto:

```
TV_a_la_Carta_Backup_Full_[FECHA].zip
├── README.md                    (Información del backup)
├── backup-config.json           (Configuración en JSON)
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── postcss.config.js
├── eslint.config.js
├── index.html
├── vercel.json
├── .gitignore
├── public/
│   └── _redirects
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── vite-env.d.ts
    ├── components/          (Todos los componentes)
    │   ├── CastSection.tsx
    │   ├── CheckoutModal.tsx
    │   ├── ErrorMessage.tsx
    │   ├── FloatingNav.tsx
    │   ├── Header.tsx
    │   ├── HeroCarousel.tsx
    │   ├── LoadingSpinner.tsx
    │   ├── MovieCard.tsx
    │   ├── NetflixNovelSection.tsx
    │   ├── NetflixSection.tsx
    │   ├── NovelasModal.tsx
    │   ├── NovelCard.tsx
    │   ├── OptimizedImage.tsx
    │   ├── PriceCard.tsx
    │   ├── Toast.tsx
    │   └── VideoPlayer.tsx
    ├── context/             (Con configuración embebida)
    │   ├── AdminContext.tsx  ⚡ CONFIGURACIÓN EMBEBIDA
    │   └── CartContext.tsx   ⚡ PRECIOS EMBEBIDOS
    ├── pages/               (Todas las páginas)
    │   ├── AdminPanel.tsx
    │   ├── Anime.tsx
    │   ├── Cart.tsx
    │   ├── Home.tsx
    │   ├── MovieDetail.tsx
    │   ├── Movies.tsx
    │   ├── NovelDetail.tsx
    │   ├── Search.tsx
    │   ├── TVDetail.tsx
    │   └── TVShows.tsx
    ├── services/            (Todos los servicios)
    │   ├── api.ts
    │   ├── contentFilter.ts
    │   ├── contentSync.ts
    │   └── tmdb.ts
    ├── utils/               (Todas las utilidades)
    │   ├── errorHandler.ts
    │   ├── fullBackupGenerator.ts
    │   ├── performance.ts
    │   ├── sourceCodeGenerator.ts
    │   ├── systemExport.ts
    │   └── whatsapp.ts
    ├── hooks/               (Todos los hooks)
    │   ├── useContentSync.ts
    │   ├── useOptimizedContent.ts
    │   └── usePerformance.ts
    ├── config/
    │   └── api.ts
    └── types/
        └── movie.ts
```

---

## 🔧 Configuración Embebida

El backup full embebe automáticamente la configuración actual en los siguientes archivos:

### AdminContext.tsx
```typescript
const EMBEDDED_CONFIG = {
  version: "2.1.0",
  prices: { /* precios actuales */ },
  deliveryZones: [ /* todas las zonas */ ],
  novels: [ /* todas las novelas */ ],
  settings: { /* configuración */ }
};
```

### CartContext.tsx
```typescript
const EMBEDDED_PRICES = {
  moviePrice: 80,
  seriesPrice: 300,
  novelPricePerChapter: 5,
  transferFeePercentage: 10
};
```

---

## 🚀 Cómo Usar el Backup Full

### Para Restaurar el Sistema:

1. **Extraer el archivo ZIP**
   ```bash
   unzip TV_a_la_Carta_Backup_Full_[FECHA].zip
   cd TV_a_la_Carta_Backup_Full_[FECHA]
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Compilar para producción**
   ```bash
   npm run build
   ```

### El sistema estará listo con:
- ✅ Todos los precios configurados
- ✅ Todas las zonas de entrega
- ✅ Todo el catálogo de novelas
- ✅ Configuración completa del panel de control

---

## 📊 Ejemplo del README Generado

Cada backup full incluye un README.md detallado con:
- Fecha del backup
- Versión del sistema
- Precios configurados actuales
- Lista de zonas de entrega
- Lista de novelas en el catálogo (primeras 10 + total)
- Instrucciones de instalación
- Información de tecnologías
- Datos de contacto

---

## 🔐 Acceso al Panel de Administración

El backup incluye el panel de administración con las credenciales:
- **Usuario:** `admin`
- **Contraseña:** `admin123`

---

## 💡 Casos de Uso

### 1. Backup Periódico
Exporta un backup full semanalmente para tener respaldos del sistema con toda la configuración.

### 2. Migración a Otro Servidor
Usa el backup full para mover el sistema completo a otro servidor o hosting.

### 3. Desarrollo y Testing
Crea un backup antes de hacer cambios importantes para poder restaurar fácilmente.

### 4. Distribución
Comparte el sistema completo configurado con clientes o colaboradores.

### 5. Versionado
Mantén diferentes versiones del sistema con distintas configuraciones.

---

## ⚠️ Notas Importantes

1. **El backup full es completamente funcional**: No necesitas configurar nada después de restaurarlo.

2. **Configuración embebida**: La configuración actual del panel de control está embebida en el código, por lo que el sistema arranca con todos los datos.

3. **Tamaño del backup**: El archivo ZIP puede ser grande (varios MB) porque incluye todos los archivos del proyecto.

4. **Compatibilidad**: El backup es compatible con Node.js 18+ y npm 8+.

5. **Imágenes**: Las URLs de imágenes se mantienen como están configuradas (Backblaze, etc.).

---

## 🛠️ Solución de Problemas

### Si el backup no descarga:
- Verifica que el navegador permita descargas automáticas
- Revisa la consola del navegador por errores
- Intenta nuevamente después de refrescar la página

### Si falta algún archivo en el backup:
- El sistema intentará incluir todos los archivos disponibles
- Los archivos no disponibles se marcarán con un comentario

### Si hay errores al restaurar:
- Asegúrate de tener Node.js instalado (v18+)
- Ejecuta `npm install` antes de `npm run dev`
- Verifica que no haya conflictos de puertos (el puerto 5173 debe estar libre)

---

## 📞 Soporte

**WhatsApp:** +5354690878

---

*Sistema TV a la Carta v2.1.0*
*Backup y Exportación Implementados*
