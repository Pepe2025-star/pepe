import __vite__cjsImport0_jszip from "/node_modules/.vite/deps/jszip.js?v=8e80e8f2"; const JSZip = __vite__cjsImport0_jszip.__esModule ? __vite__cjsImport0_jszip.default : __vite__cjsImport0_jszip;
const PROJECT_FILES_MAP = {
  // Archivos de configuración raíz
  "package.json": () => fetchProjectFile("/package.json"),
  "vite.config.ts": () => fetchProjectFile("/vite.config.ts"),
  "tailwind.config.js": () => fetchProjectFile("/tailwind.config.js"),
  "tsconfig.json": () => fetchProjectFile("/tsconfig.json"),
  "tsconfig.app.json": () => fetchProjectFile("/tsconfig.app.json"),
  "tsconfig.node.json": () => fetchProjectFile("/tsconfig.node.json"),
  "postcss.config.js": () => fetchProjectFile("/postcss.config.js"),
  "eslint.config.js": () => fetchProjectFile("/eslint.config.js"),
  "index.html": () => fetchProjectFile("/index.html"),
  "vercel.json": () => fetchProjectFile("/vercel.json"),
  ".gitignore": () => fetchProjectFile("/.gitignore"),
  // Archivos públicos
  "public/_redirects": () => fetchProjectFile("/public/_redirects"),
  // Archivos fuente principales
  "src/main.tsx": () => fetchProjectFile("/src/main.tsx"),
  "src/App.tsx": () => fetchProjectFile("/src/App.tsx"),
  "src/index.css": () => fetchProjectFile("/src/index.css"),
  "src/vite-env.d.ts": () => fetchProjectFile("/src/vite-env.d.ts"),
  // Componentes
  "src/components/CastSection.tsx": () => fetchProjectFile("/src/components/CastSection.tsx"),
  "src/components/CheckoutModal.tsx": () => fetchProjectFile("/src/components/CheckoutModal.tsx"),
  "src/components/ErrorMessage.tsx": () => fetchProjectFile("/src/components/ErrorMessage.tsx"),
  "src/components/FloatingNav.tsx": () => fetchProjectFile("/src/components/FloatingNav.tsx"),
  "src/components/Header.tsx": () => fetchProjectFile("/src/components/Header.tsx"),
  "src/components/HeroCarousel.tsx": () => fetchProjectFile("/src/components/HeroCarousel.tsx"),
  "src/components/LoadingSpinner.tsx": () => fetchProjectFile("/src/components/LoadingSpinner.tsx"),
  "src/components/MovieCard.tsx": () => fetchProjectFile("/src/components/MovieCard.tsx"),
  "src/components/NetflixNovelSection.tsx": () => fetchProjectFile("/src/components/NetflixNovelSection.tsx"),
  "src/components/NetflixSection.tsx": () => fetchProjectFile("/src/components/NetflixSection.tsx"),
  "src/components/NovelasModal.tsx": () => fetchProjectFile("/src/components/NovelasModal.tsx"),
  "src/components/NovelCard.tsx": () => fetchProjectFile("/src/components/NovelCard.tsx"),
  "src/components/OptimizedImage.tsx": () => fetchProjectFile("/src/components/OptimizedImage.tsx"),
  "src/components/PriceCard.tsx": () => fetchProjectFile("/src/components/PriceCard.tsx"),
  "src/components/Toast.tsx": () => fetchProjectFile("/src/components/Toast.tsx"),
  "src/components/VideoPlayer.tsx": () => fetchProjectFile("/src/components/VideoPlayer.tsx"),
  // Contextos - AQUÍ SE EMBEBE LA CONFIGURACIÓN
  "src/context/AdminContext.tsx": async (config) => {
    const source = await fetchProjectFile("/src/context/AdminContext.tsx");
    return embedConfigInAdminContext(source, config);
  },
  "src/context/CartContext.tsx": async (config) => {
    const source = await fetchProjectFile("/src/context/CartContext.tsx");
    return embedConfigInCartContext(source, config);
  },
  // Páginas
  "src/pages/AdminPanel.tsx": () => fetchProjectFile("/src/pages/AdminPanel.tsx"),
  "src/pages/Anime.tsx": () => fetchProjectFile("/src/pages/Anime.tsx"),
  "src/pages/Cart.tsx": () => fetchProjectFile("/src/pages/Cart.tsx"),
  "src/pages/Home.tsx": () => fetchProjectFile("/src/pages/Home.tsx"),
  "src/pages/MovieDetail.tsx": () => fetchProjectFile("/src/pages/MovieDetail.tsx"),
  "src/pages/Movies.tsx": () => fetchProjectFile("/src/pages/Movies.tsx"),
  "src/pages/NovelDetail.tsx": () => fetchProjectFile("/src/pages/NovelDetail.tsx"),
  "src/pages/Search.tsx": () => fetchProjectFile("/src/pages/Search.tsx"),
  "src/pages/TVDetail.tsx": () => fetchProjectFile("/src/pages/TVDetail.tsx"),
  "src/pages/TVShows.tsx": () => fetchProjectFile("/src/pages/TVShows.tsx"),
  // Servicios
  "src/services/api.ts": () => fetchProjectFile("/src/services/api.ts"),
  "src/services/contentFilter.ts": () => fetchProjectFile("/src/services/contentFilter.ts"),
  "src/services/contentSync.ts": () => fetchProjectFile("/src/services/contentSync.ts"),
  "src/services/tmdb.ts": () => fetchProjectFile("/src/services/tmdb.ts"),
  // Utilidades
  "src/utils/errorHandler.ts": () => fetchProjectFile("/src/utils/errorHandler.ts"),
  "src/utils/performance.ts": () => fetchProjectFile("/src/utils/performance.ts"),
  "src/utils/sourceCodeGenerator.ts": () => fetchProjectFile("/src/utils/sourceCodeGenerator.ts"),
  "src/utils/systemExport.ts": () => fetchProjectFile("/src/utils/systemExport.ts"),
  "src/utils/whatsapp.ts": () => fetchProjectFile("/src/utils/whatsapp.ts"),
  "src/utils/fullBackupGenerator.ts": () => fetchProjectFile("/src/utils/fullBackupGenerator.ts"),
  // Hooks
  "src/hooks/useContentSync.ts": () => fetchProjectFile("/src/hooks/useContentSync.ts"),
  "src/hooks/useOptimizedContent.ts": () => fetchProjectFile("/src/hooks/useOptimizedContent.ts"),
  "src/hooks/usePerformance.ts": () => fetchProjectFile("/src/hooks/usePerformance.ts"),
  // Configuración
  "src/config/api.ts": () => fetchProjectFile("/src/config/api.ts"),
  // Tipos
  "src/types/movie.ts": () => fetchProjectFile("/src/types/movie.ts")
};
async function fetchProjectFile(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      console.warn(`No se pudo cargar el archivo: ${path}`);
      return `// Archivo no disponible: ${path}`;
    }
    return await response.text();
  } catch (error) {
    console.error(`Error leyendo archivo ${path}:`, error);
    return `// Error cargando archivo: ${path}`;
  }
}
function embedConfigInAdminContext(source, config) {
  const embeddedConfig = {
    version: config.version || "2.1.0",
    prices: config.prices,
    deliveryZones: config.deliveryZones,
    novels: config.novels,
    settings: config.settings || {}
  };
  const configJson = JSON.stringify(embeddedConfig, null, 2);
  const regex = /const EMBEDDED_CONFIG = \{[\s\S]*?\};/;
  if (regex.test(source)) {
    return source.replace(regex, `const EMBEDDED_CONFIG = ${configJson};`);
  } else {
    const importEndIndex = source.lastIndexOf("import");
    const nextLineIndex = source.indexOf("\n", importEndIndex);
    return source.slice(0, nextLineIndex + 1) + `
// CONFIGURACIÓN EMBEBIDA - Generada automáticamente
const EMBEDDED_CONFIG = ${configJson};
` + source.slice(nextLineIndex + 1);
  }
}
function embedConfigInCartContext(source, config) {
  const pricesJson = JSON.stringify(config.prices, null, 2);
  const regex = /const EMBEDDED_PRICES = \{[\s\S]*?\};/;
  if (regex.test(source)) {
    return source.replace(regex, `const EMBEDDED_PRICES = ${pricesJson};`);
  } else {
    const importEndIndex = source.lastIndexOf("import");
    const nextLineIndex = source.indexOf("\n", importEndIndex);
    return source.slice(0, nextLineIndex + 1) + `
// PRECIOS EMBEBIDOS - Generados automáticamente
const EMBEDDED_PRICES = ${pricesJson};
` + source.slice(nextLineIndex + 1);
  }
}
function generateReadme(config) {
  return `# TV a la Carta - Sistema Completo
## Backup Full Generado Automáticamente

**Fecha de Backup:** ${(/* @__PURE__ */ new Date()).toLocaleString("es-ES")}
**Versión del Sistema:** ${config.version || "2.1.0"}

---

## 📋 Descripción del Sistema

Sistema completo de gestión para TV a la Carta con:
- Panel de administración avanzado
- Carrito de compras integrado
- Sincronización en tiempo real
- Gestión de precios dinámicos
- Zonas de entrega personalizables
- Catálogo de novelas administrable

---

## ⚙️ Configuración Actual Embebida

### Precios Configurados
- **Películas:** $${config.prices?.moviePrice || 80} CUP
- **Series (por temporada):** $${config.prices?.seriesPrice || 300} CUP
- **Novelas (por capítulo):** $${config.prices?.novelPricePerChapter || 5} CUP
- **Recargo por transferencia:** ${config.prices?.transferFeePercentage || 10}%

### Zonas de Entrega
Total de zonas configuradas: **${config.deliveryZones?.length || 0}**

${config.deliveryZones?.map(
    (zone, index) => `${index + 1}. **${zone.name}** - $${zone.cost} CUP`
  ).join("\n") || "No hay zonas configuradas"}

### Novelas en Catálogo
Total de novelas: **${config.novels?.length || 0}**

${config.novels?.slice(0, 10).map(
    (novel, index) => `${index + 1}. **${novel.titulo}** (${novel.año}) - ${novel.genero} - ${novel.capitulos} capítulos`
  ).join("\n") || "No hay novelas en el catálogo"}

${config.novels && config.novels.length > 10 ? `
... y ${config.novels.length - 10} más` : ""}

---

## 🚀 Instalación

\`\`\`bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
\`\`\`

---

## 🔐 Acceso al Panel de Administración

- **URL:** \`/admin\`
- **Usuario:** \`admin\`
- **Contraseña:** \`admin123\`

---

## 🛠️ Tecnologías Utilizadas

- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.2
- Tailwind CSS 3.4.1
- React Router DOM 7.8.0
- Lucide React 0.344.0
- JSZip 3.10.1

---

## 📱 Características Principales

✅ Panel de administración completo
✅ Gestión de novelas con datos completos
✅ Sistema de precios dinámicos
✅ Zonas de entrega configurables
✅ Sistema de notificaciones en tiempo real
✅ Exportación/Importación de configuración
✅ Backup completo del sistema
✅ Carrito de compras avanzado
✅ Integración con WhatsApp
✅ Optimización de rendimiento
✅ Sincronización automática

---

## 📞 Contacto

**WhatsApp:** +5354690878

---

## 📝 Notas Importantes

Este backup contiene:
- ✅ Todos los archivos de código fuente
- ✅ Configuración actual del sistema embebida
- ✅ Todas las novelas del catálogo
- ✅ Todas las zonas de entrega
- ✅ Precios actualizados
- ✅ Estructura completa del proyecto

**IMPORTANTE:** Este backup está listo para ser desplegado. La configuración actual del panel de control ya está embebida en los archivos del sistema.

---

*Generado automáticamente por el Sistema TV a la Carta*
`;
}
export async function generateFullBackup(systemConfig) {
  try {
    const zip = new JSZip();
    zip.file("README.md", generateReadme(systemConfig));
    for (const [filePath, contentGenerator] of Object.entries(PROJECT_FILES_MAP)) {
      try {
        let content2;
        if (filePath.includes("Context.tsx")) {
          content2 = await contentGenerator(systemConfig);
        } else {
          content2 = await contentGenerator();
        }
        zip.file(filePath, content2);
      } catch (error) {
        console.error(`Error procesando archivo ${filePath}:`, error);
        zip.file(filePath, `// Error al procesar este archivo
// ${error}`);
      }
    }
    const configJson = JSON.stringify({
      version: systemConfig.version,
      exportDate: (/* @__PURE__ */ new Date()).toISOString(),
      prices: systemConfig.prices,
      deliveryZones: systemConfig.deliveryZones,
      novels: systemConfig.novels,
      settings: systemConfig.settings,
      syncStatus: systemConfig.syncStatus
    }, null, 2);
    zip.file("backup-config.json", configJson);
    const content = await zip.generateAsync({
      type: "blob",
      compression: "DEFLATE",
      compressionOptions: {
        level: 9
      }
    });
    const url = URL.createObjectURL(content);
    const link = document.createElement("a");
    link.href = url;
    const timestamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").split("T")[0];
    link.download = `TV_a_la_Carta_Backup_Full_${timestamp}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error generando backup completo:", error);
    throw error;
  }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGxCYWNrdXBHZW5lcmF0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpTWmlwIGZyb20gJ2pzemlwJztcbmltcG9ydCB0eXBlIHsgU3lzdGVtQ29uZmlnIH0gZnJvbSAnLi4vY29udGV4dC9BZG1pbkNvbnRleHQnO1xuXG4vKipcbiAqIEdlbmVyYWRvciBkZSBiYWNrdXAgY29tcGxldG8gZGVsIHNpc3RlbWFcbiAqIEVzdGUgYXJjaGl2byBnZW5lcmEgdW4gYmFja3VwIGZ1bGwgY29uIFRPRE9TIGxvcyBhcmNoaXZvcyBkZWwgY8OzZGlnbyBmdWVudGVcbiAqIGluY2x1eWVuZG8gbGFzIGNvbmZpZ3VyYWNpb25lcyBhcGxpY2FkYXMgZW4gZWwgcGFuZWwgZGUgY29udHJvbFxuICovXG5cbi8vIExpc3RhIGRlIGFyY2hpdm9zIGEgaW5jbHVpciBlbiBlbCBiYWNrdXBcbmNvbnN0IFBST0pFQ1RfRklMRVNfTUFQOiBSZWNvcmQ8c3RyaW5nLCAoKSA9PiBQcm9taXNlPHN0cmluZz4+ID0ge1xuICAvLyBBcmNoaXZvcyBkZSBjb25maWd1cmFjacOzbiByYcOtelxuICAncGFja2FnZS5qc29uJzogKCkgPT4gZmV0Y2hQcm9qZWN0RmlsZSgnL3BhY2thZ2UuanNvbicpLFxuICAndml0ZS5jb25maWcudHMnOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvdml0ZS5jb25maWcudHMnKSxcbiAgJ3RhaWx3aW5kLmNvbmZpZy5qcyc6ICgpID0+IGZldGNoUHJvamVjdEZpbGUoJy90YWlsd2luZC5jb25maWcuanMnKSxcbiAgJ3RzY29uZmlnLmpzb24nOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvdHNjb25maWcuanNvbicpLFxuICAndHNjb25maWcuYXBwLmpzb24nOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvdHNjb25maWcuYXBwLmpzb24nKSxcbiAgJ3RzY29uZmlnLm5vZGUuanNvbic6ICgpID0+IGZldGNoUHJvamVjdEZpbGUoJy90c2NvbmZpZy5ub2RlLmpzb24nKSxcbiAgJ3Bvc3Rjc3MuY29uZmlnLmpzJzogKCkgPT4gZmV0Y2hQcm9qZWN0RmlsZSgnL3Bvc3Rjc3MuY29uZmlnLmpzJyksXG4gICdlc2xpbnQuY29uZmlnLmpzJzogKCkgPT4gZmV0Y2hQcm9qZWN0RmlsZSgnL2VzbGludC5jb25maWcuanMnKSxcbiAgJ2luZGV4Lmh0bWwnOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvaW5kZXguaHRtbCcpLFxuICAndmVyY2VsLmpzb24nOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvdmVyY2VsLmpzb24nKSxcbiAgJy5naXRpZ25vcmUnOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvLmdpdGlnbm9yZScpLFxuXG4gIC8vIEFyY2hpdm9zIHDDumJsaWNvc1xuICAncHVibGljL19yZWRpcmVjdHMnOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvcHVibGljL19yZWRpcmVjdHMnKSxcblxuICAvLyBBcmNoaXZvcyBmdWVudGUgcHJpbmNpcGFsZXNcbiAgJ3NyYy9tYWluLnRzeCc6ICgpID0+IGZldGNoUHJvamVjdEZpbGUoJy9zcmMvbWFpbi50c3gnKSxcbiAgJ3NyYy9BcHAudHN4JzogKCkgPT4gZmV0Y2hQcm9qZWN0RmlsZSgnL3NyYy9BcHAudHN4JyksXG4gICdzcmMvaW5kZXguY3NzJzogKCkgPT4gZmV0Y2hQcm9qZWN0RmlsZSgnL3NyYy9pbmRleC5jc3MnKSxcbiAgJ3NyYy92aXRlLWVudi5kLnRzJzogKCkgPT4gZmV0Y2hQcm9qZWN0RmlsZSgnL3NyYy92aXRlLWVudi5kLnRzJyksXG5cbiAgLy8gQ29tcG9uZW50ZXNcbiAgJ3NyYy9jb21wb25lbnRzL0Nhc3RTZWN0aW9uLnRzeCc6ICgpID0+IGZldGNoUHJvamVjdEZpbGUoJy9zcmMvY29tcG9uZW50cy9DYXN0U2VjdGlvbi50c3gnKSxcbiAgJ3NyYy9jb21wb25lbnRzL0NoZWNrb3V0TW9kYWwudHN4JzogKCkgPT4gZmV0Y2hQcm9qZWN0RmlsZSgnL3NyYy9jb21wb25lbnRzL0NoZWNrb3V0TW9kYWwudHN4JyksXG4gICdzcmMvY29tcG9uZW50cy9FcnJvck1lc3NhZ2UudHN4JzogKCkgPT4gZmV0Y2hQcm9qZWN0RmlsZSgnL3NyYy9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS50c3gnKSxcbiAgJ3NyYy9jb21wb25lbnRzL0Zsb2F0aW5nTmF2LnRzeCc6ICgpID0+IGZldGNoUHJvamVjdEZpbGUoJy9zcmMvY29tcG9uZW50cy9GbG9hdGluZ05hdi50c3gnKSxcbiAgJ3NyYy9jb21wb25lbnRzL0hlYWRlci50c3gnOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzeCcpLFxuICAnc3JjL2NvbXBvbmVudHMvSGVyb0Nhcm91c2VsLnRzeCc6ICgpID0+IGZldGNoUHJvamVjdEZpbGUoJy9zcmMvY29tcG9uZW50cy9IZXJvQ2Fyb3VzZWwudHN4JyksXG4gICdzcmMvY29tcG9uZW50cy9Mb2FkaW5nU3Bpbm5lci50c3gnOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvc3JjL2NvbXBvbmVudHMvTG9hZGluZ1NwaW5uZXIudHN4JyksXG4gICdzcmMvY29tcG9uZW50cy9Nb3ZpZUNhcmQudHN4JzogKCkgPT4gZmV0Y2hQcm9qZWN0RmlsZSgnL3NyYy9jb21wb25lbnRzL01vdmllQ2FyZC50c3gnKSxcbiAgJ3NyYy9jb21wb25lbnRzL05ldGZsaXhOb3ZlbFNlY3Rpb24udHN4JzogKCkgPT4gZmV0Y2hQcm9qZWN0RmlsZSgnL3NyYy9jb21wb25lbnRzL05ldGZsaXhOb3ZlbFNlY3Rpb24udHN4JyksXG4gICdzcmMvY29tcG9uZW50cy9OZXRmbGl4U2VjdGlvbi50c3gnOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvc3JjL2NvbXBvbmVudHMvTmV0ZmxpeFNlY3Rpb24udHN4JyksXG4gICdzcmMvY29tcG9uZW50cy9Ob3ZlbGFzTW9kYWwudHN4JzogKCkgPT4gZmV0Y2hQcm9qZWN0RmlsZSgnL3NyYy9jb21wb25lbnRzL05vdmVsYXNNb2RhbC50c3gnKSxcbiAgJ3NyYy9jb21wb25lbnRzL05vdmVsQ2FyZC50c3gnOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvc3JjL2NvbXBvbmVudHMvTm92ZWxDYXJkLnRzeCcpLFxuICAnc3JjL2NvbXBvbmVudHMvT3B0aW1pemVkSW1hZ2UudHN4JzogKCkgPT4gZmV0Y2hQcm9qZWN0RmlsZSgnL3NyYy9jb21wb25lbnRzL09wdGltaXplZEltYWdlLnRzeCcpLFxuICAnc3JjL2NvbXBvbmVudHMvUHJpY2VDYXJkLnRzeCc6ICgpID0+IGZldGNoUHJvamVjdEZpbGUoJy9zcmMvY29tcG9uZW50cy9QcmljZUNhcmQudHN4JyksXG4gICdzcmMvY29tcG9uZW50cy9Ub2FzdC50c3gnOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvc3JjL2NvbXBvbmVudHMvVG9hc3QudHN4JyksXG4gICdzcmMvY29tcG9uZW50cy9WaWRlb1BsYXllci50c3gnOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvc3JjL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXIudHN4JyksXG5cbiAgLy8gQ29udGV4dG9zIC0gQVFVw40gU0UgRU1CRUJFIExBIENPTkZJR1VSQUNJw5NOXG4gICdzcmMvY29udGV4dC9BZG1pbkNvbnRleHQudHN4JzogYXN5bmMgKGNvbmZpZzogU3lzdGVtQ29uZmlnKSA9PiB7XG4gICAgY29uc3Qgc291cmNlID0gYXdhaXQgZmV0Y2hQcm9qZWN0RmlsZSgnL3NyYy9jb250ZXh0L0FkbWluQ29udGV4dC50c3gnKTtcbiAgICByZXR1cm4gZW1iZWRDb25maWdJbkFkbWluQ29udGV4dChzb3VyY2UsIGNvbmZpZyk7XG4gIH0sXG4gICdzcmMvY29udGV4dC9DYXJ0Q29udGV4dC50c3gnOiBhc3luYyAoY29uZmlnOiBTeXN0ZW1Db25maWcpID0+IHtcbiAgICBjb25zdCBzb3VyY2UgPSBhd2FpdCBmZXRjaFByb2plY3RGaWxlKCcvc3JjL2NvbnRleHQvQ2FydENvbnRleHQudHN4Jyk7XG4gICAgcmV0dXJuIGVtYmVkQ29uZmlnSW5DYXJ0Q29udGV4dChzb3VyY2UsIGNvbmZpZyk7XG4gIH0sXG5cbiAgLy8gUMOhZ2luYXNcbiAgJ3NyYy9wYWdlcy9BZG1pblBhbmVsLnRzeCc6ICgpID0+IGZldGNoUHJvamVjdEZpbGUoJy9zcmMvcGFnZXMvQWRtaW5QYW5lbC50c3gnKSxcbiAgJ3NyYy9wYWdlcy9BbmltZS50c3gnOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvc3JjL3BhZ2VzL0FuaW1lLnRzeCcpLFxuICAnc3JjL3BhZ2VzL0NhcnQudHN4JzogKCkgPT4gZmV0Y2hQcm9qZWN0RmlsZSgnL3NyYy9wYWdlcy9DYXJ0LnRzeCcpLFxuICAnc3JjL3BhZ2VzL0hvbWUudHN4JzogKCkgPT4gZmV0Y2hQcm9qZWN0RmlsZSgnL3NyYy9wYWdlcy9Ib21lLnRzeCcpLFxuICAnc3JjL3BhZ2VzL01vdmllRGV0YWlsLnRzeCc6ICgpID0+IGZldGNoUHJvamVjdEZpbGUoJy9zcmMvcGFnZXMvTW92aWVEZXRhaWwudHN4JyksXG4gICdzcmMvcGFnZXMvTW92aWVzLnRzeCc6ICgpID0+IGZldGNoUHJvamVjdEZpbGUoJy9zcmMvcGFnZXMvTW92aWVzLnRzeCcpLFxuICAnc3JjL3BhZ2VzL05vdmVsRGV0YWlsLnRzeCc6ICgpID0+IGZldGNoUHJvamVjdEZpbGUoJy9zcmMvcGFnZXMvTm92ZWxEZXRhaWwudHN4JyksXG4gICdzcmMvcGFnZXMvU2VhcmNoLnRzeCc6ICgpID0+IGZldGNoUHJvamVjdEZpbGUoJy9zcmMvcGFnZXMvU2VhcmNoLnRzeCcpLFxuICAnc3JjL3BhZ2VzL1RWRGV0YWlsLnRzeCc6ICgpID0+IGZldGNoUHJvamVjdEZpbGUoJy9zcmMvcGFnZXMvVFZEZXRhaWwudHN4JyksXG4gICdzcmMvcGFnZXMvVFZTaG93cy50c3gnOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvc3JjL3BhZ2VzL1RWU2hvd3MudHN4JyksXG5cbiAgLy8gU2VydmljaW9zXG4gICdzcmMvc2VydmljZXMvYXBpLnRzJzogKCkgPT4gZmV0Y2hQcm9qZWN0RmlsZSgnL3NyYy9zZXJ2aWNlcy9hcGkudHMnKSxcbiAgJ3NyYy9zZXJ2aWNlcy9jb250ZW50RmlsdGVyLnRzJzogKCkgPT4gZmV0Y2hQcm9qZWN0RmlsZSgnL3NyYy9zZXJ2aWNlcy9jb250ZW50RmlsdGVyLnRzJyksXG4gICdzcmMvc2VydmljZXMvY29udGVudFN5bmMudHMnOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvc3JjL3NlcnZpY2VzL2NvbnRlbnRTeW5jLnRzJyksXG4gICdzcmMvc2VydmljZXMvdG1kYi50cyc6ICgpID0+IGZldGNoUHJvamVjdEZpbGUoJy9zcmMvc2VydmljZXMvdG1kYi50cycpLFxuXG4gIC8vIFV0aWxpZGFkZXNcbiAgJ3NyYy91dGlscy9lcnJvckhhbmRsZXIudHMnOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvc3JjL3V0aWxzL2Vycm9ySGFuZGxlci50cycpLFxuICAnc3JjL3V0aWxzL3BlcmZvcm1hbmNlLnRzJzogKCkgPT4gZmV0Y2hQcm9qZWN0RmlsZSgnL3NyYy91dGlscy9wZXJmb3JtYW5jZS50cycpLFxuICAnc3JjL3V0aWxzL3NvdXJjZUNvZGVHZW5lcmF0b3IudHMnOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvc3JjL3V0aWxzL3NvdXJjZUNvZGVHZW5lcmF0b3IudHMnKSxcbiAgJ3NyYy91dGlscy9zeXN0ZW1FeHBvcnQudHMnOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvc3JjL3V0aWxzL3N5c3RlbUV4cG9ydC50cycpLFxuICAnc3JjL3V0aWxzL3doYXRzYXBwLnRzJzogKCkgPT4gZmV0Y2hQcm9qZWN0RmlsZSgnL3NyYy91dGlscy93aGF0c2FwcC50cycpLFxuICAnc3JjL3V0aWxzL2Z1bGxCYWNrdXBHZW5lcmF0b3IudHMnOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvc3JjL3V0aWxzL2Z1bGxCYWNrdXBHZW5lcmF0b3IudHMnKSxcblxuICAvLyBIb29rc1xuICAnc3JjL2hvb2tzL3VzZUNvbnRlbnRTeW5jLnRzJzogKCkgPT4gZmV0Y2hQcm9qZWN0RmlsZSgnL3NyYy9ob29rcy91c2VDb250ZW50U3luYy50cycpLFxuICAnc3JjL2hvb2tzL3VzZU9wdGltaXplZENvbnRlbnQudHMnOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvc3JjL2hvb2tzL3VzZU9wdGltaXplZENvbnRlbnQudHMnKSxcbiAgJ3NyYy9ob29rcy91c2VQZXJmb3JtYW5jZS50cyc6ICgpID0+IGZldGNoUHJvamVjdEZpbGUoJy9zcmMvaG9va3MvdXNlUGVyZm9ybWFuY2UudHMnKSxcblxuICAvLyBDb25maWd1cmFjacOzblxuICAnc3JjL2NvbmZpZy9hcGkudHMnOiAoKSA9PiBmZXRjaFByb2plY3RGaWxlKCcvc3JjL2NvbmZpZy9hcGkudHMnKSxcblxuICAvLyBUaXBvc1xuICAnc3JjL3R5cGVzL21vdmllLnRzJzogKCkgPT4gZmV0Y2hQcm9qZWN0RmlsZSgnL3NyYy90eXBlcy9tb3ZpZS50cycpLFxufTtcblxuLyoqXG4gKiBGdW5jacOzbiBwYXJhIGxlZXIgYXJjaGl2b3MgZGVsIHByb3llY3RvIGFjdHVhbFxuICovXG5hc3luYyBmdW5jdGlvbiBmZXRjaFByb2plY3RGaWxlKHBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwYXRoKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zb2xlLndhcm4oYE5vIHNlIHB1ZG8gY2FyZ2FyIGVsIGFyY2hpdm86ICR7cGF0aH1gKTtcbiAgICAgIHJldHVybiBgLy8gQXJjaGl2byBubyBkaXNwb25pYmxlOiAke3BhdGh9YDtcbiAgICB9XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBFcnJvciBsZXllbmRvIGFyY2hpdm8gJHtwYXRofTpgLCBlcnJvcik7XG4gICAgcmV0dXJuIGAvLyBFcnJvciBjYXJnYW5kbyBhcmNoaXZvOiAke3BhdGh9YDtcbiAgfVxufVxuXG4vKipcbiAqIEVtYmViZSBsYSBjb25maWd1cmFjacOzbiBhY3R1YWwgZW4gQWRtaW5Db250ZXh0XG4gKi9cbmZ1bmN0aW9uIGVtYmVkQ29uZmlnSW5BZG1pbkNvbnRleHQoc291cmNlOiBzdHJpbmcsIGNvbmZpZzogU3lzdGVtQ29uZmlnKTogc3RyaW5nIHtcbiAgY29uc3QgZW1iZWRkZWRDb25maWcgPSB7XG4gICAgdmVyc2lvbjogY29uZmlnLnZlcnNpb24gfHwgJzIuMS4wJyxcbiAgICBwcmljZXM6IGNvbmZpZy5wcmljZXMsXG4gICAgZGVsaXZlcnlab25lczogY29uZmlnLmRlbGl2ZXJ5Wm9uZXMsXG4gICAgbm92ZWxzOiBjb25maWcubm92ZWxzLFxuICAgIHNldHRpbmdzOiBjb25maWcuc2V0dGluZ3MgfHwge30sXG4gIH07XG5cbiAgLy8gUmVlbXBsYXphciBsYSBjb25maWd1cmFjacOzbiBlbWJlYmlkYSBleGlzdGVudGVcbiAgY29uc3QgY29uZmlnSnNvbiA9IEpTT04uc3RyaW5naWZ5KGVtYmVkZGVkQ29uZmlnLCBudWxsLCAyKTtcblxuICAvLyBCdXNjYXIgeSByZWVtcGxhemFyIGVsIGJsb3F1ZSBFTUJFRERFRF9DT05GSUdcbiAgY29uc3QgcmVnZXggPSAvY29uc3QgRU1CRURERURfQ09ORklHID0gXFx7W1xcc1xcU10qP1xcfTsvO1xuXG4gIGlmIChyZWdleC50ZXN0KHNvdXJjZSkpIHtcbiAgICByZXR1cm4gc291cmNlLnJlcGxhY2UocmVnZXgsIGBjb25zdCBFTUJFRERFRF9DT05GSUcgPSAke2NvbmZpZ0pzb259O2ApO1xuICB9IGVsc2Uge1xuICAgIC8vIFNpIG5vIGV4aXN0ZSwgYWdyZWdhcmxvIGRlc3B1w6lzIGRlIGxvcyBpbXBvcnRzXG4gICAgY29uc3QgaW1wb3J0RW5kSW5kZXggPSBzb3VyY2UubGFzdEluZGV4T2YoJ2ltcG9ydCcpO1xuICAgIGNvbnN0IG5leHRMaW5lSW5kZXggPSBzb3VyY2UuaW5kZXhPZignXFxuJywgaW1wb3J0RW5kSW5kZXgpO1xuICAgIHJldHVybiBzb3VyY2Uuc2xpY2UoMCwgbmV4dExpbmVJbmRleCArIDEpICtcbiAgICAgIGBcXG4vLyBDT05GSUdVUkFDScOTTiBFTUJFQklEQSAtIEdlbmVyYWRhIGF1dG9tw6F0aWNhbWVudGVcXG5gICtcbiAgICAgIGBjb25zdCBFTUJFRERFRF9DT05GSUcgPSAke2NvbmZpZ0pzb259O1xcbmAgK1xuICAgICAgc291cmNlLnNsaWNlKG5leHRMaW5lSW5kZXggKyAxKTtcbiAgfVxufVxuXG4vKipcbiAqIEVtYmViZSBsYSBjb25maWd1cmFjacOzbiBkZSBwcmVjaW9zIGVuIENhcnRDb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGVtYmVkQ29uZmlnSW5DYXJ0Q29udGV4dChzb3VyY2U6IHN0cmluZywgY29uZmlnOiBTeXN0ZW1Db25maWcpOiBzdHJpbmcge1xuICBjb25zdCBwcmljZXNKc29uID0gSlNPTi5zdHJpbmdpZnkoY29uZmlnLnByaWNlcywgbnVsbCwgMik7XG5cbiAgLy8gQnVzY2FyIHkgcmVlbXBsYXphciBlbCBibG9xdWUgRU1CRURERURfUFJJQ0VTXG4gIGNvbnN0IHJlZ2V4ID0gL2NvbnN0IEVNQkVEREVEX1BSSUNFUyA9IFxce1tcXHNcXFNdKj9cXH07LztcblxuICBpZiAocmVnZXgudGVzdChzb3VyY2UpKSB7XG4gICAgcmV0dXJuIHNvdXJjZS5yZXBsYWNlKHJlZ2V4LCBgY29uc3QgRU1CRURERURfUFJJQ0VTID0gJHtwcmljZXNKc29ufTtgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTaSBubyBleGlzdGUsIGFncmVnYXJsbyBkZXNwdcOpcyBkZSBsb3MgaW1wb3J0c1xuICAgIGNvbnN0IGltcG9ydEVuZEluZGV4ID0gc291cmNlLmxhc3RJbmRleE9mKCdpbXBvcnQnKTtcbiAgICBjb25zdCBuZXh0TGluZUluZGV4ID0gc291cmNlLmluZGV4T2YoJ1xcbicsIGltcG9ydEVuZEluZGV4KTtcbiAgICByZXR1cm4gc291cmNlLnNsaWNlKDAsIG5leHRMaW5lSW5kZXggKyAxKSArXG4gICAgICBgXFxuLy8gUFJFQ0lPUyBFTUJFQklET1MgLSBHZW5lcmFkb3MgYXV0b23DoXRpY2FtZW50ZVxcbmAgK1xuICAgICAgYGNvbnN0IEVNQkVEREVEX1BSSUNFUyA9ICR7cHJpY2VzSnNvbn07XFxuYCArXG4gICAgICBzb3VyY2Uuc2xpY2UobmV4dExpbmVJbmRleCArIDEpO1xuICB9XG59XG5cbi8qKlxuICogR2VuZXJhIGVsIFJFQURNRS5tZCBjb24gbGEgY29uZmlndXJhY2nDs24gYWN0dWFsXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlUmVhZG1lKGNvbmZpZzogU3lzdGVtQ29uZmlnKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAjIFRWIGEgbGEgQ2FydGEgLSBTaXN0ZW1hIENvbXBsZXRvXG4jIyBCYWNrdXAgRnVsbCBHZW5lcmFkbyBBdXRvbcOhdGljYW1lbnRlXG5cbioqRmVjaGEgZGUgQmFja3VwOioqICR7bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygnZXMtRVMnKX1cbioqVmVyc2nDs24gZGVsIFNpc3RlbWE6KiogJHtjb25maWcudmVyc2lvbiB8fCAnMi4xLjAnfVxuXG4tLS1cblxuIyMg8J+TiyBEZXNjcmlwY2nDs24gZGVsIFNpc3RlbWFcblxuU2lzdGVtYSBjb21wbGV0byBkZSBnZXN0acOzbiBwYXJhIFRWIGEgbGEgQ2FydGEgY29uOlxuLSBQYW5lbCBkZSBhZG1pbmlzdHJhY2nDs24gYXZhbnphZG9cbi0gQ2Fycml0byBkZSBjb21wcmFzIGludGVncmFkb1xuLSBTaW5jcm9uaXphY2nDs24gZW4gdGllbXBvIHJlYWxcbi0gR2VzdGnDs24gZGUgcHJlY2lvcyBkaW7DoW1pY29zXG4tIFpvbmFzIGRlIGVudHJlZ2EgcGVyc29uYWxpemFibGVzXG4tIENhdMOhbG9nbyBkZSBub3ZlbGFzIGFkbWluaXN0cmFibGVcblxuLS0tXG5cbiMjIOKame+4jyBDb25maWd1cmFjacOzbiBBY3R1YWwgRW1iZWJpZGFcblxuIyMjIFByZWNpb3MgQ29uZmlndXJhZG9zXG4tICoqUGVsw61jdWxhczoqKiAkJHtjb25maWcucHJpY2VzPy5tb3ZpZVByaWNlIHx8IDgwfSBDVVBcbi0gKipTZXJpZXMgKHBvciB0ZW1wb3JhZGEpOioqICQke2NvbmZpZy5wcmljZXM/LnNlcmllc1ByaWNlIHx8IDMwMH0gQ1VQXG4tICoqTm92ZWxhcyAocG9yIGNhcMOtdHVsbyk6KiogJCR7Y29uZmlnLnByaWNlcz8ubm92ZWxQcmljZVBlckNoYXB0ZXIgfHwgNX0gQ1VQXG4tICoqUmVjYXJnbyBwb3IgdHJhbnNmZXJlbmNpYToqKiAke2NvbmZpZy5wcmljZXM/LnRyYW5zZmVyRmVlUGVyY2VudGFnZSB8fCAxMH0lXG5cbiMjIyBab25hcyBkZSBFbnRyZWdhXG5Ub3RhbCBkZSB6b25hcyBjb25maWd1cmFkYXM6ICoqJHtjb25maWcuZGVsaXZlcnlab25lcz8ubGVuZ3RoIHx8IDB9KipcblxuJHtjb25maWcuZGVsaXZlcnlab25lcz8ubWFwKCh6b25lOiBhbnksIGluZGV4OiBudW1iZXIpID0+XG4gIGAke2luZGV4ICsgMX0uICoqJHt6b25lLm5hbWV9KiogLSAkJHt6b25lLmNvc3R9IENVUGBcbikuam9pbignXFxuJykgfHwgJ05vIGhheSB6b25hcyBjb25maWd1cmFkYXMnfVxuXG4jIyMgTm92ZWxhcyBlbiBDYXTDoWxvZ29cblRvdGFsIGRlIG5vdmVsYXM6ICoqJHtjb25maWcubm92ZWxzPy5sZW5ndGggfHwgMH0qKlxuXG4ke2NvbmZpZy5ub3ZlbHM/LnNsaWNlKDAsIDEwKS5tYXAoKG5vdmVsOiBhbnksIGluZGV4OiBudW1iZXIpID0+XG4gIGAke2luZGV4ICsgMX0uICoqJHtub3ZlbC50aXR1bG99KiogKCR7bm92ZWwuYcOxb30pIC0gJHtub3ZlbC5nZW5lcm99IC0gJHtub3ZlbC5jYXBpdHVsb3N9IGNhcMOtdHVsb3NgXG4pLmpvaW4oJ1xcbicpIHx8ICdObyBoYXkgbm92ZWxhcyBlbiBlbCBjYXTDoWxvZ28nfVxuXG4ke2NvbmZpZy5ub3ZlbHMgJiYgY29uZmlnLm5vdmVscy5sZW5ndGggPiAxMCA/IGBcXG4uLi4geSAke2NvbmZpZy5ub3ZlbHMubGVuZ3RoIC0gMTB9IG3DoXNgIDogJyd9XG5cbi0tLVxuXG4jIyDwn5qAIEluc3RhbGFjacOzblxuXG5cXGBcXGBcXGBiYXNoXG4jIEluc3RhbGFyIGRlcGVuZGVuY2lhc1xubnBtIGluc3RhbGxcblxuIyBJbmljaWFyIHNlcnZpZG9yIGRlIGRlc2Fycm9sbG9cbm5wbSBydW4gZGV2XG5cbiMgQ29tcGlsYXIgcGFyYSBwcm9kdWNjacOzblxubnBtIHJ1biBidWlsZFxuXFxgXFxgXFxgXG5cbi0tLVxuXG4jIyDwn5SQIEFjY2VzbyBhbCBQYW5lbCBkZSBBZG1pbmlzdHJhY2nDs25cblxuLSAqKlVSTDoqKiBcXGAvYWRtaW5cXGBcbi0gKipVc3VhcmlvOioqIFxcYGFkbWluXFxgXG4tICoqQ29udHJhc2XDsWE6KiogXFxgYWRtaW4xMjNcXGBcblxuLS0tXG5cbiMjIPCfm6DvuI8gVGVjbm9sb2fDrWFzIFV0aWxpemFkYXNcblxuLSBSZWFjdCAxOC4zLjFcbi0gVHlwZVNjcmlwdCA1LjUuM1xuLSBWaXRlIDUuNC4yXG4tIFRhaWx3aW5kIENTUyAzLjQuMVxuLSBSZWFjdCBSb3V0ZXIgRE9NIDcuOC4wXG4tIEx1Y2lkZSBSZWFjdCAwLjM0NC4wXG4tIEpTWmlwIDMuMTAuMVxuXG4tLS1cblxuIyMg8J+TsSBDYXJhY3RlcsOtc3RpY2FzIFByaW5jaXBhbGVzXG5cbuKchSBQYW5lbCBkZSBhZG1pbmlzdHJhY2nDs24gY29tcGxldG9cbuKchSBHZXN0acOzbiBkZSBub3ZlbGFzIGNvbiBkYXRvcyBjb21wbGV0b3NcbuKchSBTaXN0ZW1hIGRlIHByZWNpb3MgZGluw6FtaWNvc1xu4pyFIFpvbmFzIGRlIGVudHJlZ2EgY29uZmlndXJhYmxlc1xu4pyFIFNpc3RlbWEgZGUgbm90aWZpY2FjaW9uZXMgZW4gdGllbXBvIHJlYWxcbuKchSBFeHBvcnRhY2nDs24vSW1wb3J0YWNpw7NuIGRlIGNvbmZpZ3VyYWNpw7NuXG7inIUgQmFja3VwIGNvbXBsZXRvIGRlbCBzaXN0ZW1hXG7inIUgQ2Fycml0byBkZSBjb21wcmFzIGF2YW56YWRvXG7inIUgSW50ZWdyYWNpw7NuIGNvbiBXaGF0c0FwcFxu4pyFIE9wdGltaXphY2nDs24gZGUgcmVuZGltaWVudG9cbuKchSBTaW5jcm9uaXphY2nDs24gYXV0b23DoXRpY2FcblxuLS0tXG5cbiMjIPCfk54gQ29udGFjdG9cblxuKipXaGF0c0FwcDoqKiArNTM1NDY5MDg3OFxuXG4tLS1cblxuIyMg8J+TnSBOb3RhcyBJbXBvcnRhbnRlc1xuXG5Fc3RlIGJhY2t1cCBjb250aWVuZTpcbi0g4pyFIFRvZG9zIGxvcyBhcmNoaXZvcyBkZSBjw7NkaWdvIGZ1ZW50ZVxuLSDinIUgQ29uZmlndXJhY2nDs24gYWN0dWFsIGRlbCBzaXN0ZW1hIGVtYmViaWRhXG4tIOKchSBUb2RhcyBsYXMgbm92ZWxhcyBkZWwgY2F0w6Fsb2dvXG4tIOKchSBUb2RhcyBsYXMgem9uYXMgZGUgZW50cmVnYVxuLSDinIUgUHJlY2lvcyBhY3R1YWxpemFkb3Ncbi0g4pyFIEVzdHJ1Y3R1cmEgY29tcGxldGEgZGVsIHByb3llY3RvXG5cbioqSU1QT1JUQU5URToqKiBFc3RlIGJhY2t1cCBlc3TDoSBsaXN0byBwYXJhIHNlciBkZXNwbGVnYWRvLiBMYSBjb25maWd1cmFjacOzbiBhY3R1YWwgZGVsIHBhbmVsIGRlIGNvbnRyb2wgeWEgZXN0w6EgZW1iZWJpZGEgZW4gbG9zIGFyY2hpdm9zIGRlbCBzaXN0ZW1hLlxuXG4tLS1cblxuKkdlbmVyYWRvIGF1dG9tw6F0aWNhbWVudGUgcG9yIGVsIFNpc3RlbWEgVFYgYSBsYSBDYXJ0YSpcbmA7XG59XG5cbi8qKlxuICogRnVuY2nDs24gcHJpbmNpcGFsIHBhcmEgZ2VuZXJhciBlbCBiYWNrdXAgY29tcGxldG9cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlRnVsbEJhY2t1cChzeXN0ZW1Db25maWc6IFN5c3RlbUNvbmZpZyk6IFByb21pc2U8dm9pZD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHppcCA9IG5ldyBKU1ppcCgpO1xuXG4gICAgLy8gR2VuZXJhciBSRUFETUUgY29uIGxhIGNvbmZpZ3VyYWNpw7NuIGFjdHVhbFxuICAgIHppcC5maWxlKCdSRUFETUUubWQnLCBnZW5lcmF0ZVJlYWRtZShzeXN0ZW1Db25maWcpKTtcblxuICAgIC8vIFByb2Nlc2FyIHRvZG9zIGxvcyBhcmNoaXZvcyBkZWwgcHJveWVjdG9cbiAgICBmb3IgKGNvbnN0IFtmaWxlUGF0aCwgY29udGVudEdlbmVyYXRvcl0gb2YgT2JqZWN0LmVudHJpZXMoUFJPSkVDVF9GSUxFU19NQVApKSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgY29udGVudDogc3RyaW5nO1xuXG4gICAgICAgIC8vIFNpIGVsIGdlbmVyYWRvciBhY2VwdGEgY29uZmlndXJhY2nDs24sIHBhc2FybGFcbiAgICAgICAgaWYgKGZpbGVQYXRoLmluY2x1ZGVzKCdDb250ZXh0LnRzeCcpKSB7XG4gICAgICAgICAgY29udGVudCA9IGF3YWl0IChjb250ZW50R2VuZXJhdG9yIGFzIGFueSkoc3lzdGVtQ29uZmlnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZW50ID0gYXdhaXQgY29udGVudEdlbmVyYXRvcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgemlwLmZpbGUoZmlsZVBhdGgsIGNvbnRlbnQpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgcHJvY2VzYW5kbyBhcmNoaXZvICR7ZmlsZVBhdGh9OmAsIGVycm9yKTtcbiAgICAgICAgemlwLmZpbGUoZmlsZVBhdGgsIGAvLyBFcnJvciBhbCBwcm9jZXNhciBlc3RlIGFyY2hpdm9cXG4vLyAke2Vycm9yfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdlbmVyYXIgYXJjaGl2byBkZSBjb25maWd1cmFjacOzbiBKU09OIHNlcGFyYWRvXG4gICAgY29uc3QgY29uZmlnSnNvbiA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHZlcnNpb246IHN5c3RlbUNvbmZpZy52ZXJzaW9uLFxuICAgICAgZXhwb3J0RGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgcHJpY2VzOiBzeXN0ZW1Db25maWcucHJpY2VzLFxuICAgICAgZGVsaXZlcnlab25lczogc3lzdGVtQ29uZmlnLmRlbGl2ZXJ5Wm9uZXMsXG4gICAgICBub3ZlbHM6IHN5c3RlbUNvbmZpZy5ub3ZlbHMsXG4gICAgICBzZXR0aW5nczogc3lzdGVtQ29uZmlnLnNldHRpbmdzLFxuICAgICAgc3luY1N0YXR1czogc3lzdGVtQ29uZmlnLnN5bmNTdGF0dXMsXG4gICAgfSwgbnVsbCwgMik7XG5cbiAgICB6aXAuZmlsZSgnYmFja3VwLWNvbmZpZy5qc29uJywgY29uZmlnSnNvbik7XG5cbiAgICAvLyBHZW5lcmFyIHkgZGVzY2FyZ2FyIGVsIFpJUFxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB6aXAuZ2VuZXJhdGVBc3luYyh7XG4gICAgICB0eXBlOiAnYmxvYicsXG4gICAgICBjb21wcmVzc2lvbjogJ0RFRkxBVEUnLFxuICAgICAgY29tcHJlc3Npb25PcHRpb25zOiB7XG4gICAgICAgIGxldmVsOiA5XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGNvbnRlbnQpO1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluay5ocmVmID0gdXJsO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9bOi5dL2csICctJykuc3BsaXQoJ1QnKVswXTtcbiAgICBsaW5rLmRvd25sb2FkID0gYFRWX2FfbGFfQ2FydGFfQmFja3VwX0Z1bGxfJHt0aW1lc3RhbXB9LnppcGA7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBsaW5rLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZW5lcmFuZG8gYmFja3VwIGNvbXBsZXRvOicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFdBQVc7QUFVbEIsTUFBTSxvQkFBMkQ7QUFBQTtBQUFBLEVBRS9ELGdCQUFnQixNQUFNLGlCQUFpQixlQUFlO0FBQUEsRUFDdEQsa0JBQWtCLE1BQU0saUJBQWlCLGlCQUFpQjtBQUFBLEVBQzFELHNCQUFzQixNQUFNLGlCQUFpQixxQkFBcUI7QUFBQSxFQUNsRSxpQkFBaUIsTUFBTSxpQkFBaUIsZ0JBQWdCO0FBQUEsRUFDeEQscUJBQXFCLE1BQU0saUJBQWlCLG9CQUFvQjtBQUFBLEVBQ2hFLHNCQUFzQixNQUFNLGlCQUFpQixxQkFBcUI7QUFBQSxFQUNsRSxxQkFBcUIsTUFBTSxpQkFBaUIsb0JBQW9CO0FBQUEsRUFDaEUsb0JBQW9CLE1BQU0saUJBQWlCLG1CQUFtQjtBQUFBLEVBQzlELGNBQWMsTUFBTSxpQkFBaUIsYUFBYTtBQUFBLEVBQ2xELGVBQWUsTUFBTSxpQkFBaUIsY0FBYztBQUFBLEVBQ3BELGNBQWMsTUFBTSxpQkFBaUIsYUFBYTtBQUFBO0FBQUEsRUFHbEQscUJBQXFCLE1BQU0saUJBQWlCLG9CQUFvQjtBQUFBO0FBQUEsRUFHaEUsZ0JBQWdCLE1BQU0saUJBQWlCLGVBQWU7QUFBQSxFQUN0RCxlQUFlLE1BQU0saUJBQWlCLGNBQWM7QUFBQSxFQUNwRCxpQkFBaUIsTUFBTSxpQkFBaUIsZ0JBQWdCO0FBQUEsRUFDeEQscUJBQXFCLE1BQU0saUJBQWlCLG9CQUFvQjtBQUFBO0FBQUEsRUFHaEUsa0NBQWtDLE1BQU0saUJBQWlCLGlDQUFpQztBQUFBLEVBQzFGLG9DQUFvQyxNQUFNLGlCQUFpQixtQ0FBbUM7QUFBQSxFQUM5RixtQ0FBbUMsTUFB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