import { createContext, useState } from 'react';

const CategoryContext = createContext();

// eslint-disable-next-line react/prop-types
const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const updateCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <CategoryContext.Provider value={{ selectedCategory, updateCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };