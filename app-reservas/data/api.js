import { useEffect } from "react";


export const municipio = useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.64:6969/api/munis');
        setSearchResults(response.data.munis);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

