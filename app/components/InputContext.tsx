"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface InputContextType {
  inputValue: number;
  setInput: (value: number) => void;
}

// Corrected context name to match the interface
const InputContext = createContext<InputContextType | undefined>(undefined);

export const InputProvider = ({ children }: { children: ReactNode }) => {
  const [inputValue, setInputValue] = useState<number>(0);

  const setInput: InputContextType['setInput'] = (value: number) => {
    setInputValue(value);
  };

  return (
    <InputContext.Provider value={{ inputValue, setInput }}>
      {children}
    </InputContext.Provider>
  );
};

export const useInputContext = (): InputContextType => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error('useInputContext must be used within an InputProvider');
  }
  return context;
};