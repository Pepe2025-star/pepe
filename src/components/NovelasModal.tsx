import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/NovelasModal.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=8e80e8f2"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/project/src/components/NovelasModal.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=8e80e8f2"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { X, BookOpen, Calculator, Search, Filter, FileText, ShoppingCart } from "/node_modules/lucide-react/dist/esm/lucide-react.js?v=8e80e8f2";
import { useCart } from "/src/context/CartContext.tsx";
import { NetflixNovelSection } from "/src/components/NetflixNovelSection.tsx";
export function NovelasModal({ isOpen, onClose, onFinalizePedido }) {
  _s();
  const { getCurrentPrices, addNovel } = useCart();
  const [selectedNovelas, setSelectedNovelas] = useState([]);
  const [novelasWithPayment, setNovelasWithPayment] = useState([]);
  const [showNovelList, setShowNovelList] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [sortBy, setSortBy] = useState("titulo");
  const [sortOrder, setSortOrder] = useState("asc");
  const [adminNovels, setAdminNovels] = useState([]);
  const currentPrices = getCurrentPrices();
  const novelPricePerChapter = currentPrices.novelPricePerChapter;
  const transferFeePercentage = currentPrices.transferFeePercentage;
  const phoneNumber = "+5354690878";
  useEffect(() => {
    const loadNovels = () => {
      try {
        const adminConfig = localStorage.getItem("system_config");
        if (adminConfig) {
          const config = JSON.parse(adminConfig);
          if (config.novels) {
            setAdminNovels(config.novels);
          }
        }
      } catch (error) {
        console.error("Error loading novels:", error);
      }
    };
    loadNovels();
    const handleAdminStateChange = (event) => {
      if (event.detail.type === "novel_add" || event.detail.type === "novel_update" || event.detail.type === "novel_delete") {
        loadNovels();
      }
    };
    const handleAdminFullSync = (event) => {
      if (event.detail.config?.novels) {
        setAdminNovels(event.detail.config.novels);
      }
    };
    window.addEventListener("admin_state_change", handleAdminStateChange);
    window.addEventListener("admin_full_sync", handleAdminFullSync);
    return () => {
      window.removeEventListener("admin_state_change", handleAdminStateChange);
      window.removeEventListener("admin_full_sync", handleAdminFullSync);
    };
  }, []);
  const defaultNovelas = [];
  const allNovelas = [...defaultNovelas, ...adminNovels.map((novel) => ({
    id: novel.id,
    titulo: novel.titulo,
    genero: novel.genero,
    capitulos: novel.capitulos,
    año: novel.año,
    descripcion: novel.descripcion,
    pais: novel.pais || "No especificado",
    imagen: novel.imagen,
    estado: novel.estado || "finalizada"
  }))];
  const uniqueGenres = [...new Set(allNovelas.map((novela) => novela.genero))].sort();
  const uniqueYears = [...new Set(allNovelas.map((novela) => novela.año))].sort((a, b) => b - a);
  const uniqueCountries = [...new Set(allNovelas.map((novela) => novela.pais))].sort();
  const statusOptions = [
    { value: "transmision", label: "En Transmisión" },
    { value: "finalizada", label: "Finalizada" }
  ];
  useEffect(() => {
    const novelasWithDefaultPayment = allNovelas.map((novela) => ({
      ...novela,
      paymentType: "cash"
    }));
    setNovelasWithPayment(novelasWithDefaultPayment);
    const cartItems = JSON.parse(localStorage.getItem("movieCart") || "[]");
    const novelasEnCarrito = cartItems.filter((item) => item.type === "novel").map((item) => item.id);
    if (novelasEnCarrito.length > 0) {
      setSelectedNovelas(novelasEnCarrito);
    }
  }, [adminNovels]);
  const getFilteredNovelas = () => {
    let filtered = novelasWithPayment.filter((novela) => {
      const searchWords = searchTerm.toLowerCase().trim().split(/\s+/);
      const tituloLower = novela.titulo.toLowerCase();
      const matchesSearch = searchTerm === "" || searchWords.every((word) => tituloLower.includes(word));
      const matchesGenre = selectedGenre === "" || novela.genero === selectedGenre;
      const matchesYear = selectedYear === "" || novela.año.toString() === selectedYear;
      const matchesCountry = selectedCountry === "" || novela.pais === selectedCountry;
      const matchesStatus = selectedStatus === "" || novela.estado === selectedStatus;
      return matchesSearch && matchesGenre && matchesYear && matchesCountry && matchesStatus;
    });
    filtered.sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case "titulo":
          comparison = a.titulo.localeCompare(b.titulo);
          break;
        case "año":
          comparison = a.año - b.año;
          break;
        case "capitulos":
          comparison = a.capitulos - b.capitulos;
          break;
        case "pais":
          comparison = a.pais.localeCompare(b.pais);
          break;
      }
      return sortOrder === "asc" ? comparison : -comparison;
    });
    return filtered;
  };
  const filteredNovelas = getFilteredNovelas();
  const handleNovelClick = (novelaId) => {
    window.location.href = `/novel/${novelaId}`;
  };
  const handleNovelToggle = (novelaId) => {
    setSelectedNovelas((prev) => {
      if (prev.includes(novelaId)) {
        return prev.filter((id) => id !== novelaId);
      } else {
        return [...prev, novelaId];
      }
    });
  };
  const handlePaymentTypeChange = (novelaId, paymentType) => {
    setNovelasWithPayment(
      (prev) => prev.map(
        (novela) => novela.id === novelaId ? { ...novela, paymentType } : novela
      )
    );
  };
  const selectAllNovelas = () => {
    setSelectedNovelas(filteredNovelas.map((n) => n.id));
  };
  const clearAllNovelas = () => {
    setSelectedNovelas([]);
  };
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedGenre("");
    setSelectedYear("");
    setSelectedCountry("");
    setSelectedStatus("");
    setSortBy("titulo");
    setSortOrder("asc");
  };
  const calculateTotals = () => {
    const selectedNovelasData = novelasWithPayment.filter((n) => selectedNovelas.includes(n.id));
    const cashNovelas = selectedNovelasData.filter((n) => n.paymentType === "cash");
    const transferNovelas = selectedNovelasData.filter((n) => n.paymentType === "transfer");
    const cashTotal = cashNovelas.reduce((sum, n) => sum + n.capitulos * novelPricePerChapter, 0);
    const transferBaseTotal = transferNovelas.reduce((sum, n) => sum + n.capitulos * novelPricePerChapter, 0);
    const transferFee = Math.round(transferBaseTotal * (transferFeePercentage / 100));
    const transferTotal = transferBaseTotal + transferFee;
    const grandTotal = cashTotal + transferTotal;
    return {
      cashNovelas,
      transferNovelas,
      cashTotal,
      transferBaseTotal,
      transferFee,
      transferTotal,
      grandTotal,
      totalCapitulos: selectedNovelasData.reduce((sum, n) => sum + n.capitulos, 0)
    };
  };
  const totals = calculateTotals();
  const generateNovelListText = () => {
    let listText = "📚 CATÁLOGO DE NOVELAS DISPONIBLES\n";
    listText += "TV a la Carta - Novelas Completas\n\n";
    listText += `💰 Precio: $${novelPricePerChapter} CUP por capítulo
`;
    listText += `💳 Recargo transferencia: ${transferFeePercentage}%
`;
    listText += "📱 Contacto: +5354690878\n\n";
    listText += "═══════════════════════════════════\n\n";
    if (allNovelas.length === 0) {
      listText += "📋 No hay novelas disponibles en este momento.\n";
      listText += "Contacta con el administrador para más información.\n\n";
    } else {
      listText += "💵 PRECIOS EN EFECTIVO:\n";
      listText += "═══════════════════════════════════\n\n";
      allNovelas.forEach((novela, index) => {
        const baseCost = novela.capitulos * novelPricePerChapter;
        listText += `${index + 1}. ${novela.titulo}
`;
        listText += `   📺 Género: ${novela.genero}
`;
        listText += `   🌍 País: ${novela.pais}
`;
        listText += `   📊 Capítulos: ${novela.capitulos}
`;
        listText += `   📅 Año: ${novela.año}
`;
        listText += `   📡 Estado: ${novela.estado === "transmision" ? "En Transmisión" : "Finalizada"}
`;
        listText += `   💰 Costo en efectivo: $${baseCost.toLocaleString()} CUP

`;
      });
      listText += `
🏦 PRECIOS CON TRANSFERENCIA BANCARIA (+${transferFeePercentage}%):
`;
      listText += "═══════════════════════════════════\n\n";
      allNovelas.forEach((novela, index) => {
        const baseCost = novela.capitulos * novelPricePerChapter;
        const transferCost = Math.round(baseCost * (1 + transferFeePercentage / 100));
        const recargo = transferCost - baseCost;
        listText += `${index + 1}. ${novela.titulo}
`;
        listText += `   📺 Género: ${novela.genero}
`;
        listText += `   🌍 País: ${novela.pais}
`;
        listText += `   📊 Capítulos: ${novela.capitulos}
`;
        listText += `   📅 Año: ${novela.año}
`;
        listText += `   📡 Estado: ${novela.estado === "transmision" ? "En Transmisión" : "Finalizada"}
`;
        listText += `   💰 Costo base: $${baseCost.toLocaleString()} CUP
`;
        listText += `   💳 Recargo (${transferFeePercentage}%): +$${recargo.toLocaleString()} CUP
`;
        listText += `   💰 Costo con transferencia: $${transferCost.toLocaleString()} CUP

`;
      });
    }
    listText += `
📅 Generado el: ${(/* @__PURE__ */ new Date()).toLocaleString("es-ES")}`;
    return listText;
  };
  const downloadNovelList = () => {
    const listText = generateNovelListText();
    const blob = new Blob([listText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Catalogo_Novelas_TV_a_la_Carta.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  const handleFinalizePedido = () => {
    if (selectedNovelas.length === 0) {
      alert("Por favor selecciona al menos una novela");
      return;
    }
    const selectedNovelItems = novelasWithPayment.filter((novela) => selectedNovelas.includes(novela.id)).map((novela) => ({
      id: novela.id,
      title: novela.titulo,
      type: "novel",
      genre: novela.genero,
      chapters: novela.capitulos,
      year: novela.año,
      description: novela.descripcion,
      country: novela.pais,
      status: novela.estado,
      image: novela.imagen,
      paymentType: novela.paymentType || "cash",
      pricePerChapter: novelPricePerChapter,
      totalPrice: novela.paymentType === "transfer" ? Math.round(novela.capitulos * novelPricePerChapter * (1 + transferFeePercentage / 100)) : novela.capitulos * novelPricePerChapter
    }));
    selectedNovelItems.forEach((novel) => {
      addNovel(novel);
    });
    onClose();
    if (onFinalizePedido) {
      onFinalizePedido(selectedNovelItems);
    }
  };
  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, "_self");
  };
  const handleWhatsApp = () => {
    const message = "📚 *Solicitar novelas*\n\n¿Hay novelas que me gustaría ver en [TV a la Carta] a continuación te comento:";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5354690878?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };
  const getNovelImage = (novela) => {
    if (novela.imagen) {
      return novela.imagen;
    }
    const genreImages = {
      "Drama": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      "Romance": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300&h=400&fit=crop",
      "Acción": "https://images.unsplash.com/photo-1489599843253-c76cc4bcb8cf?w=300&h=400&fit=crop",
      "Comedia": "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=400&fit=crop",
      "Familia": "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=400&fit=crop"
    };
    return genreImages[novela.genero] || "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop";
  };
  const getCountryFlag = (country) => {
    const flags = {
      "Turquía": "🇹🇷",
      "Cuba": "🇨🇺",
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
      "Rusia": "🇷🇺",
      "No especificado": "🌍"
    };
    return flags[country] || "🌍";
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4 z-50", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-2xl w-full max-w-7xl max-h-[95vh] overflow-hidden shadow-2xl animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-r from-pink-600 to-purple-600 p-4 sm:p-6 text-white", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white/20 p-3 rounded-xl mr-4 shadow-lg", children: /* @__PURE__ */ jsxDEV(BookOpen, { className: "h-6 w-6 sm:h-8 sm:w-8" }, void 0, false, {
          fileName: "/home/project/src/components/NovelasModal.tsx",
          lineNumber: 429,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/home/project/src/components/NovelasModal.tsx",
          lineNumber: 428,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xl sm:text-2xl md:text-3xl font-bold", children: "Catálogo de Novelas" }, void 0, false, {
            fileName: "/home/project/src/components/NovelasModal.tsx",
            lineNumber: 432,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm sm:text-base opacity-90", children: "Novelas completas disponibles" }, void 0, false, {
            fileName: "/home/project/src/components/NovelasModal.tsx",
            lineNumber: 433,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/components/NovelasModal.tsx",
          lineNumber: 431,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/components/NovelasModal.tsx",
        lineNumber: 427,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: onClose,
          className: "p-2 hover:bg-white/20 rounded-full transition-colors",
          children: /* @__PURE__ */ jsxDEV(X, { className: "h-6 w-6" }, void 0, false, {
            fileName: "/home/project/src/components/NovelasModal.tsx",
            lineNumber: 440,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/home/project/src/components/NovelasModal.tsx",
          lineNumber: 436,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/home/project/src/components/NovelasModal.tsx",
      lineNumber: 426,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/home/project/src/components/NovelasModal.tsx",
      lineNumber: 425,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "overflow-y-auto max-h-[calc(95vh-120px)]", children: /* @__PURE__ */ jsxDEV("div", { className: "p-3 sm:p-6", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "mb-6", children: /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: downloadNovelList,
          className: "w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-4 sm:p-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-white/20 p-3 rounded-full", children: /* @__PURE__ */ jsxDEV(FileText, { className: "h-5 w-5 sm:h-6 sm:w-6" }, void 0, false, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 455,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 454,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "text-center sm:text-left", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-sm sm:text-lg font-bold", children: "Descargar Catálogo" }, void 0, false, {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 458,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-xs sm:text-sm opacity-90", children: "Lista completa de novelas" }, void 0, false, {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 459,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 457,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/home/project/src/components/NovelasModal.tsx",
          lineNumber: 450,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "/home/project/src/components/NovelasModal.tsx",
        lineNumber: 449,
        columnNumber: 13
      }, this),
      allNovelas.length === 0 && /* @__PURE__ */ jsxDEV("div", { className: "bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center", children: [
        /* @__PURE__ */ jsxDEV(BookOpen, { className: "h-12 w-12 text-yellow-600 mx-auto mb-4" }, void 0, false, {
          fileName: "/home/project/src/components/NovelasModal.tsx",
          lineNumber: 467,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold text-yellow-800 mb-2", children: "No hay novelas disponibles" }, void 0, false, {
          fileName: "/home/project/src/components/NovelasModal.tsx",
          lineNumber: 468,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-yellow-700", children: "El catálogo de novelas está vacío. Contacta con el administrador para agregar novelas al sistema." }, void 0, false, {
          fileName: "/home/project/src/components/NovelasModal.tsx",
          lineNumber: 471,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/components/NovelasModal.tsx",
        lineNumber: 466,
        columnNumber: 13
      }, this),
      showNovelList && allNovelas.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-2xl border-2 border-gray-200 overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:p-6 border-b border-gray-200", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center mb-4 sm:mb-6", children: [
            /* @__PURE__ */ jsxDEV(Filter, { className: "h-5 w-5 sm:h-6 sm:w-6 text-purple-600 mr-3" }, void 0, false, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 483,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("h4", { className: "text-base sm:text-xl font-bold text-purple-900", children: "Filtros de Búsqueda Avanzados" }, void 0, false, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 484,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/components/NovelasModal.tsx",
            lineNumber: 482,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
              /* @__PURE__ */ jsxDEV(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" }, void 0, false, {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 489,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "text",
                  placeholder: "Buscar por título...",
                  value: searchTerm,
                  onChange: (e) => setSearchTerm(e.target.value),
                  className: "w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm"
                },
                void 0,
                false,
                {
                  fileName: "/home/project/src/components/NovelasModal.tsx",
                  lineNumber: 490,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 488,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(
              "select",
              {
                value: selectedGenre,
                onChange: (e) => setSelectedGenre(e.target.value),
                className: "w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm",
                children: [
                  /* @__PURE__ */ jsxDEV("option", { value: "", children: "Todos los géneros" }, void 0, false, {
                    fileName: "/home/project/src/components/NovelasModal.tsx",
                    lineNumber: 504,
                    columnNumber: 23
                  }, this),
                  uniqueGenres.map(
                    (genre) => /* @__PURE__ */ jsxDEV("option", { value: genre, children: genre }, genre, false, {
                      fileName: "/home/project/src/components/NovelasModal.tsx",
                      lineNumber: 506,
                      columnNumber: 21
                    }, this)
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 499,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "select",
              {
                value: selectedCountry,
                onChange: (e) => setSelectedCountry(e.target.value),
                className: "w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm",
                children: [
                  /* @__PURE__ */ jsxDEV("option", { value: "", children: "Todos los países" }, void 0, false, {
                    fileName: "/home/project/src/components/NovelasModal.tsx",
                    lineNumber: 515,
                    columnNumber: 23
                  }, this),
                  uniqueCountries.map(
                    (country) => /* @__PURE__ */ jsxDEV("option", { value: country, children: [
                      getCountryFlag(country),
                      " ",
                      country
                    ] }, country, true, {
                      fileName: "/home/project/src/components/NovelasModal.tsx",
                      lineNumber: 517,
                      columnNumber: 21
                    }, this)
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 510,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "select",
              {
                value: selectedStatus,
                onChange: (e) => setSelectedStatus(e.target.value),
                className: "w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm",
                children: [
                  /* @__PURE__ */ jsxDEV("option", { value: "", children: "Todos los estados" }, void 0, false, {
                    fileName: "/home/project/src/components/NovelasModal.tsx",
                    lineNumber: 528,
                    columnNumber: 23
                  }, this),
                  statusOptions.map(
                    (status) => /* @__PURE__ */ jsxDEV("option", { value: status.value, children: status.label }, status.value, false, {
                      fileName: "/home/project/src/components/NovelasModal.tsx",
                      lineNumber: 530,
                      columnNumber: 21
                    }, this)
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 523,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "select",
              {
                value: selectedYear,
                onChange: (e) => setSelectedYear(e.target.value),
                className: "w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm",
                children: [
                  /* @__PURE__ */ jsxDEV("option", { value: "", children: "Todos los años" }, void 0, false, {
                    fileName: "/home/project/src/components/NovelasModal.tsx",
                    lineNumber: 539,
                    columnNumber: 23
                  }, this),
                  uniqueYears.map(
                    (year) => /* @__PURE__ */ jsxDEV("option", { value: year, children: year }, year, false, {
                      fileName: "/home/project/src/components/NovelasModal.tsx",
                      lineNumber: 541,
                      columnNumber: 21
                    }, this)
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 534,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/home/project/src/components/NovelasModal.tsx",
            lineNumber: 487,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-purple-700 bg-white/60 px-4 py-2 rounded-xl text-center sm:text-left", children: [
              /* @__PURE__ */ jsxDEV("strong", { children: [
                "Mostrando ",
                filteredNovelas.length,
                " de ",
                allNovelas.length,
                " novelas"
              ] }, void 0, true, {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 548,
                columnNumber: 23
              }, this),
              (searchTerm || selectedGenre || selectedYear || selectedCountry || selectedStatus) && /* @__PURE__ */ jsxDEV("span", { className: "block sm:inline sm:ml-2 text-purple-600", children: "• Filtros activos" }, void 0, false, {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 550,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 547,
              columnNumber: 21
            }, this),
            (searchTerm || selectedGenre || selectedYear || selectedCountry || selectedStatus || sortBy !== "titulo" || sortOrder !== "asc") && /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: clearFilters,
                className: "text-xs sm:text-sm bg-purple-200 hover:bg-purple-300 text-purple-800 px-3 sm:px-4 py-2 rounded-xl transition-colors font-medium w-full sm:w-auto text-center",
                children: "Limpiar filtros"
              },
              void 0,
              false,
              {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 555,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/home/project/src/components/NovelasModal.tsx",
            lineNumber: 546,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/components/NovelasModal.tsx",
          lineNumber: 481,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-r from-purple-100 to-pink-100 p-3 sm:p-6 border-b border-gray-200", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0", children: [
          /* @__PURE__ */ jsxDEV("h4", { className: "text-base sm:text-xl font-bold text-gray-900 text-center sm:text-left", children: [
            "Seleccionar Novelas (",
            selectedNovelas.length,
            " seleccionadas)"
          ] }, void 0, true, {
            fileName: "/home/project/src/components/NovelasModal.tsx",
            lineNumber: 567,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex space-x-2 sm:space-x-3 justify-center sm:justify-end", children: [
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: selectAllNovelas,
                className: "bg-purple-500 hover:bg-purple-600 text-white px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors shadow-sm flex-1 sm:flex-none",
                children: "Seleccionar Todas"
              },
              void 0,
              false,
              {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 571,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: clearAllNovelas,
                className: "bg-gray-500 hover:bg-gray-600 text-white px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors shadow-sm flex-1 sm:flex-none",
                children: "Deseleccionar Todas"
              },
              void 0,
              false,
              {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 577,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/home/project/src/components/NovelasModal.tsx",
            lineNumber: 570,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/components/NovelasModal.tsx",
          lineNumber: 566,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "/home/project/src/components/NovelasModal.tsx",
          lineNumber: 565,
          columnNumber: 17
        }, this),
        selectedNovelas.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-r from-green-50 to-blue-50 p-3 sm:p-6 border-b border-gray-200", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ jsxDEV(Calculator, { className: "h-5 w-5 sm:h-6 sm:w-6 text-green-600 mr-3" }, void 0, false, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 591,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("h5", { className: "text-sm sm:text-lg font-bold text-gray-900", children: "Resumen de Selección" }, void 0, false, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 592,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/components/NovelasModal.tsx",
            lineNumber: 590,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-xl p-3 sm:p-4 border border-gray-200 text-center shadow-sm", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-xl sm:text-3xl font-bold text-purple-600", children: selectedNovelas.length }, void 0, false, {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 597,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-xs sm:text-sm text-gray-600 font-medium", children: "Novelas" }, void 0, false, {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 598,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 596,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-xl p-3 sm:p-4 border border-gray-200 text-center shadow-sm", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-xl sm:text-3xl font-bold text-blue-600", children: totals.totalCapitulos }, void 0, false, {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 601,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-xs sm:text-sm text-gray-600 font-medium", children: "Capítulos" }, void 0, false, {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 602,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 600,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-xl p-3 sm:p-4 border border-gray-200 text-center shadow-sm", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-xl sm:text-3xl font-bold text-green-600", children: [
                "$",
                totals.cashTotal.toLocaleString()
              ] }, void 0, true, {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 605,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-xs sm:text-sm text-gray-600 font-medium", children: "Efectivo" }, void 0, false, {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 606,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 604,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-xl p-3 sm:p-4 border border-gray-200 text-center shadow-sm", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-xl sm:text-3xl font-bold text-orange-600", children: [
                "$",
                totals.transferTotal.toLocaleString()
              ] }, void 0, true, {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 609,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-xs sm:text-sm text-gray-600 font-medium", children: "Transferencia" }, void 0, false, {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 610,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 608,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/components/NovelasModal.tsx",
            lineNumber: 595,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-3 sm:p-6 border-2 border-green-300 shadow-lg", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-base sm:text-xl font-bold text-gray-900", children: "TOTAL A PAGAR:" }, void 0, false, {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 616,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-xl sm:text-3xl font-bold text-green-600", children: [
                "$",
                totals.grandTotal.toLocaleString(),
                " CUP"
              ] }, void 0, true, {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 617,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 615,
              columnNumber: 23
            }, this),
            totals.transferFee > 0 && /* @__PURE__ */ jsxDEV("div", { className: "text-xs sm:text-sm text-orange-600 mt-2 font-medium text-center sm:text-left", children: [
              "Incluye $",
              totals.transferFee.toLocaleString(),
              " CUP de recargo por transferencia (",
              transferFeePercentage,
              "%)"
            ] }, void 0, true, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 620,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/components/NovelasModal.tsx",
            lineNumber: 614,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/components/NovelasModal.tsx",
          lineNumber: 589,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "p-3 sm:p-6", children: /* @__PURE__ */ jsxDEV("div", { className: "space-y-8", children: filteredNovelas.length > 0 ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
          filteredNovelas.filter((n) => n.estado === "transmision").length > 0 && /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg sm:text-xl font-bold text-red-600 mb-4 flex items-center", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "bg-red-100 p-2 rounded-lg mr-3", children: "📡" }, void 0, false, {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 637,
                columnNumber: 31
              }, this),
              "Novelas en Transmisión"
            ] }, void 0, true, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 636,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV(NetflixNovelSection, { novels: filteredNovelas.filter((n) => n.estado === "transmision") }, void 0, false, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 642,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/components/NovelasModal.tsx",
            lineNumber: 635,
            columnNumber: 21
          }, this),
          filteredNovelas.filter((n) => n.estado === "finalizada").length > 0 && /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg sm:text-xl font-bold text-green-600 mb-4 flex items-center", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "bg-green-100 p-2 rounded-lg mr-3", children: "✅" }, void 0, false, {
                fileName: "/home/project/src/components/NovelasModal.tsx",
                lineNumber: 650,
                columnNumber: 31
              }, this),
              "Novelas Finalizadas"
            ] }, void 0, true, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 649,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV(NetflixNovelSection, { novels: filteredNovelas.filter((n) => n.estado === "finalizada") }, void 0, false, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 655,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/components/NovelasModal.tsx",
            lineNumber: 648,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/components/NovelasModal.tsx",
          lineNumber: 632,
          columnNumber: 19
        }, this) : /* @__PURE__ */ jsxDEV("div", { className: "text-center py-12", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-lg sm:text-xl font-semibold text-gray-900 mb-3", children: "No se encontraron novelas" }, void 0, false, {
            fileName: "/home/project/src/components/NovelasModal.tsx",
            lineNumber: 661,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm sm:text-base text-gray-600 mb-4 sm:mb-6", children: "No hay novelas que coincidan con los filtros seleccionados." }, void 0, false, {
            fileName: "/home/project/src/components/NovelasModal.tsx",
            lineNumber: 664,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: clearFilters,
              className: "bg-purple-500 hover:bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-colors shadow-sm",
              children: "Limpiar filtros"
            },
            void 0,
            false,
            {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 667,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/project/src/components/NovelasModal.tsx",
          lineNumber: 660,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "/home/project/src/components/NovelasModal.tsx",
          lineNumber: 630,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "/home/project/src/components/NovelasModal.tsx",
          lineNumber: 629,
          columnNumber: 17
        }, this),
        selectedNovelas.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:p-6 border-t border-gray-200", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-center sm:text-left", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm sm:text-lg font-bold text-gray-900", children: [
              selectedNovelas.length,
              " novelas seleccionadas"
            ] }, void 0, true, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 682,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs sm:text-sm text-gray-600", children: [
              "Total: $",
              totals.grandTotal.toLocaleString(),
              " CUP"
            ] }, void 0, true, {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 685,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/components/NovelasModal.tsx",
            lineNumber: 681,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: handleFinalizePedido,
              disabled: selectedNovelas.length === 0,
              className: `w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg ${selectedNovelas.length > 0 ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`,
              children: [
                /* @__PURE__ */ jsxDEV(ShoppingCart, { className: "h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 mr-2 sm:mr-3" }, void 0, false, {
                  fileName: "/home/project/src/components/NovelasModal.tsx",
                  lineNumber: 698,
                  columnNumber: 25
                }, this),
                "Finalizar Pedido"
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/project/src/components/NovelasModal.tsx",
              lineNumber: 689,
              columnNumber: 23
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/project/src/components/NovelasModal.tsx",
          lineNumber: 680,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "/home/project/src/components/NovelasModal.tsx",
          lineNumber: 679,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/components/NovelasModal.tsx",
        lineNumber: 479,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/components/NovelasModal.tsx",
      lineNumber: 446,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/home/project/src/components/NovelasModal.tsx",
      lineNumber: 445,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/project/src/components/NovelasModal.tsx",
    lineNumber: 423,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/project/src/components/NovelasModal.tsx",
    lineNumber: 422,
    columnNumber: 5
  }, this);
}
_s(NovelasModal, "JePFrd+RpQemS5Y+POBI7k+ow+s=", false, function() {
  return [useCart];
});
_c = NovelasModal;
var _c;
$RefreshReg$(_c, "NovelasModal");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/components/NovelasModal.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/components/NovelasModal.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXVCQTtBQUFBLFdBL05KO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFpT0E7QUFBQSxTQWxRSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBb1FBLEtBclFGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FzUUE7QUFBQSxPQTVSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBNlJBLEtBOVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0ErUkE7QUFFSjtBQUFDN0UsR0ExcEJlSixjQUFZO0FBQUEsVUFDYUYsT0FBTztBQUFBO0FBQUFtTCxLQURoQ2pMO0FBQVksSUFBQWlMO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlgiLCJCb29rT3BlbiIsIkNhbGN1bGF0b3IiLCJTZWFyY2giLCJGaWx0ZXIiLCJGaWxlVGV4dCIsIlNob3BwaW5nQ2FydCIsInVzZUNhcnQiLCJOZXRmbGl4Tm92ZWxTZWN0aW9uIiwiTm92ZWxhc01vZGFsIiwiaXNPcGVuIiwib25DbG9zZSIsIm9uRmluYWxpemVQZWRpZG8iLCJfcyIsImdldEN1cnJlbnRQcmljZXMiLCJhZGROb3ZlbCIsInNlbGVjdGVkTm92ZWxhcyIsInNldFNlbGVjdGVkTm92ZWxhcyIsIm5vdmVsYXNXaXRoUGF5bWVudCIsInNldE5vdmVsYXNXaXRoUGF5bWVudCIsInNob3dOb3ZlbExpc3QiLCJzZXRTaG93Tm92ZWxMaXN0Iiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWxlY3RlZEdlbnJlIiwic2V0U2VsZWN0ZWRHZW5yZSIsInNlbGVjdGVkWWVhciIsInNldFNlbGVjdGVkWWVhciIsInNlbGVjdGVkQ291bnRyeSIsInNldFNlbGVjdGVkQ291bnRyeSIsInNlbGVjdGVkU3RhdHVzIiwic2V0U2VsZWN0ZWRTdGF0dXMiLCJzb3J0QnkiLCJzZXRTb3J0QnkiLCJzb3J0T3JkZXIiLCJzZXRTb3J0T3JkZXIiLCJhZG1pbk5vdmVscyIsInNldEFkbWluTm92ZWxzIiwiY3VycmVudFByaWNlcyIsIm5vdmVsUHJpY2VQZXJDaGFwdGVyIiwidHJhbnNmZXJGZWVQZXJjZW50YWdlIiwicGhvbmVOdW1iZXIiLCJsb2FkTm92ZWxzIiwiYWRtaW5Db25maWciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uZmlnIiwiSlNPTiIsInBhcnNlIiwibm92ZWxzIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlQWRtaW5TdGF0ZUNoYW5nZSIsImV2ZW50IiwiZGV0YWlsIiwidHlwZSIsImhhbmRsZUFkbWluRnVsbFN5bmMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRlZmF1bHROb3ZlbGFzIiwiYWxsTm92ZWxhcyIsIm1hcCIsIm5vdmVsIiwiaWQiLCJ0aXR1bG8iLCJnZW5lcm8iLCJjYXBpdHVsb3MiLCJhw7FvIiwiZGVzY3JpcGNpb24iLCJwYWlzIiwiaW1hZ2VuIiwiZXN0YWRvIiwidW5pcXVlR2VucmVzIiwiU2V0Iiwibm92ZWxhIiwic29ydCIsInVuaXF1ZVllYXJzIiwiYSIsImIiLCJ1bmlxdWVDb3VudHJpZXMiLCJzdGF0dXNPcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsIm5vdmVsYXNXaXRoRGVmYXVsdFBheW1lbnQiLCJwYXltZW50VHlwZSIsImNhcnRJdGVtcyIsIm5vdmVsYXNFbkNhcnJpdG8iLCJmaWx0ZXIiLCJpdGVtIiwibGVuZ3RoIiwiZ2V0RmlsdGVyZWROb3ZlbGFzIiwiZmlsdGVyZWQiLCJzZWFyY2hXb3JkcyIsInRvTG93ZXJDYXNlIiwidHJpbSIsInNwbGl0IiwidGl0dWxvTG93ZXIiLCJtYXRjaGVzU2VhcmNoIiwiZXZlcnkiLCJ3b3JkIiwiaW5jbHVkZXMiLCJtYXRjaGVzR2VucmUiLCJtYXRjaGVzWWVhciIsInRvU3RyaW5nIiwibWF0Y2hlc0NvdW50cnkiLCJtYXRjaGVzU3RhdHVzIiwiY29tcGFyaXNvbiIsImxvY2FsZUNvbXBhcmUiLCJmaWx0ZXJlZE5vdmVsYXMiLCJoYW5kbGVOb3ZlbENsaWNrIiwibm92ZWxhSWQiLCJsb2NhdGlvbiIsImhyZWYiLCJoYW5kbGVOb3ZlbFRvZ2dsZSIsInByZXYiLCJoYW5kbGVQYXltZW50VHlwZUNoYW5nZSIsInNlbGVjdEFsbE5vdmVsYXMiLCJuIiwiY2xlYXJBbGxOb3ZlbGFzIiwiY2xlYXJGaWx0ZXJzIiwiY2FsY3VsYXRlVG90YWxzIiwic2VsZWN0ZWROb3ZlbGFzRGF0YSIsImNhc2hOb3ZlbGFzIiwidHJhbnNmZXJOb3ZlbGFzIiwiY2FzaFRvdGFsIiwicmVkdWNlIiwic3VtIiwidHJhbnNmZXJCYXNlVG90YWwiLCJ0cmFuc2ZlckZlZSIsIk1hdGgiLCJyb3VuZCIsInRyYW5zZmVyVG90YWwiLCJncmFuZFRvdGFsIiwidG90YWxDYXBpdHVsb3MiLCJ0b3RhbHMiLCJnZW5lcmF0ZU5vdmVsTGlzdFRleHQiLCJsaXN0VGV4dCIsImZvckVhY2giLCJpbmRleCIsImJhc2VDb3N0IiwidG9Mb2NhbGVTdHJpbmciLCJ0cmFuc2ZlckNvc3QiLCJyZWNhcmdvIiwiRGF0ZSIsImRvd25sb2FkTm92ZWxMaXN0IiwiYmxvYiIsIkJsb2IiLCJ1cmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZG93bmxvYWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwicmV2b2tlT2JqZWN0VVJMIiwiaGFuZGxlRmluYWxpemVQZWRpZG8iLCJhbGVydCIsInNlbGVjdGVkTm92ZWxJdGVtcyIsInRpdGxlIiwiZ2VucmUiLCJjaGFwdGVycyIsInllYXIiLCJkZXNjcmlwdGlvbiIsImNvdW50cnkiLCJzdGF0dXMiLCJpbWFnZSIsInByaWNlUGVyQ2hhcHRlciIsInRvdGFsUHJpY2UiLCJoYW5kbGVDYWxsIiwib3BlbiIsImhhbmRsZVdoYXRzQXBwIiwibWVzc2FnZSIsImVuY29kZWRNZXNzYWdlIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwid2hhdHNhcHBVcmwiLCJnZXROb3ZlbEltYWdlIiwiZ2VucmVJbWFnZXMiLCJnZXRDb3VudHJ5RmxhZyIsImZsYWdzIiwiZSIsInRhcmdldCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIk5vdmVsYXNNb2RhbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBYLCBEb3dubG9hZCwgTWVzc2FnZUNpcmNsZSwgUGhvbmUsIEJvb2tPcGVuLCBJbmZvLCBDaGVjaywgRG9sbGFyU2lnbiwgQ3JlZGl0Q2FyZCwgQ2FsY3VsYXRvciwgU2VhcmNoLCBGaWx0ZXIsIEltcG9ydCBhcyBTb3J0QXNjLCBEZXNzZXJ0IGFzIFNvcnREZXNjLCBTbWFydHBob25lLCBGaWxlVGV4dCwgU2VuZCwgU2hvcHBpbmdDYXJ0LCBVcGxvYWQsIEltYWdlLCBUcmFzaDIsIENyZWRpdENhcmQgYXMgRWRpdCwgU2F2ZSwgQ2FtZXJhLCBHbG9iZSB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnLi4vY29udGV4dC9DYXJ0Q29udGV4dCc7XG5pbXBvcnQgeyBOZXRmbGl4Tm92ZWxTZWN0aW9uIH0gZnJvbSAnLi9OZXRmbGl4Tm92ZWxTZWN0aW9uJztcbmltcG9ydCB0eXBlIHsgTm92ZWxDYXJ0SXRlbSB9IGZyb20gJy4uL3R5cGVzL21vdmllJztcblxuaW50ZXJmYWNlIE5vdmVsYSB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdHVsbzogc3RyaW5nO1xuICBnZW5lcm86IHN0cmluZztcbiAgY2FwaXR1bG9zOiBudW1iZXI7XG4gIGHDsW86IG51bWJlcjtcbiAgZGVzY3JpcGNpb24/OiBzdHJpbmc7XG4gIHBheW1lbnRUeXBlPzogJ2Nhc2gnIHwgJ3RyYW5zZmVyJztcbiAgcGFpcz86IHN0cmluZztcbiAgaW1hZ2VuPzogc3RyaW5nO1xuICBlc3RhZG8/OiAndHJhbnNtaXNpb24nIHwgJ2ZpbmFsaXphZGEnO1xufVxuXG5pbnRlcmZhY2UgTm92ZWxhc01vZGFsUHJvcHMge1xuICBpc09wZW46IGJvb2xlYW47XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG4gIG9uRmluYWxpemVQZWRpZG8/OiAoc2VsZWN0ZWROb3ZlbHM6IE5vdmVsQ2FydEl0ZW1bXSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5vdmVsYXNNb2RhbCh7IGlzT3Blbiwgb25DbG9zZSwgb25GaW5hbGl6ZVBlZGlkbyB9OiBOb3ZlbGFzTW9kYWxQcm9wcykge1xuICBjb25zdCB7IGdldEN1cnJlbnRQcmljZXMsIGFkZE5vdmVsIH0gPSB1c2VDYXJ0KCk7XG4gIGNvbnN0IFtzZWxlY3RlZE5vdmVsYXMsIHNldFNlbGVjdGVkTm92ZWxhc10gPSB1c2VTdGF0ZTxudW1iZXJbXT4oW10pO1xuICBjb25zdCBbbm92ZWxhc1dpdGhQYXltZW50LCBzZXROb3ZlbGFzV2l0aFBheW1lbnRdID0gdXNlU3RhdGU8Tm92ZWxhW10+KFtdKTtcbiAgY29uc3QgW3Nob3dOb3ZlbExpc3QsIHNldFNob3dOb3ZlbExpc3RdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NlbGVjdGVkR2VucmUsIHNldFNlbGVjdGVkR2VucmVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VsZWN0ZWRZZWFyLCBzZXRTZWxlY3RlZFllYXJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VsZWN0ZWRDb3VudHJ5LCBzZXRTZWxlY3RlZENvdW50cnldID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VsZWN0ZWRTdGF0dXMsIHNldFNlbGVjdGVkU3RhdHVzXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NvcnRCeSwgc2V0U29ydEJ5XSA9IHVzZVN0YXRlPCd0aXR1bG8nIHwgJ2HDsW8nIHwgJ2NhcGl0dWxvcycgfCAncGFpcyc+KCd0aXR1bG8nKTtcbiAgY29uc3QgW3NvcnRPcmRlciwgc2V0U29ydE9yZGVyXSA9IHVzZVN0YXRlPCdhc2MnIHwgJ2Rlc2MnPignYXNjJyk7XG4gIGNvbnN0IFthZG1pbk5vdmVscywgc2V0QWRtaW5Ob3ZlbHNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcblxuICBjb25zdCBjdXJyZW50UHJpY2VzID0gZ2V0Q3VycmVudFByaWNlcygpO1xuICBjb25zdCBub3ZlbFByaWNlUGVyQ2hhcHRlciA9IGN1cnJlbnRQcmljZXMubm92ZWxQcmljZVBlckNoYXB0ZXI7XG4gIGNvbnN0IHRyYW5zZmVyRmVlUGVyY2VudGFnZSA9IGN1cnJlbnRQcmljZXMudHJhbnNmZXJGZWVQZXJjZW50YWdlO1xuICBcbiAgY29uc3QgcGhvbmVOdW1iZXIgPSAnKzUzNTQ2OTA4NzgnO1xuXG4gIC8vIExvYWQgbm92ZWxzIGZyb20gYWRtaW4gY29uZmlnXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZE5vdmVscyA9ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFkbWluQ29uZmlnID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N5c3RlbV9jb25maWcnKTtcbiAgICAgICAgaWYgKGFkbWluQ29uZmlnKSB7XG4gICAgICAgICAgY29uc3QgY29uZmlnID0gSlNPTi5wYXJzZShhZG1pbkNvbmZpZyk7XG4gICAgICAgICAgaWYgKGNvbmZpZy5ub3ZlbHMpIHtcbiAgICAgICAgICAgIHNldEFkbWluTm92ZWxzKGNvbmZpZy5ub3ZlbHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBub3ZlbHM6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsb2FkTm92ZWxzKCk7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIGFkbWluIHVwZGF0ZXNcbiAgICBjb25zdCBoYW5kbGVBZG1pblN0YXRlQ2hhbmdlID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmRldGFpbC50eXBlID09PSAnbm92ZWxfYWRkJyB8fCBcbiAgICAgICAgICBldmVudC5kZXRhaWwudHlwZSA9PT0gJ25vdmVsX3VwZGF0ZScgfHwgXG4gICAgICAgICAgZXZlbnQuZGV0YWlsLnR5cGUgPT09ICdub3ZlbF9kZWxldGUnKSB7XG4gICAgICAgIGxvYWROb3ZlbHMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQWRtaW5GdWxsU3luYyA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5kZXRhaWwuY29uZmlnPy5ub3ZlbHMpIHtcbiAgICAgICAgc2V0QWRtaW5Ob3ZlbHMoZXZlbnQuZGV0YWlsLmNvbmZpZy5ub3ZlbHMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYWRtaW5fc3RhdGVfY2hhbmdlJywgaGFuZGxlQWRtaW5TdGF0ZUNoYW5nZSBhcyBFdmVudExpc3RlbmVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYWRtaW5fZnVsbF9zeW5jJywgaGFuZGxlQWRtaW5GdWxsU3luYyBhcyBFdmVudExpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWRtaW5fc3RhdGVfY2hhbmdlJywgaGFuZGxlQWRtaW5TdGF0ZUNoYW5nZSBhcyBFdmVudExpc3RlbmVyKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdhZG1pbl9mdWxsX3N5bmMnLCBoYW5kbGVBZG1pbkZ1bGxTeW5jIGFzIEV2ZW50TGlzdGVuZXIpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICAvLyBCYXNlIG5vdmVscyBsaXN0IChjYW4gYmUgZW1wdHkgaWYgb25seSB1c2luZyBhZG1pbiBub3ZlbHMpXG4gIGNvbnN0IGRlZmF1bHROb3ZlbGFzOiBOb3ZlbGFbXSA9IFtdO1xuXG4gIC8vIENvbWJpbmUgYWRtaW4gbm92ZWxzIHdpdGggZGVmYXVsdCBub3ZlbHNcbiAgY29uc3QgYWxsTm92ZWxhcyA9IFsuLi5kZWZhdWx0Tm92ZWxhcywgLi4uYWRtaW5Ob3ZlbHMubWFwKG5vdmVsID0+ICh7XG4gICAgaWQ6IG5vdmVsLmlkLFxuICAgIHRpdHVsbzogbm92ZWwudGl0dWxvLFxuICAgIGdlbmVybzogbm92ZWwuZ2VuZXJvLFxuICAgIGNhcGl0dWxvczogbm92ZWwuY2FwaXR1bG9zLFxuICAgIGHDsW86IG5vdmVsLmHDsW8sXG4gICAgZGVzY3JpcGNpb246IG5vdmVsLmRlc2NyaXBjaW9uLFxuICAgIHBhaXM6IG5vdmVsLnBhaXMgfHwgJ05vIGVzcGVjaWZpY2FkbycsXG4gICAgaW1hZ2VuOiBub3ZlbC5pbWFnZW4sXG4gICAgZXN0YWRvOiBub3ZlbC5lc3RhZG8gfHwgJ2ZpbmFsaXphZGEnXG4gIH0pKV07XG5cbiAgLy8gR2V0IHVuaXF1ZSB2YWx1ZXMgZm9yIGZpbHRlcnNcbiAgY29uc3QgdW5pcXVlR2VucmVzID0gWy4uLm5ldyBTZXQoYWxsTm92ZWxhcy5tYXAobm92ZWxhID0+IG5vdmVsYS5nZW5lcm8pKV0uc29ydCgpO1xuICBjb25zdCB1bmlxdWVZZWFycyA9IFsuLi5uZXcgU2V0KGFsbE5vdmVsYXMubWFwKG5vdmVsYSA9PiBub3ZlbGEuYcOxbykpXS5zb3J0KChhLCBiKSA9PiBiIC0gYSk7XG4gIGNvbnN0IHVuaXF1ZUNvdW50cmllcyA9IFsuLi5uZXcgU2V0KGFsbE5vdmVsYXMubWFwKG5vdmVsYSA9PiBub3ZlbGEucGFpcykpXS5zb3J0KCk7XG4gIGNvbnN0IHN0YXR1c09wdGlvbnMgPSBbXG4gICAgeyB2YWx1ZTogJ3RyYW5zbWlzaW9uJywgbGFiZWw6ICdFbiBUcmFuc21pc2nDs24nIH0sXG4gICAgeyB2YWx1ZTogJ2ZpbmFsaXphZGEnLCBsYWJlbDogJ0ZpbmFsaXphZGEnIH1cbiAgXTtcblxuICAvLyBJbml0aWFsaXplIG5vdmVscyB3aXRoIGRlZmF1bHQgcGF5bWVudCB0eXBlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgbm92ZWxhc1dpdGhEZWZhdWx0UGF5bWVudCA9IGFsbE5vdmVsYXMubWFwKG5vdmVsYSA9PiAoe1xuICAgICAgLi4ubm92ZWxhLFxuICAgICAgcGF5bWVudFR5cGU6ICdjYXNoJyBhcyBjb25zdFxuICAgIH0pKTtcbiAgICBzZXROb3ZlbGFzV2l0aFBheW1lbnQobm92ZWxhc1dpdGhEZWZhdWx0UGF5bWVudCk7XG4gICAgXG4gICAgLy8gQ2FyZ2FyIG5vdmVsYXMgcHJldmlhbWVudGUgc2VsZWNjaW9uYWRhcyBkZWwgY2Fycml0b1xuICAgIGNvbnN0IGNhcnRJdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vdmllQ2FydCcpIHx8ICdbXScpO1xuICAgIGNvbnN0IG5vdmVsYXNFbkNhcnJpdG8gPSBjYXJ0SXRlbXNcbiAgICAgIC5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS50eXBlID09PSAnbm92ZWwnKVxuICAgICAgLm1hcCgoaXRlbTogYW55KSA9PiBpdGVtLmlkKTtcbiAgICBcbiAgICBpZiAobm92ZWxhc0VuQ2Fycml0by5sZW5ndGggPiAwKSB7XG4gICAgICBzZXRTZWxlY3RlZE5vdmVsYXMobm92ZWxhc0VuQ2Fycml0byk7XG4gICAgfVxuICB9LCBbYWRtaW5Ob3ZlbHNdKTtcblxuICAvLyBGaWx0ZXIgbm92ZWxzIGZ1bmN0aW9uXG4gIGNvbnN0IGdldEZpbHRlcmVkTm92ZWxhcyA9ICgpID0+IHtcbiAgICBsZXQgZmlsdGVyZWQgPSBub3ZlbGFzV2l0aFBheW1lbnQuZmlsdGVyKG5vdmVsYSA9PiB7XG4gICAgICAvLyBNZWpvcmFyIGLDunNxdWVkYSBwYXJhIHBlcm1pdGlyIGVzcGFjaW9zIHkgc2VyIG3DoXMgcHJlY2lzb1xuICAgICAgY29uc3Qgc2VhcmNoV29yZHMgPSBzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkudHJpbSgpLnNwbGl0KC9cXHMrLyk7XG4gICAgICBjb25zdCB0aXR1bG9Mb3dlciA9IG5vdmVsYS50aXR1bG8udG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IG1hdGNoZXNTZWFyY2ggPSBzZWFyY2hUZXJtID09PSAnJyB8fCBzZWFyY2hXb3Jkcy5ldmVyeSh3b3JkID0+IHRpdHVsb0xvd2VyLmluY2x1ZGVzKHdvcmQpKTtcbiAgICAgIGNvbnN0IG1hdGNoZXNHZW5yZSA9IHNlbGVjdGVkR2VucmUgPT09ICcnIHx8IG5vdmVsYS5nZW5lcm8gPT09IHNlbGVjdGVkR2VucmU7XG4gICAgICBjb25zdCBtYXRjaGVzWWVhciA9IHNlbGVjdGVkWWVhciA9PT0gJycgfHwgbm92ZWxhLmHDsW8udG9TdHJpbmcoKSA9PT0gc2VsZWN0ZWRZZWFyO1xuICAgICAgY29uc3QgbWF0Y2hlc0NvdW50cnkgPSBzZWxlY3RlZENvdW50cnkgPT09ICcnIHx8IG5vdmVsYS5wYWlzID09PSBzZWxlY3RlZENvdW50cnk7XG4gICAgICBjb25zdCBtYXRjaGVzU3RhdHVzID0gc2VsZWN0ZWRTdGF0dXMgPT09ICcnIHx8IG5vdmVsYS5lc3RhZG8gPT09IHNlbGVjdGVkU3RhdHVzO1xuICAgICAgXG4gICAgICByZXR1cm4gbWF0Y2hlc1NlYXJjaCAmJiBtYXRjaGVzR2VucmUgJiYgbWF0Y2hlc1llYXIgJiYgbWF0Y2hlc0NvdW50cnkgJiYgbWF0Y2hlc1N0YXR1cztcbiAgICB9KTtcblxuICAgIGZpbHRlcmVkLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGxldCBjb21wYXJpc29uID0gMDtcbiAgICAgIFxuICAgICAgc3dpdGNoIChzb3J0QnkpIHtcbiAgICAgICAgY2FzZSAndGl0dWxvJzpcbiAgICAgICAgICBjb21wYXJpc29uID0gYS50aXR1bG8ubG9jYWxlQ29tcGFyZShiLnRpdHVsbyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2HDsW8nOlxuICAgICAgICAgIGNvbXBhcmlzb24gPSBhLmHDsW8gLSBiLmHDsW87XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NhcGl0dWxvcyc6XG4gICAgICAgICAgY29tcGFyaXNvbiA9IGEuY2FwaXR1bG9zIC0gYi5jYXBpdHVsb3M7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BhaXMnOlxuICAgICAgICAgIGNvbXBhcmlzb24gPSBhLnBhaXMubG9jYWxlQ29tcGFyZShiLnBhaXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gc29ydE9yZGVyID09PSAnYXNjJyA/IGNvbXBhcmlzb24gOiAtY29tcGFyaXNvbjtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJlZE5vdmVsYXMgPSBnZXRGaWx0ZXJlZE5vdmVsYXMoKTtcblxuICBjb25zdCBoYW5kbGVOb3ZlbENsaWNrID0gKG5vdmVsYUlkOiBudW1iZXIpID0+IHtcbiAgICAvLyBOYXZpZ2F0ZSB0byBub3ZlbCBkZXRhaWwgcGFnZVxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9ub3ZlbC8ke25vdmVsYUlkfWA7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTm92ZWxUb2dnbGUgPSAobm92ZWxhSWQ6IG51bWJlcikgPT4ge1xuICAgIHNldFNlbGVjdGVkTm92ZWxhcyhwcmV2ID0+IHtcbiAgICAgIGlmIChwcmV2LmluY2x1ZGVzKG5vdmVsYUlkKSkge1xuICAgICAgICByZXR1cm4gcHJldi5maWx0ZXIoaWQgPT4gaWQgIT09IG5vdmVsYUlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbLi4ucHJldiwgbm92ZWxhSWRdO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBheW1lbnRUeXBlQ2hhbmdlID0gKG5vdmVsYUlkOiBudW1iZXIsIHBheW1lbnRUeXBlOiAnY2FzaCcgfCAndHJhbnNmZXInKSA9PiB7XG4gICAgc2V0Tm92ZWxhc1dpdGhQYXltZW50KHByZXYgPT4gXG4gICAgICBwcmV2Lm1hcChub3ZlbGEgPT4gXG4gICAgICAgIG5vdmVsYS5pZCA9PT0gbm92ZWxhSWQgXG4gICAgICAgICAgPyB7IC4uLm5vdmVsYSwgcGF5bWVudFR5cGUgfVxuICAgICAgICAgIDogbm92ZWxhXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RBbGxOb3ZlbGFzID0gKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkTm92ZWxhcyhmaWx0ZXJlZE5vdmVsYXMubWFwKG4gPT4gbi5pZCkpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyQWxsTm92ZWxhcyA9ICgpID0+IHtcbiAgICBzZXRTZWxlY3RlZE5vdmVsYXMoW10pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRmlsdGVycyA9ICgpID0+IHtcbiAgICBzZXRTZWFyY2hUZXJtKCcnKTtcbiAgICBzZXRTZWxlY3RlZEdlbnJlKCcnKTtcbiAgICBzZXRTZWxlY3RlZFllYXIoJycpO1xuICAgIHNldFNlbGVjdGVkQ291bnRyeSgnJyk7XG4gICAgc2V0U2VsZWN0ZWRTdGF0dXMoJycpO1xuICAgIHNldFNvcnRCeSgndGl0dWxvJyk7XG4gICAgc2V0U29ydE9yZGVyKCdhc2MnKTtcbiAgfTtcblxuICAvLyBDYWxjdWxhdGUgdG90YWxzIGJ5IHBheW1lbnQgdHlwZSB3aXRoIGN1cnJlbnQgcHJpY2luZ1xuICBjb25zdCBjYWxjdWxhdGVUb3RhbHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWROb3ZlbGFzRGF0YSA9IG5vdmVsYXNXaXRoUGF5bWVudC5maWx0ZXIobiA9PiBzZWxlY3RlZE5vdmVsYXMuaW5jbHVkZXMobi5pZCkpO1xuICAgIFxuICAgIGNvbnN0IGNhc2hOb3ZlbGFzID0gc2VsZWN0ZWROb3ZlbGFzRGF0YS5maWx0ZXIobiA9PiBuLnBheW1lbnRUeXBlID09PSAnY2FzaCcpO1xuICAgIGNvbnN0IHRyYW5zZmVyTm92ZWxhcyA9IHNlbGVjdGVkTm92ZWxhc0RhdGEuZmlsdGVyKG4gPT4gbi5wYXltZW50VHlwZSA9PT0gJ3RyYW5zZmVyJyk7XG4gICAgXG4gICAgY29uc3QgY2FzaFRvdGFsID0gY2FzaE5vdmVsYXMucmVkdWNlKChzdW0sIG4pID0+IHN1bSArIChuLmNhcGl0dWxvcyAqIG5vdmVsUHJpY2VQZXJDaGFwdGVyKSwgMCk7XG4gICAgY29uc3QgdHJhbnNmZXJCYXNlVG90YWwgPSB0cmFuc2Zlck5vdmVsYXMucmVkdWNlKChzdW0sIG4pID0+IHN1bSArIChuLmNhcGl0dWxvcyAqIG5vdmVsUHJpY2VQZXJDaGFwdGVyKSwgMCk7XG4gICAgY29uc3QgdHJhbnNmZXJGZWUgPSBNYXRoLnJvdW5kKHRyYW5zZmVyQmFzZVRvdGFsICogKHRyYW5zZmVyRmVlUGVyY2VudGFnZSAvIDEwMCkpO1xuICAgIGNvbnN0IHRyYW5zZmVyVG90YWwgPSB0cmFuc2ZlckJhc2VUb3RhbCArIHRyYW5zZmVyRmVlO1xuICAgIFxuICAgIGNvbnN0IGdyYW5kVG90YWwgPSBjYXNoVG90YWwgKyB0cmFuc2ZlclRvdGFsO1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICBjYXNoTm92ZWxhcyxcbiAgICAgIHRyYW5zZmVyTm92ZWxhcyxcbiAgICAgIGNhc2hUb3RhbCxcbiAgICAgIHRyYW5zZmVyQmFzZVRvdGFsLFxuICAgICAgdHJhbnNmZXJGZWUsXG4gICAgICB0cmFuc2ZlclRvdGFsLFxuICAgICAgZ3JhbmRUb3RhbCxcbiAgICAgIHRvdGFsQ2FwaXR1bG9zOiBzZWxlY3RlZE5vdmVsYXNEYXRhLnJlZHVjZSgoc3VtLCBuKSA9PiBzdW0gKyBuLmNhcGl0dWxvcywgMClcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHRvdGFscyA9IGNhbGN1bGF0ZVRvdGFscygpO1xuXG4gIGNvbnN0IGdlbmVyYXRlTm92ZWxMaXN0VGV4dCA9ICgpID0+IHtcbiAgICBsZXQgbGlzdFRleHQgPSBcIvCfk5ogQ0FUw4FMT0dPIERFIE5PVkVMQVMgRElTUE9OSUJMRVNcXG5cIjtcbiAgICBsaXN0VGV4dCArPSBcIlRWIGEgbGEgQ2FydGEgLSBOb3ZlbGFzIENvbXBsZXRhc1xcblxcblwiO1xuICAgIGxpc3RUZXh0ICs9IGDwn5KwIFByZWNpbzogJCR7bm92ZWxQcmljZVBlckNoYXB0ZXJ9IENVUCBwb3IgY2Fww610dWxvXFxuYDtcbiAgICBsaXN0VGV4dCArPSBg8J+SsyBSZWNhcmdvIHRyYW5zZmVyZW5jaWE6ICR7dHJhbnNmZXJGZWVQZXJjZW50YWdlfSVcXG5gO1xuICAgIGxpc3RUZXh0ICs9IFwi8J+TsSBDb250YWN0bzogKzUzNTQ2OTA4NzhcXG5cXG5cIjtcbiAgICBsaXN0VGV4dCArPSBcIuKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkFxcblxcblwiO1xuICAgIFxuICAgIGlmIChhbGxOb3ZlbGFzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgbGlzdFRleHQgKz0gXCLwn5OLIE5vIGhheSBub3ZlbGFzIGRpc3BvbmlibGVzIGVuIGVzdGUgbW9tZW50by5cXG5cIjtcbiAgICAgIGxpc3RUZXh0ICs9IFwiQ29udGFjdGEgY29uIGVsIGFkbWluaXN0cmFkb3IgcGFyYSBtw6FzIGluZm9ybWFjacOzbi5cXG5cXG5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdFRleHQgKz0gXCLwn5K1IFBSRUNJT1MgRU4gRUZFQ1RJVk86XFxuXCI7XG4gICAgICBsaXN0VGV4dCArPSBcIuKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkFxcblxcblwiO1xuICAgICAgXG4gICAgICBhbGxOb3ZlbGFzLmZvckVhY2goKG5vdmVsYSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgYmFzZUNvc3QgPSBub3ZlbGEuY2FwaXR1bG9zICogbm92ZWxQcmljZVBlckNoYXB0ZXI7XG4gICAgICAgIGxpc3RUZXh0ICs9IGAke2luZGV4ICsgMX0uICR7bm92ZWxhLnRpdHVsb31cXG5gO1xuICAgICAgICBsaXN0VGV4dCArPSBgICAg8J+TuiBHw6luZXJvOiAke25vdmVsYS5nZW5lcm99XFxuYDtcbiAgICAgICAgbGlzdFRleHQgKz0gYCAgIPCfjI0gUGHDrXM6ICR7bm92ZWxhLnBhaXN9XFxuYDtcbiAgICAgICAgbGlzdFRleHQgKz0gYCAgIPCfk4ogQ2Fww610dWxvczogJHtub3ZlbGEuY2FwaXR1bG9zfVxcbmA7XG4gICAgICAgIGxpc3RUZXh0ICs9IGAgICDwn5OFIEHDsW86ICR7bm92ZWxhLmHDsW99XFxuYDtcbiAgICAgICAgbGlzdFRleHQgKz0gYCAgIPCfk6EgRXN0YWRvOiAke25vdmVsYS5lc3RhZG8gPT09ICd0cmFuc21pc2lvbicgPyAnRW4gVHJhbnNtaXNpw7NuJyA6ICdGaW5hbGl6YWRhJ31cXG5gO1xuICAgICAgICBsaXN0VGV4dCArPSBgICAg8J+SsCBDb3N0byBlbiBlZmVjdGl2bzogJCR7YmFzZUNvc3QudG9Mb2NhbGVTdHJpbmcoKX0gQ1VQXFxuXFxuYDtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBsaXN0VGV4dCArPSBgXFxu8J+PpiBQUkVDSU9TIENPTiBUUkFOU0ZFUkVOQ0lBIEJBTkNBUklBICgrJHt0cmFuc2ZlckZlZVBlcmNlbnRhZ2V9JSk6XFxuYDtcbiAgICAgIGxpc3RUZXh0ICs9IFwi4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQXFxuXFxuXCI7XG4gICAgICBcbiAgICAgIGFsbE5vdmVsYXMuZm9yRWFjaCgobm92ZWxhLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBiYXNlQ29zdCA9IG5vdmVsYS5jYXBpdHVsb3MgKiBub3ZlbFByaWNlUGVyQ2hhcHRlcjtcbiAgICAgICAgY29uc3QgdHJhbnNmZXJDb3N0ID0gTWF0aC5yb3VuZChiYXNlQ29zdCAqICgxICsgdHJhbnNmZXJGZWVQZXJjZW50YWdlIC8gMTAwKSk7XG4gICAgICAgIGNvbnN0IHJlY2FyZ28gPSB0cmFuc2ZlckNvc3QgLSBiYXNlQ29zdDtcbiAgICAgICAgbGlzdFRleHQgKz0gYCR7aW5kZXggKyAxfS4gJHtub3ZlbGEudGl0dWxvfVxcbmA7XG4gICAgICAgIGxpc3RUZXh0ICs9IGAgICDwn5O6IEfDqW5lcm86ICR7bm92ZWxhLmdlbmVyb31cXG5gO1xuICAgICAgICBsaXN0VGV4dCArPSBgICAg8J+MjSBQYcOtczogJHtub3ZlbGEucGFpc31cXG5gO1xuICAgICAgICBsaXN0VGV4dCArPSBgICAg8J+TiiBDYXDDrXR1bG9zOiAke25vdmVsYS5jYXBpdHVsb3N9XFxuYDtcbiAgICAgICAgbGlzdFRleHQgKz0gYCAgIPCfk4UgQcOxbzogJHtub3ZlbGEuYcOxb31cXG5gO1xuICAgICAgICBsaXN0VGV4dCArPSBgICAg8J+ToSBFc3RhZG86ICR7bm92ZWxhLmVzdGFkbyA9PT0gJ3RyYW5zbWlzaW9uJyA/ICdFbiBUcmFuc21pc2nDs24nIDogJ0ZpbmFsaXphZGEnfVxcbmA7XG4gICAgICAgIGxpc3RUZXh0ICs9IGAgICDwn5KwIENvc3RvIGJhc2U6ICQke2Jhc2VDb3N0LnRvTG9jYWxlU3RyaW5nKCl9IENVUFxcbmA7XG4gICAgICAgIGxpc3RUZXh0ICs9IGAgICDwn5KzIFJlY2FyZ28gKCR7dHJhbnNmZXJGZWVQZXJjZW50YWdlfSUpOiArJCR7cmVjYXJnby50b0xvY2FsZVN0cmluZygpfSBDVVBcXG5gO1xuICAgICAgICBsaXN0VGV4dCArPSBgICAg8J+SsCBDb3N0byBjb24gdHJhbnNmZXJlbmNpYTogJCR7dHJhbnNmZXJDb3N0LnRvTG9jYWxlU3RyaW5nKCl9IENVUFxcblxcbmA7XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgbGlzdFRleHQgKz0gYFxcbvCfk4UgR2VuZXJhZG8gZWw6ICR7bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygnZXMtRVMnKX1gO1xuICAgIFxuICAgIHJldHVybiBsaXN0VGV4dDtcbiAgfTtcblxuICBjb25zdCBkb3dubG9hZE5vdmVsTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0VGV4dCA9IGdlbmVyYXRlTm92ZWxMaXN0VGV4dCgpO1xuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbbGlzdFRleHRdLCB7IHR5cGU6ICd0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgnIH0pO1xuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgbGluay5kb3dubG9hZCA9ICdDYXRhbG9nb19Ob3ZlbGFzX1RWX2FfbGFfQ2FydGEudHh0JztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgIGxpbmsuY2xpY2soKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xuICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGaW5hbGl6ZVBlZGlkbyA9ICgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWROb3ZlbGFzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYWxlcnQoJ1BvciBmYXZvciBzZWxlY2Npb25hIGFsIG1lbm9zIHVuYSBub3ZlbGEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0aXIgbm92ZWxhcyBzZWxlY2Npb25hZGFzIGEgTm92ZWxDYXJ0SXRlbVxuICAgIGNvbnN0IHNlbGVjdGVkTm92ZWxJdGVtczogTm92ZWxDYXJ0SXRlbVtdID0gbm92ZWxhc1dpdGhQYXltZW50XG4gICAgICAuZmlsdGVyKG5vdmVsYSA9PiBzZWxlY3RlZE5vdmVsYXMuaW5jbHVkZXMobm92ZWxhLmlkKSlcbiAgICAgIC5tYXAobm92ZWxhID0+ICh7XG4gICAgICAgIGlkOiBub3ZlbGEuaWQsXG4gICAgICAgIHRpdGxlOiBub3ZlbGEudGl0dWxvLFxuICAgICAgICB0eXBlOiAnbm92ZWwnIGFzIGNvbnN0LFxuICAgICAgICBnZW5yZTogbm92ZWxhLmdlbmVybyxcbiAgICAgICAgY2hhcHRlcnM6IG5vdmVsYS5jYXBpdHVsb3MsXG4gICAgICAgIHllYXI6IG5vdmVsYS5hw7FvLFxuICAgICAgICBkZXNjcmlwdGlvbjogbm92ZWxhLmRlc2NyaXBjaW9uLFxuICAgICAgICBjb3VudHJ5OiBub3ZlbGEucGFpcyxcbiAgICAgICAgc3RhdHVzOiBub3ZlbGEuZXN0YWRvLFxuICAgICAgICBpbWFnZTogbm92ZWxhLmltYWdlbixcbiAgICAgICAgcGF5bWVudFR5cGU6IG5vdmVsYS5wYXltZW50VHlwZSB8fCAnY2FzaCcsXG4gICAgICAgIHByaWNlUGVyQ2hhcHRlcjogbm92ZWxQcmljZVBlckNoYXB0ZXIsXG4gICAgICAgIHRvdGFsUHJpY2U6IG5vdmVsYS5wYXltZW50VHlwZSA9PT0gJ3RyYW5zZmVyJyBcbiAgICAgICAgICA/IE1hdGgucm91bmQoKG5vdmVsYS5jYXBpdHVsb3MgKiBub3ZlbFByaWNlUGVyQ2hhcHRlcikgKiAoMSArIHRyYW5zZmVyRmVlUGVyY2VudGFnZSAvIDEwMCkpXG4gICAgICAgICAgOiBub3ZlbGEuY2FwaXR1bG9zICogbm92ZWxQcmljZVBlckNoYXB0ZXJcbiAgICAgIH0pKTtcblxuICAgIC8vIEFncmVnYXIgbm92ZWxhcyBhbCBjYXJyaXRvXG4gICAgc2VsZWN0ZWROb3ZlbEl0ZW1zLmZvckVhY2gobm92ZWwgPT4ge1xuICAgICAgYWRkTm92ZWwobm92ZWwpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2VycmFyIG1vZGFsXG4gICAgb25DbG9zZSgpO1xuICAgIFxuICAgIC8vIE9wY2lvbmFsOiBjYWxsYmFjayBwYXJhIGlyIGRpcmVjdGFtZW50ZSBhbCBjaGVja291dFxuICAgIGlmIChvbkZpbmFsaXplUGVkaWRvKSB7XG4gICAgICBvbkZpbmFsaXplUGVkaWRvKHNlbGVjdGVkTm92ZWxJdGVtcyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNhbGwgPSAoKSA9PiB7XG4gICAgd2luZG93Lm9wZW4oYHRlbDoke3Bob25lTnVtYmVyfWAsICdfc2VsZicpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVdoYXRzQXBwID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBcIvCfk5ogKlNvbGljaXRhciBub3ZlbGFzKlxcblxcbsK/SGF5IG5vdmVsYXMgcXVlIG1lIGd1c3RhcsOtYSB2ZXIgZW4gW1RWIGEgbGEgQ2FydGFdIGEgY29udGludWFjacOzbiB0ZSBjb21lbnRvOlwiO1xuICAgIGNvbnN0IGVuY29kZWRNZXNzYWdlID0gZW5jb2RlVVJJQ29tcG9uZW50KG1lc3NhZ2UpO1xuICAgIGNvbnN0IHdoYXRzYXBwVXJsID0gYGh0dHBzOi8vd2EubWUvNTM1NDY5MDg3OD90ZXh0PSR7ZW5jb2RlZE1lc3NhZ2V9YDtcbiAgICB3aW5kb3cub3Blbih3aGF0c2FwcFVybCwgJ19ibGFuaycsICdub29wZW5lcixub3JlZmVycmVyJyk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Tm92ZWxJbWFnZSA9IChub3ZlbGE6IE5vdmVsYSkgPT4ge1xuICAgIGlmIChub3ZlbGEuaW1hZ2VuKSB7XG4gICAgICByZXR1cm4gbm92ZWxhLmltYWdlbjtcbiAgICB9XG4gICAgLy8gSW1hZ2VuIHBvciBkZWZlY3RvIGJhc2FkYSBlbiBlbCBnw6luZXJvXG4gICAgY29uc3QgZ2VucmVJbWFnZXMgPSB7XG4gICAgICAnRHJhbWEnOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDcwMDMyMTExNjktMGExZGQ3MjI4ZjJkP3c9MzAwJmg9NDAwJmZpdD1jcm9wJyxcbiAgICAgICdSb21hbmNlJzogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE4MTk5MjY2NzkxLTUzNzVhODMxOTBiNz93PTMwMCZoPTQwMCZmaXQ9Y3JvcCcsXG4gICAgICAnQWNjacOzbic6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4OTU5OTg0MzI1My1jNzZjYzRiY2I4Y2Y/dz0zMDAmaD00MDAmZml0PWNyb3AnLFxuICAgICAgJ0NvbWVkaWEnOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTM0NzUzODI1ODUtZDA2ZTU4YmNiMGUwP3c9MzAwJmg9NDAwJmZpdD1jcm9wJyxcbiAgICAgICdGYW1pbGlhJzogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTExODk1NDI2MzI4LWRjODcxNDE5MTMwMD93PTMwMCZoPTQwMCZmaXQ9Y3JvcCdcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiBnZW5yZUltYWdlc1tub3ZlbGEuZ2VuZXJvIGFzIGtleW9mIHR5cGVvZiBnZW5yZUltYWdlc10gfHwgXG4gICAgICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4MTYyNzgzNDg3Ni1iNzgzM2U4ZjU1NzA/dz0zMDAmaD00MDAmZml0PWNyb3AnO1xuICB9O1xuXG4gIGNvbnN0IGdldENvdW50cnlGbGFnID0gKGNvdW50cnk6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGZsYWdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICAgICAgJ1R1cnF1w61hJzogJ/Cfh7nwn4e3JyxcbiAgICAgICdDdWJhJzogJ/Cfh6jwn4e6JyxcbiAgICAgICdNw6l4aWNvJzogJ/Cfh7Lwn4e9JyxcbiAgICAgICdCcmFzaWwnOiAn8J+Hp/Cfh7cnLFxuICAgICAgJ0NvbG9tYmlhJzogJ/Cfh6jwn4e0JyxcbiAgICAgICdBcmdlbnRpbmEnOiAn8J+HpvCfh7cnLFxuICAgICAgJ0VzcGHDsWEnOiAn8J+HqvCfh7gnLFxuICAgICAgJ0VzdGFkb3MgVW5pZG9zJzogJ/Cfh7rwn4e4JyxcbiAgICAgICdDb3JlYSBkZWwgU3VyJzogJ/Cfh7Dwn4e3JyxcbiAgICAgICdJbmRpYSc6ICfwn4eu8J+HsycsXG4gICAgICAnUmVpbm8gVW5pZG8nOiAn8J+HrPCfh6cnLFxuICAgICAgJ0ZyYW5jaWEnOiAn8J+Hq/Cfh7cnLFxuICAgICAgJ0l0YWxpYSc6ICfwn4eu8J+HuScsXG4gICAgICAnQWxlbWFuaWEnOiAn8J+HqfCfh6onLFxuICAgICAgJ0phcMOzbic6ICfwn4ev8J+HtScsXG4gICAgICAnQ2hpbmEnOiAn8J+HqPCfh7MnLFxuICAgICAgJ1J1c2lhJzogJ/Cfh7fwn4e6JyxcbiAgICAgICdObyBlc3BlY2lmaWNhZG8nOiAn8J+MjSdcbiAgICB9O1xuICAgIHJldHVybiBmbGFnc1tjb3VudHJ5XSB8fCAn8J+MjSc7XG4gIH07XG5cbiAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrLzUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMiBzbTpwLTQgei01MFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCB3LWZ1bGwgbWF4LXctN3hsIG1heC1oLVs5NXZoXSBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LTJ4bCBhbmltYXRlLWluIGZhZGUtaW4gZHVyYXRpb24tMzAwXCI+XG4gICAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLXBpbmstNjAwIHRvLXB1cnBsZS02MDAgcC00IHNtOnAtNiB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZS8yMCBwLTMgcm91bmRlZC14bCBtci00IHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgICAgIDxCb29rT3BlbiBjbGFzc05hbWU9XCJoLTYgdy02IHNtOmgtOCBzbTp3LThcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBzbTp0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBmb250LWJvbGRcIj5DYXTDoWxvZ28gZGUgTm92ZWxhczwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBzbTp0ZXh0LWJhc2Ugb3BhY2l0eS05MFwiPk5vdmVsYXMgY29tcGxldGFzIGRpc3BvbmlibGVzPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgaG92ZXI6Ymctd2hpdGUvMjAgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy15LWF1dG8gbWF4LWgtW2NhbGMoOTV2aC0xMjBweCldXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgc206cC02XCI+XG5cbiAgICAgICAgICAgIHsvKiBDYXRhbG9nIG9wdGlvbnMgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Rvd25sb2FkTm92ZWxMaXN0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS01MDAgdG8tYmx1ZS02MDAgaG92ZXI6ZnJvbS1ibHVlLTYwMCBob3Zlcjp0by1ibHVlLTcwMCB0ZXh0LXdoaXRlIHAtNCBzbTpwLTYgcm91bmRlZC14bCBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGhvdmVyOnNoYWRvdy1sZyBmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS15LTIgc206c3BhY2UteS0wIHNtOnNwYWNlLXgtM1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlLzIwIHAtMyByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgIDxGaWxlVGV4dCBjbGFzc05hbWU9XCJoLTUgdy01IHNtOmgtNiBzbTp3LTZcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgc206dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gc206dGV4dC1sZyBmb250LWJvbGRcIj5EZXNjYXJnYXIgQ2F0w6Fsb2dvPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSBvcGFjaXR5LTkwXCI+TGlzdGEgY29tcGxldGEgZGUgbm92ZWxhczwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogU2hvdyBtZXNzYWdlIHdoZW4gbm8gbm92ZWxzIGF2YWlsYWJsZSAqL31cbiAgICAgICAgICAgIHthbGxOb3ZlbGFzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcteWVsbG93LTUwIGJvcmRlciBib3JkZXIteWVsbG93LTIwMCByb3VuZGVkLXhsIHAtNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxCb29rT3BlbiBjbGFzc05hbWU9XCJoLTEyIHctMTIgdGV4dC15ZWxsb3ctNjAwIG14LWF1dG8gbWItNFwiIC8+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXllbGxvdy04MDAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgTm8gaGF5IG5vdmVsYXMgZGlzcG9uaWJsZXNcbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteWVsbG93LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgRWwgY2F0w6Fsb2dvIGRlIG5vdmVsYXMgZXN0w6EgdmFjw61vLiBDb250YWN0YSBjb24gZWwgYWRtaW5pc3RyYWRvciBwYXJhIGFncmVnYXIgbm92ZWxhcyBhbCBzaXN0ZW1hLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7LyogTm92ZWxzIGxpc3QgKi99XG4gICAgICAgICAgICB7c2hvd05vdmVsTGlzdCAmJiBhbGxOb3ZlbGFzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIGJvcmRlci0yIGJvcmRlci1ncmF5LTIwMCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICB7LyogRW5oYW5jZWQgRmlsdGVycyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1wdXJwbGUtNTAgdG8tcGluay01MCBwLTMgc206cC02IGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYi00IHNtOm1iLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlciBjbGFzc05hbWU9XCJoLTUgdy01IHNtOmgtNiBzbTp3LTYgdGV4dC1wdXJwbGUtNjAwIG1yLTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHNtOnRleHQteGwgZm9udC1ib2xkIHRleHQtcHVycGxlLTkwMFwiPkZpbHRyb3MgZGUgQsO6c3F1ZWRhIEF2YW56YWRvczwvaDQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy01IGdhcC0zIHNtOmdhcC00IG1iLTQgc206bWItNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaCBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBoLTQgdy00IHNtOmgtNSBzbTp3LTUgdGV4dC1ncmF5LTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2NhciBwb3IgdMOtdHVsby4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcGwtMTAgc206cGwtMTIgcHItMyBzbTpwci00IHB5LTIgc206cHktMyB0ZXh0LXNtIHNtOnRleHQtYmFzZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQteGwgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXB1cnBsZS01MDAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50IGJnLXdoaXRlIHNoYWRvdy1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkR2VucmV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZEdlbnJlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBzbTpweC00IHB5LTIgc206cHktMyB0ZXh0LXNtIHNtOnRleHQtYmFzZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQteGwgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXB1cnBsZS01MDAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50IGJnLXdoaXRlIHNoYWRvdy1zbVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+VG9kb3MgbG9zIGfDqW5lcm9zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAge3VuaXF1ZUdlbnJlcy5tYXAoZ2VucmUgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2dlbnJlfSB2YWx1ZT17Z2VucmV9PntnZW5yZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkQ291bnRyeX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkQ291bnRyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgc206cHgtNCBweS0yIHNtOnB5LTMgdGV4dC1zbSBzbTp0ZXh0LWJhc2UgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLXhsIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wdXJwbGUtNTAwIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudCBiZy13aGl0ZSBzaGFkb3ctc21cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlRvZG9zIGxvcyBwYcOtc2VzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAge3VuaXF1ZUNvdW50cmllcy5tYXAoY291bnRyeSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Y291bnRyeX0gdmFsdWU9e2NvdW50cnl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0Q291bnRyeUZsYWcoY291bnRyeSl9IHtjb3VudHJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFN0YXR1c31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkU3RhdHVzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBzbTpweC00IHB5LTIgc206cHktMyB0ZXh0LXNtIHNtOnRleHQtYmFzZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQteGwgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXB1cnBsZS01MDAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50IGJnLXdoaXRlIHNoYWRvdy1zbVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+VG9kb3MgbG9zIGVzdGFkb3M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzT3B0aW9ucy5tYXAoc3RhdHVzID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtzdGF0dXMudmFsdWV9IHZhbHVlPXtzdGF0dXMudmFsdWV9PntzdGF0dXMubGFiZWx9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFllYXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZFllYXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHNtOnB4LTQgcHktMiBzbTpweS0zIHRleHQtc20gc206dGV4dC1iYXNlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC14bCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHVycGxlLTUwMCBmb2N1czpib3JkZXItdHJhbnNwYXJlbnQgYmctd2hpdGUgc2hhZG93LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Ub2RvcyBsb3MgYcOxb3M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICB7dW5pcXVlWWVhcnMubWFwKHllYXIgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3llYXJ9IHZhbHVlPXt5ZWFyfT57eWVhcn08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IHNtOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteS0zIHNtOnNwYWNlLXktMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1wdXJwbGUtNzAwIGJnLXdoaXRlLzYwIHB4LTQgcHktMiByb3VuZGVkLXhsIHRleHQtY2VudGVyIHNtOnRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TW9zdHJhbmRvIHtmaWx0ZXJlZE5vdmVsYXMubGVuZ3RofSBkZSB7YWxsTm92ZWxhcy5sZW5ndGh9IG5vdmVsYXM8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICB7KHNlYXJjaFRlcm0gfHwgc2VsZWN0ZWRHZW5yZSB8fCBzZWxlY3RlZFllYXIgfHwgc2VsZWN0ZWRDb3VudHJ5IHx8IHNlbGVjdGVkU3RhdHVzKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayBzbTppbmxpbmUgc206bWwtMiB0ZXh0LXB1cnBsZS02MDBcIj7igKIgRmlsdHJvcyBhY3Rpdm9zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgeyhzZWFyY2hUZXJtIHx8IHNlbGVjdGVkR2VucmUgfHwgc2VsZWN0ZWRZZWFyIHx8IHNlbGVjdGVkQ291bnRyeSB8fCBzZWxlY3RlZFN0YXR1cyB8fCBzb3J0QnkgIT09ICd0aXR1bG8nIHx8IHNvcnRPcmRlciAhPT0gJ2FzYycpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGVhckZpbHRlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc20gYmctcHVycGxlLTIwMCBob3ZlcjpiZy1wdXJwbGUtMzAwIHRleHQtcHVycGxlLTgwMCBweC0zIHNtOnB4LTQgcHktMiByb3VuZGVkLXhsIHRyYW5zaXRpb24tY29sb3JzIGZvbnQtbWVkaXVtIHctZnVsbCBzbTp3LWF1dG8gdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIExpbXBpYXIgZmlsdHJvc1xuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1wdXJwbGUtMTAwIHRvLXBpbmstMTAwIHAtMyBzbTpwLTYgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgc206aXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBzcGFjZS15LTQgc206c3BhY2UteS0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugc206dGV4dC14bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCB0ZXh0LWNlbnRlciBzbTp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBTZWxlY2Npb25hciBOb3ZlbGFzICh7c2VsZWN0ZWROb3ZlbGFzLmxlbmd0aH0gc2VsZWNjaW9uYWRhcylcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiBzbTpzcGFjZS14LTMganVzdGlmeS1jZW50ZXIgc206anVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZWxlY3RBbGxOb3ZlbGFzfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcHVycGxlLTUwMCBob3ZlcjpiZy1wdXJwbGUtNjAwIHRleHQtd2hpdGUgcHgtMyBzbTpweC00IHB5LTIgcm91bmRlZC14bCB0ZXh0LXhzIHNtOnRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnMgc2hhZG93LXNtIGZsZXgtMSBzbTpmbGV4LW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjY2lvbmFyIFRvZGFzXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xlYXJBbGxOb3ZlbGFzfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MDAgaG92ZXI6YmctZ3JheS02MDAgdGV4dC13aGl0ZSBweC0zIHNtOnB4LTQgcHktMiByb3VuZGVkLXhsIHRleHQteHMgc206dGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9ycyBzaGFkb3ctc20gZmxleC0xIHNtOmZsZXgtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRGVzZWxlY2Npb25hciBUb2Rhc1xuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIFRvdGFscyBzdW1tYXJ5ICovfVxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZE5vdmVsYXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi01MCB0by1ibHVlLTUwIHAtMyBzbTpwLTYgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYWxjdWxhdG9yIGNsYXNzTmFtZT1cImgtNSB3LTUgc206aC02IHNtOnctNiB0ZXh0LWdyZWVuLTYwMCBtci0zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1zbSBzbTp0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCI+UmVzdW1lbiBkZSBTZWxlY2Npw7NuPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTMgc206Z2FwLTQgbWItNCBzbTptYi02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIHAtMyBzbTpwLTQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWNlbnRlciBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBzbTp0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1wdXJwbGUtNjAwXCI+e3NlbGVjdGVkTm92ZWxhcy5sZW5ndGh9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSB0ZXh0LWdyYXktNjAwIGZvbnQtbWVkaXVtXCI+Tm92ZWxhczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBwLTMgc206cC00IGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1jZW50ZXIgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgc206dGV4dC0zeGwgZm9udC1ib2xkIHRleHQtYmx1ZS02MDBcIj57dG90YWxzLnRvdGFsQ2FwaXR1bG9zfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc20gdGV4dC1ncmF5LTYwMCBmb250LW1lZGl1bVwiPkNhcMOtdHVsb3M8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgcC0zIHNtOnAtNCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtY2VudGVyIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHNtOnRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLTYwMFwiPiR7dG90YWxzLmNhc2hUb3RhbC50b0xvY2FsZVN0cmluZygpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc20gdGV4dC1ncmF5LTYwMCBmb250LW1lZGl1bVwiPkVmZWN0aXZvPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIHAtMyBzbTpwLTQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWNlbnRlciBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBzbTp0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1vcmFuZ2UtNjAwXCI+JHt0b3RhbHMudHJhbnNmZXJUb3RhbC50b0xvY2FsZVN0cmluZygpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc20gdGV4dC1ncmF5LTYwMCBmb250LW1lZGl1bVwiPlRyYW5zZmVyZW5jaWE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi0xMDAgdG8tYmx1ZS0xMDAgcm91bmRlZC14bCBwLTMgc206cC02IGJvcmRlci0yIGJvcmRlci1ncmVlbi0zMDAgc2hhZG93LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgc3BhY2UteS0yIHNtOnNwYWNlLXktMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1iYXNlIHNtOnRleHQteGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj5UT1RBTCBBIFBBR0FSOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgc206dGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZ3JlZW4tNjAwXCI+JHt0b3RhbHMuZ3JhbmRUb3RhbC50b0xvY2FsZVN0cmluZygpfSBDVVA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAge3RvdGFscy50cmFuc2ZlckZlZSA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc20gdGV4dC1vcmFuZ2UtNjAwIG10LTIgZm9udC1tZWRpdW0gdGV4dC1jZW50ZXIgc206dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEluY2x1eWUgJHt0b3RhbHMudHJhbnNmZXJGZWUudG9Mb2NhbGVTdHJpbmcoKX0gQ1VQIGRlIHJlY2FyZ28gcG9yIHRyYW5zZmVyZW5jaWEgKHt0cmFuc2ZlckZlZVBlcmNlbnRhZ2V9JSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHsvKiBOZXRmbGl4LXN0eWxlIENhdGFsb2cgVmlldyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBzbTpwLTZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS04XCI+XG4gICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZE5vdmVsYXMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIE5vdmVsYXMgZW4gVHJhbnNtaXNpw7NuICovfVxuICAgICAgICAgICAgICAgICAgICAgICAge2ZpbHRlcmVkTm92ZWxhcy5maWx0ZXIobiA9PiBuLmVzdGFkbyA9PT0gJ3RyYW5zbWlzaW9uJykubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgc206dGV4dC14bCBmb250LWJvbGQgdGV4dC1yZWQtNjAwIG1iLTQgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXJlZC0xMDAgcC0yIHJvdW5kZWQtbGcgbXItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDwn5OhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3ZlbGFzIGVuIFRyYW5zbWlzacOzblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5ldGZsaXhOb3ZlbFNlY3Rpb24gbm92ZWxzPXtmaWx0ZXJlZE5vdmVsYXMuZmlsdGVyKG4gPT4gbi5lc3RhZG8gPT09ICd0cmFuc21pc2lvbicpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBOb3ZlbGFzIEZpbmFsaXphZGFzICovfVxuICAgICAgICAgICAgICAgICAgICAgICAge2ZpbHRlcmVkTm92ZWxhcy5maWx0ZXIobiA9PiBuLmVzdGFkbyA9PT0gJ2ZpbmFsaXphZGEnKS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBzbTp0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLTYwMCBtYi00IGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1ncmVlbi0xMDAgcC0yIHJvdW5kZWQtbGcgbXItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDinIVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdmVsYXMgRmluYWxpemFkYXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXRmbGl4Tm92ZWxTZWN0aW9uIG5vdmVscz17ZmlsdGVyZWROb3ZlbGFzLmZpbHRlcihuID0+IG4uZXN0YWRvID09PSAnZmluYWxpemFkYScpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgc206dGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBObyBzZSBlbmNvbnRyYXJvbiBub3ZlbGFzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBzbTp0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMCBtYi00IHNtOm1iLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTm8gaGF5IG5vdmVsYXMgcXVlIGNvaW5jaWRhbiBjb24gbG9zIGZpbHRyb3Mgc2VsZWNjaW9uYWRvcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xlYXJGaWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1wdXJwbGUtNTAwIGhvdmVyOmJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSBweC00IHNtOnB4LTYgcHktMiBzbTpweS0zIHJvdW5kZWQteGwgdGV4dC1zbSBzbTp0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnMgc2hhZG93LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTGltcGlhciBmaWx0cm9zXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge3NlbGVjdGVkTm92ZWxhcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLXB1cnBsZS01MCB0by1waW5rLTUwIHAtMyBzbTpwLTYgYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBzbTppdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXktNCBzbTpzcGFjZS15LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHNtOnRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBzbTp0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZE5vdmVsYXMubGVuZ3RofSBub3ZlbGFzIHNlbGVjY2lvbmFkYXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsOiAke3RvdGFscy5ncmFuZFRvdGFsLnRvTG9jYWxlU3RyaW5nKCl9IENVUFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUZpbmFsaXplUGVkaWRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkTm92ZWxhcy5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgc206dy1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04IHB5LTMgc206cHktNCByb3VuZGVkLTJ4bCB0ZXh0LXNtIHNtOnRleHQtYmFzZSBmb250LWJvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hhZG93LWxnICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTm92ZWxhcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyZWVuLTUwMCB0by1ncmVlbi02MDAgaG92ZXI6ZnJvbS1ncmVlbi02MDAgaG92ZXI6dG8tZ3JlZW4tNzAwIHRleHQtd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctZ3JheS0zMDAgdGV4dC1ncmF5LTUwMCBjdXJzb3Itbm90LWFsbG93ZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2hvcHBpbmdDYXJ0IGNsYXNzTmFtZT1cImgtNCB3LTQgc206aC01IHNtOnctNSBsZzpoLTYgbGc6dy02IG1yLTIgc206bXItM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5hbGl6YXIgUGVkaWRvXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJmaWxlIjoiL2hvbWUvcHJvamVjdC9zcmMvY29tcG9uZW50cy9Ob3ZlbGFzTW9kYWwudHN4In0=