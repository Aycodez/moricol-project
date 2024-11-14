// /src/context/FilterContext.tsx
import { createContext, ReactNode, useContext, useState } from "react";

interface FilterContextType {
  category: string;
  priceRange: [number, number];
  setCategory: (category: string) => void;
  setPriceRange: (range: [number, number]) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  return (
    <FilterContext.Provider
      value={{ category, priceRange, setCategory, setPriceRange }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
