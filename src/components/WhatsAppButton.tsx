
import React from 'react'
import {MessageCircleDashed as MessageCircle} from 'lucide-react'
import { motion } from 'framer-motion'

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre as cadeiras odontológicas da HM Restaurações ."
    const phoneNumber = "5511934576390"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
    >
      <MessageCircle size={24} />
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Fale conosco no WhatsApp
        <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </motion.button>
  )
}

export default WhatsAppButton
