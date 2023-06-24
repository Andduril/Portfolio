import React, { useState } from 'react';

export interface INavigationContext {
  activeLink: string;
  setActiveLink: (name: string) => void;
}

export interface NavigationProviderProps {
  children?: React.ReactNode;
}

export const NavigationContext = React.createContext<INavigationContext>({} as INavigationContext);

const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const [activeLink, setActiveLink] = useState<string>('');

  const toggleActiveLink = (name: string) => {
    setActiveLink(name);
  }

  return (
    <NavigationContext.Provider value={{activeLink: activeLink, setActiveLink: toggleActiveLink}}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider;