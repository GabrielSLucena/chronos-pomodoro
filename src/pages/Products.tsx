
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {Search, CheckCircle, Heart, MessageCircleDashed as MessageCircle} from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const sortBy: string = 'name'

  const [productsRef, productsInView] = useInView({ threshold: 0.1, triggerOnce: true })

  const products = [
    {
      id: 1,
      name: "Cadeira Odontológica Gnatus",
      price: 12980,
      category: "Syncrus G1",
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
      name: "Cadeira Odontológica Olsen",
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
    {
      id: 4,
      name: "Cadeira Odontológica Olsen",
      category: "Siena",
      price: 8980,
      originalPrice: 9872,
      gallery: [
        "./Olsen2/siena2 (1).jpeg",
        "./Olsen2/siena2 (2).jpeg",
        "./Olsen2/siena2 (3).jpeg",
        "./Olsen2/siena2 (4).jpeg",
        "./Olsen2/siena2 (5).jpeg",
        "./Olsen2/siena2 (6).jpeg",
        "./Olsen2/siena2 (7).jpeg",
        "./Olsen2/siena2 (8).jpeg",
        "./Olsen2/siena2 (9).jpeg",
        "./Olsen2/siena2 (10).jpeg",
      ],
      rating: 5.0,
      reviews: 73,
      availability: "Vendido",
      features: [
        "Equipo Equipo Acoplado",
        "Um Sugador",
        "Disposição bomba vácuo",
        "Mangueiras Novas",
        "Funções Volta zero",
        "2 posição trabalho",
        "Tapeçaria em ótimo estado!"
      ],
      description: "O que há de mais avançado em cadeiras odontológicas. Luxo, tecnologia e conforto incomparáveis.",
      specifications: {
        "Dimensões": "195 x 85 x 135 cm",
        "Peso": "125 kg",
        "Voltagem": "220V",
        "Certificação": "ANVISA, ISO 9001, CE, FDA"
      }
    },
    {
      id: 5,
      name: "Cadeira Odontológica Olsen",
      category: "Cinética",
      price: 11880,
      originalPrice: 13580,
      gallery: [
        "./Olsen3/cinetica (1).jpeg",
        "./Olsen3/cinetica (2).jpeg",
        "./Olsen3/cinetica (3).jpeg",
        "./Olsen3/cinetica (4).jpeg",
      ],
      rating: 5.0,
      reviews: 73,
      availability: "Em Restauração",
      features: [
        "Equipo Acoplado com acionamento elétrico ",
        "1 Sugador",
        "Disposição bomba vácuo",
        "Mangueiras Novas",
        "Funções Volta zero ",
        "Tapeçaria nova na cor azul!",
        "Refletor led"
      ],
      description: "O que há de mais avançado em cadeiras odontológicas. Luxo, tecnologia e conforto incomparáveis.",
      specifications: {
        "Dimensões": "195 x 85 x 135 cm",
        "Peso": "125 kg",
        "Voltagem": "220V",
        "Certificação": "ANVISA, ISO 9001, CE, FDA"
      }
    },
     {
      id: 6,
      name: "Cadeira Odontológica Olsen",
      category: "Lógic Exclusive I",
      price: 16980,
      originalPrice: 17880,
      gallery: [
        "./Olsen4/logic (1).jpeg",
        "./Olsen4/logic (2).jpeg",
        "./Olsen4/logic (3).jpeg",
        "./Olsen4/logic (4).jpeg",
        "./Olsen4/logic (5).jpeg",
        "./Olsen4/logic (6).jpeg",
        "./Olsen4/logic (7).jpeg",
      ],
      rating: 5.0,
      reviews: 73,
      availability: "Vendido",
      features: [
        "Braço pneumático ",
        "Fotopolimizador Acoplado ",
        "Acionamento elétrico água ",
        "Acionamento Elétrico porta copo",
        "Disposição bomba vácuo ",
        "Um Sugador ",
        "Funções Volta zero e posição de trabalho",
        "Braço Auxiliar ",
        "Cuspideira Articulada",
        "Negatoscópio ",
        "Refletor led",
        "Braço para monitor de câmera intra oral"
      ],
      description: "O que há de mais avançado em cadeiras odontológicas. Luxo, tecnologia e conforto incomparáveis.",
      specifications: {
        "Dimensões": "195 x 85 x 135 cm",
        "Peso": "125 kg",
        "Voltagem": "220V",
        "Certificação": "ANVISA, ISO 9001, CE, FDA"
      }
    }
  ]

  const filteredProducts = products
    .filter((product) => {
      const term = searchTerm.toLowerCase()
      const matchesSearch =
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      return matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
    }
  })

  const handleWhatsAppContact = (product: { name: string; price: number; category:string }) => {
    const message = `Olá! Tenho interesse na ${product.name} - ${product.category}. Gostaria de mais informações.`
    const phoneNumber = "5511934576390"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  //const handleEmailQuote = (product: any) => {
  //  const subject = `Solicitação de Orçamento - ${product.name}`
  //  const body = `Olá,\n\nGostaria de solicitar um orçamento para a ${product.name}.\n\nAguardo retorno.\n\nObrigado(a)!`
  //  const url = `mailto:vendas@HM Restaurações.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  //  window.open(url)
  //}

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Nossos <span className="text-[#2da487]">Produtos</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Descubra nossa linha completa de cadeiras odontológicas. 
              Tecnologia, conforto e qualidade para o seu consultório.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2da487] focus:border-transparent"
              />
            </div>

            {/* Filters 
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2da487] focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>

              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2da487] focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range.id} value={range.id}>{range.name}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2da487] focus:border-transparent"
              >
                <option value="name">Nome A-Z</option>
                <option value="price-low">Menor Preço</option>
                <option value="price-high">Maior Preço</option>
                <option value="rating">Melhor Avaliação</option>
              </select>
            </div>*/}
          </div>
          {/* Search
          <div className="mt-4 text-gray-600">
            {filteredProducts.length} produto(s) encontrado(s)
          </div> */}
        </div>
      </section>

      {/* Products Grid */}
      <section ref={productsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full h-64"
                  >
                    {[...(product.gallery || [])].map((img, i) => (
                      <SwiperSlide key={i}>
                        <img 
                          src={img}
                          alt={`${product.name} ${i + 1}`}
                          className="w-full h-64 object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                    {product.availability && (
                      <div className="absolute top-3 left-3 z-20">
                        <span
                          className={`px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm whitespace-nowrap ${
                            product.availability.toLowerCase().includes('estoque')
                              ? 'bg-green-100 text-green-800'
                              : product.availability.toLowerCase().includes('restauração')
                              ? 'bg-blue-100 text-blue-800'
                              :'bg-red-100 text-red-700'
                          }`}
                        >
                          {product.availability}
                        </span>
                      </div>
                    )}

                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  {product.originalPrice > product.price && (
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Oferta!
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex flex-col flex-grow p-6 justify-between">
                  <div>
                    <h3 className="text-md font-semibold text-gray-900 mb-2">
                      {product.name} - {product.category}
                    </h3>

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

                  {/* Action Buttons — sempre no fim */}
                  <div className="mt-auto">
                    <button
                      onClick={() => handleWhatsAppContact(product)}
                      className="w-full bg-[#25D366] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#20bd5a] transition-colors flex items-center justify-center"
                    >
                      <MessageCircle className="mr-2 w-5 h-5" />
                      Comprar via WhatsApp
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">Nenhum produto encontrado com os filtros selecionados.</div>
            </div>
          )}
        </div>
      </section>

      {/* Download Catalog
      <section className="py-16 bg-[#2da487]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Baixe nosso catálogo completo
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Especificações técnicas, preços e condições especiais
          </p>
          <button className="bg-white text-[#2da487] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            <Download className="mr-2 w-5 h-5" />
            Download Catálogo PDF
          </button>
        </div>
      </section> */}
    </div>
  )
}

export default Products
