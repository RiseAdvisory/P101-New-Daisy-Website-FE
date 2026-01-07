'use client';
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import ClientSideEffect from '@/helpers/ClientSideEffect';
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
      <Header />
      <ClientSideEffect />
      <div className="pt-[100px]">{children}</div>
      <Footer />
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
