import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, ArrowRight, Phone, Mail, Heart, Lightbulb, Headphones, MessageCircle } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Home = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [statsRef, statsInView] = useInView({ threshold: 0.1, triggerOnce: true })

  const stats = [
    { number: "14+", label: "Anos de Experiência" },
    { number: "100+", label: "Clientes Satisfeitos" },
    { number: "10+", label: "Modelos Disponíveis" },
  ]

  const values = [
    { icon: <CheckCircle className="w-8 h-8 text-[#2da487]" />, title: "Qualidade", description: "Produtos com os mais altos padrões" },
    { icon: <Heart className="w-8 h-8 text-[#2da487]" />, title: "Conforto", description: "Ergonomia avançada para o bem-estar do profissional e paciente" },
    { icon: <Lightbulb className="w-8 h-8 text-[#2da487]" />, title: "Inovação", description: "Tecnologia de ponta em cada detalhe dos nossos equipamentos" },
    { icon: <Headphones className="w-8 h-8 text-[#2da487]" />, title: "Suporte Técnico", description: "Assistência especializada e manutenção preventiva garantida" }
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Cadeira Odontológica Gnatus",
      category: "Syncrus G1",
      price: 12980,
      originalPrice: 14980,
      gallery: [
        "./Gnatus/Gantus1.jpeg",
        "./Gnatus/Gantus2.jpeg",
        "./Gnatus/Gantus3.jpeg",
        "./Gnatus/Gantus4.jpeg",
        "./Gnatus/Gantus5.jpeg",
        "./Gnatus/Gantus6.jpeg",
        "./Gnatus/Gantus7.jpeg",
      ],
      rating: 4.5,
      reviews: 127,
      availability: "Em estoque",
      features: [
        "Braço pneumático",
        "Fotopolimizador Acoplado",
        "Acionamento elétrico água",
        "Disposição bomba vácuo",
        "Um Sugador",
        "Funções Volta zero e posição de trabalho",
      ],
      description: "Cadeira odontológica ideal para consultórios que buscam qualidade e economia. Design funcional com recursos essenciais.",
      specifications: {
        "Dimensões": "180 x 70 x 120 cm",
        "Peso": "85 kg",
        "Voltagem": "110/220V",
        "Certificação": "ANVISA"
      }
    },
   {
      id: 2,
      name: "Cadeira Odontológica Gnatus",
      category: "Syncrus GL",
      price: 13980,
      originalPrice: 15980,
      gallery: [
        "./GnatusG/gnatus_g (1).jpeg",
        "./GnatusG/gnatus_g (2).jpeg",
        "./GnatusG/gnatus_g (3).jpeg",
        "./GnatusG/gnatus_g (4).jpeg",
        "./GnatusG/gnatus_g (5).jpeg",
        "./GnatusG/gnatus_g (6).jpeg",
        "./GnatusG/gnatus_g (7).jpeg",
        "./GnatusG/gnatus_g (8).jpeg",
        "./GnatusG/gnatus_g (9).jpeg",
        "./GnatusG/gnatus_g (10).jpeg",
      ],
      rating: 4.8,
      reviews: 89,
      availability: "Em estoque",
      features: [
        "Braço pneumático",
        "Disposição bomba vácuo",
        "Um Sugador",
        "Funções Volta zero e posição de trabalho",
        "Tapeçaria nova customização e costurada"
      ],
      description: "Cadeira premium com tecnologia avançada e máximo conforto para profissional e paciente.",
      specifications: {
        "Dimensões": "185 x 75 x 125 cm",
        "Peso": "95 kg",
        "Voltagem": "110/220V",
        "Certificação": "ANVISA, ISO 9001"
      }
    },
    {
      id: 3,
      name: "Odontológica Olsen",
      category: "Siena",
      price: 8480,
      originalPrice: 8970,
      gallery: [
        "./Olsen/olsen (2).jpeg",
        "./Olsen/olsen (1).jpeg",
        "./Olsen/olsen (3).jpeg",
        "./Olsen/olsen (4).jpeg",
        "./Olsen/olsen (5).jpeg",
        "./Olsen/olsen (6).jpeg",
        "./Olsen/olsen (7).jpeg",
        "./Olsen/olsen (8).jpeg",
        "./Olsen/olsen (9).jpeg",
        "./Olsen/olsen (10).jpeg",
      ],
      rating: 4.9,
      reviews: 156,
      availability: "Em estoque",
      features: [
        "Equipo Equipo Acoplado",
        "Um Sugador",
        "Disposição bomba vácuo",
        "Mangueiras Novas",
        "Funções Volta zero",
        "2 posição trabalho",
        "Tapeçaria em ótimo estado!"
      ],
      description: "Tecnologia digital de ponta para consultórios modernos. Interface intuitiva e recursos avançados.",
      specifications: {
        "Dimensões": "190 x 80 x 130 cm",
        "Peso": "110 kg",
        "Voltagem": "220V",
        "Certificação": "ANVISA, ISO 9001, CE"
      }
    },
  ]

  const handleWhatsAppContact = (product: { name: string; price: number }) => {
    const message = `Olá! Tenho interesse na ${product.name} (R$ ${product.price.toLocaleString('pt-BR')}). Gostaria de mais informações.`
    const phoneNumber = "5511934576390"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
        <div className="absolute inset-0">
          <img src="./Hedder.png" alt="Consultório odontológico moderno" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={heroInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }} className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Conforto,</span>
                  <span
                  className="block text-[#2da487]"
                    style={{ textShadow: '1px 1px 1px rgba(255, 255, 255, 0.9)' }}
                  >Tecnologia</span>
                <span className="block">e Confiança</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Para o seu consultório odontológico. Equipamentos de alta qualidade que garantem o melhor atendimento aos seus pacientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/produtos" className="bg-[#2da487] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1aa84a] transition-all duration-300 hover:scale-105 flex items-center justify-center group">
                  Ver Produtos
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="https://wa.me/5511934576390" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center group">
                  <Phone className="mr-2 w-5 h-5" /> Falar no WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={heroInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Por que escolher a HM Restaurações?</h3>
                <div className="space-y-4">
                  {["✓ Garantia Motor / Placas até 3 meses", "✓ Suporte técnico especializado", "✓ Em até 12x sem juros", "✓ Cadeira revisada e mangueiras novas"].map((item, index) => (
                    <motion.div key={index} initial={{ opacity: 0, x: 20 }} animate={heroInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }} className="text-white text-lg">
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-[#2da487]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid grid-cols-2 gap-8 
              ${stats.length === 3 ? 'lg:grid-cols-3 justify-items-center' : 'lg:grid-cols-4'}`}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-green-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  
      {/* Values Section */}
      <section ref={featuresRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={featuresInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossos Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprometidos em fornecer as melhores soluções para o setor odontológico</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={featuresInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Produtos em Destaque</h2>
            <p className="text-xl text-gray-600">Conheça nossas cadeiras odontológicas mais populares</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Product Image Carousel */}
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  className="w-full h-64"
                >
                  {product.gallery.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-64 object-cover" />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Availability Badge */}
                {product.availability && (
                  <div className="absolute top-3 left-3 z-20">
                    <span
                      className={`px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm whitespace-nowrap ${
                        product.availability.toLowerCase().includes('estoque')
                          ? 'bg-green-100 text-green-800'
                          : product.availability.toLowerCase().includes('restauração')
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {product.availability}
                    </span>
                  </div>
                )}

                {/* Product Info */}
                <div className="flex flex-col flex-grow p-6 justify-between">
                  <div>
                    <h3 className="text-md font-semibold text-gray-900 mb-2">{product.name} - {product.category}</h3>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-[#2da487]">
                          R$ {product.price.toLocaleString('pt-BR')}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">
                            R$ {product.originalPrice.toLocaleString('pt-BR')}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">
                        ou 12x de R$ {Math.round(product.price / 12).toLocaleString('pt-BR')}
                      </p>

                      <p className="text-xs text-gray-500 mt-1 italic">
                        Frete e instalação não incluso.
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#2da487] mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* WhatsApp Button */}
                  <div className="mt-auto">
                    <button
                      onClick={() => handleWhatsAppContact(product)}
                      className="w-full bg-[#25D366] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#20bd5a] transition-colors flex items-center justify-center"
                    >
                      <MessageCircle className="mr-2 w-5 h-5" /> Comprar via WhatsApp
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/produtos" className="inline-flex items-center bg-[#2da487] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1aa84a] transition-colors group">
              Ver Todos os Produtos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2da487]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Pronto para transformar seu consultório?</h2>
          <p className="text-xl text-green-100 mb-8">Entre em contato conosco e descubra a solução ideal para suas necessidades</p>
          <div className="flex justify-center">
            <a 
              href="https://wa.me/5511934576390" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#2da487] transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
