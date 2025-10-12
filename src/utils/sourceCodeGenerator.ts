import __vite__cjsImport0_jszip from "/node_modules/.vite/deps/jszip.js?v=8e80e8f2"; const JSZip = __vite__cjsImport0_jszip.__esModule ? __vite__cjsImport0_jszip.default : __vite__cjsImport0_jszip;
export async function generateCompleteSourceCode(systemConfig) {
  try {
    const zip = new JSZip();
    await generateAllSourceFiles(zip, systemConfig);
    const content = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(content);
    const link = document.createElement("a");
    link.href = url;
    link.download = `TV_a_la_Carta_Sistema_Completo_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error generating complete source code:", error);
    throw error;
  }
}
async function generateAllSourceFiles(zip, systemConfig) {
  zip.file("package.json", generatePackageJson());
  zip.file("vite.config.ts", generateViteConfig());
  zip.file("tailwind.config.js", generateTailwindConfig());
  zip.file("tsconfig.json", generateTsConfig());
  zip.file("tsconfig.app.json", generateTsConfigApp());
  zip.file("tsconfig.node.json", generateTsConfigNode());
  zip.file("postcss.config.js", generatePostcssConfig());
  zip.file("eslint.config.js", generateEslintConfig());
  zip.file("index.html", generateIndexHtml());
  zip.file("vercel.json", generateVercelConfig());
  zip.file("README.md", generateReadme(systemConfig));
  const publicFolder = zip.folder("public");
  if (publicFolder) {
    publicFolder.file("_redirects", generateNetlifyRedirects());
  }
  const srcFolder = zip.folder("src");
  if (srcFolder) {
    srcFolder.file("main.tsx", generateMainTsx());
    srcFolder.file("App.tsx", generateAppTsx());
    srcFolder.file("index.css", generateIndexCss());
    srcFolder.file("vite-env.d.ts", generateViteEnvDts());
    const componentsFolder = srcFolder.folder("components");
    if (componentsFolder) {
      componentsFolder.file("CheckoutModal.tsx", generateCheckoutModalWithEmbeddedConfig(systemConfig));
      componentsFolder.file("NovelasModal.tsx", generateNovelasModalWithEmbeddedConfig(systemConfig));
      componentsFolder.file("PriceCard.tsx", generatePriceCardWithEmbeddedConfig(systemConfig));
      componentsFolder.file("CartAnimation.tsx", generateCartAnimation());
      componentsFolder.file("CastSection.tsx", generateCastSection());
      componentsFolder.file("ErrorMessage.tsx", generateErrorMessage());
      componentsFolder.file("Header.tsx", generateHeader());
      componentsFolder.file("HeroCarousel.tsx", generateHeroCarousel());
      componentsFolder.file("LoadingSpinner.tsx", generateLoadingSpinner());
      componentsFolder.file("MovieCard.tsx", generateMovieCard());
      componentsFolder.file("OptimizedImage.tsx", generateOptimizedImage());
      componentsFolder.file("Toast.tsx", generateToast());
      componentsFolder.file("VideoPlayer.tsx", generateVideoPlayer());
    }
    const contextFolder = srcFolder.folder("context");
    if (contextFolder) {
      contextFolder.file("AdminContext.tsx", generateAdminContextWithEmbeddedConfig(systemConfig));
      contextFolder.file("CartContext.tsx", generateCartContextWithEmbeddedConfig(systemConfig));
    }
    const pagesFolder = srcFolder.folder("pages");
    if (pagesFolder) {
      pagesFolder.file("Home.tsx", generateHomePage());
      pagesFolder.file("Movies.tsx", generateMoviesPage());
      pagesFolder.file("TVShows.tsx", generateTVShowsPage());
      pagesFolder.file("Anime.tsx", generateAnimePage());
      pagesFolder.file("Search.tsx", generateSearchPage());
      pagesFolder.file("Cart.tsx", generateCartPage());
      pagesFolder.file("MovieDetail.tsx", generateMovieDetailPage());
      pagesFolder.file("TVDetail.tsx", generateTVDetailPage());
      pagesFolder.file("AdminPanel.tsx", generateAdminPanelPage());
    }
    const servicesFolder = srcFolder.folder("services");
    if (servicesFolder) {
      servicesFolder.file("api.ts", generateApiService());
      servicesFolder.file("tmdb.ts", generateTmdbService());
      servicesFolder.file("contentSync.ts", generateContentSyncService());
      servicesFolder.file("contentFilter.ts", generateContentFilterService());
    }
    const utilsFolder = srcFolder.folder("utils");
    if (utilsFolder) {
      utilsFolder.file("whatsapp.ts", generateWhatsappUtils());
      utilsFolder.file("performance.ts", generatePerformanceUtils());
      utilsFolder.file("errorHandler.ts", generateErrorHandlerUtils());
      utilsFolder.file("systemExport.ts", generateSystemExportUtils());
      utilsFolder.file("sourceCodeGenerator.ts", generateSourceCodeGeneratorUtils());
    }
    const hooksFolder = srcFolder.folder("hooks");
    if (hooksFolder) {
      hooksFolder.file("useOptimizedContent.ts", generateOptimizedContentHook());
      hooksFolder.file("usePerformance.ts", generatePerformanceHook());
      hooksFolder.file("useContentSync.ts", generateContentSyncHook());
    }
    const configFolder = srcFolder.folder("config");
    if (configFolder) {
      configFolder.file("api.ts", generateApiConfig());
    }
    const typesFolder = srcFolder.folder("types");
    if (typesFolder) {
      typesFolder.file("movie.ts", generateMovieTypes());
    }
  }
}
function generateCheckoutModalWithEmbeddedConfig(systemConfig) {
  const deliveryZones = JSON.stringify(systemConfig.deliveryZones, null, 2);
  const prices = JSON.stringify(systemConfig.prices, null, 2);
  return `import React, { useState, useEffect } from 'react';
import { X, MapPin, User, Phone, Home, CreditCard, DollarSign, MessageCircle, Calculator, Truck, ExternalLink } from 'lucide-react';

// ZONAS DE ENTREGA EMBEBIDAS - Generadas automáticamente
const EMBEDDED_DELIVERY_ZONES = ${deliveryZones};

// PRECIOS EMBEBIDOS
const EMBEDDED_PRICES = ${prices};

export interface CustomerInfo {
  fullName: string;
  phone: string;
  address: string;
}

export interface OrderData {
  orderId: string;
  customerInfo: CustomerInfo;
  deliveryZone: string;
  deliveryCost: number;
  items: any[];
  subtotal: number;
  transferFee: number;
  total: number;
  cashTotal?: number;
  transferTotal?: number;
  pickupLocation?: boolean;
  showLocationMap?: boolean;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: (orderData: OrderData) => void;
  items: Array<{
    id: number;
    title: string;
    price: number;
    quantity: number;
  }>;
  total: number;
}

export function CheckoutModal({ isOpen, onClose, onCheckout, items, total }: CheckoutModalProps) {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    fullName: '',
    phone: '',
    address: ''
  });
  const [selectedZone, setSelectedZone] = useState('');
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [pickupLocation, setPickupLocation] = useState(false);
  const [showLocationMap, setShowLocationMap] = useState(false);
  const [errors, setErrors] = useState<Partial<CustomerInfo>>({});

  // Use embedded delivery zones
  const deliveryZones = EMBEDDED_DELIVERY_ZONES;

  // Agregar opción de recogida en el local
  const pickupOption = {
    id: 'pickup',
    name: 'Recogida en TV a la Carta',
    cost: 0
  };

  const allDeliveryOptions = [pickupOption, ...deliveryZones];

  useEffect(() => {
    if (selectedZone === 'pickup') {
      setDeliveryCost(0);
      setPickupLocation(true);
    } else if (selectedZone) {
      const zone = deliveryZones.find(z => z.name === selectedZone);
      setDeliveryCost(zone ? zone.cost : 0);
      setPickupLocation(false);
    }
  }, [selectedZone, deliveryZones]);

  const validateForm = (): boolean => {
    const newErrors: Partial<CustomerInfo> = {};

    if (!customerInfo.fullName.trim()) {
      newErrors.fullName = 'El nombre completo es requerido';
    }

    if (!customerInfo.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!/^[+]?[0-9\\s\\-()]{8,}$/.test(customerInfo.phone)) {
      newErrors.phone = 'Formato de teléfono inválido';
    }

    if (!pickupLocation && !customerInfo.address.trim()) {
      newErrors.address = 'La dirección es requerida para entrega a domicilio';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    if (!selectedZone) {
      alert('Por favor selecciona una opción de entrega');
      return;
    }

    const orderId = \`TV-\${Date.now()}\`;
    const orderData: OrderData = {
      orderId,
      customerInfo,
      deliveryZone: selectedZone,
      deliveryCost,
      items,
      subtotal: total,
      transferFee: 0,
      total: total + deliveryCost,
      pickupLocation,
      showLocationMap
    };

    onCheckout(orderData);
  };

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const openLocationMap = () => {
    const mapUrl = 'https://www.google.com/maps/place/20%C2%B002\\'22.5%22N+75%C2%B050\\'58.8%22W/@20.0394604,-75.8495414,180m/data=!3m1!1e3!4m4!3m3!8m2!3d20.039585!4d-75.849663?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D';
    window.open(mapUrl, '_blank', 'noopener,noreferrer');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white/20 p-3 rounded-xl mr-4">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Finalizar Pedido</h2>
                <p className="text-blue-100">Completa tus datos para proceder</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Customer Information */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <User className="h-5 w-5 mr-2 text-blue-600" />
                Información Personal
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    value={customerInfo.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={\`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 \${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }\`}
                    placeholder="Ingresa tu nombre completo"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={\`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 \${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }\`}
                    placeholder="+53 5469 0878"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {!pickupLocation && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dirección Completa *
                    </label>
                    <textarea
                      value={customerInfo.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      rows={3}
                      className={\`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none \${
                        errors.address ? 'border-red-500' : 'border-gray-300'
                      }\`}
                      placeholder="Calle, número, entre calles, referencias..."
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Delivery Options */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-green-600" />
                Opciones de Entrega
              </h3>
              
              <div className="space-y-3">
                {allDeliveryOptions.map((option) => (
                  <label
                    key={option.id || option.name}
                    className={\`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors \${
                      selectedZone === (option.id === 'pickup' ? 'pickup' : option.name)
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-300 hover:border-green-300'
                    }\`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="deliveryOption"
                        value={option.id === 'pickup' ? 'pickup' : option.name}
                        checked={selectedZone === (option.id === 'pickup' ? 'pickup' : option.name)}
                        onChange={(e) => setSelectedZone(e.target.value)}
                        className="mr-3 h-4 w-4 text-green-600 focus:ring-green-500"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{option.name}</p>
                        {option.id === 'pickup' && (
                          <p className="text-sm text-gray-600">Reparto Nuevo Vista Alegre, Santiago de Cuba</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={\`font-semibold \${option.cost === 0 ? 'text-green-600' : 'text-green-600'}\`}>
                        {option.cost === 0 ? 'GRATIS' : \`$\${option.cost.toLocaleString()} CUP\`}
                      </p>
                    </div>
                  </label>
                ))}
              </div>

              {/* Location Map Option */}
              {pickupLocation && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-blue-900">Ubicación del Local</h4>
                      <p className="text-sm text-blue-700">Ver ubicación en Google Maps (opcional)</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={showLocationMap}
                          onChange={(e) => setShowLocationMap(e.target.checked)}
                          className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-blue-700">Incluir ubicación</span>
                      </label>
                      <button
                        type="button"
                        onClick={openLocationMap}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Ver Mapa
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {allDeliveryOptions.length === 1 && (
                <div className="text-center py-8">
                  <Truck className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Solo disponible recogida en el local
                  </h3>
                  <p className="text-gray-600">
                    Contacta con el administrador para configurar zonas de entrega adicionales.
                  </p>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Calculator className="h-5 w-5 mr-2 text-blue-600" />
                Resumen del Pedido
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal ({items.length} elementos)</span>
                  <span className="font-semibold">$\${total.toLocaleString()} CUP</span>
                </div>
                
                {selectedZone && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      {pickupLocation ? 'Recogida en local' : 'Entrega'}
                    </span>
                    <span className={\`font-semibold \${deliveryCost === 0 ? 'text-green-600' : ''}\`}>
                      {deliveryCost === 0 ? 'GRATIS' : \`$\${deliveryCost.toLocaleString()} CUP\`}
                    </span>
                  </div>
                )}
                
                <div className="border-t border-gray-300 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-xl font-bold text-blue-600">
                      $\${(total + deliveryCost).toLocaleString()} CUP
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!selectedZone}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center disabled:cursor-not-allowed"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Enviar Pedido por WhatsApp
            </button>
            
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Al enviar el pedido serás redirigido a WhatsApp para completar la transacción
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}`;
}
function generateNovelasModalWithEmbeddedConfig(systemConfig) {
  const novels = JSON.stringify(systemConfig.novels, null, 2);
  const prices = JSON.stringify(systemConfig.prices, null, 2);
  return `import React, { useState, useEffect } from 'react';
import { X, Download, MessageCircle, Phone, BookOpen, Info, Check, DollarSign, CreditCard, Calculator, Search, Filter, SortAsc, SortDesc, Smartphone } from 'lucide-react';

// CATÁLOGO DE NOVELAS EMBEBIDO - Generado automáticamente
const EMBEDDED_NOVELS = ${novels};

// PRECIOS EMBEBIDOS
const EMBEDDED_PRICES = ${prices};

interface Novela {
  id: number;
  titulo: string;
  genero: string;
  capitulos: number;
  año: number;
  descripcion?: string;
  paymentType?: 'cash' | 'transfer';
}

interface NovelasModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NovelasModal({ isOpen, onClose }: NovelasModalProps) {
  const [selectedNovelas, setSelectedNovelas] = useState<number[]>([]);
  const [novelasWithPayment, setNovelasWithPayment] = useState<Novela[]>([]);
  const [showNovelList, setShowNovelList] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [sortBy, setSortBy] = useState<'titulo' | 'año' | 'capitulos'>('titulo');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Get novels and prices from embedded configuration
  const adminNovels = EMBEDDED_NOVELS;
  const novelPricePerChapter = EMBEDDED_PRICES.novelPricePerChapter;
  const transferFeePercentage = EMBEDDED_PRICES.transferFeePercentage;
  
  // Base novels list
  const defaultNovelas: Novela[] = [];

  // Combine admin novels with default novels
  const allNovelas = [...defaultNovelas, ...adminNovels.map(novel => ({
    id: novel.id,
    titulo: novel.titulo,
    genero: novel.genero,
    capitulos: novel.capitulos,
    año: novel.año,
    descripcion: novel.descripcion
  }))];

  const phoneNumber = '+5354690878';

  // Get unique genres
  const uniqueGenres = [...new Set(allNovelas.map(novela => novela.genero))].sort();
  
  // Get unique years
  const uniqueYears = [...new Set(allNovelas.map(novela => novela.año))].sort((a, b) => b - a);

  // Initialize novels with default payment type
  useEffect(() => {
    const novelasWithDefaultPayment = allNovelas.map(novela => ({
      ...novela,
      paymentType: 'cash' as const
    }));
    setNovelasWithPayment(novelasWithDefaultPayment);
  }, []);

  // Filter novels function
  const getFilteredNovelas = () => {
    let filtered = novelasWithPayment.filter(novela => {
      const matchesSearch = novela.titulo.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre === '' || novela.genero === selectedGenre;
      const matchesYear = selectedYear === '' || novela.año.toString() === selectedYear;
      
      return matchesSearch && matchesGenre && matchesYear;
    });

    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'titulo':
          comparison = a.titulo.localeCompare(b.titulo);
          break;
        case 'año':
          comparison = a.año - b.año;
          break;
        case 'capitulos':
          comparison = a.capitulos - b.capitulos;
          break;
      }
      
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  };

  const filteredNovelas = getFilteredNovelas();

  const handleNovelToggle = (novelaId: number) => {
    setSelectedNovelas(prev => {
      if (prev.includes(novelaId)) {
        return prev.filter(id => id !== novelaId);
      } else {
        return [...prev, novelaId];
      }
    });
  };

  const handlePaymentTypeChange = (novelaId: number, paymentType: 'cash' | 'transfer') => {
    setNovelasWithPayment(prev => 
      prev.map(novela => 
        novela.id === novelaId 
          ? { ...novela, paymentType }
          : novela
      )
    );
  };

  const selectAllNovelas = () => {
    setSelectedNovelas(allNovelas.map(n => n.id));
  };

  const clearAllNovelas = () => {
    setSelectedNovelas([]);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedGenre('');
    setSelectedYear('');
    setSortBy('titulo');
    setSortOrder('asc');
  };

  // Calculate totals by payment type with embedded pricing
  const calculateTotals = () => {
    const selectedNovelasData = novelasWithPayment.filter(n => selectedNovelas.includes(n.id));
    
    const cashNovelas = selectedNovelasData.filter(n => n.paymentType === 'cash');
    const transferNovelas = selectedNovelasData.filter(n => n.paymentType === 'transfer');
    
    const cashTotal = cashNovelas.reduce((sum, n) => sum + (n.capitulos * novelPricePerChapter), 0);
    const transferBaseTotal = transferNovelas.reduce((sum, n) => sum + (n.capitulos * novelPricePerChapter), 0);
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
    let listText = "📚 CATÁLOGO DE NOVELAS DISPONIBLES\\n";
    listText += "TV a la Carta - Novelas Completas\\n\\n";
    listText += \`💰 Precio: $\${novelPricePerChapter} CUP por capítulo\\n\`;
    listText += \`💳 Recargo transferencia: \${transferFeePercentage}%\\n\`;
    listText += "📱 Contacto: +5354690878\\n\\n";
    listText += "═══════════════════════════════════\\n\\n";
    
    if (allNovelas.length === 0) {
      listText += "📋 No hay novelas disponibles en este momento.\\n";
      listText += "Contacta con el administrador para más información.\\n\\n";
    } else {
      listText += "💵 PRECIOS EN EFECTIVO:\\n";
      listText += "═══════════════════════════════════\\n\\n";
      
      allNovelas.forEach((novela, index) => {
        const baseCost = novela.capitulos * novelPricePerChapter;
        listText += \`\${index + 1}. \${novela.titulo}\\n\`;
        listText += \`   📺 Género: \${novela.genero}\\n\`;
        listText += \`   📊 Capítulos: \${novela.capitulos}\\n\`;
        listText += \`   📅 Año: \${novela.año}\\n\`;
        listText += \`   💰 Costo en efectivo: \${baseCost.toLocaleString()} CUP\\n\\n\`;
      });
      
      listText += \`\\n🏦 PRECIOS CON TRANSFERENCIA BANCARIA (+\${transferFeePercentage}%):\\n\`;
      listText += "═══════════════════════════════════\\n\\n";
      
      allNovelas.forEach((novela, index) => {
        const baseCost = novela.capitulos * novelPricePerChapter;
        const transferCost = Math.round(baseCost * (1 + transferFeePercentage / 100));
        const recargo = transferCost - baseCost;
        listText += \`\${index + 1}. \${novela.titulo}\\n\`;
        listText += \`   📺 Género: \${novela.genero}\\n\`;
        listText += \`   📊 Capítulos: \${novela.capitulos}\\n\`;
        listText += \`   📅 Año: \${novela.año}\\n\`;
        listText += \`   💰 Costo base: \${baseCost.toLocaleString()} CUP\\n\`;
        listText += \`   💳 Recargo (\${transferFeePercentage}%): +\${recargo.toLocaleString()} CUP\\n\`;
        listText += \`   💰 Costo con transferencia: \${transferCost.toLocaleString()} CUP\\n\\n\`;
      });
      
      listText += "\\n📊 RESUMEN DE COSTOS:\\n";
      listText += "═══════════════════════════════════\\n\\n";
      
      const totalCapitulos = allNovelas.reduce((sum, novela) => sum + novela.capitulos, 0);
      const totalEfectivo = allNovelas.reduce((sum, novela) => sum + (novela.capitulos * novelPricePerChapter), 0);
      const totalTransferencia = allNovelas.reduce((sum, novela) => sum + Math.round((novela.capitulos * novelPricePerChapter) * (1 + transferFeePercentage / 100)), 0);
      const totalRecargo = totalTransferencia - totalEfectivo;
      
      listText += \`📊 Total de novelas: \${allNovelas.length}\\n\`;
      listText += \`📊 Total de capítulos: \${totalCapitulos.toLocaleString()}\\n\\n\`;
      listText += \`💵 CATÁLOGO COMPLETO EN EFECTIVO:\\n\`;
      listText += \`   💰 Costo total: \${totalEfectivo.toLocaleString()} CUP\\n\\n\`;
      listText += \`🏦 CATÁLOGO COMPLETO CON TRANSFERENCIA:\\n\`;
      listText += \`   💰 Costo base: \${totalEfectivo.toLocaleString()} CUP\\n\`;
      listText += \`   💳 Recargo total (\${transferFeePercentage}%): +\${totalRecargo.toLocaleString()} CUP\\n\`;
      listText += \`   💰 Costo total con transferencia: \${totalTransferencia.toLocaleString()} CUP\\n\\n\`;
    }
    
    listText += "═══════════════════════════════════\\n";
    listText += "💡 INFORMACIÓN IMPORTANTE:\\n";
    listText += "• Los precios en efectivo no tienen recargo adicional\\n";
    listText += \`• Las transferencias bancarias tienen un \${transferFeePercentage}% de recargo\\n\`;
    listText += "• Puedes seleccionar novelas individuales o el catálogo completo\\n";
    listText += "• Todos los precios están en pesos cubanos (CUP)\\n\\n";
    listText += "📞 Para encargar, contacta al +5354690878\\n";
    listText += "🌟 ¡Disfruta de las mejores novelas!\\n";
    listText += \`\\n📅 Generado el: \${new Date().toLocaleString('es-ES')}\`;
    
    return listText;
  };

  const downloadNovelList = () => {
    const listText = generateNovelListText();
    const blob = new Blob([listText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Catalogo_Novelas_TV_a_la_Carta.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const sendSelectedNovelas = () => {
    if (selectedNovelas.length === 0) {
      alert('Por favor selecciona al menos una novela');
      return;
    }

    const { cashNovelas, transferNovelas, cashTotal, transferBaseTotal, transferFee, transferTotal, grandTotal, totalCapitulos } = totals;
    
    let message = "Me interesan los siguientes títulos:\\n\\n";
    
    // Cash novels
    if (cashNovelas.length > 0) {
      message += "💵 PAGO EN EFECTIVO:\\n";
      message += "═══════════════════════════════════\\n";
      cashNovelas.forEach((novela, index) => {
        message += \`\${index + 1}. \${novela.titulo}\\n\`;
        message += \`   📺 Género: \${novela.genero}\\n\`;
        message += \`   📊 Capítulos: \${novela.capitulos}\\n\`;
        message += \`   📅 Año: \${novela.año}\\n\`;
        message += \`   💰 Costo: $\${(novela.capitulos * novelPricePerChapter).toLocaleString()} CUP\\n\\n\`;
      });
      message += \`💰 Subtotal Efectivo: $\${cashTotal.toLocaleString()} CUP\\n\`;
      message += \`📊 Total capítulos: \${cashNovelas.reduce((sum, n) => sum + n.capitulos, 0)}\\n\\n\`;
    }
    
    // Transfer novels
    if (transferNovelas.length > 0) {
      message += \`🏦 PAGO POR TRANSFERENCIA BANCARIA (+\${transferFeePercentage}%):\\n\`;
      message += "═══════════════════════════════════\\n";
      transferNovelas.forEach((novela, index) => {
        const baseCost = novela.capitulos * novelPricePerChapter;
        const fee = Math.round(baseCost * (transferFeePercentage / 100));
        const totalCost = baseCost + fee;
        message += \`\${index + 1}. \${novela.titulo}\\n\`;
        message += \`   📺 Género: \${novela.genero}\\n\`;
        message += \`   📊 Capítulos: \${novela.capitulos}\\n\`;
        message += \`   📅 Año: \${novela.año}\\n\`;
        message += \`   💰 Costo base: $\${baseCost.toLocaleString()} CUP\\n\`;
        message += \`   💳 Recargo (\${transferFeePercentage}%): +$\${fee.toLocaleString()} CUP\\n\`;
        message += \`   💰 Costo total: $\${totalCost.toLocaleString()} CUP\\n\\n\`;
      });
      message += \`💰 Subtotal base transferencia: $\${transferBaseTotal.toLocaleString()} CUP\\n\`;
      message += \`💳 Recargo total (\${transferFeePercentage}%): +$\${transferFee.toLocaleString()} CUP\\n\`;
      message += \`💰 Subtotal Transferencia: $\${transferTotal.toLocaleString()} CUP\\n\`;
      message += \`📊 Total capítulos: \${transferNovelas.reduce((sum, n) => sum + n.capitulos, 0)}\\n\\n\`;
    }
    
    // Final summary
    message += "📊 RESUMEN FINAL:\\n";
    message += "═══════════════════════════════════\\n";
    message += \`• Total de novelas: \${selectedNovelas.length}\\n\`;
    message += \`• Total de capítulos: \${totalCapitulos}\\n\`;
    if (cashTotal > 0) {
      message += \`• Efectivo: $\${cashTotal.toLocaleString()} CUP (\${cashNovelas.length} novelas)\\n\`;
    }
    if (transferTotal > 0) {
      message += \`• Transferencia: $\${transferTotal.toLocaleString()} CUP (\${transferNovelas.length} novelas)\\n\`;
    }
    message += \`• TOTAL A PAGAR: $\${grandTotal.toLocaleString()} CUP\\n\\n\`;
    message += \`📱 Enviado desde TV a la Carta\\n\`;
    message += \`📅 Fecha: \${new Date().toLocaleString('es-ES')}\`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = \`https://wa.me/5354690878?text=\${encodedMessage}\`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCall = () => {
    window.open(\`tel:\${phoneNumber}\`, '_self');
  };

  const handleWhatsApp = () => {
    const message = "📚 *Solicitar novelas*\\n\\n¿Hay novelas que me gustaría ver en [TV a la Carta] a continuación te comento:";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = \`https://wa.me/5354690878?text=\${encodedMessage}\`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden shadow-2xl animate-in fade-in duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-4 sm:p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white/20 p-3 rounded-xl mr-4 shadow-lg">
                <BookOpen className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">Catálogo de Novelas</h2>
                <p className="text-sm sm:text-base opacity-90">Novelas completas disponibles</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(95vh-120px)]">
          <div className="p-4 sm:p-6">
            {/* Main Information */}
            <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-3xl p-8 mb-8 border-2 border-pink-200 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-2xl mr-4 shadow-lg">
                  <Info className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Información Importante
                </h3>
              </div>
              
              <div className="space-y-6 text-gray-800">
                <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-pink-200 shadow-sm">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-3 rounded-xl mr-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <p className="font-bold text-lg">Las novelas se encargan completas</p>
                </div>
                <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-green-200 shadow-sm">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-400 p-3 rounded-xl mr-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <p className="font-bold text-lg">Costo: $\${novelPricePerChapter} CUP por cada capítulo</p>
                </div>
                <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-orange-200 shadow-sm">
                  <div className="bg-gradient-to-r from-orange-400 to-red-400 p-3 rounded-xl mr-4">
                    <span className="text-2xl">💳</span>
                  </div>
                  <p className="font-bold text-lg">Transferencia bancaria: +{transferFeePercentage}% de recargo</p>
                </div>
                <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-blue-200 shadow-sm">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-400 p-3 rounded-xl mr-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <p className="font-bold text-lg">Para más información, contacta al número:</p>
                </div>
              </div>

              {/* Contact number */}
              <div className="mt-8 bg-gradient-to-r from-white to-blue-50 rounded-2xl p-6 border-2 border-blue-300 shadow-lg">
                <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                  <div className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start mb-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg mr-3">
                        <Smartphone className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-xl font-black text-gray-900">{phoneNumber}</p>
                    </div>
                    <p className="text-sm font-semibold text-blue-600 ml-10">Contacto directo</p>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button
                      onClick={handleCall}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Llamar
                    </button>
                    <button
                      onClick={handleWhatsApp}
                      className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Catalog options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <button
                onClick={downloadNovelList}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
              >
                <Download className="h-6 w-6 mr-3" />
                <div className="text-left">
                  <div className="text-lg">Descargar Catálogo</div>
                  <div className="text-sm opacity-90">Lista completa de novelas</div>
                </div>
              </button>
              
              <button
                onClick={() => setShowNovelList(!showNovelList)}
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
              >
                <BookOpen className="h-6 w-6 mr-3" />
                <div className="text-left">
                  <div className="text-lg">Ver y Seleccionar</div>
                  <div className="text-sm opacity-90">Elegir novelas específicas</div>
                </div>
              </button>
            </div>

            {/* Show message when no novels available */}
            {allNovelas.length === 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
                <BookOpen className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  No hay novelas disponibles
                </h3>
                <p className="text-yellow-700">
                  El catálogo de novelas está vacío. Contacta con el administrador para agregar novelas al sistema.
                </p>
              </div>
            )}

            {/* Novels list */}
            {showNovelList && allNovelas.length > 0 && (
              <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
                {/* Filters */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 border-b border-gray-200">
                  <div className="flex items-center mb-4">
                    <Filter className="h-5 w-5 text-purple-600 mr-2" />
                    <h4 className="text-lg font-bold text-purple-900">Filtros de Búsqueda</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Buscar por título..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    
                    <select
                      value={selectedGenre}
                      onChange={(e) => setSelectedGenre(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Todos los géneros</option>
                      {uniqueGenres.map(genre => (
                        <option key={genre} value={genre}>{genre}</option>
                      ))}
                    </select>
                    
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Todos los años</option>
                      {uniqueYears.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                    
                    <div className="flex space-x-2">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as 'titulo' | 'año' | 'capitulos')}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      >
                        <option value="titulo">Título</option>
                        <option value="año">Año</option>
                        <option value="capitulos">Capítulos</option>
                      </select>
                      
                      <button
                        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                        className="px-3 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg transition-colors"
                        title={\`Ordenar \${sortOrder === 'asc' ? 'descendente' : 'ascendente'}\`}
                      >
                        {sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                    <div className="text-sm text-purple-700">
                      Mostrando {filteredNovelas.length} de {allNovelas.length} novelas
                      {(searchTerm || selectedGenre || selectedYear) && (
                        <span className="ml-2 text-purple-600">• Filtros activos</span>
                      )}
                    </div>
                    
                    {(searchTerm || selectedGenre || selectedYear || sortBy !== 'titulo' || sortOrder !== 'asc') && (
                      <button
                        onClick={clearFilters}
                        className="text-sm bg-purple-200 hover:bg-purple-300 text-purple-800 px-3 py-1 rounded-lg transition-colors"
                      >
                        Limpiar filtros
                      </button>
                    )}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
                    <h4 className="text-lg font-bold text-gray-900">
                      Seleccionar Novelas ({selectedNovelas.length} seleccionadas)
                    </h4>
                    <div className="flex space-x-2">
                      <button
                        onClick={selectAllNovelas}
                        className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Todas
                      </button>
                      <button
                        onClick={clearAllNovelas}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Ninguna
                      </button>
                    </div>
                  </div>
                </div>

                {/* Totals summary */}
                {selectedNovelas.length > 0 && (
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 border-b border-gray-200">
                    <div className="flex items-center mb-4">
                      <Calculator className="h-6 w-6 text-green-600 mr-3" />
                      <h5 className="text-lg font-bold text-gray-900">Resumen de Selección</h5>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
                        <div className="text-2xl font-bold text-purple-600">{selectedNovelas.length}</div>
                        <div className="text-sm text-gray-600">Novelas</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
                        <div className="text-2xl font-bold text-blue-600">{totals.totalCapitulos}</div>
                        <div className="text-sm text-gray-600">Capítulos</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
                        <div className="text-2xl font-bold text-green-600">$\${totals.cashTotal.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Efectivo</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
                        <div className="text-2xl font-bold text-orange-600">$\${totals.transferTotal.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Transferencia</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-4 border-2 border-green-300">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">TOTAL A PAGAR:</span>
                        <span className="text-2xl font-bold text-green-600">$\${totals.grandTotal.toLocaleString()} CUP</span>
                      </div>
                      {totals.transferFee > 0 && (
                        <div className="text-sm text-orange-600 mt-2">
                          Incluye $\${totals.transferFee.toLocaleString()} CUP de recargo por transferencia ({transferFeePercentage}%)
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="max-h-96 overflow-y-auto p-4">
                  <div className="grid grid-cols-1 gap-3">
                    {filteredNovelas.length > 0 ? (
                      filteredNovelas.map((novela) => {
                      const isSelected = selectedNovelas.includes(novela.id);
                      const baseCost = novela.capitulos * novelPricePerChapter;
                      const transferCost = Math.round(baseCost * (1 + transferFeePercentage / 100));
                      const finalCost = novela.paymentType === 'transfer' ? transferCost : baseCost;
                      
                      return (
                        <div
                          key={novela.id}
                          className={\`p-4 rounded-xl border transition-all \${
                            isSelected 
                              ? 'bg-purple-50 border-purple-300 shadow-md' 
                              : 'bg-gray-50 border-gray-200 hover:bg-purple-25 hover:border-purple-200'
                          }\`}
                        >
                          <div className="flex items-start space-x-4">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => handleNovelToggle(novela.id)}
                              className="mt-1 h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-start justify-between space-y-3 sm:space-y-0">
                                <div className="flex-1">
                                  <p className="font-semibold text-gray-900 mb-2">{novela.titulo}</p>
                                  <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-3">
                                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                                      {novela.genero}
                                    </span>
                                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                      {novela.capitulos} capítulos
                                    </span>
                                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                      {novela.año}
                                    </span>
                                  </div>
                                  
                                  {/* Payment type selector */}
                                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                    <span className="text-sm font-medium text-gray-700">Tipo de pago:</span>
                                    <div className="flex space-x-2">
                                      <button
                                        onClick={() => handlePaymentTypeChange(novela.id, 'cash')}
                                        className={\`px-3 py-2 rounded-full text-xs font-medium transition-colors \${
                                          novela.paymentType === 'cash'
                                            ? 'bg-green-500 text-white'
                                            : 'bg-gray-200 text-gray-600 hover:bg-green-100'
                                        }\`}
                                      >
                                        <DollarSign className="h-3 w-3 inline mr-1" />
                                        Efectivo
                                      </button>
                                      <button
                                        onClick={() => handlePaymentTypeChange(novela.id, 'transfer')}
                                        className={\`px-3 py-2 rounded-full text-xs font-medium transition-colors \${
                                          novela.paymentType === 'transfer'
                                            ? 'bg-orange-500 text-white'
                                            : 'bg-gray-200 text-gray-600 hover:bg-orange-100'
                                        }\`}
                                      >
                                        <CreditCard className="h-3 w-3 inline mr-1" />
                                        Transferencia (+{transferFeePercentage}%)
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="text-right sm:ml-4">
                                  <div className={\`text-lg font-bold \${
                                    novela.paymentType === 'cash' ? 'text-green-600' : 'text-orange-600'
                                  }\`}>
                                    $\${finalCost.toLocaleString()} CUP
                                  </div>
                                  {novela.paymentType === 'transfer' && (
                                    <div className="text-xs text-gray-500">
                                      Base: $\${baseCost.toLocaleString()} CUP
                                      <br />
                                      Recargo: +$\${(transferCost - baseCost).toLocaleString()} CUP
                                    </div>
                                  )}
                                  <div className="text-xs text-gray-500 mt-1">
                                    $\${novelPricePerChapter} CUP × {novela.capitulos} cap.
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {isSelected && (
                              <Check className="h-5 w-5 text-purple-600 mt-1" />
                            )}
                          </div>
                        </div>
                      );
                      })
                    ) : (
                      <div className="text-center py-8">
                        <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          No se encontraron novelas
                        </h3>
                        <p className="text-gray-600 mb-4">
                          No hay novelas que coincidan con los filtros seleccionados.
                        </p>
                        <button
                          onClick={clearFilters}
                          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                          Limpiar filtros
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {selectedNovelas.length > 0 && (
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
                      <div className="text-center sm:text-left">
                        <p className="font-semibold text-gray-900">
                          {selectedNovelas.length} novelas seleccionadas
                        </p>
                        <p className="text-sm text-gray-600">
                          Total: $\${totals.grandTotal.toLocaleString()} CUP
                        </p>
                      </div>
                      <button
                        onClick={sendSelectedNovelas}
                        disabled={selectedNovelas.length === 0}
                        className={\`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center \${
                          selectedNovelas.length > 0
                            ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }\`}
                      >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Enviar por WhatsApp
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}`;
}
function generatePriceCardWithEmbeddedConfig(systemConfig) {
  const prices = JSON.stringify(systemConfig.prices, null, 2);
  return `import React from 'react';
import { DollarSign, Tv, Film, Star, CreditCard } from 'lucide-react';

// PRECIOS EMBEBIDOS - Generados automáticamente
const EMBEDDED_PRICES = ${prices};

interface PriceCardProps {
  type: 'movie' | 'tv';
  selectedSeasons?: number[];
  episodeCount?: number;
  isAnime?: boolean;
}

export function PriceCard({ type, selectedSeasons = [], episodeCount = 0, isAnime = false }: PriceCardProps) {
  // Use embedded prices
  const moviePrice = EMBEDDED_PRICES.moviePrice;
  const seriesPrice = EMBEDDED_PRICES.seriesPrice;
  const transferFeePercentage = EMBEDDED_PRICES.transferFeePercentage;
  
  const calculatePrice = () => {
    if (type === 'movie') {
      return moviePrice;
    } else {
      // Series: dynamic price per season
      return selectedSeasons.length * seriesPrice;
    }
  };

  const price = calculatePrice();
  const transferPrice = Math.round(price * (1 + transferFeePercentage / 100));
  
  const getIcon = () => {
    if (type === 'movie') {
      return isAnime ? '🎌' : '🎬';
    }
    return isAnime ? '🎌' : '📺';
  };

  const getTypeLabel = () => {
    if (type === 'movie') {
      return isAnime ? 'Película Animada' : 'Película';
    }
    return isAnime ? 'Anime' : 'Serie';
  };

  return (
    <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-green-300 shadow-xl transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-green-400 to-emerald-400 p-3 rounded-xl mr-4 shadow-lg">
            <span className="text-2xl">{getIcon()}</span>
          </div>
          <div>
            <h3 className="font-black text-green-800 text-lg">{getTypeLabel()}</h3>
            <p className="text-green-600 text-sm font-semibold">
              {type === 'tv' && selectedSeasons.length > 0 
                ? \`\${selectedSeasons.length} temporada\${selectedSeasons.length > 1 ? 's' : ''}\`
                : 'Contenido completo'
              }
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-full shadow-lg animate-pulse">
          <DollarSign className="h-4 w-4" />
        </div>
      </div>
      
      <div className="space-y-3">
        {/* Cash Price */}
        <div className="bg-gradient-to-r from-white to-green-50 rounded-xl p-4 border-2 border-green-200 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-bold text-green-700 flex items-center">
              <div className="bg-green-100 p-1 rounded-lg mr-2">
                <DollarSign className="h-4 w-4" />
              </div>
              Efectivo
            </span>
            <span className="text-xl font-black text-green-700">
              $\${price.toLocaleString()} CUP
            </span>
          </div>
        </div>
        
        {/* Transfer Price */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border-2 border-orange-200 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-bold text-orange-700 flex items-center">
              <div className="bg-orange-100 p-1 rounded-lg mr-2">
                <CreditCard className="h-4 w-4" />
              </div>
              Transferencia
            </span>
            <span className="text-xl font-black text-orange-700">
              $\${transferPrice.toLocaleString()} CUP
            </span>
          </div>
          <div className="text-sm text-orange-600 font-semibold bg-orange-100 px-2 py-1 rounded-full text-center">
            +{transferFeePercentage}% recargo bancario
          </div>
        </div>
        
        {type === 'tv' && selectedSeasons.length > 0 && (
          <div className="text-sm text-green-600 font-bold text-center bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-3 border border-green-200">
            $\${(price / selectedSeasons.length).toLocaleString()} CUP por temporada (efectivo)
          </div>
        )}
      </div>
    </div>
  );
}`;
}
function generateAdminContextWithEmbeddedConfig(systemConfig) {
  const config = JSON.stringify(systemConfig, null, 2);
  return `import React, { createContext, useContext, useReducer, useEffect } from 'react';
import JSZip from 'jszip';

// CONFIGURACIÓN EMBEBIDA - Generada automáticamente
const EMBEDDED_CONFIG = ${config};

// CREDENCIALES DE ACCESO (CONFIGURABLES)
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'tvalacarta2024'
};

// Types
export interface PriceConfig {
  moviePrice: number;
  seriesPrice: number;
  transferFeePercentage: number;
  novelPricePerChapter: number;
}

export interface DeliveryZone {
  id: number;
  name: string;
  cost: number;
  createdAt: string;
  updatedAt: string;
}

export interface Novel {
  id: number;
  titulo: string;
  genero: string;
  capitulos: number;
  año: number;
  descripcion?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: string;
  section: string;
  action: string;
}

export interface SyncStatus {
  lastSync: string;
  isOnline: boolean;
  pendingChanges: number;
}

export interface SystemConfig {
  version: string;
  lastExport: string;
  prices: PriceConfig;
  deliveryZones: DeliveryZone[];
  novels: Novel[];
  settings: {
    autoSync: boolean;
    syncInterval: number;
    enableNotifications: boolean;
    maxNotifications: number;
  };
  metadata: {
    totalOrders: number;
    totalRevenue: number;
    lastOrderDate: string;
    systemUptime: string;
  };
}

export interface AdminState {
  isAuthenticated: boolean;
  prices: PriceConfig;
  deliveryZones: DeliveryZone[];
  novels: Novel[];
  notifications: Notification[];
  syncStatus: SyncStatus;
  systemConfig: SystemConfig;
}

type AdminAction = 
  | { type: 'LOGIN'; payload: { username: string; password: string } }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_PRICES'; payload: PriceConfig }
  | { type: 'ADD_DELIVERY_ZONE'; payload: Omit<DeliveryZone, 'id' | 'createdAt' | 'updatedAt'> }
  | { type: 'UPDATE_DELIVERY_ZONE'; payload: DeliveryZone }
  | { type: 'DELETE_DELIVERY_ZONE'; payload: number }
  | { type: 'ADD_NOVEL'; payload: Omit<Novel, 'id' | 'createdAt' | 'updatedAt'> }
  | { type: 'UPDATE_NOVEL'; payload: Novel }
  | { type: 'DELETE_NOVEL'; payload: number }
  | { type: 'ADD_NOTIFICATION'; payload: Omit<Notification, 'id' | 'timestamp'> }
  | { type: 'CLEAR_NOTIFICATIONS' }
  | { type: 'UPDATE_SYNC_STATUS'; payload: Partial<SyncStatus> }
  | { type: 'SYNC_STATE'; payload: Partial<AdminState> }
  | { type: 'LOAD_SYSTEM_CONFIG'; payload: SystemConfig }
  | { type: 'UPDATE_SYSTEM_CONFIG'; payload: Partial<SystemConfig> };

interface AdminContextType {
  state: AdminState;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  updatePrices: (prices: PriceConfig) => void;
  addDeliveryZone: (zone: Omit<DeliveryZone, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateDeliveryZone: (zone: DeliveryZone) => void;
  deleteDeliveryZone: (id: number) => void;
  addNovel: (novel: Omit<Novel, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateNovel: (novel: Novel) => void;
  deleteNovel: (id: number) => void;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  clearNotifications: () => void;
  exportSystemConfig: () => void;
  importSystemConfig: (config: SystemConfig) => void;
  exportCompleteSourceCode: () => void;
  syncWithRemote: () => Promise<void>;
  broadcastChange: (change: any) => void;
  syncAllSections: () => Promise<void>;
}

// Initial state with embedded configuration
const initialState: AdminState = {
  isAuthenticated: false,
  prices: EMBEDDED_CONFIG.prices,
  deliveryZones: EMBEDDED_CONFIG.deliveryZones,
  novels: EMBEDDED_CONFIG.novels,
  notifications: [],
  syncStatus: {
    lastSync: new Date().toISOString(),
    isOnline: true,
    pendingChanges: 0,
  },
  systemConfig: EMBEDDED_CONFIG,
};

// Reducer
function adminReducer(state: AdminState, action: AdminAction): AdminState {
  switch (action.type) {
    case 'LOGIN':
      if (action.payload.username === ADMIN_CREDENTIALS.username && action.payload.password === ADMIN_CREDENTIALS.password) {
        return { ...state, isAuthenticated: true };
      }
      return state;

    case 'LOGOUT':
      return { ...state, isAuthenticated: false };

    case 'UPDATE_PRICES':
      const updatedConfig = {
        ...state.systemConfig,
        prices: action.payload,
        lastExport: new Date().toISOString(),
      };
      return {
        ...state,
        prices: action.payload,
        systemConfig: updatedConfig,
        syncStatus: { ...state.syncStatus, pendingChanges: state.syncStatus.pendingChanges + 1 }
      };

    case 'ADD_DELIVERY_ZONE':
      const newZone: DeliveryZone = {
        ...action.payload,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      const configWithNewZone = {
        ...state.systemConfig,
        deliveryZones: [...state.systemConfig.deliveryZones, newZone],
        lastExport: new Date().toISOString(),
      };
      return {
        ...state,
        deliveryZones: [...state.deliveryZones, newZone],
        systemConfig: configWithNewZone,
        syncStatus: { ...state.syncStatus, pendingChanges: state.syncStatus.pendingChanges + 1 }
      };

    case 'UPDATE_DELIVERY_ZONE':
      const updatedZones = state.deliveryZones.map(zone =>
        zone.id === action.payload.id
          ? { ...action.payload, updatedAt: new Date().toISOString() }
          : zone
      );
      const configWithUpdatedZone = {
        ...state.systemConfig,
        deliveryZones: updatedZones,
        lastExport: new Date().toISOString(),
      };
      return {
        ...state,
        deliveryZones: updatedZones,
        systemConfig: configWithUpdatedZone,
        syncStatus: { ...state.syncStatus, pendingChanges: state.syncStatus.pendingChanges + 1 }
      };

    case 'DELETE_DELIVERY_ZONE':
      const filteredZones = state.deliveryZones.filter(zone => zone.id !== action.payload);
      const configWithDeletedZone = {
        ...state.systemConfig,
        deliveryZones: filteredZones,
        lastExport: new Date().toISOString(),
      };
      return {
        ...state,
        deliveryZones: filteredZones,
        systemConfig: configWithDeletedZone,
        syncStatus: { ...state.syncStatus, pendingChanges: state.syncStatus.pendingChanges + 1 }
      };

    case 'ADD_NOVEL':
      const newNovel: Novel = {
        ...action.payload,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      const configWithNewNovel = {
        ...state.systemConfig,
        novels: [...state.systemConfig.novels, newNovel],
        lastExport: new Date().toISOString(),
      };
      return {
        ...state,
        novels: [...state.novels, newNovel],
        systemConfig: configWithNewNovel,
        syncStatus: { ...state.syncStatus, pendingChanges: state.syncStatus.pendingChanges + 1 }
      };

    case 'UPDATE_NOVEL':
      const updatedNovels = state.novels.map(novel =>
        novel.id === action.payload.id
          ? { ...action.payload, updatedAt: new Date().toISOString() }
          : novel
      );
      const configWithUpdatedNovel = {
        ...state.systemConfig,
        novels: updatedNovels,
        lastExport: new Date().toISOString(),
      };
      return {
        ...state,
        novels: updatedNovels,
        systemConfig: configWithUpdatedNovel,
        syncStatus: { ...state.syncStatus, pendingChanges: state.syncStatus.pendingChanges + 1 }
      };

    case 'DELETE_NOVEL':
      const filteredNovels = state.novels.filter(novel => novel.id !== action.payload);
      const configWithDeletedNovel = {
        ...state.systemConfig,
        novels: filteredNovels,
        lastExport: new Date().toISOString(),
      };
      return {
        ...state,
        novels: filteredNovels,
        systemConfig: configWithDeletedNovel,
        syncStatus: { ...state.syncStatus, pendingChanges: state.syncStatus.pendingChanges + 1 }
      };

    case 'ADD_NOTIFICATION':
      const notification: Notification = {
        ...action.payload,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
      };
      return {
        ...state,
        notifications: [notification, ...state.notifications].slice(0, state.systemConfig.settings.maxNotifications),
      };

    case 'CLEAR_NOTIFICATIONS':
      return {
        ...state,
        notifications: [],
      };

    case 'UPDATE_SYNC_STATUS':
      return {
        ...state,
        syncStatus: { ...state.syncStatus, ...action.payload },
      };

    case 'LOAD_SYSTEM_CONFIG':
      return {
        ...state,
        prices: action.payload.prices,
        deliveryZones: action.payload.deliveryZones,
        novels: action.payload.novels,
        systemConfig: action.payload,
        syncStatus: { ...state.syncStatus, lastSync: new Date().toISOString(), pendingChanges: 0 }
      };

    case 'UPDATE_SYSTEM_CONFIG':
      const newSystemConfig = { ...state.systemConfig, ...action.payload };
      return {
        ...state,
        systemConfig: newSystemConfig,
      };

    case 'SYNC_STATE':
      return {
        ...state,
        ...action.payload,
        syncStatus: { ...state.syncStatus, lastSync: new Date().toISOString(), pendingChanges: 0 }
      };

    default:
      return state;
  }
}

// Context creation
const AdminContext = createContext<AdminContextType | undefined>(undefined);

// Real-time sync service
class RealTimeSyncService {
  private listeners: Set<(data: any) => void> = new Set();
  private syncInterval: NodeJS.Timeout | null = null;
  private storageKey = 'admin_system_state';
  private configKey = 'system_config';

  constructor() {
    this.initializeSync();
  }

  private initializeSync() {
    window.addEventListener('storage', this.handleStorageChange.bind(this));
    this.syncInterval = setInterval(() => {
      this.checkForUpdates();
    }, 5000);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this.checkForUpdates();
      }
    });
  }

  private handleStorageChange(event: StorageEvent) {
    if ((event.key === this.storageKey || event.key === this.configKey) && event.newValue) {
      try {
        const newState = JSON.parse(event.newValue);
        this.notifyListeners(newState);
      } catch (error) {
        console.error('Error parsing sync data:', error);
      }
    }
  }

  private checkForUpdates() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      const config = localStorage.getItem(this.configKey);
      
      if (stored) {
        const storedState = JSON.parse(stored);
        this.notifyListeners(storedState);
      }
      
      if (config) {
        const configData = JSON.parse(config);
        this.notifyListeners({ systemConfig: configData });
      }
    } catch (error) {
      console.error('Error checking for updates:', error);
    }
  }

  subscribe(callback: (data: any) => void) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  broadcast(state: AdminState) {
    try {
      const syncData = {
        ...state,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem(this.storageKey, JSON.stringify(syncData));
      localStorage.setItem(this.configKey, JSON.stringify(state.systemConfig));
      this.notifyListeners(syncData);
    } catch (error) {
      console.error('Error broadcasting state:', error);
    }
  }

  private notifyListeners(data: any) {
    this.listeners.forEach(callback => {
      try {
        callback(data);
      } catch (error) {
        console.error('Error in sync listener:', error);
      }
    });
  }

  destroy() {
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
    }
    window.removeEventListener('storage', this.handleStorageChange.bind(this));
    this.listeners.clear();
  }
}

// Provider component
export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(adminReducer, initialState);
  const [syncService] = React.useState(() => new RealTimeSyncService());

  // Load system config on startup
  useEffect(() => {
    try {
      const storedConfig = localStorage.getItem('system_config');
      if (storedConfig) {
        const config = JSON.parse(storedConfig);
        dispatch({ type: 'LOAD_SYSTEM_CONFIG', payload: config });
      }
      
      const stored = localStorage.getItem('admin_system_state');
      if (stored) {
        const storedState = JSON.parse(stored);
        dispatch({ type: 'SYNC_STATE', payload: storedState });
      }
    } catch (error) {
      console.error('Error loading initial state:', error);
    }
  }, []);

  // Save state changes
  useEffect(() => {
    try {
      localStorage.setItem('admin_system_state', JSON.stringify(state));
      localStorage.setItem('system_config', JSON.stringify(state.systemConfig));
      syncService.broadcast(state);
    } catch (error) {
      console.error('Error saving state:', error);
    }
  }, [state, syncService]);

  // Real-time sync listener
  useEffect(() => {
    const unsubscribe = syncService.subscribe((syncedState) => {
      if (JSON.stringify(syncedState) !== JSON.stringify(state)) {
        dispatch({ type: 'SYNC_STATE', payload: syncedState });
      }
    });
    return unsubscribe;
  }, [syncService, state]);

  useEffect(() => {
    return () => {
      syncService.destroy();
    };
  }, [syncService]);

  // Context methods implementation
  const login = (username: string, password: string): boolean => {
    dispatch({ type: 'LOGIN', payload: { username, password } });
    const success = username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password;
    if (success) {
      addNotification({
        type: 'success',
        title: 'Inicio de sesión exitoso',
        message: 'Bienvenido al panel de administración',
        section: 'Autenticación',
        action: 'login'
      });
    }
    return success;
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    addNotification({
      type: 'info',
      title: 'Sesión cerrada',
      message: 'Has cerrado sesión correctamente',
      section: 'Autenticación',
      action: 'logout'
    });
  };

  const updatePrices = (prices: PriceConfig) => {
    dispatch({ type: 'UPDATE_PRICES', payload: prices });
    addNotification({
      type: 'success',
      title: 'Precios actualizados',
      message: 'Los precios se han actualizado y sincronizado automáticamente',
      section: 'Precios',
      action: 'update'
    });
    broadcastChange({ type: 'prices', data: prices });
  };

  const addDeliveryZone = (zone: Omit<DeliveryZone, 'id' | 'createdAt' | 'updatedAt'>) => {
    dispatch({ type: 'ADD_DELIVERY_ZONE', payload: zone });
    addNotification({
      type: 'success',
      title: 'Zona de entrega agregada',
      message: \`Se agregó la zona "\${zone.name}" y se sincronizó automáticamente\`,
      section: 'Zonas de Entrega',
      action: 'create'
    });
    broadcastChange({ type: 'delivery_zone_add', data: zone });
  };

  const updateDeliveryZone = (zone: DeliveryZone) => {
    dispatch({ type: 'UPDATE_DELIVERY_ZONE', payload: zone });
    addNotification({
      type: 'success',
      title: 'Zona de entrega actualizada',
      message: \`Se actualizó la zona "\${zone.name}" y se sincronizó automáticamente\`,
      section: 'Zonas de Entrega',
      action: 'update'
    });
    broadcastChange({ type: 'delivery_zone_update', data: zone });
  };

  const deleteDeliveryZone = (id: number) => {
    const zone = state.deliveryZones.find(z => z.id === id);
    dispatch({ type: 'DELETE_DELIVERY_ZONE', payload: id });
    addNotification({
      type: 'warning',
      title: 'Zona de entrega eliminada',
      message: \`Se eliminó la zona "\${zone?.name || 'Desconocida'}" y se sincronizó automáticamente\`,
      section: 'Zonas de Entrega',
      action: 'delete'
    });
    broadcastChange({ type: 'delivery_zone_delete', data: { id } });
  };

  const addNovel = (novel: Omit<Novel, 'id' | 'createdAt' | 'updatedAt'>) => {
    dispatch({ type: 'ADD_NOVEL', payload: novel });
    addNotification({
      type: 'success',
      title: 'Novela agregada',
      message: \`Se agregó la novela "\${novel.titulo}" y se sincronizó automáticamente\`,
      section: 'Gestión de Novelas',
      action: 'create'
    });
    broadcastChange({ type: 'novel_add', data: novel });
  };

  const updateNovel = (novel: Novel) => {
    dispatch({ type: 'UPDATE_NOVEL', payload: novel });
    addNotification({
      type: 'success',
      title: 'Novela actualizada',
      message: \`Se actualizó la novela "\${novel.titulo}" y se sincronizó automáticamente\`,
      section: 'Gestión de Novelas',
      action: 'update'
    });
    broadcastChange({ type: 'novel_update', data: novel });
  };

  const deleteNovel = (id: number) => {
    const novel = state.novels.find(n => n.id === id);
    dispatch({ type: 'DELETE_NOVEL', payload: id });
    addNotification({
      type: 'warning',
      title: 'Novela eliminada',
      message: \`Se eliminó la novela "\${novel?.titulo || 'Desconocida'}" y se sincronizó automáticamente\`,
      section: 'Gestión de Novelas',
      action: 'delete'
    });
    broadcastChange({ type: 'novel_delete', data: { id } });
  };

  const addNotification = (notification: Omit<Notification, 'id' | 'timestamp'>) => {
    dispatch({ type: 'ADD_NOTIFICATION', payload: notification });
  };

  const clearNotifications = () => {
    dispatch({ type: 'CLEAR_NOTIFICATIONS' });
    addNotification({
      type: 'info',
      title: 'Notificaciones limpiadas',
      message: 'Se han eliminado todas las notificaciones del sistema',
      section: 'Notificaciones',
      action: 'clear'
    });
  };

  const exportSystemConfig = async () => {
    try {
      addNotification({
        type: 'info',
        title: 'Exportación de configuración iniciada',
        message: 'Generando archivo de configuración JSON...',
        section: 'Sistema',
        action: 'export_config_start'
      });

      // Create comprehensive system configuration
      const completeConfig: SystemConfig = {
        ...state.systemConfig,
        version: '2.1.0',
        lastExport: new Date().toISOString(),
        prices: state.prices,
        deliveryZones: state.deliveryZones,
        novels: state.novels,
        metadata: {
          ...state.systemConfig.metadata,
          totalOrders: state.systemConfig.metadata.totalOrders,
          totalRevenue: state.systemConfig.metadata.totalRevenue,
          lastOrderDate: state.systemConfig.metadata.lastOrderDate,
          systemUptime: state.systemConfig.metadata.systemUptime,
        },
      };

      // Generate JSON file
      const configJson = JSON.stringify(completeConfig, null, 2);
      const blob = new Blob([configJson], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = \`TV_a_la_Carta_Config_\${new Date().toISOString().split('T')[0]}.json\`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      // Update system config with export timestamp
      dispatch({ 
        type: 'UPDATE_SYSTEM_CONFIG', 
        payload: { lastExport: new Date().toISOString() } 
      });

      addNotification({
        type: 'success',
        title: 'Configuración exportada',
        message: 'La configuración JSON se ha exportado correctamente',
        section: 'Sistema',
        action: 'export_config'
      });
    } catch (error) {
      console.error('Error exporting system config:', error);
      addNotification({
        type: 'error',
        title: 'Error en la exportación de configuración',
        message: 'No se pudo exportar la configuración JSON',
        section: 'Sistema',
        action: 'export_config_error'
      });
    }
  };

  const exportCompleteSourceCode = async () => {
    try {
      addNotification({
        type: 'info',
        title: 'Exportación de código fuente iniciada',
        message: 'Generando sistema completo con código fuente...',
        section: 'Sistema',
        action: 'export_source_start'
      });

      // Importar dinámicamente el generador de código fuente
      try {
        const { generateCompleteSourceCode } = await import('../utils/sourceCodeGenerator');
        await generateCompleteSourceCode(state.systemConfig);
      } catch (importError) {
        console.error('Error importing source code generator:', importError);
        throw new Error('No se pudo cargar el generador de código fuente');
      }

      addNotification({
        type: 'success',
        title: 'Código fuente exportado',
        message: 'El sistema completo se ha exportado como código fuente',
        section: 'Sistema',
        action: 'export_source'
      });
    } catch (error) {
      console.error('Error exporting source code:', error);
      addNotification({
        type: 'error',
        title: 'Error en la exportación de código',
        message: error instanceof Error ? error.message : 'No se pudo exportar el código fuente completo',
        section: 'Sistema',
        action: 'export_source_error'
      });
      throw error;
    }
  };

  const importSystemConfig = (config: SystemConfig) => {
    try {
      dispatch({ type: 'LOAD_SYSTEM_CONFIG', payload: config });
      addNotification({
        type: 'success',
        title: 'Configuración importada',
        message: 'La configuración del sistema se ha cargado correctamente',
        section: 'Sistema',
        action: 'import'
      });
    } catch (error) {
      console.error('Error importing system config:', error);
      addNotification({
        type: 'error',
        title: 'Error en la importación',
        message: 'No se pudo cargar la configuración del sistema',
        section: 'Sistema',
        action: 'import_error'
      });
    }
  };

  const syncAllSections = async (): Promise<void> => {
    try {
      addNotification({
        type: 'info',
        title: 'Sincronización completa iniciada',
        message: 'Sincronizando todas las secciones del sistema...',
        section: 'Sistema',
        action: 'sync_all_start'
      });

      // Simulate comprehensive sync of all sections
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Update all components with current state
      const updatedConfig: SystemConfig = {
        ...state.systemConfig,
        lastExport: new Date().toISOString(),
        prices: state.prices,
        deliveryZones: state.deliveryZones,
        novels: state.novels,
      };

      dispatch({ type: 'UPDATE_SYSTEM_CONFIG', payload: updatedConfig });
      
      // Broadcast changes to all components
      window.dispatchEvent(new CustomEvent('admin_full_sync', { 
        detail: { 
          config: updatedConfig,
          timestamp: new Date().toISOString()
        } 
      }));

      addNotification({
        type: 'success',
        title: 'Sincronización completa exitosa',
        message: 'Todas las secciones se han sincronizado correctamente',
        section: 'Sistema',
        action: 'sync_all'
      });
    } catch (error) {
      console.error('Error in full sync:', error);
      addNotification({
        type: 'error',
        title: 'Error en sincronización completa',
        message: 'No se pudo completar la sincronización de todas las secciones',
        section: 'Sistema',
        action: 'sync_all_error'
      });
    }
  };

  const broadcastChange = (change: any) => {
    const changeEvent = {
      ...change,
      timestamp: new Date().toISOString(),
      source: 'admin_panel'
    };
    
    dispatch({ 
      type: 'UPDATE_SYNC_STATUS', 
      payload: { 
        lastSync: new Date().toISOString(),
        pendingChanges: Math.max(0, state.syncStatus.pendingChanges - 1)
      } 
    });

    window.dispatchEvent(new CustomEvent('admin_state_change', { 
      detail: changeEvent 
    }));
  };

  const syncWithRemote = async (): Promise<void> => {
    try {
      dispatch({ type: 'UPDATE_SYNC_STATUS', payload: { isOnline: true } });
      
      addNotification({
        type: 'info',
        title: 'Sincronización iniciada',
        message: 'Iniciando sincronización con el sistema remoto...',
        section: 'Sistema',
        action: 'sync_start'
      });

      // Simulate remote sync
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      dispatch({ 
        type: 'UPDATE_SYNC_STATUS', 
        payload: { 
          lastSync: new Date().toISOString(),
          pendingChanges: 0
        } 
      });
      
      addNotification({
        type: 'success',
        title: 'Sincronización completada',
        message: 'Todos los datos se han sincronizado correctamente',
        section: 'Sistema',
        action: 'sync'
      });
    } catch (error) {
      dispatch({ type: 'UPDATE_SYNC_STATUS', payload: { isOnline: false } });
      addNotification({
        type: 'error',
        title: 'Error de sincronización',
        message: 'No se pudo sincronizar con el servidor remoto',
        section: 'Sistema',
        action: 'sync_error'
      });
    }
  };

  return (
    <AdminContext.Provider
      value={{
        state,
        login,
        logout,
        updatePrices,
        addDeliveryZone,
        updateDeliveryZone,
        deleteDeliveryZone,
        addNovel,
        updateNovel,
        deleteNovel,
        addNotification,
        clearNotifications,
        exportSystemConfig,
        importSystemConfig,
        exportCompleteSourceCode,
        syncWithRemote,
        broadcastChange,
        syncAllSections,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}

export { AdminContext };`;
}
function generateCartContextWithEmbeddedConfig(systemConfig) {
  const prices = JSON.stringify(systemConfig.prices, null, 2);
  return `import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Toast } from '../components/Toast';
import type { CartItem } from '../types/movie';

// PRECIOS EMBEBIDOS - Generados automáticamente
const EMBEDDED_PRICES = ${prices};

interface SeriesCartItem extends CartItem {
  selectedSeasons?: number[];
  paymentType?: 'cash' | 'transfer';
}

interface CartState {
  items: SeriesCartItem[];
  total: number;
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: SeriesCartItem }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_SEASONS'; payload: { id: number; seasons: number[] } }
  | { type: 'UPDATE_PAYMENT_TYPE'; payload: { id: number; paymentType: 'cash' | 'transfer' } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: SeriesCartItem[] };

interface CartContextType {
  state: CartState;
  addItem: (item: SeriesCartItem) => void;
  removeItem: (id: number) => void;
  updateSeasons: (id: number, seasons: number[]) => void;
  updatePaymentType: (id: number, paymentType: 'cash' | 'transfer') => void;
  clearCart: () => void;
  isInCart: (id: number) => boolean;
  getItemSeasons: (id: number) => number[];
  getItemPaymentType: (id: number) => 'cash' | 'transfer';
  calculateItemPrice: (item: SeriesCartItem) => number;
  calculateTotalPrice: () => number;
  calculateTotalByPaymentType: () => { cash: number; transfer: number };
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM':
      if (state.items.some(item => item.id === action.payload.id && item.type === action.payload.type)) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + 1
      };
    case 'UPDATE_SEASONS':
      return {
        ...state,
        items: state.items.map(item => 
          item.id === action.payload.id 
            ? { ...item, selectedSeasons: action.payload.seasons }
            : item
        )
      };
    case 'UPDATE_PAYMENT_TYPE':
      return {
        ...state,
        items: state.items.map(item => 
          item.id === action.payload.id 
            ? { ...item, paymentType: action.payload.paymentType }
            : item
        )
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - 1
      };
    case 'CLEAR_CART':
      return {
        items: [],
        total: 0
      };
    case 'LOAD_CART':
      return {
        items: action.payload,
        total: action.payload.length
      };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });
  const [toast, setToast] = React.useState<{
    message: string;
    type: 'success' | 'error';
    isVisible: boolean;
  }>({ message: '', type: 'success', isVisible: false });

  // Clear cart on page refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('pageRefreshed', 'true');
    };

    const handleLoad = () => {
      if (sessionStorage.getItem('pageRefreshed') === 'true') {
        localStorage.removeItem('movieCart');
        dispatch({ type: 'CLEAR_CART' });
        sessionStorage.removeItem('pageRefreshed');
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('load', handleLoad);

    if (sessionStorage.getItem('pageRefreshed') === 'true') {
      localStorage.removeItem('movieCart');
      dispatch({ type: 'CLEAR_CART' });
      sessionStorage.removeItem('pageRefreshed');
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem('pageRefreshed') !== 'true') {
      const savedCart = localStorage.getItem('movieCart');
      if (savedCart) {
        try {
          const items = JSON.parse(savedCart);
          dispatch({ type: 'LOAD_CART', payload: items });
        } catch (error) {
          console.error('Error loading cart from localStorage:', error);
        }
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('movieCart', JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (item: SeriesCartItem) => {
    const itemWithDefaults = { 
      ...item, 
      paymentType: 'cash' as const,
      selectedSeasons: item.type === 'tv' && !item.selectedSeasons ? [1] : item.selectedSeasons
    };
    dispatch({ type: 'ADD_ITEM', payload: itemWithDefaults });
    
    setToast({
      message: \`"\${item.title}" agregado al carrito\`,
      type: 'success',
      isVisible: true
    });
  };

  const removeItem = (id: number) => {
    const item = state.items.find(item => item.id === id);
    dispatch({ type: 'REMOVE_ITEM', payload: id });
    
    if (item) {
      setToast({
        message: \`"\${item.title}" retirado del carrito\`,
        type: 'error',
        isVisible: true
      });
    }
  };

  const updateSeasons = (id: number, seasons: number[]) => {
    dispatch({ type: 'UPDATE_SEASONS', payload: { id, seasons } });
  };

  const updatePaymentType = (id: number, paymentType: 'cash' | 'transfer') => {
    dispatch({ type: 'UPDATE_PAYMENT_TYPE', payload: { id, paymentType } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const isInCart = (id: number) => {
    return state.items.some(item => item.id === id);
  };

  const getItemSeasons = (id: number): number[] => {
    const item = state.items.find(item => item.id === id);
    return item?.selectedSeasons || [];
  };

  const getItemPaymentType = (id: number): 'cash' | 'transfer' => {
    const item = state.items.find(item => item.id === id);
    return item?.paymentType || 'cash';
  };

  const calculateItemPrice = (item: SeriesCartItem): number => {
    // Use embedded prices
    const moviePrice = EMBEDDED_PRICES.moviePrice;
    const seriesPrice = EMBEDDED_PRICES.seriesPrice;
    const transferFeePercentage = EMBEDDED_PRICES.transferFeePercentage;
    
    if (item.type === 'movie') {
      const basePrice = moviePrice;
      return item.paymentType === 'transfer' ? Math.round(basePrice * (1 + transferFeePercentage / 100)) : basePrice;
    } else {
      const seasons = item.selectedSeasons?.length || 1;
      const basePrice = seasons * seriesPrice;
      return item.paymentType === 'transfer' ? Math.round(basePrice * (1 + transferFeePercentage / 100)) : basePrice;
    }
  };

  const calculateTotalPrice = (): number => {
    return state.items.reduce((total, item) => {
      return total + calculateItemPrice(item);
    }, 0);
  };

  const calculateTotalByPaymentType = (): { cash: number; transfer: number } => {
    const moviePrice = EMBEDDED_PRICES.moviePrice;
    const seriesPrice = EMBEDDED_PRICES.seriesPrice;
    const transferFeePercentage = EMBEDDED_PRICES.transferFeePercentage;
    
    return state.items.reduce((totals, item) => {
      const basePrice = item.type === 'movie' ? moviePrice : (item.selectedSeasons?.length || 1) * seriesPrice;
      if (item.paymentType === 'transfer') {
        totals.transfer += Math.round(basePrice * (1 + transferFeePercentage / 100));
      } else {
        totals.cash += basePrice;
      }
      return totals;
    }, { cash: 0, transfer: 0 });
  };

  const closeToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  return (
    <CartContext.Provider value={{ 
      state, 
      addItem, 
      removeItem, 
      updateSeasons, 
      updatePaymentType,
      clearCart, 
      isInCart, 
      getItemSeasons,
      getItemPaymentType,
      calculateItemPrice,
      calculateTotalPrice,
      calculateTotalByPaymentType
    }}>
      {children}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}`;
}
function generatePackageJson() {
  return `{
  "name": "tv-a-la-carta-sistema-completo",
  "private": true,
  "version": "2.1.0",
  "type": "module",
  "description": "Sistema completo de gestión para TV a la Carta con panel de administración",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@types/node": "^24.2.1",
    "jszip": "^3.10.1",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.8.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  },
  "keywords": [
    "tv",
    "movies",
    "series",
    "anime",
    "streaming",
    "cart",
    "admin",
    "react",
    "typescript"
  ],
  "author": "TV a la Carta",
  "license": "MIT"
}`;
}
function generateViteConfig() {
  return `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});`;
}
function generateTailwindConfig() {
  return `/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};`;
}
function generateTsConfig() {
  return `{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}`;
}
function generateTsConfigApp() {
  return `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}`;
}
function generateTsConfigNode() {
  return `{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}`;
}
function generatePostcssConfig() {
  return `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`;
}
function generateEslintConfig() {
  return `import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);`;
}
function generateIndexHtml() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/unnamed.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    <base href="/" />
    <title>TV a la Carta: Películas y series ilimitadas y mucho más</title>
    <style>
      /* Deshabilitar zoom y selección de texto */
      * {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
      }
      
      /* Permitir selección de texto solo en inputs y textareas */
      input, textarea, [contenteditable="true"] {
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
      }
      
      /* Deshabilitar zoom en iOS Safari */
      body {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        text-size-adjust: 100%;
        touch-action: manipulation;
      }
      
      /* Prevenir zoom en inputs en iOS */
      input[type="text"],
      input[type="email"],
      input[type="tel"],
      input[type="password"],
      input[type="number"],
      input[type="search"],
      textarea,
      select {
        font-size: 16px !important;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>
  </body>
</html>`;
}
function generateVercelConfig() {
  return `{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }`;
}
function generateNetlifyRedirects() {
  return `# Netlify redirects for SPA routing
/*    /index.html   200

# Handle specific routes
/movies    /index.html   200
/tv        /index.html   200
/anime     /index.html   200
/cart      /index.html   200
/search    /index.html   200
/movie/*   /index.html   200
/tv/*      /index.html   200
/admin     /index.html   200`;
}
function generateReadme(systemConfig) {
  return `# TV a la Carta - Sistema de Gestión

## Descripción
Sistema completo de gestión para TV a la Carta con panel de administración, carrito de compras y sincronización en tiempo real.

## Versión
${systemConfig.version}

## Última Exportación
${(/* @__PURE__ */ new Date()).toISOString()}

## Configuración Actual

### Precios
- Películas: $${systemConfig.prices.moviePrice} CUP
- Series: $${systemConfig.prices.seriesPrice} CUP por temporada
- Recargo transferencia: ${systemConfig.prices.transferFeePercentage}%
- Novelas: $${systemConfig.prices.novelPricePerChapter} CUP por capítulo

### Zonas de Entrega
Total configuradas: ${systemConfig.deliveryZones.length}

### Novelas Administradas
Total: ${systemConfig.novels.length}

## Características
- ✅ Panel de administración completo
- ✅ Sincronización en tiempo real
- ✅ Gestión de precios dinámicos
- ✅ Zonas de entrega personalizables
- ✅ Catálogo de novelas administrable
- ✅ Sistema de notificaciones
- ✅ Exportación/Importación de configuración
- ✅ Optimización de rendimiento
- ✅ Carrito de compras avanzado
- ✅ Integración con WhatsApp

## Instalación
\`\`\`bash
npm install
npm run dev
\`\`\`

## Uso del Panel de Administración
1. Acceder a /admin
2. Usuario: admin
3. Contraseña: tvalacarta2024

## Tecnologías
- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Lucide Icons
- JSZip

## Contacto
WhatsApp: +5354690878`;
}
function generateMainTsx() {
  return `import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);`;
}
function generateAppTsx() {
  return `import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AdminProvider } from './context/AdminContext';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import { TVShows } from './pages/TVShows';
import { Anime } from './pages/Anime';
import { SearchPage } from './pages/Search';
import { MovieDetail } from './pages/MovieDetail';
import { TVDetail } from './pages/TVDetail';
import { Cart } from './pages/Cart';
import { AdminPanel } from './pages/AdminPanel';

function App() {
  // Detectar refresh y redirigir a la página principal
  React.useEffect(() => {
    const handleBeforeUnload = () => {
      // Marcar que la página se está recargando
      sessionStorage.setItem('pageRefreshed', 'true');
    };

    const handleLoad = () => {
      // Si se detecta que la página fue recargada, redirigir a la página principal
      if (sessionStorage.getItem('pageRefreshed') === 'true') {
        sessionStorage.removeItem('pageRefreshed');
        // Solo redirigir si no estamos ya en la página principal
        if (window.location.pathname !== '/') {
          window.location.href = 'https://tvalacarta.vercel.app/';
          return;
        }
      }
    };

    // Verificar al montar el componente si fue un refresh
    if (sessionStorage.getItem('pageRefreshed') === 'true') {
      sessionStorage.removeItem('pageRefreshed');
      if (window.location.pathname !== '/') {
        window.location.href = 'https://tvalacarta.vercel.app/';
        return;
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Deshabilitar zoom con teclado y gestos
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Deshabilitar Ctrl/Cmd + Plus/Minus/0 para zoom
      if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '0')) {
        e.preventDefault();
        return false;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Deshabilitar Ctrl/Cmd + scroll para zoom
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        return false;
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      // Deshabilitar pinch-to-zoom en dispositivos táctiles
      if (e.touches.length > 1) {
        e.preventDefault();
        return false;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      // Deshabilitar pinch-to-zoom en dispositivos táctiles
      if (e.touches.length > 1) {
        e.preventDefault();
        return false;
      }
    };

    // Agregar event listeners
    document.addEventListener('keydown', handleKeyDown, { passive: false });
    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <AdminProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Routes>
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/*" element={
                <>
                  <Header />
                  <main>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/movies" element={<Movies />} />
                      <Route path="/tv" element={<TVShows />} />
                      <Route path="/anime" element={<Anime />} />
                      <Route path="/search" element={<SearchPage />} />
                      <Route path="/movie/:id" element={<MovieDetail />} />
                      <Route path="/tv/:id" element={<TVDetail />} />
                      <Route path="/cart" element={<Cart />} />
                    </Routes>
                  </main>
                </>
              } />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AdminProvider>
  );
}

export default App;`;
}
function generateIndexCss() {
  return `@tailwind base;
@tailwind components;
@tailwind utilities;

/* Configuraciones adicionales para deshabilitar zoom */
@layer base {
  html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
    touch-action: manipulation;
  }
  
  body {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    overflow-x: hidden;
  }
  
  /* Permitir selección solo en elementos de entrada */
  input, textarea, [contenteditable="true"] {
    -webkit-user-select: text !important;
    -moz-user-select: text !important;
    -ms-user-select: text !important;
    user-select: text !important;
  }
  
  /* Prevenir zoom accidental en dispositivos móviles */
  input[type="text"],
  input[type="email"],
  input[type="tel"],
  input[type="password"],
  input[type="number"],
  input[type="search"],
  textarea,
  select {
    font-size: 16px !important;
    transform: translateZ(0);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  
  /* Deshabilitar zoom en imágenes */
  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    pointer-events: none;
  }
  
  /* Permitir interacción en botones e imágenes clickeables */
  button, a, [role="button"], .clickable {
    pointer-events: auto;
  }
  
  button img, a img, [role="button"] img, .clickable img {
    pointer-events: none;
  }
  
  /* Custom animations */
  @keyframes shrink {
    from { width: 100%; }
    to { width: 0%; }
  }
  
  .animate-shrink {
    animation: shrink 3s linear forwards;
  }
  
  /* Animaciones para efectos visuales modernos */
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  
  .animation-delay-200 {
    animation-delay: 200ms;
  }
  
  .animation-delay-400 {
    animation-delay: 400ms;
  }
  
  .animation-delay-600 {
    animation-delay: 600ms;
  }
  
  /* Animaciones para el modal */
  @keyframes fade-in {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  
  .animate-in {
    animation: fade-in 0.3s ease-out;
  }
  
  /* Enhanced hover effects */
  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
    }
    50% {
      box-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(147, 51, 234, 0.6);
    }
  }
  
  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }
  
  /* Floating animation */
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  /* Shimmer effect */
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  
  .animate-shimmer {
    animation: shimmer 2s ease-in-out infinite;
  }
  
  /* Enhanced pulse */
  @keyframes enhanced-pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }
  
  .animate-enhanced-pulse {
    animation: enhanced-pulse 2s ease-in-out infinite;
  }
}`;
}
function generateViteEnvDts() {
  return `/// <reference types="vite/client" />`;
}
function generateCartAnimation() {
  return "// CartAnimation.tsx source code";
}
function generateCastSection() {
  return "// CastSection.tsx source code";
}
function generateErrorMessage() {
  return "// ErrorMessage.tsx source code";
}
function generateHeader() {
  return "// Header.tsx source code";
}
function generateHeroCarousel() {
  return "// HeroCarousel.tsx source code";
}
function generateLoadingSpinner() {
  return "// LoadingSpinner.tsx source code";
}
function generateMovieCard() {
  return "// MovieCard.tsx source code";
}
function generateOptimizedImage() {
  return "// OptimizedImage.tsx source code";
}
function generateToast() {
  return "// Toast.tsx source code";
}
function generateVideoPlayer() {
  return "// VideoPlayer.tsx source code";
}
function generateHomePage() {
  return "// Home.tsx source code";
}
function generateMoviesPage() {
  return "// Movies.tsx source code";
}
function generateTVShowsPage() {
  return "// TVShows.tsx source code";
}
function generateAnimePage() {
  return "// Anime.tsx source code";
}
function generateSearchPage() {
  return "// Search.tsx source code";
}
function generateCartPage() {
  return "// Cart.tsx source code";
}
function generateMovieDetailPage() {
  return "// MovieDetail.tsx source code";
}
function generateTVDetailPage() {
  return "// TVDetail.tsx source code";
}
function generateAdminPanelPage() {
  return "// AdminPanel.tsx source code";
}
function generateApiService() {
  return "// api.ts source code";
}
function generateTmdbService() {
  return "// tmdb.ts source code";
}
function generateContentSyncService() {
  return "// contentSync.ts source code";
}
function generateContentFilterService() {
  return "// contentFilter.ts source code";
}
function generateWhatsappUtils() {
  return "// whatsapp.ts source code";
}
function generatePerformanceUtils() {
  return "// performance.ts source code";
}
function generateErrorHandlerUtils() {
  return "// errorHandler.ts source code";
}
function generateSystemExportUtils() {
  return "// systemExport.ts source code";
}
function generateSourceCodeGeneratorUtils() {
  return "// sourceCodeGenerator.ts source code";
}
function generateOptimizedContentHook() {
  return "// useOptimizedContent.ts source code";
}
function generatePerformanceHook() {
  return "// usePerformance.ts source code";
}
function generateContentSyncHook() {
  return "// useContentSync.ts source code";
}
function generateApiConfig() {
  return "// api.ts config source code";
}
function generateMovieTypes() {
  return "// movie.ts types source code";
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZUNvZGVHZW5lcmF0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpTWmlwIGZyb20gJ2pzemlwJztcbmltcG9ydCB0eXBlIHsgU3lzdGVtQ29uZmlnIH0gZnJvbSAnLi4vY29udGV4dC9BZG1pbkNvbnRleHQnO1xuXG4vLyBGdW5jacOzbiBwcmluY2lwYWwgcGFyYSBnZW5lcmFyIGVsIGPDs2RpZ28gZnVlbnRlIGNvbXBsZXRvIGNvbiBjb25maWd1cmFjacOzbiBlbWJlYmlkYVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlQ29tcGxldGVTb3VyY2VDb2RlKHN5c3RlbUNvbmZpZzogU3lzdGVtQ29uZmlnKTogUHJvbWlzZTx2b2lkPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgemlwID0gbmV3IEpTWmlwKCk7XG4gICAgXG4gICAgLy8gR2VuZXJhciB0b2RvcyBsb3MgYXJjaGl2b3MgZGVsIHNpc3RlbWEgY29uIGNvbmZpZ3VyYWNpw7NuIGVtYmViaWRhXG4gICAgYXdhaXQgZ2VuZXJhdGVBbGxTb3VyY2VGaWxlcyh6aXAsIHN5c3RlbUNvbmZpZyk7XG4gICAgXG4gICAgLy8gR2VuZXJhciB5IGRlc2NhcmdhciBlbCBaSVBcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgemlwLmdlbmVyYXRlQXN5bmMoeyB0eXBlOiAnYmxvYicgfSk7XG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChjb250ZW50KTtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICBsaW5rLmRvd25sb2FkID0gYFRWX2FfbGFfQ2FydGFfU2lzdGVtYV9Db21wbGV0b18ke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdfS56aXBgO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgbGluay5jbGljaygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgIFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdlbmVyYXRpbmcgY29tcGxldGUgc291cmNlIGNvZGU6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbi8vIEZ1bmNpw7NuIHBhcmEgZ2VuZXJhciB0b2RvcyBsb3MgYXJjaGl2b3MgZGVsIHNpc3RlbWFcbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlQWxsU291cmNlRmlsZXMoemlwOiBKU1ppcCwgc3lzdGVtQ29uZmlnOiBTeXN0ZW1Db25maWcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgLy8gQXJjaGl2b3MgZGUgY29uZmlndXJhY2nDs24gZGVsIHByb3llY3RvXG4gIHppcC5maWxlKCdwYWNrYWdlLmpzb24nLCBnZW5lcmF0ZVBhY2thZ2VKc29uKCkpO1xuICB6aXAuZmlsZSgndml0ZS5jb25maWcudHMnLCBnZW5lcmF0ZVZpdGVDb25maWcoKSk7XG4gIHppcC5maWxlKCd0YWlsd2luZC5jb25maWcuanMnLCBnZW5lcmF0ZVRhaWx3aW5kQ29uZmlnKCkpO1xuICB6aXAuZmlsZSgndHNjb25maWcuanNvbicsIGdlbmVyYXRlVHNDb25maWcoKSk7XG4gIHppcC5maWxlKCd0c2NvbmZpZy5hcHAuanNvbicsIGdlbmVyYXRlVHNDb25maWdBcHAoKSk7XG4gIHppcC5maWxlKCd0c2NvbmZpZy5ub2RlLmpzb24nLCBnZW5lcmF0ZVRzQ29uZmlnTm9kZSgpKTtcbiAgemlwLmZpbGUoJ3Bvc3Rjc3MuY29uZmlnLmpzJywgZ2VuZXJhdGVQb3N0Y3NzQ29uZmlnKCkpO1xuICB6aXAuZmlsZSgnZXNsaW50LmNvbmZpZy5qcycsIGdlbmVyYXRlRXNsaW50Q29uZmlnKCkpO1xuICB6aXAuZmlsZSgnaW5kZXguaHRtbCcsIGdlbmVyYXRlSW5kZXhIdG1sKCkpO1xuICB6aXAuZmlsZSgndmVyY2VsLmpzb24nLCBnZW5lcmF0ZVZlcmNlbENvbmZpZygpKTtcbiAgemlwLmZpbGUoJ1JFQURNRS5tZCcsIGdlbmVyYXRlUmVhZG1lKHN5c3RlbUNvbmZpZykpO1xuICBcbiAgLy8gQXJjaGl2b3MgcMO6YmxpY29zXG4gIGNvbnN0IHB1YmxpY0ZvbGRlciA9IHppcC5mb2xkZXIoJ3B1YmxpYycpO1xuICBpZiAocHVibGljRm9sZGVyKSB7XG4gICAgcHVibGljRm9sZGVyLmZpbGUoJ19yZWRpcmVjdHMnLCBnZW5lcmF0ZU5ldGxpZnlSZWRpcmVjdHMoKSk7XG4gIH1cbiAgXG4gIC8vIEFyY2hpdm9zIGZ1ZW50ZSBwcmluY2lwYWxlc1xuICBjb25zdCBzcmNGb2xkZXIgPSB6aXAuZm9sZGVyKCdzcmMnKTtcbiAgaWYgKHNyY0ZvbGRlcikge1xuICAgIHNyY0ZvbGRlci5maWxlKCdtYWluLnRzeCcsIGdlbmVyYXRlTWFpblRzeCgpKTtcbiAgICBzcmNGb2xkZXIuZmlsZSgnQXBwLnRzeCcsIGdlbmVyYXRlQXBwVHN4KCkpO1xuICAgIHNyY0ZvbGRlci5maWxlKCdpbmRleC5jc3MnLCBnZW5lcmF0ZUluZGV4Q3NzKCkpO1xuICAgIHNyY0ZvbGRlci5maWxlKCd2aXRlLWVudi5kLnRzJywgZ2VuZXJhdGVWaXRlRW52RHRzKCkpO1xuICAgIFxuICAgIC8vIENvbXBvbmVudGVzIGNvbiBjb25maWd1cmFjacOzbiBlbWJlYmlkYVxuICAgIGNvbnN0IGNvbXBvbmVudHNGb2xkZXIgPSBzcmNGb2xkZXIuZm9sZGVyKCdjb21wb25lbnRzJyk7XG4gICAgaWYgKGNvbXBvbmVudHNGb2xkZXIpIHtcbiAgICAgIGNvbXBvbmVudHNGb2xkZXIuZmlsZSgnQ2hlY2tvdXRNb2RhbC50c3gnLCBnZW5lcmF0ZUNoZWNrb3V0TW9kYWxXaXRoRW1iZWRkZWRDb25maWcoc3lzdGVtQ29uZmlnKSk7XG4gICAgICBjb21wb25lbnRzRm9sZGVyLmZpbGUoJ05vdmVsYXNNb2RhbC50c3gnLCBnZW5lcmF0ZU5vdmVsYXNNb2RhbFdpdGhFbWJlZGRlZENvbmZpZyhzeXN0ZW1Db25maWcpKTtcbiAgICAgIGNvbXBvbmVudHNGb2xkZXIuZmlsZSgnUHJpY2VDYXJkLnRzeCcsIGdlbmVyYXRlUHJpY2VDYXJkV2l0aEVtYmVkZGVkQ29uZmlnKHN5c3RlbUNvbmZpZykpO1xuICAgICAgY29tcG9uZW50c0ZvbGRlci5maWxlKCdDYXJ0QW5pbWF0aW9uLnRzeCcsIGdlbmVyYXRlQ2FydEFuaW1hdGlvbigpKTtcbiAgICAgIGNvbXBvbmVudHNGb2xkZXIuZmlsZSgnQ2FzdFNlY3Rpb24udHN4JywgZ2VuZXJhdGVDYXN0U2VjdGlvbigpKTtcbiAgICAgIGNvbXBvbmVudHNGb2xkZXIuZmlsZSgnRXJyb3JNZXNzYWdlLnRzeCcsIGdlbmVyYXRlRXJyb3JNZXNzYWdlKCkpO1xuICAgICAgY29tcG9uZW50c0ZvbGRlci5maWxlKCdIZWFkZXIudHN4JywgZ2VuZXJhdGVIZWFkZXIoKSk7XG4gICAgICBjb21wb25lbnRzRm9sZGVyLmZpbGUoJ0hlcm9DYXJvdXNlbC50c3gnLCBnZW5lcmF0ZUhlcm9DYXJvdXNlbCgpKTtcbiAgICAgIGNvbXBvbmVudHNGb2xkZXIuZmlsZSgnTG9hZGluZ1NwaW5uZXIudHN4JywgZ2VuZXJhdGVMb2FkaW5nU3Bpbm5lcigpKTtcbiAgICAgIGNvbXBvbmVudHNGb2xkZXIuZmlsZSgnTW92aWVDYXJkLnRzeCcsIGdlbmVyYXRlTW92aWVDYXJkKCkpO1xuICAgICAgY29tcG9uZW50c0ZvbGRlci5maWxlKCdPcHRpbWl6ZWRJbWFnZS50c3gnLCBnZW5lcmF0ZU9wdGltaXplZEltYWdlKCkpO1xuICAgICAgY29tcG9uZW50c0ZvbGRlci5maWxlKCdUb2FzdC50c3gnLCBnZW5lcmF0ZVRvYXN0KCkpO1xuICAgICAgY29tcG9uZW50c0ZvbGRlci5maWxlKCdWaWRlb1BsYXllci50c3gnLCBnZW5lcmF0ZVZpZGVvUGxheWVyKCkpO1xuICAgIH1cbiAgICBcbiAgICAvLyBDb250ZXh0b3MgY29uIGNvbmZpZ3VyYWNpw7NuIGVtYmViaWRhXG4gICAgY29uc3QgY29udGV4dEZvbGRlciA9IHNyY0ZvbGRlci5mb2xkZXIoJ2NvbnRleHQnKTtcbiAgICBpZiAoY29udGV4dEZvbGRlcikge1xuICAgICAgY29udGV4dEZvbGRlci5maWxlKCdBZG1pbkNvbnRleHQudHN4JywgZ2VuZXJhdGVBZG1pbkNvbnRleHRXaXRoRW1iZWRkZWRDb25maWcoc3lzdGVtQ29uZmlnKSk7XG4gICAgICBjb250ZXh0Rm9sZGVyLmZpbGUoJ0NhcnRDb250ZXh0LnRzeCcsIGdlbmVyYXRlQ2FydENvbnRleHRXaXRoRW1iZWRkZWRDb25maWcoc3lzdGVtQ29uZmlnKSk7XG4gICAgfVxuICAgIFxuICAgIC8vIFDDoWdpbmFzXG4gICAgY29uc3QgcGFnZXNGb2xkZXIgPSBzcmNGb2xkZXIuZm9sZGVyKCdwYWdlcycpO1xuICAgIGlmIChwYWdlc0ZvbGRlcikge1xuICAgICAgcGFnZXNGb2xkZXIuZmlsZSgnSG9tZS50c3gnLCBnZW5lcmF0ZUhvbWVQYWdlKCkpO1xuICAgICAgcGFnZXNGb2xkZXIuZmlsZSgnTW92aWVzLnRzeCcsIGdlbmVyYXRlTW92aWVzUGFnZSgpKTtcbiAgICAgIHBhZ2VzRm9sZGVyLmZpbGUoJ1RWU2hvd3MudHN4JywgZ2VuZXJhdGVUVlNob3dzUGFnZSgpKTtcbiAgICAgIHBhZ2VzRm9sZGVyLmZpbGUoJ0FuaW1lLnRzeCcsIGdlbmVyYXRlQW5pbWVQYWdlKCkpO1xuICAgICAgcGFnZXNGb2xkZXIuZmlsZSgnU2VhcmNoLnRzeCcsIGdlbmVyYXRlU2VhcmNoUGFnZSgpKTtcbiAgICAgIHBhZ2VzRm9sZGVyLmZpbGUoJ0NhcnQudHN4JywgZ2VuZXJhdGVDYXJ0UGFnZSgpKTtcbiAgICAgIHBhZ2VzRm9sZGVyLmZpbGUoJ01vdmllRGV0YWlsLnRzeCcsIGdlbmVyYXRlTW92aWVEZXRhaWxQYWdlKCkpO1xuICAgICAgcGFnZXNGb2xkZXIuZmlsZSgnVFZEZXRhaWwudHN4JywgZ2VuZXJhdGVUVkRldGFpbFBhZ2UoKSk7XG4gICAgICBwYWdlc0ZvbGRlci5maWxlKCdBZG1pblBhbmVsLnRzeCcsIGdlbmVyYXRlQWRtaW5QYW5lbFBhZ2UoKSk7XG4gICAgfVxuICAgIFxuICAgIC8vIFNlcnZpY2lvc1xuICAgIGNvbnN0IHNlcnZpY2VzRm9sZGVyID0gc3JjRm9sZGVyLmZvbGRlcignc2VydmljZXMnKTtcbiAgICBpZiAoc2VydmljZXNGb2xkZXIpIHtcbiAgICAgIHNlcnZpY2VzRm9sZGVyLmZpbGUoJ2FwaS50cycsIGdlbmVyYXRlQXBpU2VydmljZSgpKTtcbiAgICAgIHNlcnZpY2VzRm9sZGVyLmZpbGUoJ3RtZGIudHMnLCBnZW5lcmF0ZVRtZGJTZXJ2aWNlKCkpO1xuICAgICAgc2VydmljZXNGb2xkZXIuZmlsZSgnY29udGVudFN5bmMudHMnLCBnZW5lcmF0ZUNvbnRlbnRTeW5jU2VydmljZSgpKTtcbiAgICAgIHNlcnZpY2VzRm9sZGVyLmZpbGUoJ2NvbnRlbnRGaWx0ZXIudHMnLCBnZW5lcmF0ZUNvbnRlbnRGaWx0ZXJTZXJ2aWNlKCkpO1xuICAgIH1cbiAgICBcbiAgICAvLyBVdGlsaWRhZGVzXG4gICAgY29uc3QgdXRpbHNGb2xkZXIgPSBzcmNGb2xkZXIuZm9sZGVyKCd1dGlscycpO1xuICAgIGlmICh1dGlsc0ZvbGRlcikge1xuICAgICAgdXRpbHNGb2xkZXIuZmlsZSgnd2hhdHNhcHAudHMnLCBnZW5lcmF0ZVdoYXRzYXBwVXRpbHMoKSk7XG4gICAgICB1dGlsc0ZvbGRlci5maWxlKCdwZXJmb3JtYW5jZS50cycsIGdlbmVyYXRlUGVyZm9ybWFuY2VVdGlscygpKTtcbiAgICAgIHV0aWxzRm9sZGVyLmZpbGUoJ2Vycm9ySGFuZGxlci50cycsIGdlbmVyYXRlRXJyb3JIYW5kbGVyVXRpbHMoKSk7XG4gICAgICB1dGlsc0ZvbGRlci5maWxlKCdzeXN0ZW1FeHBvcnQudHMnLCBnZW5lcmF0ZVN5c3RlbUV4cG9ydFV0aWxzKCkpO1xuICAgICAgdXRpbHNGb2xkZXIuZmlsZSgnc291cmNlQ29kZUdlbmVyYXRvci50cycsIGdlbmVyYXRlU291cmNlQ29kZUdlbmVyYXRvclV0aWxzKCkpO1xuICAgIH1cbiAgICBcbiAgICAvLyBIb29rc1xuICAgIGNvbnN0IGhvb2tzRm9sZGVyID0gc3JjRm9sZGVyLmZvbGRlcignaG9va3MnKTtcbiAgICBpZiAoaG9va3NGb2xkZXIpIHtcbiAgICAgIGhvb2tzRm9sZGVyLmZpbGUoJ3VzZU9wdGltaXplZENvbnRlbnQudHMnLCBnZW5lcmF0ZU9wdGltaXplZENvbnRlbnRIb29rKCkpO1xuICAgICAgaG9va3NGb2xkZXIuZmlsZSgndXNlUGVyZm9ybWFuY2UudHMnLCBnZW5lcmF0ZVBlcmZvcm1hbmNlSG9vaygpKTtcbiAgICAgIGhvb2tzRm9sZGVyLmZpbGUoJ3VzZUNvbnRlbnRTeW5jLnRzJywgZ2VuZXJhdGVDb250ZW50U3luY0hvb2soKSk7XG4gICAgfVxuICAgIFxuICAgIC8vIENvbmZpZ3VyYWNpw7NuXG4gICAgY29uc3QgY29uZmlnRm9sZGVyID0gc3JjRm9sZGVyLmZvbGRlcignY29uZmlnJyk7XG4gICAgaWYgKGNvbmZpZ0ZvbGRlcikge1xuICAgICAgY29uZmlnRm9sZGVyLmZpbGUoJ2FwaS50cycsIGdlbmVyYXRlQXBpQ29uZmlnKCkpO1xuICAgIH1cbiAgICBcbiAgICAvLyBUaXBvc1xuICAgIGNvbnN0IHR5cGVzRm9sZGVyID0gc3JjRm9sZGVyLmZvbGRlcigndHlwZXMnKTtcbiAgICBpZiAodHlwZXNGb2xkZXIpIHtcbiAgICAgIHR5cGVzRm9sZGVyLmZpbGUoJ21vdmllLnRzJywgZ2VuZXJhdGVNb3ZpZVR5cGVzKCkpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBGdW5jaW9uZXMgcGFyYSBnZW5lcmFyIGFyY2hpdm9zIGVzcGVjw61maWNvcyBjb24gY29uZmlndXJhY2nDs24gZW1iZWJpZGFcblxuZnVuY3Rpb24gZ2VuZXJhdGVDaGVja291dE1vZGFsV2l0aEVtYmVkZGVkQ29uZmlnKHN5c3RlbUNvbmZpZzogU3lzdGVtQ29uZmlnKTogc3RyaW5nIHtcbiAgY29uc3QgZGVsaXZlcnlab25lcyA9IEpTT04uc3RyaW5naWZ5KHN5c3RlbUNvbmZpZy5kZWxpdmVyeVpvbmVzLCBudWxsLCAyKTtcbiAgY29uc3QgcHJpY2VzID0gSlNPTi5zdHJpbmdpZnkoc3lzdGVtQ29uZmlnLnByaWNlcywgbnVsbCwgMik7XG4gIFxuICByZXR1cm4gYGltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgWCwgTWFwUGluLCBVc2VyLCBQaG9uZSwgSG9tZSwgQ3JlZGl0Q2FyZCwgRG9sbGFyU2lnbiwgTWVzc2FnZUNpcmNsZSwgQ2FsY3VsYXRvciwgVHJ1Y2ssIEV4dGVybmFsTGluayB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbi8vIFpPTkFTIERFIEVOVFJFR0EgRU1CRUJJREFTIC0gR2VuZXJhZGFzIGF1dG9tw6F0aWNhbWVudGVcbmNvbnN0IEVNQkVEREVEX0RFTElWRVJZX1pPTkVTID0gJHtkZWxpdmVyeVpvbmVzfTtcblxuLy8gUFJFQ0lPUyBFTUJFQklET1NcbmNvbnN0IEVNQkVEREVEX1BSSUNFUyA9ICR7cHJpY2VzfTtcblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21lckluZm8ge1xuICBmdWxsTmFtZTogc3RyaW5nO1xuICBwaG9uZTogc3RyaW5nO1xuICBhZGRyZXNzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3JkZXJEYXRhIHtcbiAgb3JkZXJJZDogc3RyaW5nO1xuICBjdXN0b21lckluZm86IEN1c3RvbWVySW5mbztcbiAgZGVsaXZlcnlab25lOiBzdHJpbmc7XG4gIGRlbGl2ZXJ5Q29zdDogbnVtYmVyO1xuICBpdGVtczogYW55W107XG4gIHN1YnRvdGFsOiBudW1iZXI7XG4gIHRyYW5zZmVyRmVlOiBudW1iZXI7XG4gIHRvdGFsOiBudW1iZXI7XG4gIGNhc2hUb3RhbD86IG51bWJlcjtcbiAgdHJhbnNmZXJUb3RhbD86IG51bWJlcjtcbiAgcGlja3VwTG9jYXRpb24/OiBib29sZWFuO1xuICBzaG93TG9jYXRpb25NYXA/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgQ2hlY2tvdXRNb2RhbFByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICBvbkNoZWNrb3V0OiAob3JkZXJEYXRhOiBPcmRlckRhdGEpID0+IHZvaWQ7XG4gIGl0ZW1zOiBBcnJheTx7XG4gICAgaWQ6IG51bWJlcjtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHByaWNlOiBudW1iZXI7XG4gICAgcXVhbnRpdHk6IG51bWJlcjtcbiAgfT47XG4gIHRvdGFsOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGVja291dE1vZGFsKHsgaXNPcGVuLCBvbkNsb3NlLCBvbkNoZWNrb3V0LCBpdGVtcywgdG90YWwgfTogQ2hlY2tvdXRNb2RhbFByb3BzKSB7XG4gIGNvbnN0IFtjdXN0b21lckluZm8sIHNldEN1c3RvbWVySW5mb10gPSB1c2VTdGF0ZTxDdXN0b21lckluZm8+KHtcbiAgICBmdWxsTmFtZTogJycsXG4gICAgcGhvbmU6ICcnLFxuICAgIGFkZHJlc3M6ICcnXG4gIH0pO1xuICBjb25zdCBbc2VsZWN0ZWRab25lLCBzZXRTZWxlY3RlZFpvbmVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZGVsaXZlcnlDb3N0LCBzZXREZWxpdmVyeUNvc3RdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtwaWNrdXBMb2NhdGlvbiwgc2V0UGlja3VwTG9jYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd0xvY2F0aW9uTWFwLCBzZXRTaG93TG9jYXRpb25NYXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGU8UGFydGlhbDxDdXN0b21lckluZm8+Pih7fSk7XG5cbiAgLy8gVXNlIGVtYmVkZGVkIGRlbGl2ZXJ5IHpvbmVzXG4gIGNvbnN0IGRlbGl2ZXJ5Wm9uZXMgPSBFTUJFRERFRF9ERUxJVkVSWV9aT05FUztcblxuICAvLyBBZ3JlZ2FyIG9wY2nDs24gZGUgcmVjb2dpZGEgZW4gZWwgbG9jYWxcbiAgY29uc3QgcGlja3VwT3B0aW9uID0ge1xuICAgIGlkOiAncGlja3VwJyxcbiAgICBuYW1lOiAnUmVjb2dpZGEgZW4gVFYgYSBsYSBDYXJ0YScsXG4gICAgY29zdDogMFxuICB9O1xuXG4gIGNvbnN0IGFsbERlbGl2ZXJ5T3B0aW9ucyA9IFtwaWNrdXBPcHRpb24sIC4uLmRlbGl2ZXJ5Wm9uZXNdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkWm9uZSA9PT0gJ3BpY2t1cCcpIHtcbiAgICAgIHNldERlbGl2ZXJ5Q29zdCgwKTtcbiAgICAgIHNldFBpY2t1cExvY2F0aW9uKHRydWUpO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRab25lKSB7XG4gICAgICBjb25zdCB6b25lID0gZGVsaXZlcnlab25lcy5maW5kKHogPT4gei5uYW1lID09PSBzZWxlY3RlZFpvbmUpO1xuICAgICAgc2V0RGVsaXZlcnlDb3N0KHpvbmUgPyB6b25lLmNvc3QgOiAwKTtcbiAgICAgIHNldFBpY2t1cExvY2F0aW9uKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtzZWxlY3RlZFpvbmUsIGRlbGl2ZXJ5Wm9uZXNdKTtcblxuICBjb25zdCB2YWxpZGF0ZUZvcm0gPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgbmV3RXJyb3JzOiBQYXJ0aWFsPEN1c3RvbWVySW5mbz4gPSB7fTtcblxuICAgIGlmICghY3VzdG9tZXJJbmZvLmZ1bGxOYW1lLnRyaW0oKSkge1xuICAgICAgbmV3RXJyb3JzLmZ1bGxOYW1lID0gJ0VsIG5vbWJyZSBjb21wbGV0byBlcyByZXF1ZXJpZG8nO1xuICAgIH1cblxuICAgIGlmICghY3VzdG9tZXJJbmZvLnBob25lLnRyaW0oKSkge1xuICAgICAgbmV3RXJyb3JzLnBob25lID0gJ0VsIHRlbMOpZm9ubyBlcyByZXF1ZXJpZG8nO1xuICAgIH0gZWxzZSBpZiAoIS9eWytdP1swLTlcXFxcc1xcXFwtKCldezgsfSQvLnRlc3QoY3VzdG9tZXJJbmZvLnBob25lKSkge1xuICAgICAgbmV3RXJyb3JzLnBob25lID0gJ0Zvcm1hdG8gZGUgdGVsw6lmb25vIGludsOhbGlkbyc7XG4gICAgfVxuXG4gICAgaWYgKCFwaWNrdXBMb2NhdGlvbiAmJiAhY3VzdG9tZXJJbmZvLmFkZHJlc3MudHJpbSgpKSB7XG4gICAgICBuZXdFcnJvcnMuYWRkcmVzcyA9ICdMYSBkaXJlY2Npw7NuIGVzIHJlcXVlcmlkYSBwYXJhIGVudHJlZ2EgYSBkb21pY2lsaW8nO1xuICAgIH1cblxuICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhuZXdFcnJvcnMpLmxlbmd0aCA9PT0gMDtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIGlmICghdmFsaWRhdGVGb3JtKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXNlbGVjdGVkWm9uZSkge1xuICAgICAgYWxlcnQoJ1BvciBmYXZvciBzZWxlY2Npb25hIHVuYSBvcGNpw7NuIGRlIGVudHJlZ2EnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvcmRlcklkID0gXFxgVFYtXFwke0RhdGUubm93KCl9XFxgO1xuICAgIGNvbnN0IG9yZGVyRGF0YTogT3JkZXJEYXRhID0ge1xuICAgICAgb3JkZXJJZCxcbiAgICAgIGN1c3RvbWVySW5mbyxcbiAgICAgIGRlbGl2ZXJ5Wm9uZTogc2VsZWN0ZWRab25lLFxuICAgICAgZGVsaXZlcnlDb3N0LFxuICAgICAgaXRlbXMsXG4gICAgICBzdWJ0b3RhbDogdG90YWwsXG4gICAgICB0cmFuc2ZlckZlZTogMCxcbiAgICAgIHRvdGFsOiB0b3RhbCArIGRlbGl2ZXJ5Q29zdCxcbiAgICAgIHBpY2t1cExvY2F0aW9uLFxuICAgICAgc2hvd0xvY2F0aW9uTWFwXG4gICAgfTtcblxuICAgIG9uQ2hlY2tvdXQob3JkZXJEYXRhKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChmaWVsZDoga2V5b2YgQ3VzdG9tZXJJbmZvLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0Q3VzdG9tZXJJbmZvKHByZXYgPT4gKHsgLi4ucHJldiwgW2ZpZWxkXTogdmFsdWUgfSkpO1xuICAgIGlmIChlcnJvcnNbZmllbGRdKSB7XG4gICAgICBzZXRFcnJvcnMocHJldiA9PiAoeyAuLi5wcmV2LCBbZmllbGRdOiB1bmRlZmluZWQgfSkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvcGVuTG9jYXRpb25NYXAgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFwVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS8yMCVDMiVCMDAyXFxcXCcyMi41JTIyTis3NSVDMiVCMDUwXFxcXCc1OC44JTIyVy9AMjAuMDM5NDYwNCwtNzUuODQ5NTQxNCwxODBtL2RhdGE9ITNtMSExZTMhNG00ITNtMyE4bTIhM2QyMC4wMzk1ODUhNGQtNzUuODQ5NjYzP2VudHJ5PXR0dSZnX2VwPUVnb3lNREkxTURjek1DNHdJS1hNRFNvQVNBRlFBdyUzRCUzRCc7XG4gICAgd2luZG93Lm9wZW4obWFwVXJsLCAnX2JsYW5rJywgJ25vb3BlbmVyLG5vcmVmZXJyZXInKTtcbiAgfTtcblxuICBpZiAoIWlzT3BlbikgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2svNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IHotNTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgdy1mdWxsIG1heC13LTJ4bCBtYXgtaC1bOTB2aF0gb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy0yeGxcIj5cbiAgICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS02MDAgdG8tcHVycGxlLTYwMCBwLTYgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUvMjAgcC0zIHJvdW5kZWQteGwgbXItNFwiPlxuICAgICAgICAgICAgICAgIDxNZXNzYWdlQ2lyY2xlIGNsYXNzTmFtZT1cImgtNiB3LTZcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+RmluYWxpemFyIFBlZGlkbzwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTEwMFwiPkNvbXBsZXRhIHR1cyBkYXRvcyBwYXJhIHByb2NlZGVyPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgaG92ZXI6Ymctd2hpdGUvMjAgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy15LWF1dG8gbWF4LWgtW2NhbGMoOTB2aC0xMjBweCldXCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwicC02IHNwYWNlLXktNlwiPlxuICAgICAgICAgICAgey8qIEN1c3RvbWVyIEluZm9ybWF0aW9uICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIHJvdW5kZWQteGwgcC02XCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCBtYi00IGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFVzZXIgY2xhc3NOYW1lPVwiaC01IHctNSBtci0yIHRleHQtYmx1ZS02MDBcIiAvPlxuICAgICAgICAgICAgICAgIEluZm9ybWFjacOzbiBQZXJzb25hbFxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIE5vbWJyZSBDb21wbGV0byAqXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVySW5mby5mdWxsTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZSgnZnVsbE5hbWUnLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XFxgdy1mdWxsIHB4LTQgcHktMyBib3JkZXIgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgXFwke1xuICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5mdWxsTmFtZSA/ICdib3JkZXItcmVkLTUwMCcgOiAnYm9yZGVyLWdyYXktMzAwJ1xuICAgICAgICAgICAgICAgICAgICB9XFxgfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluZ3Jlc2EgdHUgbm9tYnJlIGNvbXBsZXRvXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLmZ1bGxOYW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQtc20gbXQtMVwiPntlcnJvcnMuZnVsbE5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgVGVsw6lmb25vICpcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXN0b21lckluZm8ucGhvbmV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoJ3Bob25lJywgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xcYHctZnVsbCBweC00IHB5LTMgYm9yZGVyIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwIFxcJHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucGhvbmUgPyAnYm9yZGVyLXJlZC01MDAnIDogJ2JvcmRlci1ncmF5LTMwMCdcbiAgICAgICAgICAgICAgICAgICAgfVxcYH1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrNTMgNTQ2OSAwODc4XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBob25lICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQtc20gbXQtMVwiPntlcnJvcnMucGhvbmV9PC9wPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHshcGlja3VwTG9jYXRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgRGlyZWNjacOzbiBDb21wbGV0YSAqXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXN0b21lckluZm8uYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKCdhZGRyZXNzJywgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcXGB3LWZ1bGwgcHgtNCBweS0zIGJvcmRlciByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCByZXNpemUtbm9uZSBcXCR7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuYWRkcmVzcyA/ICdib3JkZXItcmVkLTUwMCcgOiAnYm9yZGVyLWdyYXktMzAwJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cXGB9XG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYWxsZSwgbsO6bWVybywgZW50cmUgY2FsbGVzLCByZWZlcmVuY2lhcy4uLlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuYWRkcmVzcyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQtc20gbXQtMVwiPntlcnJvcnMuYWRkcmVzc308L3A+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogRGVsaXZlcnkgT3B0aW9ucyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MCByb3VuZGVkLXhsIHAtNlwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgbWItNCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxNYXBQaW4gY2xhc3NOYW1lPVwiaC01IHctNSBtci0yIHRleHQtZ3JlZW4tNjAwXCIgLz5cbiAgICAgICAgICAgICAgICBPcGNpb25lcyBkZSBFbnRyZWdhXG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICAgIHthbGxEZWxpdmVyeU9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbi5pZCB8fCBvcHRpb24ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcXGBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC00IGJvcmRlciByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tY29sb3JzIFxcJHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFpvbmUgPT09IChvcHRpb24uaWQgPT09ICdwaWNrdXAnID8gJ3BpY2t1cCcgOiBvcHRpb24ubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JvcmRlci1ncmVlbi01MDAgYmctZ3JlZW4tNTAnXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdib3JkZXItZ3JheS0zMDAgaG92ZXI6Ym9yZGVyLWdyZWVuLTMwMCdcbiAgICAgICAgICAgICAgICAgICAgfVxcYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZWxpdmVyeU9wdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9uLmlkID09PSAncGlja3VwJyA/ICdwaWNrdXAnIDogb3B0aW9uLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFpvbmUgPT09IChvcHRpb24uaWQgPT09ICdwaWNrdXAnID8gJ3BpY2t1cCcgOiBvcHRpb24ubmFtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkWm9uZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0zIGgtNCB3LTQgdGV4dC1ncmVlbi02MDAgZm9jdXM6cmluZy1ncmVlbi01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj57b3B0aW9uLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5pZCA9PT0gJ3BpY2t1cCcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5SZXBhcnRvIE51ZXZvIFZpc3RhIEFsZWdyZSwgU2FudGlhZ28gZGUgQ3ViYTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1xcYGZvbnQtc2VtaWJvbGQgXFwke29wdGlvbi5jb3N0ID09PSAwID8gJ3RleHQtZ3JlZW4tNjAwJyA6ICd0ZXh0LWdyZWVuLTYwMCd9XFxgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24uY29zdCA9PT0gMCA/ICdHUkFUSVMnIDogXFxgJFxcJHtvcHRpb24uY29zdC50b0xvY2FsZVN0cmluZygpfSBDVVBcXGB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBMb2NhdGlvbiBNYXAgT3B0aW9uICovfVxuICAgICAgICAgICAgICB7cGlja3VwTG9jYXRpb24gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBwLTQgYmctYmx1ZS01MCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItYmx1ZS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtYmx1ZS05MDBcIj5VYmljYWNpw7NuIGRlbCBMb2NhbDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWUtNzAwXCI+VmVyIHViaWNhY2nDs24gZW4gR29vZ2xlIE1hcHMgKG9wY2lvbmFsKTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2hvd0xvY2F0aW9uTWFwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNob3dMb2NhdGlvbk1hcChlLnRhcmdldC5jaGVja2VkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMiBoLTQgdy00IHRleHQtYmx1ZS02MDAgZm9jdXM6cmluZy1ibHVlLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWUtNzAwXCI+SW5jbHVpciB1YmljYWNpw7NuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuTG9jYXRpb25NYXB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHB4LTMgcHktMiByb3VuZGVkLWxnIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnMgZmxleCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxFeHRlcm5hbExpbmsgY2xhc3NOYW1lPVwiaC00IHctNCBtci0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFZlciBNYXBhXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAge2FsbERlbGl2ZXJ5T3B0aW9ucy5sZW5ndGggPT09IDEgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktOFwiPlxuICAgICAgICAgICAgICAgICAgPFRydWNrIGNsYXNzTmFtZT1cImgtMTIgdy0xMiB0ZXh0LWdyYXktNDAwIG14LWF1dG8gbWItNFwiIC8+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICBTb2xvIGRpc3BvbmlibGUgcmVjb2dpZGEgZW4gZWwgbG9jYWxcbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIENvbnRhY3RhIGNvbiBlbCBhZG1pbmlzdHJhZG9yIHBhcmEgY29uZmlndXJhciB6b25hcyBkZSBlbnRyZWdhIGFkaWNpb25hbGVzLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBPcmRlciBTdW1tYXJ5ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS01MCB0by1wdXJwbGUtNTAgcm91bmRlZC14bCBwLTYgYm9yZGVyIGJvcmRlci1ibHVlLTIwMFwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgbWItNCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxDYWxjdWxhdG9yIGNsYXNzTmFtZT1cImgtNSB3LTUgbXItMiB0ZXh0LWJsdWUtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICBSZXN1bWVuIGRlbCBQZWRpZG9cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5TdWJ0b3RhbCAoe2l0ZW1zLmxlbmd0aH0gZWxlbWVudG9zKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj4kXFwke3RvdGFsLnRvTG9jYWxlU3RyaW5nKCl9IENVUDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRab25lICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cGlja3VwTG9jYXRpb24gPyAnUmVjb2dpZGEgZW4gbG9jYWwnIDogJ0VudHJlZ2EnfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XFxgZm9udC1zZW1pYm9sZCBcXCR7ZGVsaXZlcnlDb3N0ID09PSAwID8gJ3RleHQtZ3JlZW4tNjAwJyA6ICcnfVxcYH0+XG4gICAgICAgICAgICAgICAgICAgICAge2RlbGl2ZXJ5Q29zdCA9PT0gMCA/ICdHUkFUSVMnIDogXFxgJFxcJHtkZWxpdmVyeUNvc3QudG9Mb2NhbGVTdHJpbmcoKX0gQ1VQXFxgfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLWdyYXktMzAwIHB0LTNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj5Ub3RhbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1ibHVlLTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICRcXCR7KHRvdGFsICsgZGVsaXZlcnlDb3N0KS50b0xvY2FsZVN0cmluZygpfSBDVVBcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBTdWJtaXQgQnV0dG9uICovfVxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFzZWxlY3RlZFpvbmV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JlZW4tNTAwIHRvLWdyZWVuLTYwMCBob3Zlcjpmcm9tLWdyZWVuLTYwMCBob3Zlcjp0by1ncmVlbi03MDAgZGlzYWJsZWQ6ZnJvbS1ncmF5LTQwMCBkaXNhYmxlZDp0by1ncmF5LTUwMCB0ZXh0LXdoaXRlIHB4LTYgcHktNCByb3VuZGVkLXhsIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNZXNzYWdlQ2lyY2xlIGNsYXNzTmFtZT1cImgtNSB3LTUgbXItMlwiIC8+XG4gICAgICAgICAgICAgIEVudmlhciBQZWRpZG8gcG9yIFdoYXRzQXBwXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICBBbCBlbnZpYXIgZWwgcGVkaWRvIHNlcsOhcyByZWRpcmlnaWRvIGEgV2hhdHNBcHAgcGFyYSBjb21wbGV0YXIgbGEgdHJhbnNhY2Npw7NuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1gO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU5vdmVsYXNNb2RhbFdpdGhFbWJlZGRlZENvbmZpZyhzeXN0ZW1Db25maWc6IFN5c3RlbUNvbmZpZyk6IHN0cmluZyB7XG4gIGNvbnN0IG5vdmVscyA9IEpTT04uc3RyaW5naWZ5KHN5c3RlbUNvbmZpZy5ub3ZlbHMsIG51bGwsIDIpO1xuICBjb25zdCBwcmljZXMgPSBKU09OLnN0cmluZ2lmeShzeXN0ZW1Db25maWcucHJpY2VzLCBudWxsLCAyKTtcbiAgXG4gIHJldHVybiBgaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBYLCBEb3dubG9hZCwgTWVzc2FnZUNpcmNsZSwgUGhvbmUsIEJvb2tPcGVuLCBJbmZvLCBDaGVjaywgRG9sbGFyU2lnbiwgQ3JlZGl0Q2FyZCwgQ2FsY3VsYXRvciwgU2VhcmNoLCBGaWx0ZXIsIFNvcnRBc2MsIFNvcnREZXNjLCBTbWFydHBob25lIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuLy8gQ0FUw4FMT0dPIERFIE5PVkVMQVMgRU1CRUJJRE8gLSBHZW5lcmFkbyBhdXRvbcOhdGljYW1lbnRlXG5jb25zdCBFTUJFRERFRF9OT1ZFTFMgPSAke25vdmVsc307XG5cbi8vIFBSRUNJT1MgRU1CRUJJRE9TXG5jb25zdCBFTUJFRERFRF9QUklDRVMgPSAke3ByaWNlc307XG5cbmludGVyZmFjZSBOb3ZlbGEge1xuICBpZDogbnVtYmVyO1xuICB0aXR1bG86IHN0cmluZztcbiAgZ2VuZXJvOiBzdHJpbmc7XG4gIGNhcGl0dWxvczogbnVtYmVyO1xuICBhw7FvOiBudW1iZXI7XG4gIGRlc2NyaXBjaW9uPzogc3RyaW5nO1xuICBwYXltZW50VHlwZT86ICdjYXNoJyB8ICd0cmFuc2Zlcic7XG59XG5cbmludGVyZmFjZSBOb3ZlbGFzTW9kYWxQcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5vdmVsYXNNb2RhbCh7IGlzT3Blbiwgb25DbG9zZSB9OiBOb3ZlbGFzTW9kYWxQcm9wcykge1xuICBjb25zdCBbc2VsZWN0ZWROb3ZlbGFzLCBzZXRTZWxlY3RlZE5vdmVsYXNdID0gdXNlU3RhdGU8bnVtYmVyW10+KFtdKTtcbiAgY29uc3QgW25vdmVsYXNXaXRoUGF5bWVudCwgc2V0Tm92ZWxhc1dpdGhQYXltZW50XSA9IHVzZVN0YXRlPE5vdmVsYVtdPihbXSk7XG4gIGNvbnN0IFtzaG93Tm92ZWxMaXN0LCBzZXRTaG93Tm92ZWxMaXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VsZWN0ZWRHZW5yZSwgc2V0U2VsZWN0ZWRHZW5yZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzZWxlY3RlZFllYXIsIHNldFNlbGVjdGVkWWVhcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzb3J0QnksIHNldFNvcnRCeV0gPSB1c2VTdGF0ZTwndGl0dWxvJyB8ICdhw7FvJyB8ICdjYXBpdHVsb3MnPigndGl0dWxvJyk7XG4gIGNvbnN0IFtzb3J0T3JkZXIsIHNldFNvcnRPcmRlcl0gPSB1c2VTdGF0ZTwnYXNjJyB8ICdkZXNjJz4oJ2FzYycpO1xuXG4gIC8vIEdldCBub3ZlbHMgYW5kIHByaWNlcyBmcm9tIGVtYmVkZGVkIGNvbmZpZ3VyYXRpb25cbiAgY29uc3QgYWRtaW5Ob3ZlbHMgPSBFTUJFRERFRF9OT1ZFTFM7XG4gIGNvbnN0IG5vdmVsUHJpY2VQZXJDaGFwdGVyID0gRU1CRURERURfUFJJQ0VTLm5vdmVsUHJpY2VQZXJDaGFwdGVyO1xuICBjb25zdCB0cmFuc2ZlckZlZVBlcmNlbnRhZ2UgPSBFTUJFRERFRF9QUklDRVMudHJhbnNmZXJGZWVQZXJjZW50YWdlO1xuICBcbiAgLy8gQmFzZSBub3ZlbHMgbGlzdFxuICBjb25zdCBkZWZhdWx0Tm92ZWxhczogTm92ZWxhW10gPSBbXTtcblxuICAvLyBDb21iaW5lIGFkbWluIG5vdmVscyB3aXRoIGRlZmF1bHQgbm92ZWxzXG4gIGNvbnN0IGFsbE5vdmVsYXMgPSBbLi4uZGVmYXVsdE5vdmVsYXMsIC4uLmFkbWluTm92ZWxzLm1hcChub3ZlbCA9PiAoe1xuICAgIGlkOiBub3ZlbC5pZCxcbiAgICB0aXR1bG86IG5vdmVsLnRpdHVsbyxcbiAgICBnZW5lcm86IG5vdmVsLmdlbmVybyxcbiAgICBjYXBpdHVsb3M6IG5vdmVsLmNhcGl0dWxvcyxcbiAgICBhw7FvOiBub3ZlbC5hw7FvLFxuICAgIGRlc2NyaXBjaW9uOiBub3ZlbC5kZXNjcmlwY2lvblxuICB9KSldO1xuXG4gIGNvbnN0IHBob25lTnVtYmVyID0gJys1MzU0NjkwODc4JztcblxuICAvLyBHZXQgdW5pcXVlIGdlbnJlc1xuICBjb25zdCB1bmlxdWVHZW5yZXMgPSBbLi4ubmV3IFNldChhbGxOb3ZlbGFzLm1hcChub3ZlbGEgPT4gbm92ZWxhLmdlbmVybykpXS5zb3J0KCk7XG4gIFxuICAvLyBHZXQgdW5pcXVlIHllYXJzXG4gIGNvbnN0IHVuaXF1ZVllYXJzID0gWy4uLm5ldyBTZXQoYWxsTm92ZWxhcy5tYXAobm92ZWxhID0+IG5vdmVsYS5hw7FvKSldLnNvcnQoKGEsIGIpID0+IGIgLSBhKTtcblxuICAvLyBJbml0aWFsaXplIG5vdmVscyB3aXRoIGRlZmF1bHQgcGF5bWVudCB0eXBlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgbm92ZWxhc1dpdGhEZWZhdWx0UGF5bWVudCA9IGFsbE5vdmVsYXMubWFwKG5vdmVsYSA9PiAoe1xuICAgICAgLi4ubm92ZWxhLFxuICAgICAgcGF5bWVudFR5cGU6ICdjYXNoJyBhcyBjb25zdFxuICAgIH0pKTtcbiAgICBzZXROb3ZlbGFzV2l0aFBheW1lbnQobm92ZWxhc1dpdGhEZWZhdWx0UGF5bWVudCk7XG4gIH0sIFtdKTtcblxuICAvLyBGaWx0ZXIgbm92ZWxzIGZ1bmN0aW9uXG4gIGNvbnN0IGdldEZpbHRlcmVkTm92ZWxhcyA9ICgpID0+IHtcbiAgICBsZXQgZmlsdGVyZWQgPSBub3ZlbGFzV2l0aFBheW1lbnQuZmlsdGVyKG5vdmVsYSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVzU2VhcmNoID0gbm92ZWxhLnRpdHVsby50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSk7XG4gICAgICBjb25zdCBtYXRjaGVzR2VucmUgPSBzZWxlY3RlZEdlbnJlID09PSAnJyB8fCBub3ZlbGEuZ2VuZXJvID09PSBzZWxlY3RlZEdlbnJlO1xuICAgICAgY29uc3QgbWF0Y2hlc1llYXIgPSBzZWxlY3RlZFllYXIgPT09ICcnIHx8IG5vdmVsYS5hw7FvLnRvU3RyaW5nKCkgPT09IHNlbGVjdGVkWWVhcjtcbiAgICAgIFxuICAgICAgcmV0dXJuIG1hdGNoZXNTZWFyY2ggJiYgbWF0Y2hlc0dlbnJlICYmIG1hdGNoZXNZZWFyO1xuICAgIH0pO1xuXG4gICAgZmlsdGVyZWQuc29ydCgoYSwgYikgPT4ge1xuICAgICAgbGV0IGNvbXBhcmlzb24gPSAwO1xuICAgICAgXG4gICAgICBzd2l0Y2ggKHNvcnRCeSkge1xuICAgICAgICBjYXNlICd0aXR1bG8nOlxuICAgICAgICAgIGNvbXBhcmlzb24gPSBhLnRpdHVsby5sb2NhbGVDb21wYXJlKGIudGl0dWxvKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYcOxbyc6XG4gICAgICAgICAgY29tcGFyaXNvbiA9IGEuYcOxbyAtIGIuYcOxbztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2FwaXR1bG9zJzpcbiAgICAgICAgICBjb21wYXJpc29uID0gYS5jYXBpdHVsb3MgLSBiLmNhcGl0dWxvcztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmV0dXJuIHNvcnRPcmRlciA9PT0gJ2FzYycgPyBjb21wYXJpc29uIDogLWNvbXBhcmlzb247XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsdGVyZWQ7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyZWROb3ZlbGFzID0gZ2V0RmlsdGVyZWROb3ZlbGFzKCk7XG5cbiAgY29uc3QgaGFuZGxlTm92ZWxUb2dnbGUgPSAobm92ZWxhSWQ6IG51bWJlcikgPT4ge1xuICAgIHNldFNlbGVjdGVkTm92ZWxhcyhwcmV2ID0+IHtcbiAgICAgIGlmIChwcmV2LmluY2x1ZGVzKG5vdmVsYUlkKSkge1xuICAgICAgICByZXR1cm4gcHJldi5maWx0ZXIoaWQgPT4gaWQgIT09IG5vdmVsYUlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbLi4ucHJldiwgbm92ZWxhSWRdO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBheW1lbnRUeXBlQ2hhbmdlID0gKG5vdmVsYUlkOiBudW1iZXIsIHBheW1lbnRUeXBlOiAnY2FzaCcgfCAndHJhbnNmZXInKSA9PiB7XG4gICAgc2V0Tm92ZWxhc1dpdGhQYXltZW50KHByZXYgPT4gXG4gICAgICBwcmV2Lm1hcChub3ZlbGEgPT4gXG4gICAgICAgIG5vdmVsYS5pZCA9PT0gbm92ZWxhSWQgXG4gICAgICAgICAgPyB7IC4uLm5vdmVsYSwgcGF5bWVudFR5cGUgfVxuICAgICAgICAgIDogbm92ZWxhXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RBbGxOb3ZlbGFzID0gKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkTm92ZWxhcyhhbGxOb3ZlbGFzLm1hcChuID0+IG4uaWQpKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckFsbE5vdmVsYXMgPSAoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWROb3ZlbGFzKFtdKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckZpbHRlcnMgPSAoKSA9PiB7XG4gICAgc2V0U2VhcmNoVGVybSgnJyk7XG4gICAgc2V0U2VsZWN0ZWRHZW5yZSgnJyk7XG4gICAgc2V0U2VsZWN0ZWRZZWFyKCcnKTtcbiAgICBzZXRTb3J0QnkoJ3RpdHVsbycpO1xuICAgIHNldFNvcnRPcmRlcignYXNjJyk7XG4gIH07XG5cbiAgLy8gQ2FsY3VsYXRlIHRvdGFscyBieSBwYXltZW50IHR5cGUgd2l0aCBlbWJlZGRlZCBwcmljaW5nXG4gIGNvbnN0IGNhbGN1bGF0ZVRvdGFscyA9ICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZE5vdmVsYXNEYXRhID0gbm92ZWxhc1dpdGhQYXltZW50LmZpbHRlcihuID0+IHNlbGVjdGVkTm92ZWxhcy5pbmNsdWRlcyhuLmlkKSk7XG4gICAgXG4gICAgY29uc3QgY2FzaE5vdmVsYXMgPSBzZWxlY3RlZE5vdmVsYXNEYXRhLmZpbHRlcihuID0+IG4ucGF5bWVudFR5cGUgPT09ICdjYXNoJyk7XG4gICAgY29uc3QgdHJhbnNmZXJOb3ZlbGFzID0gc2VsZWN0ZWROb3ZlbGFzRGF0YS5maWx0ZXIobiA9PiBuLnBheW1lbnRUeXBlID09PSAndHJhbnNmZXInKTtcbiAgICBcbiAgICBjb25zdCBjYXNoVG90YWwgPSBjYXNoTm92ZWxhcy5yZWR1Y2UoKHN1bSwgbikgPT4gc3VtICsgKG4uY2FwaXR1bG9zICogbm92ZWxQcmljZVBlckNoYXB0ZXIpLCAwKTtcbiAgICBjb25zdCB0cmFuc2ZlckJhc2VUb3RhbCA9IHRyYW5zZmVyTm92ZWxhcy5yZWR1Y2UoKHN1bSwgbikgPT4gc3VtICsgKG4uY2FwaXR1bG9zICogbm92ZWxQcmljZVBlckNoYXB0ZXIpLCAwKTtcbiAgICBjb25zdCB0cmFuc2ZlckZlZSA9IE1hdGgucm91bmQodHJhbnNmZXJCYXNlVG90YWwgKiAodHJhbnNmZXJGZWVQZXJjZW50YWdlIC8gMTAwKSk7XG4gICAgY29uc3QgdHJhbnNmZXJUb3RhbCA9IHRyYW5zZmVyQmFzZVRvdGFsICsgdHJhbnNmZXJGZWU7XG4gICAgXG4gICAgY29uc3QgZ3JhbmRUb3RhbCA9IGNhc2hUb3RhbCArIHRyYW5zZmVyVG90YWw7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhc2hOb3ZlbGFzLFxuICAgICAgdHJhbnNmZXJOb3ZlbGFzLFxuICAgICAgY2FzaFRvdGFsLFxuICAgICAgdHJhbnNmZXJCYXNlVG90YWwsXG4gICAgICB0cmFuc2ZlckZlZSxcbiAgICAgIHRyYW5zZmVyVG90YWwsXG4gICAgICBncmFuZFRvdGFsLFxuICAgICAgdG90YWxDYXBpdHVsb3M6IHNlbGVjdGVkTm92ZWxhc0RhdGEucmVkdWNlKChzdW0sIG4pID0+IHN1bSArIG4uY2FwaXR1bG9zLCAwKVxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgdG90YWxzID0gY2FsY3VsYXRlVG90YWxzKCk7XG5cbiAgY29uc3QgZ2VuZXJhdGVOb3ZlbExpc3RUZXh0ID0gKCkgPT4ge1xuICAgIGxldCBsaXN0VGV4dCA9IFwi8J+TmiBDQVTDgUxPR08gREUgTk9WRUxBUyBESVNQT05JQkxFU1xcXFxuXCI7XG4gICAgbGlzdFRleHQgKz0gXCJUViBhIGxhIENhcnRhIC0gTm92ZWxhcyBDb21wbGV0YXNcXFxcblxcXFxuXCI7XG4gICAgbGlzdFRleHQgKz0gXFxg8J+SsCBQcmVjaW86ICRcXCR7bm92ZWxQcmljZVBlckNoYXB0ZXJ9IENVUCBwb3IgY2Fww610dWxvXFxcXG5cXGA7XG4gICAgbGlzdFRleHQgKz0gXFxg8J+SsyBSZWNhcmdvIHRyYW5zZmVyZW5jaWE6IFxcJHt0cmFuc2ZlckZlZVBlcmNlbnRhZ2V9JVxcXFxuXFxgO1xuICAgIGxpc3RUZXh0ICs9IFwi8J+TsSBDb250YWN0bzogKzUzNTQ2OTA4NzhcXFxcblxcXFxuXCI7XG4gICAgbGlzdFRleHQgKz0gXCLilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZBcXFxcblxcXFxuXCI7XG4gICAgXG4gICAgaWYgKGFsbE5vdmVsYXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBsaXN0VGV4dCArPSBcIvCfk4sgTm8gaGF5IG5vdmVsYXMgZGlzcG9uaWJsZXMgZW4gZXN0ZSBtb21lbnRvLlxcXFxuXCI7XG4gICAgICBsaXN0VGV4dCArPSBcIkNvbnRhY3RhIGNvbiBlbCBhZG1pbmlzdHJhZG9yIHBhcmEgbcOhcyBpbmZvcm1hY2nDs24uXFxcXG5cXFxcblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0VGV4dCArPSBcIvCfkrUgUFJFQ0lPUyBFTiBFRkVDVElWTzpcXFxcblwiO1xuICAgICAgbGlzdFRleHQgKz0gXCLilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZBcXFxcblxcXFxuXCI7XG4gICAgICBcbiAgICAgIGFsbE5vdmVsYXMuZm9yRWFjaCgobm92ZWxhLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBiYXNlQ29zdCA9IG5vdmVsYS5jYXBpdHVsb3MgKiBub3ZlbFByaWNlUGVyQ2hhcHRlcjtcbiAgICAgICAgbGlzdFRleHQgKz0gXFxgXFwke2luZGV4ICsgMX0uIFxcJHtub3ZlbGEudGl0dWxvfVxcXFxuXFxgO1xuICAgICAgICBsaXN0VGV4dCArPSBcXGAgICDwn5O6IEfDqW5lcm86IFxcJHtub3ZlbGEuZ2VuZXJvfVxcXFxuXFxgO1xuICAgICAgICBsaXN0VGV4dCArPSBcXGAgICDwn5OKIENhcMOtdHVsb3M6IFxcJHtub3ZlbGEuY2FwaXR1bG9zfVxcXFxuXFxgO1xuICAgICAgICBsaXN0VGV4dCArPSBcXGAgICDwn5OFIEHDsW86IFxcJHtub3ZlbGEuYcOxb31cXFxcblxcYDtcbiAgICAgICAgbGlzdFRleHQgKz0gXFxgICAg8J+SsCBDb3N0byBlbiBlZmVjdGl2bzogXFwke2Jhc2VDb3N0LnRvTG9jYWxlU3RyaW5nKCl9IENVUFxcXFxuXFxcXG5cXGA7XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgbGlzdFRleHQgKz0gXFxgXFxcXG7wn4+mIFBSRUNJT1MgQ09OIFRSQU5TRkVSRU5DSUEgQkFOQ0FSSUEgKCtcXCR7dHJhbnNmZXJGZWVQZXJjZW50YWdlfSUpOlxcXFxuXFxgO1xuICAgICAgbGlzdFRleHQgKz0gXCLilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZBcXFxcblxcXFxuXCI7XG4gICAgICBcbiAgICAgIGFsbE5vdmVsYXMuZm9yRWFjaCgobm92ZWxhLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBiYXNlQ29zdCA9IG5vdmVsYS5jYXBpdHVsb3MgKiBub3ZlbFByaWNlUGVyQ2hhcHRlcjtcbiAgICAgICAgY29uc3QgdHJhbnNmZXJDb3N0ID0gTWF0aC5yb3VuZChiYXNlQ29zdCAqICgxICsgdHJhbnNmZXJGZWVQZXJjZW50YWdlIC8gMTAwKSk7XG4gICAgICAgIGNvbnN0IHJlY2FyZ28gPSB0cmFuc2ZlckNvc3QgLSBiYXNlQ29zdDtcbiAgICAgICAgbGlzdFRleHQgKz0gXFxgXFwke2luZGV4ICsgMX0uIFxcJHtub3ZlbGEudGl0dWxvfVxcXFxuXFxgO1xuICAgICAgICBsaXN0VGV4dCArPSBcXGAgICDwn5O6IEfDqW5lcm86IFxcJHtub3ZlbGEuZ2VuZXJvfVxcXFxuXFxgO1xuICAgICAgICBsaXN0VGV4dCArPSBcXGAgICDwn5OKIENhcMOtdHVsb3M6IFxcJHtub3ZlbGEuY2FwaXR1bG9zfVxcXFxuXFxgO1xuICAgICAgICBsaXN0VGV4dCArPSBcXGAgICDwn5OFIEHDsW86IFxcJHtub3ZlbGEuYcOxb31cXFxcblxcYDtcbiAgICAgICAgbGlzdFRleHQgKz0gXFxgICAg8J+SsCBDb3N0byBiYXNlOiBcXCR7YmFzZUNvc3QudG9Mb2NhbGVTdHJpbmcoKX0gQ1VQXFxcXG5cXGA7XG4gICAgICAgIGxpc3RUZXh0ICs9IFxcYCAgIPCfkrMgUmVjYXJnbyAoXFwke3RyYW5zZmVyRmVlUGVyY2VudGFnZX0lKTogK1xcJHtyZWNhcmdvLnRvTG9jYWxlU3RyaW5nKCl9IENVUFxcXFxuXFxgO1xuICAgICAgICBsaXN0VGV4dCArPSBcXGAgICDwn5KwIENvc3RvIGNvbiB0cmFuc2ZlcmVuY2lhOiBcXCR7dHJhbnNmZXJDb3N0LnRvTG9jYWxlU3RyaW5nKCl9IENVUFxcXFxuXFxcXG5cXGA7XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgbGlzdFRleHQgKz0gXCJcXFxcbvCfk4ogUkVTVU1FTiBERSBDT1NUT1M6XFxcXG5cIjtcbiAgICAgIGxpc3RUZXh0ICs9IFwi4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQXFxcXG5cXFxcblwiO1xuICAgICAgXG4gICAgICBjb25zdCB0b3RhbENhcGl0dWxvcyA9IGFsbE5vdmVsYXMucmVkdWNlKChzdW0sIG5vdmVsYSkgPT4gc3VtICsgbm92ZWxhLmNhcGl0dWxvcywgMCk7XG4gICAgICBjb25zdCB0b3RhbEVmZWN0aXZvID0gYWxsTm92ZWxhcy5yZWR1Y2UoKHN1bSwgbm92ZWxhKSA9PiBzdW0gKyAobm92ZWxhLmNhcGl0dWxvcyAqIG5vdmVsUHJpY2VQZXJDaGFwdGVyKSwgMCk7XG4gICAgICBjb25zdCB0b3RhbFRyYW5zZmVyZW5jaWEgPSBhbGxOb3ZlbGFzLnJlZHVjZSgoc3VtLCBub3ZlbGEpID0+IHN1bSArIE1hdGgucm91bmQoKG5vdmVsYS5jYXBpdHVsb3MgKiBub3ZlbFByaWNlUGVyQ2hhcHRlcikgKiAoMSArIHRyYW5zZmVyRmVlUGVyY2VudGFnZSAvIDEwMCkpLCAwKTtcbiAgICAgIGNvbnN0IHRvdGFsUmVjYXJnbyA9IHRvdGFsVHJhbnNmZXJlbmNpYSAtIHRvdGFsRWZlY3Rpdm87XG4gICAgICBcbiAgICAgIGxpc3RUZXh0ICs9IFxcYPCfk4ogVG90YWwgZGUgbm92ZWxhczogXFwke2FsbE5vdmVsYXMubGVuZ3RofVxcXFxuXFxgO1xuICAgICAgbGlzdFRleHQgKz0gXFxg8J+TiiBUb3RhbCBkZSBjYXDDrXR1bG9zOiBcXCR7dG90YWxDYXBpdHVsb3MudG9Mb2NhbGVTdHJpbmcoKX1cXFxcblxcXFxuXFxgO1xuICAgICAgbGlzdFRleHQgKz0gXFxg8J+StSBDQVTDgUxPR08gQ09NUExFVE8gRU4gRUZFQ1RJVk86XFxcXG5cXGA7XG4gICAgICBsaXN0VGV4dCArPSBcXGAgICDwn5KwIENvc3RvIHRvdGFsOiBcXCR7dG90YWxFZmVjdGl2by50b0xvY2FsZVN0cmluZygpfSBDVVBcXFxcblxcXFxuXFxgO1xuICAgICAgbGlzdFRleHQgKz0gXFxg8J+PpiBDQVTDgUxPR08gQ09NUExFVE8gQ09OIFRSQU5TRkVSRU5DSUE6XFxcXG5cXGA7XG4gICAgICBsaXN0VGV4dCArPSBcXGAgICDwn5KwIENvc3RvIGJhc2U6IFxcJHt0b3RhbEVmZWN0aXZvLnRvTG9jYWxlU3RyaW5nKCl9IENVUFxcXFxuXFxgO1xuICAgICAgbGlzdFRleHQgKz0gXFxgICAg8J+SsyBSZWNhcmdvIHRvdGFsIChcXCR7dHJhbnNmZXJGZWVQZXJjZW50YWdlfSUpOiArXFwke3RvdGFsUmVjYXJnby50b0xvY2FsZVN0cmluZygpfSBDVVBcXFxcblxcYDtcbiAgICAgIGxpc3RUZXh0ICs9IFxcYCAgIPCfkrAgQ29zdG8gdG90YWwgY29uIHRyYW5zZmVyZW5jaWE6IFxcJHt0b3RhbFRyYW5zZmVyZW5jaWEudG9Mb2NhbGVTdHJpbmcoKX0gQ1VQXFxcXG5cXFxcblxcYDtcbiAgICB9XG4gICAgXG4gICAgbGlzdFRleHQgKz0gXCLilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZBcXFxcblwiO1xuICAgIGxpc3RUZXh0ICs9IFwi8J+SoSBJTkZPUk1BQ0nDk04gSU1QT1JUQU5URTpcXFxcblwiO1xuICAgIGxpc3RUZXh0ICs9IFwi4oCiIExvcyBwcmVjaW9zIGVuIGVmZWN0aXZvIG5vIHRpZW5lbiByZWNhcmdvIGFkaWNpb25hbFxcXFxuXCI7XG4gICAgbGlzdFRleHQgKz0gXFxg4oCiIExhcyB0cmFuc2ZlcmVuY2lhcyBiYW5jYXJpYXMgdGllbmVuIHVuIFxcJHt0cmFuc2ZlckZlZVBlcmNlbnRhZ2V9JSBkZSByZWNhcmdvXFxcXG5cXGA7XG4gICAgbGlzdFRleHQgKz0gXCLigKIgUHVlZGVzIHNlbGVjY2lvbmFyIG5vdmVsYXMgaW5kaXZpZHVhbGVzIG8gZWwgY2F0w6Fsb2dvIGNvbXBsZXRvXFxcXG5cIjtcbiAgICBsaXN0VGV4dCArPSBcIuKAoiBUb2RvcyBsb3MgcHJlY2lvcyBlc3TDoW4gZW4gcGVzb3MgY3ViYW5vcyAoQ1VQKVxcXFxuXFxcXG5cIjtcbiAgICBsaXN0VGV4dCArPSBcIvCfk54gUGFyYSBlbmNhcmdhciwgY29udGFjdGEgYWwgKzUzNTQ2OTA4NzhcXFxcblwiO1xuICAgIGxpc3RUZXh0ICs9IFwi8J+MnyDCoURpc2ZydXRhIGRlIGxhcyBtZWpvcmVzIG5vdmVsYXMhXFxcXG5cIjtcbiAgICBsaXN0VGV4dCArPSBcXGBcXFxcbvCfk4UgR2VuZXJhZG8gZWw6IFxcJHtuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCdlcy1FUycpfVxcYDtcbiAgICBcbiAgICByZXR1cm4gbGlzdFRleHQ7XG4gIH07XG5cbiAgY29uc3QgZG93bmxvYWROb3ZlbExpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdFRleHQgPSBnZW5lcmF0ZU5vdmVsTGlzdFRleHQoKTtcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2xpc3RUZXh0XSwgeyB0eXBlOiAndGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04JyB9KTtcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluay5ocmVmID0gdXJsO1xuICAgIGxpbmsuZG93bmxvYWQgPSAnQ2F0YWxvZ29fTm92ZWxhc19UVl9hX2xhX0NhcnRhLnR4dCc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBsaW5rLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gIH07XG5cbiAgY29uc3Qgc2VuZFNlbGVjdGVkTm92ZWxhcyA9ICgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWROb3ZlbGFzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYWxlcnQoJ1BvciBmYXZvciBzZWxlY2Npb25hIGFsIG1lbm9zIHVuYSBub3ZlbGEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGNhc2hOb3ZlbGFzLCB0cmFuc2Zlck5vdmVsYXMsIGNhc2hUb3RhbCwgdHJhbnNmZXJCYXNlVG90YWwsIHRyYW5zZmVyRmVlLCB0cmFuc2ZlclRvdGFsLCBncmFuZFRvdGFsLCB0b3RhbENhcGl0dWxvcyB9ID0gdG90YWxzO1xuICAgIFxuICAgIGxldCBtZXNzYWdlID0gXCJNZSBpbnRlcmVzYW4gbG9zIHNpZ3VpZW50ZXMgdMOtdHVsb3M6XFxcXG5cXFxcblwiO1xuICAgIFxuICAgIC8vIENhc2ggbm92ZWxzXG4gICAgaWYgKGNhc2hOb3ZlbGFzLmxlbmd0aCA+IDApIHtcbiAgICAgIG1lc3NhZ2UgKz0gXCLwn5K1IFBBR08gRU4gRUZFQ1RJVk86XFxcXG5cIjtcbiAgICAgIG1lc3NhZ2UgKz0gXCLilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZBcXFxcblwiO1xuICAgICAgY2FzaE5vdmVsYXMuZm9yRWFjaCgobm92ZWxhLCBpbmRleCkgPT4ge1xuICAgICAgICBtZXNzYWdlICs9IFxcYFxcJHtpbmRleCArIDF9LiBcXCR7bm92ZWxhLnRpdHVsb31cXFxcblxcYDtcbiAgICAgICAgbWVzc2FnZSArPSBcXGAgICDwn5O6IEfDqW5lcm86IFxcJHtub3ZlbGEuZ2VuZXJvfVxcXFxuXFxgO1xuICAgICAgICBtZXNzYWdlICs9IFxcYCAgIPCfk4ogQ2Fww610dWxvczogXFwke25vdmVsYS5jYXBpdHVsb3N9XFxcXG5cXGA7XG4gICAgICAgIG1lc3NhZ2UgKz0gXFxgICAg8J+ThSBBw7FvOiBcXCR7bm92ZWxhLmHDsW99XFxcXG5cXGA7XG4gICAgICAgIG1lc3NhZ2UgKz0gXFxgICAg8J+SsCBDb3N0bzogJFxcJHsobm92ZWxhLmNhcGl0dWxvcyAqIG5vdmVsUHJpY2VQZXJDaGFwdGVyKS50b0xvY2FsZVN0cmluZygpfSBDVVBcXFxcblxcXFxuXFxgO1xuICAgICAgfSk7XG4gICAgICBtZXNzYWdlICs9IFxcYPCfkrAgU3VidG90YWwgRWZlY3Rpdm86ICRcXCR7Y2FzaFRvdGFsLnRvTG9jYWxlU3RyaW5nKCl9IENVUFxcXFxuXFxgO1xuICAgICAgbWVzc2FnZSArPSBcXGDwn5OKIFRvdGFsIGNhcMOtdHVsb3M6IFxcJHtjYXNoTm92ZWxhcy5yZWR1Y2UoKHN1bSwgbikgPT4gc3VtICsgbi5jYXBpdHVsb3MsIDApfVxcXFxuXFxcXG5cXGA7XG4gICAgfVxuICAgIFxuICAgIC8vIFRyYW5zZmVyIG5vdmVsc1xuICAgIGlmICh0cmFuc2Zlck5vdmVsYXMubGVuZ3RoID4gMCkge1xuICAgICAgbWVzc2FnZSArPSBcXGDwn4+mIFBBR08gUE9SIFRSQU5TRkVSRU5DSUEgQkFOQ0FSSUEgKCtcXCR7dHJhbnNmZXJGZWVQZXJjZW50YWdlfSUpOlxcXFxuXFxgO1xuICAgICAgbWVzc2FnZSArPSBcIuKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkFxcXFxuXCI7XG4gICAgICB0cmFuc2Zlck5vdmVsYXMuZm9yRWFjaCgobm92ZWxhLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBiYXNlQ29zdCA9IG5vdmVsYS5jYXBpdHVsb3MgKiBub3ZlbFByaWNlUGVyQ2hhcHRlcjtcbiAgICAgICAgY29uc3QgZmVlID0gTWF0aC5yb3VuZChiYXNlQ29zdCAqICh0cmFuc2ZlckZlZVBlcmNlbnRhZ2UgLyAxMDApKTtcbiAgICAgICAgY29uc3QgdG90YWxDb3N0ID0gYmFzZUNvc3QgKyBmZWU7XG4gICAgICAgIG1lc3NhZ2UgKz0gXFxgXFwke2luZGV4ICsgMX0uIFxcJHtub3ZlbGEudGl0dWxvfVxcXFxuXFxgO1xuICAgICAgICBtZXNzYWdlICs9IFxcYCAgIPCfk7ogR8OpbmVybzogXFwke25vdmVsYS5nZW5lcm99XFxcXG5cXGA7XG4gICAgICAgIG1lc3NhZ2UgKz0gXFxgICAg8J+TiiBDYXDDrXR1bG9zOiBcXCR7bm92ZWxhLmNhcGl0dWxvc31cXFxcblxcYDtcbiAgICAgICAgbWVzc2FnZSArPSBcXGAgICDwn5OFIEHDsW86IFxcJHtub3ZlbGEuYcOxb31cXFxcblxcYDtcbiAgICAgICAgbWVzc2FnZSArPSBcXGAgICDwn5KwIENvc3RvIGJhc2U6ICRcXCR7YmFzZUNvc3QudG9Mb2NhbGVTdHJpbmcoKX0gQ1VQXFxcXG5cXGA7XG4gICAgICAgIG1lc3NhZ2UgKz0gXFxgICAg8J+SsyBSZWNhcmdvIChcXCR7dHJhbnNmZXJGZWVQZXJjZW50YWdlfSUpOiArJFxcJHtmZWUudG9Mb2NhbGVTdHJpbmcoKX0gQ1VQXFxcXG5cXGA7XG4gICAgICAgIG1lc3NhZ2UgKz0gXFxgICAg8J+SsCBDb3N0byB0b3RhbDogJFxcJHt0b3RhbENvc3QudG9Mb2NhbGVTdHJpbmcoKX0gQ1VQXFxcXG5cXFxcblxcYDtcbiAgICAgIH0pO1xuICAgICAgbWVzc2FnZSArPSBcXGDwn5KwIFN1YnRvdGFsIGJhc2UgdHJhbnNmZXJlbmNpYTogJFxcJHt0cmFuc2ZlckJhc2VUb3RhbC50b0xvY2FsZVN0cmluZygpfSBDVVBcXFxcblxcYDtcbiAgICAgIG1lc3NhZ2UgKz0gXFxg8J+SsyBSZWNhcmdvIHRvdGFsIChcXCR7dHJhbnNmZXJGZWVQZXJjZW50YWdlfSUpOiArJFxcJHt0cmFuc2ZlckZlZS50b0xvY2FsZVN0cmluZygpfSBDVVBcXFxcblxcYDtcbiAgICAgIG1lc3NhZ2UgKz0gXFxg8J+SsCBTdWJ0b3RhbCBUcmFuc2ZlcmVuY2lhOiAkXFwke3RyYW5zZmVyVG90YWwudG9Mb2NhbGVTdHJpbmcoKX0gQ1VQXFxcXG5cXGA7XG4gICAgICBtZXNzYWdlICs9IFxcYPCfk4ogVG90YWwgY2Fww610dWxvczogXFwke3RyYW5zZmVyTm92ZWxhcy5yZWR1Y2UoKHN1bSwgbikgPT4gc3VtICsgbi5jYXBpdHVsb3MsIDApfVxcXFxuXFxcXG5cXGA7XG4gICAgfVxuICAgIFxuICAgIC8vIEZpbmFsIHN1bW1hcnlcbiAgICBtZXNzYWdlICs9IFwi8J+TiiBSRVNVTUVOIEZJTkFMOlxcXFxuXCI7XG4gICAgbWVzc2FnZSArPSBcIuKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkFxcXFxuXCI7XG4gICAgbWVzc2FnZSArPSBcXGDigKIgVG90YWwgZGUgbm92ZWxhczogXFwke3NlbGVjdGVkTm92ZWxhcy5sZW5ndGh9XFxcXG5cXGA7XG4gICAgbWVzc2FnZSArPSBcXGDigKIgVG90YWwgZGUgY2Fww610dWxvczogXFwke3RvdGFsQ2FwaXR1bG9zfVxcXFxuXFxgO1xuICAgIGlmIChjYXNoVG90YWwgPiAwKSB7XG4gICAgICBtZXNzYWdlICs9IFxcYOKAoiBFZmVjdGl2bzogJFxcJHtjYXNoVG90YWwudG9Mb2NhbGVTdHJpbmcoKX0gQ1VQIChcXCR7Y2FzaE5vdmVsYXMubGVuZ3RofSBub3ZlbGFzKVxcXFxuXFxgO1xuICAgIH1cbiAgICBpZiAodHJhbnNmZXJUb3RhbCA+IDApIHtcbiAgICAgIG1lc3NhZ2UgKz0gXFxg4oCiIFRyYW5zZmVyZW5jaWE6ICRcXCR7dHJhbnNmZXJUb3RhbC50b0xvY2FsZVN0cmluZygpfSBDVVAgKFxcJHt0cmFuc2Zlck5vdmVsYXMubGVuZ3RofSBub3ZlbGFzKVxcXFxuXFxgO1xuICAgIH1cbiAgICBtZXNzYWdlICs9IFxcYOKAoiBUT1RBTCBBIFBBR0FSOiAkXFwke2dyYW5kVG90YWwudG9Mb2NhbGVTdHJpbmcoKX0gQ1VQXFxcXG5cXFxcblxcYDtcbiAgICBtZXNzYWdlICs9IFxcYPCfk7EgRW52aWFkbyBkZXNkZSBUViBhIGxhIENhcnRhXFxcXG5cXGA7XG4gICAgbWVzc2FnZSArPSBcXGDwn5OFIEZlY2hhOiBcXCR7bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygnZXMtRVMnKX1cXGA7XG5cbiAgICBjb25zdCBlbmNvZGVkTWVzc2FnZSA9IGVuY29kZVVSSUNvbXBvbmVudChtZXNzYWdlKTtcbiAgICBjb25zdCB3aGF0c2FwcFVybCA9IFxcYGh0dHBzOi8vd2EubWUvNTM1NDY5MDg3OD90ZXh0PVxcJHtlbmNvZGVkTWVzc2FnZX1cXGA7XG4gICAgd2luZG93Lm9wZW4od2hhdHNhcHBVcmwsICdfYmxhbmsnLCAnbm9vcGVuZXIsbm9yZWZlcnJlcicpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNhbGwgPSAoKSA9PiB7XG4gICAgd2luZG93Lm9wZW4oXFxgdGVsOlxcJHtwaG9uZU51bWJlcn1cXGAsICdfc2VsZicpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVdoYXRzQXBwID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBcIvCfk5ogKlNvbGljaXRhciBub3ZlbGFzKlxcXFxuXFxcXG7Cv0hheSBub3ZlbGFzIHF1ZSBtZSBndXN0YXLDrWEgdmVyIGVuIFtUViBhIGxhIENhcnRhXSBhIGNvbnRpbnVhY2nDs24gdGUgY29tZW50bzpcIjtcbiAgICBjb25zdCBlbmNvZGVkTWVzc2FnZSA9IGVuY29kZVVSSUNvbXBvbmVudChtZXNzYWdlKTtcbiAgICBjb25zdCB3aGF0c2FwcFVybCA9IFxcYGh0dHBzOi8vd2EubWUvNTM1NDY5MDg3OD90ZXh0PVxcJHtlbmNvZGVkTWVzc2FnZX1cXGA7XG4gICAgd2luZG93Lm9wZW4od2hhdHNhcHBVcmwsICdfYmxhbmsnLCAnbm9vcGVuZXIsbm9yZWZlcnJlcicpO1xuICB9O1xuXG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjay81MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgei01MFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCB3LWZ1bGwgbWF4LXctNnhsIG1heC1oLVs5NXZoXSBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LTJ4bCBhbmltYXRlLWluIGZhZGUtaW4gZHVyYXRpb24tMzAwXCI+XG4gICAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLXBpbmstNjAwIHRvLXB1cnBsZS02MDAgcC00IHNtOnAtNiB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZS8yMCBwLTMgcm91bmRlZC14bCBtci00IHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgICAgIDxCb29rT3BlbiBjbGFzc05hbWU9XCJoLTggdy04XCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIHNtOnRleHQtM3hsIGZvbnQtYm9sZFwiPkNhdMOhbG9nbyBkZSBOb3ZlbGFzPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHNtOnRleHQtYmFzZSBvcGFjaXR5LTkwXCI+Tm92ZWxhcyBjb21wbGV0YXMgZGlzcG9uaWJsZXM8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBob3ZlcjpiZy13aGl0ZS8yMCByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXktYXV0byBtYXgtaC1bY2FsYyg5NXZoLTEyMHB4KV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBzbTpwLTZcIj5cbiAgICAgICAgICAgIHsvKiBNYWluIEluZm9ybWF0aW9uICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iciBmcm9tLXBpbmstNTAgdmlhLXB1cnBsZS01MCB0by1ibHVlLTUwIHJvdW5kZWQtM3hsIHAtOCBtYi04IGJvcmRlci0yIGJvcmRlci1waW5rLTIwMCBzaGFkb3cteGxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYi00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tcGluay01MDAgdG8tcHVycGxlLTUwMCBwLTQgcm91bmRlZC0yeGwgbXItNCBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgICAgICAgIDxJbmZvIGNsYXNzTmFtZT1cImgtOCB3LTggdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBiZy1ncmFkaWVudC10by1yIGZyb20tcGluay02MDAgdG8tcHVycGxlLTYwMCBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICAgICAgSW5mb3JtYWNpw7NuIEltcG9ydGFudGVcbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJnLXdoaXRlLzYwIGJhY2tkcm9wLWJsdXItc20gcm91bmRlZC0yeGwgcC00IGJvcmRlciBib3JkZXItcGluay0yMDAgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTQwMCB0by1wdXJwbGUtNDAwIHAtMyByb3VuZGVkLXhsIG1yLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj7wn5OaPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZ1wiPkxhcyBub3ZlbGFzIHNlIGVuY2FyZ2FuIGNvbXBsZXRhczwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJnLXdoaXRlLzYwIGJhY2tkcm9wLWJsdXItc20gcm91bmRlZC0yeGwgcC00IGJvcmRlciBib3JkZXItZ3JlZW4tMjAwIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tZ3JlZW4tNDAwIHRvLWVtZXJhbGQtNDAwIHAtMyByb3VuZGVkLXhsIG1yLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj7wn5KwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZ1wiPkNvc3RvOiAkXFwke25vdmVsUHJpY2VQZXJDaGFwdGVyfSBDVVAgcG9yIGNhZGEgY2Fww610dWxvPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYmctd2hpdGUvNjAgYmFja2Ryb3AtYmx1ci1zbSByb3VuZGVkLTJ4bCBwLTQgYm9yZGVyIGJvcmRlci1vcmFuZ2UtMjAwIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tb3JhbmdlLTQwMCB0by1yZWQtNDAwIHAtMyByb3VuZGVkLXhsIG1yLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj7wn5KzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZ1wiPlRyYW5zZmVyZW5jaWEgYmFuY2FyaWE6ICt7dHJhbnNmZXJGZWVQZXJjZW50YWdlfSUgZGUgcmVjYXJnbzwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJnLXdoaXRlLzYwIGJhY2tkcm9wLWJsdXItc20gcm91bmRlZC0yeGwgcC00IGJvcmRlciBib3JkZXItYmx1ZS0yMDAgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTQwMCB0by1jeWFuLTQwMCBwLTMgcm91bmRlZC14bCBtci00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+8J+TsTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbGdcIj5QYXJhIG3DoXMgaW5mb3JtYWNpw7NuLCBjb250YWN0YSBhbCBuw7ptZXJvOjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIENvbnRhY3QgbnVtYmVyICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggYmctZ3JhZGllbnQtdG8tciBmcm9tLXdoaXRlIHRvLWJsdWUtNTAgcm91bmRlZC0yeGwgcC02IGJvcmRlci0yIGJvcmRlci1ibHVlLTMwMCBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBzcGFjZS15LTQgc206c3BhY2UteS0wXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHNtOnRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNtOmp1c3RpZnktc3RhcnQgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNTAwIHRvLXB1cnBsZS01MDAgcC0yIHJvdW5kZWQtbGcgbXItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNtYXJ0cGhvbmUgY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYmxhY2sgdGV4dC1ncmF5LTkwMFwiPntwaG9uZU51bWJlcn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ibHVlLTYwMCBtbC0xMFwiPkNvbnRhY3RvIGRpcmVjdG88L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2FsbH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tZ3JlZW4tNTAwIHRvLWVtZXJhbGQtNTAwIGhvdmVyOmZyb20tZ3JlZW4tNjAwIGhvdmVyOnRvLWVtZXJhbGQtNjAwIHRleHQtd2hpdGUgcHgtNiBweS0zIHJvdW5kZWQteGwgZm9udC1ib2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IHNoYWRvdy1sZyBmbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8UGhvbmUgY2xhc3NOYW1lPVwiaC01IHctNSBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICBMbGFtYXJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVXaGF0c0FwcH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tZ3JlZW4tNjAwIHRvLXRlYWwtNjAwIGhvdmVyOmZyb20tZ3JlZW4tNzAwIGhvdmVyOnRvLXRlYWwtNzAwIHRleHQtd2hpdGUgcHgtNiBweS0zIHJvdW5kZWQteGwgZm9udC1ib2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IHNoYWRvdy1sZyBmbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZUNpcmNsZSBjbGFzc05hbWU9XCJoLTUgdy01IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIFdoYXRzQXBwXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBDYXRhbG9nIG9wdGlvbnMgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTQgbWItNlwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZG93bmxvYWROb3ZlbExpc3R9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNTAwIHRvLWJsdWUtNjAwIGhvdmVyOmZyb20tYmx1ZS02MDAgaG92ZXI6dG8tYmx1ZS03MDAgdGV4dC13aGl0ZSBwLTYgcm91bmRlZC14bCBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGhvdmVyOnNoYWRvdy1sZyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RG93bmxvYWQgY2xhc3NOYW1lPVwiaC02IHctNiBtci0zXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+RGVzY2FyZ2FyIENhdMOhbG9nbzwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIG9wYWNpdHktOTBcIj5MaXN0YSBjb21wbGV0YSBkZSBub3ZlbGFzPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dOb3ZlbExpc3QoIXNob3dOb3ZlbExpc3QpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1wdXJwbGUtNTAwIHRvLXB1cnBsZS02MDAgaG92ZXI6ZnJvbS1wdXJwbGUtNjAwIGhvdmVyOnRvLXB1cnBsZS03MDAgdGV4dC13aGl0ZSBwLTYgcm91bmRlZC14bCBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGhvdmVyOnNoYWRvdy1sZyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm9va09wZW4gY2xhc3NOYW1lPVwiaC02IHctNiBtci0zXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+VmVyIHkgU2VsZWNjaW9uYXI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBvcGFjaXR5LTkwXCI+RWxlZ2lyIG5vdmVsYXMgZXNwZWPDrWZpY2FzPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBTaG93IG1lc3NhZ2Ugd2hlbiBubyBub3ZlbHMgYXZhaWxhYmxlICovfVxuICAgICAgICAgICAge2FsbE5vdmVsYXMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy15ZWxsb3ctNTAgYm9yZGVyIGJvcmRlci15ZWxsb3ctMjAwIHJvdW5kZWQteGwgcC02IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPEJvb2tPcGVuIGNsYXNzTmFtZT1cImgtMTIgdy0xMiB0ZXh0LXllbGxvdy02MDAgbXgtYXV0byBtYi00XCIgLz5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQteWVsbG93LTgwMCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICBObyBoYXkgbm92ZWxhcyBkaXNwb25pYmxlc1xuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNzAwXCI+XG4gICAgICAgICAgICAgICAgICBFbCBjYXTDoWxvZ28gZGUgbm92ZWxhcyBlc3TDoSB2YWPDrW8uIENvbnRhY3RhIGNvbiBlbCBhZG1pbmlzdHJhZG9yIHBhcmEgYWdyZWdhciBub3ZlbGFzIGFsIHNpc3RlbWEuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHsvKiBOb3ZlbHMgbGlzdCAqL31cbiAgICAgICAgICAgIHtzaG93Tm92ZWxMaXN0ICYmIGFsbE5vdmVsYXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIHsvKiBGaWx0ZXJzICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLXB1cnBsZS01MCB0by1waW5rLTUwIHAtNCBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVyIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1wdXJwbGUtNjAwIG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1wdXJwbGUtOTAwXCI+RmlsdHJvcyBkZSBCw7pzcXVlZGE8L2g0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMyB0b3AtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIGgtNCB3LTQgdGV4dC1ncmF5LTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2NhciBwb3IgdMOtdHVsby4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcGwtMTAgcHItNCBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHVycGxlLTUwMCBmb2N1czpib3JkZXItdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZEdlbnJlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VsZWN0ZWRHZW5yZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXB1cnBsZS01MDAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Ub2RvcyBsb3MgZ8OpbmVyb3M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICB7dW5pcXVlR2VucmVzLm1hcChnZW5yZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Z2VucmV9IHZhbHVlPXtnZW5yZX0+e2dlbnJlfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRZZWFyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VsZWN0ZWRZZWFyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHVycGxlLTUwMCBmb2N1czpib3JkZXItdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlRvZG9zIGxvcyBhw7Fvczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIHt1bmlxdWVZZWFycy5tYXAoeWVhciA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17eWVhcn0gdmFsdWU9e3llYXJ9Pnt5ZWFyfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c29ydEJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTb3J0QnkoZS50YXJnZXQudmFsdWUgYXMgJ3RpdHVsbycgfCAnYcOxbycgfCAnY2FwaXR1bG9zJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHVycGxlLTUwMCBmb2N1czpib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRpdHVsb1wiPlTDrXR1bG88L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhw7FvXCI+QcOxbzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNhcGl0dWxvc1wiPkNhcMOtdHVsb3M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTb3J0T3JkZXIoc29ydE9yZGVyID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMgcHktMiBiZy1wdXJwbGUtMTAwIGhvdmVyOmJnLXB1cnBsZS0yMDAgdGV4dC1wdXJwbGUtNzAwIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xcYE9yZGVuYXIgXFwke3NvcnRPcmRlciA9PT0gJ2FzYycgPyAnZGVzY2VuZGVudGUnIDogJ2FzY2VuZGVudGUnfVxcYH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c29ydE9yZGVyID09PSAnYXNjJyA/IDxTb3J0QXNjIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPiA6IDxTb3J0RGVzYyBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBzbTppdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXktMiBzbTpzcGFjZS15LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtcHVycGxlLTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIE1vc3RyYW5kbyB7ZmlsdGVyZWROb3ZlbGFzLmxlbmd0aH0gZGUge2FsbE5vdmVsYXMubGVuZ3RofSBub3ZlbGFzXG4gICAgICAgICAgICAgICAgICAgICAgeyhzZWFyY2hUZXJtIHx8IHNlbGVjdGVkR2VucmUgfHwgc2VsZWN0ZWRZZWFyKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yIHRleHQtcHVycGxlLTYwMFwiPuKAoiBGaWx0cm9zIGFjdGl2b3M8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7KHNlYXJjaFRlcm0gfHwgc2VsZWN0ZWRHZW5yZSB8fCBzZWxlY3RlZFllYXIgfHwgc29ydEJ5ICE9PSAndGl0dWxvJyB8fCBzb3J0T3JkZXIgIT09ICdhc2MnKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xlYXJGaWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBiZy1wdXJwbGUtMjAwIGhvdmVyOmJnLXB1cnBsZS0zMDAgdGV4dC1wdXJwbGUtODAwIHB4LTMgcHktMSByb3VuZGVkLWxnIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBMaW1waWFyIGZpbHRyb3NcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tcHVycGxlLTEwMCB0by1waW5rLTEwMCBwLTQgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgc206aXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBzcGFjZS15LTQgc206c3BhY2UteS0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgU2VsZWNjaW9uYXIgTm92ZWxhcyAoe3NlbGVjdGVkTm92ZWxhcy5sZW5ndGh9IHNlbGVjY2lvbmFkYXMpXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZWxlY3RBbGxOb3ZlbGFzfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcHVycGxlLTUwMCBob3ZlcjpiZy1wdXJwbGUtNjAwIHRleHQtd2hpdGUgcHgtMyBweS0yIHJvdW5kZWQtbGcgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgVG9kYXNcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGVhckFsbE5vdmVsYXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwMCBob3ZlcjpiZy1ncmF5LTYwMCB0ZXh0LXdoaXRlIHB4LTMgcHktMiByb3VuZGVkLWxnIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5pbmd1bmFcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBUb3RhbHMgc3VtbWFyeSAqL31cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWROb3ZlbGFzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tZ3JlZW4tNTAgdG8tYmx1ZS01MCBwLTQgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYWxjdWxhdG9yIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC1ncmVlbi02MDAgbXItM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj5SZXN1bWVuIGRlIFNlbGVjY2nDs248L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHAtMyBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXB1cnBsZS02MDBcIj57c2VsZWN0ZWROb3ZlbGFzLmxlbmd0aH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+Tm92ZWxhczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1sZyBwLTMgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ibHVlLTYwMFwiPnt0b3RhbHMudG90YWxDYXBpdHVsb3N9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPkNhcMOtdHVsb3M8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgcC0zIGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JlZW4tNjAwXCI+JFxcJHt0b3RhbHMuY2FzaFRvdGFsLnRvTG9jYWxlU3RyaW5nKCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPkVmZWN0aXZvPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHAtMyBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LW9yYW5nZS02MDBcIj4kXFwke3RvdGFscy50cmFuc2ZlclRvdGFsLnRvTG9jYWxlU3RyaW5nKCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPlRyYW5zZmVyZW5jaWE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi0xMDAgdG8tYmx1ZS0xMDAgcm91bmRlZC1sZyBwLTQgYm9yZGVyLTIgYm9yZGVyLWdyZWVuLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCI+VE9UQUwgQSBQQUdBUjo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmVlbi02MDBcIj4kXFwke3RvdGFscy5ncmFuZFRvdGFsLnRvTG9jYWxlU3RyaW5nKCl9IENVUDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICB7dG90YWxzLnRyYW5zZmVyRmVlID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1vcmFuZ2UtNjAwIG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgSW5jbHV5ZSAkXFwke3RvdGFscy50cmFuc2ZlckZlZS50b0xvY2FsZVN0cmluZygpfSBDVVAgZGUgcmVjYXJnbyBwb3IgdHJhbnNmZXJlbmNpYSAoe3RyYW5zZmVyRmVlUGVyY2VudGFnZX0lKVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtaC05NiBvdmVyZmxvdy15LWF1dG8gcC00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAge2ZpbHRlcmVkTm92ZWxhcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkTm92ZWxhcy5tYXAoKG5vdmVsYSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZE5vdmVsYXMuaW5jbHVkZXMobm92ZWxhLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlQ29zdCA9IG5vdmVsYS5jYXBpdHVsb3MgKiBub3ZlbFByaWNlUGVyQ2hhcHRlcjtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2ZlckNvc3QgPSBNYXRoLnJvdW5kKGJhc2VDb3N0ICogKDEgKyB0cmFuc2ZlckZlZVBlcmNlbnRhZ2UgLyAxMDApKTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaW5hbENvc3QgPSBub3ZlbGEucGF5bWVudFR5cGUgPT09ICd0cmFuc2ZlcicgPyB0cmFuc2ZlckNvc3QgOiBiYXNlQ29zdDtcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e25vdmVsYS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcXGBwLTQgcm91bmRlZC14bCBib3JkZXIgdHJhbnNpdGlvbi1hbGwgXFwke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1wdXJwbGUtNTAgYm9yZGVyLXB1cnBsZS0zMDAgc2hhZG93LW1kJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLWdyYXktNTAgYm9yZGVyLWdyYXktMjAwIGhvdmVyOmJnLXB1cnBsZS0yNSBob3Zlcjpib3JkZXItcHVycGxlLTIwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcYH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gaGFuZGxlTm92ZWxUb2dnbGUobm92ZWxhLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgaC01IHctNSB0ZXh0LXB1cnBsZS02MDAgZm9jdXM6cmluZy1wdXJwbGUtNTAwIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgc206aXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXktMyBzbTpzcGFjZS15LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgbWItMlwiPntub3ZlbGEudGl0dWxvfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yIHRleHQtc20gdGV4dC1ncmF5LTYwMCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1wdXJwbGUtMTAwIHRleHQtcHVycGxlLTcwMCBweC0yIHB5LTEgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub3ZlbGEuZ2VuZXJvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctYmx1ZS0xMDAgdGV4dC1ibHVlLTcwMCBweC0yIHB5LTEgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub3ZlbGEuY2FwaXR1bG9zfSBjYXDDrXR1bG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi03MDAgcHgtMiBweS0xIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm92ZWxhLmHDsW99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFBheW1lbnQgdHlwZSBzZWxlY3RvciAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgc206aXRlbXMtY2VudGVyIHNwYWNlLXktMiBzbTpzcGFjZS15LTAgc206c3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5UaXBvIGRlIHBhZ286PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGF5bWVudFR5cGVDaGFuZ2Uobm92ZWxhLmlkLCAnY2FzaCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XFxgcHgtMyBweS0yIHJvdW5kZWQtZnVsbCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tY29sb3JzIFxcJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdmVsYS5wYXltZW50VHlwZSA9PT0gJ2Nhc2gnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNjAwIGhvdmVyOmJnLWdyZWVuLTEwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERvbGxhclNpZ24gY2xhc3NOYW1lPVwiaC0zIHctMyBpbmxpbmUgbXItMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWZlY3Rpdm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYXltZW50VHlwZUNoYW5nZShub3ZlbGEuaWQsICd0cmFuc2ZlcicpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XFxgcHgtMyBweS0yIHJvdW5kZWQtZnVsbCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tY29sb3JzIFxcJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdmVsYS5wYXltZW50VHlwZSA9PT0gJ3RyYW5zZmVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1vcmFuZ2UtNTAwIHRleHQtd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLWdyYXktMjAwIHRleHQtZ3JheS02MDAgaG92ZXI6Ymctb3JhbmdlLTEwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyZWRpdENhcmQgY2xhc3NOYW1lPVwiaC0zIHctMyBpbmxpbmUgbXItMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNmZXJlbmNpYSAoK3t0cmFuc2ZlckZlZVBlcmNlbnRhZ2V9JSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHQgc206bWwtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcXGB0ZXh0LWxnIGZvbnQtYm9sZCBcXCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3ZlbGEucGF5bWVudFR5cGUgPT09ICdjYXNoJyA/ICd0ZXh0LWdyZWVuLTYwMCcgOiAndGV4dC1vcmFuZ2UtNjAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJFxcJHtmaW5hbENvc3QudG9Mb2NhbGVTdHJpbmcoKX0gQ1VQXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vdmVsYS5wYXltZW50VHlwZSA9PT0gJ3RyYW5zZmVyJyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYXNlOiAkXFwke2Jhc2VDb3N0LnRvTG9jYWxlU3RyaW5nKCl9IENVUFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjYXJnbzogKyRcXCR7KHRyYW5zZmVyQ29zdCAtIGJhc2VDb3N0KS50b0xvY2FsZVN0cmluZygpfSBDVVBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgbXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJFxcJHtub3ZlbFByaWNlUGVyQ2hhcHRlcn0gQ1VQIMOXIHtub3ZlbGEuY2FwaXR1bG9zfSBjYXAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzU2VsZWN0ZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1wdXJwbGUtNjAwIG10LTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvb2tPcGVuIGNsYXNzTmFtZT1cImgtMTIgdy0xMiB0ZXh0LWdyYXktNDAwIG14LWF1dG8gbWItNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBObyBzZSBlbmNvbnRyYXJvbiBub3ZlbGFzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE5vIGhheSBub3ZlbGFzIHF1ZSBjb2luY2lkYW4gY29uIGxvcyBmaWx0cm9zIHNlbGVjY2lvbmFkb3MuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsZWFyRmlsdGVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcHVycGxlLTUwMCBob3ZlcjpiZy1wdXJwbGUtNjAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtbGcgZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBMaW1waWFyIGZpbHRyb3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWROb3ZlbGFzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tcHVycGxlLTUwIHRvLXBpbmstNTAgcC00IGJvcmRlci10IGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgc206aXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBzcGFjZS15LTQgc206c3BhY2UteS0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBzbTp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWROb3ZlbGFzLmxlbmd0aH0gbm92ZWxhcyBzZWxlY2Npb25hZGFzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWw6ICRcXCR7dG90YWxzLmdyYW5kVG90YWwudG9Mb2NhbGVTdHJpbmcoKX0gQ1VQXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2VuZFNlbGVjdGVkTm92ZWxhc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZE5vdmVsYXMubGVuZ3RoID09PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcXGBweC02IHB5LTMgcm91bmRlZC14bCBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIFxcJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWROb3ZlbGFzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1ncmFkaWVudC10by1yIGZyb20tZ3JlZW4tNTAwIHRvLWdyZWVuLTYwMCBob3Zlcjpmcm9tLWdyZWVuLTYwMCBob3Zlcjp0by1ncmVlbi03MDAgdGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1ncmF5LTMwMCB0ZXh0LWdyYXktNTAwIGN1cnNvci1ub3QtYWxsb3dlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXGB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VDaXJjbGUgY2xhc3NOYW1lPVwiaC01IHctNSBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVudmlhciBwb3IgV2hhdHNBcHBcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59YDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcmljZUNhcmRXaXRoRW1iZWRkZWRDb25maWcoc3lzdGVtQ29uZmlnOiBTeXN0ZW1Db25maWcpOiBzdHJpbmcge1xuICBjb25zdCBwcmljZXMgPSBKU09OLnN0cmluZ2lmeShzeXN0ZW1Db25maWcucHJpY2VzLCBudWxsLCAyKTtcbiAgXG4gIHJldHVybiBgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERvbGxhclNpZ24sIFR2LCBGaWxtLCBTdGFyLCBDcmVkaXRDYXJkIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuLy8gUFJFQ0lPUyBFTUJFQklET1MgLSBHZW5lcmFkb3MgYXV0b23DoXRpY2FtZW50ZVxuY29uc3QgRU1CRURERURfUFJJQ0VTID0gJHtwcmljZXN9O1xuXG5pbnRlcmZhY2UgUHJpY2VDYXJkUHJvcHMge1xuICB0eXBlOiAnbW92aWUnIHwgJ3R2JztcbiAgc2VsZWN0ZWRTZWFzb25zPzogbnVtYmVyW107XG4gIGVwaXNvZGVDb3VudD86IG51bWJlcjtcbiAgaXNBbmltZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcmljZUNhcmQoeyB0eXBlLCBzZWxlY3RlZFNlYXNvbnMgPSBbXSwgZXBpc29kZUNvdW50ID0gMCwgaXNBbmltZSA9IGZhbHNlIH06IFByaWNlQ2FyZFByb3BzKSB7XG4gIC8vIFVzZSBlbWJlZGRlZCBwcmljZXNcbiAgY29uc3QgbW92aWVQcmljZSA9IEVNQkVEREVEX1BSSUNFUy5tb3ZpZVByaWNlO1xuICBjb25zdCBzZXJpZXNQcmljZSA9IEVNQkVEREVEX1BSSUNFUy5zZXJpZXNQcmljZTtcbiAgY29uc3QgdHJhbnNmZXJGZWVQZXJjZW50YWdlID0gRU1CRURERURfUFJJQ0VTLnRyYW5zZmVyRmVlUGVyY2VudGFnZTtcbiAgXG4gIGNvbnN0IGNhbGN1bGF0ZVByaWNlID0gKCkgPT4ge1xuICAgIGlmICh0eXBlID09PSAnbW92aWUnKSB7XG4gICAgICByZXR1cm4gbW92aWVQcmljZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2VyaWVzOiBkeW5hbWljIHByaWNlIHBlciBzZWFzb25cbiAgICAgIHJldHVybiBzZWxlY3RlZFNlYXNvbnMubGVuZ3RoICogc2VyaWVzUHJpY2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHByaWNlID0gY2FsY3VsYXRlUHJpY2UoKTtcbiAgY29uc3QgdHJhbnNmZXJQcmljZSA9IE1hdGgucm91bmQocHJpY2UgKiAoMSArIHRyYW5zZmVyRmVlUGVyY2VudGFnZSAvIDEwMCkpO1xuICBcbiAgY29uc3QgZ2V0SWNvbiA9ICgpID0+IHtcbiAgICBpZiAodHlwZSA9PT0gJ21vdmllJykge1xuICAgICAgcmV0dXJuIGlzQW5pbWUgPyAn8J+OjCcgOiAn8J+OrCc7XG4gICAgfVxuICAgIHJldHVybiBpc0FuaW1lID8gJ/CfjownIDogJ/Cfk7onO1xuICB9O1xuXG4gIGNvbnN0IGdldFR5cGVMYWJlbCA9ICgpID0+IHtcbiAgICBpZiAodHlwZSA9PT0gJ21vdmllJykge1xuICAgICAgcmV0dXJuIGlzQW5pbWUgPyAnUGVsw61jdWxhIEFuaW1hZGEnIDogJ1BlbMOtY3VsYSc7XG4gICAgfVxuICAgIHJldHVybiBpc0FuaW1lID8gJ0FuaW1lJyA6ICdTZXJpZSc7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tNTAgdmlhLWVtZXJhbGQtNTAgdG8tdGVhbC01MCByb3VuZGVkLTJ4bCBwLTYgYm9yZGVyLTIgYm9yZGVyLWdyZWVuLTMwMCBzaGFkb3cteGwgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyZWVuLTQwMCB0by1lbWVyYWxkLTQwMCBwLTMgcm91bmRlZC14bCBtci00IHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj57Z2V0SWNvbigpfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYmxhY2sgdGV4dC1ncmVlbi04MDAgdGV4dC1sZ1wiPntnZXRUeXBlTGFiZWwoKX08L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi02MDAgdGV4dC1zbSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgIHt0eXBlID09PSAndHYnICYmIHNlbGVjdGVkU2Vhc29ucy5sZW5ndGggPiAwIFxuICAgICAgICAgICAgICAgID8gXFxgXFwke3NlbGVjdGVkU2Vhc29ucy5sZW5ndGh9IHRlbXBvcmFkYVxcJHtzZWxlY3RlZFNlYXNvbnMubGVuZ3RoID4gMSA/ICdzJyA6ICcnfVxcYFxuICAgICAgICAgICAgICAgIDogJ0NvbnRlbmlkbyBjb21wbGV0bydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tZ3JlZW4tNTAwIHRvLWVtZXJhbGQtNTAwIHRleHQtd2hpdGUgcC0zIHJvdW5kZWQtZnVsbCBzaGFkb3ctbGcgYW5pbWF0ZS1wdWxzZVwiPlxuICAgICAgICAgIDxEb2xsYXJTaWduIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICB7LyogQ2FzaCBQcmljZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20td2hpdGUgdG8tZ3JlZW4tNTAgcm91bmRlZC14bCBwLTQgYm9yZGVyLTIgYm9yZGVyLWdyZWVuLTIwMCBzaGFkb3ctbWQgaG92ZXI6c2hhZG93LWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTFcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JlZW4tNzAwIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JlZW4tMTAwIHAtMSByb3VuZGVkLWxnIG1yLTJcIj5cbiAgICAgICAgICAgICAgICA8RG9sbGFyU2lnbiBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIEVmZWN0aXZvXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYmxhY2sgdGV4dC1ncmVlbi03MDBcIj5cbiAgICAgICAgICAgICAgJFxcJHtwcmljZS50b0xvY2FsZVN0cmluZygpfSBDVVBcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICB7LyogVHJhbnNmZXIgUHJpY2UgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLW9yYW5nZS01MCB0by1yZWQtNTAgcm91bmRlZC14bCBwLTQgYm9yZGVyLTIgYm9yZGVyLW9yYW5nZS0yMDAgc2hhZG93LW1kIGhvdmVyOnNoYWRvdy1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0xXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LW9yYW5nZS03MDAgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtMTAwIHAtMSByb3VuZGVkLWxnIG1yLTJcIj5cbiAgICAgICAgICAgICAgICA8Q3JlZGl0Q2FyZCBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFRyYW5zZmVyZW5jaWFcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ibGFjayB0ZXh0LW9yYW5nZS03MDBcIj5cbiAgICAgICAgICAgICAgJFxcJHt0cmFuc2ZlclByaWNlLnRvTG9jYWxlU3RyaW5nKCl9IENVUFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW9yYW5nZS02MDAgZm9udC1zZW1pYm9sZCBiZy1vcmFuZ2UtMTAwIHB4LTIgcHktMSByb3VuZGVkLWZ1bGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICt7dHJhbnNmZXJGZWVQZXJjZW50YWdlfSUgcmVjYXJnbyBiYW5jYXJpb1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIHt0eXBlID09PSAndHYnICYmIHNlbGVjdGVkU2Vhc29ucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmVlbi02MDAgZm9udC1ib2xkIHRleHQtY2VudGVyIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi0xMDAgdG8tZW1lcmFsZC0xMDAgcm91bmRlZC14bCBwLTMgYm9yZGVyIGJvcmRlci1ncmVlbi0yMDBcIj5cbiAgICAgICAgICAgICRcXCR7KHByaWNlIC8gc2VsZWN0ZWRTZWFzb25zLmxlbmd0aCkudG9Mb2NhbGVTdHJpbmcoKX0gQ1VQIHBvciB0ZW1wb3JhZGEgKGVmZWN0aXZvKVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59YDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVBZG1pbkNvbnRleHRXaXRoRW1iZWRkZWRDb25maWcoc3lzdGVtQ29uZmlnOiBTeXN0ZW1Db25maWcpOiBzdHJpbmcge1xuICBjb25zdCBjb25maWcgPSBKU09OLnN0cmluZ2lmeShzeXN0ZW1Db25maWcsIG51bGwsIDIpO1xuICBcbiAgcmV0dXJuIGBpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEpTWmlwIGZyb20gJ2pzemlwJztcblxuLy8gQ09ORklHVVJBQ0nDk04gRU1CRUJJREEgLSBHZW5lcmFkYSBhdXRvbcOhdGljYW1lbnRlXG5jb25zdCBFTUJFRERFRF9DT05GSUcgPSAke2NvbmZpZ307XG5cbi8vIENSRURFTkNJQUxFUyBERSBBQ0NFU08gKENPTkZJR1VSQUJMRVMpXG5jb25zdCBBRE1JTl9DUkVERU5USUFMUyA9IHtcbiAgdXNlcm5hbWU6ICdhZG1pbicsXG4gIHBhc3N3b3JkOiAndHZhbGFjYXJ0YTIwMjQnXG59O1xuXG4vLyBUeXBlc1xuZXhwb3J0IGludGVyZmFjZSBQcmljZUNvbmZpZyB7XG4gIG1vdmllUHJpY2U6IG51bWJlcjtcbiAgc2VyaWVzUHJpY2U6IG51bWJlcjtcbiAgdHJhbnNmZXJGZWVQZXJjZW50YWdlOiBudW1iZXI7XG4gIG5vdmVsUHJpY2VQZXJDaGFwdGVyOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlab25lIHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBjb3N0OiBudW1iZXI7XG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xuICB1cGRhdGVkQXQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3ZlbCB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdHVsbzogc3RyaW5nO1xuICBnZW5lcm86IHN0cmluZztcbiAgY2FwaXR1bG9zOiBudW1iZXI7XG4gIGHDsW86IG51bWJlcjtcbiAgZGVzY3JpcGNpb24/OiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xuICB1cGRhdGVkQXQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb24ge1xuICBpZDogc3RyaW5nO1xuICB0eXBlOiAnc3VjY2VzcycgfCAnZXJyb3InIHwgJ3dhcm5pbmcnIHwgJ2luZm8nO1xuICB0aXRsZTogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICBzZWN0aW9uOiBzdHJpbmc7XG4gIGFjdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN5bmNTdGF0dXMge1xuICBsYXN0U3luYzogc3RyaW5nO1xuICBpc09ubGluZTogYm9vbGVhbjtcbiAgcGVuZGluZ0NoYW5nZXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTeXN0ZW1Db25maWcge1xuICB2ZXJzaW9uOiBzdHJpbmc7XG4gIGxhc3RFeHBvcnQ6IHN0cmluZztcbiAgcHJpY2VzOiBQcmljZUNvbmZpZztcbiAgZGVsaXZlcnlab25lczogRGVsaXZlcnlab25lW107XG4gIG5vdmVsczogTm92ZWxbXTtcbiAgc2V0dGluZ3M6IHtcbiAgICBhdXRvU3luYzogYm9vbGVhbjtcbiAgICBzeW5jSW50ZXJ2YWw6IG51bWJlcjtcbiAgICBlbmFibGVOb3RpZmljYXRpb25zOiBib29sZWFuO1xuICAgIG1heE5vdGlmaWNhdGlvbnM6IG51bWJlcjtcbiAgfTtcbiAgbWV0YWRhdGE6IHtcbiAgICB0b3RhbE9yZGVyczogbnVtYmVyO1xuICAgIHRvdGFsUmV2ZW51ZTogbnVtYmVyO1xuICAgIGxhc3RPcmRlckRhdGU6IHN0cmluZztcbiAgICBzeXN0ZW1VcHRpbWU6IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZG1pblN0YXRlIHtcbiAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xuICBwcmljZXM6IFByaWNlQ29uZmlnO1xuICBkZWxpdmVyeVpvbmVzOiBEZWxpdmVyeVpvbmVbXTtcbiAgbm92ZWxzOiBOb3ZlbFtdO1xuICBub3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25bXTtcbiAgc3luY1N0YXR1czogU3luY1N0YXR1cztcbiAgc3lzdGVtQ29uZmlnOiBTeXN0ZW1Db25maWc7XG59XG5cbnR5cGUgQWRtaW5BY3Rpb24gPSBcbiAgfCB7IHR5cGU6ICdMT0dJTic7IHBheWxvYWQ6IHsgdXNlcm5hbWU6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9IH1cbiAgfCB7IHR5cGU6ICdMT0dPVVQnIH1cbiAgfCB7IHR5cGU6ICdVUERBVEVfUFJJQ0VTJzsgcGF5bG9hZDogUHJpY2VDb25maWcgfVxuICB8IHsgdHlwZTogJ0FERF9ERUxJVkVSWV9aT05FJzsgcGF5bG9hZDogT21pdDxEZWxpdmVyeVpvbmUsICdpZCcgfCAnY3JlYXRlZEF0JyB8ICd1cGRhdGVkQXQnPiB9XG4gIHwgeyB0eXBlOiAnVVBEQVRFX0RFTElWRVJZX1pPTkUnOyBwYXlsb2FkOiBEZWxpdmVyeVpvbmUgfVxuICB8IHsgdHlwZTogJ0RFTEVURV9ERUxJVkVSWV9aT05FJzsgcGF5bG9hZDogbnVtYmVyIH1cbiAgfCB7IHR5cGU6ICdBRERfTk9WRUwnOyBwYXlsb2FkOiBPbWl0PE5vdmVsLCAnaWQnIHwgJ2NyZWF0ZWRBdCcgfCAndXBkYXRlZEF0Jz4gfVxuICB8IHsgdHlwZTogJ1VQREFURV9OT1ZFTCc7IHBheWxvYWQ6IE5vdmVsIH1cbiAgfCB7IHR5cGU6ICdERUxFVEVfTk9WRUwnOyBwYXlsb2FkOiBudW1iZXIgfVxuICB8IHsgdHlwZTogJ0FERF9OT1RJRklDQVRJT04nOyBwYXlsb2FkOiBPbWl0PE5vdGlmaWNhdGlvbiwgJ2lkJyB8ICd0aW1lc3RhbXAnPiB9XG4gIHwgeyB0eXBlOiAnQ0xFQVJfTk9USUZJQ0FUSU9OUycgfVxuICB8IHsgdHlwZTogJ1VQREFURV9TWU5DX1NUQVRVUyc7IHBheWxvYWQ6IFBhcnRpYWw8U3luY1N0YXR1cz4gfVxuICB8IHsgdHlwZTogJ1NZTkNfU1RBVEUnOyBwYXlsb2FkOiBQYXJ0aWFsPEFkbWluU3RhdGU+IH1cbiAgfCB7IHR5cGU6ICdMT0FEX1NZU1RFTV9DT05GSUcnOyBwYXlsb2FkOiBTeXN0ZW1Db25maWcgfVxuICB8IHsgdHlwZTogJ1VQREFURV9TWVNURU1fQ09ORklHJzsgcGF5bG9hZDogUGFydGlhbDxTeXN0ZW1Db25maWc+IH07XG5cbmludGVyZmFjZSBBZG1pbkNvbnRleHRUeXBlIHtcbiAgc3RhdGU6IEFkbWluU3RhdGU7XG4gIGxvZ2luOiAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gYm9vbGVhbjtcbiAgbG9nb3V0OiAoKSA9PiB2b2lkO1xuICB1cGRhdGVQcmljZXM6IChwcmljZXM6IFByaWNlQ29uZmlnKSA9PiB2b2lkO1xuICBhZGREZWxpdmVyeVpvbmU6ICh6b25lOiBPbWl0PERlbGl2ZXJ5Wm9uZSwgJ2lkJyB8ICdjcmVhdGVkQXQnIHwgJ3VwZGF0ZWRBdCc+KSA9PiB2b2lkO1xuICB1cGRhdGVEZWxpdmVyeVpvbmU6ICh6b25lOiBEZWxpdmVyeVpvbmUpID0+IHZvaWQ7XG4gIGRlbGV0ZURlbGl2ZXJ5Wm9uZTogKGlkOiBudW1iZXIpID0+IHZvaWQ7XG4gIGFkZE5vdmVsOiAobm92ZWw6IE9taXQ8Tm92ZWwsICdpZCcgfCAnY3JlYXRlZEF0JyB8ICd1cGRhdGVkQXQnPikgPT4gdm9pZDtcbiAgdXBkYXRlTm92ZWw6IChub3ZlbDogTm92ZWwpID0+IHZvaWQ7XG4gIGRlbGV0ZU5vdmVsOiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgYWRkTm90aWZpY2F0aW9uOiAobm90aWZpY2F0aW9uOiBPbWl0PE5vdGlmaWNhdGlvbiwgJ2lkJyB8ICd0aW1lc3RhbXAnPikgPT4gdm9pZDtcbiAgY2xlYXJOb3RpZmljYXRpb25zOiAoKSA9PiB2b2lkO1xuICBleHBvcnRTeXN0ZW1Db25maWc6ICgpID0+IHZvaWQ7XG4gIGltcG9ydFN5c3RlbUNvbmZpZzogKGNvbmZpZzogU3lzdGVtQ29uZmlnKSA9PiB2b2lkO1xuICBleHBvcnRDb21wbGV0ZVNvdXJjZUNvZGU6ICgpID0+IHZvaWQ7XG4gIHN5bmNXaXRoUmVtb3RlOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBicm9hZGNhc3RDaGFuZ2U6IChjaGFuZ2U6IGFueSkgPT4gdm9pZDtcbiAgc3luY0FsbFNlY3Rpb25zOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xufVxuXG4vLyBJbml0aWFsIHN0YXRlIHdpdGggZW1iZWRkZWQgY29uZmlndXJhdGlvblxuY29uc3QgaW5pdGlhbFN0YXRlOiBBZG1pblN0YXRlID0ge1xuICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxuICBwcmljZXM6IEVNQkVEREVEX0NPTkZJRy5wcmljZXMsXG4gIGRlbGl2ZXJ5Wm9uZXM6IEVNQkVEREVEX0NPTkZJRy5kZWxpdmVyeVpvbmVzLFxuICBub3ZlbHM6IEVNQkVEREVEX0NPTkZJRy5ub3ZlbHMsXG4gIG5vdGlmaWNhdGlvbnM6IFtdLFxuICBzeW5jU3RhdHVzOiB7XG4gICAgbGFzdFN5bmM6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICBpc09ubGluZTogdHJ1ZSxcbiAgICBwZW5kaW5nQ2hhbmdlczogMCxcbiAgfSxcbiAgc3lzdGVtQ29uZmlnOiBFTUJFRERFRF9DT05GSUcsXG59O1xuXG4vLyBSZWR1Y2VyXG5mdW5jdGlvbiBhZG1pblJlZHVjZXIoc3RhdGU6IEFkbWluU3RhdGUsIGFjdGlvbjogQWRtaW5BY3Rpb24pOiBBZG1pblN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0xPR0lOJzpcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC51c2VybmFtZSA9PT0gQURNSU5fQ1JFREVOVElBTFMudXNlcm5hbWUgJiYgYWN0aW9uLnBheWxvYWQucGFzc3dvcmQgPT09IEFETUlOX0NSRURFTlRJQUxTLnBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0ZTtcblxuICAgIGNhc2UgJ0xPR09VVCc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSB9O1xuXG4gICAgY2FzZSAnVVBEQVRFX1BSSUNFUyc6XG4gICAgICBjb25zdCB1cGRhdGVkQ29uZmlnID0ge1xuICAgICAgICAuLi5zdGF0ZS5zeXN0ZW1Db25maWcsXG4gICAgICAgIHByaWNlczogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIGxhc3RFeHBvcnQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJpY2VzOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgc3lzdGVtQ29uZmlnOiB1cGRhdGVkQ29uZmlnLFxuICAgICAgICBzeW5jU3RhdHVzOiB7IC4uLnN0YXRlLnN5bmNTdGF0dXMsIHBlbmRpbmdDaGFuZ2VzOiBzdGF0ZS5zeW5jU3RhdHVzLnBlbmRpbmdDaGFuZ2VzICsgMSB9XG4gICAgICB9O1xuXG4gICAgY2FzZSAnQUREX0RFTElWRVJZX1pPTkUnOlxuICAgICAgY29uc3QgbmV3Wm9uZTogRGVsaXZlcnlab25lID0ge1xuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgaWQ6IERhdGUubm93KCksXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgICBjb25zdCBjb25maWdXaXRoTmV3Wm9uZSA9IHtcbiAgICAgICAgLi4uc3RhdGUuc3lzdGVtQ29uZmlnLFxuICAgICAgICBkZWxpdmVyeVpvbmVzOiBbLi4uc3RhdGUuc3lzdGVtQ29uZmlnLmRlbGl2ZXJ5Wm9uZXMsIG5ld1pvbmVdLFxuICAgICAgICBsYXN0RXhwb3J0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRlbGl2ZXJ5Wm9uZXM6IFsuLi5zdGF0ZS5kZWxpdmVyeVpvbmVzLCBuZXdab25lXSxcbiAgICAgICAgc3lzdGVtQ29uZmlnOiBjb25maWdXaXRoTmV3Wm9uZSxcbiAgICAgICAgc3luY1N0YXR1czogeyAuLi5zdGF0ZS5zeW5jU3RhdHVzLCBwZW5kaW5nQ2hhbmdlczogc3RhdGUuc3luY1N0YXR1cy5wZW5kaW5nQ2hhbmdlcyArIDEgfVxuICAgICAgfTtcblxuICAgIGNhc2UgJ1VQREFURV9ERUxJVkVSWV9aT05FJzpcbiAgICAgIGNvbnN0IHVwZGF0ZWRab25lcyA9IHN0YXRlLmRlbGl2ZXJ5Wm9uZXMubWFwKHpvbmUgPT5cbiAgICAgICAgem9uZS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcbiAgICAgICAgICA/IHsgLi4uYWN0aW9uLnBheWxvYWQsIHVwZGF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH1cbiAgICAgICAgICA6IHpvbmVcbiAgICAgICk7XG4gICAgICBjb25zdCBjb25maWdXaXRoVXBkYXRlZFpvbmUgPSB7XG4gICAgICAgIC4uLnN0YXRlLnN5c3RlbUNvbmZpZyxcbiAgICAgICAgZGVsaXZlcnlab25lczogdXBkYXRlZFpvbmVzLFxuICAgICAgICBsYXN0RXhwb3J0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRlbGl2ZXJ5Wm9uZXM6IHVwZGF0ZWRab25lcyxcbiAgICAgICAgc3lzdGVtQ29uZmlnOiBjb25maWdXaXRoVXBkYXRlZFpvbmUsXG4gICAgICAgIHN5bmNTdGF0dXM6IHsgLi4uc3RhdGUuc3luY1N0YXR1cywgcGVuZGluZ0NoYW5nZXM6IHN0YXRlLnN5bmNTdGF0dXMucGVuZGluZ0NoYW5nZXMgKyAxIH1cbiAgICAgIH07XG5cbiAgICBjYXNlICdERUxFVEVfREVMSVZFUllfWk9ORSc6XG4gICAgICBjb25zdCBmaWx0ZXJlZFpvbmVzID0gc3RhdGUuZGVsaXZlcnlab25lcy5maWx0ZXIoem9uZSA9PiB6b25lLmlkICE9PSBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICBjb25zdCBjb25maWdXaXRoRGVsZXRlZFpvbmUgPSB7XG4gICAgICAgIC4uLnN0YXRlLnN5c3RlbUNvbmZpZyxcbiAgICAgICAgZGVsaXZlcnlab25lczogZmlsdGVyZWRab25lcyxcbiAgICAgICAgbGFzdEV4cG9ydDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkZWxpdmVyeVpvbmVzOiBmaWx0ZXJlZFpvbmVzLFxuICAgICAgICBzeXN0ZW1Db25maWc6IGNvbmZpZ1dpdGhEZWxldGVkWm9uZSxcbiAgICAgICAgc3luY1N0YXR1czogeyAuLi5zdGF0ZS5zeW5jU3RhdHVzLCBwZW5kaW5nQ2hhbmdlczogc3RhdGUuc3luY1N0YXR1cy5wZW5kaW5nQ2hhbmdlcyArIDEgfVxuICAgICAgfTtcblxuICAgIGNhc2UgJ0FERF9OT1ZFTCc6XG4gICAgICBjb25zdCBuZXdOb3ZlbDogTm92ZWwgPSB7XG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICBpZDogRGF0ZS5ub3coKSxcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IGNvbmZpZ1dpdGhOZXdOb3ZlbCA9IHtcbiAgICAgICAgLi4uc3RhdGUuc3lzdGVtQ29uZmlnLFxuICAgICAgICBub3ZlbHM6IFsuLi5zdGF0ZS5zeXN0ZW1Db25maWcubm92ZWxzLCBuZXdOb3ZlbF0sXG4gICAgICAgIGxhc3RFeHBvcnQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbm92ZWxzOiBbLi4uc3RhdGUubm92ZWxzLCBuZXdOb3ZlbF0sXG4gICAgICAgIHN5c3RlbUNvbmZpZzogY29uZmlnV2l0aE5ld05vdmVsLFxuICAgICAgICBzeW5jU3RhdHVzOiB7IC4uLnN0YXRlLnN5bmNTdGF0dXMsIHBlbmRpbmdDaGFuZ2VzOiBzdGF0ZS5zeW5jU3RhdHVzLnBlbmRpbmdDaGFuZ2VzICsgMSB9XG4gICAgICB9O1xuXG4gICAgY2FzZSAnVVBEQVRFX05PVkVMJzpcbiAgICAgIGNvbnN0IHVwZGF0ZWROb3ZlbHMgPSBzdGF0ZS5ub3ZlbHMubWFwKG5vdmVsID0+XG4gICAgICAgIG5vdmVsLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgICAgID8geyAuLi5hY3Rpb24ucGF5bG9hZCwgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgfVxuICAgICAgICAgIDogbm92ZWxcbiAgICAgICk7XG4gICAgICBjb25zdCBjb25maWdXaXRoVXBkYXRlZE5vdmVsID0ge1xuICAgICAgICAuLi5zdGF0ZS5zeXN0ZW1Db25maWcsXG4gICAgICAgIG5vdmVsczogdXBkYXRlZE5vdmVscyxcbiAgICAgICAgbGFzdEV4cG9ydDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBub3ZlbHM6IHVwZGF0ZWROb3ZlbHMsXG4gICAgICAgIHN5c3RlbUNvbmZpZzogY29uZmlnV2l0aFVwZGF0ZWROb3ZlbCxcbiAgICAgICAgc3luY1N0YXR1czogeyAuLi5zdGF0ZS5zeW5jU3RhdHVzLCBwZW5kaW5nQ2hhbmdlczogc3RhdGUuc3luY1N0YXR1cy5wZW5kaW5nQ2hhbmdlcyArIDEgfVxuICAgICAgfTtcblxuICAgIGNhc2UgJ0RFTEVURV9OT1ZFTCc6XG4gICAgICBjb25zdCBmaWx0ZXJlZE5vdmVscyA9IHN0YXRlLm5vdmVscy5maWx0ZXIobm92ZWwgPT4gbm92ZWwuaWQgIT09IGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIGNvbnN0IGNvbmZpZ1dpdGhEZWxldGVkTm92ZWwgPSB7XG4gICAgICAgIC4uLnN0YXRlLnN5c3RlbUNvbmZpZyxcbiAgICAgICAgbm92ZWxzOiBmaWx0ZXJlZE5vdmVscyxcbiAgICAgICAgbGFzdEV4cG9ydDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBub3ZlbHM6IGZpbHRlcmVkTm92ZWxzLFxuICAgICAgICBzeXN0ZW1Db25maWc6IGNvbmZpZ1dpdGhEZWxldGVkTm92ZWwsXG4gICAgICAgIHN5bmNTdGF0dXM6IHsgLi4uc3RhdGUuc3luY1N0YXR1cywgcGVuZGluZ0NoYW5nZXM6IHN0YXRlLnN5bmNTdGF0dXMucGVuZGluZ0NoYW5nZXMgKyAxIH1cbiAgICAgIH07XG5cbiAgICBjYXNlICdBRERfTk9USUZJQ0FUSU9OJzpcbiAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uID0ge1xuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgaWQ6IERhdGUubm93KCkudG9TdHJpbmcoKSxcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5vdGlmaWNhdGlvbnM6IFtub3RpZmljYXRpb24sIC4uLnN0YXRlLm5vdGlmaWNhdGlvbnNdLnNsaWNlKDAsIHN0YXRlLnN5c3RlbUNvbmZpZy5zZXR0aW5ncy5tYXhOb3RpZmljYXRpb25zKSxcbiAgICAgIH07XG5cbiAgICBjYXNlICdDTEVBUl9OT1RJRklDQVRJT05TJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBub3RpZmljYXRpb25zOiBbXSxcbiAgICAgIH07XG5cbiAgICBjYXNlICdVUERBVEVfU1lOQ19TVEFUVVMnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN5bmNTdGF0dXM6IHsgLi4uc3RhdGUuc3luY1N0YXR1cywgLi4uYWN0aW9uLnBheWxvYWQgfSxcbiAgICAgIH07XG5cbiAgICBjYXNlICdMT0FEX1NZU1RFTV9DT05GSUcnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByaWNlczogYWN0aW9uLnBheWxvYWQucHJpY2VzLFxuICAgICAgICBkZWxpdmVyeVpvbmVzOiBhY3Rpb24ucGF5bG9hZC5kZWxpdmVyeVpvbmVzLFxuICAgICAgICBub3ZlbHM6IGFjdGlvbi5wYXlsb2FkLm5vdmVscyxcbiAgICAgICAgc3lzdGVtQ29uZmlnOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgc3luY1N0YXR1czogeyAuLi5zdGF0ZS5zeW5jU3RhdHVzLCBsYXN0U3luYzogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLCBwZW5kaW5nQ2hhbmdlczogMCB9XG4gICAgICB9O1xuXG4gICAgY2FzZSAnVVBEQVRFX1NZU1RFTV9DT05GSUcnOlxuICAgICAgY29uc3QgbmV3U3lzdGVtQ29uZmlnID0geyAuLi5zdGF0ZS5zeXN0ZW1Db25maWcsIC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3lzdGVtQ29uZmlnOiBuZXdTeXN0ZW1Db25maWcsXG4gICAgICB9O1xuXG4gICAgY2FzZSAnU1lOQ19TVEFURSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIHN5bmNTdGF0dXM6IHsgLi4uc3RhdGUuc3luY1N0YXR1cywgbGFzdFN5bmM6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSwgcGVuZGluZ0NoYW5nZXM6IDAgfVxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuLy8gQ29udGV4dCBjcmVhdGlvblxuY29uc3QgQWRtaW5Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxBZG1pbkNvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG4vLyBSZWFsLXRpbWUgc3luYyBzZXJ2aWNlXG5jbGFzcyBSZWFsVGltZVN5bmNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsaXN0ZW5lcnM6IFNldDwoZGF0YTogYW55KSA9PiB2b2lkPiA9IG5ldyBTZXQoKTtcbiAgcHJpdmF0ZSBzeW5jSW50ZXJ2YWw6IE5vZGVKUy5UaW1lb3V0IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgc3RvcmFnZUtleSA9ICdhZG1pbl9zeXN0ZW1fc3RhdGUnO1xuICBwcml2YXRlIGNvbmZpZ0tleSA9ICdzeXN0ZW1fY29uZmlnJztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRpYWxpemVTeW5jKCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVTeW5jKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgdGhpcy5oYW5kbGVTdG9yYWdlQ2hhbmdlLmJpbmQodGhpcykpO1xuICAgIHRoaXMuc3luY0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5jaGVja0ZvclVwZGF0ZXMoKTtcbiAgICB9LCA1MDAwKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKCFkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgdGhpcy5jaGVja0ZvclVwZGF0ZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU3RvcmFnZUNoYW5nZShldmVudDogU3RvcmFnZUV2ZW50KSB7XG4gICAgaWYgKChldmVudC5rZXkgPT09IHRoaXMuc3RvcmFnZUtleSB8fCBldmVudC5rZXkgPT09IHRoaXMuY29uZmlnS2V5KSAmJiBldmVudC5uZXdWYWx1ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBKU09OLnBhcnNlKGV2ZW50Lm5ld1ZhbHVlKTtcbiAgICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMobmV3U3RhdGUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcGFyc2luZyBzeW5jIGRhdGE6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tGb3JVcGRhdGVzKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdG9yZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXkpO1xuICAgICAgY29uc3QgY29uZmlnID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5jb25maWdLZXkpO1xuICAgICAgXG4gICAgICBpZiAoc3RvcmVkKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlZFN0YXRlID0gSlNPTi5wYXJzZShzdG9yZWQpO1xuICAgICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhzdG9yZWRTdGF0ZSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgY29uc3QgY29uZmlnRGF0YSA9IEpTT04ucGFyc2UoY29uZmlnKTtcbiAgICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoeyBzeXN0ZW1Db25maWc6IGNvbmZpZ0RhdGEgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIGZvciB1cGRhdGVzOicsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBzdWJzY3JpYmUoY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5hZGQoY2FsbGJhY2spO1xuICAgIHJldHVybiAoKSA9PiB0aGlzLmxpc3RlbmVycy5kZWxldGUoY2FsbGJhY2spO1xuICB9XG5cbiAgYnJvYWRjYXN0KHN0YXRlOiBBZG1pblN0YXRlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN5bmNEYXRhID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB9O1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5zdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShzeW5jRGF0YSkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5jb25maWdLZXksIEpTT04uc3RyaW5naWZ5KHN0YXRlLnN5c3RlbUNvbmZpZykpO1xuICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoc3luY0RhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBicm9hZGNhc3Rpbmcgc3RhdGU6JywgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5TGlzdGVuZXJzKGRhdGE6IGFueSkge1xuICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goY2FsbGJhY2sgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBzeW5jIGxpc3RlbmVyOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3luY0ludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc3luY0ludGVydmFsKTtcbiAgICB9XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCB0aGlzLmhhbmRsZVN0b3JhZ2VDaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5saXN0ZW5lcnMuY2xlYXIoKTtcbiAgfVxufVxuXG4vLyBQcm92aWRlciBjb21wb25lbnRcbmV4cG9ydCBmdW5jdGlvbiBBZG1pblByb3ZpZGVyKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGFkbWluUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgY29uc3QgW3N5bmNTZXJ2aWNlXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IG5ldyBSZWFsVGltZVN5bmNTZXJ2aWNlKCkpO1xuXG4gIC8vIExvYWQgc3lzdGVtIGNvbmZpZyBvbiBzdGFydHVwXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0b3JlZENvbmZpZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzeXN0ZW1fY29uZmlnJyk7XG4gICAgICBpZiAoc3RvcmVkQ29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IEpTT04ucGFyc2Uoc3RvcmVkQ29uZmlnKTtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTE9BRF9TWVNURU1fQ09ORklHJywgcGF5bG9hZDogY29uZmlnIH0pO1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCBzdG9yZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWRtaW5fc3lzdGVtX3N0YXRlJyk7XG4gICAgICBpZiAoc3RvcmVkKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlZFN0YXRlID0gSlNPTi5wYXJzZShzdG9yZWQpO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTWU5DX1NUQVRFJywgcGF5bG9hZDogc3RvcmVkU3RhdGUgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgaW5pdGlhbCBzdGF0ZTonLCBlcnJvcik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgLy8gU2F2ZSBzdGF0ZSBjaGFuZ2VzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhZG1pbl9zeXN0ZW1fc3RhdGUnLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N5c3RlbV9jb25maWcnLCBKU09OLnN0cmluZ2lmeShzdGF0ZS5zeXN0ZW1Db25maWcpKTtcbiAgICAgIHN5bmNTZXJ2aWNlLmJyb2FkY2FzdChzdGF0ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNhdmluZyBzdGF0ZTonLCBlcnJvcik7XG4gICAgfVxuICB9LCBbc3RhdGUsIHN5bmNTZXJ2aWNlXSk7XG5cbiAgLy8gUmVhbC10aW1lIHN5bmMgbGlzdGVuZXJcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IHN5bmNTZXJ2aWNlLnN1YnNjcmliZSgoc3luY2VkU3RhdGUpID0+IHtcbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeShzeW5jZWRTdGF0ZSkgIT09IEpTT04uc3RyaW5naWZ5KHN0YXRlKSkge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTWU5DX1NUQVRFJywgcGF5bG9hZDogc3luY2VkU3RhdGUgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHVuc3Vic2NyaWJlO1xuICB9LCBbc3luY1NlcnZpY2UsIHN0YXRlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc3luY1NlcnZpY2UuZGVzdHJveSgpO1xuICAgIH07XG4gIH0sIFtzeW5jU2VydmljZV0pO1xuXG4gIC8vIENvbnRleHQgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxuICBjb25zdCBsb2dpbiA9ICh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnTE9HSU4nLCBwYXlsb2FkOiB7IHVzZXJuYW1lLCBwYXNzd29yZCB9IH0pO1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSB1c2VybmFtZSA9PT0gQURNSU5fQ1JFREVOVElBTFMudXNlcm5hbWUgJiYgcGFzc3dvcmQgPT09IEFETUlOX0NSRURFTlRJQUxTLnBhc3N3b3JkO1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgIHRpdGxlOiAnSW5pY2lvIGRlIHNlc2nDs24gZXhpdG9zbycsXG4gICAgICAgIG1lc3NhZ2U6ICdCaWVudmVuaWRvIGFsIHBhbmVsIGRlIGFkbWluaXN0cmFjacOzbicsXG4gICAgICAgIHNlY3Rpb246ICdBdXRlbnRpY2FjacOzbicsXG4gICAgICAgIGFjdGlvbjogJ2xvZ2luJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9O1xuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdMT0dPVVQnIH0pO1xuICAgIGFkZE5vdGlmaWNhdGlvbih7XG4gICAgICB0eXBlOiAnaW5mbycsXG4gICAgICB0aXRsZTogJ1Nlc2nDs24gY2VycmFkYScsXG4gICAgICBtZXNzYWdlOiAnSGFzIGNlcnJhZG8gc2VzacOzbiBjb3JyZWN0YW1lbnRlJyxcbiAgICAgIHNlY3Rpb246ICdBdXRlbnRpY2FjacOzbicsXG4gICAgICBhY3Rpb246ICdsb2dvdXQnXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUHJpY2VzID0gKHByaWNlczogUHJpY2VDb25maWcpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdVUERBVEVfUFJJQ0VTJywgcGF5bG9hZDogcHJpY2VzIH0pO1xuICAgIGFkZE5vdGlmaWNhdGlvbih7XG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICB0aXRsZTogJ1ByZWNpb3MgYWN0dWFsaXphZG9zJyxcbiAgICAgIG1lc3NhZ2U6ICdMb3MgcHJlY2lvcyBzZSBoYW4gYWN0dWFsaXphZG8geSBzaW5jcm9uaXphZG8gYXV0b23DoXRpY2FtZW50ZScsXG4gICAgICBzZWN0aW9uOiAnUHJlY2lvcycsXG4gICAgICBhY3Rpb246ICd1cGRhdGUnXG4gICAgfSk7XG4gICAgYnJvYWRjYXN0Q2hhbmdlKHsgdHlwZTogJ3ByaWNlcycsIGRhdGE6IHByaWNlcyB9KTtcbiAgfTtcblxuICBjb25zdCBhZGREZWxpdmVyeVpvbmUgPSAoem9uZTogT21pdDxEZWxpdmVyeVpvbmUsICdpZCcgfCAnY3JlYXRlZEF0JyB8ICd1cGRhdGVkQXQnPikgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FERF9ERUxJVkVSWV9aT05FJywgcGF5bG9hZDogem9uZSB9KTtcbiAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgdGl0bGU6ICdab25hIGRlIGVudHJlZ2EgYWdyZWdhZGEnLFxuICAgICAgbWVzc2FnZTogXFxgU2UgYWdyZWfDsyBsYSB6b25hIFwiXFwke3pvbmUubmFtZX1cIiB5IHNlIHNpbmNyb25pesOzIGF1dG9tw6F0aWNhbWVudGVcXGAsXG4gICAgICBzZWN0aW9uOiAnWm9uYXMgZGUgRW50cmVnYScsXG4gICAgICBhY3Rpb246ICdjcmVhdGUnXG4gICAgfSk7XG4gICAgYnJvYWRjYXN0Q2hhbmdlKHsgdHlwZTogJ2RlbGl2ZXJ5X3pvbmVfYWRkJywgZGF0YTogem9uZSB9KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVEZWxpdmVyeVpvbmUgPSAoem9uZTogRGVsaXZlcnlab25lKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX0RFTElWRVJZX1pPTkUnLCBwYXlsb2FkOiB6b25lIH0pO1xuICAgIGFkZE5vdGlmaWNhdGlvbih7XG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICB0aXRsZTogJ1pvbmEgZGUgZW50cmVnYSBhY3R1YWxpemFkYScsXG4gICAgICBtZXNzYWdlOiBcXGBTZSBhY3R1YWxpesOzIGxhIHpvbmEgXCJcXCR7em9uZS5uYW1lfVwiIHkgc2Ugc2luY3Jvbml6w7MgYXV0b23DoXRpY2FtZW50ZVxcYCxcbiAgICAgIHNlY3Rpb246ICdab25hcyBkZSBFbnRyZWdhJyxcbiAgICAgIGFjdGlvbjogJ3VwZGF0ZSdcbiAgICB9KTtcbiAgICBicm9hZGNhc3RDaGFuZ2UoeyB0eXBlOiAnZGVsaXZlcnlfem9uZV91cGRhdGUnLCBkYXRhOiB6b25lIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZURlbGl2ZXJ5Wm9uZSA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3Qgem9uZSA9IHN0YXRlLmRlbGl2ZXJ5Wm9uZXMuZmluZCh6ID0+IHouaWQgPT09IGlkKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdERUxFVEVfREVMSVZFUllfWk9ORScsIHBheWxvYWQ6IGlkIH0pO1xuICAgIGFkZE5vdGlmaWNhdGlvbih7XG4gICAgICB0eXBlOiAnd2FybmluZycsXG4gICAgICB0aXRsZTogJ1pvbmEgZGUgZW50cmVnYSBlbGltaW5hZGEnLFxuICAgICAgbWVzc2FnZTogXFxgU2UgZWxpbWluw7MgbGEgem9uYSBcIlxcJHt6b25lPy5uYW1lIHx8ICdEZXNjb25vY2lkYSd9XCIgeSBzZSBzaW5jcm9uaXrDsyBhdXRvbcOhdGljYW1lbnRlXFxgLFxuICAgICAgc2VjdGlvbjogJ1pvbmFzIGRlIEVudHJlZ2EnLFxuICAgICAgYWN0aW9uOiAnZGVsZXRlJ1xuICAgIH0pO1xuICAgIGJyb2FkY2FzdENoYW5nZSh7IHR5cGU6ICdkZWxpdmVyeV96b25lX2RlbGV0ZScsIGRhdGE6IHsgaWQgfSB9KTtcbiAgfTtcblxuICBjb25zdCBhZGROb3ZlbCA9IChub3ZlbDogT21pdDxOb3ZlbCwgJ2lkJyB8ICdjcmVhdGVkQXQnIHwgJ3VwZGF0ZWRBdCc+KSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX05PVkVMJywgcGF5bG9hZDogbm92ZWwgfSk7XG4gICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgIHRpdGxlOiAnTm92ZWxhIGFncmVnYWRhJyxcbiAgICAgIG1lc3NhZ2U6IFxcYFNlIGFncmVnw7MgbGEgbm92ZWxhIFwiXFwke25vdmVsLnRpdHVsb31cIiB5IHNlIHNpbmNyb25pesOzIGF1dG9tw6F0aWNhbWVudGVcXGAsXG4gICAgICBzZWN0aW9uOiAnR2VzdGnDs24gZGUgTm92ZWxhcycsXG4gICAgICBhY3Rpb246ICdjcmVhdGUnXG4gICAgfSk7XG4gICAgYnJvYWRjYXN0Q2hhbmdlKHsgdHlwZTogJ25vdmVsX2FkZCcsIGRhdGE6IG5vdmVsIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZU5vdmVsID0gKG5vdmVsOiBOb3ZlbCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9OT1ZFTCcsIHBheWxvYWQ6IG5vdmVsIH0pO1xuICAgIGFkZE5vdGlmaWNhdGlvbih7XG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICB0aXRsZTogJ05vdmVsYSBhY3R1YWxpemFkYScsXG4gICAgICBtZXNzYWdlOiBcXGBTZSBhY3R1YWxpesOzIGxhIG5vdmVsYSBcIlxcJHtub3ZlbC50aXR1bG99XCIgeSBzZSBzaW5jcm9uaXrDsyBhdXRvbcOhdGljYW1lbnRlXFxgLFxuICAgICAgc2VjdGlvbjogJ0dlc3Rpw7NuIGRlIE5vdmVsYXMnLFxuICAgICAgYWN0aW9uOiAndXBkYXRlJ1xuICAgIH0pO1xuICAgIGJyb2FkY2FzdENoYW5nZSh7IHR5cGU6ICdub3ZlbF91cGRhdGUnLCBkYXRhOiBub3ZlbCB9KTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVOb3ZlbCA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3Qgbm92ZWwgPSBzdGF0ZS5ub3ZlbHMuZmluZChuID0+IG4uaWQgPT09IGlkKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdERUxFVEVfTk9WRUwnLCBwYXlsb2FkOiBpZCB9KTtcbiAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgdHlwZTogJ3dhcm5pbmcnLFxuICAgICAgdGl0bGU6ICdOb3ZlbGEgZWxpbWluYWRhJyxcbiAgICAgIG1lc3NhZ2U6IFxcYFNlIGVsaW1pbsOzIGxhIG5vdmVsYSBcIlxcJHtub3ZlbD8udGl0dWxvIHx8ICdEZXNjb25vY2lkYSd9XCIgeSBzZSBzaW5jcm9uaXrDsyBhdXRvbcOhdGljYW1lbnRlXFxgLFxuICAgICAgc2VjdGlvbjogJ0dlc3Rpw7NuIGRlIE5vdmVsYXMnLFxuICAgICAgYWN0aW9uOiAnZGVsZXRlJ1xuICAgIH0pO1xuICAgIGJyb2FkY2FzdENoYW5nZSh7IHR5cGU6ICdub3ZlbF9kZWxldGUnLCBkYXRhOiB7IGlkIH0gfSk7XG4gIH07XG5cbiAgY29uc3QgYWRkTm90aWZpY2F0aW9uID0gKG5vdGlmaWNhdGlvbjogT21pdDxOb3RpZmljYXRpb24sICdpZCcgfCAndGltZXN0YW1wJz4pID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdBRERfTk9USUZJQ0FUSU9OJywgcGF5bG9hZDogbm90aWZpY2F0aW9uIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyTm90aWZpY2F0aW9ucyA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdDTEVBUl9OT1RJRklDQVRJT05TJyB9KTtcbiAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgdGl0bGU6ICdOb3RpZmljYWNpb25lcyBsaW1waWFkYXMnLFxuICAgICAgbWVzc2FnZTogJ1NlIGhhbiBlbGltaW5hZG8gdG9kYXMgbGFzIG5vdGlmaWNhY2lvbmVzIGRlbCBzaXN0ZW1hJyxcbiAgICAgIHNlY3Rpb246ICdOb3RpZmljYWNpb25lcycsXG4gICAgICBhY3Rpb246ICdjbGVhcidcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBleHBvcnRTeXN0ZW1Db25maWcgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGFkZE5vdGlmaWNhdGlvbih7XG4gICAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICAgICAgdGl0bGU6ICdFeHBvcnRhY2nDs24gZGUgY29uZmlndXJhY2nDs24gaW5pY2lhZGEnLFxuICAgICAgICBtZXNzYWdlOiAnR2VuZXJhbmRvIGFyY2hpdm8gZGUgY29uZmlndXJhY2nDs24gSlNPTi4uLicsXG4gICAgICAgIHNlY3Rpb246ICdTaXN0ZW1hJyxcbiAgICAgICAgYWN0aW9uOiAnZXhwb3J0X2NvbmZpZ19zdGFydCdcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDcmVhdGUgY29tcHJlaGVuc2l2ZSBzeXN0ZW0gY29uZmlndXJhdGlvblxuICAgICAgY29uc3QgY29tcGxldGVDb25maWc6IFN5c3RlbUNvbmZpZyA9IHtcbiAgICAgICAgLi4uc3RhdGUuc3lzdGVtQ29uZmlnLFxuICAgICAgICB2ZXJzaW9uOiAnMi4xLjAnLFxuICAgICAgICBsYXN0RXhwb3J0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIHByaWNlczogc3RhdGUucHJpY2VzLFxuICAgICAgICBkZWxpdmVyeVpvbmVzOiBzdGF0ZS5kZWxpdmVyeVpvbmVzLFxuICAgICAgICBub3ZlbHM6IHN0YXRlLm5vdmVscyxcbiAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5zeXN0ZW1Db25maWcubWV0YWRhdGEsXG4gICAgICAgICAgdG90YWxPcmRlcnM6IHN0YXRlLnN5c3RlbUNvbmZpZy5tZXRhZGF0YS50b3RhbE9yZGVycyxcbiAgICAgICAgICB0b3RhbFJldmVudWU6IHN0YXRlLnN5c3RlbUNvbmZpZy5tZXRhZGF0YS50b3RhbFJldmVudWUsXG4gICAgICAgICAgbGFzdE9yZGVyRGF0ZTogc3RhdGUuc3lzdGVtQ29uZmlnLm1ldGFkYXRhLmxhc3RPcmRlckRhdGUsXG4gICAgICAgICAgc3lzdGVtVXB0aW1lOiBzdGF0ZS5zeXN0ZW1Db25maWcubWV0YWRhdGEuc3lzdGVtVXB0aW1lLFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgLy8gR2VuZXJhdGUgSlNPTiBmaWxlXG4gICAgICBjb25zdCBjb25maWdKc29uID0gSlNPTi5zdHJpbmdpZnkoY29tcGxldGVDb25maWcsIG51bGwsIDIpO1xuICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtjb25maWdKc29uXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICAgIGxpbmsuZG93bmxvYWQgPSBcXGBUVl9hX2xhX0NhcnRhX0NvbmZpZ19cXCR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF19Lmpzb25cXGA7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgbGluay5jbGljaygpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcblxuICAgICAgLy8gVXBkYXRlIHN5c3RlbSBjb25maWcgd2l0aCBleHBvcnQgdGltZXN0YW1wXG4gICAgICBkaXNwYXRjaCh7IFxuICAgICAgICB0eXBlOiAnVVBEQVRFX1NZU1RFTV9DT05GSUcnLCBcbiAgICAgICAgcGF5bG9hZDogeyBsYXN0RXhwb3J0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgfSBcbiAgICAgIH0pO1xuXG4gICAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgIHRpdGxlOiAnQ29uZmlndXJhY2nDs24gZXhwb3J0YWRhJyxcbiAgICAgICAgbWVzc2FnZTogJ0xhIGNvbmZpZ3VyYWNpw7NuIEpTT04gc2UgaGEgZXhwb3J0YWRvIGNvcnJlY3RhbWVudGUnLFxuICAgICAgICBzZWN0aW9uOiAnU2lzdGVtYScsXG4gICAgICAgIGFjdGlvbjogJ2V4cG9ydF9jb25maWcnXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZXhwb3J0aW5nIHN5c3RlbSBjb25maWc6JywgZXJyb3IpO1xuICAgICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgdGl0bGU6ICdFcnJvciBlbiBsYSBleHBvcnRhY2nDs24gZGUgY29uZmlndXJhY2nDs24nLFxuICAgICAgICBtZXNzYWdlOiAnTm8gc2UgcHVkbyBleHBvcnRhciBsYSBjb25maWd1cmFjacOzbiBKU09OJyxcbiAgICAgICAgc2VjdGlvbjogJ1Npc3RlbWEnLFxuICAgICAgICBhY3Rpb246ICdleHBvcnRfY29uZmlnX2Vycm9yJ1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGV4cG9ydENvbXBsZXRlU291cmNlQ29kZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgICB0aXRsZTogJ0V4cG9ydGFjacOzbiBkZSBjw7NkaWdvIGZ1ZW50ZSBpbmljaWFkYScsXG4gICAgICAgIG1lc3NhZ2U6ICdHZW5lcmFuZG8gc2lzdGVtYSBjb21wbGV0byBjb24gY8OzZGlnbyBmdWVudGUuLi4nLFxuICAgICAgICBzZWN0aW9uOiAnU2lzdGVtYScsXG4gICAgICAgIGFjdGlvbjogJ2V4cG9ydF9zb3VyY2Vfc3RhcnQnXG4gICAgICB9KTtcblxuICAgICAgLy8gSW1wb3J0YXIgZGluw6FtaWNhbWVudGUgZWwgZ2VuZXJhZG9yIGRlIGPDs2RpZ28gZnVlbnRlXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGdlbmVyYXRlQ29tcGxldGVTb3VyY2VDb2RlIH0gPSBhd2FpdCBpbXBvcnQoJy4uL3V0aWxzL3NvdXJjZUNvZGVHZW5lcmF0b3InKTtcbiAgICAgICAgYXdhaXQgZ2VuZXJhdGVDb21wbGV0ZVNvdXJjZUNvZGUoc3RhdGUuc3lzdGVtQ29uZmlnKTtcbiAgICAgIH0gY2F0Y2ggKGltcG9ydEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGltcG9ydGluZyBzb3VyY2UgY29kZSBnZW5lcmF0b3I6JywgaW1wb3J0RXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHNlIHB1ZG8gY2FyZ2FyIGVsIGdlbmVyYWRvciBkZSBjw7NkaWdvIGZ1ZW50ZScpO1xuICAgICAgfVxuXG4gICAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgIHRpdGxlOiAnQ8OzZGlnbyBmdWVudGUgZXhwb3J0YWRvJyxcbiAgICAgICAgbWVzc2FnZTogJ0VsIHNpc3RlbWEgY29tcGxldG8gc2UgaGEgZXhwb3J0YWRvIGNvbW8gY8OzZGlnbyBmdWVudGUnLFxuICAgICAgICBzZWN0aW9uOiAnU2lzdGVtYScsXG4gICAgICAgIGFjdGlvbjogJ2V4cG9ydF9zb3VyY2UnXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZXhwb3J0aW5nIHNvdXJjZSBjb2RlOicsIGVycm9yKTtcbiAgICAgIGFkZE5vdGlmaWNhdGlvbih7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIHRpdGxlOiAnRXJyb3IgZW4gbGEgZXhwb3J0YWNpw7NuIGRlIGPDs2RpZ28nLFxuICAgICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdObyBzZSBwdWRvIGV4cG9ydGFyIGVsIGPDs2RpZ28gZnVlbnRlIGNvbXBsZXRvJyxcbiAgICAgICAgc2VjdGlvbjogJ1Npc3RlbWEnLFxuICAgICAgICBhY3Rpb246ICdleHBvcnRfc291cmNlX2Vycm9yJ1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaW1wb3J0U3lzdGVtQ29uZmlnID0gKGNvbmZpZzogU3lzdGVtQ29uZmlnKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0xPQURfU1lTVEVNX0NPTkZJRycsIHBheWxvYWQ6IGNvbmZpZyB9KTtcbiAgICAgIGFkZE5vdGlmaWNhdGlvbih7XG4gICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgdGl0bGU6ICdDb25maWd1cmFjacOzbiBpbXBvcnRhZGEnLFxuICAgICAgICBtZXNzYWdlOiAnTGEgY29uZmlndXJhY2nDs24gZGVsIHNpc3RlbWEgc2UgaGEgY2FyZ2FkbyBjb3JyZWN0YW1lbnRlJyxcbiAgICAgICAgc2VjdGlvbjogJ1Npc3RlbWEnLFxuICAgICAgICBhY3Rpb246ICdpbXBvcnQnXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW1wb3J0aW5nIHN5c3RlbSBjb25maWc6JywgZXJyb3IpO1xuICAgICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgdGl0bGU6ICdFcnJvciBlbiBsYSBpbXBvcnRhY2nDs24nLFxuICAgICAgICBtZXNzYWdlOiAnTm8gc2UgcHVkbyBjYXJnYXIgbGEgY29uZmlndXJhY2nDs24gZGVsIHNpc3RlbWEnLFxuICAgICAgICBzZWN0aW9uOiAnU2lzdGVtYScsXG4gICAgICAgIGFjdGlvbjogJ2ltcG9ydF9lcnJvcidcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzeW5jQWxsU2VjdGlvbnMgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGFkZE5vdGlmaWNhdGlvbih7XG4gICAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICAgICAgdGl0bGU6ICdTaW5jcm9uaXphY2nDs24gY29tcGxldGEgaW5pY2lhZGEnLFxuICAgICAgICBtZXNzYWdlOiAnU2luY3Jvbml6YW5kbyB0b2RhcyBsYXMgc2VjY2lvbmVzIGRlbCBzaXN0ZW1hLi4uJyxcbiAgICAgICAgc2VjdGlvbjogJ1Npc3RlbWEnLFxuICAgICAgICBhY3Rpb246ICdzeW5jX2FsbF9zdGFydCdcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTaW11bGF0ZSBjb21wcmVoZW5zaXZlIHN5bmMgb2YgYWxsIHNlY3Rpb25zXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzAwMCkpO1xuXG4gICAgICAvLyBVcGRhdGUgYWxsIGNvbXBvbmVudHMgd2l0aCBjdXJyZW50IHN0YXRlXG4gICAgICBjb25zdCB1cGRhdGVkQ29uZmlnOiBTeXN0ZW1Db25maWcgPSB7XG4gICAgICAgIC4uLnN0YXRlLnN5c3RlbUNvbmZpZyxcbiAgICAgICAgbGFzdEV4cG9ydDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICBwcmljZXM6IHN0YXRlLnByaWNlcyxcbiAgICAgICAgZGVsaXZlcnlab25lczogc3RhdGUuZGVsaXZlcnlab25lcyxcbiAgICAgICAgbm92ZWxzOiBzdGF0ZS5ub3ZlbHMsXG4gICAgICB9O1xuXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdVUERBVEVfU1lTVEVNX0NPTkZJRycsIHBheWxvYWQ6IHVwZGF0ZWRDb25maWcgfSk7XG4gICAgICBcbiAgICAgIC8vIEJyb2FkY2FzdCBjaGFuZ2VzIHRvIGFsbCBjb21wb25lbnRzXG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2FkbWluX2Z1bGxfc3luYycsIHsgXG4gICAgICAgIGRldGFpbDogeyBcbiAgICAgICAgICBjb25maWc6IHVwZGF0ZWRDb25maWcsXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgfSBcbiAgICAgIH0pKTtcblxuICAgICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICB0aXRsZTogJ1NpbmNyb25pemFjacOzbiBjb21wbGV0YSBleGl0b3NhJyxcbiAgICAgICAgbWVzc2FnZTogJ1RvZGFzIGxhcyBzZWNjaW9uZXMgc2UgaGFuIHNpbmNyb25pemFkbyBjb3JyZWN0YW1lbnRlJyxcbiAgICAgICAgc2VjdGlvbjogJ1Npc3RlbWEnLFxuICAgICAgICBhY3Rpb246ICdzeW5jX2FsbCdcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBmdWxsIHN5bmM6JywgZXJyb3IpO1xuICAgICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgdGl0bGU6ICdFcnJvciBlbiBzaW5jcm9uaXphY2nDs24gY29tcGxldGEnLFxuICAgICAgICBtZXNzYWdlOiAnTm8gc2UgcHVkbyBjb21wbGV0YXIgbGEgc2luY3Jvbml6YWNpw7NuIGRlIHRvZGFzIGxhcyBzZWNjaW9uZXMnLFxuICAgICAgICBzZWN0aW9uOiAnU2lzdGVtYScsXG4gICAgICAgIGFjdGlvbjogJ3N5bmNfYWxsX2Vycm9yJ1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGJyb2FkY2FzdENoYW5nZSA9IChjaGFuZ2U6IGFueSkgPT4ge1xuICAgIGNvbnN0IGNoYW5nZUV2ZW50ID0ge1xuICAgICAgLi4uY2hhbmdlLFxuICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICBzb3VyY2U6ICdhZG1pbl9wYW5lbCdcbiAgICB9O1xuICAgIFxuICAgIGRpc3BhdGNoKHsgXG4gICAgICB0eXBlOiAnVVBEQVRFX1NZTkNfU1RBVFVTJywgXG4gICAgICBwYXlsb2FkOiB7IFxuICAgICAgICBsYXN0U3luYzogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICBwZW5kaW5nQ2hhbmdlczogTWF0aC5tYXgoMCwgc3RhdGUuc3luY1N0YXR1cy5wZW5kaW5nQ2hhbmdlcyAtIDEpXG4gICAgICB9IFxuICAgIH0pO1xuXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdhZG1pbl9zdGF0ZV9jaGFuZ2UnLCB7IFxuICAgICAgZGV0YWlsOiBjaGFuZ2VFdmVudCBcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3Qgc3luY1dpdGhSZW1vdGUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9TWU5DX1NUQVRVUycsIHBheWxvYWQ6IHsgaXNPbmxpbmU6IHRydWUgfSB9KTtcbiAgICAgIFxuICAgICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgICB0aXRsZTogJ1NpbmNyb25pemFjacOzbiBpbmljaWFkYScsXG4gICAgICAgIG1lc3NhZ2U6ICdJbmljaWFuZG8gc2luY3Jvbml6YWNpw7NuIGNvbiBlbCBzaXN0ZW1hIHJlbW90by4uLicsXG4gICAgICAgIHNlY3Rpb246ICdTaXN0ZW1hJyxcbiAgICAgICAgYWN0aW9uOiAnc3luY19zdGFydCdcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTaW11bGF0ZSByZW1vdGUgc3luY1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDIwMDApKTtcbiAgICAgIFxuICAgICAgZGlzcGF0Y2goeyBcbiAgICAgICAgdHlwZTogJ1VQREFURV9TWU5DX1NUQVRVUycsIFxuICAgICAgICBwYXlsb2FkOiB7IFxuICAgICAgICAgIGxhc3RTeW5jOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgcGVuZGluZ0NoYW5nZXM6IDBcbiAgICAgICAgfSBcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgIHRpdGxlOiAnU2luY3Jvbml6YWNpw7NuIGNvbXBsZXRhZGEnLFxuICAgICAgICBtZXNzYWdlOiAnVG9kb3MgbG9zIGRhdG9zIHNlIGhhbiBzaW5jcm9uaXphZG8gY29ycmVjdGFtZW50ZScsXG4gICAgICAgIHNlY3Rpb246ICdTaXN0ZW1hJyxcbiAgICAgICAgYWN0aW9uOiAnc3luYydcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdVUERBVEVfU1lOQ19TVEFUVVMnLCBwYXlsb2FkOiB7IGlzT25saW5lOiBmYWxzZSB9IH0pO1xuICAgICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgdGl0bGU6ICdFcnJvciBkZSBzaW5jcm9uaXphY2nDs24nLFxuICAgICAgICBtZXNzYWdlOiAnTm8gc2UgcHVkbyBzaW5jcm9uaXphciBjb24gZWwgc2Vydmlkb3IgcmVtb3RvJyxcbiAgICAgICAgc2VjdGlvbjogJ1Npc3RlbWEnLFxuICAgICAgICBhY3Rpb246ICdzeW5jX2Vycm9yJ1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFkbWluQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIGxvZ2luLFxuICAgICAgICBsb2dvdXQsXG4gICAgICAgIHVwZGF0ZVByaWNlcyxcbiAgICAgICAgYWRkRGVsaXZlcnlab25lLFxuICAgICAgICB1cGRhdGVEZWxpdmVyeVpvbmUsXG4gICAgICAgIGRlbGV0ZURlbGl2ZXJ5Wm9uZSxcbiAgICAgICAgYWRkTm92ZWwsXG4gICAgICAgIHVwZGF0ZU5vdmVsLFxuICAgICAgICBkZWxldGVOb3ZlbCxcbiAgICAgICAgYWRkTm90aWZpY2F0aW9uLFxuICAgICAgICBjbGVhck5vdGlmaWNhdGlvbnMsXG4gICAgICAgIGV4cG9ydFN5c3RlbUNvbmZpZyxcbiAgICAgICAgaW1wb3J0U3lzdGVtQ29uZmlnLFxuICAgICAgICBleHBvcnRDb21wbGV0ZVNvdXJjZUNvZGUsXG4gICAgICAgIHN5bmNXaXRoUmVtb3RlLFxuICAgICAgICBicm9hZGNhc3RDaGFuZ2UsXG4gICAgICAgIHN5bmNBbGxTZWN0aW9ucyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQWRtaW5Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQWRtaW4oKSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEFkbWluQ29udGV4dCk7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUFkbWluIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQWRtaW5Qcm92aWRlcicpO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5leHBvcnQgeyBBZG1pbkNvbnRleHQgfTtgO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNhcnRDb250ZXh0V2l0aEVtYmVkZGVkQ29uZmlnKHN5c3RlbUNvbmZpZzogU3lzdGVtQ29uZmlnKTogc3RyaW5nIHtcbiAgY29uc3QgcHJpY2VzID0gSlNPTi5zdHJpbmdpZnkoc3lzdGVtQ29uZmlnLnByaWNlcywgbnVsbCwgMik7XG4gIFxuICByZXR1cm4gYGltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvVG9hc3QnO1xuaW1wb3J0IHR5cGUgeyBDYXJ0SXRlbSB9IGZyb20gJy4uL3R5cGVzL21vdmllJztcblxuLy8gUFJFQ0lPUyBFTUJFQklET1MgLSBHZW5lcmFkb3MgYXV0b23DoXRpY2FtZW50ZVxuY29uc3QgRU1CRURERURfUFJJQ0VTID0gJHtwcmljZXN9O1xuXG5pbnRlcmZhY2UgU2VyaWVzQ2FydEl0ZW0gZXh0ZW5kcyBDYXJ0SXRlbSB7XG4gIHNlbGVjdGVkU2Vhc29ucz86IG51bWJlcltdO1xuICBwYXltZW50VHlwZT86ICdjYXNoJyB8ICd0cmFuc2Zlcic7XG59XG5cbmludGVyZmFjZSBDYXJ0U3RhdGUge1xuICBpdGVtczogU2VyaWVzQ2FydEl0ZW1bXTtcbiAgdG90YWw6IG51bWJlcjtcbn1cblxudHlwZSBDYXJ0QWN0aW9uID0gXG4gIHwgeyB0eXBlOiAnQUREX0lURU0nOyBwYXlsb2FkOiBTZXJpZXNDYXJ0SXRlbSB9XG4gIHwgeyB0eXBlOiAnUkVNT1ZFX0lURU0nOyBwYXlsb2FkOiBudW1iZXIgfVxuICB8IHsgdHlwZTogJ1VQREFURV9TRUFTT05TJzsgcGF5bG9hZDogeyBpZDogbnVtYmVyOyBzZWFzb25zOiBudW1iZXJbXSB9IH1cbiAgfCB7IHR5cGU6ICdVUERBVEVfUEFZTUVOVF9UWVBFJzsgcGF5bG9hZDogeyBpZDogbnVtYmVyOyBwYXltZW50VHlwZTogJ2Nhc2gnIHwgJ3RyYW5zZmVyJyB9IH1cbiAgfCB7IHR5cGU6ICdDTEVBUl9DQVJUJyB9XG4gIHwgeyB0eXBlOiAnTE9BRF9DQVJUJzsgcGF5bG9hZDogU2VyaWVzQ2FydEl0ZW1bXSB9O1xuXG5pbnRlcmZhY2UgQ2FydENvbnRleHRUeXBlIHtcbiAgc3RhdGU6IENhcnRTdGF0ZTtcbiAgYWRkSXRlbTogKGl0ZW06IFNlcmllc0NhcnRJdGVtKSA9PiB2b2lkO1xuICByZW1vdmVJdGVtOiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgdXBkYXRlU2Vhc29uczogKGlkOiBudW1iZXIsIHNlYXNvbnM6IG51bWJlcltdKSA9PiB2b2lkO1xuICB1cGRhdGVQYXltZW50VHlwZTogKGlkOiBudW1iZXIsIHBheW1lbnRUeXBlOiAnY2FzaCcgfCAndHJhbnNmZXInKSA9PiB2b2lkO1xuICBjbGVhckNhcnQ6ICgpID0+IHZvaWQ7XG4gIGlzSW5DYXJ0OiAoaWQ6IG51bWJlcikgPT4gYm9vbGVhbjtcbiAgZ2V0SXRlbVNlYXNvbnM6IChpZDogbnVtYmVyKSA9PiBudW1iZXJbXTtcbiAgZ2V0SXRlbVBheW1lbnRUeXBlOiAoaWQ6IG51bWJlcikgPT4gJ2Nhc2gnIHwgJ3RyYW5zZmVyJztcbiAgY2FsY3VsYXRlSXRlbVByaWNlOiAoaXRlbTogU2VyaWVzQ2FydEl0ZW0pID0+IG51bWJlcjtcbiAgY2FsY3VsYXRlVG90YWxQcmljZTogKCkgPT4gbnVtYmVyO1xuICBjYWxjdWxhdGVUb3RhbEJ5UGF5bWVudFR5cGU6ICgpID0+IHsgY2FzaDogbnVtYmVyOyB0cmFuc2ZlcjogbnVtYmVyIH07XG59XG5cbmNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxDYXJ0Q29udGV4dFR5cGUgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbmZ1bmN0aW9uIGNhcnRSZWR1Y2VyKHN0YXRlOiBDYXJ0U3RhdGUsIGFjdGlvbjogQ2FydEFjdGlvbik6IENhcnRTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfSVRFTSc6XG4gICAgICBpZiAoc3RhdGUuaXRlbXMuc29tZShpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkICYmIGl0ZW0udHlwZSA9PT0gYWN0aW9uLnBheWxvYWQudHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGl0ZW1zOiBbLi4uc3RhdGUuaXRlbXMsIGFjdGlvbi5wYXlsb2FkXSxcbiAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsICsgMVxuICAgICAgfTtcbiAgICBjYXNlICdVUERBVEVfU0VBU09OUyc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLm1hcChpdGVtID0+IFxuICAgICAgICAgIGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkIFxuICAgICAgICAgICAgPyB7IC4uLml0ZW0sIHNlbGVjdGVkU2Vhc29uczogYWN0aW9uLnBheWxvYWQuc2Vhc29ucyB9XG4gICAgICAgICAgICA6IGl0ZW1cbiAgICAgICAgKVxuICAgICAgfTtcbiAgICBjYXNlICdVUERBVEVfUEFZTUVOVF9UWVBFJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMubWFwKGl0ZW0gPT4gXG4gICAgICAgICAgaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQgXG4gICAgICAgICAgICA/IHsgLi4uaXRlbSwgcGF5bWVudFR5cGU6IGFjdGlvbi5wYXlsb2FkLnBheW1lbnRUeXBlIH1cbiAgICAgICAgICAgIDogaXRlbVxuICAgICAgICApXG4gICAgICB9O1xuICAgIGNhc2UgJ1JFTU9WRV9JVEVNJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQpLFxuICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgLSAxXG4gICAgICB9O1xuICAgIGNhc2UgJ0NMRUFSX0NBUlQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICB0b3RhbDogMFxuICAgICAgfTtcbiAgICBjYXNlICdMT0FEX0NBUlQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXRlbXM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB0b3RhbDogYWN0aW9uLnBheWxvYWQubGVuZ3RoXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhcnRQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihjYXJ0UmVkdWNlciwgeyBpdGVtczogW10sIHRvdGFsOiAwIH0pO1xuICBjb25zdCBbdG9hc3QsIHNldFRvYXN0XSA9IFJlYWN0LnVzZVN0YXRlPHtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgdHlwZTogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJztcbiAgICBpc1Zpc2libGU6IGJvb2xlYW47XG4gIH0+KHsgbWVzc2FnZTogJycsIHR5cGU6ICdzdWNjZXNzJywgaXNWaXNpYmxlOiBmYWxzZSB9KTtcblxuICAvLyBDbGVhciBjYXJ0IG9uIHBhZ2UgcmVmcmVzaFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUJlZm9yZVVubG9hZCA9ICgpID0+IHtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3BhZ2VSZWZyZXNoZWQnLCAndHJ1ZScpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVMb2FkID0gKCkgPT4ge1xuICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3BhZ2VSZWZyZXNoZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdtb3ZpZUNhcnQnKTtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0xFQVJfQ0FSVCcgfSk7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3BhZ2VSZWZyZXNoZWQnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGhhbmRsZUJlZm9yZVVubG9hZCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoYW5kbGVMb2FkKTtcblxuICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwYWdlUmVmcmVzaGVkJykgPT09ICd0cnVlJykge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ21vdmllQ2FydCcpO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0xFQVJfQ0FSVCcgfSk7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdwYWdlUmVmcmVzaGVkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBoYW5kbGVCZWZvcmVVbmxvYWQpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoYW5kbGVMb2FkKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncGFnZVJlZnJlc2hlZCcpICE9PSAndHJ1ZScpIHtcbiAgICAgIGNvbnN0IHNhdmVkQ2FydCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb3ZpZUNhcnQnKTtcbiAgICAgIGlmIChzYXZlZENhcnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBpdGVtcyA9IEpTT04ucGFyc2Uoc2F2ZWRDYXJ0KTtcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdMT0FEX0NBUlQnLCBwYXlsb2FkOiBpdGVtcyB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIGNhcnQgZnJvbSBsb2NhbFN0b3JhZ2U6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW92aWVDYXJ0JywgSlNPTi5zdHJpbmdpZnkoc3RhdGUuaXRlbXMpKTtcbiAgfSwgW3N0YXRlLml0ZW1zXSk7XG5cbiAgY29uc3QgYWRkSXRlbSA9IChpdGVtOiBTZXJpZXNDYXJ0SXRlbSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1XaXRoRGVmYXVsdHMgPSB7IFxuICAgICAgLi4uaXRlbSwgXG4gICAgICBwYXltZW50VHlwZTogJ2Nhc2gnIGFzIGNvbnN0LFxuICAgICAgc2VsZWN0ZWRTZWFzb25zOiBpdGVtLnR5cGUgPT09ICd0dicgJiYgIWl0ZW0uc2VsZWN0ZWRTZWFzb25zID8gWzFdIDogaXRlbS5zZWxlY3RlZFNlYXNvbnNcbiAgICB9O1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FERF9JVEVNJywgcGF5bG9hZDogaXRlbVdpdGhEZWZhdWx0cyB9KTtcbiAgICBcbiAgICBzZXRUb2FzdCh7XG4gICAgICBtZXNzYWdlOiBcXGBcIlxcJHtpdGVtLnRpdGxlfVwiIGFncmVnYWRvIGFsIGNhcnJpdG9cXGAsXG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICBpc1Zpc2libGU6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVJdGVtID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBpdGVtID0gc3RhdGUuaXRlbXMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRU1PVkVfSVRFTScsIHBheWxvYWQ6IGlkIH0pO1xuICAgIFxuICAgIGlmIChpdGVtKSB7XG4gICAgICBzZXRUb2FzdCh7XG4gICAgICAgIG1lc3NhZ2U6IFxcYFwiXFwke2l0ZW0udGl0bGV9XCIgcmV0aXJhZG8gZGVsIGNhcnJpdG9cXGAsXG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIGlzVmlzaWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVNlYXNvbnMgPSAoaWQ6IG51bWJlciwgc2Vhc29uczogbnVtYmVyW10pID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdVUERBVEVfU0VBU09OUycsIHBheWxvYWQ6IHsgaWQsIHNlYXNvbnMgfSB9KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVQYXltZW50VHlwZSA9IChpZDogbnVtYmVyLCBwYXltZW50VHlwZTogJ2Nhc2gnIHwgJ3RyYW5zZmVyJykgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9QQVlNRU5UX1RZUEUnLCBwYXlsb2FkOiB7IGlkLCBwYXltZW50VHlwZSB9IH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyQ2FydCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdDTEVBUl9DQVJUJyB9KTtcbiAgfTtcblxuICBjb25zdCBpc0luQ2FydCA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLml0ZW1zLnNvbWUoaXRlbSA9PiBpdGVtLmlkID09PSBpZCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0SXRlbVNlYXNvbnMgPSAoaWQ6IG51bWJlcik6IG51bWJlcltdID0+IHtcbiAgICBjb25zdCBpdGVtID0gc3RhdGUuaXRlbXMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKTtcbiAgICByZXR1cm4gaXRlbT8uc2VsZWN0ZWRTZWFzb25zIHx8IFtdO1xuICB9O1xuXG4gIGNvbnN0IGdldEl0ZW1QYXltZW50VHlwZSA9IChpZDogbnVtYmVyKTogJ2Nhc2gnIHwgJ3RyYW5zZmVyJyA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHN0YXRlLml0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBpZCk7XG4gICAgcmV0dXJuIGl0ZW0/LnBheW1lbnRUeXBlIHx8ICdjYXNoJztcbiAgfTtcblxuICBjb25zdCBjYWxjdWxhdGVJdGVtUHJpY2UgPSAoaXRlbTogU2VyaWVzQ2FydEl0ZW0pOiBudW1iZXIgPT4ge1xuICAgIC8vIFVzZSBlbWJlZGRlZCBwcmljZXNcbiAgICBjb25zdCBtb3ZpZVByaWNlID0gRU1CRURERURfUFJJQ0VTLm1vdmllUHJpY2U7XG4gICAgY29uc3Qgc2VyaWVzUHJpY2UgPSBFTUJFRERFRF9QUklDRVMuc2VyaWVzUHJpY2U7XG4gICAgY29uc3QgdHJhbnNmZXJGZWVQZXJjZW50YWdlID0gRU1CRURERURfUFJJQ0VTLnRyYW5zZmVyRmVlUGVyY2VudGFnZTtcbiAgICBcbiAgICBpZiAoaXRlbS50eXBlID09PSAnbW92aWUnKSB7XG4gICAgICBjb25zdCBiYXNlUHJpY2UgPSBtb3ZpZVByaWNlO1xuICAgICAgcmV0dXJuIGl0ZW0ucGF5bWVudFR5cGUgPT09ICd0cmFuc2ZlcicgPyBNYXRoLnJvdW5kKGJhc2VQcmljZSAqICgxICsgdHJhbnNmZXJGZWVQZXJjZW50YWdlIC8gMTAwKSkgOiBiYXNlUHJpY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlYXNvbnMgPSBpdGVtLnNlbGVjdGVkU2Vhc29ucz8ubGVuZ3RoIHx8IDE7XG4gICAgICBjb25zdCBiYXNlUHJpY2UgPSBzZWFzb25zICogc2VyaWVzUHJpY2U7XG4gICAgICByZXR1cm4gaXRlbS5wYXltZW50VHlwZSA9PT0gJ3RyYW5zZmVyJyA/IE1hdGgucm91bmQoYmFzZVByaWNlICogKDEgKyB0cmFuc2ZlckZlZVBlcmNlbnRhZ2UgLyAxMDApKSA6IGJhc2VQcmljZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2FsY3VsYXRlVG90YWxQcmljZSA9ICgpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiBzdGF0ZS5pdGVtcy5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gdG90YWwgKyBjYWxjdWxhdGVJdGVtUHJpY2UoaXRlbSk7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgY29uc3QgY2FsY3VsYXRlVG90YWxCeVBheW1lbnRUeXBlID0gKCk6IHsgY2FzaDogbnVtYmVyOyB0cmFuc2ZlcjogbnVtYmVyIH0gPT4ge1xuICAgIGNvbnN0IG1vdmllUHJpY2UgPSBFTUJFRERFRF9QUklDRVMubW92aWVQcmljZTtcbiAgICBjb25zdCBzZXJpZXNQcmljZSA9IEVNQkVEREVEX1BSSUNFUy5zZXJpZXNQcmljZTtcbiAgICBjb25zdCB0cmFuc2ZlckZlZVBlcmNlbnRhZ2UgPSBFTUJFRERFRF9QUklDRVMudHJhbnNmZXJGZWVQZXJjZW50YWdlO1xuICAgIFxuICAgIHJldHVybiBzdGF0ZS5pdGVtcy5yZWR1Y2UoKHRvdGFscywgaXRlbSkgPT4ge1xuICAgICAgY29uc3QgYmFzZVByaWNlID0gaXRlbS50eXBlID09PSAnbW92aWUnID8gbW92aWVQcmljZSA6IChpdGVtLnNlbGVjdGVkU2Vhc29ucz8ubGVuZ3RoIHx8IDEpICogc2VyaWVzUHJpY2U7XG4gICAgICBpZiAoaXRlbS5wYXltZW50VHlwZSA9PT0gJ3RyYW5zZmVyJykge1xuICAgICAgICB0b3RhbHMudHJhbnNmZXIgKz0gTWF0aC5yb3VuZChiYXNlUHJpY2UgKiAoMSArIHRyYW5zZmVyRmVlUGVyY2VudGFnZSAvIDEwMCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG90YWxzLmNhc2ggKz0gYmFzZVByaWNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRvdGFscztcbiAgICB9LCB7IGNhc2g6IDAsIHRyYW5zZmVyOiAwIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlVG9hc3QgPSAoKSA9PiB7XG4gICAgc2V0VG9hc3QocHJldiA9PiAoeyAuLi5wcmV2LCBpc1Zpc2libGU6IGZhbHNlIH0pKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBcbiAgICAgIHN0YXRlLCBcbiAgICAgIGFkZEl0ZW0sIFxuICAgICAgcmVtb3ZlSXRlbSwgXG4gICAgICB1cGRhdGVTZWFzb25zLCBcbiAgICAgIHVwZGF0ZVBheW1lbnRUeXBlLFxuICAgICAgY2xlYXJDYXJ0LCBcbiAgICAgIGlzSW5DYXJ0LCBcbiAgICAgIGdldEl0ZW1TZWFzb25zLFxuICAgICAgZ2V0SXRlbVBheW1lbnRUeXBlLFxuICAgICAgY2FsY3VsYXRlSXRlbVByaWNlLFxuICAgICAgY2FsY3VsYXRlVG90YWxQcmljZSxcbiAgICAgIGNhbGN1bGF0ZVRvdGFsQnlQYXltZW50VHlwZVxuICAgIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPFRvYXN0XG4gICAgICAgIG1lc3NhZ2U9e3RvYXN0Lm1lc3NhZ2V9XG4gICAgICAgIHR5cGU9e3RvYXN0LnR5cGV9XG4gICAgICAgIGlzVmlzaWJsZT17dG9hc3QuaXNWaXNpYmxlfVxuICAgICAgICBvbkNsb3NlPXtjbG9zZVRvYXN0fVxuICAgICAgLz5cbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FydCgpIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VDYXJ0IG11c3QgYmUgdXNlZCB3aXRoaW4gYSBDYXJ0UHJvdmlkZXInKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn1gO1xufVxuXG4vLyBGdW5jaW9uZXMgcGFyYSBnZW5lcmFyIGFyY2hpdm9zIGLDoXNpY29zIGRlbCBwcm95ZWN0b1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVBhY2thZ2VKc29uKCk6IHN0cmluZyB7XG4gIHJldHVybiBge1xuICBcIm5hbWVcIjogXCJ0di1hLWxhLWNhcnRhLXNpc3RlbWEtY29tcGxldG9cIixcbiAgXCJwcml2YXRlXCI6IHRydWUsXG4gIFwidmVyc2lvblwiOiBcIjIuMS4wXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU2lzdGVtYSBjb21wbGV0byBkZSBnZXN0acOzbiBwYXJhIFRWIGEgbGEgQ2FydGEgY29uIHBhbmVsIGRlIGFkbWluaXN0cmFjacOzblwiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiZGV2XCI6IFwidml0ZVwiLFxuICAgIFwiYnVpbGRcIjogXCJ2aXRlIGJ1aWxkXCIsXG4gICAgXCJsaW50XCI6IFwiZXNsaW50IC5cIixcbiAgICBcInByZXZpZXdcIjogXCJ2aXRlIHByZXZpZXdcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yNC4yLjFcIixcbiAgICBcImpzemlwXCI6IFwiXjMuMTAuMVwiLFxuICAgIFwibHVjaWRlLXJlYWN0XCI6IFwiXjAuMzQ0LjBcIixcbiAgICBcInJlYWN0XCI6IFwiXjE4LjMuMVwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjMuMVwiLFxuICAgIFwicmVhY3Qtcm91dGVyLWRvbVwiOiBcIl43LjguMFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBlc2xpbnQvanNcIjogXCJeOS45LjFcIixcbiAgICBcIkB0eXBlcy9yZWFjdFwiOiBcIl4xOC4zLjVcIixcbiAgICBcIkB0eXBlcy9yZWFjdC1kb21cIjogXCJeMTguMy4wXCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiOiBcIl40LjMuMVwiLFxuICAgIFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMThcIixcbiAgICBcImVzbGludFwiOiBcIl45LjkuMVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdC1ob29rc1wiOiBcIl41LjEuMC1yYy4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0LXJlZnJlc2hcIjogXCJeMC40LjExXCIsXG4gICAgXCJnbG9iYWxzXCI6IFwiXjE1LjkuMFwiLFxuICAgIFwicG9zdGNzc1wiOiBcIl44LjQuMzVcIixcbiAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjMuNC4xXCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuNS4zXCIsXG4gICAgXCJ0eXBlc2NyaXB0LWVzbGludFwiOiBcIl44LjMuMFwiLFxuICAgIFwidml0ZVwiOiBcIl41LjQuMlwiXG4gIH0sXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwidHZcIixcbiAgICBcIm1vdmllc1wiLFxuICAgIFwic2VyaWVzXCIsXG4gICAgXCJhbmltZVwiLFxuICAgIFwic3RyZWFtaW5nXCIsXG4gICAgXCJjYXJ0XCIsXG4gICAgXCJhZG1pblwiLFxuICAgIFwicmVhY3RcIixcbiAgICBcInR5cGVzY3JpcHRcIlxuICBdLFxuICBcImF1dGhvclwiOiBcIlRWIGEgbGEgQ2FydGFcIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCJcbn1gO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVZpdGVDb25maWcoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGBpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgc2VydmVyOiB7XG4gICAgaGlzdG9yeUFwaUZhbGxiYWNrOiB0cnVlLFxuICB9LFxuICBwcmV2aWV3OiB7XG4gICAgaGlzdG9yeUFwaUZhbGxiYWNrOiB0cnVlLFxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ2x1Y2lkZS1yZWFjdCddLFxuICB9LFxufSk7YDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUYWlsd2luZENvbmZpZygpOiBzdHJpbmcge1xuICByZXR1cm4gYC8qKiBAdHlwZSB7aW1wb3J0KCd0YWlsd2luZGNzcycpLkNvbmZpZ30gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGVudDogWycuL2luZGV4Lmh0bWwnLCAnLi9zcmMvKiovKi57anMsdHMsanN4LHRzeH0nXSxcbiAgdGhlbWU6IHtcbiAgICBleHRlbmQ6IHt9LFxuICB9LFxuICBwbHVnaW5zOiBbXSxcbn07YDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUc0NvbmZpZygpOiBzdHJpbmcge1xuICByZXR1cm4gYHtcbiAgXCJmaWxlc1wiOiBbXSxcbiAgXCJyZWZlcmVuY2VzXCI6IFtcbiAgICB7IFwicGF0aFwiOiBcIi4vdHNjb25maWcuYXBwLmpzb25cIiB9LFxuICAgIHsgXCJwYXRoXCI6IFwiLi90c2NvbmZpZy5ub2RlLmpzb25cIiB9XG4gIF1cbn1gO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRzQ29uZmlnQXBwKCk6IHN0cmluZyB7XG4gIHJldHVybiBge1xuICBcImNvbXBpbGVyT3B0aW9uc1wiOiB7XG4gICAgXCJ0YXJnZXRcIjogXCJFUzIwMjBcIixcbiAgICBcInVzZURlZmluZUZvckNsYXNzRmllbGRzXCI6IHRydWUsXG4gICAgXCJsaWJcIjogW1wiRVMyMDIwXCIsIFwiRE9NXCIsIFwiRE9NLkl0ZXJhYmxlXCJdLFxuICAgIFwibW9kdWxlXCI6IFwiRVNOZXh0XCIsXG4gICAgXCJza2lwTGliQ2hlY2tcIjogdHJ1ZSxcblxuICAgIC8qIEJ1bmRsZXIgbW9kZSAqL1xuICAgIFwibW9kdWxlUmVzb2x1dGlvblwiOiBcImJ1bmRsZXJcIixcbiAgICBcImFsbG93SW1wb3J0aW5nVHNFeHRlbnNpb25zXCI6IHRydWUsXG4gICAgXCJpc29sYXRlZE1vZHVsZXNcIjogdHJ1ZSxcbiAgICBcIm1vZHVsZURldGVjdGlvblwiOiBcImZvcmNlXCIsXG4gICAgXCJub0VtaXRcIjogdHJ1ZSxcbiAgICBcImpzeFwiOiBcInJlYWN0LWpzeFwiLFxuXG4gICAgLyogTGludGluZyAqL1xuICAgIFwic3RyaWN0XCI6IHRydWUsXG4gICAgXCJub1VudXNlZExvY2Fsc1wiOiB0cnVlLFxuICAgIFwibm9VbnVzZWRQYXJhbWV0ZXJzXCI6IHRydWUsXG4gICAgXCJub0ZhbGx0aHJvdWdoQ2FzZXNJblN3aXRjaFwiOiB0cnVlXG4gIH0sXG4gIFwiaW5jbHVkZVwiOiBbXCJzcmNcIl1cbn1gO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRzQ29uZmlnTm9kZSgpOiBzdHJpbmcge1xuICByZXR1cm4gYHtcbiAgXCJjb21waWxlck9wdGlvbnNcIjoge1xuICAgIFwidGFyZ2V0XCI6IFwiRVMyMDIyXCIsXG4gICAgXCJsaWJcIjogW1wiRVMyMDIzXCJdLFxuICAgIFwibW9kdWxlXCI6IFwiRVNOZXh0XCIsXG4gICAgXCJza2lwTGliQ2hlY2tcIjogdHJ1ZSxcblxuICAgIC8qIEJ1bmRsZXIgbW9kZSAqL1xuICAgIFwibW9kdWxlUmVzb2x1dGlvblwiOiBcImJ1bmRsZXJcIixcbiAgICBcImFsbG93SW1wb3J0aW5nVHNFeHRlbnNpb25zXCI6IHRydWUsXG4gICAgXCJpc29sYXRlZE1vZHVsZXNcIjogdHJ1ZSxcbiAgICBcIm1vZHVsZURldGVjdGlvblwiOiBcImZvcmNlXCIsXG4gICAgXCJub0VtaXRcIjogdHJ1ZSxcblxuICAgIC8qIExpbnRpbmcgKi9cbiAgICBcInN0cmljdFwiOiB0cnVlLFxuICAgIFwibm9VbnVzZWRMb2NhbHNcIjogdHJ1ZSxcbiAgICBcIm5vVW51c2VkUGFyYW1ldGVyc1wiOiB0cnVlLFxuICAgIFwibm9GYWxsdGhyb3VnaENhc2VzSW5Td2l0Y2hcIjogdHJ1ZVxuICB9LFxuICBcImluY2x1ZGVcIjogW1widml0ZS5jb25maWcudHNcIl1cbn1gO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVBvc3Rjc3NDb25maWcoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGBleHBvcnQgZGVmYXVsdCB7XG4gIHBsdWdpbnM6IHtcbiAgICB0YWlsd2luZGNzczoge30sXG4gICAgYXV0b3ByZWZpeGVyOiB7fSxcbiAgfSxcbn07YDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVFc2xpbnRDb25maWcoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGBpbXBvcnQganMgZnJvbSAnQGVzbGludC9qcyc7XG5pbXBvcnQgZ2xvYmFscyBmcm9tICdnbG9iYWxzJztcbmltcG9ydCByZWFjdEhvb2tzIGZyb20gJ2VzbGludC1wbHVnaW4tcmVhY3QtaG9va3MnO1xuaW1wb3J0IHJlYWN0UmVmcmVzaCBmcm9tICdlc2xpbnQtcGx1Z2luLXJlYWN0LXJlZnJlc2gnO1xuaW1wb3J0IHRzZXNsaW50IGZyb20gJ3R5cGVzY3JpcHQtZXNsaW50JztcblxuZXhwb3J0IGRlZmF1bHQgdHNlc2xpbnQuY29uZmlnKFxuICB7IGlnbm9yZXM6IFsnZGlzdCddIH0sXG4gIHtcbiAgICBleHRlbmRzOiBbanMuY29uZmlncy5yZWNvbW1lbmRlZCwgLi4udHNlc2xpbnQuY29uZmlncy5yZWNvbW1lbmRlZF0sXG4gICAgZmlsZXM6IFsnKiovKi57dHMsdHN4fSddLFxuICAgIGxhbmd1YWdlT3B0aW9uczoge1xuICAgICAgZWNtYVZlcnNpb246IDIwMjAsXG4gICAgICBnbG9iYWxzOiBnbG9iYWxzLmJyb3dzZXIsXG4gICAgfSxcbiAgICBwbHVnaW5zOiB7XG4gICAgICAncmVhY3QtaG9va3MnOiByZWFjdEhvb2tzLFxuICAgICAgJ3JlYWN0LXJlZnJlc2gnOiByZWFjdFJlZnJlc2gsXG4gICAgfSxcbiAgICBydWxlczoge1xuICAgICAgXG4gICAgICAuLi5yZWFjdEhvb2tzLmNvbmZpZ3MucmVjb21tZW5kZWQucnVsZXMsXG4gICAgICAncmVhY3QtcmVmcmVzaC9vbmx5LWV4cG9ydC1jb21wb25lbnRzJzogW1xuICAgICAgICAnd2FybicsXG4gICAgICAgIHsgYWxsb3dDb25zdGFudEV4cG9ydDogdHJ1ZSB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9XG4pO2A7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSW5kZXhIdG1sKCk6IHN0cmluZyB7XG4gIHJldHVybiBgPCFkb2N0eXBlIGh0bWw+XG48aHRtbCBsYW5nPVwiZW5cIj5cbiAgPGhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIvdW5uYW1lZC5wbmdcIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgbWluaW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm9cIiAvPlxuICAgIDxiYXNlIGhyZWY9XCIvXCIgLz5cbiAgICA8dGl0bGU+VFYgYSBsYSBDYXJ0YTogUGVsw61jdWxhcyB5IHNlcmllcyBpbGltaXRhZGFzIHkgbXVjaG8gbcOhczwvdGl0bGU+XG4gICAgPHN0eWxlPlxuICAgICAgLyogRGVzaGFiaWxpdGFyIHpvb20geSBzZWxlY2Npw7NuIGRlIHRleHRvICovXG4gICAgICAqIHtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKiBQZXJtaXRpciBzZWxlY2Npw7NuIGRlIHRleHRvIHNvbG8gZW4gaW5wdXRzIHkgdGV4dGFyZWFzICovXG4gICAgICBpbnB1dCwgdGV4dGFyZWEsIFtjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCJdIHtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgICAgICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyogRGVzaGFiaWxpdGFyIHpvb20gZW4gaU9TIFNhZmFyaSAqL1xuICAgICAgYm9keSB7XG4gICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICAgICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gICAgICAgIHRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gICAgICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKiBQcmV2ZW5pciB6b29tIGVuIGlucHV0cyBlbiBpT1MgKi9cbiAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuICAgICAgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuICAgICAgaW5wdXRbdHlwZT1cInRlbFwiXSxcbiAgICAgIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcbiAgICAgIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXG4gICAgICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxuICAgICAgdGV4dGFyZWEsXG4gICAgICBzZWxlY3Qge1xuICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC9oZWFkPlxuICA8Ym9keT5cbiAgICA8ZGl2IGlkPVwicm9vdFwiPjwvZGl2PlxuICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cIi9zcmMvbWFpbi50c3hcIj48L3NjcmlwdD5cbiAgPC9ib2R5PlxuPC9odG1sPmA7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVmVyY2VsQ29uZmlnKCk6IHN0cmluZyB7XG4gIHJldHVybiBgeyBcInJld3JpdGVzXCI6IFt7IFwic291cmNlXCI6IFwiLyguKilcIiwgXCJkZXN0aW5hdGlvblwiOiBcIi9cIiB9XSB9YDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVOZXRsaWZ5UmVkaXJlY3RzKCk6IHN0cmluZyB7XG4gIHJldHVybiBgIyBOZXRsaWZ5IHJlZGlyZWN0cyBmb3IgU1BBIHJvdXRpbmdcbi8qICAgIC9pbmRleC5odG1sICAgMjAwXG5cbiMgSGFuZGxlIHNwZWNpZmljIHJvdXRlc1xuL21vdmllcyAgICAvaW5kZXguaHRtbCAgIDIwMFxuL3R2ICAgICAgICAvaW5kZXguaHRtbCAgIDIwMFxuL2FuaW1lICAgICAvaW5kZXguaHRtbCAgIDIwMFxuL2NhcnQgICAgICAvaW5kZXguaHRtbCAgIDIwMFxuL3NlYXJjaCAgICAvaW5kZXguaHRtbCAgIDIwMFxuL21vdmllLyogICAvaW5kZXguaHRtbCAgIDIwMFxuL3R2LyogICAgICAvaW5kZXguaHRtbCAgIDIwMFxuL2FkbWluICAgICAvaW5kZXguaHRtbCAgIDIwMGA7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUmVhZG1lKHN5c3RlbUNvbmZpZzogU3lzdGVtQ29uZmlnKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAjIFRWIGEgbGEgQ2FydGEgLSBTaXN0ZW1hIGRlIEdlc3Rpw7NuXG5cbiMjIERlc2NyaXBjacOzblxuU2lzdGVtYSBjb21wbGV0byBkZSBnZXN0acOzbiBwYXJhIFRWIGEgbGEgQ2FydGEgY29uIHBhbmVsIGRlIGFkbWluaXN0cmFjacOzbiwgY2Fycml0byBkZSBjb21wcmFzIHkgc2luY3Jvbml6YWNpw7NuIGVuIHRpZW1wbyByZWFsLlxuXG4jIyBWZXJzacOzblxuJHtzeXN0ZW1Db25maWcudmVyc2lvbn1cblxuIyMgw5psdGltYSBFeHBvcnRhY2nDs25cbiR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfVxuXG4jIyBDb25maWd1cmFjacOzbiBBY3R1YWxcblxuIyMjIFByZWNpb3Ncbi0gUGVsw61jdWxhczogJCR7c3lzdGVtQ29uZmlnLnByaWNlcy5tb3ZpZVByaWNlfSBDVVBcbi0gU2VyaWVzOiAkJHtzeXN0ZW1Db25maWcucHJpY2VzLnNlcmllc1ByaWNlfSBDVVAgcG9yIHRlbXBvcmFkYVxuLSBSZWNhcmdvIHRyYW5zZmVyZW5jaWE6ICR7c3lzdGVtQ29uZmlnLnByaWNlcy50cmFuc2ZlckZlZVBlcmNlbnRhZ2V9JVxuLSBOb3ZlbGFzOiAkJHtzeXN0ZW1Db25maWcucHJpY2VzLm5vdmVsUHJpY2VQZXJDaGFwdGVyfSBDVVAgcG9yIGNhcMOtdHVsb1xuXG4jIyMgWm9uYXMgZGUgRW50cmVnYVxuVG90YWwgY29uZmlndXJhZGFzOiAke3N5c3RlbUNvbmZpZy5kZWxpdmVyeVpvbmVzLmxlbmd0aH1cblxuIyMjIE5vdmVsYXMgQWRtaW5pc3RyYWRhc1xuVG90YWw6ICR7c3lzdGVtQ29uZmlnLm5vdmVscy5sZW5ndGh9XG5cbiMjIENhcmFjdGVyw61zdGljYXNcbi0g4pyFIFBhbmVsIGRlIGFkbWluaXN0cmFjacOzbiBjb21wbGV0b1xuLSDinIUgU2luY3Jvbml6YWNpw7NuIGVuIHRpZW1wbyByZWFsXG4tIOKchSBHZXN0acOzbiBkZSBwcmVjaW9zIGRpbsOhbWljb3Ncbi0g4pyFIFpvbmFzIGRlIGVudHJlZ2EgcGVyc29uYWxpemFibGVzXG4tIOKchSBDYXTDoWxvZ28gZGUgbm92ZWxhcyBhZG1pbmlzdHJhYmxlXG4tIOKchSBTaXN0ZW1hIGRlIG5vdGlmaWNhY2lvbmVzXG4tIOKchSBFeHBvcnRhY2nDs24vSW1wb3J0YWNpw7NuIGRlIGNvbmZpZ3VyYWNpw7NuXG4tIOKchSBPcHRpbWl6YWNpw7NuIGRlIHJlbmRpbWllbnRvXG4tIOKchSBDYXJyaXRvIGRlIGNvbXByYXMgYXZhbnphZG9cbi0g4pyFIEludGVncmFjacOzbiBjb24gV2hhdHNBcHBcblxuIyMgSW5zdGFsYWNpw7NuXG5cXGBcXGBcXGBiYXNoXG5ucG0gaW5zdGFsbFxubnBtIHJ1biBkZXZcblxcYFxcYFxcYFxuXG4jIyBVc28gZGVsIFBhbmVsIGRlIEFkbWluaXN0cmFjacOzblxuMS4gQWNjZWRlciBhIC9hZG1pblxuMi4gVXN1YXJpbzogYWRtaW5cbjMuIENvbnRyYXNlw7FhOiB0dmFsYWNhcnRhMjAyNFxuXG4jIyBUZWNub2xvZ8OtYXNcbi0gUmVhY3QgMThcbi0gVHlwZVNjcmlwdFxuLSBUYWlsd2luZCBDU1Ncbi0gVml0ZVxuLSBSZWFjdCBSb3V0ZXJcbi0gTHVjaWRlIEljb25zXG4tIEpTWmlwXG5cbiMjIENvbnRhY3RvXG5XaGF0c0FwcDogKzUzNTQ2OTA4NzhgO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU1haW5Uc3goKTogc3RyaW5nIHtcbiAgcmV0dXJuIGBpbXBvcnQgeyBTdHJpY3RNb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC50c3gnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSEpLnJlbmRlcihcbiAgPFN0cmljdE1vZGU+XG4gICAgPEFwcCAvPlxuICA8L1N0cmljdE1vZGU+XG4pO2A7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQXBwVHN4KCk6IHN0cmluZyB7XG4gIHJldHVybiBgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZXMsIFJvdXRlLCBOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgQ2FydFByb3ZpZGVyIH0gZnJvbSAnLi9jb250ZXh0L0NhcnRDb250ZXh0JztcbmltcG9ydCB7IEFkbWluUHJvdmlkZXIgfSBmcm9tICcuL2NvbnRleHQvQWRtaW5Db250ZXh0JztcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgSG9tZSB9IGZyb20gJy4vcGFnZXMvSG9tZSc7XG5pbXBvcnQgeyBNb3ZpZXMgfSBmcm9tICcuL3BhZ2VzL01vdmllcyc7XG5pbXBvcnQgeyBUVlNob3dzIH0gZnJvbSAnLi9wYWdlcy9UVlNob3dzJztcbmltcG9ydCB7IEFuaW1lIH0gZnJvbSAnLi9wYWdlcy9BbmltZSc7XG5pbXBvcnQgeyBTZWFyY2hQYWdlIH0gZnJvbSAnLi9wYWdlcy9TZWFyY2gnO1xuaW1wb3J0IHsgTW92aWVEZXRhaWwgfSBmcm9tICcuL3BhZ2VzL01vdmllRGV0YWlsJztcbmltcG9ydCB7IFRWRGV0YWlsIH0gZnJvbSAnLi9wYWdlcy9UVkRldGFpbCc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi9wYWdlcy9DYXJ0JztcbmltcG9ydCB7IEFkbWluUGFuZWwgfSBmcm9tICcuL3BhZ2VzL0FkbWluUGFuZWwnO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIC8vIERldGVjdGFyIHJlZnJlc2ggeSByZWRpcmlnaXIgYSBsYSBww6FnaW5hIHByaW5jaXBhbFxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUJlZm9yZVVubG9hZCA9ICgpID0+IHtcbiAgICAgIC8vIE1hcmNhciBxdWUgbGEgcMOhZ2luYSBzZSBlc3TDoSByZWNhcmdhbmRvXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdwYWdlUmVmcmVzaGVkJywgJ3RydWUnKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlTG9hZCA9ICgpID0+IHtcbiAgICAgIC8vIFNpIHNlIGRldGVjdGEgcXVlIGxhIHDDoWdpbmEgZnVlIHJlY2FyZ2FkYSwgcmVkaXJpZ2lyIGEgbGEgcMOhZ2luYSBwcmluY2lwYWxcbiAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwYWdlUmVmcmVzaGVkJykgPT09ICd0cnVlJykge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdwYWdlUmVmcmVzaGVkJyk7XG4gICAgICAgIC8vIFNvbG8gcmVkaXJpZ2lyIHNpIG5vIGVzdGFtb3MgeWEgZW4gbGEgcMOhZ2luYSBwcmluY2lwYWxcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gJy8nKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaHR0cHM6Ly90dmFsYWNhcnRhLnZlcmNlbC5hcHAvJztcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gVmVyaWZpY2FyIGFsIG1vbnRhciBlbCBjb21wb25lbnRlIHNpIGZ1ZSB1biByZWZyZXNoXG4gICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3BhZ2VSZWZyZXNoZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdwYWdlUmVmcmVzaGVkJyk7XG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSAnLycpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaHR0cHM6Ly90dmFsYWNhcnRhLnZlcmNlbC5hcHAvJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBoYW5kbGVCZWZvcmVVbmxvYWQpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaGFuZGxlTG9hZCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGhhbmRsZUJlZm9yZVVubG9hZCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGhhbmRsZUxvYWQpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICAvLyBEZXNoYWJpbGl0YXIgem9vbSBjb24gdGVjbGFkbyB5IGdlc3Rvc1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgLy8gRGVzaGFiaWxpdGFyIEN0cmwvQ21kICsgUGx1cy9NaW51cy8wIHBhcmEgem9vbVxuICAgICAgaWYgKChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSAmJiAoZS5rZXkgPT09ICcrJyB8fCBlLmtleSA9PT0gJy0nIHx8IGUua2V5ID09PSAnMCcpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVXaGVlbCA9IChlOiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgICAvLyBEZXNoYWJpbGl0YXIgQ3RybC9DbWQgKyBzY3JvbGwgcGFyYSB6b29tXG4gICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlVG91Y2hTdGFydCA9IChlOiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAvLyBEZXNoYWJpbGl0YXIgcGluY2gtdG8tem9vbSBlbiBkaXNwb3NpdGl2b3MgdMOhY3RpbGVzXG4gICAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVRvdWNoTW92ZSA9IChlOiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAvLyBEZXNoYWJpbGl0YXIgcGluY2gtdG8tem9vbSBlbiBkaXNwb3NpdGl2b3MgdMOhY3RpbGVzXG4gICAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEFncmVnYXIgZXZlbnQgbGlzdGVuZXJzXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVXaGVlbCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVG91Y2hTdGFydCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVXaGVlbCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVRvdWNoU3RhcnQpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxBZG1pblByb3ZpZGVyPlxuICAgICAgPENhcnRQcm92aWRlcj5cbiAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTUwXCI+XG4gICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hZG1pblwiIGVsZW1lbnQ9ezxBZG1pblBhbmVsIC8+fSAvPlxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi8qXCIgZWxlbWVudD17XG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL21vdmllc1wiIGVsZW1lbnQ9ezxNb3ZpZXMgLz59IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdHZcIiBlbGVtZW50PXs8VFZTaG93cyAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hbmltZVwiIGVsZW1lbnQ9ezxBbmltZSAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zZWFyY2hcIiBlbGVtZW50PXs8U2VhcmNoUGFnZSAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9tb3ZpZS86aWRcIiBlbGVtZW50PXs8TW92aWVEZXRhaWwgLz59IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdHYvOmlkXCIgZWxlbWVudD17PFRWRGV0YWlsIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NhcnRcIiBlbGVtZW50PXs8Q2FydCAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIH0gLz5cbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1JvdXRlcj5cbiAgICAgIDwvQ2FydFByb3ZpZGVyPlxuICAgIDwvQWRtaW5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO2A7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSW5kZXhDc3MoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGBAdGFpbHdpbmQgYmFzZTtcbkB0YWlsd2luZCBjb21wb25lbnRzO1xuQHRhaWx3aW5kIHV0aWxpdGllcztcblxuLyogQ29uZmlndXJhY2lvbmVzIGFkaWNpb25hbGVzIHBhcmEgZGVzaGFiaWxpdGFyIHpvb20gKi9cbkBsYXllciBiYXNlIHtcbiAgaHRtbCB7XG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgIHRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIH1cbiAgXG4gIGJvZHkge1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB9XG4gIFxuICAvKiBQZXJtaXRpciBzZWxlY2Npw7NuIHNvbG8gZW4gZWxlbWVudG9zIGRlIGVudHJhZGEgKi9cbiAgaW5wdXQsIHRleHRhcmVhLCBbY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXSB7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dCAhaW1wb3J0YW50O1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQgIWltcG9ydGFudDtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IHRleHQgIWltcG9ydGFudDtcbiAgICB1c2VyLXNlbGVjdDogdGV4dCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvKiBQcmV2ZW5pciB6b29tIGFjY2lkZW50YWwgZW4gZGlzcG9zaXRpdm9zIG3Ds3ZpbGVzICovXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuICBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXG4gIGlucHV0W3R5cGU9XCJ0ZWxcIl0sXG4gIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcbiAgaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcbiAgdGV4dGFyZWEsXG4gIHNlbGVjdCB7XG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgfVxuICBcbiAgLyogRGVzaGFiaWxpdGFyIHpvb20gZW4gaW3DoWdlbmVzICovXG4gIGltZyB7XG4gICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItZHJhZzogbm9uZTtcbiAgICAtbW96LXVzZXItZHJhZzogbm9uZTtcbiAgICAtby11c2VyLWRyYWc6IG5vbmU7XG4gICAgdXNlci1kcmFnOiBub25lO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuICAvKiBQZXJtaXRpciBpbnRlcmFjY2nDs24gZW4gYm90b25lcyBlIGltw6FnZW5lcyBjbGlja2VhYmxlcyAqL1xuICBidXR0b24sIGEsIFtyb2xlPVwiYnV0dG9uXCJdLCAuY2xpY2thYmxlIHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgfVxuICBcbiAgYnV0dG9uIGltZywgYSBpbWcsIFtyb2xlPVwiYnV0dG9uXCJdIGltZywgLmNsaWNrYWJsZSBpbWcge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuICAvKiBDdXN0b20gYW5pbWF0aW9ucyAqL1xuICBAa2V5ZnJhbWVzIHNocmluayB7XG4gICAgZnJvbSB7IHdpZHRoOiAxMDAlOyB9XG4gICAgdG8geyB3aWR0aDogMCU7IH1cbiAgfVxuICBcbiAgLmFuaW1hdGUtc2hyaW5rIHtcbiAgICBhbmltYXRpb246IHNocmluayAzcyBsaW5lYXIgZm9yd2FyZHM7XG4gIH1cbiAgXG4gIC8qIEFuaW1hY2lvbmVzIHBhcmEgZWZlY3RvcyB2aXN1YWxlcyBtb2Rlcm5vcyAqL1xuICBAa2V5ZnJhbWVzIGJsb2Ige1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KSBzY2FsZSgxKTtcbiAgICB9XG4gICAgMzMlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIC01MHB4KSBzY2FsZSgxLjEpO1xuICAgIH1cbiAgICA2NiUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwcHgsIDIwcHgpIHNjYWxlKDAuOSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpIHNjYWxlKDEpO1xuICAgIH1cbiAgfVxuICBcbiAgLmFuaW1hdGUtYmxvYiB7XG4gICAgYW5pbWF0aW9uOiBibG9iIDdzIGluZmluaXRlO1xuICB9XG4gIFxuICAuYW5pbWF0aW9uLWRlbGF5LTIwMDAge1xuICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gIH1cbiAgXG4gIC5hbmltYXRpb24tZGVsYXktNDAwMCB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiA0cztcbiAgfVxuICBcbiAgLmFuaW1hdGlvbi1kZWxheS0yMDAge1xuICAgIGFuaW1hdGlvbi1kZWxheTogMjAwbXM7XG4gIH1cbiAgXG4gIC5hbmltYXRpb24tZGVsYXktNDAwIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDQwMG1zO1xuICB9XG4gIFxuICAuYW5pbWF0aW9uLWRlbGF5LTYwMCB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiA2MDBtcztcbiAgfVxuICBcbiAgLyogQW5pbWFjaW9uZXMgcGFyYSBlbCBtb2RhbCAqL1xuICBAa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAgIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyB9XG4gICAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG4gIH1cbiAgXG4gIC5hbmltYXRlLWluIHtcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMC4zcyBlYXNlLW91dDtcbiAgfVxuICBcbiAgLyogRW5oYW5jZWQgaG92ZXIgZWZmZWN0cyAqL1xuICBAa2V5ZnJhbWVzIGdsb3cge1xuICAgIDAlLCAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDQwcHggcmdiYSg1OSwgMTMwLCAyNDYsIDAuOCksIDAgMCA2MHB4IHJnYmEoMTQ3LCA1MSwgMjM0LCAwLjYpO1xuICAgIH1cbiAgfVxuICBcbiAgLmFuaW1hdGUtZ2xvdyB7XG4gICAgYW5pbWF0aW9uOiBnbG93IDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG4gIFxuICAvKiBGbG9hdGluZyBhbmltYXRpb24gKi9cbiAgQGtleWZyYW1lcyBmbG9hdCB7XG4gICAgMCUsIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIH1cbiAgfVxuICBcbiAgLmFuaW1hdGUtZmxvYXQge1xuICAgIGFuaW1hdGlvbjogZmxvYXQgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC8qIFNoaW1tZXIgZWZmZWN0ICovXG4gIEBrZXlmcmFtZXMgc2hpbW1lciB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICB9XG4gIFxuICAuYW5pbWF0ZS1zaGltbWVyIHtcbiAgICBhbmltYXRpb246IHNoaW1tZXIgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC8qIEVuaGFuY2VkIHB1bHNlICovXG4gIEBrZXlmcmFtZXMgZW5oYW5jZWQtcHVsc2Uge1xuICAgIDAlLCAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB9XG4gIH1cbiAgXG4gIC5hbmltYXRlLWVuaGFuY2VkLXB1bHNlIHtcbiAgICBhbmltYXRpb246IGVuaGFuY2VkLXB1bHNlIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG59YDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVWaXRlRW52RHRzKCk6IHN0cmluZyB7XG4gIHJldHVybiBgLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlL2NsaWVudFwiIC8+YDtcbn1cblxuLy8gRnVuY2lvbmVzIHBsYWNlaG9sZGVyIHBhcmEgb3Ryb3MgY29tcG9uZW50ZXMgKHNlIGluY2x1aXLDrWFuIGxvcyBjw7NkaWdvcyBjb21wbGV0b3MpXG5mdW5jdGlvbiBnZW5lcmF0ZUNhcnRBbmltYXRpb24oKTogc3RyaW5nIHsgcmV0dXJuICcvLyBDYXJ0QW5pbWF0aW9uLnRzeCBzb3VyY2UgY29kZSc7IH1cbmZ1bmN0aW9uIGdlbmVyYXRlQ2FzdFNlY3Rpb24oKTogc3RyaW5nIHsgcmV0dXJuICcvLyBDYXN0U2VjdGlvbi50c3ggc291cmNlIGNvZGUnOyB9XG5mdW5jdGlvbiBnZW5lcmF0ZUVycm9yTWVzc2FnZSgpOiBzdHJpbmcgeyByZXR1cm4gJy8vIEVycm9yTWVzc2FnZS50c3ggc291cmNlIGNvZGUnOyB9XG5mdW5jdGlvbiBnZW5lcmF0ZUhlYWRlcigpOiBzdHJpbmcgeyByZXR1cm4gJy8vIEhlYWRlci50c3ggc291cmNlIGNvZGUnOyB9XG5mdW5jdGlvbiBnZW5lcmF0ZUhlcm9DYXJvdXNlbCgpOiBzdHJpbmcgeyByZXR1cm4gJy8vIEhlcm9DYXJvdXNlbC50c3ggc291cmNlIGNvZGUnOyB9XG5mdW5jdGlvbiBnZW5lcmF0ZUxvYWRpbmdTcGlubmVyKCk6IHN0cmluZyB7IHJldHVybiAnLy8gTG9hZGluZ1NwaW5uZXIudHN4IHNvdXJjZSBjb2RlJzsgfVxuZnVuY3Rpb24gZ2VuZXJhdGVNb3ZpZUNhcmQoKTogc3RyaW5nIHsgcmV0dXJuICcvLyBNb3ZpZUNhcmQudHN4IHNvdXJjZSBjb2RlJzsgfVxuZnVuY3Rpb24gZ2VuZXJhdGVPcHRpbWl6ZWRJbWFnZSgpOiBzdHJpbmcgeyByZXR1cm4gJy8vIE9wdGltaXplZEltYWdlLnRzeCBzb3VyY2UgY29kZSc7IH1cbmZ1bmN0aW9uIGdlbmVyYXRlVG9hc3QoKTogc3RyaW5nIHsgcmV0dXJuICcvLyBUb2FzdC50c3ggc291cmNlIGNvZGUnOyB9XG5mdW5jdGlvbiBnZW5lcmF0ZVZpZGVvUGxheWVyKCk6IHN0cmluZyB7IHJldHVybiAnLy8gVmlkZW9QbGF5ZXIudHN4IHNvdXJjZSBjb2RlJzsgfVxuZnVuY3Rpb24gZ2VuZXJhdGVIb21lUGFnZSgpOiBzdHJpbmcgeyByZXR1cm4gJy8vIEhvbWUudHN4IHNvdXJjZSBjb2RlJzsgfVxuZnVuY3Rpb24gZ2VuZXJhdGVNb3ZpZXNQYWdlKCk6IHN0cmluZyB7IHJldHVybiAnLy8gTW92aWVzLnRzeCBzb3VyY2UgY29kZSc7IH1cbmZ1bmN0aW9uIGdlbmVyYXRlVFZTaG93c1BhZ2UoKTogc3RyaW5nIHsgcmV0dXJuICcvLyBUVlNob3dzLnRzeCBzb3VyY2UgY29kZSc7IH1cbmZ1bmN0aW9uIGdlbmVyYXRlQW5pbWVQYWdlKCk6IHN0cmluZyB7IHJldHVybiAnLy8gQW5pbWUudHN4IHNvdXJjZSBjb2RlJzsgfVxuZnVuY3Rpb24gZ2VuZXJhdGVTZWFyY2hQYWdlKCk6IHN0cmluZyB7IHJldHVybiAnLy8gU2VhcmNoLnRzeCBzb3VyY2UgY29kZSc7IH1cbmZ1bmN0aW9uIGdlbmVyYXRlQ2FydFBhZ2UoKTogc3RyaW5nIHsgcmV0dXJuICcvLyBDYXJ0LnRzeCBzb3VyY2UgY29kZSc7IH1cbmZ1bmN0aW9uIGdlbmVyYXRlTW92aWVEZXRhaWxQYWdlKCk6IHN0cmluZyB7IHJldHVybiAnLy8gTW92aWVEZXRhaWwudHN4IHNvdXJjZSBjb2RlJzsgfVxuZnVuY3Rpb24gZ2VuZXJhdGVUVkRldGFpbFBhZ2UoKTogc3RyaW5nIHsgcmV0dXJuICcvLyBUVkRldGFpbC50c3ggc291cmNlIGNvZGUnOyB9XG5mdW5jdGlvbiBnZW5lcmF0ZUFkbWluUGFuZWxQYWdlKCk6IHN0cmluZyB7IHJldHVybiAnLy8gQWRtaW5QYW5lbC50c3ggc291cmNlIGNvZGUnOyB9XG5mdW5jdGlvbiBnZW5lcmF0ZUFwaVNlcnZpY2UoKTogc3RyaW5nIHsgcmV0dXJuICcvLyBhcGkudHMgc291cmNlIGNvZGUnOyB9XG5mdW5jdGlvbiBnZW5lcmF0ZVRtZGJTZXJ2aWNlKCk6IHN0cmluZyB7IHJldHVybiAnLy8gdG1kYi50cyBzb3VyY2UgY29kZSc7IH1cbmZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudFN5bmNTZXJ2aWNlKCk6IHN0cmluZyB7IHJldHVybiAnLy8gY29udGVudFN5bmMudHMgc291cmNlIGNvZGUnOyB9XG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnRGaWx0ZXJTZXJ2aWNlKCk6IHN0cmluZyB7IHJldHVybiAnLy8gY29udGVudEZpbHRlci50cyBzb3VyY2UgY29kZSc7IH1cbmZ1bmN0aW9uIGdlbmVyYXRlV2hhdHNhcHBVdGlscygpOiBzdHJpbmcgeyByZXR1cm4gJy8vIHdoYXRzYXBwLnRzIHNvdXJjZSBjb2RlJzsgfVxuZnVuY3Rpb24gZ2VuZXJhdGVQZXJmb3JtYW5jZVV0aWxzKCk6IHN0cmluZyB7IHJldHVybiAnLy8gcGVyZm9ybWFuY2UudHMgc291cmNlIGNvZGUnOyB9XG5mdW5jdGlvbiBnZW5lcmF0ZUVycm9ySGFuZGxlclV0aWxzKCk6IHN0cmluZyB7IHJldHVybiAnLy8gZXJyb3JIYW5kbGVyLnRzIHNvdXJjZSBjb2RlJzsgfVxuZnVuY3Rpb24gZ2VuZXJhdGVTeXN0ZW1FeHBvcnRVdGlscygpOiBzdHJpbmcgeyByZXR1cm4gJy8vIHN5c3RlbUV4cG9ydC50cyBzb3VyY2UgY29kZSc7IH1cbmZ1bmN0aW9uIGdlbmVyYXRlU291cmNlQ29kZUdlbmVyYXRvclV0aWxzKCk6IHN0cmluZyB7IHJldHVybiAnLy8gc291cmNlQ29kZUdlbmVyYXRvci50cyBzb3VyY2UgY29kZSc7IH1cbmZ1bmN0aW9uIGdlbmVyYXRlT3B0aW1pemVkQ29udGVudEhvb2soKTogc3RyaW5nIHsgcmV0dXJuICcvLyB1c2VPcHRpbWl6ZWRDb250ZW50LnRzIHNvdXJjZSBjb2RlJzsgfVxuZnVuY3Rpb24gZ2VuZXJhdGVQZXJmb3JtYW5jZUhvb2soKTogc3RyaW5nIHsgcmV0dXJuICcvLyB1c2VQZXJmb3JtYW5jZS50cyBzb3VyY2UgY29kZSc7IH1cbmZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudFN5bmNIb29rKCk6IHN0cmluZyB7IHJldHVybiAnLy8gdXNlQ29udGVudFN5bmMudHMgc291cmNlIGNvZGUnOyB9XG5mdW5jdGlvbiBnZW5lcmF0ZUFwaUNvbmZpZygpOiBzdHJpbmcgeyByZXR1cm4gJy8vIGFwaS50cyBjb25maWcgc291cmNlIGNvZGUnOyB9XG5mdW5jdGlvbiBnZW5lcmF0ZU1vdmllVHlwZXMoKTogc3RyaW5nIHsgcmV0dXJuICcvLyBtb3ZpZS50cyB0eXBlcyBzb3VyY2UgY29kZSc7IH0iXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sV0FBVztBQUlsQixzQkFBc0IsMkJBQTJCLGNBQTJDO0FBQzFGLE1BQUk7QUFDRixVQUFNLE1BQU0sSUFBSSxNQUFNO0FBR3RCLFVBQU0sdUJBQXVCLEtBQUssWUFBWTtBQUc5QyxVQUFNLFVBQVUsTUFBTSxJQUFJLGNBQWMsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN4RCxVQUFNLE1BQU0sSUFBSSxnQkFBZ0IsT0FBTztBQUN2QyxVQUFNLE9BQU8sU0FBUyxjQUFjLEdBQUc7QUFDdkMsU0FBSyxPQUFPO0FBQ1osU0FBSyxXQUFXLG1DQUFrQyxvQkFBSSxLQUFLLEdBQUUsWUFBWSxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztBQUN4RixhQUFTLEtBQUssWUFBWSxJQUFJO0FBQzlCLFNBQUssTUFBTTtBQUNYLGFBQVMsS0FBSyxZQUFZLElBQUk7QUFDOUIsUUFBSSxnQkFBZ0IsR0FBRztBQUFBLEVBRXpCLFNBQVMsT0FBTztBQUNkLFlBQVEsTUFBTSwwQ0FBMEMsS0FBSztBQUM3RCxVQUFNO0FBQUEsRUFDUjtBQUNGO0FBR0EsZUFBZSx1QkFBdUIsS0FBWSxjQUEyQztBQUUzRixNQUFJLEtBQUssZ0JBQWdCLG9CQUFvQixDQUFDO0FBQzlDLE1BQUksS0FBSyxrQkFBa0IsbUJBQW1CLENBQUM7QUFDL0MsTUFBSSxLQUFLLHNCQUFzQix1QkFBdUIsQ0FBQztBQUN2RCxNQUFJLEtBQUssaUJBQWlCLGlCQUFpQixDQUFDO0FBQzVDLE1BQUksS0FBSyxxQkFBcUIsb0JBQW9CLENBQUM7QUFDbkQsTUFBSSxLQUFLLHNCQUFzQixxQkFBcUIsQ0FBQztBQUNyRCxNQUFJLEtBQUsscUJBQXFCLHNCQUFzQixDQUFDO0FBQ3JELE1BQUksS0FBSyxvQkFBb0IscUJBQXFCLENBQUM7QUFDbkQsTUFBSSxLQUFLLGNBQWMsa0JBQWtCLENBQUM7QUFDMUMsTUFBSSxLQUFLLGVBQWUscUJBQXFCLENBQUM7QUFDOUMsTUFBSSxLQUFLLGFBQWEsZUFBZSxZQUFZLENBQUM7QUFHbEQsUUFBTSxlQUFlLElBQUksT0FBTyxRQUFRO0FBQ3hDLE1BQUksY0FBYztBQUNoQixpQkFBYSxLQUFLLGNBQWMseUJBQXlCLENBQUM7QUFBQSxFQUM1RDtBQUdBLFFBQU0sWUFBWSxJQUFJLE9BQU8sS0FBSztBQUNsQyxNQUFJLFdBQVc7QUFDYixjQUFVLEtBQUssWUFBWSxnQkFBZ0IsQ0FBQztBQUM1QyxjQUFVLEtBQUssV0FBVyxlQUFlLENBQUM7QUFDMUMsY0FBVSxLQUFLLGFBQWEsaUJBQWlCLENBQUM7QUFDOUMsY0FBVSxLQUFLLGlCQUFpQixtQkFBbUIsQ0FBQztBQUdwRCxVQUFNLG1CQUFtQixVQUFVLE9BQU8sWUFBWTtBQUN0RCxRQUFJLGtCQUFrQjtBQUNwQix1QkFBaUIsS0FBSyxxQkFBcUIsd0NBQXdDLFlBQVksQ0FBQztBQUNoRyx1QkFBaUIsS0FBSyxvQkFBb0IsdUNBQXVDLFlBQVksQ0FBQztBQUM5Rix1QkFBaUIsS0FBSyxpQkFBaUIsb0NBQW9DLFlBQVksQ0FBQztBQUN4Rix1QkFBaUIsS0FBSyxxQkFBcUIsc0JBQXNCLENBQUM7QUFDbEUsdUJBQWlCLEtBQUssbUJBQW1CLG9CQUFvQixDQUFDO0FBQzlELHVCQUFpQixLQUFLLG9CQUFvQixxQkFBcUIsQ0FBQztBQUNoRSx1QkFBaUIsS0FBSyxjQUFjLGVBQWUsQ0FBQztBQUNwRCx1QkFBaUIsS0FBSyxvQkFBb0IscUJBQXFCLENBQUM7QUFDaEUsdUJBQWlCLEtBQUssc0JBQXNCLHVCQUF1QixDQUFDO0FBQ3BFLHVCQUFpQixLQUFLLGlCQUFpQixrQkFBa0IsQ0FBQztBQUMxRCx1QkFBaUIsS0FBSyxzQkFBc0IsdUJBQXVCLENBQUM7QUFDcEUsdUJBQWlCLEtBQUssYUFBYSxjQUFjLENBQUM7QUFDbEQsdUJBQWlCLEtBQUssbUJBQW1CLG9CQUFvQixDQUFDO0FBQUEsSUFDaEU7QUFHQSxVQUFNLGdCQUFnQixVQUFVLE9BQU8sU0FBUztBQUNoRCxRQUFJLGVBQWU7QUFDakIsb0JBQWMsS0FBSyxvQkFBb0IsdUNBQXVDLFlBQVksQ0FBQztBQUMzRixvQkFBYyxLQUFLLG1CQUFtQixzQ0FBc0MsWUFBWSxDQUFDO0FBQUEsSUFDM0Y7QUFHQSxVQUFNLGNBQWMsVUFBVSxPQUFPLE9BQU87QUFDNUMsUUFBSSxhQUFhO0FBQ2Ysa0JBQVksS0FBSyxZQUFZLGlCQUFpQixDQUFDO0FBQy9DLGtCQUFZLEtBQUssY0FBYyxtQkFBbUIsQ0FBQztBQUNuRCxrQkFBWSxLQUFLLGVBQWUsb0JBQW9CLENBQUM7QUFDckQsa0JBQVksS0FBSyxhQUFhLGtCQUFrQixDQUFDO0FBQ2pELGtCQUFZLEtBQUssY0FBYyxtQkFBbUIsQ0FBQztBQUNuRCxrQkFBWSxLQUFLLFlBQVksaUJBQWlCLENBQUM7QUFDL0Msa0JBQVksS0FBSyxtQkFBbUIsd0JBQXdCLENBQUM7QUFDN0Qsa0JBQVksS0FBSyxnQkFBZ0IscUJBQXFCLENBQUM7QUFDdkQsa0JBQVksS0FBSyxrQkFBa0IsdUJBQXVCLENBQUM7QUFBQSxJQUM3RDtBQUdBLFVBQU0saUJBQWlCLFVBQVUsT0FBTyxVQUFVO0FBQ2xELFFBQUksZ0JBQWdCO0FBQ2xCLHFCQUFlLEtBQUssVUFBVSxtQkFBbUIsQ0FBQztBQUNsRCxxQkFBZSxLQUFLLFdBQVcsb0JBQW9CLENBQUM7QUFDcEQscUJBQWUsS0FBSyxrQkFBa0IsMkJBQTJCLENBQUM7QUFDbEUscUJBQWUsS0FBSyxvQkFBb0IsNkJBQTZCLENBQUM7QUFBQSxJQUN4RTtBQUdBLFVBQU0sY0FBYyxVQUFVLE9BQU8sT0FBTztBQUM1QyxRQUFJLGFBQWE7QUFDZixrQkFBWSxLQUFLLGVBQWUsc0JBQXNCLENBQUM7QUFDdkQsa0JBQVksS0FBSyxrQkFBa0IseUJBQXlCLENBQUM7QUFDN0Qsa0JBQVksS0FBSyxtQkFBbUIsMEJBQTBCLENBQUM7QUFDL0Qsa0JBQVksS0FBSyxtQkFBbUIsMEJBQTBCLENBQUM7QUFDL0Qsa0JBQVksS0FBSywwQkFBMEIsaUNBQWlDLENBQUM7QUFBQSxJQUMvRTtBQUdBLFVBQU0sY0FBYyxVQUFVLE9BQU8sT0FBTztBQUM1QyxRQUFJLGFBQWE7QUFDZixrQkFBWSxLQUFLLDBCQUEwQiw2QkFBNkIsQ0FBQztBQUN6RSxrQkFBWSxLQUFLLHFCQUFxQix3QkFBd0IsQ0FBQztBQUMvRCxrQkFBWSxLQUFLLHFCQUFxQix3QkFBd0IsQ0FBQztBQUFBLElBQ2pFO0FBR0EsVUFBTSxlQUFlLFVBQVUsT0FBTyxRQUFRO0FBQzlDLFFBQUksY0FBYztBQUNoQixtQkFBYSxLQUFLLFVBQVUsa0JBQWtCLENBQUM7QUFBQSxJQUNqRDtBQUdBLFVBQU0sY0FBYyxVQUFVLE9BQU8sT0FBTztBQUM1QyxRQUFJLGFBQWE7QUFDZixrQkFBWSxLQUFLLFlBQVksbUJBQW1CLENBQUM7QUFBQSxJQUNuRDtBQUFBLEVBQ0Y7QUFDRjtBQUlBLFNBQVMsd0NBQXdDLGNBQW9DO0FBQ25GLFFBQU0sZ0JBQWdCLEtBQUssVUFBVSxhQUFhLGVBQWUsTUFBTSxDQUFDO0FBQ3hFLFFBQU0sU0FBUyxLQUFLLFVBQVUsYUFBYSxRQUFRLE1BQU0sQ0FBQztBQUUxRCxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBSXlCLGFBQWE7QUFBQTtBQUFBO0FBQUEsMEJBR3JCLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaVhoQztBQUVBLFNBQVMsdUNBQXVDLGNBQW9DO0FBQ2xGLFFBQU0sU0FBUyxLQUFLLFVBQVUsYUFBYSxRQUFRLE1BQU0sQ0FBQztBQUMxRCxRQUFNLFNBQVMsS0FBSyxVQUFVLGFBQWEsUUFBUSxNQUFNLENBQUM7QUFFMUQsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUlpQixNQUFNO0FBQUE7QUFBQTtBQUFBLDBCQUdOLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXN2QmhDO0FBRUEsU0FBUyxvQ0FBb0MsY0FBb0M7QUFDL0UsUUFBTSxTQUFTLEtBQUssVUFBVSxhQUFhLFFBQVEsTUFBTSxDQUFDO0FBRTFELFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFJaUIsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBHaEM7QUFFQSxTQUFTLHVDQUF1QyxjQUFvQztBQUNsRixRQUFNLFNBQVMsS0FBSyxVQUFVLGNBQWMsTUFBTSxDQUFDO0FBRW5ELFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFJaUIsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE2MUJoQztBQUVBLFNBQVMsc0NBQXNDLGNBQW9DO0FBQ2pGLFFBQU0sU0FBUyxLQUFLLFVBQVUsYUFBYSxRQUFRLE1BQU0sQ0FBQztBQUUxRCxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFLaUIsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQStRaEM7QUFJQSxTQUFTLHNCQUE4QjtBQUNyQyxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrRFQ7QUFFQSxTQUFTLHFCQUE2QjtBQUNwQyxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWVUO0FBRUEsU0FBUyx5QkFBaUM7QUFDeEMsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUVQ7QUFFQSxTQUFTLG1CQUEyQjtBQUNsQyxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT1Q7QUFFQSxTQUFTLHNCQUE4QjtBQUNyQyxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdCVDtBQUVBLFNBQVMsdUJBQStCO0FBQ3RDLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFzQlQ7QUFFQSxTQUFTLHdCQUFnQztBQUN2QyxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1UO0FBRUEsU0FBUyx1QkFBK0I7QUFDdEMsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNkJUO0FBRUEsU0FBUyxvQkFBNEI7QUFDbkMsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBd0RUO0FBRUEsU0FBUyx1QkFBK0I7QUFDdEMsU0FBTztBQUNUO0FBRUEsU0FBUywyQkFBbUM7QUFDMUMsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZVDtBQUVBLFNBQVMsZUFBZSxjQUFvQztBQUMxRCxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTVAsYUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBLEdBR3BCLG9CQUFJLEtBQUssR0FBRSxZQUFZLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUtWLGFBQWEsT0FBTyxVQUFVO0FBQUEsYUFDakMsYUFBYSxPQUFPLFdBQVc7QUFBQSwyQkFDakIsYUFBYSxPQUFPLHFCQUFxQjtBQUFBLGNBQ3RELGFBQWEsT0FBTyxvQkFBb0I7QUFBQTtBQUFBO0FBQUEsc0JBR2hDLGFBQWEsY0FBYyxNQUFNO0FBQUE7QUFBQTtBQUFBLFNBRzlDLGFBQWEsT0FBTyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW9DbkM7QUFFQSxTQUFTLGtCQUEwQjtBQUNqQyxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVVQ7QUFFQSxTQUFTLGlCQUF5QjtBQUNoQyxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFzSVQ7QUFFQSxTQUFTLG1CQUEyQjtBQUNsQyxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF5TFQ7QUFFQSxTQUFTLHFCQUE2QjtBQUNwQyxTQUFPO0FBQ1Q7QUFHQSxTQUFTLHdCQUFnQztBQUFFLFNBQU87QUFBb0M7QUFDdEYsU0FBUyxzQkFBOEI7QUFBRSxTQUFPO0FBQWtDO0FBQ2xGLFNBQVMsdUJBQStCO0FBQUUsU0FBTztBQUFtQztBQUNwRixTQUFTLGlCQUF5QjtBQUFFLFNBQU87QUFBNkI7QUFDeEUsU0FBUyx1QkFBK0I7QUFBRSxTQUFPO0FBQW1DO0FBQ3BGLFNBQVMseUJBQWlDO0FBQUUsU0FBTztBQUFxQztBQUN4RixTQUFTLG9CQUE0QjtBQUFFLFNBQU87QUFBZ0M7QUFDOUUsU0FBUyx5QkFBaUM7QUFBRSxTQUFPO0FBQXFDO0FBQ3hGLFNBQVMsZ0JBQXdCO0FBQUUsU0FBTztBQUE0QjtBQUN0RSxTQUFTLHNCQUE4QjtBQUFFLFNBQU87QUFBa0M7QUFDbEYsU0FBUyxtQkFBMkI7QUFBRSxTQUFPO0FBQTJCO0FBQ3hFLFNBQVMscUJBQTZCO0FBQUUsU0FBTztBQUE2QjtBQUM1RSxTQUFTLHNCQUE4QjtBQUFFLFNBQU87QUFBOEI7QUFDOUUsU0FBUyxvQkFBNEI7QUFBRSxTQUFPO0FBQTRCO0FBQzFFLFNBQVMscUJBQTZCO0FBQUUsU0FBTztBQUE2QjtBQUM1RSxTQUFTLG1CQUEyQjtBQUFFLFNBQU87QUFBMkI7QUFDeEUsU0FBUywwQkFBa0M7QUFBRSxTQUFPO0FBQWtDO0FBQ3RGLFNBQVMsdUJBQStCO0FBQUUsU0FBTztBQUErQjtBQUNoRixTQUFTLHlCQUFpQztBQUFFLFNBQU87QUFBaUM7QUFDcEYsU0FBUyxxQkFBNkI7QUFBRSxTQUFPO0FBQXlCO0FBQ3hFLFNBQVMsc0JBQThCO0FBQUUsU0FBTztBQUEwQjtBQUMxRSxTQUFTLDZCQUFxQztBQUFFLFNBQU87QUFBaUM7QUFDeEYsU0FBUywrQkFBdUM7QUFBRSxTQUFPO0FBQW1DO0FBQzVGLFNBQVMsd0JBQWdDO0FBQUUsU0FBTztBQUE4QjtBQUNoRixTQUFTLDJCQUFtQztBQUFFLFNBQU87QUFBaUM7QUFDdEYsU0FBUyw0QkFBb0M7QUFBRSxTQUFPO0FBQWtDO0FBQ3hGLFNBQVMsNEJBQW9DO0FBQUUsU0FBTztBQUFrQztBQUN4RixTQUFTLG1DQUEyQztBQUFFLFNBQU87QUFBeUM7QUFDdEcsU0FBUywrQkFBdUM7QUFBRSxTQUFPO0FBQXlDO0FBQ2xHLFNBQVMsMEJBQWtDO0FBQUUsU0FBTztBQUFvQztBQUN4RixTQUFTLDBCQUFrQztBQUFFLFNBQU87QUFBb0M7QUFDeEYsU0FBUyxvQkFBNEI7QUFBRSxTQUFPO0FBQWdDO0FBQzlFLFNBQVMscUJBQTZCO0FBQUUsU0FBTztBQUFpQzsiLCJuYW1lcyI6W119