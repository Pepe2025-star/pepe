import React, { createContext, useContext, useReducer, useEffect } from 'react';

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
  active: boolean;
  createdAt: string;
}

export interface Novel {
  id: number;
  titulo: string;
  genero: string;
  capitulos: number;
  año: number;
  descripcion?: string;
  active: boolean;
}

export interface Notification {
  id: string;
  type: 'success' | 'warning' | 'error' | 'info';
  title: string;
  message: string;
  timestamp: string;
  section: string;
  action: string;
}

export interface AdminState {
  isAuthenticated: boolean;
  prices: PriceConfig;
  deliveryZones: DeliveryZone[];
  novels: Novel[];
  notifications: Notification[];
  lastBackup?: string;
}

// Estado inicial con configuraciones actualizadas
const initialState: AdminState = {
  isAuthenticated: false,
  prices: {
    moviePrice: 80,
    seriesPrice: 300,
    transferFeePercentage: 10,
    novelPricePerChapter: 5
  },
  deliveryZones: [
    {
      id: 1,
      name: 'Habana > Centro Habana > Cayo Hueso',
      cost: 100,
      active: true,
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      name: 'Habana > Habana Vieja > Plaza de Armas',
      cost: 150,
      active: true,
      createdAt: new Date().toISOString()
    },
    {
      id: 3,
      name: 'Habana > Vedado > Plaza de la Revolución',
      cost: 120,
      active: true,
      createdAt: new Date().toISOString()
    }
  ],
  novels: [
    {
      id: 1,
      titulo: 'La Casa de Papel',
      genero: 'Drama/Thriller',
      capitulos: 48,
      año: 2017,
      descripcion: 'Una banda organizada de ladrones tiene el objetivo de cometer el atraco del siglo en la Fábrica Nacional de Moneda y Timbre.',
      active: true
    },
    {
      id: 2,
      titulo: 'Élite',
      genero: 'Drama/Thriller',
      capitulos: 64,
      año: 2018,
      descripcion: 'Cuando tres estudiantes de clase trabajadora se matriculan en una escuela privada exclusiva de España, el choque entre ellos y los estudiantes ricos termina en tragedia.',
      active: true
    },
    {
      id: 3,
      titulo: 'Narcos',
      genero: 'Drama/Crimen',
      capitulos: 30,
      año: 2015,
      descripcion: 'Una mirada crónica al crecimiento y la propagación del cartel de cocaína colombiano y la guerra entre los carteles de la droga y la ley.',
      active: true
    }
  ],
  notifications: []
};

type AdminAction = 
  | { type: 'LOGIN' }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_PRICES'; payload: PriceConfig }
  | { type: 'ADD_DELIVERY_ZONE'; payload: Omit<DeliveryZone, 'id' | 'createdAt'> }
  | { type: 'UPDATE_DELIVERY_ZONE'; payload: DeliveryZone }
  | { type: 'DELETE_DELIVERY_ZONE'; payload: number }
  | { type: 'ADD_NOVEL'; payload: Omit<Novel, 'id'> }
  | { type: 'UPDATE_NOVEL'; payload: Novel }
  | { type: 'DELETE_NOVEL'; payload: number }
  | { type: 'ADD_NOTIFICATION'; payload: Omit<Notification, 'id' | 'timestamp'> }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | { type: 'CLEAR_NOTIFICATIONS' }
  | { type: 'SET_LAST_BACKUP'; payload: string };

interface AdminContextType {
  state: AdminState;
  login: () => void;
  logout: () => void;
  updatePrices: (prices: PriceConfig) => void;
  addDeliveryZone: (zone: Omit<DeliveryZone, 'id' | 'createdAt'>) => void;
  updateDeliveryZone: (zone: DeliveryZone) => void;
  deleteDeliveryZone: (id: number) => void;
  addNovel: (novel: Omit<Novel, 'id'>) => void;
  updateNovel: (novel: Novel) => void;
  deleteNovel: (id: number) => void;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
  exportSystemBackup: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

function adminReducer(state: AdminState, action: AdminAction): AdminState {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false };
    case 'UPDATE_PRICES':
      return { 
        ...state, 
        prices: action.payload,
        notifications: [...state.notifications, {
          id: Date.now().toString(),
          type: 'success',
          title: 'Precios actualizados',
          message: `Precios del sistema actualizados: Películas $${action.payload.moviePrice} CUP, Series $${action.payload.seriesPrice} CUP/temp`,
          timestamp: new Date().toISOString(),
          section: 'Precios',
          action: 'Actualizar'
        }]
      };
    case 'ADD_DELIVERY_ZONE':
      const newZone: DeliveryZone = {
        ...action.payload,
        id: Date.now(),
        createdAt: new Date().toISOString()
      };
      return { 
        ...state, 
        deliveryZones: [...state.deliveryZones, newZone],
        notifications: [...state.notifications, {
          id: Date.now().toString(),
          type: 'success',
          title: 'Zona agregada',
          message: `Nueva zona de entrega "${newZone.name}" agregada con costo $${newZone.cost} CUP`,
          timestamp: new Date().toISOString(),
          section: 'Zonas de Entrega',
          action: 'Agregar'
        }]
      };
    case 'UPDATE_DELIVERY_ZONE':
      return { 
        ...state, 
        deliveryZones: state.deliveryZones.map(zone => 
          zone.id === action.payload.id ? action.payload : zone
        ),
        notifications: [...state.notifications, {
          id: Date.now().toString(),
          type: 'info',
          title: 'Zona actualizada',
          message: `Zona "${action.payload.name}" actualizada - Costo: $${action.payload.cost} CUP`,
          timestamp: new Date().toISOString(),
          section: 'Zonas de Entrega',
          action: 'Actualizar'
        }]
      };
    case 'DELETE_DELIVERY_ZONE':
      const deletedZone = state.deliveryZones.find(zone => zone.id === action.payload);
      return { 
        ...state, 
        deliveryZones: state.deliveryZones.filter(zone => zone.id !== action.payload),
        notifications: [...state.notifications, {
          id: Date.now().toString(),
          type: 'warning',
          title: 'Zona eliminada',
          message: `Zona "${deletedZone?.name || 'Desconocida'}" eliminada del sistema`,
          timestamp: new Date().toISOString(),
          section: 'Zonas de Entrega',
          action: 'Eliminar'
        }]
      };
    case 'ADD_NOVEL':
      const newNovel: Novel = {
        ...action.payload,
        id: Date.now()
      };
      return { 
        ...state, 
        novels: [...state.novels, newNovel],
        notifications: [...state.notifications, {
          id: Date.now().toString(),
          type: 'success',
          title: 'Novela agregada',
          message: `"${newNovel.titulo}" agregada al catálogo - ${newNovel.capitulos} capítulos`,
          timestamp: new Date().toISOString(),
          section: 'Novelas',
          action: 'Agregar'
        }]
      };
    case 'UPDATE_NOVEL':
      return { 
        ...state, 
        novels: state.novels.map(novel => 
          novel.id === action.payload.id ? action.payload : novel
        ),
        notifications: [...state.notifications, {
          id: Date.now().toString(),
          type: 'info',
          title: 'Novela actualizada',
          message: `"${action.payload.titulo}" actualizada en el catálogo`,
          timestamp: new Date().toISOString(),
          section: 'Novelas',
          action: 'Actualizar'
        }]
      };
    case 'DELETE_NOVEL':
      const deletedNovel = state.novels.find(novel => novel.id === action.payload);
      return { 
        ...state, 
        novels: state.novels.filter(novel => novel.id !== action.payload),
        notifications: [...state.notifications, {
          id: Date.now().toString(),
          type: 'warning',
          title: 'Novela eliminada',
          message: `"${deletedNovel?.titulo || 'Desconocida'}" eliminada del catálogo`,
          timestamp: new Date().toISOString(),
          section: 'Novelas',
          action: 'Eliminar'
        }]
      };
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, {
          ...action.payload,
          id: Date.now().toString(),
          timestamp: new Date().toISOString()
        }]
      };
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload)
      };
    case 'CLEAR_NOTIFICATIONS':
      return {
        ...state,
        notifications: []
      };
    case 'SET_LAST_BACKUP':
      return {
        ...state,
        lastBackup: action.payload
      };
    default:
      return state;
  }
}

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(adminReducer, initialState);

  // Persistencia automática con sincronización en tiempo real
  useEffect(() => {
    const savedState = localStorage.getItem('adminState');
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        // Cargar estado guardado manteniendo sincronización
        if (parsed.prices) {
          dispatch({ type: 'UPDATE_PRICES', payload: parsed.prices });
        }
        if (parsed.deliveryZones) {
          parsed.deliveryZones.forEach((zone: DeliveryZone) => {
            if (!state.deliveryZones.find(z => z.id === zone.id)) {
              dispatch({ type: 'ADD_DELIVERY_ZONE', payload: zone });
            }
          });
        }
        if (parsed.novels) {
          parsed.novels.forEach((novel: Novel) => {
            if (!state.novels.find(n => n.id === novel.id)) {
              dispatch({ type: 'ADD_NOVEL', payload: novel });
            }
          });
        }
      } catch (error) {
        console.error('Error loading admin state:', error);
      }
    }
  }, []);

  // Guardar estado automáticamente - sincronización en tiempo real
  useEffect(() => {
    localStorage.setItem('adminState', JSON.stringify(state));
  }, [state]);

  const login = () => {
    dispatch({ type: 'LOGIN' });
    dispatch({ 
      type: 'ADD_NOTIFICATION', 
      payload: {
        type: 'success',
        title: 'Sesión iniciada',
        message: 'Acceso al panel de administración autorizado',
        section: 'Autenticación',
        action: 'Login'
      }
    });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  
  const updatePrices = (prices: PriceConfig) => {
    dispatch({ type: 'UPDATE_PRICES', payload: prices });
  };

  const addDeliveryZone = (zone: Omit<DeliveryZone, 'id' | 'createdAt'>) => {
    dispatch({ type: 'ADD_DELIVERY_ZONE', payload: zone });
  };

  const updateDeliveryZone = (zone: DeliveryZone) => {
    dispatch({ type: 'UPDATE_DELIVERY_ZONE', payload: zone });
  };

  const deleteDeliveryZone = (id: number) => {
    dispatch({ type: 'DELETE_DELIVERY_ZONE', payload: id });
  };

  const addNovel = (novel: Omit<Novel, 'id'>) => {
    dispatch({ type: 'ADD_NOVEL', payload: novel });
  };

  const updateNovel = (novel: Novel) => {
    dispatch({ type: 'UPDATE_NOVEL', payload: novel });
  };

  const deleteNovel = (id: number) => {
    dispatch({ type: 'DELETE_NOVEL', payload: id });
  };

  const addNotification = (notification: Omit<Notification, 'id' | 'timestamp'>) => {
    dispatch({ type: 'ADD_NOTIFICATION', payload: notification });
  };

  const removeNotification = (id: string) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  };

  const clearNotifications = () => {
    dispatch({ type: 'CLEAR_NOTIFICATIONS' });
  };

  const exportSystemBackup = async () => {
    try {
      const backupData = {
        ...state,
        exportDate: new Date().toISOString(),
        version: '3.0',
        credentials: {
          username: 'root',
          password: 'video'
        }
      };

      const blob = new Blob([JSON.stringify(backupData, null, 2)], { 
        type: 'application/json' 
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `tv-a-la-carta-backup-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      dispatch({ type: 'SET_LAST_BACKUP', payload: new Date().toISOString() });
      dispatch({ 
        type: 'ADD_NOTIFICATION', 
        payload: {
          type: 'success',
          title: 'Backup creado',
          message: 'Backup del sistema exportado exitosamente con todas las configuraciones',
          section: 'Sistema',
          action: 'Backup'
        }
      });
    } catch (error) {
      console.error('Error creating backup:', error);
      dispatch({ 
        type: 'ADD_NOTIFICATION', 
        payload: {
          type: 'error',
          title: 'Error en backup',
          message: 'No se pudo crear el backup del sistema',
          section: 'Sistema',
          action: 'Backup'
        }
      });
    }
  };

  return (
    <AdminContext.Provider value={{
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
      removeNotification,
      clearNotifications,
      exportSystemBackup
    }}>
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

export { AdminContext };