'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MyContextType {
  userChange: string;
  setUserChange: React.Dispatch<React.SetStateAction<string>>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

interface MyUserTypeProviderProps {
  children: ReactNode;
}

export const MyUserTypeProvider = ({ children }: MyUserTypeProviderProps) => {
  const [userChange, setUserChange] = useState<string>('business');

  return (
    <MyContext.Provider value={{ userChange, setUserChange }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyUserTypeProvider');
  }
  return context;
};
