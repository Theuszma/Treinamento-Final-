
"use client";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginModal() {
  const { isLoginModalOpen, closeLoginModal, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isLoginModalOpen) {
    return null;
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    login(email);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-40 flex items-center justify-center" onClick={closeLoginModal}>
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={closeLoginModal} className="absolute top-2 right-4 text-gray-500 text-4xl hover:text-gray-800">&times;</button>
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 font-medium">Email:</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md" 
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-medium">Senha:</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md" 
              required
            />
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold text-lg rounded-md hover:bg-blue-700">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}