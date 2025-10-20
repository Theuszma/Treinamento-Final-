"use client";

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AuthContextType {
  user: { email: string } | null;
  isLoginModalOpen: boolean;
  login: (email: string) => void;
  logout: () => void;
  openLoginModal: () => void;
  closeLoginModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUser({ email: storedEmail });
    }
  }, []);

  const login = (email: string) => {
    setUser({ email });
    localStorage.setItem('userEmail', email);
    closeLoginModal();
  };

  const logout = () => {
    if (confirm('Você tem certeza que deseja sair?')) {
      setUser(null);
      localStorage.removeItem('userEmail');
    }
  };

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const value = { user, isLoginModalOpen, login, logout, openLoginModal, closeLoginModal };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}