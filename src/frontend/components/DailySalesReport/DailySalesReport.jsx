import { useState, useEffect } from 'react';
import { useAllProductsContext } from '../../contexts/ProductsContextProvider';
import ProductCard from '../ProductCard/ProductCard';
import Title from '../Title/Title';
import styles from './DailySalesReport.module.css';

const DailySalesReport = () => {
  const { products: productsFromContext } = useAllProductsContext();
  const [topSellingProducts, setTopSellingProducts] = useState([]);
  const [reportDate, setReportDate] = useState(new Date());

  // Simulamos datos de ventas diarias
  const generateDailySalesData = () => {
    if (productsFromContext.length === 0) return [];

    // Simulamos ventas aleatorias para cada producto
    const salesData = productsFromContext.map(product => ({
      ...product,
      dailySales: Math.floor(Math.random() * 50) + 1, // Entre 1 y 50 ventas
      salesGrowth: (Math.random() * 40 - 20).toFixed(1) // Entre -20% y +20%
    }));

    // Ordenamos por ventas diarias y tomamos los top 6
    return salesData
      .sort((a, b) => b.dailySales - a.dailySales)
      .slice(0, 6);
  };

  useEffect(() => {
    if (productsFromContext.length > 0) {
      setTopSellingProducts(generateDailySalesData());
    }
  }, [productsFromContext]);

  // Actualizar datos cada 30 segundos para simular datos en tiempo real
  useEffect(() => {
    const interval = setInterval(() => {
      if (productsFromContext.length > 0) {
        setTopSellingProducts(generateDailySalesData());
        setReportDate(new Date());
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [productsFromContext]);

  if (topSellingProducts.length === 0) {
    return null;
  }

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
      minute: '2-digit'
    });
  };

  return (
    <section className='section'>
      <Title>Productos Más Vendidos Hoy</Title>
      
      <div className={styles.reportHeader}>
        <div className={styles.dateInfo}>
          <h4>📊 Reporte de Ventas Diarias</h4>
          <p className={styles.reportDate}>
            {formatDate(reportDate)}
          </p>
          <p className={styles.lastUpdate}>
            Última actualización: {formatTime(reportDate)}
          </p>
        </div>
        
        <div className={styles.statsOverview}>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>
              {topSellingProducts.reduce((sum, product) => sum + product.dailySales, 0)}
            </span>
            <span className={styles.statLabel}>Ventas Totales Hoy</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>
              {topSellingProducts.length}
            </span>
            <span className={styles.statLabel}>Productos Top</span>
          </div>
        </div>
      </div>

      <div className={`container ${styles.productsGrid}`}>
        {topSellingProducts.map((product, index) => (
          <div key={product._id} className={styles.productWrapper}>
            <div className={styles.rankBadge}>
              <span className={styles.rankNumber}>#{index + 1}</span>
              <span className={styles.rankLabel}>Más Vendido</span>
            </div>
            
            <div className={styles.salesInfo}>
              <div className={styles.salesCount}>
                <span className={styles.salesNumber}>{product.dailySales}</span>
                <span className={styles.salesLabel}>ventas hoy</span>
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
                  {product.salesGrowth}% vs ayer
                </span>
              </div>
            </div>
            
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className={styles.reportFooter}>
        <p className={styles.disclaimer}>
          * Los datos se actualizan automáticamente cada 30 segundos
        </p>
        <p className={styles.disclaimer}>
          * Reporte basado en ventas del día actual
        </p>
      </div>
    </section>
  );
};

export default DailySalesReport;