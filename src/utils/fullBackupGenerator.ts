import JSZip from 'jszip';
import type { SystemConfig } from '../context/AdminContext';

/**
 * Generador de backup completo del sistema
 * Este archivo genera un backup full con TODOS los archivos del código fuente
 * incluyendo las configuraciones aplicadas en el panel de control
 */

// Lista de archivos a incluir en el backup
const PROJECT_FILES_MAP: Record<string, () => Promise<string>> = {
  // Archivos de configuración raíz
  'package.json': () => fetchProjectFile('/package.json'),
  'vite.config.ts': () => fetchProjectFile('/vite.config.ts'),
  'tailwind.config.js': () => fetchProjectFile('/tailwind.config.js'),
  'tsconfig.json': () => fetchProjectFile('/tsconfig.json'),
  'tsconfig.app.json': () => fetchProjectFile('/tsconfig.app.json'),
  'tsconfig.node.json': () => fetchProjectFile('/tsconfig.node.json'),
  'postcss.config.js': () => fetchProjectFile('/postcss.config.js'),
  'eslint.config.js': () => fetchProjectFile('/eslint.config.js'),
  'index.html': () => fetchProjectFile('/index.html'),
  'vercel.json': () => fetchProjectFile('/vercel.json'),
  '.gitignore': () => fetchProjectFile('/.gitignore'),

  // Archivos públicos
  'public/_redirects': () => fetchProjectFile('/public/_redirects'),

  // Archivos fuente principales
  'src/main.tsx': () => fetchProjectFile('/src/main.tsx'),
  'src/App.tsx': () => fetchProjectFile('/src/App.tsx'),
  'src/index.css': () => fetchProjectFile('/src/index.css'),
  'src/vite-env.d.ts': () => fetchProjectFile('/src/vite-env.d.ts'),

  // Componentes
  'src/components/CastSection.tsx': () => fetchProjectFile('/src/components/CastSection.tsx'),
  'src/components/CheckoutModal.tsx': () => fetchProjectFile('/src/components/CheckoutModal.tsx'),
  'src/components/ErrorMessage.tsx': () => fetchProjectFile('/src/components/ErrorMessage.tsx'),
  'src/components/FloatingNav.tsx': () => fetchProjectFile('/src/components/FloatingNav.tsx'),
  'src/components/Header.tsx': () => fetchProjectFile('/src/components/Header.tsx'),
  'src/components/HeroCarousel.tsx': () => fetchProjectFile('/src/components/HeroCarousel.tsx'),
  'src/components/LoadingSpinner.tsx': () => fetchProjectFile('/src/components/LoadingSpinner.tsx'),
  'src/components/MovieCard.tsx': () => fetchProjectFile('/src/components/MovieCard.tsx'),
  'src/components/NetflixNovelSection.tsx': () => fetchProjectFile('/src/components/NetflixNovelSection.tsx'),
  'src/components/NetflixSection.tsx': () => fetchProjectFile('/src/components/NetflixSection.tsx'),
  'src/components/NovelasModal.tsx': () => fetchProjectFile('/src/components/NovelasModal.tsx'),
  'src/components/NovelCard.tsx': () => fetchProjectFile('/src/components/NovelCard.tsx'),
  'src/components/OptimizedImage.tsx': () => fetchProjectFile('/src/components/OptimizedImage.tsx'),
  'src/components/PriceCard.tsx': () => fetchProjectFile('/src/components/PriceCard.tsx'),
  'src/components/Toast.tsx': () => fetchProjectFile('/src/components/Toast.tsx'),
  'src/components/VideoPlayer.tsx': () => fetchProjectFile('/src/components/VideoPlayer.tsx'),

  // Contextos - AQUÍ SE EMBEBE LA CONFIGURACIÓN
  'src/context/AdminContext.tsx': async (config: SystemConfig) => {
    const source = await fetchProjectFile('/src/context/AdminContext.tsx');
    return embedConfigInAdminContext(source, config);
  },
  'src/context/CartContext.tsx': async (config: SystemConfig) => {
    const source = await fetchProjectFile('/src/context/CartContext.tsx');
    return embedConfigInCartContext(source, config);
  },

  // Páginas
  'src/pages/AdminPanel.tsx': () => fetchProjectFile('/src/pages/AdminPanel.tsx'),
  'src/pages/Anime.tsx': () => fetchProjectFile('/src/pages/Anime.tsx'),
  'src/pages/Cart.tsx': () => fetchProjectFile('/src/pages/Cart.tsx'),
  'src/pages/Home.tsx': () => fetchProjectFile('/src/pages/Home.tsx'),
  'src/pages/MovieDetail.tsx': () => fetchProjectFile('/src/pages/MovieDetail.tsx'),
  'src/pages/Movies.tsx': () => fetchProjectFile('/src/pages/Movies.tsx'),
  'src/pages/NovelDetail.tsx': () => fetchProjectFile('/src/pages/NovelDetail.tsx'),
  'src/pages/Search.tsx': () => fetchProjectFile('/src/pages/Search.tsx'),
  'src/pages/TVDetail.tsx': () => fetchProjectFile('/src/pages/TVDetail.tsx'),
  'src/pages/TVShows.tsx': () => fetchProjectFile('/src/pages/TVShows.tsx'),

  // Servicios
  'src/services/api.ts': () => fetchProjectFile('/src/services/api.ts'),
  'src/services/contentFilter.ts': () => fetchProjectFile('/src/services/contentFilter.ts'),
  'src/services/contentSync.ts': () => fetchProjectFile('/src/services/contentSync.ts'),
  'src/services/tmdb.ts': () => fetchProjectFile('/src/services/tmdb.ts'),

  // Utilidades
  'src/utils/errorHandler.ts': () => fetchProjectFile('/src/utils/errorHandler.ts'),
  'src/utils/performance.ts': () => fetchProjectFile('/src/utils/performance.ts'),
  'src/utils/sourceCodeGenerator.ts': () => fetchProjectFile('/src/utils/sourceCodeGenerator.ts'),
  'src/utils/systemExport.ts': () => fetchProjectFile('/src/utils/systemExport.ts'),
  'src/utils/whatsapp.ts': () => fetchProjectFile('/src/utils/whatsapp.ts'),
  'src/utils/fullBackupGenerator.ts': () => fetchProjectFile('/src/utils/fullBackupGenerator.ts'),

  // Hooks
  'src/hooks/useContentSync.ts': () => fetchProjectFile('/src/hooks/useContentSync.ts'),
  'src/hooks/useOptimizedContent.ts': () => fetchProjectFile('/src/hooks/useOptimizedContent.ts'),
  'src/hooks/usePerformance.ts': () => fetchProjectFile('/src/hooks/usePerformance.ts'),

  // Configuración
  'src/config/api.ts': () => fetchProjectFile('/src/config/api.ts'),

  // Tipos
  'src/types/movie.ts': () => fetchProjectFile('/src/types/movie.ts'),
};

/**
 * Función para leer archivos del proyecto actual
 */
async function fetchProjectFile(path: string): Promise<string> {
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

/**
 * Embebe la configuración actual en AdminContext
 */
function embedConfigInAdminContext(source: string, config: SystemConfig): string {
  const embeddedConfig = {
    version: config.version || '2.1.0',
    prices: config.prices,
    deliveryZones: config.deliveryZones,
    novels: config.novels,
    settings: config.settings || {},
  };

  // Reemplazar la configuración embebida existente
  const configJson = JSON.stringify(embeddedConfig, null, 2);

  // Buscar y reemplazar el bloque EMBEDDED_CONFIG
  const regex = /const EMBEDDED_CONFIG = \{[\s\S]*?\};/;

  if (regex.test(source)) {
    return source.replace(regex, `const EMBEDDED_CONFIG = ${configJson};`);
  } else {
    // Si no existe, agregarlo después de los imports
    const importEndIndex = source.lastIndexOf('import');
    const nextLineIndex = source.indexOf('\n', importEndIndex);
    return source.slice(0, nextLineIndex + 1) +
      `\n// CONFIGURACIÓN EMBEBIDA - Generada automáticamente\n` +
      `const EMBEDDED_CONFIG = ${configJson};\n` +
      source.slice(nextLineIndex + 1);
  }
}

/**
 * Embebe la configuración de precios en CartContext
 */
function embedConfigInCartContext(source: string, config: SystemConfig): string {
  const pricesJson = JSON.stringify(config.prices, null, 2);

  // Buscar y reemplazar el bloque EMBEDDED_PRICES
  const regex = /const EMBEDDED_PRICES = \{[\s\S]*?\};/;

  if (regex.test(source)) {
    return source.replace(regex, `const EMBEDDED_PRICES = ${pricesJson};`);
  } else {
    // Si no existe, agregarlo después de los imports
    const importEndIndex = source.lastIndexOf('import');
    const nextLineIndex = source.indexOf('\n', importEndIndex);
    return source.slice(0, nextLineIndex + 1) +
      `\n// PRECIOS EMBEBIDOS - Generados automáticamente\n` +
      `const EMBEDDED_PRICES = ${pricesJson};\n` +
      source.slice(nextLineIndex + 1);
  }
}

/**
 * Genera el README.md con la configuración actual
 */
function generateReadme(config: SystemConfig): string {
  return `# TV a la Carta - Sistema Completo
## Backup Full Generado Automáticamente

**Fecha de Backup:** ${new Date().toLocaleString('es-ES')}
**Versión del Sistema:** ${config.version || '2.1.0'}

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

${config.deliveryZones?.map((zone: any, index: number) =>
  `${index + 1}. **${zone.name}** - $${zone.cost} CUP`
).join('\n') || 'No hay zonas configuradas'}

### Novelas en Catálogo
Total de novelas: **${config.novels?.length || 0}**

${config.novels?.slice(0, 10).map((novel: any, index: number) =>
  `${index + 1}. **${novel.titulo}** (${novel.año}) - ${novel.genero} - ${novel.capitulos} capítulos`
).join('\n') || 'No hay novelas en el catálogo'}

${config.novels && config.novels.length > 10 ? `\n... y ${config.novels.length - 10} más` : ''}

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

/**
 * Función principal para generar el backup completo
 */
export async function generateFullBackup(systemConfig: SystemConfig): Promise<void> {
  try {
    const zip = new JSZip();

    // Generar README con la configuración actual
    zip.file('README.md', generateReadme(systemConfig));

    // Procesar todos los archivos del proyecto
    for (const [filePath, contentGenerator] of Object.entries(PROJECT_FILES_MAP)) {
      try {
        let content: string;

        // Si el generador acepta configuración, pasarla
        if (filePath.includes('Context.tsx')) {
          content = await (contentGenerator as any)(systemConfig);
        } else {
          content = await contentGenerator();
        }

        zip.file(filePath, content);
      } catch (error) {
        console.error(`Error procesando archivo ${filePath}:`, error);
        zip.file(filePath, `// Error al procesar este archivo\n// ${error}`);
      }
    }

    // Generar archivo de configuración JSON separado
    const configJson = JSON.stringify({
      version: systemConfig.version,
      exportDate: new Date().toISOString(),
      prices: systemConfig.prices,
      deliveryZones: systemConfig.deliveryZones,
      novels: systemConfig.novels,
      settings: systemConfig.settings,
      syncStatus: systemConfig.syncStatus,
    }, null, 2);

    zip.file('backup-config.json', configJson);

    // Generar y descargar el ZIP
    const content = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: {
        level: 9
      }
    });

    const url = URL.createObjectURL(content);
    const link = document.createElement('a');
    link.href = url;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
    link.download = `TV_a_la_Carta_Backup_Full_${timestamp}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

  } catch (error) {
    console.error('Error generando backup completo:', error);
    throw error;
  }
}
