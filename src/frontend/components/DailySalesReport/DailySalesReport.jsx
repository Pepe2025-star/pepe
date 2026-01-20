import { useState, useEffect } from 'react';
import { useAllProductsContext } from '../../contexts/ProductsContextProvider';
import ProductCard from '../ProductCard/ProductCard';
import Title from '../Title/Title';
import Price from '../Price';
import styles from './DailySalesReport.module.css';

const DailySalesReport = () => {
  const { products: productsFromContext } = useAllProductsContext();
  const [salesData, setSalesData] = useState([]);
  const [reportDate, setReportDate] = useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState('today');
  const [isLoading, setIsLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Simulamos datos de ventas más realistas
  const generateSalesData = (period = 'today') => {
    if (productsFromContext.length === 0) return [];

    const multiplier = period === 'today' ? 1 : period === 'week' ? 7 : 30;
    
    const salesData = productsFromContext.map(product => {
      const baseSales = Math.floor(Math.random() * 50) + 1;
      const totalSales = baseSales * multiplier;
      const revenue = totalSales * product.price;
      const growth = (Math.random() * 60 - 30).toFixed(1);
      const trend = Math.random() > 0.5 ? 'up' : 'down';
      
      return {
        ...product,
        dailySales: totalSales,
        revenue: revenue,
        salesGrowth: growth,
        trend: trend,
        conversionRate: (Math.random() * 15 + 5).toFixed(1),
        viewsToday: Math.floor(Math.random() * 500) + 100,
        stockLevel: Math.floor(Math.random() * 100) + 10,
        avgRating: (Math.random() * 2 + 3).toFixed(1),
        category: product.category,
        lastSaleTime: new Date(Date.now() - Math.random() * 3600000).toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit'
        })
      };
    });

    return salesData.sort((a, b) => b.dailySales - a.dailySales);
  };

  const updateSalesData = async (period = selectedPeriod) => {
    setIsLoading(true);
    // Simulamos una llamada a API
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (productsFromContext.length > 0) {
      setSalesData(generateSalesData(period));
      setReportDate(new Date());
    }
    setIsLoading(false);
  };

  useEffect(() => {
    updateSalesData();
  }, [productsFromContext, selectedPeriod]);

  // Auto-refresh cada 45 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      if (productsFromContext.length > 0) {
        updateSalesData();
      }
    }, 45000);

    return () => clearInterval(interval);
  }, [productsFromContext, selectedPeriod]);

  if (salesData.length === 0) {
    return null;
  }

  const topProducts = salesData.slice(0, 8);
  const totalRevenue = salesData.reduce((sum, product) => sum + product.revenue, 0);
  const totalSales = salesData.reduce((sum, product) => sum + product.dailySales, 0);
  const avgGrowth = (salesData.reduce((sum, product) => sum + parseFloat(product.salesGrowth), 0) / salesData.length).toFixed(1);

  const formatDate = (date) => {
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getPeriodLabel = () => {
    switch(selectedPeriod) {
      case 'today': return 'Hoy';
      case 'week': return 'Esta Semana';
      case 'month': return 'Este Mes';
      default: return 'Hoy';
    }
  };

  return (
    <section className='section'>
      <div className={styles.headerContainer}>
        <Title>🏆 Productos Más Vendidos - {getPeriodLabel()}</Title>
        
        <div className={styles.controls}>
          <div className={styles.periodSelector}>
            <button 
              className={selectedPeriod === 'today' ? `${styles.periodBtn} ${styles.active}` : styles.periodBtn}
              onClick={() => setSelectedPeriod('today')}
            >
              Hoy
            </button>
            <button 
              className={selectedPeriod === 'week' ? `${styles.periodBtn} ${styles.active}` : styles.periodBtn}
              onClick={() => setSelectedPeriod('week')}
            >
              Semana
            </button>
            <button 
              className={selectedPeriod === 'month' ? `${styles.periodBtn} ${styles.active}` : styles.periodBtn}
              onClick={() => setSelectedPeriod('month')}
            >
              Mes
            </button>
          </div>
          
          <button 
            className={styles.refreshBtn}
            onClick={() => updateSalesData()}
            disabled={isLoading}
          >
            {isLoading ? '🔄' : '↻'} Actualizar
          </button>
        </div>
      </div>
      
      <div className={styles.reportHeader}>
        <div className={styles.dateInfo}>
          <div className={styles.dateSection}>
            <h4>📊 Dashboard de Ventas en Tiempo Real</h4>
            <p className={styles.reportDate}>
              {formatDate(reportDate)}
            </p>
            <p className={styles.lastUpdate}>
              Última actualización: {formatTime(reportDate)}
            </p>
          </div>
          
          <div className={styles.liveIndicator}>
            <span className={styles.liveDot}></span>
            <span>EN VIVO</span>
          </div>
        </div>
        
        <div className={styles.statsOverview}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>💰</div>
            <span className={styles.statNumber}>
              <Price amount={totalRevenue} />
            </span>
            <span className={styles.statLabel}>Ingresos {getPeriodLabel()}</span>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📦</div>
            <span className={styles.statNumber}>
              {totalSales.toLocaleString()}
            </span>
            <span className={styles.statLabel}>Productos Vendidos</span>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📈</div>
            <span className={`${styles.statNumber} ${parseFloat(avgGrowth) >= 0 ? styles.positive : styles.negative}`}>
              {avgGrowth}%
            </span>
            <span className={styles.statLabel}>Crecimiento Promedio</span>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statIcon}>🎯</div>
            <span className={styles.statNumber}>
              {topProducts.length}
            </span>
            <span className={styles.statLabel}>Top Productos</span>
          </div>
        </div>
      </div>

      <div className={styles.toggleSection}>
        <button 
          className={styles.toggleBtn}
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? '📊 Vista Simple' : '📋 Vista Detallada'}
        </button>
      </div>

      {isLoading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p>Actualizando datos de ventas...</p>
        </div>
      ) : (
        <div className={`container ${styles.productsGrid}`}>
          {topProducts.map((product, index) => (
            <div key={product._id} className={styles.productWrapper}>
              <div className={styles.rankBadge}>
                <span className={styles.rankNumber}>#{index + 1}</span>
                <span className={styles.rankLabel}>
                  {index === 0 ? '🥇 Líder' : index === 1 ? '🥈 Segundo' : index === 2 ? '🥉 Tercero' : 'Top'}
                </span>
              </div>
              
              <div className={styles.salesInfo}>
                <div className={styles.salesCount}>
                  <span className={styles.salesNumber}>{product.dailySales}</span>
                  <span className={styles.salesLabel}>ventas</span>
                </div>
                
                <div className={styles.revenueInfo}>
                  <Price amount={product.revenue} />
                  <span className={styles.revenueLabel}>ingresos</span>
                </div>
                
                <div className={`${styles.growthIndicator} ${
                  parseFloat(product.salesGrowth) >= 0 
                    ? styles.positive 
                    : styles.negative
                }`}>
                  <span className={styles.growthIcon}>
                    {parseFloat(product.salesGrowth) >= 0 ? '📈' : '📉'}
                  </span>
                  <span className={styles.growthText}>
                    {product.salesGrowth}%
                  </span>
                </div>
              </div>
              
              {showDetails && (
                <div className={styles.detailsOverlay}>
                  <div className={styles.detailsContent}>
                    <div className={styles.detailRow}>
                      <span>👁️ Vistas:</span>
                      <span>{product.viewsToday}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span>🎯 Conversión:</span>
                      <span>{product.conversionRate}%</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span>📦 Stock:</span>
                      <span className={product.stockLevel < 20 ? styles.lowStock : ''}>
                        {product.stockLevel}
                      </span>
                    </div>
                    <div className={styles.detailRow}>
                      <span>⭐ Rating:</span>
                      <span>{product.avgRating}/5</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span>🕒 Última venta:</span>
                      <span>{product.lastSaleTime}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span>📂 Categoría:</span>
                      <span className={styles.category}>{product.category}</span>
                    </div>
                  </div>
                </div>
              )}
              
              <ProductCard product={product} />
              
              {product.stockLevel < 20 && (
                <div className={styles.stockAlert}>
                  ⚠️ Stock Bajo: {product.stockLevel} unidades
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className={styles.reportFooter}>
        <div className={styles.insights}>
          <h4>💡 Insights del Reporte</h4>
          <div className={styles.insightsList}>
            <p>🔥 <strong>Producto estrella:</strong> {topProducts[0]?.name} con {topProducts[0]?.dailySales} ventas</p>
            <p>💎 <strong>Mayor ingreso:</strong> {topProducts.reduce((max, product) => product.revenue > max.revenue ? product : max, topProducts[0])?.name}</p>
            <p>📊 <strong>Tendencia general:</strong> {parseFloat(avgGrowth) >= 0 ? 'Crecimiento positivo' : 'Necesita atención'}</p>
            <p>⏰ <strong>Próxima actualización:</strong> En 45 segundos</p>
          </div>
        </div>
        
        <div className={styles.disclaimers}>
          <p className={styles.disclaimer}>
            * Los datos se actualizan automáticamente cada 45 segundos
          </p>
          <p className={styles.disclaimer}>
            * Reporte basado en ventas del período seleccionado
          </p>
          <p className={styles.disclaimer}>
            * Datos simulados para demostración
          </p>
        </div>
      </div>
    </section>
  );
};

export default DailySalesReport;