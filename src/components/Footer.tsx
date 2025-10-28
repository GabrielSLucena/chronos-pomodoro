
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Phone, MapPin, Facebook, Instagram} from 'lucide-react'
import toast from 'react-hot-toast'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast.success('Obrigado por se inscrever em nossa newsletter!')
      setEmail('')
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-[#2da487] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Fique por dentro das novidades</h3>
            <p className="text-lg mb-6 text-green-100">
              Receba dicas, tendências e lançamentos do setor odontológico
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-[#2da487] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#2da487] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">HM</span>
                </div>
                <div>
                  <span className="text-xl font-bold">HM Restaurações</span>
                  <span className="text-[#2da487] block"></span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Conforto, tecnologia e confiança para o seu consultório odontológico.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/hm_restauracao/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#2da487] transition-colors" aria-label="Instagram - HM Restaurações">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><Link to="/sobre" className="text-gray-400 hover:text-[#2da487] transition-colors">Sobre Nós</Link></li>
                <li><Link to="/produtos" className="text-gray-400 hover:text-[#2da487] transition-colors">Produtos</Link></li>
                <li><Link to="/contato" className="text-gray-400 hover:text-[#2da487] transition-colors">Contato</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#2da487] transition-colors">Vendas</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#2da487] transition-colors">Suporte Técnico</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#2da487] transition-colors">Manutenção</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#2da487] transition-colors">Treinamento</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#2da487] transition-colors">Garantia Estendida</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-[#2da487] mt-1 flex-shrink-0" />
                  <div className="text-gray-400 text-sm">
                    <p>Rua dos Crisântemos, 422</p>
                    <p>Cidade Miramar / Assunção, 09811-170</p>
                    <p>São Bernardo do Campo - SP</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-[#2da487]" />
                  <span className="text-gray-400 text-sm">(11) 93457-6390</span>
                </div>
                <div className="text-gray-400 text-sm">
                  <p><strong>Horário de Atendimento:</strong></p>
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 HM Restaurações . Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#2da487] transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2da487] transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2da487] transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
