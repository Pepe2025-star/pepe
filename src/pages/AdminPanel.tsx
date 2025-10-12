import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/AdminPanel.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=8e80e8f2"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/project/src/pages/AdminPanel.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=8e80e8f2"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=8e80e8f2";
import { Settings, DollarSign, MapPin, BookOpen, Bell, Download, Upload, Trash2, CreditCard as Edit, Plus, Save, X, LogOut, Home, Check, Info, Activity, PackageOpen } from "/node_modules/lucide-react/dist/esm/lucide-react.js?v=8e80e8f2";
import { useAdmin } from "/src/context/AdminContext.tsx";
import { generateFullBackup } from "/src/utils/fullBackupGenerator.ts";
export function AdminPanel() {
  _s();
  const {
    state,
    login,
    logout,
    addNovel,
    updateNovel,
    deleteNovel,
    addDeliveryZone,
    updateDeliveryZone,
    deleteDeliveryZone,
    updatePrices,
    addNotification,
    markNotificationRead,
    clearNotifications,
    updateSystemConfig,
    exportSystemConfig,
    importSystemConfig,
    getAvailableCountries
  } = useAdmin();
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [activeTab, setActiveTab] = useState("novels");
  const [novelForm, setNovelForm] = useState({
    titulo: "",
    genero: "",
    capitulos: 0,
    año: (/* @__PURE__ */ new Date()).getFullYear(),
    descripcion: "",
    pais: "",
    imagen: "",
    estado: "transmision"
  });
  const [zoneForm, setZoneForm] = useState({ name: "", cost: 0 });
  const [editingNovel, setEditingNovel] = useState(null);
  const [editingZone, setEditingZone] = useState(null);
  const [showNovelForm, setShowNovelForm] = useState(false);
  const [showZoneForm, setShowZoneForm] = useState(false);
  const [importData, setImportData] = useState("");
  const [showImportModal, setShowImportModal] = useState(false);
  const availableGenres = [
    "Drama",
    "Romance",
    "Acción",
    "Comedia",
    "Familia",
    "Thriller",
    "Misterio",
    "Histórico",
    "Fantasía",
    "Ciencia Ficción"
  ];
  const availableCountries = getAvailableCountries();
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && state.isAuthenticated) {
        const event = new CustomEvent("admin_refresh_request", {
          detail: { timestamp: (/* @__PURE__ */ new Date()).toISOString() }
        });
        window.dispatchEvent(event);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [state.isAuthenticated]);
  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(loginForm.username, loginForm.password);
    if (!success) {
      addNotification({
        type: "error",
        title: "Error de autenticación",
        message: "Credenciales incorrectas",
        section: "Autenticación",
        action: "login_error"
      });
    }
  };
  const handleNovelSubmit = (e) => {
    e.preventDefault();
    if (!novelForm.titulo.trim() || !novelForm.genero || !novelForm.pais || novelForm.capitulos <= 0) {
      addNotification({
        type: "error",
        title: "Campos requeridos",
        message: "Por favor completa todos los campos requeridos",
        section: "Gestión de Novelas",
        action: "validation_error"
      });
      return;
    }
    if (editingNovel) {
      const existingNovel = state.novels.find((n) => n.id === editingNovel);
      if (existingNovel) {
        updateNovel({
          ...existingNovel,
          ...novelForm,
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
      setEditingNovel(null);
    } else {
      addNovel(novelForm);
    }
    resetNovelForm();
    setShowNovelForm(false);
  };
  const handleZoneSubmit = (e) => {
    e.preventDefault();
    if (!zoneForm.name.trim() || zoneForm.cost < 0) {
      addNotification({
        type: "error",
        title: "Campos incorrectos",
        message: "Por favor completa todos los campos correctamente",
        section: "Zonas de Entrega",
        action: "validation_error"
      });
      return;
    }
    if (editingZone) {
      const existingZone = state.deliveryZones.find((z) => z.id === editingZone);
      if (existingZone) {
        updateDeliveryZone({
          ...existingZone,
          ...zoneForm,
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
      setEditingZone(null);
    } else {
      addDeliveryZone(zoneForm);
    }
    resetZoneForm();
    setShowZoneForm(false);
  };
  const resetNovelForm = () => {
    setNovelForm({
      titulo: "",
      genero: "",
      capitulos: 0,
      año: (/* @__PURE__ */ new Date()).getFullYear(),
      descripcion: "",
      pais: "",
      imagen: "",
      estado: "transmision"
    });
  };
  const resetZoneForm = () => {
    setZoneForm({ name: "", cost: 0 });
  };
  const startEditingNovel = (novel) => {
    setNovelForm({
      titulo: novel.titulo,
      genero: novel.genero,
      capitulos: novel.capitulos,
      año: novel.año,
      descripcion: novel.descripcion || "",
      pais: novel.pais || "",
      imagen: novel.imagen || "",
      estado: novel.estado || "transmision"
    });
    setEditingNovel(novel.id);
    setShowNovelForm(true);
  };
  const startEditingZone = (zone) => {
    setZoneForm({
      name: zone.name,
      cost: zone.cost
    });
    setEditingZone(zone.id);
    setShowZoneForm(true);
  };
  const handlePricesUpdate = (e) => {
    e.preventDefault();
    addNotification({
      type: "success",
      title: "Precios actualizados",
      message: "Precios actualizados correctamente",
      section: "Configuración de Precios",
      action: "update"
    });
  };
  const handleExport = () => {
    try {
      const configJson = exportSystemConfig();
      if (!configJson) {
        addNotification({
          type: "error",
          title: "Error de exportación",
          message: "No se pudo generar la configuración para exportar",
          section: "Sistema",
          action: "export_error"
        });
        return;
      }
      const blob = new Blob([configJson], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `tv-a-la-carta-config-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      addNotification({
        type: "success",
        title: "Exportación exitosa",
        message: "Configuración exportada correctamente",
        section: "Sistema",
        action: "export_success"
      });
    } catch (error) {
      console.error("Error al exportar configuración:", error);
      addNotification({
        type: "error",
        title: "Error de exportación",
        message: "Error al exportar la configuración del sistema",
        section: "Sistema",
        action: "export_error"
      });
    }
  };
  const handleImport = () => {
    if (!importData.trim()) {
      addNotification({
        type: "error",
        title: "Datos faltantes",
        message: "Por favor pega la configuración a importar",
        section: "Sistema",
        action: "import_validation_error"
      });
      return;
    }
    const success = importSystemConfig(importData);
    if (success) {
      setImportData("");
      setShowImportModal(false);
    }
  };
  const handleFullBackupExport = async () => {
    try {
      addNotification({
        type: "info",
        title: "Backup en progreso",
        message: "Generando backup completo con todos los archivos del sistema...",
        section: "Sistema",
        action: "backup_start"
      });
      const fullSystemConfig = {
        version: state.systemConfig.version,
        prices: state.prices,
        deliveryZones: state.deliveryZones,
        novels: state.novels,
        settings: state.systemConfig.settings,
        syncStatus: state.syncStatus,
        exportDate: (/* @__PURE__ */ new Date()).toISOString()
      };
      await generateFullBackup(fullSystemConfig);
      addNotification({
        type: "success",
        title: "Backup completado",
        message: "Backup completo generado exitosamente con toda la configuración embebida",
        section: "Sistema",
        action: "backup_success"
      });
    } catch (error) {
      console.error("Error al generar backup completo:", error);
      addNotification({
        type: "error",
        title: "Error en backup",
        message: `Error al generar el backup completo: ${error}`,
        section: "Sistema",
        action: "backup_error"
      });
    }
  };
  const getCountryFlag = (country) => {
    const flags = {
      "Cuba": "🇨🇺",
      "Turquía": "🇹🇷",
      "México": "🇲🇽",
      "Brasil": "🇧🇷",
      "Colombia": "🇨🇴",
      "Argentina": "🇦🇷",
      "España": "🇪🇸",
      "Estados Unidos": "🇺🇸",
      "Corea del Sur": "🇰🇷",
      "India": "🇮🇳",
      "Reino Unido": "🇬🇧",
      "Francia": "🇫🇷",
      "Italia": "🇮🇹",
      "Alemania": "🇩🇪",
      "Japón": "🇯🇵",
      "China": "🇨🇳",
      "Rusia": "🇷🇺"
    };
    return flags[country] || "🌍";
  };
  if (!state.isAuthenticated) {
    return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full w-fit mx-auto mb-4", children: /* @__PURE__ */ jsxDEV(Settings, { className: "h-8 w-8 text-white" }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 378,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 377,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-2xl font-bold text-gray-900 mb-2", children: "Panel de Administración" }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 380,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", children: "TV a la Carta" }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 381,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/AdminPanel.tsx",
        lineNumber: 376,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("form", { onSubmit: handleLogin, className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Usuario" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 386,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              value: loginForm.username,
              onChange: (e) => setLoginForm((prev) => ({ ...prev, username: e.target.value })),
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
              autoComplete: "off",
              required: true
            },
            void 0,
            false,
            {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 389,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 385,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Contraseña" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 400,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "password",
              value: loginForm.password,
              onChange: (e) => setLoginForm((prev) => ({ ...prev, password: e.target.value })),
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
              autoComplete: "off",
              required: true
            },
            void 0,
            false,
            {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 403,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 399,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            type: "submit",
            className: "w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105",
            children: "Iniciar Sesión"
          },
          void 0,
          false,
          {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 413,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/AdminPanel.tsx",
        lineNumber: 384,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxDEV(
        Link,
        {
          to: "/",
          className: "text-blue-600 hover:text-blue-800 text-sm font-medium",
          children: "← Volver al inicio"
        },
        void 0,
        false,
        {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 422,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "/home/project/src/pages/AdminPanel.tsx",
        lineNumber: 421,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/pages/AdminPanel.tsx",
      lineNumber: 375,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/project/src/pages/AdminPanel.tsx",
      lineNumber: 374,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white/20 p-3 rounded-xl mr-4", children: /* @__PURE__ */ jsxDEV(Settings, { className: "h-8 w-8" }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 441,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 440,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h1", { className: "text-2xl font-bold", children: "Panel de Administración" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 444,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-blue-100", children: "TV a la Carta - Sistema de Gestión" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 445,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 443,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/AdminPanel.tsx",
        lineNumber: 439,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm opacity-90", children: [
            "Versión ",
            state.systemConfig.version
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 450,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs opacity-75", children: [
            "Última sincronización: ",
            new Date(state.syncStatus.lastSync).toLocaleTimeString()
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 451,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 449,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/",
            className: "bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors flex items-center",
            children: [
              /* @__PURE__ */ jsxDEV(Home, { className: "h-4 w-4 mr-2" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 459,
                columnNumber: 15
              }, this),
              "Ir al sitio"
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 455,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: logout,
            className: "bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors flex items-center",
            children: [
              /* @__PURE__ */ jsxDEV(LogOut, { className: "h-4 w-4 mr-2" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 466,
                columnNumber: 15
              }, this),
              "Cerrar Sesión"
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 462,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/AdminPanel.tsx",
        lineNumber: 448,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/pages/AdminPanel.tsx",
      lineNumber: 438,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/project/src/pages/AdminPanel.tsx",
      lineNumber: 437,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto p-6", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-blue-600 text-sm font-medium", children: "Novelas Totales" }, void 0, false, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 479,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold text-blue-800", children: state.novels.length }, void 0, false, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 480,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 478,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(BookOpen, { className: "h-8 w-8 text-blue-500" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 482,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 477,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 476,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-green-600 text-sm font-medium", children: "Zonas de Entrega" }, void 0, false, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 489,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold text-green-800", children: state.deliveryZones.length }, void 0, false, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 490,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 488,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(MapPin, { className: "h-8 w-8 text-green-500" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 492,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 487,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 486,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-purple-600 text-sm font-medium", children: "Notificaciones" }, void 0, false, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 499,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold text-purple-800", children: state.notifications.filter((n) => !n.read).length }, void 0, false, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 500,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 498,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Bell, { className: "h-8 w-8 text-purple-500" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 504,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 497,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 496,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-orange-600 text-sm font-medium", children: "Estado del Sistema" }, void 0, false, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 511,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-bold text-orange-800", children: state.syncStatus.isOnline ? "🟢 En Línea" : "🔴 Desconectado" }, void 0, false, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 512,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 510,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Activity, { className: "h-8 w-8 text-orange-500" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 516,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 509,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 508,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/AdminPanel.tsx",
        lineNumber: 475,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 mb-8", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap border-b border-gray-200", children: [
        { id: "novels", label: "Gestión de Novelas", icon: BookOpen },
        { id: "zones", label: "Zonas de Entrega", icon: MapPin },
        { id: "prices", label: "Configuración de Precios", icon: DollarSign },
        { id: "notifications", label: "Notificaciones", icon: Bell },
        { id: "system", label: "Sistema", icon: Settings }
      ].map(
        (tab) => /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setActiveTab(tab.id),
            className: `flex items-center px-6 py-4 font-medium transition-colors ${activeTab === tab.id ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50" : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"}`,
            children: [
              /* @__PURE__ */ jsxDEV(tab.icon, { className: "h-5 w-5 mr-2" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 540,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "hidden sm:inline", children: tab.label }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 541,
                columnNumber: 17
              }, this)
            ]
          },
          tab.id,
          true,
          {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 531,
            columnNumber: 13
          },
          this
        )
      ) }, void 0, false, {
        fileName: "/home/project/src/pages/AdminPanel.tsx",
        lineNumber: 523,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/project/src/pages/AdminPanel.tsx",
        lineNumber: 522,
        columnNumber: 9
      }, this),
      activeTab === "novels" && /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 p-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold text-gray-900 flex items-center", children: [
            /* @__PURE__ */ jsxDEV(BookOpen, { className: "h-6 w-6 mr-2 text-purple-600" }, void 0, false, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 553,
              columnNumber: 19
            }, this),
            "Gestión de Novelas"
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 552,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => {
                resetNovelForm();
                setEditingNovel(null);
                setShowNovelForm(true);
              },
              className: "bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors",
              children: [
                /* @__PURE__ */ jsxDEV(Plus, { className: "h-4 w-4 mr-2" }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 564,
                  columnNumber: 19
                }, this),
                "Agregar Novela"
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 556,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 551,
          columnNumber: 15
        }, this),
        showNovelForm && /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: editingNovel ? "Editar Novela" : "Agregar Nueva Novela" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 572,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("form", { onSubmit: handleNovelSubmit, className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Título *" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 578,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "text",
                  value: novelForm.titulo,
                  onChange: (e) => setNovelForm((prev) => ({ ...prev, titulo: e.target.value })),
                  className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                  required: true
                },
                void 0,
                false,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 581,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 577,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Género *" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 591,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(
                "select",
                {
                  value: novelForm.genero,
                  onChange: (e) => setNovelForm((prev) => ({ ...prev, genero: e.target.value })),
                  className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                  required: true,
                  children: [
                    /* @__PURE__ */ jsxDEV("option", { value: "", children: "Seleccionar género" }, void 0, false, {
                      fileName: "/home/project/src/pages/AdminPanel.tsx",
                      lineNumber: 600,
                      columnNumber: 25
                    }, this),
                    availableGenres.map(
                      (genre) => /* @__PURE__ */ jsxDEV("option", { value: genre, children: genre }, genre, false, {
                        fileName: "/home/project/src/pages/AdminPanel.tsx",
                        lineNumber: 602,
                        columnNumber: 21
                      }, this)
                    )
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 594,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 590,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Capítulos *" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 608,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "number",
                  value: novelForm.capitulos,
                  onChange: (e) => setNovelForm((prev) => ({ ...prev, capitulos: parseInt(e.target.value) || 0 })),
                  className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                  min: "1",
                  required: true
                },
                void 0,
                false,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 611,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 607,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Año *" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 622,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "number",
                  value: novelForm.año,
                  onChange: (e) => setNovelForm((prev) => ({ ...prev, año: parseInt(e.target.value) || (/* @__PURE__ */ new Date()).getFullYear() })),
                  className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                  min: "1900",
                  max: (/* @__PURE__ */ new Date()).getFullYear() + 5,
                  required: true
                },
                void 0,
                false,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 625,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 621,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "País *" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 637,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(
                "select",
                {
                  value: novelForm.pais,
                  onChange: (e) => setNovelForm((prev) => ({ ...prev, pais: e.target.value })),
                  className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                  required: true,
                  children: [
                    /* @__PURE__ */ jsxDEV("option", { value: "", children: "Seleccionar país" }, void 0, false, {
                      fileName: "/home/project/src/pages/AdminPanel.tsx",
                      lineNumber: 646,
                      columnNumber: 25
                    }, this),
                    availableCountries.map(
                      (country) => /* @__PURE__ */ jsxDEV("option", { value: country, children: [
                        getCountryFlag(country),
                        " ",
                        country
                      ] }, country, true, {
                        fileName: "/home/project/src/pages/AdminPanel.tsx",
                        lineNumber: 648,
                        columnNumber: 21
                      }, this)
                    )
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 640,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 636,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Estado *" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 656,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(
                "select",
                {
                  value: novelForm.estado,
                  onChange: (e) => setNovelForm((prev) => ({ ...prev, estado: e.target.value })),
                  className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                  required: true,
                  children: [
                    /* @__PURE__ */ jsxDEV("option", { value: "transmision", children: "📡 En Transmisión" }, void 0, false, {
                      fileName: "/home/project/src/pages/AdminPanel.tsx",
                      lineNumber: 665,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("option", { value: "finalizada", children: "✅ Finalizada" }, void 0, false, {
                      fileName: "/home/project/src/pages/AdminPanel.tsx",
                      lineNumber: 666,
                      columnNumber: 25
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 659,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 655,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-2", children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "URL de Imagen" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 671,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "url",
                  value: novelForm.imagen,
                  onChange: (e) => setNovelForm((prev) => ({ ...prev, imagen: e.target.value })),
                  className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                  placeholder: "https://ejemplo.com/imagen.jpg"
                },
                void 0,
                false,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 674,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 670,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-2", children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Descripción" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 684,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(
                "textarea",
                {
                  value: novelForm.descripcion,
                  onChange: (e) => setNovelForm((prev) => ({ ...prev, descripcion: e.target.value })),
                  className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                  rows: 3,
                  placeholder: "Descripción de la novela..."
                },
                void 0,
                false,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 687,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 683,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-2 flex space-x-4", children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  type: "submit",
                  className: "bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg flex items-center transition-colors",
                  children: [
                    /* @__PURE__ */ jsxDEV(Save, { className: "h-4 w-4 mr-2" }, void 0, false, {
                      fileName: "/home/project/src/pages/AdminPanel.tsx",
                      lineNumber: 701,
                      columnNumber: 25
                    }, this),
                    editingNovel ? "Actualizar" : "Agregar",
                    " Novela"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 697,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setShowNovelForm(false);
                    setEditingNovel(null);
                    resetNovelForm();
                  },
                  className: "bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg flex items-center transition-colors",
                  children: [
                    /* @__PURE__ */ jsxDEV(X, { className: "h-4 w-4 mr-2" }, void 0, false, {
                      fileName: "/home/project/src/pages/AdminPanel.tsx",
                      lineNumber: 713,
                      columnNumber: 25
                    }, this),
                    "Cancelar"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 704,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 696,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 576,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 571,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: state.novels.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "text-center py-12 bg-gray-50 rounded-xl", children: [
          /* @__PURE__ */ jsxDEV(BookOpen, { className: "h-12 w-12 text-gray-400 mx-auto mb-4" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 725,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "No hay novelas" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 726,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", children: "Agrega la primera novela al catálogo" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 727,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 724,
          columnNumber: 15
        }, this) : state.novels.map(
          (novel) => /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-50 rounded-xl p-6 border border-gray-200", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center mb-2", children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-gray-900 mr-3", children: novel.titulo }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 735,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: `px-2 py-1 rounded-full text-xs font-bold ${novel.estado === "transmision" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`, children: novel.estado === "transmision" ? "📡 En Transmisión" : "✅ Finalizada" }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 736,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 734,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600", children: [
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "Género:" }, void 0, false, {
                    fileName: "/home/project/src/pages/AdminPanel.tsx",
                    lineNumber: 746,
                    columnNumber: 31
                  }, this),
                  " ",
                  novel.genero
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 745,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "Capítulos:" }, void 0, false, {
                    fileName: "/home/project/src/pages/AdminPanel.tsx",
                    lineNumber: 749,
                    columnNumber: 31
                  }, this),
                  " ",
                  novel.capitulos
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 748,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "Año:" }, void 0, false, {
                    fileName: "/home/project/src/pages/AdminPanel.tsx",
                    lineNumber: 752,
                    columnNumber: 31
                  }, this),
                  " ",
                  novel.año
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 751,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "País:" }, void 0, false, {
                    fileName: "/home/project/src/pages/AdminPanel.tsx",
                    lineNumber: 755,
                    columnNumber: 31
                  }, this),
                  " ",
                  getCountryFlag(novel.pais || "No especificado"),
                  " ",
                  novel.pais || "No especificado"
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 754,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 744,
                columnNumber: 27
              }, this),
              novel.descripcion && /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 mt-2 text-sm", children: novel.descripcion }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 759,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "mt-3 text-sm", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-medium text-green-600", children: [
                  "Precio: $",
                  (novel.capitulos * state.prices.novelPricePerChapter).toLocaleString(),
                  " CUP"
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 762,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-gray-500 ml-2", children: [
                  "($",
                  state.prices.novelPricePerChapter,
                  " CUP × ",
                  novel.capitulos,
                  " cap.)"
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 765,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 761,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 733,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex space-x-2 ml-4", children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => startEditingNovel(novel),
                  className: "bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors",
                  children: /* @__PURE__ */ jsxDEV(Edit, { className: "h-4 w-4" }, void 0, false, {
                    fileName: "/home/project/src/pages/AdminPanel.tsx",
                    lineNumber: 775,
                    columnNumber: 29
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 771,
                  columnNumber: 27
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => {
                    if (confirm(`¿Estás seguro de eliminar "${novel.titulo}"?`)) {
                      deleteNovel(novel.id);
                    }
                  },
                  className: "bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors",
                  children: /* @__PURE__ */ jsxDEV(Trash2, { className: "h-4 w-4" }, void 0, false, {
                    fileName: "/home/project/src/pages/AdminPanel.tsx",
                    lineNumber: 785,
                    columnNumber: 29
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 777,
                  columnNumber: 27
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 770,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 732,
            columnNumber: 23
          }, this) }, novel.id, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 731,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 722,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/AdminPanel.tsx",
        lineNumber: 550,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/project/src/pages/AdminPanel.tsx",
        lineNumber: 549,
        columnNumber: 9
      }, this),
      activeTab === "zones" && /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 p-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold text-gray-900 flex items-center", children: [
            /* @__PURE__ */ jsxDEV(MapPin, { className: "h-6 w-6 mr-2 text-green-600" }, void 0, false, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 803,
              columnNumber: 19
            }, this),
            "Zonas de Entrega"
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 802,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => {
                resetZoneForm();
                setEditingZone(null);
                setShowZoneForm(true);
              },
              className: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors",
              children: [
                /* @__PURE__ */ jsxDEV(Plus, { className: "h-4 w-4 mr-2" }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 814,
                  columnNumber: 19
                }, this),
                "Agregar Zona"
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 806,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 801,
          columnNumber: 15
        }, this),
        showZoneForm && /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: editingZone ? "Editar Zona" : "Agregar Nueva Zona" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 822,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("form", { onSubmit: handleZoneSubmit, className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Nombre de la Zona *" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 828,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "text",
                  value: zoneForm.name,
                  onChange: (e) => setZoneForm((prev) => ({ ...prev, name: e.target.value })),
                  className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                  placeholder: "Ej: Centro de la Ciudad",
                  required: true
                },
                void 0,
                false,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 831,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 827,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Costo de Entrega (CUP) *" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 842,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "number",
                  value: zoneForm.cost,
                  onChange: (e) => setZoneForm((prev) => ({ ...prev, cost: parseInt(e.target.value) || 0 })),
                  className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                  min: "0",
                  required: true
                },
                void 0,
                false,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 845,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 841,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-2 flex space-x-4", children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  type: "submit",
                  className: "bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center transition-colors",
                  children: [
                    /* @__PURE__ */ jsxDEV(Save, { className: "h-4 w-4 mr-2" }, void 0, false, {
                      fileName: "/home/project/src/pages/AdminPanel.tsx",
                      lineNumber: 860,
                      columnNumber: 25
                    }, this),
                    editingZone ? "Actualizar" : "Agregar",
                    " Zona"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 856,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setShowZoneForm(false);
                    setEditingZone(null);
                    resetZoneForm();
                  },
                  className: "bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg flex items-center transition-colors",
                  children: [
                    /* @__PURE__ */ jsxDEV(X, { className: "h-4 w-4 mr-2" }, void 0, false, {
                      fileName: "/home/project/src/pages/AdminPanel.tsx",
                      lineNumber: 872,
                      columnNumber: 25
                    }, this),
                    "Cancelar"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 863,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 855,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 826,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 821,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: state.deliveryZones.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "text-center py-12 bg-gray-50 rounded-xl", children: [
          /* @__PURE__ */ jsxDEV(MapPin, { className: "h-12 w-12 text-gray-400 mx-auto mb-4" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 884,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "No hay zonas de entrega" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 885,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", children: "Agrega la primera zona de entrega" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 886,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 883,
          columnNumber: 15
        }, this) : state.deliveryZones.map(
          (zone) => /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-50 rounded-xl p-6 border border-gray-200", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-gray-900", children: zone.name }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 893,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-green-600 font-semibold", children: [
                "Costo: $",
                zone.cost.toLocaleString(),
                " CUP"
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 894,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 892,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex space-x-2", children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => startEditingZone(zone),
                  className: "bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors",
                  children: /* @__PURE__ */ jsxDEV(Edit, { className: "h-4 w-4" }, void 0, false, {
                    fileName: "/home/project/src/pages/AdminPanel.tsx",
                    lineNumber: 903,
                    columnNumber: 29
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 899,
                  columnNumber: 27
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => {
                    if (confirm(`¿Estás seguro de eliminar la zona "${zone.name}"?`)) {
                      deleteDeliveryZone(zone.id);
                    }
                  },
                  className: "bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors",
                  children: /* @__PURE__ */ jsxDEV(Trash2, { className: "h-4 w-4" }, void 0, false, {
                    fileName: "/home/project/src/pages/AdminPanel.tsx",
                    lineNumber: 913,
                    columnNumber: 29
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 905,
                  columnNumber: 27
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 898,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 891,
            columnNumber: 23
          }, this) }, zone.id, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 890,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 881,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/AdminPanel.tsx",
        lineNumber: 800,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/project/src/pages/AdminPanel.tsx",
        lineNumber: 799,
        columnNumber: 9
      }, this),
      activeTab === "prices" && /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 p-6", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold text-gray-900 mb-6 flex items-center", children: [
          /* @__PURE__ */ jsxDEV(DollarSign, { className: "h-6 w-6 mr-2 text-green-600" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 929,
            columnNumber: 15
          }, this),
          "Configuración de Precios"
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 928,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("form", { onSubmit: handlePricesUpdate, className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Precio de Películas (CUP)" }, void 0, false, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 935,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "number",
                value: state.prices.moviePrice,
                onChange: (e) => updatePrices({ ...state.prices, moviePrice: parseInt(e.target.value) || 0 }),
                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                min: "0"
              },
              void 0,
              false,
              {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 938,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 934,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Precio de Series por Temporada (CUP)" }, void 0, false, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 948,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "number",
                value: state.prices.seriesPrice,
                onChange: (e) => updatePrices({ ...state.prices, seriesPrice: parseInt(e.target.value) || 0 }),
                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                min: "0"
              },
              void 0,
              false,
              {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 951,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 947,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Precio de Novelas por Capítulo (CUP)" }, void 0, false, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 961,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "number",
                value: state.prices.novelPricePerChapter,
                onChange: (e) => updatePrices({ ...state.prices, novelPricePerChapter: parseInt(e.target.value) || 0 }),
                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                min: "0"
              },
              void 0,
              false,
              {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 964,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 960,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Recargo por Transferencia (%)" }, void 0, false, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 974,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "number",
                value: state.prices.transferFeePercentage,
                onChange: (e) => updatePrices({ ...state.prices, transferFeePercentage: parseInt(e.target.value) || 0 }),
                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                min: "0",
                max: "100"
              },
              void 0,
              false,
              {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 977,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 973,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 933,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/AdminPanel.tsx",
        lineNumber: 927,
        columnNumber: 9
      }, this),
      activeTab === "notifications" && /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 p-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold text-gray-900 flex items-center", children: [
            /* @__PURE__ */ jsxDEV(Bell, { className: "h-6 w-6 mr-2 text-yellow-600" }, void 0, false, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 995,
              columnNumber: 17
            }, this),
            "Notificaciones (",
            state.notifications.filter((n) => !n.read).length,
            " sin leer)"
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 994,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: clearNotifications,
              className: "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors",
              children: [
                /* @__PURE__ */ jsxDEV(Trash2, { className: "h-4 w-4 mr-2" }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 1002,
                  columnNumber: 17
                }, this),
                "Limpiar Todo"
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 998,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 993,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 max-h-96 overflow-y-auto", children: state.notifications.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "text-center py-12 bg-gray-50 rounded-xl", children: [
          /* @__PURE__ */ jsxDEV(Bell, { className: "h-12 w-12 text-gray-400 mx-auto mb-4" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 1010,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "No hay notificaciones" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 1011,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", children: "Las notificaciones del sistema aparecerán aquí" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 1012,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 1009,
          columnNumber: 13
        }, this) : state.notifications.map(
          (notification) => /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: `p-4 rounded-xl border-l-4 ${notification.read ? "bg-gray-50 border-gray-300" : "bg-blue-50 border-blue-500"} ${notification.type === "success" ? "border-green-500 bg-green-50" : notification.type === "error" ? "border-red-500 bg-red-50" : notification.type === "warning" ? "border-yellow-500 bg-yellow-50" : "border-blue-500 bg-blue-50"}`,
              children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-gray-900 font-medium", children: notification.message }, void 0, false, {
                    fileName: "/home/project/src/pages/AdminPanel.tsx",
                    lineNumber: 1029,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-gray-500 text-sm mt-1", children: notification.timestamp.toLocaleString() }, void 0, false, {
                    fileName: "/home/project/src/pages/AdminPanel.tsx",
                    lineNumber: 1030,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 1028,
                  columnNumber: 23
                }, this),
                !notification.read && /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => markNotificationRead(notification.id),
                    className: "text-blue-600 hover:text-blue-800 ml-4",
                    children: /* @__PURE__ */ jsxDEV(Check, { className: "h-4 w-4" }, void 0, false, {
                      fileName: "/home/project/src/pages/AdminPanel.tsx",
                      lineNumber: 1039,
                      columnNumber: 27
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/project/src/pages/AdminPanel.tsx",
                    lineNumber: 1035,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 1027,
                columnNumber: 21
              }, this)
            },
            notification.id,
            false,
            {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 1016,
              columnNumber: 13
            },
            this
          )
        ) }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 1007,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/AdminPanel.tsx",
        lineNumber: 992,
        columnNumber: 9
      }, this),
      activeTab === "system" && /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 p-6", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold text-gray-900 mb-6 flex items-center", children: [
          /* @__PURE__ */ jsxDEV(Settings, { className: "h-6 w-6 mr-2 text-blue-600" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 1055,
            columnNumber: 17
          }, this),
          "Configuración del Sistema"
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 1054,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold text-gray-900", children: "Información del Sistema" }, void 0, false, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 1061,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-50 rounded-lg p-4", children: /* @__PURE__ */ jsxDEV("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "Versión:" }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 1065,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: state.systemConfig.version }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 1066,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 1064,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "Estado:" }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 1069,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: state.syncStatus.isOnline ? "text-green-600" : "text-red-600", children: state.syncStatus.isOnline ? "🟢 En Línea" : "🔴 Desconectado" }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 1070,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 1068,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "Última Sincronización:" }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 1075,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: new Date(state.syncStatus.lastSync).toLocaleString() }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 1076,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 1074,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "Cambios Pendientes:" }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 1079,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: state.syncStatus.pendingChanges > 0 ? "text-orange-600" : "text-green-600", children: state.syncStatus.pendingChanges }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 1080,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 1078,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 1063,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 1062,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 1060,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold text-gray-900", children: "Acciones del Sistema" }, void 0, false, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 1089,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: handleExport,
                  className: "w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg flex items-center justify-center transition-colors",
                  children: [
                    /* @__PURE__ */ jsxDEV(Download, { className: "h-4 w-4 mr-2" }, void 0, false, {
                      fileName: "/home/project/src/pages/AdminPanel.tsx",
                      lineNumber: 1095,
                      columnNumber: 23
                    }, this),
                    "Exportar Configuración"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 1091,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => setShowImportModal(true),
                  className: "w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg flex items-center justify-center transition-colors",
                  children: [
                    /* @__PURE__ */ jsxDEV(Upload, { className: "h-4 w-4 mr-2" }, void 0, false, {
                      fileName: "/home/project/src/pages/AdminPanel.tsx",
                      lineNumber: 1103,
                      columnNumber: 23
                    }, this),
                    "Importar Configuración"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 1099,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: handleFullBackupExport,
                  className: "w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg flex items-center justify-center transition-colors shadow-lg",
                  children: [
                    /* @__PURE__ */ jsxDEV(PackageOpen, { className: "h-4 w-4 mr-2" }, void 0, false, {
                      fileName: "/home/project/src/pages/AdminPanel.tsx",
                      lineNumber: 1111,
                      columnNumber: 23
                    }, this),
                    "Exportar Backup Full"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 1107,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "bg-amber-50 border border-amber-200 rounded-lg p-3 mt-2", children: /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-amber-800", children: [
                /* @__PURE__ */ jsxDEV(Info, { className: "h-3 w-3 inline mr-1" }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPanel.tsx",
                  lineNumber: 1117,
                  columnNumber: 25
                }, this),
                "El Backup Full incluye todos los archivos del sistema con la configuración aplicada"
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 1116,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 1115,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 1090,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 1088,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 1059,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/AdminPanel.tsx",
        lineNumber: 1053,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/project/src/pages/AdminPanel.tsx",
        lineNumber: 1052,
        columnNumber: 9
      }, this),
      showImportModal && /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-2xl w-full max-w-2xl p-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-gray-900", children: "Importar Configuración" }, void 0, false, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 1133,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => setShowImportModal(false),
              className: "text-gray-500 hover:text-gray-700",
              children: /* @__PURE__ */ jsxDEV(X, { className: "h-6 w-6" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 1138,
                columnNumber: 19
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 1134,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 1132,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Configuración JSON" }, void 0, false, {
              fileName: "/home/project/src/pages/AdminPanel.tsx",
              lineNumber: 1144,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              "textarea",
              {
                value: importData,
                onChange: (e) => setImportData(e.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-64",
                placeholder: "Pega aquí la configuración JSON exportada..."
              },
              void 0,
              false,
              {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 1147,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 1143,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex space-x-4", children: [
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: handleImport,
                className: "bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center transition-colors",
                children: [
                  /* @__PURE__ */ jsxDEV(Upload, { className: "h-4 w-4 mr-2" }, void 0, false, {
                    fileName: "/home/project/src/pages/AdminPanel.tsx",
                    lineNumber: 1160,
                    columnNumber: 21
                  }, this),
                  "Importar"
                ]
              },
              void 0,
              true,
              {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 1156,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => {
                  setShowImportModal(false);
                  setImportData("");
                },
                className: "bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg flex items-center transition-colors",
                children: [
                  /* @__PURE__ */ jsxDEV(X, { className: "h-4 w-4 mr-2" }, void 0, false, {
                    fileName: "/home/project/src/pages/AdminPanel.tsx",
                    lineNumber: 1170,
                    columnNumber: 21
                  }, this),
                  "Cancelar"
                ]
              },
              void 0,
              true,
              {
                fileName: "/home/project/src/pages/AdminPanel.tsx",
                lineNumber: 1163,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPanel.tsx",
            lineNumber: 1155,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPanel.tsx",
          lineNumber: 1142,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/AdminPanel.tsx",
        lineNumber: 1131,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/project/src/pages/AdminPanel.tsx",
        lineNumber: 1130,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/pages/AdminPanel.tsx",
      lineNumber: 473,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/project/src/pages/AdminPanel.tsx",
    lineNumber: 435,
    columnNumber: 5
  }, this);
}
_s(AdminPanel, "oilLSX3k3357vz0o9CsW2Xk1lks=", false, function() {
  return [useAdmin];
});
_c = AdminPanel;
var _c;
$RefreshReg$(_c, "AdminPanel");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/pages/AdminPanel.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/pages/AdminPanel.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBQSx5Q0FBQyxVQUFPLFdBQVUsa0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQWdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTUE7QUFBQSxZQUNBO0FBQUEsY0FBQztBQUFBO0FBQUEsZ0JBQ0MsU0FBUyxNQUFNO0FBQ2IvRCxxQ0FBbUIsS0FBSztBQUN4QkYsZ0NBQWMsRUFBRTtBQUFBLGdCQUNsQjtBQUFBLGdCQUNBLFdBQVU7QUFBQSxnQkFFVjtBQUFBLHlDQUFDLEtBQUUsV0FBVSxrQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVNBO0FBQUEsZUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFrQkE7QUFBQSxhQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZ0NBO0FBQUEsV0EzQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTRDQSxLQTdDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOENBO0FBQUEsU0EvckJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0Fpc0JBO0FBQUEsT0F2dUJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F3dUJBO0FBRUo7QUFBQ2pELEdBbm5DZUQsWUFBVTtBQUFBLFVBbUJwQkYsUUFBUTtBQUFBO0FBQUF5SixLQW5CRXZKO0FBQVUsSUFBQXVKO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJTZXR0aW5ncyIsIkRvbGxhclNpZ24iLCJNYXBQaW4iLCJCb29rT3BlbiIsIkJlbGwiLCJEb3dubG9hZCIsIlVwbG9hZCIsIlRyYXNoMiIsIkNyZWRpdENhcmQiLCJFZGl0IiwiUGx1cyIsIlNhdmUiLCJYIiwiTG9nT3V0IiwiSG9tZSIsIkNoZWNrIiwiSW5mbyIsIkFjdGl2aXR5IiwiUGFja2FnZU9wZW4iLCJ1c2VBZG1pbiIsImdlbmVyYXRlRnVsbEJhY2t1cCIsIkFkbWluUGFuZWwiLCJfcyIsInN0YXRlIiwibG9naW4iLCJsb2dvdXQiLCJhZGROb3ZlbCIsInVwZGF0ZU5vdmVsIiwiZGVsZXRlTm92ZWwiLCJhZGREZWxpdmVyeVpvbmUiLCJ1cGRhdGVEZWxpdmVyeVpvbmUiLCJkZWxldGVEZWxpdmVyeVpvbmUiLCJ1cGRhdGVQcmljZXMiLCJhZGROb3RpZmljYXRpb24iLCJtYXJrTm90aWZpY2F0aW9uUmVhZCIsImNsZWFyTm90aWZpY2F0aW9ucyIsInVwZGF0ZVN5c3RlbUNvbmZpZyIsImV4cG9ydFN5c3RlbUNvbmZpZyIsImltcG9ydFN5c3RlbUNvbmZpZyIsImdldEF2YWlsYWJsZUNvdW50cmllcyIsImxvZ2luRm9ybSIsInNldExvZ2luRm9ybSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJub3ZlbEZvcm0iLCJzZXROb3ZlbEZvcm0iLCJ0aXR1bG8iLCJnZW5lcm8iLCJjYXBpdHVsb3MiLCJhw7FvIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZGVzY3JpcGNpb24iLCJwYWlzIiwiaW1hZ2VuIiwiZXN0YWRvIiwiem9uZUZvcm0iLCJzZXRab25lRm9ybSIsIm5hbWUiLCJjb3N0IiwiZWRpdGluZ05vdmVsIiwic2V0RWRpdGluZ05vdmVsIiwiZWRpdGluZ1pvbmUiLCJzZXRFZGl0aW5nWm9uZSIsInNob3dOb3ZlbEZvcm0iLCJzZXRTaG93Tm92ZWxGb3JtIiwic2hvd1pvbmVGb3JtIiwic2V0U2hvd1pvbmVGb3JtIiwiaW1wb3J0RGF0YSIsInNldEltcG9ydERhdGEiLCJzaG93SW1wb3J0TW9kYWwiLCJzZXRTaG93SW1wb3J0TW9kYWwiLCJhdmFpbGFibGVHZW5yZXMiLCJhdmFpbGFibGVDb3VudHJpZXMiLCJoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlIiwiZG9jdW1lbnQiLCJoaWRkZW4iLCJpc0F1dGhlbnRpY2F0ZWQiLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwidGltZXN0YW1wIiwidG9JU09TdHJpbmciLCJ3aW5kb3ciLCJkaXNwYXRjaEV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVMb2dpbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN1Y2Nlc3MiLCJ0eXBlIiwidGl0bGUiLCJtZXNzYWdlIiwic2VjdGlvbiIsImFjdGlvbiIsImhhbmRsZU5vdmVsU3VibWl0IiwidHJpbSIsImV4aXN0aW5nTm92ZWwiLCJub3ZlbHMiLCJmaW5kIiwibiIsImlkIiwidXBkYXRlZEF0IiwicmVzZXROb3ZlbEZvcm0iLCJoYW5kbGVab25lU3VibWl0IiwiZXhpc3Rpbmdab25lIiwiZGVsaXZlcnlab25lcyIsInoiLCJyZXNldFpvbmVGb3JtIiwic3RhcnRFZGl0aW5nTm92ZWwiLCJub3ZlbCIsInN0YXJ0RWRpdGluZ1pvbmUiLCJ6b25lIiwiaGFuZGxlUHJpY2VzVXBkYXRlIiwiaGFuZGxlRXhwb3J0IiwiY29uZmlnSnNvbiIsImJsb2IiLCJCbG9iIiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibGluayIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJzcGxpdCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJyZXZva2VPYmplY3RVUkwiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVJbXBvcnQiLCJoYW5kbGVGdWxsQmFja3VwRXhwb3J0IiwiZnVsbFN5c3RlbUNvbmZpZyIsInZlcnNpb24iLCJzeXN0ZW1Db25maWciLCJwcmljZXMiLCJzZXR0aW5ncyIsInN5bmNTdGF0dXMiLCJleHBvcnREYXRlIiwiZ2V0Q291bnRyeUZsYWciLCJjb3VudHJ5IiwiZmxhZ3MiLCJwcmV2IiwidGFyZ2V0IiwidmFsdWUiLCJsYXN0U3luYyIsInRvTG9jYWxlVGltZVN0cmluZyIsImxlbmd0aCIsIm5vdGlmaWNhdGlvbnMiLCJmaWx0ZXIiLCJyZWFkIiwiaXNPbmxpbmUiLCJsYWJlbCIsImljb24iLCJtYXAiLCJ0YWIiLCJnZW5yZSIsInBhcnNlSW50Iiwibm92ZWxQcmljZVBlckNoYXB0ZXIiLCJ0b0xvY2FsZVN0cmluZyIsImNvbmZpcm0iLCJtb3ZpZVByaWNlIiwic2VyaWVzUHJpY2UiLCJ0cmFuc2ZlckZlZVBlcmNlbnRhZ2UiLCJub3RpZmljYXRpb24iLCJwZW5kaW5nQ2hhbmdlcyIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFkbWluUGFuZWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgU2V0dGluZ3MsIERvbGxhclNpZ24sIE1hcFBpbiwgQm9va09wZW4sIEJlbGwsIERvd25sb2FkLCBVcGxvYWQsIFRyYXNoMiwgQ3JlZGl0Q2FyZCBhcyBFZGl0LCBQbHVzLCBTYXZlLCBYLCBFeWUsIEV5ZU9mZiwgTG9nT3V0LCBIb21lLCBNb25pdG9yLCBTbWFydHBob25lLCBHbG9iZSwgQ2FsZW5kYXIsIEltYWdlLCBDYW1lcmEsIENoZWNrLCBBbGVydENpcmNsZSwgSW5mbywgUmVmcmVzaEN3LCBEYXRhYmFzZSwgRm9sZGVyU3luYyBhcyBTeW5jLCBBY3Rpdml0eSwgVHJlbmRpbmdVcCwgVXNlcnMsIFNob3BwaW5nQ2FydCwgQ2xvY2ssIFphcCwgSGVhcnQsIFN0YXIsIFBhY2thZ2VPcGVuIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IHVzZUFkbWluIH0gZnJvbSAnLi4vY29udGV4dC9BZG1pbkNvbnRleHQnO1xuaW1wb3J0IHsgZ2VuZXJhdGVGdWxsQmFja3VwIH0gZnJvbSAnLi4vdXRpbHMvZnVsbEJhY2t1cEdlbmVyYXRvcic7XG5cbmludGVyZmFjZSBOb3ZlbEZvcm0ge1xuICB0aXR1bG86IHN0cmluZztcbiAgZ2VuZXJvOiBzdHJpbmc7XG4gIGNhcGl0dWxvczogbnVtYmVyO1xuICBhw7FvOiBudW1iZXI7XG4gIGRlc2NyaXBjaW9uOiBzdHJpbmc7XG4gIHBhaXM6IHN0cmluZztcbiAgaW1hZ2VuOiBzdHJpbmc7XG4gIGVzdGFkbzogJ3RyYW5zbWlzaW9uJyB8ICdmaW5hbGl6YWRhJztcbn1cblxuaW50ZXJmYWNlIERlbGl2ZXJ5Wm9uZUZvcm0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvc3Q6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFkbWluUGFuZWwoKSB7XG4gIGNvbnN0IHsgXG4gICAgc3RhdGUsIFxuICAgIGxvZ2luLCBcbiAgICBsb2dvdXQsIFxuICAgIGFkZE5vdmVsLCBcbiAgICB1cGRhdGVOb3ZlbCwgXG4gICAgZGVsZXRlTm92ZWwsXG4gICAgYWRkRGVsaXZlcnlab25lLFxuICAgIHVwZGF0ZURlbGl2ZXJ5Wm9uZSxcbiAgICBkZWxldGVEZWxpdmVyeVpvbmUsXG4gICAgdXBkYXRlUHJpY2VzLFxuICAgIGFkZE5vdGlmaWNhdGlvbixcbiAgICBtYXJrTm90aWZpY2F0aW9uUmVhZCxcbiAgICBjbGVhck5vdGlmaWNhdGlvbnMsXG4gICAgdXBkYXRlU3lzdGVtQ29uZmlnLFxuICAgIGV4cG9ydFN5c3RlbUNvbmZpZyxcbiAgICBpbXBvcnRTeXN0ZW1Db25maWcsXG4gICAgZ2V0QXZhaWxhYmxlQ291bnRyaWVzXG4gIH0gPSB1c2VBZG1pbigpO1xuXG4gIGNvbnN0IFtsb2dpbkZvcm0sIHNldExvZ2luRm9ybV0gPSB1c2VTdGF0ZSh7IHVzZXJuYW1lOiAnJywgcGFzc3dvcmQ6ICcnIH0pO1xuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGU8J25vdmVscycgfCAnem9uZXMnIHwgJ3ByaWNlcycgfCAnbm90aWZpY2F0aW9ucycgfCAnc3lzdGVtJz4oJ25vdmVscycpO1xuICBjb25zdCBbbm92ZWxGb3JtLCBzZXROb3ZlbEZvcm1dID0gdXNlU3RhdGU8Tm92ZWxGb3JtPih7XG4gICAgdGl0dWxvOiAnJyxcbiAgICBnZW5lcm86ICcnLFxuICAgIGNhcGl0dWxvczogMCxcbiAgICBhw7FvOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgZGVzY3JpcGNpb246ICcnLFxuICAgIHBhaXM6ICcnLFxuICAgIGltYWdlbjogJycsXG4gICAgZXN0YWRvOiAndHJhbnNtaXNpb24nXG4gIH0pO1xuICBjb25zdCBbem9uZUZvcm0sIHNldFpvbmVGb3JtXSA9IHVzZVN0YXRlPERlbGl2ZXJ5Wm9uZUZvcm0+KHsgbmFtZTogJycsIGNvc3Q6IDAgfSk7XG4gIGNvbnN0IFtlZGl0aW5nTm92ZWwsIHNldEVkaXRpbmdOb3ZlbF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2VkaXRpbmdab25lLCBzZXRFZGl0aW5nWm9uZV0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3Nob3dOb3ZlbEZvcm0sIHNldFNob3dOb3ZlbEZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd1pvbmVGb3JtLCBzZXRTaG93Wm9uZUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW1wb3J0RGF0YSwgc2V0SW1wb3J0RGF0YV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzaG93SW1wb3J0TW9kYWwsIHNldFNob3dJbXBvcnRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gR8OpbmVyb3MgZGlzcG9uaWJsZXMgcGFyYSBub3ZlbGFzXG4gIGNvbnN0IGF2YWlsYWJsZUdlbnJlcyA9IFtcbiAgICAnRHJhbWEnLFxuICAgICdSb21hbmNlJyxcbiAgICAnQWNjacOzbicsXG4gICAgJ0NvbWVkaWEnLFxuICAgICdGYW1pbGlhJyxcbiAgICAnVGhyaWxsZXInLFxuICAgICdNaXN0ZXJpbycsXG4gICAgJ0hpc3TDs3JpY28nLFxuICAgICdGYW50YXPDrWEnLFxuICAgICdDaWVuY2lhIEZpY2Npw7NuJ1xuICBdO1xuXG4gIC8vIFBhw61zZXMgZGlzcG9uaWJsZXMgKGFob3JhIGluY2x1eWUgQ3ViYSlcbiAgY29uc3QgYXZhaWxhYmxlQ291bnRyaWVzID0gZ2V0QXZhaWxhYmxlQ291bnRyaWVzKCk7XG5cbiAgLy8gUmVhbC10aW1lIHN5bmMgZWZmZWN0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmICghZG9jdW1lbnQuaGlkZGVuICYmIHN0YXRlLmlzQXV0aGVudGljYXRlZCkge1xuICAgICAgICAvLyBSZWZyZXNoIGRhdGEgd2hlbiB0YWIgYmVjb21lcyB2aXNpYmxlXG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdhZG1pbl9yZWZyZXNoX3JlcXVlc3QnLCB7XG4gICAgICAgICAgZGV0YWlsOiB7IHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xuICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XG4gIH0sIFtzdGF0ZS5pc0F1dGhlbnRpY2F0ZWRdKTtcblxuICBjb25zdCBoYW5kbGVMb2dpbiA9IChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc3VjY2VzcyA9IGxvZ2luKGxvZ2luRm9ybS51c2VybmFtZSwgbG9naW5Gb3JtLnBhc3N3b3JkKTtcbiAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgIGFkZE5vdGlmaWNhdGlvbih7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIHRpdGxlOiAnRXJyb3IgZGUgYXV0ZW50aWNhY2nDs24nLFxuICAgICAgICBtZXNzYWdlOiAnQ3JlZGVuY2lhbGVzIGluY29ycmVjdGFzJyxcbiAgICAgICAgc2VjdGlvbjogJ0F1dGVudGljYWNpw7NuJyxcbiAgICAgICAgYWN0aW9uOiAnbG9naW5fZXJyb3InXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTm92ZWxTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIGlmICghbm92ZWxGb3JtLnRpdHVsby50cmltKCkgfHwgIW5vdmVsRm9ybS5nZW5lcm8gfHwgIW5vdmVsRm9ybS5wYWlzIHx8IG5vdmVsRm9ybS5jYXBpdHVsb3MgPD0gMCkge1xuICAgICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgdGl0bGU6ICdDYW1wb3MgcmVxdWVyaWRvcycsXG4gICAgICAgIG1lc3NhZ2U6ICdQb3IgZmF2b3IgY29tcGxldGEgdG9kb3MgbG9zIGNhbXBvcyByZXF1ZXJpZG9zJyxcbiAgICAgICAgc2VjdGlvbjogJ0dlc3Rpw7NuIGRlIE5vdmVsYXMnLFxuICAgICAgICBhY3Rpb246ICd2YWxpZGF0aW9uX2Vycm9yJ1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVkaXRpbmdOb3ZlbCkge1xuICAgICAgY29uc3QgZXhpc3RpbmdOb3ZlbCA9IHN0YXRlLm5vdmVscy5maW5kKG4gPT4gbi5pZCA9PT0gZWRpdGluZ05vdmVsKTtcbiAgICAgIGlmIChleGlzdGluZ05vdmVsKSB7XG4gICAgICAgIHVwZGF0ZU5vdmVsKHtcbiAgICAgICAgICAuLi5leGlzdGluZ05vdmVsLFxuICAgICAgICAgIC4uLm5vdmVsRm9ybSxcbiAgICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHNldEVkaXRpbmdOb3ZlbChudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkTm92ZWwobm92ZWxGb3JtKTtcbiAgICB9XG4gICAgXG4gICAgcmVzZXROb3ZlbEZvcm0oKTtcbiAgICBzZXRTaG93Tm92ZWxGb3JtKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVab25lU3VibWl0ID0gKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICBpZiAoIXpvbmVGb3JtLm5hbWUudHJpbSgpIHx8IHpvbmVGb3JtLmNvc3QgPCAwKSB7XG4gICAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICB0aXRsZTogJ0NhbXBvcyBpbmNvcnJlY3RvcycsXG4gICAgICAgIG1lc3NhZ2U6ICdQb3IgZmF2b3IgY29tcGxldGEgdG9kb3MgbG9zIGNhbXBvcyBjb3JyZWN0YW1lbnRlJyxcbiAgICAgICAgc2VjdGlvbjogJ1pvbmFzIGRlIEVudHJlZ2EnLFxuICAgICAgICBhY3Rpb246ICd2YWxpZGF0aW9uX2Vycm9yJ1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVkaXRpbmdab25lKSB7XG4gICAgICBjb25zdCBleGlzdGluZ1pvbmUgPSBzdGF0ZS5kZWxpdmVyeVpvbmVzLmZpbmQoeiA9PiB6LmlkID09PSBlZGl0aW5nWm9uZSk7XG4gICAgICBpZiAoZXhpc3Rpbmdab25lKSB7XG4gICAgICAgIHVwZGF0ZURlbGl2ZXJ5Wm9uZSh7XG4gICAgICAgICAgLi4uZXhpc3Rpbmdab25lLFxuICAgICAgICAgIC4uLnpvbmVGb3JtLFxuICAgICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgc2V0RWRpdGluZ1pvbmUobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZERlbGl2ZXJ5Wm9uZSh6b25lRm9ybSk7XG4gICAgfVxuICAgIFxuICAgIHJlc2V0Wm9uZUZvcm0oKTtcbiAgICBzZXRTaG93Wm9uZUZvcm0oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0Tm92ZWxGb3JtID0gKCkgPT4ge1xuICAgIHNldE5vdmVsRm9ybSh7XG4gICAgICB0aXR1bG86ICcnLFxuICAgICAgZ2VuZXJvOiAnJyxcbiAgICAgIGNhcGl0dWxvczogMCxcbiAgICAgIGHDsW86IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgIGRlc2NyaXBjaW9uOiAnJyxcbiAgICAgIHBhaXM6ICcnLFxuICAgICAgaW1hZ2VuOiAnJyxcbiAgICAgIGVzdGFkbzogJ3RyYW5zbWlzaW9uJ1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0Wm9uZUZvcm0gPSAoKSA9PiB7XG4gICAgc2V0Wm9uZUZvcm0oeyBuYW1lOiAnJywgY29zdDogMCB9KTtcbiAgfTtcblxuICBjb25zdCBzdGFydEVkaXRpbmdOb3ZlbCA9IChub3ZlbDogYW55KSA9PiB7XG4gICAgc2V0Tm92ZWxGb3JtKHtcbiAgICAgIHRpdHVsbzogbm92ZWwudGl0dWxvLFxuICAgICAgZ2VuZXJvOiBub3ZlbC5nZW5lcm8sXG4gICAgICBjYXBpdHVsb3M6IG5vdmVsLmNhcGl0dWxvcyxcbiAgICAgIGHDsW86IG5vdmVsLmHDsW8sXG4gICAgICBkZXNjcmlwY2lvbjogbm92ZWwuZGVzY3JpcGNpb24gfHwgJycsXG4gICAgICBwYWlzOiBub3ZlbC5wYWlzIHx8ICcnLFxuICAgICAgaW1hZ2VuOiBub3ZlbC5pbWFnZW4gfHwgJycsXG4gICAgICBlc3RhZG86IG5vdmVsLmVzdGFkbyB8fCAndHJhbnNtaXNpb24nXG4gICAgfSk7XG4gICAgc2V0RWRpdGluZ05vdmVsKG5vdmVsLmlkKTtcbiAgICBzZXRTaG93Tm92ZWxGb3JtKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0RWRpdGluZ1pvbmUgPSAoem9uZTogYW55KSA9PiB7XG4gICAgc2V0Wm9uZUZvcm0oe1xuICAgICAgbmFtZTogem9uZS5uYW1lLFxuICAgICAgY29zdDogem9uZS5jb3N0XG4gICAgfSk7XG4gICAgc2V0RWRpdGluZ1pvbmUoem9uZS5pZCk7XG4gICAgc2V0U2hvd1pvbmVGb3JtKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVByaWNlc1VwZGF0ZSA9IChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgIHRpdGxlOiAnUHJlY2lvcyBhY3R1YWxpemFkb3MnLFxuICAgICAgbWVzc2FnZTogJ1ByZWNpb3MgYWN0dWFsaXphZG9zIGNvcnJlY3RhbWVudGUnLFxuICAgICAgc2VjdGlvbjogJ0NvbmZpZ3VyYWNpw7NuIGRlIFByZWNpb3MnLFxuICAgICAgYWN0aW9uOiAndXBkYXRlJ1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUV4cG9ydCA9ICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29uZmlnSnNvbiA9IGV4cG9ydFN5c3RlbUNvbmZpZygpO1xuICAgICAgaWYgKCFjb25maWdKc29uKSB7XG4gICAgICAgIGFkZE5vdGlmaWNhdGlvbih7XG4gICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICB0aXRsZTogJ0Vycm9yIGRlIGV4cG9ydGFjacOzbicsXG4gICAgICAgICAgbWVzc2FnZTogJ05vIHNlIHB1ZG8gZ2VuZXJhciBsYSBjb25maWd1cmFjacOzbiBwYXJhIGV4cG9ydGFyJyxcbiAgICAgICAgICBzZWN0aW9uOiAnU2lzdGVtYScsXG4gICAgICAgICAgYWN0aW9uOiAnZXhwb3J0X2Vycm9yJ1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2NvbmZpZ0pzb25dLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgbGluay5kb3dubG9hZCA9IGB0di1hLWxhLWNhcnRhLWNvbmZpZy0ke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdfS5qc29uYDtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICBsaW5rLmNsaWNrKCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuXG4gICAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgIHRpdGxlOiAnRXhwb3J0YWNpw7NuIGV4aXRvc2EnLFxuICAgICAgICBtZXNzYWdlOiAnQ29uZmlndXJhY2nDs24gZXhwb3J0YWRhIGNvcnJlY3RhbWVudGUnLFxuICAgICAgICBzZWN0aW9uOiAnU2lzdGVtYScsXG4gICAgICAgIGFjdGlvbjogJ2V4cG9ydF9zdWNjZXNzJ1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFsIGV4cG9ydGFyIGNvbmZpZ3VyYWNpw7NuOicsIGVycm9yKTtcbiAgICAgIGFkZE5vdGlmaWNhdGlvbih7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIHRpdGxlOiAnRXJyb3IgZGUgZXhwb3J0YWNpw7NuJyxcbiAgICAgICAgbWVzc2FnZTogJ0Vycm9yIGFsIGV4cG9ydGFyIGxhIGNvbmZpZ3VyYWNpw7NuIGRlbCBzaXN0ZW1hJyxcbiAgICAgICAgc2VjdGlvbjogJ1Npc3RlbWEnLFxuICAgICAgICBhY3Rpb246ICdleHBvcnRfZXJyb3InXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW1wb3J0ID0gKCkgPT4ge1xuICAgIGlmICghaW1wb3J0RGF0YS50cmltKCkpIHtcbiAgICAgIGFkZE5vdGlmaWNhdGlvbih7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIHRpdGxlOiAnRGF0b3MgZmFsdGFudGVzJyxcbiAgICAgICAgbWVzc2FnZTogJ1BvciBmYXZvciBwZWdhIGxhIGNvbmZpZ3VyYWNpw7NuIGEgaW1wb3J0YXInLFxuICAgICAgICBzZWN0aW9uOiAnU2lzdGVtYScsXG4gICAgICAgIGFjdGlvbjogJ2ltcG9ydF92YWxpZGF0aW9uX2Vycm9yJ1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3VjY2VzcyA9IGltcG9ydFN5c3RlbUNvbmZpZyhpbXBvcnREYXRhKTtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgc2V0SW1wb3J0RGF0YSgnJyk7XG4gICAgICBzZXRTaG93SW1wb3J0TW9kYWwoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVGdWxsQmFja3VwRXhwb3J0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgICB0eXBlOiAnaW5mbycsXG4gICAgICAgIHRpdGxlOiAnQmFja3VwIGVuIHByb2dyZXNvJyxcbiAgICAgICAgbWVzc2FnZTogJ0dlbmVyYW5kbyBiYWNrdXAgY29tcGxldG8gY29uIHRvZG9zIGxvcyBhcmNoaXZvcyBkZWwgc2lzdGVtYS4uLicsXG4gICAgICAgIHNlY3Rpb246ICdTaXN0ZW1hJyxcbiAgICAgICAgYWN0aW9uOiAnYmFja3VwX3N0YXJ0J1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZ1bGxTeXN0ZW1Db25maWcgPSB7XG4gICAgICAgIHZlcnNpb246IHN0YXRlLnN5c3RlbUNvbmZpZy52ZXJzaW9uLFxuICAgICAgICBwcmljZXM6IHN0YXRlLnByaWNlcyxcbiAgICAgICAgZGVsaXZlcnlab25lczogc3RhdGUuZGVsaXZlcnlab25lcyxcbiAgICAgICAgbm92ZWxzOiBzdGF0ZS5ub3ZlbHMsXG4gICAgICAgIHNldHRpbmdzOiBzdGF0ZS5zeXN0ZW1Db25maWcuc2V0dGluZ3MsXG4gICAgICAgIHN5bmNTdGF0dXM6IHN0YXRlLnN5bmNTdGF0dXMsXG4gICAgICAgIGV4cG9ydERhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIH07XG5cbiAgICAgIGF3YWl0IGdlbmVyYXRlRnVsbEJhY2t1cChmdWxsU3lzdGVtQ29uZmlnKTtcblxuICAgICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICB0aXRsZTogJ0JhY2t1cCBjb21wbGV0YWRvJyxcbiAgICAgICAgbWVzc2FnZTogJ0JhY2t1cCBjb21wbGV0byBnZW5lcmFkbyBleGl0b3NhbWVudGUgY29uIHRvZGEgbGEgY29uZmlndXJhY2nDs24gZW1iZWJpZGEnLFxuICAgICAgICBzZWN0aW9uOiAnU2lzdGVtYScsXG4gICAgICAgIGFjdGlvbjogJ2JhY2t1cF9zdWNjZXNzJ1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFsIGdlbmVyYXIgYmFja3VwIGNvbXBsZXRvOicsIGVycm9yKTtcbiAgICAgIGFkZE5vdGlmaWNhdGlvbih7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIHRpdGxlOiAnRXJyb3IgZW4gYmFja3VwJyxcbiAgICAgICAgbWVzc2FnZTogYEVycm9yIGFsIGdlbmVyYXIgZWwgYmFja3VwIGNvbXBsZXRvOiAke2Vycm9yfWAsXG4gICAgICAgIHNlY3Rpb246ICdTaXN0ZW1hJyxcbiAgICAgICAgYWN0aW9uOiAnYmFja3VwX2Vycm9yJ1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldENvdW50cnlGbGFnID0gKGNvdW50cnk6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGZsYWdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICAgICAgJ0N1YmEnOiAn8J+HqPCfh7onLFxuICAgICAgJ1R1cnF1w61hJzogJ/Cfh7nwn4e3JyxcbiAgICAgICdNw6l4aWNvJzogJ/Cfh7Lwn4e9JyxcbiAgICAgICdCcmFzaWwnOiAn8J+Hp/Cfh7cnLFxuICAgICAgJ0NvbG9tYmlhJzogJ/Cfh6jwn4e0JyxcbiAgICAgICdBcmdlbnRpbmEnOiAn8J+HpvCfh7cnLFxuICAgICAgJ0VzcGHDsWEnOiAn8J+HqvCfh7gnLFxuICAgICAgJ0VzdGFkb3MgVW5pZG9zJzogJ/Cfh7rwn4e4JyxcbiAgICAgICdDb3JlYSBkZWwgU3VyJzogJ/Cfh7Dwn4e3JyxcbiAgICAgICdJbmRpYSc6ICfwn4eu8J+HsycsXG4gICAgICAnUmVpbm8gVW5pZG8nOiAn8J+HrPCfh6cnLFxuICAgICAgJ0ZyYW5jaWEnOiAn8J+Hq/Cfh7cnLFxuICAgICAgJ0l0YWxpYSc6ICfwn4eu8J+HuScsXG4gICAgICAnQWxlbWFuaWEnOiAn8J+HqfCfh6onLFxuICAgICAgJ0phcMOzbic6ICfwn4ev8J+HtScsXG4gICAgICAnQ2hpbmEnOiAn8J+HqPCfh7MnLFxuICAgICAgJ1J1c2lhJzogJ/Cfh7fwn4e6J1xuICAgIH07XG4gICAgcmV0dXJuIGZsYWdzW2NvdW50cnldIHx8ICfwn4yNJztcbiAgfTtcblxuICBpZiAoIXN0YXRlLmlzQXV0aGVudGljYXRlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmFkaWVudC10by1iciBmcm9tLWJsdWUtOTAwIHZpYS1wdXJwbGUtOTAwIHRvLXBpbmstOTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy0yeGwgcC04IHctZnVsbCBtYXgtdy1tZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS01MDAgdG8tcHVycGxlLTUwMCBwLTQgcm91bmRlZC1mdWxsIHctZml0IG14LWF1dG8gbWItNFwiPlxuICAgICAgICAgICAgICA8U2V0dGluZ3MgY2xhc3NOYW1lPVwiaC04IHctOCB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTJcIj5QYW5lbCBkZSBBZG1pbmlzdHJhY2nDs248L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPlRWIGEgbGEgQ2FydGE8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUxvZ2lufSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgbWItMlwiPlxuICAgICAgICAgICAgICAgIFVzdWFyaW9cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtsb2dpbkZvcm0udXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMb2dpbkZvcm0ocHJldiA9PiAoeyAuLi5wcmV2LCB1c2VybmFtZTogZS50YXJnZXQudmFsdWUgfSkpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTMgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMFwiXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgbWItMlwiPlxuICAgICAgICAgICAgICAgIENvbnRyYXNlw7FhXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2xvZ2luRm9ybS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExvZ2luRm9ybShwcmV2ID0+ICh7IC4uLnByZXYsIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwXCJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTUwMCB0by1wdXJwbGUtNTAwIGhvdmVyOmZyb20tYmx1ZS02MDAgaG92ZXI6dG8tcHVycGxlLTYwMCB0ZXh0LXdoaXRlIHB4LTYgcHktMyByb3VuZGVkLWxnIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgSW5pY2lhciBTZXNpw7NuXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz1cIi9cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIGhvdmVyOnRleHQtYmx1ZS04MDAgdGV4dC1zbSBmb250LW1lZGl1bVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIOKGkCBWb2x2ZXIgYWwgaW5pY2lvXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS01MFwiPlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNjAwIHRvLXB1cnBsZS02MDAgdGV4dC13aGl0ZSBwLTYgc2hhZG93LWxnXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZS8yMCBwLTMgcm91bmRlZC14bCBtci00XCI+XG4gICAgICAgICAgICAgIDxTZXR0aW5ncyBjbGFzc05hbWU9XCJoLTggdy04XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPlBhbmVsIGRlIEFkbWluaXN0cmFjacOzbjwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmx1ZS0xMDBcIj5UViBhIGxhIENhcnRhIC0gU2lzdGVtYSBkZSBHZXN0acOzbjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBvcGFjaXR5LTkwXCI+VmVyc2nDs24ge3N0YXRlLnN5c3RlbUNvbmZpZy52ZXJzaW9ufTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBvcGFjaXR5LTc1XCI+XG4gICAgICAgICAgICAgICAgw5psdGltYSBzaW5jcm9uaXphY2nDs246IHtuZXcgRGF0ZShzdGF0ZS5zeW5jU3RhdHVzLmxhc3RTeW5jKS50b0xvY2FsZVRpbWVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz1cIi9cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZS8yMCBob3ZlcjpiZy13aGl0ZS8zMCBweC00IHB5LTIgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxIb21lIGNsYXNzTmFtZT1cImgtNCB3LTQgbXItMlwiIC8+XG4gICAgICAgICAgICAgIElyIGFsIHNpdGlvXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ291dH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNjAwIHB4LTQgcHktMiByb3VuZGVkLWxnIHRyYW5zaXRpb24tY29sb3JzIGZsZXggaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExvZ091dCBjbGFzc05hbWU9XCJoLTQgdy00IG1yLTJcIiAvPlxuICAgICAgICAgICAgICBDZXJyYXIgU2VzacOzblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcC02XCI+XG4gICAgICAgIHsvKiBTdGF0cyBEYXNoYm9hcmQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNiBtYi04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iciBmcm9tLWJsdWUtNTAgdG8tYmx1ZS0xMDAgcm91bmRlZC14bCBwLTYgYm9yZGVyIGJvcmRlci1ibHVlLTIwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIHRleHQtc20gZm9udC1tZWRpdW1cIj5Ob3ZlbGFzIFRvdGFsZXM8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtYmx1ZS04MDBcIj57c3RhdGUubm92ZWxzLmxlbmd0aH08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Qm9va09wZW4gY2xhc3NOYW1lPVwiaC04IHctOCB0ZXh0LWJsdWUtNTAwXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi01MCB0by1ncmVlbi0xMDAgcm91bmRlZC14bCBwLTYgYm9yZGVyIGJvcmRlci1ncmVlbi0yMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi02MDAgdGV4dC1zbSBmb250LW1lZGl1bVwiPlpvbmFzIGRlIEVudHJlZ2E8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JlZW4tODAwXCI+e3N0YXRlLmRlbGl2ZXJ5Wm9uZXMubGVuZ3RofTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxNYXBQaW4gY2xhc3NOYW1lPVwiaC04IHctOCB0ZXh0LWdyZWVuLTUwMFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLWJyIGZyb20tcHVycGxlLTUwIHRvLXB1cnBsZS0xMDAgcm91bmRlZC14bCBwLTYgYm9yZGVyIGJvcmRlci1wdXJwbGUtMjAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHVycGxlLTYwMCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+Tm90aWZpY2FjaW9uZXM8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtcHVycGxlLTgwMFwiPlxuICAgICAgICAgICAgICAgICAge3N0YXRlLm5vdGlmaWNhdGlvbnMuZmlsdGVyKG4gPT4gIW4ucmVhZCkubGVuZ3RofVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxCZWxsIGNsYXNzTmFtZT1cImgtOCB3LTggdGV4dC1wdXJwbGUtNTAwXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1vcmFuZ2UtNTAgdG8tb3JhbmdlLTEwMCByb3VuZGVkLXhsIHAtNiBib3JkZXIgYm9yZGVyLW9yYW5nZS0yMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNjAwIHRleHQtc20gZm9udC1tZWRpdW1cIj5Fc3RhZG8gZGVsIFNpc3RlbWE8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1vcmFuZ2UtODAwXCI+XG4gICAgICAgICAgICAgICAgICB7c3RhdGUuc3luY1N0YXR1cy5pc09ubGluZSA/ICfwn5+iIEVuIEzDrW5lYScgOiAn8J+UtCBEZXNjb25lY3RhZG8nfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxBY3Rpdml0eSBjbGFzc05hbWU9XCJoLTggdy04IHRleHQtb3JhbmdlLTUwMFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIE5hdmlnYXRpb24gVGFicyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1zbSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIG1iLThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgeyBpZDogJ25vdmVscycsIGxhYmVsOiAnR2VzdGnDs24gZGUgTm92ZWxhcycsIGljb246IEJvb2tPcGVuIH0sXG4gICAgICAgICAgICAgIHsgaWQ6ICd6b25lcycsIGxhYmVsOiAnWm9uYXMgZGUgRW50cmVnYScsIGljb246IE1hcFBpbiB9LFxuICAgICAgICAgICAgICB7IGlkOiAncHJpY2VzJywgbGFiZWw6ICdDb25maWd1cmFjacOzbiBkZSBQcmVjaW9zJywgaWNvbjogRG9sbGFyU2lnbiB9LFxuICAgICAgICAgICAgICB7IGlkOiAnbm90aWZpY2F0aW9ucycsIGxhYmVsOiAnTm90aWZpY2FjaW9uZXMnLCBpY29uOiBCZWxsIH0sXG4gICAgICAgICAgICAgIHsgaWQ6ICdzeXN0ZW0nLCBsYWJlbDogJ1Npc3RlbWEnLCBpY29uOiBTZXR0aW5ncyB9XG4gICAgICAgICAgICBdLm1hcCh0YWIgPT4gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXt0YWIuaWR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKHRhYi5pZCBhcyBhbnkpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHB4LTYgcHktNCBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9ycyAke1xuICAgICAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSB0YWIuaWRcbiAgICAgICAgICAgICAgICAgICAgPyAndGV4dC1ibHVlLTYwMCBib3JkZXItYi0yIGJvcmRlci1ibHVlLTYwMCBiZy1ibHVlLTUwJ1xuICAgICAgICAgICAgICAgICAgICA6ICd0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtYmx1ZS02MDAgaG92ZXI6YmctZ3JheS01MCdcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0YWIuaWNvbiBjbGFzc05hbWU9XCJoLTUgdy01IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBzbTppbmxpbmVcIj57dGFiLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIE5vdmVscyBNYW5hZ2VtZW50ICovfVxuICAgICAgICB7YWN0aXZlVGFiID09PSAnbm92ZWxzJyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3ctc20gYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBwLTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNlwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8Qm9va09wZW4gY2xhc3NOYW1lPVwiaC02IHctNiBtci0yIHRleHQtcHVycGxlLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgICBHZXN0acOzbiBkZSBOb3ZlbGFzXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc2V0Tm92ZWxGb3JtKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldEVkaXRpbmdOb3ZlbChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd05vdmVsRm9ybSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1wdXJwbGUtNjAwIGhvdmVyOmJnLXB1cnBsZS03MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1sZyBmbGV4IGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFBsdXMgY2xhc3NOYW1lPVwiaC00IHctNCBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgIEFncmVnYXIgTm92ZWxhXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBOb3ZlbCBGb3JtICovfVxuICAgICAgICAgICAgICB7c2hvd05vdmVsRm9ybSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIHJvdW5kZWQteGwgcC02IG1iLTYgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAge2VkaXRpbmdOb3ZlbCA/ICdFZGl0YXIgTm92ZWxhJyA6ICdBZ3JlZ2FyIE51ZXZhIE5vdmVsYSd9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTm92ZWxTdWJtaXR9IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFTDrXR1bG8gKlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm92ZWxGb3JtLnRpdHVsb31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm92ZWxGb3JtKHByZXYgPT4gKHsgLi4ucHJldiwgdGl0dWxvOiBlLnRhcmdldC52YWx1ZSB9KSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHVycGxlLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEfDqW5lcm8gKlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vdmVsRm9ybS5nZW5lcm99XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5vdmVsRm9ybShwcmV2ID0+ICh7IC4uLnByZXYsIGdlbmVybzogZS50YXJnZXQudmFsdWUgfSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXB1cnBsZS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWNjaW9uYXIgZ8OpbmVybzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge2F2YWlsYWJsZUdlbnJlcy5tYXAoZ2VucmUgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Z2VucmV9IHZhbHVlPXtnZW5yZX0+e2dlbnJlfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhcMOtdHVsb3MgKlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3ZlbEZvcm0uY2FwaXR1bG9zfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROb3ZlbEZvcm0ocHJldiA9PiAoeyAuLi5wcmV2LCBjYXBpdHVsb3M6IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSB8fCAwIH0pKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wdXJwbGUtNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBw7FvICpcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm92ZWxGb3JtLmHDsW99XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5vdmVsRm9ybShwcmV2ID0+ICh7IC4uLnByZXYsIGHDsW86IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSB8fCBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgfSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXB1cnBsZS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMTkwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9e25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArIDV9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBhw61zICpcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3ZlbEZvcm0ucGFpc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm92ZWxGb3JtKHByZXYgPT4gKHsgLi4ucHJldiwgcGFpczogZS50YXJnZXQudmFsdWUgfSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXB1cnBsZS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWNjaW9uYXIgcGHDrXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthdmFpbGFibGVDb3VudHJpZXMubWFwKGNvdW50cnkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Y291bnRyeX0gdmFsdWU9e2NvdW50cnl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRDb3VudHJ5RmxhZyhjb3VudHJ5KX0ge2NvdW50cnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVzdGFkbyAqXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm92ZWxGb3JtLmVzdGFkb31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm92ZWxGb3JtKHByZXYgPT4gKHsgLi4ucHJldiwgZXN0YWRvOiBlLnRhcmdldC52YWx1ZSBhcyAndHJhbnNtaXNpb24nIHwgJ2ZpbmFsaXphZGEnIH0pKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wdXJwbGUtNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRyYW5zbWlzaW9uXCI+8J+ToSBFbiBUcmFuc21pc2nDs248L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmaW5hbGl6YWRhXCI+4pyFIEZpbmFsaXphZGE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFVSTCBkZSBJbWFnZW5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInVybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm92ZWxGb3JtLmltYWdlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm92ZWxGb3JtKHByZXYgPT4gKHsgLi4ucHJldiwgaW1hZ2VuOiBlLnRhcmdldC52YWx1ZSB9KSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHVycGxlLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHBzOi8vZWplbXBsby5jb20vaW1hZ2VuLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXBjacOzblxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm92ZWxGb3JtLmRlc2NyaXBjaW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROb3ZlbEZvcm0ocHJldiA9PiAoeyAuLi5wcmV2LCBkZXNjcmlwY2lvbjogZS50YXJnZXQudmFsdWUgfSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXB1cnBsZS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17M31cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcGNpw7NuIGRlIGxhIG5vdmVsYS4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTIgZmxleCBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXB1cnBsZS02MDAgaG92ZXI6YmctcHVycGxlLTcwMCB0ZXh0LXdoaXRlIHB4LTYgcHktMiByb3VuZGVkLWxnIGZsZXggaXRlbXMtY2VudGVyIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2F2ZSBjbGFzc05hbWU9XCJoLTQgdy00IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2VkaXRpbmdOb3ZlbCA/ICdBY3R1YWxpemFyJyA6ICdBZ3JlZ2FyJ30gTm92ZWxhXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dOb3ZlbEZvcm0oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0aW5nTm92ZWwobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Tm92ZWxGb3JtKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MDAgaG92ZXI6YmctZ3JheS02MDAgdGV4dC13aGl0ZSBweC02IHB5LTIgcm91bmRlZC1sZyBmbGV4IGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwiaC00IHctNCBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbGFyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIHsvKiBOb3ZlbHMgTGlzdCAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICB7c3RhdGUubm92ZWxzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMTIgYmctZ3JheS01MCByb3VuZGVkLXhsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCb29rT3BlbiBjbGFzc05hbWU9XCJoLTEyIHctMTIgdGV4dC1ncmF5LTQwMCBteC1hdXRvIG1iLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgbWItMlwiPk5vIGhheSBub3ZlbGFzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPkFncmVnYSBsYSBwcmltZXJhIG5vdmVsYSBhbCBjYXTDoWxvZ288L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgc3RhdGUubm92ZWxzLm1hcCgobm92ZWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e25vdmVsLmlkfSBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIHJvdW5kZWQteGwgcC02IGJvcmRlciBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBtci0zXCI+e25vdmVsLnRpdHVsb308L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHB4LTIgcHktMSByb3VuZGVkLWZ1bGwgdGV4dC14cyBmb250LWJvbGQgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdmVsLmVzdGFkbyA9PT0gJ3RyYW5zbWlzaW9uJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctcmVkLTEwMCB0ZXh0LXJlZC03MDAnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi03MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vdmVsLmVzdGFkbyA9PT0gJ3RyYW5zbWlzaW9uJyA/ICfwn5OhIEVuIFRyYW5zbWlzacOzbicgOiAn4pyFIEZpbmFsaXphZGEnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNCB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5Hw6luZXJvOjwvc3Bhbj4ge25vdmVsLmdlbmVyb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5DYXDDrXR1bG9zOjwvc3Bhbj4ge25vdmVsLmNhcGl0dWxvc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5Bw7FvOjwvc3Bhbj4ge25vdmVsLmHDsW99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+UGHDrXM6PC9zcGFuPiB7Z2V0Q291bnRyeUZsYWcobm92ZWwucGFpcyB8fCAnTm8gZXNwZWNpZmljYWRvJyl9IHtub3ZlbC5wYWlzIHx8ICdObyBlc3BlY2lmaWNhZG8nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge25vdmVsLmRlc2NyaXBjaW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIG10LTIgdGV4dC1zbVwiPntub3ZlbC5kZXNjcmlwY2lvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ncmVlbi02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByZWNpbzogJHsobm92ZWwuY2FwaXR1bG9zICogc3RhdGUucHJpY2VzLm5vdmVsUHJpY2VQZXJDaGFwdGVyKS50b0xvY2FsZVN0cmluZygpfSBDVVBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBtbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoJHtzdGF0ZS5wcmljZXMubm92ZWxQcmljZVBlckNoYXB0ZXJ9IENVUCDDlyB7bm92ZWwuY2FwaXR1bG9zfSBjYXAuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgbWwtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3RhcnRFZGl0aW5nTm92ZWwobm92ZWwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgcC0yIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oYMK/RXN0w6FzIHNlZ3VybyBkZSBlbGltaW5hciBcIiR7bm92ZWwudGl0dWxvfVwiP2ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZU5vdmVsKG5vdmVsLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTYwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkLWxnIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaDIgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBEZWxpdmVyeSBab25lcyBNYW5hZ2VtZW50ICovfVxuICAgICAgICB7YWN0aXZlVGFiID09PSAnem9uZXMnICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1zbSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHAtNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi02XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDAgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxNYXBQaW4gY2xhc3NOYW1lPVwiaC02IHctNiBtci0yIHRleHQtZ3JlZW4tNjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgIFpvbmFzIGRlIEVudHJlZ2FcbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRab25lRm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICBzZXRFZGl0aW5nWm9uZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1pvbmVGb3JtKHRydWUpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTYwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1sZyBmbGV4IGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFBsdXMgY2xhc3NOYW1lPVwiaC00IHctNCBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgIEFncmVnYXIgWm9uYVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogWm9uZSBGb3JtICovfVxuICAgICAgICAgICAgICB7c2hvd1pvbmVGb3JtICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktNTAgcm91bmRlZC14bCBwLTYgbWItNiBib3JkZXIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICB7ZWRpdGluZ1pvbmUgPyAnRWRpdGFyIFpvbmEnIDogJ0FncmVnYXIgTnVldmEgWm9uYSd9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlWm9uZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTm9tYnJlIGRlIGxhIFpvbmEgKlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17em9uZUZvcm0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Wm9uZUZvcm0ocHJldiA9PiAoeyAuLi5wcmV2LCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctZ3JlZW4tNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRWo6IENlbnRybyBkZSBsYSBDaXVkYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb3N0byBkZSBFbnRyZWdhIChDVVApICpcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17em9uZUZvcm0uY29zdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Wm9uZUZvcm0ocHJldiA9PiAoeyAuLi5wcmV2LCBjb3N0OiBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgfHwgMCB9KSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctZ3JlZW4tNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMiBmbGV4IHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNjAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIHB4LTYgcHktMiByb3VuZGVkLWxnIGZsZXggaXRlbXMtY2VudGVyIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2F2ZSBjbGFzc05hbWU9XCJoLTQgdy00IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2VkaXRpbmdab25lID8gJ0FjdHVhbGl6YXInIDogJ0FncmVnYXInfSBab25hXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dab25lRm9ybShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXRpbmdab25lKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldFpvbmVGb3JtKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MDAgaG92ZXI6YmctZ3JheS02MDAgdGV4dC13aGl0ZSBweC02IHB5LTIgcm91bmRlZC1sZyBmbGV4IGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwiaC00IHctNCBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbGFyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIHsvKiBab25lcyBMaXN0ICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgIHtzdGF0ZS5kZWxpdmVyeVpvbmVzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMTIgYmctZ3JheS01MCByb3VuZGVkLXhsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxNYXBQaW4gY2xhc3NOYW1lPVwiaC0xMiB3LTEyIHRleHQtZ3JheS00MDAgbXgtYXV0byBtYi00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTJcIj5ObyBoYXkgem9uYXMgZGUgZW50cmVnYTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5BZ3JlZ2EgbGEgcHJpbWVyYSB6b25hIGRlIGVudHJlZ2E8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgc3RhdGUuZGVsaXZlcnlab25lcy5tYXAoKHpvbmUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3pvbmUuaWR9IGNsYXNzTmFtZT1cImJnLWdyYXktNTAgcm91bmRlZC14bCBwLTYgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPnt6b25lLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi02MDAgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvc3RvOiAke3pvbmUuY29zdC50b0xvY2FsZVN0cmluZygpfSBDVVBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdGFydEVkaXRpbmdab25lKHpvbmUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgcC0yIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oYMK/RXN0w6FzIHNlZ3VybyBkZSBlbGltaW5hciBsYSB6b25hIFwiJHt6b25lLm5hbWV9XCI/YCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlRGVsaXZlcnlab25lKHpvbmUuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNjAwIHRleHQtd2hpdGUgcC0yIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoMiBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFByaWNlcyBDb25maWd1cmF0aW9uICovfVxuICAgICAgICB7YWN0aXZlVGFiID09PSAncHJpY2VzJyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1zbSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHAtNlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDAgbWItNiBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8RG9sbGFyU2lnbiBjbGFzc05hbWU9XCJoLTYgdy02IG1yLTIgdGV4dC1ncmVlbi02MDBcIiAvPlxuICAgICAgICAgICAgICBDb25maWd1cmFjacOzbiBkZSBQcmVjaW9zXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlUHJpY2VzVXBkYXRlfSBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC02XCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICBQcmVjaW8gZGUgUGVsw61jdWxhcyAoQ1VQKVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5wcmljZXMubW92aWVQcmljZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlUHJpY2VzKHsgLi4uc3RhdGUucHJpY2VzLCBtb3ZpZVByaWNlOiBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgfHwgMCB9KX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmVlbi01MDBcIlxuICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgUHJlY2lvIGRlIFNlcmllcyBwb3IgVGVtcG9yYWRhIChDVVApXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnByaWNlcy5zZXJpZXNQcmljZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlUHJpY2VzKHsgLi4uc3RhdGUucHJpY2VzLCBzZXJpZXNQcmljZTogcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIHx8IDAgfSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctZ3JlZW4tNTAwXCJcbiAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIFByZWNpbyBkZSBOb3ZlbGFzIHBvciBDYXDDrXR1bG8gKENVUClcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUucHJpY2VzLm5vdmVsUHJpY2VQZXJDaGFwdGVyfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVQcmljZXMoeyAuLi5zdGF0ZS5wcmljZXMsIG5vdmVsUHJpY2VQZXJDaGFwdGVyOiBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgfHwgMCB9KX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmVlbi01MDBcIlxuICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgUmVjYXJnbyBwb3IgVHJhbnNmZXJlbmNpYSAoJSlcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUucHJpY2VzLnRyYW5zZmVyRmVlUGVyY2VudGFnZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlUHJpY2VzKHsgLi4uc3RhdGUucHJpY2VzLCB0cmFuc2ZlckZlZVBlcmNlbnRhZ2U6IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSB8fCAwIH0pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyZWVuLTUwMFwiXG4gICAgICAgICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgICAgICAgIG1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIE5vdGlmaWNhdGlvbnMgKi99XG4gICAgICAgIHthY3RpdmVUYWIgPT09ICdub3RpZmljYXRpb25zJyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1zbSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHAtNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNlwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxCZWxsIGNsYXNzTmFtZT1cImgtNiB3LTYgbXItMiB0ZXh0LXllbGxvdy02MDBcIiAvPlxuICAgICAgICAgICAgICAgIE5vdGlmaWNhY2lvbmVzICh7c3RhdGUubm90aWZpY2F0aW9ucy5maWx0ZXIobiA9PiAhbi5yZWFkKS5sZW5ndGh9IHNpbiBsZWVyKVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2xlYXJOb3RpZmljYXRpb25zfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTYwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLWxnIGZsZXggaXRlbXMtY2VudGVyIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUcmFzaDIgY2xhc3NOYW1lPVwiaC00IHctNCBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICBMaW1waWFyIFRvZG9cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgbWF4LWgtOTYgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgICAgIHtzdGF0ZS5ub3RpZmljYXRpb25zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTEyIGJnLWdyYXktNTAgcm91bmRlZC14bFwiPlxuICAgICAgICAgICAgICAgICAgPEJlbGwgY2xhc3NOYW1lPVwiaC0xMiB3LTEyIHRleHQtZ3JheS00MDAgbXgtYXV0byBtYi00XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCBtYi0yXCI+Tm8gaGF5IG5vdGlmaWNhY2lvbmVzPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5MYXMgbm90aWZpY2FjaW9uZXMgZGVsIHNpc3RlbWEgYXBhcmVjZXLDoW4gYXF1w608L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgc3RhdGUubm90aWZpY2F0aW9ucy5tYXAoKG5vdGlmaWNhdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBrZXk9e25vdGlmaWNhdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC00IHJvdW5kZWQteGwgYm9yZGVyLWwtNCAke1xuICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5yZWFkID8gJ2JnLWdyYXktNTAgYm9yZGVyLWdyYXktMzAwJyA6ICdiZy1ibHVlLTUwIGJvcmRlci1ibHVlLTUwMCdcbiAgICAgICAgICAgICAgICAgICAgfSAke1xuICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi50eXBlID09PSAnc3VjY2VzcycgPyAnYm9yZGVyLWdyZWVuLTUwMCBiZy1ncmVlbi01MCcgOlxuICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi50eXBlID09PSAnZXJyb3InID8gJ2JvcmRlci1yZWQtNTAwIGJnLXJlZC01MCcgOlxuICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi50eXBlID09PSAnd2FybmluZycgPyAnYm9yZGVyLXllbGxvdy01MDAgYmcteWVsbG93LTUwJyA6XG4gICAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci1ibHVlLTUwMCBiZy1ibHVlLTUwJ1xuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIGZvbnQtbWVkaXVtXCI+e25vdGlmaWNhdGlvbi5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC1zbSBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb24udGltZXN0YW1wLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgeyFub3RpZmljYXRpb24ucmVhZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1hcmtOb3RpZmljYXRpb25SZWFkKG5vdGlmaWNhdGlvbi5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgaG92ZXI6dGV4dC1ibHVlLTgwMCBtbC00XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFN5c3RlbSBDb25maWd1cmF0aW9uICovfVxuICAgICAgICB7YWN0aXZlVGFiID09PSAnc3lzdGVtJyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3ctc20gYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBwLTZcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDAgbWItNiBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxTZXR0aW5ncyBjbGFzc05hbWU9XCJoLTYgdy02IG1yLTIgdGV4dC1ibHVlLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgQ29uZmlndXJhY2nDs24gZGVsIFNpc3RlbWFcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5JbmZvcm1hY2nDs24gZGVsIFNpc3RlbWE8L2gzPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIHJvdW5kZWQtbGcgcC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPlZlcnNpw7NuOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzdGF0ZS5zeXN0ZW1Db25maWcudmVyc2lvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5Fc3RhZG86PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdGF0ZS5zeW5jU3RhdHVzLmlzT25saW5lID8gJ3RleHQtZ3JlZW4tNjAwJyA6ICd0ZXh0LXJlZC02MDAnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnN5bmNTdGF0dXMuaXNPbmxpbmUgPyAn8J+foiBFbiBMw61uZWEnIDogJ/CflLQgRGVzY29uZWN0YWRvJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPsOabHRpbWEgU2luY3Jvbml6YWNpw7NuOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntuZXcgRGF0ZShzdGF0ZS5zeW5jU3RhdHVzLmxhc3RTeW5jKS50b0xvY2FsZVN0cmluZygpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPkNhbWJpb3MgUGVuZGllbnRlczo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0YXRlLnN5bmNTdGF0dXMucGVuZGluZ0NoYW5nZXMgPiAwID8gJ3RleHQtb3JhbmdlLTYwMCcgOiAndGV4dC1ncmVlbi02MDAnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnN5bmNTdGF0dXMucGVuZGluZ0NoYW5nZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPkFjY2lvbmVzIGRlbCBTaXN0ZW1hPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVFeHBvcnR9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgcHgtNCBweS0zIHJvdW5kZWQtbGcgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPERvd25sb2FkIGNsYXNzTmFtZT1cImgtNCB3LTQgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgRXhwb3J0YXIgQ29uZmlndXJhY2nDs25cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dJbXBvcnRNb2RhbCh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JlZW4tNjAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMyByb3VuZGVkLWxnIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxVcGxvYWQgY2xhc3NOYW1lPVwiaC00IHctNCBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICBJbXBvcnRhciBDb25maWd1cmFjacOzblxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRnVsbEJhY2t1cEV4cG9ydH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctcHVycGxlLTYwMCBob3ZlcjpiZy1wdXJwbGUtNzAwIHRleHQtd2hpdGUgcHgtNCBweS0zIHJvdW5kZWQtbGcgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbi1jb2xvcnMgc2hhZG93LWxnXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxQYWNrYWdlT3BlbiBjbGFzc05hbWU9XCJoLTQgdy00IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIEV4cG9ydGFyIEJhY2t1cCBGdWxsXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYW1iZXItNTAgYm9yZGVyIGJvcmRlci1hbWJlci0yMDAgcm91bmRlZC1sZyBwLTMgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1hbWJlci04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZvIGNsYXNzTmFtZT1cImgtMyB3LTMgaW5saW5lIG1yLTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgRWwgQmFja3VwIEZ1bGwgaW5jbHV5ZSB0b2RvcyBsb3MgYXJjaGl2b3MgZGVsIHNpc3RlbWEgY29uIGxhIGNvbmZpZ3VyYWNpw7NuIGFwbGljYWRhXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBJbXBvcnQgTW9kYWwgKi99XG4gICAgICAgIHtzaG93SW1wb3J0TW9kYWwgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjay81MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgei01MFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCB3LWZ1bGwgbWF4LXctMnhsIHAtNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi02XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj5JbXBvcnRhciBDb25maWd1cmFjacOzbjwvaDM+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0ltcG9ydE1vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIENvbmZpZ3VyYWNpw7NuIEpTT05cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ltcG9ydERhdGF9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW1wb3J0RGF0YShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCBoLTY0XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQZWdhIGFxdcOtIGxhIGNvbmZpZ3VyYWNpw7NuIEpTT04gZXhwb3J0YWRhLi4uXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJbXBvcnR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTYwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBweC02IHB5LTIgcm91bmRlZC1sZyBmbGV4IGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxVcGxvYWQgY2xhc3NOYW1lPVwiaC00IHctNCBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgSW1wb3J0YXJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0ltcG9ydE1vZGFsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRJbXBvcnREYXRhKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MDAgaG92ZXI6YmctZ3JheS02MDAgdGV4dC13aGl0ZSBweC02IHB5LTIgcm91bmRlZC1sZyBmbGV4IGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cImgtNCB3LTQgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIENhbmNlbGFyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJmaWxlIjoiL2hvbWUvcHJvamVjdC9zcmMvcGFnZXMvQWRtaW5QYW5lbC50c3gifQ==