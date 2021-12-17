import { createContext } from 'react';

export const AppDataContext = createContext({ category: [] } as Categories);

export interface Service {
  service_id: string;
  service_name: string;
  service_icon: string;
}

export interface Category {
  category_id: string;
  category_name: string;
  category_icon: string;
  services: Service[];
}

export interface Categories {
  category: Category[];
}
