"use client"
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import ClientSideEffect from '@/helpers/ClientSideEffect';
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [state, setState] = useState("customer");

  return (
    <MyContext.Provider value={{ state, setState }}>
        <Header />
        <ClientSideEffect />
        <div className="pt-[100px]"> {children}</div>
        <Footer />
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
