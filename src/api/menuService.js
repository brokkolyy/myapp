export const fetchMenuItems = async () => {
    try {
      const response = await fetch('http://109.196.98.4');
      if (!response.ok) throw new Error('Ошибка загрузки меню');
      const data = await response.json();
      
      // Преобразуем данные бэкенда в нужный формат
      return data.map(item => ({
        id: item.ID.toString(),
        name: item.Name,
        description: item.Description,
        price: item.Count, // Предполагаем, что Count - это цена
        image: item.Image,
        stock: item.Count // Если Count - это количество на складе
      }));
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  };