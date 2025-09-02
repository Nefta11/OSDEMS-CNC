// Hook personalizado para obtener datos de WordPress
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useWordPressData = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Si hay un endpoint real de WordPress, usarlo
        // De lo contrario, simular la carga con datos de fallback
        if (process.env.NODE_ENV === 'development') {
          // Simular delay de red
          await new Promise(resolve => setTimeout(resolve, 500));
          
          // Datos de fallback para desarrollo
          setData(null); // Forzar el uso de fallback data en componentes
        } else {
          // En producción, hacer la llamada real a WordPress
          const response = await axios.get(`${process.env.REACT_APP_WP_API_URL}${endpoint}`, options);
          setData(response.data);
        }
      } catch (err) {
        setError(err);
        console.error('Error fetching WordPress data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};
