import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Home.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=8e80e8f2"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/project/src/pages/Home.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=8e80e8f2"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=8e80e8f2";
import { Monitor, Filter, Calendar, Clock, Flame, Library, Clapperboard, Sparkles, Radio, CheckCircle2 } from "/node_modules/lucide-react/dist/esm/lucide-react.js?v=8e80e8f2";
import { tmdbService } from "/src/services/tmdb.ts";
import { useCart } from "/src/context/CartContext.tsx";
import { useAdmin } from "/src/context/AdminContext.tsx";
import { MovieCard } from "/src/components/MovieCard.tsx";
import { HeroCarousel } from "/src/components/HeroCarousel.tsx";
import { LoadingSpinner } from "/src/components/LoadingSpinner.tsx";
import { ErrorMessage } from "/src/components/ErrorMessage.tsx";
import { NovelasModal } from "/src/components/NovelasModal.tsx";
import { NetflixSection } from "/src/components/NetflixSection.tsx";
import { FloatingNav } from "/src/components/FloatingNav.tsx";
export function Home() {
  _s();
  const { state: adminState, addNotification } = useAdmin();
  const { getCurrentPrices } = useCart();
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTVShows, setPopularTVShows] = useState([]);
  const [popularAnime, setPopularAnime] = useState([]);
  const [trendingContent, setTrendingContent] = useState([]);
  const [novelTrendingContent, setNovelTrendingContent] = useState([]);
  const [heroItems, setHeroItems] = useState([]);
  const [trendingTimeWindow, setTrendingTimeWindow] = useState("day");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(/* @__PURE__ */ new Date());
  const [showNovelasModal, setShowNovelasModal] = useState(false);
  const currentPrices = getCurrentPrices();
  const timeWindowLabels = {
    day: "Hoy + Novelas en Transmisión",
    week: "Esta Semana + Novelas Finalizadas"
  };
  const fetchTrendingContent = async (timeWindow) => {
    try {
      const response = await tmdbService.getTrendingAll(timeWindow, 1);
      const uniqueContent = tmdbService.removeDuplicates(response.results);
      setTrendingContent(uniqueContent.slice(0, 12));
      const novelTrending = getNovelTrendingContent(timeWindow);
      setNovelTrendingContent(novelTrending);
      setLastUpdate(/* @__PURE__ */ new Date());
    } catch (err) {
      console.error("Error fetching trending content:", err);
    }
  };
  const getNovelTrendingContent = (timeWindow) => {
    const novels = adminState.novels || [];
    if (timeWindow === "day") {
      return novels.filter((novel) => novel.estado === "transmision").slice(0, 12);
    } else {
      return novels.filter((novel) => novel.estado === "finalizada").slice(0, 10);
    }
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
      "Rusia": "🇷🇺"
    };
    return flags[country] || "🌍";
  };
  const fetchAllContent = async () => {
    try {
      setLoading(true);
      const heroContent = await tmdbService.getHeroContent();
      setHeroItems(heroContent);
      const trendingResponse = await tmdbService.getTrendingAll(trendingTimeWindow, 1);
      const uniqueTrending = tmdbService.removeDuplicates(trendingResponse.results);
      setTrendingContent(uniqueTrending.slice(0, 12));
      const usedIds = /* @__PURE__ */ new Set(
        [
          ...heroContent.map((item) => item.id),
          ...uniqueTrending.slice(0, 12).map((item) => item.id)
        ]
      );
      const [moviesRes, tvRes, animeRes, nowPlayingRes, airingTodayRes] = await Promise.all(
        [
          tmdbService.getPopularMovies(1),
          tmdbService.getPopularTVShows(1),
          tmdbService.getAnimeFromMultipleSources(1),
          tmdbService.getNowPlayingMovies(1),
          tmdbService.getAiringTodayTVShows(1)
        ]
      );
      const allMovies = [
        ...nowPlayingRes.results,
        ...moviesRes.results.filter((movie) => !nowPlayingRes.results.some((np) => np.id === movie.id))
      ];
      const allTVShows = [
        ...airingTodayRes.results,
        ...tvRes.results.filter((show) => !airingTodayRes.results.some((at) => at.id === show.id))
      ];
      const filteredMovies = allMovies.filter((movie) => !usedIds.has(movie.id)).slice(0, 8);
      const filteredTVShows = allTVShows.filter((show) => !usedIds.has(show.id)).slice(0, 8);
      const filteredAnime = animeRes.results.filter((anime) => !usedIds.has(anime.id)).slice(0, 8);
      setPopularMovies(filteredMovies);
      setPopularTVShows(filteredTVShows);
      setPopularAnime(filteredAnime);
      setLastUpdate(/* @__PURE__ */ new Date());
    } catch (err) {
      setError("Error al cargar el contenido. Por favor, intenta de nuevo.");
      console.error("Error fetching home data:", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAllContent();
  }, []);
  useEffect(() => {
    fetchTrendingContent(trendingTimeWindow);
  }, [trendingTimeWindow]);
  useEffect(() => {
    const now = /* @__PURE__ */ new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const timeUntilMidnight = tomorrow.getTime() - now.getTime();
    const midnightTimeout = setTimeout(() => {
      fetchAllContent();
      const dailyInterval = setInterval(() => {
        fetchAllContent();
      }, 24 * 60 * 60 * 1e3);
      return () => clearInterval(dailyInterval);
    }, timeUntilMidnight);
    const weeklyInterval = setInterval(() => {
      const currentDay = (/* @__PURE__ */ new Date()).getDay();
      if (currentDay === 0) {
        fetchAllContent();
      }
    }, 24 * 60 * 60 * 1e3);
    return () => {
      clearTimeout(midnightTimeout);
      clearInterval(weeklyInterval);
    };
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsxDEV(LoadingSpinner, {}, void 0, false, {
      fileName: "/home/project/src/pages/Home.tsx",
      lineNumber: 208,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/project/src/pages/Home.tsx",
      lineNumber: 207,
      columnNumber: 7
    }, this);
  }
  if (error) {
    return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsxDEV(ErrorMessage, { message: error }, void 0, false, {
      fileName: "/home/project/src/pages/Home.tsx",
      lineNumber: 216,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/project/src/pages/Home.tsx",
      lineNumber: 215,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxDEV(HeroCarousel, { items: heroItems }, void 0, false, {
      fileName: "/home/project/src/pages/Home.tsx",
      lineNumber: 224,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "bg-gradient-to-r from-blue-900 via-purple-900 to-pink-800 text-white py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl md:text-5xl font-bold mb-6", children: [
        "Descubre el Mundo del",
        /* @__PURE__ */ jsxDEV("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400", children: [
          " ",
          "Entretenimiento"
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 231,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/Home.tsx",
        lineNumber: 229,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90", children: "Explora miles de películas, animes, series ilimitadas y mucho más. Encuentra tus favoritos y agrégalos a tu carrito." }, void 0, false, {
        fileName: "/home/project/src/pages/Home.tsx",
        lineNumber: 235,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/movies",
            className: "bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center",
            children: [
              /* @__PURE__ */ jsxDEV(Clapperboard, { className: "mr-2 h-5 w-5" }, void 0, false, {
                fileName: "/home/project/src/pages/Home.tsx",
                lineNumber: 243,
                columnNumber: 15
              }, this),
              "Explorar Películas"
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 239,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/tv",
            className: "bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center",
            children: [
              /* @__PURE__ */ jsxDEV(Monitor, { className: "mr-2 h-5 w-5" }, void 0, false, {
                fileName: "/home/project/src/pages/Home.tsx",
                lineNumber: 250,
                columnNumber: 15
              }, this),
              "Ver Series"
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 246,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setShowNovelasModal(true),
            className: "bg-pink-600 hover:bg-pink-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center",
            children: [
              /* @__PURE__ */ jsxDEV(Library, { className: "mr-2 h-5 w-5" }, void 0, false, {
                fileName: "/home/project/src/pages/Home.tsx",
                lineNumber: 257,
                columnNumber: 15
              }, this),
              "Catálogo de Novelas"
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 253,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/Home.tsx",
        lineNumber: 238,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/pages/Home.tsx",
      lineNumber: 228,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/project/src/pages/Home.tsx",
      lineNumber: 227,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
      /* @__PURE__ */ jsxDEV("section", { id: "section-trending", className: "mb-12", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold text-gray-900 flex items-center", children: [
            /* @__PURE__ */ jsxDEV(Flame, { className: "mr-2 h-6 w-6 text-red-500" }, void 0, false, {
              fileName: "/home/project/src/pages/Home.tsx",
              lineNumber: 269,
              columnNumber: 15
            }, this),
            "En Tendencia"
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 268,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-1 bg-white rounded-lg p-1 shadow-sm border border-gray-200", children: [
            /* @__PURE__ */ jsxDEV(Filter, { className: "h-4 w-4 text-gray-500 ml-2" }, void 0, false, {
              fileName: "/home/project/src/pages/Home.tsx",
              lineNumber: 275,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium text-gray-700 px-2", children: "Período:" }, void 0, false, {
              fileName: "/home/project/src/pages/Home.tsx",
              lineNumber: 276,
              columnNumber: 15
            }, this),
            Object.entries(timeWindowLabels).map(
              ([key, label]) => /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => setTrendingTimeWindow(key),
                  className: `px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center ${trendingTimeWindow === key ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md transform scale-105" : "text-gray-600 hover:text-red-600 hover:bg-red-50"}`,
                  children: [
                    key === "day" ? /* @__PURE__ */ jsxDEV(Calendar, { className: "h-3 w-3 mr-1" }, void 0, false, {
                      fileName: "/home/project/src/pages/Home.tsx",
                      lineNumber: 287,
                      columnNumber: 36
                    }, this) : /* @__PURE__ */ jsxDEV(Clock, { className: "h-3 w-3 mr-1" }, void 0, false, {
                      fileName: "/home/project/src/pages/Home.tsx",
                      lineNumber: 287,
                      columnNumber: 76
                    }, this),
                    label
                  ]
                },
                key,
                true,
                {
                  fileName: "/home/project/src/pages/Home.tsx",
                  lineNumber: 278,
                  columnNumber: 15
                },
                this
              )
            )
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 274,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 267,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(
          NetflixSection,
          {
            title: "",
            showViewAll: false,
            children: trendingContent.map((item) => {
              const itemType = "title" in item ? "movie" : "tv";
              return /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0 w-64", children: /* @__PURE__ */ jsxDEV(MovieCard, { item, type: itemType }, void 0, false, {
                fileName: "/home/project/src/pages/Home.tsx",
                lineNumber: 303,
                columnNumber: 19
              }, this) }, `trending-${itemType}-${item.id}`, false, {
                fileName: "/home/project/src/pages/Home.tsx",
                lineNumber: 302,
                columnNumber: 17
              }, this);
            })
          },
          void 0,
          false,
          {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 295,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/Home.tsx",
        lineNumber: 266,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { id: "section-novelas-transmision", className: "mb-12", children: adminState.novels && adminState.novels.length > 0 ? /* @__PURE__ */ jsxDEV(Fragment, { children: adminState.novels.filter((novel) => novel.estado === "transmision").length > 0 ? /* @__PURE__ */ jsxDEV(
        NetflixSection,
        {
          title: "Novelas en Transmisión",
          icon: /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-r from-red-500 to-pink-500 p-2 rounded-xl shadow-lg", children: /* @__PURE__ */ jsxDEV(Radio, { className: "h-4 w-4 sm:h-5 sm:w-5 text-white" }, void 0, false, {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 321,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 320,
            columnNumber: 15
          }, this),
          showViewAll: true,
          onViewAllClick: () => setShowNovelasModal(true),
          children: adminState.novels.filter((novel) => novel.estado === "transmision").map(
            (novel) => /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: `/novel/${novel.id}`,
                className: "group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-red-300 flex-shrink-0 w-40 sm:w-44 md:w-48 lg:w-52",
                children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxDEV(
                      "img",
                      {
                        src: novel.imagen || (() => {
                          const genreImages = {
                            "Drama": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
                            "Romance": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300&h=400&fit=crop",
                            "Acción": "https://images.unsplash.com/photo-1489599843253-c76cc4bcb8cf?w=300&h=400&fit=crop",
                            "Comedia": "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=400&fit=crop",
                            "Familia": "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=400&fit=crop"
                          };
                          return genreImages[novel.genero] || "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop";
                        })(),
                        alt: novel.titulo,
                        className: "w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300",
                        onError: (e) => {
                          const target = e.target;
                          target.src = "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop";
                        }
                      },
                      void 0,
                      false,
                      {
                        fileName: "/home/project/src/pages/Home.tsx",
                        lineNumber: 336,
                        columnNumber: 29
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV("div", { className: "absolute top-2 left-2", children: /* @__PURE__ */ jsxDEV("span", { className: "bg-red-500 px-2 py-1 rounded-full text-xs font-bold text-white shadow-lg animate-pulse flex items-center", children: [
                      /* @__PURE__ */ jsxDEV(Radio, { className: "h-3 w-3 mr-1" }, void 0, false, {
                        fileName: "/home/project/src/pages/Home.tsx",
                        lineNumber: 356,
                        columnNumber: 33
                      }, this),
                      "EN VIVO"
                    ] }, void 0, true, {
                      fileName: "/home/project/src/pages/Home.tsx",
                      lineNumber: 355,
                      columnNumber: 31
                    }, this) }, void 0, false, {
                      fileName: "/home/project/src/pages/Home.tsx",
                      lineNumber: 354,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsxDEV("span", { className: "bg-black/60 text-white px-2 py-1 rounded-lg text-xs font-medium", children: getCountryFlag(novel.pais || "No especificado") }, void 0, false, {
                      fileName: "/home/project/src/pages/Home.tsx",
                      lineNumber: 361,
                      columnNumber: 31
                    }, this) }, void 0, false, {
                      fileName: "/home/project/src/pages/Home.tsx",
                      lineNumber: 360,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3", children: /* @__PURE__ */ jsxDEV("div", { className: "text-white text-xs", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxDEV("span", { className: "bg-white/20 px-2 py-1 rounded-full text-xs font-medium", children: novel.año }, void 0, false, {
                        fileName: "/home/project/src/pages/Home.tsx",
                        lineNumber: 368,
                        columnNumber: 35
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { className: "bg-red-500/80 px-2 py-1 rounded-full text-xs font-bold animate-pulse", children: [
                        novel.capitulos,
                        " cap."
                      ] }, void 0, true, {
                        fileName: "/home/project/src/pages/Home.tsx",
                        lineNumber: 371,
                        columnNumber: 35
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/home/project/src/pages/Home.tsx",
                      lineNumber: 367,
                      columnNumber: 33
                    }, this) }, void 0, false, {
                      fileName: "/home/project/src/pages/Home.tsx",
                      lineNumber: 366,
                      columnNumber: 31
                    }, this) }, void 0, false, {
                      fileName: "/home/project/src/pages/Home.tsx",
                      lineNumber: 365,
                      columnNumber: 29
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/home/project/src/pages/Home.tsx",
                    lineNumber: 335,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "p-3", children: [
                    /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-gray-900 text-xs sm:text-sm line-clamp-2 mb-2 group-hover:text-red-600 transition-colors leading-tight", children: novel.titulo }, void 0, false, {
                      fileName: "/home/project/src/pages/Home.tsx",
                      lineNumber: 379,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "text-center bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-2 border border-red-200", children: [
                      /* @__PURE__ */ jsxDEV("span", { className: "text-xs sm:text-sm font-bold text-red-600", children: [
                        "$",
                        (novel.capitulos * currentPrices.novelPricePerChapter).toLocaleString()
                      ] }, void 0, true, {
                        fileName: "/home/project/src/pages/Home.tsx",
                        lineNumber: 383,
                        columnNumber: 31
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-gray-500", children: [
                        novel.capitulos,
                        " cap."
                      ] }, void 0, true, {
                        fileName: "/home/project/src/pages/Home.tsx",
                        lineNumber: 386,
                        columnNumber: 31
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/home/project/src/pages/Home.tsx",
                      lineNumber: 382,
                      columnNumber: 29
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/home/project/src/pages/Home.tsx",
                    lineNumber: 378,
                    columnNumber: 27
                  }, this)
                ]
              },
              `novel-live-${novel.id}`,
              true,
              {
                fileName: "/home/project/src/pages/Home.tsx",
                lineNumber: 330,
                columnNumber: 15
              },
              this
            )
          )
        },
        void 0,
        false,
        {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 317,
          columnNumber: 13
        },
        this
      ) : /* @__PURE__ */ jsxDEV("div", { className: "bg-red-50 border border-red-200 rounded-xl p-8 text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-red-100 p-4 rounded-full w-fit mx-auto mb-4", children: /* @__PURE__ */ jsxDEV(Radio, { className: "h-8 w-8 text-red-500" }, void 0, false, {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 397,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 396,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold text-red-800 mb-2", children: "No hay novelas en transmisión" }, void 0, false, {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 399,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-red-600 mb-4", children: "Actualmente no hay novelas siendo transmitidas." }, void 0, false, {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 402,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setShowNovelasModal(true),
            className: "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors",
            children: "Ver catálogo completo"
          },
          void 0,
          false,
          {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 405,
            columnNumber: 19
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/Home.tsx",
        lineNumber: 395,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/project/src/pages/Home.tsx",
        lineNumber: 315,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-50 border border-gray-200 rounded-xl p-8 text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-100 p-4 rounded-full w-fit mx-auto mb-4", children: /* @__PURE__ */ jsxDEV(Library, { className: "h-8 w-8 text-gray-400" }, void 0, false, {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 417,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 416,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold text-gray-800 mb-2", children: "Catálogo de novelas no disponible" }, void 0, false, {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 419,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", children: "No se pudo cargar el catálogo de novelas." }, void 0, false, {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 422,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/Home.tsx",
        lineNumber: 415,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/project/src/pages/Home.tsx",
        lineNumber: 312,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { id: "section-novelas-finalizadas", className: "mb-12", children: adminState.novels && adminState.novels.length > 0 ? /* @__PURE__ */ jsxDEV(Fragment, { children: adminState.novels.filter((novel) => novel.estado === "finalizada").length > 0 ? /* @__PURE__ */ jsxDEV(
        NetflixSection,
        {
          title: "Novelas Finalizadas",
          icon: /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-xl shadow-lg", children: /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "h-4 w-4 sm:h-5 sm:w-5 text-white" }, void 0, false, {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 439,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 438,
            columnNumber: 15
          }, this),
          showViewAll: true,
          onViewAllClick: () => setShowNovelasModal(true),
          children: adminState.novels.filter((novel) => novel.estado === "finalizada").map(
            (novel) => /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: `/novel/${novel.id}`,
                className: "group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-green-300 flex-shrink-0 w-40 sm:w-44 md:w-48 lg:w-52",
                children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxDEV(
                      "img",
                      {
                        src: novel.imagen || (() => {
                          const genreImages = {
                            "Drama": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
                            "Romance": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300&h=400&fit=crop",
                            "Acción": "https://images.unsplash.com/photo-1489599843253-c76cc4bcb8cf?w=300&h=400&fit=crop",
                            "Comedia": "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=400&fit=crop",
                            "Familia": "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=400&fit=crop"
                          };
                          return genreImages[novel.genero] || "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop";
                        })(),
                        alt: novel.titulo,
                        className: "w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300",
                        onError: (e) => {
                          const target = e.target;
                          target.src = "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop";
                        }
                      },
                      void 0,
                      false,
                      {
                        fileName: "/home/project/src/pages/Home.tsx",
                        lineNumber: 454,
                        columnNumber: 29
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV("div", { className: "absolute top-2 left-2", children: /* @__PURE__ */ jsxDEV("span", { className: "bg-green-500 px-2 py-1 rounded-full text-xs font-bold text-white shadow-lg flex items-center", children: [
                      /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "h-3 w-3 mr-1" }, void 0, false, {
                        fileName: "/home/project/src/pages/Home.tsx",
                        lineNumber: 474,
                        columnNumber: 33
                      }, this),
                      "COMPLETA"
                    ] }, void 0, true, {
                      fileName: "/home/project/src/pages/Home.tsx",
                      lineNumber: 473,
                      columnNumber: 31
                    }, this) }, void 0, false, {
                      fileName: "/home/project/src/pages/Home.tsx",
                      lineNumber: 472,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsxDEV("span", { className: "bg-black/60 text-white px-2 py-1 rounded-lg text-xs font-medium", children: getCountryFlag(novel.pais || "No especificado") }, void 0, false, {
                      fileName: "/home/project/src/pages/Home.tsx",
                      lineNumber: 479,
                      columnNumber: 31
                    }, this) }, void 0, false, {
                      fileName: "/home/project/src/pages/Home.tsx",
                      lineNumber: 478,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3", children: /* @__PURE__ */ jsxDEV("div", { className: "text-white text-xs", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxDEV("span", { className: "bg-white/20 px-2 py-1 rounded-full text-xs font-medium", children: novel.año }, void 0, false, {
                        fileName: "/home/project/src/pages/Home.tsx",
                        lineNumber: 486,
                        columnNumber: 35
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { className: "bg-green-500/80 px-2 py-1 rounded-full text-xs font-bold", children: [
                        novel.capitulos,
                        " cap."
                      ] }, void 0, true, {
                        fileName: "/home/project/src/pages/Home.tsx",
                        lineNumber: 489,
                        columnNumber: 35
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/home/project/src/pages/Home.tsx",
                      lineNumber: 485,
                      columnNumber: 33
                    }, this) }, void 0, false, {
                      fileName: "/home/project/src/pages/Home.tsx",
                      lineNumber: 484,
                      columnNumber: 31
                    }, this) }, void 0, false, {
                      fileName: "/home/project/src/pages/Home.tsx",
                      lineNumber: 483,
                      columnNumber: 29
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/home/project/src/pages/Home.tsx",
                    lineNumber: 453,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "p-3", children: [
                    /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-gray-900 text-xs sm:text-sm line-clamp-2 mb-2 group-hover:text-green-600 transition-colors leading-tight", children: novel.titulo }, void 0, false, {
                      fileName: "/home/project/src/pages/Home.tsx",
                      lineNumber: 497,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-2 border border-green-200", children: [
                      /* @__PURE__ */ jsxDEV("span", { className: "text-xs sm:text-sm font-bold text-green-600", children: [
                        "$",
                        (novel.capitulos * currentPrices.novelPricePerChapter).toLocaleString()
                      ] }, void 0, true, {
                        fileName: "/home/project/src/pages/Home.tsx",
                        lineNumber: 501,
                        columnNumber: 31
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-gray-500", children: [
                        novel.capitulos,
                        " cap."
                      ] }, void 0, true, {
                        fileName: "/home/project/src/pages/Home.tsx",
                        lineNumber: 504,
                        columnNumber: 31
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/home/project/src/pages/Home.tsx",
                      lineNumber: 500,
                      columnNumber: 29
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/home/project/src/pages/Home.tsx",
                    lineNumber: 496,
                    columnNumber: 27
                  }, this)
                ]
              },
              `novel-finished-${novel.id}`,
              true,
              {
                fileName: "/home/project/src/pages/Home.tsx",
                lineNumber: 448,
                columnNumber: 15
              },
              this
            )
          )
        },
        void 0,
        false,
        {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 435,
          columnNumber: 13
        },
        this
      ) : /* @__PURE__ */ jsxDEV("div", { className: "bg-green-50 border border-green-200 rounded-xl p-8 text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-green-100 p-4 rounded-full w-fit mx-auto mb-4", children: /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "h-8 w-8 text-green-500" }, void 0, false, {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 515,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 514,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold text-green-800 mb-2", children: "No hay novelas finalizadas" }, void 0, false, {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 517,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-green-600 mb-4", children: "Actualmente no hay novelas finalizadas en el catálogo." }, void 0, false, {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 520,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setShowNovelasModal(true),
            className: "bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors",
            children: "Ver catálogo completo"
          },
          void 0,
          false,
          {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 523,
            columnNumber: 19
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/Home.tsx",
        lineNumber: 513,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/project/src/pages/Home.tsx",
        lineNumber: 433,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-50 border border-gray-200 rounded-xl p-8 text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-100 p-4 rounded-full w-fit mx-auto mb-4", children: /* @__PURE__ */ jsxDEV(Library, { className: "h-8 w-8 text-gray-400" }, void 0, false, {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 535,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 534,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold text-gray-800 mb-2", children: "Catálogo de novelas no disponible" }, void 0, false, {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 537,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", children: "No se pudo cargar el catálogo de novelas." }, void 0, false, {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 540,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/Home.tsx",
        lineNumber: 533,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/project/src/pages/Home.tsx",
        lineNumber: 430,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { id: "section-peliculas", className: "mb-12", children: /* @__PURE__ */ jsxDEV(
        NetflixSection,
        {
          title: "Películas Destacadas",
          icon: /* @__PURE__ */ jsxDEV(Clapperboard, { className: "h-6 w-6 text-blue-500" }, void 0, false, {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 551,
            columnNumber: 19
          }, this),
          showViewAll: true,
          onViewAllClick: () => window.location.href = "/movies",
          children: popularMovies.map(
            (movie) => /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0 w-64", children: /* @__PURE__ */ jsxDEV(MovieCard, { item: movie, type: "movie" }, void 0, false, {
              fileName: "/home/project/src/pages/Home.tsx",
              lineNumber: 557,
              columnNumber: 17
            }, this) }, movie.id, false, {
              fileName: "/home/project/src/pages/Home.tsx",
              lineNumber: 556,
              columnNumber: 13
            }, this)
          )
        },
        void 0,
        false,
        {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 549,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/home/project/src/pages/Home.tsx",
        lineNumber: 548,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { id: "section-series", className: "mb-12", children: /* @__PURE__ */ jsxDEV(
        NetflixSection,
        {
          title: "Series Destacadas",
          icon: /* @__PURE__ */ jsxDEV(Monitor, { className: "h-6 w-6 text-purple-500" }, void 0, false, {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 567,
            columnNumber: 19
          }, this),
          showViewAll: true,
          onViewAllClick: () => window.location.href = "/tv",
          children: popularTVShows.map(
            (show) => /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0 w-64", children: /* @__PURE__ */ jsxDEV(MovieCard, { item: show, type: "tv" }, void 0, false, {
              fileName: "/home/project/src/pages/Home.tsx",
              lineNumber: 573,
              columnNumber: 17
            }, this) }, show.id, false, {
              fileName: "/home/project/src/pages/Home.tsx",
              lineNumber: 572,
              columnNumber: 13
            }, this)
          )
        },
        void 0,
        false,
        {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 565,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/home/project/src/pages/Home.tsx",
        lineNumber: 564,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { id: "section-anime", className: "mb-12", children: /* @__PURE__ */ jsxDEV(
        NetflixSection,
        {
          title: "Anime Destacado",
          icon: /* @__PURE__ */ jsxDEV(Sparkles, { className: "h-6 w-6 text-pink-500" }, void 0, false, {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 583,
            columnNumber: 19
          }, this),
          showViewAll: true,
          onViewAllClick: () => window.location.href = "/anime",
          children: popularAnime.map(
            (anime) => /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0 w-64", children: /* @__PURE__ */ jsxDEV(MovieCard, { item: anime, type: "tv" }, void 0, false, {
              fileName: "/home/project/src/pages/Home.tsx",
              lineNumber: 589,
              columnNumber: 17
            }, this) }, anime.id, false, {
              fileName: "/home/project/src/pages/Home.tsx",
              lineNumber: 588,
              columnNumber: 13
            }, this)
          )
        },
        void 0,
        false,
        {
          fileName: "/home/project/src/pages/Home.tsx",
          lineNumber: 581,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/home/project/src/pages/Home.tsx",
        lineNumber: 580,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "hidden", children: /* @__PURE__ */ jsxDEV("p", { children: [
        "Última actualización: ",
        lastUpdate.toLocaleString()
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/Home.tsx",
        lineNumber: 597,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/project/src/pages/Home.tsx",
        lineNumber: 596,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/pages/Home.tsx",
      lineNumber: 264,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      NovelasModal,
      {
        isOpen: showNovelasModal,
        onClose: () => setShowNovelasModal(false)
      },
      void 0,
      false,
      {
        fileName: "/home/project/src/pages/Home.tsx",
        lineNumber: 602,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      FloatingNav,
      {
        sections: [
          { id: "section-trending", label: "En Tendencia", icon: /* @__PURE__ */ jsxDEV(Flame, { className: "h-5 w-5" }, void 0, false, {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 610,
            columnNumber: 64
          }, this) },
          { id: "section-novelas-transmision", label: "Novelas en Transmisión", icon: /* @__PURE__ */ jsxDEV(Radio, { className: "h-5 w-5" }, void 0, false, {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 611,
            columnNumber: 85
          }, this) },
          { id: "section-novelas-finalizadas", label: "Novelas Finalizadas", icon: /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "h-5 w-5" }, void 0, false, {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 612,
            columnNumber: 82
          }, this) },
          { id: "section-peliculas", label: "Películas Destacadas", icon: /* @__PURE__ */ jsxDEV(Clapperboard, { className: "h-5 w-5" }, void 0, false, {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 613,
            columnNumber: 73
          }, this) },
          { id: "section-series", label: "Series Destacadas", icon: /* @__PURE__ */ jsxDEV(Monitor, { className: "h-5 w-5" }, void 0, false, {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 614,
            columnNumber: 67
          }, this) },
          { id: "section-anime", label: "Anime Destacado", icon: /* @__PURE__ */ jsxDEV(Sparkles, { className: "h-5 w-5" }, void 0, false, {
            fileName: "/home/project/src/pages/Home.tsx",
            lineNumber: 615,
            columnNumber: 64
          }, this) }
        ]
      },
      void 0,
      false,
      {
        fileName: "/home/project/src/pages/Home.tsx",
        lineNumber: 608,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/home/project/src/pages/Home.tsx",
    lineNumber: 222,
    columnNumber: 5
  }, this);
}
_s(Home, "AsRJJBoZ6FJaG9iPbIIz4we6OCo=", false, function() {
  return [useAdmin, useCart];
});
_c = Home;
var _c;
$RefreshReg$(_c, "Home");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/pages/Home.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/pages/Home.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFDLGdCQUFhLFdBQVUsYUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUMsRUFBSTtBQUFBLFVBQ3JHLEVBQUU5RCxJQUFJLGtCQUFrQjRDLE9BQU8scUJBQXFCa0IsTUFBTSx1QkFBQyxXQUFRLFdBQVUsYUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBNEIsRUFBSTtBQUFBLFVBQzFGLEVBQUU5RCxJQUFJLGlCQUFpQjRDLE9BQU8sbUJBQW1Ca0IsTUFBTSx1QkFBQyxZQUFTLFdBQVUsYUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBNkIsRUFBSTtBQUFBLFFBQUM7QUFBQTtBQUFBLE1BUDdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVFJO0FBQUEsT0ExWU47QUFBQTtBQUFBO0FBQUE7QUFBQSxTQTRZQTtBQUVKO0FBQUMxSCxHQXZrQmVELE1BQUk7QUFBQSxVQUM2QlIsVUFDbEJELE9BQU87QUFBQTtBQUFBcUksS0FGdEI1SDtBQUFJLElBQUE0SDtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiTW9uaXRvciIsIkZpbHRlciIsIkNhbGVuZGFyIiwiQ2xvY2siLCJGbGFtZSIsIkxpYnJhcnkiLCJDbGFwcGVyYm9hcmQiLCJTcGFya2xlcyIsIlJhZGlvIiwiQ2hlY2tDaXJjbGUyIiwidG1kYlNlcnZpY2UiLCJ1c2VDYXJ0IiwidXNlQWRtaW4iLCJNb3ZpZUNhcmQiLCJIZXJvQ2Fyb3VzZWwiLCJMb2FkaW5nU3Bpbm5lciIsIkVycm9yTWVzc2FnZSIsIk5vdmVsYXNNb2RhbCIsIk5ldGZsaXhTZWN0aW9uIiwiRmxvYXRpbmdOYXYiLCJIb21lIiwiX3MiLCJzdGF0ZSIsImFkbWluU3RhdGUiLCJhZGROb3RpZmljYXRpb24iLCJnZXRDdXJyZW50UHJpY2VzIiwicG9wdWxhck1vdmllcyIsInNldFBvcHVsYXJNb3ZpZXMiLCJwb3B1bGFyVFZTaG93cyIsInNldFBvcHVsYXJUVlNob3dzIiwicG9wdWxhckFuaW1lIiwic2V0UG9wdWxhckFuaW1lIiwidHJlbmRpbmdDb250ZW50Iiwic2V0VHJlbmRpbmdDb250ZW50Iiwibm92ZWxUcmVuZGluZ0NvbnRlbnQiLCJzZXROb3ZlbFRyZW5kaW5nQ29udGVudCIsImhlcm9JdGVtcyIsInNldEhlcm9JdGVtcyIsInRyZW5kaW5nVGltZVdpbmRvdyIsInNldFRyZW5kaW5nVGltZVdpbmRvdyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImxhc3RVcGRhdGUiLCJzZXRMYXN0VXBkYXRlIiwiRGF0ZSIsInNob3dOb3ZlbGFzTW9kYWwiLCJzZXRTaG93Tm92ZWxhc01vZGFsIiwiY3VycmVudFByaWNlcyIsInRpbWVXaW5kb3dMYWJlbHMiLCJkYXkiLCJ3ZWVrIiwiZmV0Y2hUcmVuZGluZ0NvbnRlbnQiLCJ0aW1lV2luZG93IiwicmVzcG9uc2UiLCJnZXRUcmVuZGluZ0FsbCIsInVuaXF1ZUNvbnRlbnQiLCJyZW1vdmVEdXBsaWNhdGVzIiwicmVzdWx0cyIsInNsaWNlIiwibm92ZWxUcmVuZGluZyIsImdldE5vdmVsVHJlbmRpbmdDb250ZW50IiwiZXJyIiwiY29uc29sZSIsIm5vdmVscyIsImZpbHRlciIsIm5vdmVsIiwiZXN0YWRvIiwiZ2V0Q291bnRyeUZsYWciLCJjb3VudHJ5IiwiZmxhZ3MiLCJmZXRjaEFsbENvbnRlbnQiLCJoZXJvQ29udGVudCIsImdldEhlcm9Db250ZW50IiwidHJlbmRpbmdSZXNwb25zZSIsInVuaXF1ZVRyZW5kaW5nIiwidXNlZElkcyIsIlNldCIsIm1hcCIsIml0ZW0iLCJpZCIsIm1vdmllc1JlcyIsInR2UmVzIiwiYW5pbWVSZXMiLCJub3dQbGF5aW5nUmVzIiwiYWlyaW5nVG9kYXlSZXMiLCJQcm9taXNlIiwiYWxsIiwiZ2V0UG9wdWxhck1vdmllcyIsImdldFBvcHVsYXJUVlNob3dzIiwiZ2V0QW5pbWVGcm9tTXVsdGlwbGVTb3VyY2VzIiwiZ2V0Tm93UGxheWluZ01vdmllcyIsImdldEFpcmluZ1RvZGF5VFZTaG93cyIsImFsbE1vdmllcyIsIm1vdmllIiwic29tZSIsIm5wIiwiYWxsVFZTaG93cyIsInNob3ciLCJhdCIsImZpbHRlcmVkTW92aWVzIiwiaGFzIiwiZmlsdGVyZWRUVlNob3dzIiwiZmlsdGVyZWRBbmltZSIsImFuaW1lIiwibm93IiwidG9tb3Jyb3ciLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInNldEhvdXJzIiwidGltZVVudGlsTWlkbmlnaHQiLCJnZXRUaW1lIiwibWlkbmlnaHRUaW1lb3V0Iiwic2V0VGltZW91dCIsImRhaWx5SW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ3ZWVrbHlJbnRlcnZhbCIsImN1cnJlbnREYXkiLCJnZXREYXkiLCJjbGVhclRpbWVvdXQiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5IiwibGFiZWwiLCJpdGVtVHlwZSIsImxlbmd0aCIsImltYWdlbiIsImdlbnJlSW1hZ2VzIiwiZ2VuZXJvIiwidGl0dWxvIiwiZSIsInRhcmdldCIsInNyYyIsInBhaXMiLCJhw7FvIiwiY2FwaXR1bG9zIiwibm92ZWxQcmljZVBlckNoYXB0ZXIiLCJ0b0xvY2FsZVN0cmluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImljb24iLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJIb21lLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IENoZXZyb25SaWdodCwgVHJlbmRpbmdVcCwgU3RhciwgTW9uaXRvciwgRmlsdGVyLCBDYWxlbmRhciwgQ2xvY2ssIEZsYW1lLCBMaWJyYXJ5LCBQbGF5LCBDbGFwcGVyYm9hcmQsIFNwYXJrbGVzLCBSYWRpbywgQ2hlY2tDaXJjbGUyIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IHRtZGJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdG1kYic7XG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnLi4vY29udGV4dC9DYXJ0Q29udGV4dCc7XG5pbXBvcnQgeyB1c2VBZG1pbiB9IGZyb20gJy4uL2NvbnRleHQvQWRtaW5Db250ZXh0JztcbmltcG9ydCB7IE1vdmllQ2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvTW92aWVDYXJkJztcbmltcG9ydCB7IEhlcm9DYXJvdXNlbCB9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVyb0Nhcm91c2VsJztcbmltcG9ydCB7IExvYWRpbmdTcGlubmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nU3Bpbm5lcic7XG5pbXBvcnQgeyBFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZSc7XG5pbXBvcnQgeyBOb3ZlbGFzTW9kYWwgfSBmcm9tICcuLi9jb21wb25lbnRzL05vdmVsYXNNb2RhbCc7XG5pbXBvcnQgeyBOZXRmbGl4U2VjdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvTmV0ZmxpeFNlY3Rpb24nO1xuaW1wb3J0IHsgRmxvYXRpbmdOYXYgfSBmcm9tICcuLi9jb21wb25lbnRzL0Zsb2F0aW5nTmF2JztcbmltcG9ydCB0eXBlIHsgTW92aWUsIFRWU2hvdyB9IGZyb20gJy4uL3R5cGVzL21vdmllJztcblxudHlwZSBUcmVuZGluZ1RpbWVXaW5kb3cgPSAnZGF5JyB8ICd3ZWVrJztcblxuZXhwb3J0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgc3RhdGU6IGFkbWluU3RhdGUsIGFkZE5vdGlmaWNhdGlvbiB9ID0gdXNlQWRtaW4oKTtcbiAgY29uc3QgeyBnZXRDdXJyZW50UHJpY2VzIH0gPSB1c2VDYXJ0KCk7XG4gIGNvbnN0IFtwb3B1bGFyTW92aWVzLCBzZXRQb3B1bGFyTW92aWVzXSA9IHVzZVN0YXRlPE1vdmllW10+KFtdKTtcbiAgY29uc3QgW3BvcHVsYXJUVlNob3dzLCBzZXRQb3B1bGFyVFZTaG93c10gPSB1c2VTdGF0ZTxUVlNob3dbXT4oW10pO1xuICBjb25zdCBbcG9wdWxhckFuaW1lLCBzZXRQb3B1bGFyQW5pbWVdID0gdXNlU3RhdGU8VFZTaG93W10+KFtdKTtcbiAgY29uc3QgW3RyZW5kaW5nQ29udGVudCwgc2V0VHJlbmRpbmdDb250ZW50XSA9IHVzZVN0YXRlPChNb3ZpZSB8IFRWU2hvdylbXT4oW10pO1xuICBjb25zdCBbbm92ZWxUcmVuZGluZ0NvbnRlbnQsIHNldE5vdmVsVHJlbmRpbmdDb250ZW50XSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFtoZXJvSXRlbXMsIHNldEhlcm9JdGVtc10gPSB1c2VTdGF0ZTwoTW92aWUgfCBUVlNob3cpW10+KFtdKTtcbiAgY29uc3QgW3RyZW5kaW5nVGltZVdpbmRvdywgc2V0VHJlbmRpbmdUaW1lV2luZG93XSA9IHVzZVN0YXRlPFRyZW5kaW5nVGltZVdpbmRvdz4oJ2RheScpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2xhc3RVcGRhdGUsIHNldExhc3RVcGRhdGVdID0gdXNlU3RhdGU8RGF0ZT4obmV3IERhdGUoKSk7XG4gIGNvbnN0IFtzaG93Tm92ZWxhc01vZGFsLCBzZXRTaG93Tm92ZWxhc01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjdXJyZW50UHJpY2VzID0gZ2V0Q3VycmVudFByaWNlcygpO1xuICBjb25zdCB0aW1lV2luZG93TGFiZWxzID0ge1xuICAgIGRheTogJ0hveSArIE5vdmVsYXMgZW4gVHJhbnNtaXNpw7NuJyxcbiAgICB3ZWVrOiAnRXN0YSBTZW1hbmEgKyBOb3ZlbGFzIEZpbmFsaXphZGFzJ1xuICB9O1xuXG4gIGNvbnN0IGZldGNoVHJlbmRpbmdDb250ZW50ID0gYXN5bmMgKHRpbWVXaW5kb3c6IFRyZW5kaW5nVGltZVdpbmRvdykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRtZGJTZXJ2aWNlLmdldFRyZW5kaW5nQWxsKHRpbWVXaW5kb3csIDEpO1xuICAgICAgY29uc3QgdW5pcXVlQ29udGVudCA9IHRtZGJTZXJ2aWNlLnJlbW92ZUR1cGxpY2F0ZXMocmVzcG9uc2UucmVzdWx0cyk7XG4gICAgICBzZXRUcmVuZGluZ0NvbnRlbnQodW5pcXVlQ29udGVudC5zbGljZSgwLCAxMikpO1xuICAgICAgXG4gICAgICAvLyBBZGQgbm92ZWxzIHRvIHRyZW5kaW5nIGJhc2VkIG9uIHRpbWUgd2luZG93XG4gICAgICBjb25zdCBub3ZlbFRyZW5kaW5nID0gZ2V0Tm92ZWxUcmVuZGluZ0NvbnRlbnQodGltZVdpbmRvdyk7XG4gICAgICBzZXROb3ZlbFRyZW5kaW5nQ29udGVudChub3ZlbFRyZW5kaW5nKTtcbiAgICAgIFxuICAgICAgc2V0TGFzdFVwZGF0ZShuZXcgRGF0ZSgpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHRyZW5kaW5nIGNvbnRlbnQ6JywgZXJyKTtcbiAgICB9XG4gIH07XG4gIFxuICBjb25zdCBnZXROb3ZlbFRyZW5kaW5nQ29udGVudCA9ICh0aW1lV2luZG93OiBUcmVuZGluZ1RpbWVXaW5kb3cpOiBhbnlbXSA9PiB7XG4gICAgY29uc3Qgbm92ZWxzID0gYWRtaW5TdGF0ZS5ub3ZlbHMgfHwgW107XG4gICAgXG4gICAgaWYgKHRpbWVXaW5kb3cgPT09ICdkYXknKSB7XG4gICAgICAvLyBTaG93IG5vdmVscyBjdXJyZW50bHkgYWlyaW5nXG4gICAgICByZXR1cm4gbm92ZWxzLmZpbHRlcihub3ZlbCA9PiBub3ZlbC5lc3RhZG8gPT09ICd0cmFuc21pc2lvbicpLnNsaWNlKDAsIDEyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2hvdyByZWNlbnRseSBmaW5pc2hlZCBub3ZlbHNcbiAgICAgIHJldHVybiBub3ZlbHMuZmlsdGVyKG5vdmVsID0+IG5vdmVsLmVzdGFkbyA9PT0gJ2ZpbmFsaXphZGEnKS5zbGljZSgwLCAxMCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldENvdW50cnlGbGFnID0gKGNvdW50cnk6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGZsYWdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICAgICAgJ1R1cnF1w61hJzogJ/Cfh7nwn4e3JyxcbiAgICAgICdDdWJhJzogJ/Cfh6jwn4e6JyxcbiAgICAgICdNw6l4aWNvJzogJ/Cfh7Lwn4e9JyxcbiAgICAgICdCcmFzaWwnOiAn8J+Hp/Cfh7cnLFxuICAgICAgJ0NvbG9tYmlhJzogJ/Cfh6jwn4e0JyxcbiAgICAgICdBcmdlbnRpbmEnOiAn8J+HpvCfh7cnLFxuICAgICAgJ0VzcGHDsWEnOiAn8J+HqvCfh7gnLFxuICAgICAgJ0VzdGFkb3MgVW5pZG9zJzogJ/Cfh7rwn4e4JyxcbiAgICAgICdDb3JlYSBkZWwgU3VyJzogJ/Cfh7Dwn4e3JyxcbiAgICAgICdJbmRpYSc6ICfwn4eu8J+HsycsXG4gICAgICAnUmVpbm8gVW5pZG8nOiAn8J+HrPCfh6cnLFxuICAgICAgJ0ZyYW5jaWEnOiAn8J+Hq/Cfh7cnLFxuICAgICAgJ0l0YWxpYSc6ICfwn4eu8J+HuScsXG4gICAgICAnQWxlbWFuaWEnOiAn8J+HqfCfh6onLFxuICAgICAgJ0phcMOzbic6ICfwn4ev8J+HtScsXG4gICAgICAnQ2hpbmEnOiAn8J+HqPCfh7MnLFxuICAgICAgJ1J1c2lhJzogJ/Cfh7fwn4e6J1xuICAgIH07XG4gICAgcmV0dXJuIGZsYWdzW2NvdW50cnldIHx8ICfwn4yNJztcbiAgfTtcbiAgY29uc3QgZmV0Y2hBbGxDb250ZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgXG4gICAgICAvLyBHZXQgaGVybyBjb250ZW50IGZpcnN0IChubyBkdXBsaWNhdGVzKVxuICAgICAgY29uc3QgaGVyb0NvbnRlbnQgPSBhd2FpdCB0bWRiU2VydmljZS5nZXRIZXJvQ29udGVudCgpO1xuICAgICAgc2V0SGVyb0l0ZW1zKGhlcm9Db250ZW50KTtcbiAgICAgIFxuICAgICAgLy8gR2V0IHRyZW5kaW5nIGNvbnRlbnRcbiAgICAgIGNvbnN0IHRyZW5kaW5nUmVzcG9uc2UgPSBhd2FpdCB0bWRiU2VydmljZS5nZXRUcmVuZGluZ0FsbCh0cmVuZGluZ1RpbWVXaW5kb3csIDEpO1xuICAgICAgY29uc3QgdW5pcXVlVHJlbmRpbmcgPSB0bWRiU2VydmljZS5yZW1vdmVEdXBsaWNhdGVzKHRyZW5kaW5nUmVzcG9uc2UucmVzdWx0cyk7XG4gICAgICBzZXRUcmVuZGluZ0NvbnRlbnQodW5pcXVlVHJlbmRpbmcuc2xpY2UoMCwgMTIpKTtcbiAgICAgIFxuICAgICAgLy8gR2V0IG90aGVyIGNvbnRlbnQsIGV4Y2x1ZGluZyBpdGVtcyBhbHJlYWR5IGluIGhlcm8gYW5kIHRyZW5kaW5nXG4gICAgICBjb25zdCB1c2VkSWRzID0gbmV3IFNldChbXG4gICAgICAgIC4uLmhlcm9Db250ZW50Lm1hcChpdGVtID0+IGl0ZW0uaWQpLFxuICAgICAgICAuLi51bmlxdWVUcmVuZGluZy5zbGljZSgwLCAxMikubWFwKGl0ZW0gPT4gaXRlbS5pZClcbiAgICAgIF0pO1xuICAgICAgXG4gICAgICAvLyBHZXQgY29tcHJlaGVuc2l2ZSBjb250ZW50IGluY2x1ZGluZyBjdXJyZW50IHJlbGVhc2VzXG4gICAgICBjb25zdCBbbW92aWVzUmVzLCB0dlJlcywgYW5pbWVSZXMsIG5vd1BsYXlpbmdSZXMsIGFpcmluZ1RvZGF5UmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgdG1kYlNlcnZpY2UuZ2V0UG9wdWxhck1vdmllcygxKSxcbiAgICAgICAgdG1kYlNlcnZpY2UuZ2V0UG9wdWxhclRWU2hvd3MoMSksXG4gICAgICAgIHRtZGJTZXJ2aWNlLmdldEFuaW1lRnJvbU11bHRpcGxlU291cmNlcygxKSxcbiAgICAgICAgdG1kYlNlcnZpY2UuZ2V0Tm93UGxheWluZ01vdmllcygxKSxcbiAgICAgICAgdG1kYlNlcnZpY2UuZ2V0QWlyaW5nVG9kYXlUVlNob3dzKDEpXG4gICAgICBdKTtcblxuICAgICAgLy8gQ29tYmluZSBhbmQgZmlsdGVyIG91dCBkdXBsaWNhdGVzLCBwcmlvcml0aXppbmcgY3VycmVudCBjb250ZW50XG4gICAgICBjb25zdCBhbGxNb3ZpZXMgPSBbXG4gICAgICAgIC4uLm5vd1BsYXlpbmdSZXMucmVzdWx0cyxcbiAgICAgICAgLi4ubW92aWVzUmVzLnJlc3VsdHMuZmlsdGVyKG1vdmllID0+ICFub3dQbGF5aW5nUmVzLnJlc3VsdHMuc29tZShucCA9PiBucC5pZCA9PT0gbW92aWUuaWQpKVxuICAgICAgXTtcbiAgICAgIGNvbnN0IGFsbFRWU2hvd3MgPSBbXG4gICAgICAgIC4uLmFpcmluZ1RvZGF5UmVzLnJlc3VsdHMsXG4gICAgICAgIC4uLnR2UmVzLnJlc3VsdHMuZmlsdGVyKHNob3cgPT4gIWFpcmluZ1RvZGF5UmVzLnJlc3VsdHMuc29tZShhdCA9PiBhdC5pZCA9PT0gc2hvdy5pZCkpXG4gICAgICBdO1xuICAgICAgXG4gICAgICBjb25zdCBmaWx0ZXJlZE1vdmllcyA9IGFsbE1vdmllcy5maWx0ZXIobW92aWUgPT4gIXVzZWRJZHMuaGFzKG1vdmllLmlkKSkuc2xpY2UoMCwgOCk7XG4gICAgICBjb25zdCBmaWx0ZXJlZFRWU2hvd3MgPSBhbGxUVlNob3dzLmZpbHRlcihzaG93ID0+ICF1c2VkSWRzLmhhcyhzaG93LmlkKSkuc2xpY2UoMCwgOCk7XG4gICAgICBjb25zdCBmaWx0ZXJlZEFuaW1lID0gYW5pbWVSZXMucmVzdWx0cy5maWx0ZXIoYW5pbWUgPT4gIXVzZWRJZHMuaGFzKGFuaW1lLmlkKSkuc2xpY2UoMCwgOCk7XG5cbiAgICAgIHNldFBvcHVsYXJNb3ZpZXMoZmlsdGVyZWRNb3ZpZXMpO1xuICAgICAgc2V0UG9wdWxhclRWU2hvd3MoZmlsdGVyZWRUVlNob3dzKTtcbiAgICAgIHNldFBvcHVsYXJBbmltZShmaWx0ZXJlZEFuaW1lKTtcbiAgICAgIHNldExhc3RVcGRhdGUobmV3IERhdGUoKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcignRXJyb3IgYWwgY2FyZ2FyIGVsIGNvbnRlbmlkby4gUG9yIGZhdm9yLCBpbnRlbnRhIGRlIG51ZXZvLicpO1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaG9tZSBkYXRhOicsIGVycik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoQWxsQ29udGVudCgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFRyZW5kaW5nQ29udGVudCh0cmVuZGluZ1RpbWVXaW5kb3cpO1xuICB9LCBbdHJlbmRpbmdUaW1lV2luZG93XSk7XG5cbiAgLy8gQXV0by1yZWZyZXNoIGNvbnRlbnQgZGFpbHkgYW5kIHdlZWtseVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZShub3cpO1xuICAgIHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSk7XG4gICAgdG9tb3Jyb3cuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgXG4gICAgY29uc3QgdGltZVVudGlsTWlkbmlnaHQgPSB0b21vcnJvdy5nZXRUaW1lKCkgLSBub3cuZ2V0VGltZSgpO1xuICAgIFxuICAgIC8vIFNldCBpbml0aWFsIHRpbWVvdXQgZm9yIG1pZG5pZ2h0XG4gICAgY29uc3QgbWlkbmlnaHRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmZXRjaEFsbENvbnRlbnQoKTtcbiAgICAgIFxuICAgICAgLy8gVGhlbiBzZXQgZGFpbHkgaW50ZXJ2YWxcbiAgICAgIGNvbnN0IGRhaWx5SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGZldGNoQWxsQ29udGVudCgpO1xuICAgICAgfSwgMjQgKiA2MCAqIDYwICogMTAwMCk7IC8vIDI0IGhvdXJzXG4gICAgICBcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGRhaWx5SW50ZXJ2YWwpO1xuICAgIH0sIHRpbWVVbnRpbE1pZG5pZ2h0KTtcblxuICAgIC8vIFdlZWtseSByZWZyZXNoIG9uIFN1bmRheXNcbiAgICBjb25zdCB3ZWVrbHlJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnREYXkgPSBuZXcgRGF0ZSgpLmdldERheSgpO1xuICAgICAgaWYgKGN1cnJlbnREYXkgPT09IDApIHsgLy8gU3VuZGF5XG4gICAgICAgIGZldGNoQWxsQ29udGVudCgpO1xuICAgICAgfVxuICAgIH0sIDI0ICogNjAgKiA2MCAqIDEwMDApOyAvLyBDaGVjayBkYWlseSBmb3IgU3VuZGF5XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KG1pZG5pZ2h0VGltZW91dCk7XG4gICAgICBjbGVhckludGVydmFsKHdlZWtseUludGVydmFsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS01MFwiPlxuICAgICAgICA8TG9hZGluZ1NwaW5uZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS01MFwiPlxuICAgICAgICA8RXJyb3JNZXNzYWdlIG1lc3NhZ2U9e2Vycm9yfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS01MFwiPlxuICAgICAgey8qIEhlcm8gQ2Fyb3VzZWwgKi99XG4gICAgICA8SGVyb0Nhcm91c2VsIGl0ZW1zPXtoZXJvSXRlbXN9IC8+XG4gICAgICBcbiAgICAgIHsvKiBDYWxsIHRvIEFjdGlvbiBTZWN0aW9uICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtOTAwIHZpYS1wdXJwbGUtOTAwIHRvLXBpbmstODAwIHRleHQtd2hpdGUgcHktMTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTV4bCBmb250LWJvbGQgbWItNlwiPlxuICAgICAgICAgICAgRGVzY3VicmUgZWwgTXVuZG8gZGVsXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS00MDAgdG8tcGluay00MDBcIj5cbiAgICAgICAgICAgICAgeycgJ31FbnRyZXRlbmltaWVudG9cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC14bCBtYi04IG1heC13LTN4bCBteC1hdXRvIG9wYWNpdHktOTBcIj5cbiAgICAgICAgICAgIEV4cGxvcmEgbWlsZXMgZGUgcGVsw61jdWxhcywgYW5pbWVzLCBzZXJpZXMgaWxpbWl0YWRhcyB5IG11Y2hvIG3DoXMuIEVuY3VlbnRyYSB0dXMgZmF2b3JpdG9zIHkgYWdyw6lnYWxvcyBhIHR1IGNhcnJpdG8uXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBnYXAtNCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89XCIvbW92aWVzXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS02MDAgaG92ZXI6YmctYmx1ZS03MDAgcHgtOCBweS0zIHJvdW5kZWQtZnVsbCBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3ZlcjpzY2FsZS0xMDUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2xhcHBlcmJvYXJkIGNsYXNzTmFtZT1cIm1yLTIgaC01IHctNVwiIC8+XG4gICAgICAgICAgICAgIEV4cGxvcmFyIFBlbMOtY3VsYXNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPVwiL3R2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcHVycGxlLTYwMCBob3ZlcjpiZy1wdXJwbGUtNzAwIHB4LTggcHktMyByb3VuZGVkLWZ1bGwgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgaG92ZXI6c2NhbGUtMTA1IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1vbml0b3IgY2xhc3NOYW1lPVwibXItMiBoLTUgdy01XCIgLz5cbiAgICAgICAgICAgICAgVmVyIFNlcmllc1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Tm92ZWxhc01vZGFsKHRydWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1waW5rLTYwMCBob3ZlcjpiZy1waW5rLTcwMCBweC04IHB5LTMgcm91bmRlZC1mdWxsIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOnNjYWxlLTEwNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaWJyYXJ5IGNsYXNzTmFtZT1cIm1yLTIgaC01IHctNVwiIC8+XG4gICAgICAgICAgICAgIENhdMOhbG9nbyBkZSBOb3ZlbGFzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LTggcHktMTJcIj5cbiAgICAgICAgey8qIFRyZW5kaW5nIENvbnRlbnQgKi99XG4gICAgICAgIDxzZWN0aW9uIGlkPVwic2VjdGlvbi10cmVuZGluZ1wiIGNsYXNzTmFtZT1cIm1iLTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IHNtOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNiBzcGFjZS15LTQgc206c3BhY2UteS0wXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDAgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEZsYW1lIGNsYXNzTmFtZT1cIm1yLTIgaC02IHctNiB0ZXh0LXJlZC01MDBcIiAvPlxuICAgICAgICAgICAgICBFbiBUZW5kZW5jaWFcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHsvKiBUcmVuZGluZyBGaWx0ZXIgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMSBiZy13aGl0ZSByb3VuZGVkLWxnIHAtMSBzaGFkb3ctc20gYm9yZGVyIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgICA8RmlsdGVyIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1ncmF5LTUwMCBtbC0yXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIHB4LTJcIj5QZXLDrW9kbzo8L3NwYW4+XG4gICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyh0aW1lV2luZG93TGFiZWxzKS5tYXAoKFtrZXksIGxhYmVsXSkgPT4gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VHJlbmRpbmdUaW1lV2luZG93KGtleSBhcyBUcmVuZGluZ1RpbWVXaW5kb3cpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNCBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZmxleCBpdGVtcy1jZW50ZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgdHJlbmRpbmdUaW1lV2luZG93ID09PSBrZXlcbiAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1ncmFkaWVudC10by1yIGZyb20tcmVkLTUwMCB0by1waW5rLTUwMCB0ZXh0LXdoaXRlIHNoYWRvdy1tZCB0cmFuc2Zvcm0gc2NhbGUtMTA1J1xuICAgICAgICAgICAgICAgICAgICAgIDogJ3RleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1yZWQtNjAwIGhvdmVyOmJnLXJlZC01MCdcbiAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtrZXkgPT09ICdkYXknID8gPENhbGVuZGFyIGNsYXNzTmFtZT1cImgtMyB3LTMgbXItMVwiIC8+IDogPENsb2NrIGNsYXNzTmFtZT1cImgtMyB3LTMgbXItMVwiIC8+fVxuICAgICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBNb3ZpZXMgYW5kIFRWIFNob3dzIHdpdGggTmV0ZmxpeC1zdHlsZSBjYXJvdXNlbCAqL31cbiAgICAgICAgICA8TmV0ZmxpeFNlY3Rpb25cbiAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgIHNob3dWaWV3QWxsPXtmYWxzZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dHJlbmRpbmdDb250ZW50Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpdGVtVHlwZSA9ICd0aXRsZScgaW4gaXRlbSA/ICdtb3ZpZScgOiAndHYnO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgdHJlbmRpbmctJHtpdGVtVHlwZX0tJHtpdGVtLmlkfWB9IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgdy02NFwiPlxuICAgICAgICAgICAgICAgICAgPE1vdmllQ2FyZCBpdGVtPXtpdGVtfSB0eXBlPXtpdGVtVHlwZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvTmV0ZmxpeFNlY3Rpb24+XG4gICAgICAgICAgXG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogU2VjY2nDs24gRGVkaWNhZGE6IE5vdmVsYXMgZW4gVHJhbnNtaXNpw7NuIC0gRXN0aWxvIE5ldGZsaXggKi99XG4gICAgICAgIDxzZWN0aW9uIGlkPVwic2VjdGlvbi1ub3ZlbGFzLXRyYW5zbWlzaW9uXCIgY2xhc3NOYW1lPVwibWItMTJcIj5cblxuICAgICAgICAgIHthZG1pblN0YXRlLm5vdmVscyAmJiBhZG1pblN0YXRlLm5vdmVscy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAge2FkbWluU3RhdGUubm92ZWxzLmZpbHRlcihub3ZlbCA9PiBub3ZlbC5lc3RhZG8gPT09ICd0cmFuc21pc2lvbicpLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgPE5ldGZsaXhTZWN0aW9uXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIk5vdmVsYXMgZW4gVHJhbnNtaXNpw7NuXCJcbiAgICAgICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1yZWQtNTAwIHRvLXBpbmstNTAwIHAtMiByb3VuZGVkLXhsIHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyBjbGFzc05hbWU9XCJoLTQgdy00IHNtOmgtNSBzbTp3LTUgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgc2hvd1ZpZXdBbGw9e3RydWV9XG4gICAgICAgICAgICAgICAgICBvblZpZXdBbGxDbGljaz17KCkgPT4gc2V0U2hvd05vdmVsYXNNb2RhbCh0cnVlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7YWRtaW5TdGF0ZS5ub3ZlbHNcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihub3ZlbCA9PiBub3ZlbC5lc3RhZG8gPT09ICd0cmFuc21pc2lvbicpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKG5vdmVsKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL25vdmVsLyR7bm92ZWwuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YG5vdmVsLWxpdmUtJHtub3ZlbC5pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3ctc20gb3ZlcmZsb3ctaGlkZGVuIGhvdmVyOnNoYWRvdy1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIGhvdmVyOmJvcmRlci1yZWQtMzAwIGZsZXgtc2hyaW5rLTAgdy00MCBzbTp3LTQ0IG1kOnctNDggbGc6dy01MlwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtub3ZlbC5pbWFnZW4gfHwgKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2VucmVJbWFnZXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0RyYW1hJzogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA3MDAzMjExMTY5LTBhMWRkNzIyOGYyZD93PTMwMCZoPTQwMCZmaXQ9Y3JvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1JvbWFuY2UnOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTgxOTkyNjY3OTEtNTM3NWE4MzE5MGI3P3c9MzAwJmg9NDAwJmZpdD1jcm9wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWNjacOzbic6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4OTU5OTg0MzI1My1jNzZjYzRiY2I4Y2Y/dz0zMDAmaD00MDAmZml0PWNyb3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb21lZGlhJzogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTEzNDc1MzgyNTg1LWQwNmU1OGJjYjBlMD93PTMwMCZoPTQwMCZmaXQ9Y3JvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0ZhbWlsaWEnOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTE4OTU0MjYzMjgtZGM4NzE0MTkxMzAwP3c9MzAwJmg9NDAwJmZpdD1jcm9wJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2VucmVJbWFnZXNbbm92ZWwuZ2VuZXJvIGFzIGtleW9mIHR5cGVvZiBnZW5yZUltYWdlc10gfHwgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDgxNjI3ODM0ODc2LWI3ODMzZThmNTU3MD93PTMwMCZoPTQwMCZmaXQ9Y3JvcCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtub3ZlbC50aXR1bG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC01NiBzbTpoLTYwIG1kOmgtNjQgbGc6aC03MiBvYmplY3QtY292ZXIgZ3JvdXAtaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3JjID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDgxNjI3ODM0ODc2LWI3ODMzZThmNTU3MD93PTMwMCZoPTQwMCZmaXQ9Y3JvcCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMiBsZWZ0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgcHgtMiBweS0xIHJvdW5kZWQtZnVsbCB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHNoYWRvdy1sZyBhbmltYXRlLXB1bHNlIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyBjbGFzc05hbWU9XCJoLTMgdy0zIG1yLTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTiBWSVZPXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMiByaWdodC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1ibGFjay82MCB0ZXh0LXdoaXRlIHB4LTIgcHktMSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldENvdW50cnlGbGFnKG5vdmVsLnBhaXMgfHwgJ05vIGVzcGVjaWZpY2FkbycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWJsYWNrLzgwIHRvLXRyYW5zcGFyZW50IHAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy13aGl0ZS8yMCBweC0yIHB5LTEgcm91bmRlZC1mdWxsIHRleHQteHMgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub3ZlbC5hw7FvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1yZWQtNTAwLzgwIHB4LTIgcHktMSByb3VuZGVkLWZ1bGwgdGV4dC14cyBmb250LWJvbGQgYW5pbWF0ZS1wdWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vdmVsLmNhcGl0dWxvc30gY2FwLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIHRleHQteHMgc206dGV4dC1zbSBsaW5lLWNsYW1wLTIgbWItMiBncm91cC1ob3Zlcjp0ZXh0LXJlZC02MDAgdHJhbnNpdGlvbi1jb2xvcnMgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vdmVsLnRpdHVsb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JhZGllbnQtdG8tciBmcm9tLXJlZC01MCB0by1waW5rLTUwIHJvdW5kZWQtbGcgcC0yIGJvcmRlciBib3JkZXItcmVkLTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXJlZC02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHsobm92ZWwuY2FwaXR1bG9zICogY3VycmVudFByaWNlcy5ub3ZlbFByaWNlUGVyQ2hhcHRlcikudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub3ZlbC5jYXBpdHVsb3N9IGNhcC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvTmV0ZmxpeFNlY3Rpb24+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNTAgYm9yZGVyIGJvcmRlci1yZWQtMjAwIHJvdW5kZWQteGwgcC04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC0xMDAgcC00IHJvdW5kZWQtZnVsbCB3LWZpdCBteC1hdXRvIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvIGNsYXNzTmFtZT1cImgtOCB3LTggdGV4dC1yZWQtNTAwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXJlZC04MDAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICBObyBoYXkgbm92ZWxhcyBlbiB0cmFuc21pc2nDs25cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICBBY3R1YWxtZW50ZSBubyBoYXkgbm92ZWxhcyBzaWVuZG8gdHJhbnNtaXRpZGFzLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Tm92ZWxhc01vZGFsKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC02MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1sZyBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFZlciBjYXTDoWxvZ28gY29tcGxldG9cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQteGwgcC04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgcC00IHJvdW5kZWQtZnVsbCB3LWZpdCBteC1hdXRvIG1iLTRcIj5cbiAgICAgICAgICAgICAgICA8TGlicmFyeSBjbGFzc05hbWU9XCJoLTggdy04IHRleHQtZ3JheS00MDBcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktODAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICBDYXTDoWxvZ28gZGUgbm92ZWxhcyBubyBkaXNwb25pYmxlXG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICBObyBzZSBwdWRvIGNhcmdhciBlbCBjYXTDoWxvZ28gZGUgbm92ZWxhcy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBTZWNjacOzbiBEZWRpY2FkYTogTm92ZWxhcyBGaW5hbGl6YWRhcyAtIEVzdGlsbyBOZXRmbGl4ICovfVxuICAgICAgICA8c2VjdGlvbiBpZD1cInNlY3Rpb24tbm92ZWxhcy1maW5hbGl6YWRhc1wiIGNsYXNzTmFtZT1cIm1iLTEyXCI+XG5cbiAgICAgICAgICB7YWRtaW5TdGF0ZS5ub3ZlbHMgJiYgYWRtaW5TdGF0ZS5ub3ZlbHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIHthZG1pblN0YXRlLm5vdmVscy5maWx0ZXIobm92ZWwgPT4gbm92ZWwuZXN0YWRvID09PSAnZmluYWxpemFkYScpLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgPE5ldGZsaXhTZWN0aW9uXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIk5vdmVsYXMgRmluYWxpemFkYXNcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyZWVuLTUwMCB0by1lbWVyYWxkLTUwMCBwLTIgcm91bmRlZC14bCBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUyIGNsYXNzTmFtZT1cImgtNCB3LTQgc206aC01IHNtOnctNSB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBzaG93Vmlld0FsbD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIG9uVmlld0FsbENsaWNrPXsoKSA9PiBzZXRTaG93Tm92ZWxhc01vZGFsKHRydWUpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHthZG1pblN0YXRlLm5vdmVsc1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKG5vdmVsID0+IG5vdmVsLmVzdGFkbyA9PT0gJ2ZpbmFsaXphZGEnKVxuICAgICAgICAgICAgICAgICAgICAubWFwKChub3ZlbCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9ub3ZlbC8ke25vdmVsLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Bub3ZlbC1maW5pc2hlZC0ke25vdmVsLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1zbSBvdmVyZmxvdy1oaWRkZW4gaG92ZXI6c2hhZG93LWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGJvcmRlciBib3JkZXItZ3JheS0yMDAgaG92ZXI6Ym9yZGVyLWdyZWVuLTMwMCBmbGV4LXNocmluay0wIHctNDAgc206dy00NCBtZDp3LTQ4IGxnOnctNTJcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bm92ZWwuaW1hZ2VuIHx8ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdlbnJlSW1hZ2VzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEcmFtYSc6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwNzAwMzIxMTE2OS0wYTFkZDcyMjhmMmQ/dz0zMDAmaD00MDAmZml0PWNyb3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdSb21hbmNlJzogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE4MTk5MjY2NzkxLTUzNzVhODMxOTBiNz93PTMwMCZoPTQwMCZmaXQ9Y3JvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FjY2nDs24nOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0ODk1OTk4NDMyNTMtYzc2Y2M0YmNiOGNmP3c9MzAwJmg9NDAwJmZpdD1jcm9wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29tZWRpYSc6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxMzQ3NTM4MjU4NS1kMDZlNThiY2IwZTA/dz0zMDAmaD00MDAmZml0PWNyb3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdGYW1pbGlhJzogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTExODk1NDI2MzI4LWRjODcxNDE5MTMwMD93PTMwMCZoPTQwMCZmaXQ9Y3JvcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdlbnJlSW1hZ2VzW25vdmVsLmdlbmVybyBhcyBrZXlvZiB0eXBlb2YgZ2VucmVJbWFnZXNdIHx8ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4MTYyNzgzNDg3Ni1iNzgzM2U4ZjU1NzA/dz0zMDAmaD00MDAmZml0PWNyb3AnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17bm92ZWwudGl0dWxvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtNTYgc206aC02MCBtZDpoLTY0IGxnOmgtNzIgb2JqZWN0LWNvdmVyIGdyb3VwLWhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnNyYyA9ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4MTYyNzgzNDg3Ni1iNzgzM2U4ZjU1NzA/dz0zMDAmaD00MDAmZml0PWNyb3AnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgbGVmdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAgcHgtMiBweS0xIHJvdW5kZWQtZnVsbCB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHNoYWRvdy1sZyBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUyIGNsYXNzTmFtZT1cImgtMyB3LTMgbXItMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENPTVBMRVRBXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMiByaWdodC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1ibGFjay82MCB0ZXh0LXdoaXRlIHB4LTIgcHktMSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldENvdW50cnlGbGFnKG5vdmVsLnBhaXMgfHwgJ05vIGVzcGVjaWZpY2FkbycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWJsYWNrLzgwIHRvLXRyYW5zcGFyZW50IHAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy13aGl0ZS8yMCBweC0yIHB5LTEgcm91bmRlZC1mdWxsIHRleHQteHMgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub3ZlbC5hw7FvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAvODAgcHgtMiBweS0xIHJvdW5kZWQtZnVsbCB0ZXh0LXhzIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vdmVsLmNhcGl0dWxvc30gY2FwLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIHRleHQteHMgc206dGV4dC1zbSBsaW5lLWNsYW1wLTIgbWItMiBncm91cC1ob3Zlcjp0ZXh0LWdyZWVuLTYwMCB0cmFuc2l0aW9uLWNvbG9ycyBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm92ZWwudGl0dWxvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JlZW4tNTAgdG8tZW1lcmFsZC01MCByb3VuZGVkLWxnIHAtMiBib3JkZXIgYm9yZGVyLWdyZWVuLTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyhub3ZlbC5jYXBpdHVsb3MgKiBjdXJyZW50UHJpY2VzLm5vdmVsUHJpY2VQZXJDaGFwdGVyKS50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vdmVsLmNhcGl0dWxvc30gY2FwLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9OZXRmbGl4U2VjdGlvbj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwIGJvcmRlciBib3JkZXItZ3JlZW4tMjAwIHJvdW5kZWQteGwgcC04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZWVuLTEwMCBwLTQgcm91bmRlZC1mdWxsIHctZml0IG14LWF1dG8gbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUyIGNsYXNzTmFtZT1cImgtOCB3LTggdGV4dC1ncmVlbi01MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZ3JlZW4tODAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgTm8gaGF5IG5vdmVsYXMgZmluYWxpemFkYXNcbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTYwMCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIEFjdHVhbG1lbnRlIG5vIGhheSBub3ZlbGFzIGZpbmFsaXphZGFzIGVuIGVsIGNhdMOhbG9nby5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd05vdmVsYXNNb2RhbCh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTYwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLWxnIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgVmVyIGNhdMOhbG9nbyBjb21wbGV0b1xuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC14bCBwLTggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBwLTQgcm91bmRlZC1mdWxsIHctZml0IG14LWF1dG8gbWItNFwiPlxuICAgICAgICAgICAgICAgIDxMaWJyYXJ5IGNsYXNzTmFtZT1cImgtOCB3LTggdGV4dC1ncmF5LTQwMFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDAgbWItMlwiPlxuICAgICAgICAgICAgICAgIENhdMOhbG9nbyBkZSBub3ZlbGFzIG5vIGRpc3BvbmlibGVcbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgIE5vIHNlIHB1ZG8gY2FyZ2FyIGVsIGNhdMOhbG9nbyBkZSBub3ZlbGFzLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIFBvcHVsYXIgTW92aWVzICovfVxuICAgICAgICA8c2VjdGlvbiBpZD1cInNlY3Rpb24tcGVsaWN1bGFzXCIgY2xhc3NOYW1lPVwibWItMTJcIj5cbiAgICAgICAgICA8TmV0ZmxpeFNlY3Rpb25cbiAgICAgICAgICAgIHRpdGxlPVwiUGVsw61jdWxhcyBEZXN0YWNhZGFzXCJcbiAgICAgICAgICAgIGljb249ezxDbGFwcGVyYm9hcmQgY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LWJsdWUtNTAwXCIgLz59XG4gICAgICAgICAgICBzaG93Vmlld0FsbD17dHJ1ZX1cbiAgICAgICAgICAgIG9uVmlld0FsbENsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvbW92aWVzJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cG9wdWxhck1vdmllcy5tYXAoKG1vdmllKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXttb3ZpZS5pZH0gY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB3LTY0XCI+XG4gICAgICAgICAgICAgICAgPE1vdmllQ2FyZCBpdGVtPXttb3ZpZX0gdHlwZT1cIm1vdmllXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L05ldGZsaXhTZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIFBvcHVsYXIgVFYgU2hvd3MgKi99XG4gICAgICAgIDxzZWN0aW9uIGlkPVwic2VjdGlvbi1zZXJpZXNcIiBjbGFzc05hbWU9XCJtYi0xMlwiPlxuICAgICAgICAgIDxOZXRmbGl4U2VjdGlvblxuICAgICAgICAgICAgdGl0bGU9XCJTZXJpZXMgRGVzdGFjYWRhc1wiXG4gICAgICAgICAgICBpY29uPXs8TW9uaXRvciBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtcHVycGxlLTUwMFwiIC8+fVxuICAgICAgICAgICAgc2hvd1ZpZXdBbGw9e3RydWV9XG4gICAgICAgICAgICBvblZpZXdBbGxDbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3R2J31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cG9wdWxhclRWU2hvd3MubWFwKChzaG93KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtzaG93LmlkfSBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHctNjRcIj5cbiAgICAgICAgICAgICAgICA8TW92aWVDYXJkIGl0ZW09e3Nob3d9IHR5cGU9XCJ0dlwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9OZXRmbGl4U2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBQb3B1bGFyIEFuaW1lICovfVxuICAgICAgICA8c2VjdGlvbiBpZD1cInNlY3Rpb24tYW5pbWVcIiBjbGFzc05hbWU9XCJtYi0xMlwiPlxuICAgICAgICAgIDxOZXRmbGl4U2VjdGlvblxuICAgICAgICAgICAgdGl0bGU9XCJBbmltZSBEZXN0YWNhZG9cIlxuICAgICAgICAgICAgaWNvbj17PFNwYXJrbGVzIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC1waW5rLTUwMFwiIC8+fVxuICAgICAgICAgICAgc2hvd1ZpZXdBbGw9e3RydWV9XG4gICAgICAgICAgICBvblZpZXdBbGxDbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FuaW1lJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cG9wdWxhckFuaW1lLm1hcCgoYW5pbWUpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2FuaW1lLmlkfSBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHctNjRcIj5cbiAgICAgICAgICAgICAgICA8TW92aWVDYXJkIGl0ZW09e2FuaW1lfSB0eXBlPVwidHZcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvTmV0ZmxpeFNlY3Rpb24+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogTGFzdCBVcGRhdGUgSW5mbyAoSGlkZGVuIGZyb20gdXNlcnMpICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlblwiPlxuICAgICAgICAgIDxwPsOabHRpbWEgYWN0dWFsaXphY2nDs246IHtsYXN0VXBkYXRlLnRvTG9jYWxlU3RyaW5nKCl9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICB7LyogTW9kYWwgZGUgTm92ZWxhcyAqL31cbiAgICAgIDxOb3ZlbGFzTW9kYWxcbiAgICAgICAgaXNPcGVuPXtzaG93Tm92ZWxhc01vZGFsfVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93Tm92ZWxhc01vZGFsKGZhbHNlKX1cbiAgICAgIC8+XG5cbiAgICAgIHsvKiBGbG9hdGluZyBOYXZpZ2F0aW9uICovfVxuICAgICAgPEZsb2F0aW5nTmF2XG4gICAgICAgIHNlY3Rpb25zPXtbXG4gICAgICAgICAgeyBpZDogJ3NlY3Rpb24tdHJlbmRpbmcnLCBsYWJlbDogJ0VuIFRlbmRlbmNpYScsIGljb246IDxGbGFtZSBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz4gfSxcbiAgICAgICAgICB7IGlkOiAnc2VjdGlvbi1ub3ZlbGFzLXRyYW5zbWlzaW9uJywgbGFiZWw6ICdOb3ZlbGFzIGVuIFRyYW5zbWlzacOzbicsIGljb246IDxSYWRpbyBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz4gfSxcbiAgICAgICAgICB7IGlkOiAnc2VjdGlvbi1ub3ZlbGFzLWZpbmFsaXphZGFzJywgbGFiZWw6ICdOb3ZlbGFzIEZpbmFsaXphZGFzJywgaWNvbjogPENoZWNrQ2lyY2xlMiBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz4gfSxcbiAgICAgICAgICB7IGlkOiAnc2VjdGlvbi1wZWxpY3VsYXMnLCBsYWJlbDogJ1BlbMOtY3VsYXMgRGVzdGFjYWRhcycsIGljb246IDxDbGFwcGVyYm9hcmQgY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+IH0sXG4gICAgICAgICAgeyBpZDogJ3NlY3Rpb24tc2VyaWVzJywgbGFiZWw6ICdTZXJpZXMgRGVzdGFjYWRhcycsIGljb246IDxNb25pdG9yIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPiB9LFxuICAgICAgICAgIHsgaWQ6ICdzZWN0aW9uLWFuaW1lJywgbGFiZWw6ICdBbmltZSBEZXN0YWNhZG8nLCBpY29uOiA8U3BhcmtsZXMgY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+IH0sXG4gICAgICAgIF19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJmaWxlIjoiL2hvbWUvcHJvamVjdC9zcmMvcGFnZXMvSG9tZS50c3gifQ==