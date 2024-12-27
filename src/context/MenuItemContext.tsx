'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface MenuItemContextProps {
    selectedItem: string;
    setSelectedItem: (item: string) => void;
}

const MenuItemContext = createContext<MenuItemContextProps | undefined>(undefined);

export const MenuItemProvider = ({ children }: { children: ReactNode }) => {
    const [selectedItem, setSelectedItem] = useState<string>('home');

    return (
        <MenuItemContext.Provider value={{ selectedItem, setSelectedItem }}>
            {children}
        </MenuItemContext.Provider>
    );
};

export const useMenuItem = () => {
    const context = useContext(MenuItemContext);
    if (!context) {
        throw new Error('useMenuItem must be used within a MenuItemProvider');
    }
    return context;
};