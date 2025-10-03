
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, Gift, ArrowRight, MessageCircle } from 'lucide-react';

export default function ExitIntentPopup({ isOpen, onClose, whatsappLink }) {
  if (!isOpen) return null;

  const promoWhatsappLink = "https://wa.me/5511992644010?text=Ol%C3%A1!%20Vi%20a%20promo%C3%A7%C3%A3o%20de%20R$50%20de%20desconto%20no%20site%20de%20IA%20da%20Mati%20Studio%20e%20quero%20garantir%20meu%20desconto!";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl w-full max-w-lg p-8 text-white border border-red-500/50"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-[#FF004D] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,0,77,0.5)]">
                <Gift className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Espere! Antes de ir...
              </h2>

              <p className="text-xl text-gray-300">
                Feche seu site <span className="text-red-400 font-semibold">AINDA HOJE</span> e ganhe um desconto exclusivo de
              </p>

              <div className="bg-white/10 rounded-xl p-6">
                <span className="text-6xl font-bold text-red-400">R$ 50,00</span>
                <p className="text-lg text-gray-200">no valor total!</p>
              </div>

              <p className="text-sm text-gray-400">
                Essa é a sua chance de ter um site profissional por um preço ainda melhor.
              </p>

              <a href={promoWhatsappLink} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="w-full bg-[#FF004D] hover:bg-[#D90042] text-white px-8 py-6 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                >
                  <MessageCircle className="mr-3 w-5 h-5"/>
                  Garantir meu desconto AGORA
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
