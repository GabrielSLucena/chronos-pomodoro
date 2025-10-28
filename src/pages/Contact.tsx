
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react'
import { toast } from 'react-hot-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  //const handleSubmit = (e: React.FormEvent) => {
  //  e.preventDefault()
  //  toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.')
  //  setFormData({ name: '', email: '', phone: '', company: '', message: '' })
  //}

  //const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //  setFormData({
  //    ...formData,
  //    [e.target.name]: e.target.value
  //  })
  //}

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Estamos prontos para ajudar você a encontrar a solução perfeita para seu consultório
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Fale Conosco
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Nossa equipe está pronta para atendê-lo e oferecer as melhores soluções em cadeiras odontológicas.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Telefone</h3>
                    <p className="text-gray-600">(11) 93457-6390</p>
                  </div>
                </div>

                {/* Contact Information 
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">E-mail</h3>
                    <p className="text-gray-600">HMrestauracoes@gmail.com.br</p>
                  </div>
                </div>*/}

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Endereço</h3>
                    <p className="text-gray-600">
                      Rua dos Crisântemos, 422<br />
                      Cidade Miramar / Assunção<br />
                      São Bernardo do Campo - SP, 09811-170
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Horário de Atendimento</h3>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-end">
              <a
                href="https://wa.me/5511934576390"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2da487] text-white px-10 py-6 rounded-xl font-semibold hover:bg-[#1aa84a] transition-all duration-300 hover:scale-105 flex items-center justify-center text-lg"
              >
                <Phone className="mr-3 w-6 h-6" /> Falar no WhatsApp
              </a>
            </div>
            {/* Contact Form 
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envie sua Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa/Clínica
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Nome da sua clínica"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Conte-nos sobre suas necessidades..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </div>*/}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossa Localização
            </h2>
            <p className="text-lg text-gray-600">
              Visite nosso showroom e conheça de perto nossos produtos
            </p>
          </div>
          
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.681120565743!2d-46.56475767105882!3d-23.72307886282169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce416549bea0ad%3A0xb362d21862a77424!2sR.%20dos%20Cris%C3%A2ntemos%2C%20422%20-%20Cidade%20Miramar%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009811-170!5e0!3m2!1spt-BR!2sbr!4v1760883344120!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa HM Restaurações"
            ></iframe>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
    