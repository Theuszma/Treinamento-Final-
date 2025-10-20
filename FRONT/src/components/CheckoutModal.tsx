"use client";

import { useCart } from "@/contexts/CartContext";
import Image from "next/image";

export default function CheckoutModal() {
  const { isCheckoutModalOpen, closeCheckoutModal } = useCart();

  if (!isCheckoutModalOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
      onClick={closeCheckoutModal}
    >
      <div 
        className="bg-white p-6 rounded-lg shadow-xl relative w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={closeCheckoutModal} 
          className="absolute top-2 right-4 text-gray-500 text-4xl hover:text-gray-800"
        >
          &times;
        </button>
        <Image 
          src="/assets/imgs/Logo/Beta.gif"
          alt="SOBRA NADA"
          width={400}
          height={300}
          unoptimized
          className="w-full rounded-md"
        />
        <p className="text-center font-bold mt-5 text-gray-800">
          Você não tem aura para comprar aqui betinha, vá farmar.
        </p>
      </div>
    </div>
  );
}