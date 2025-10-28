
    import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {MapPin, Calendar, Users, Award, ExternalLink, Filter} from 'lucide-react'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [portfolioRef, portfolioInView] = useInView({ threshold: 0.1, triggerOnce: true })

  const categories = [
    { id: 'all', name: 'Todos os Projetos' },
    { id: 'clinic', name: 'Clínicas Particulares' },
    { id: 'hospital', name: 'Hospitais' },
    { id: 'university', name: 'Universidades' },
    { id: 'franchise', name: 'Franquias' }
  ]

  const projects = [
    {
      id: 1,
      title: "Clínica OdontoVida - São Paulo",
      category: "clinic",
      location: "São Paulo - SP",
      date: "2024",
      clientType: "Clínica Particular",
      equipments: 8,
      investment: "R$ 480.000",
      image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Modernização completa com 8 cadeiras da linha Premium X1, transformando a experiência dos pacientes.",
      results: [
        "Aumento de 40% na satisfação dos pacientes",
        "Redução de 25% no tempo de procedimentos",
        "Melhoria significativa na ergonomia dos profissionais"
      ],
      testimonial: {
        text: "A HM Restaurações transformou nossa clínica. A qualidade dos equipamentos e o suporte técnico são excepcionais.",
        author: "Dr. Carlos Silva",
        role: "Diretor Clínico"
      }
    },
    {
      id: 2,
      title: "Hospital Odontológico Santa Cruz",
      category: "hospital",
      location: "Rio de Janeiro - RJ",
      date: "2023",
      clientType: "Hospital",
      equipments: 15,
      investment: "R$ 920.000",
      image: "https://images.pexels.com/photos/6627374/pexels-photo-6627374.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Implementação de centro odontológico completo com cadeiras Digital Pro para atendimento especializado.",
      results: [
        "Capacidade de atendimento aumentada em 60%",
        "Implementação de protocolos digitais",
        "Certificação hospitalar renovada"
      ],
      testimonial: {
        text: "Equipamentos de última geração que elevaram o padrão de atendimento do nosso hospital.",
        author: "Dra. Marina Santos",
        role: "Coordenadora Odontológica"
      }
    },
    {
      id: 3,
      title: "Universidade de Odontologia UNESP",
      category: "university",
      location: "Araraquara - SP",
      date: "2023",
      clientType: "Universidade Pública",
      equipments: 25,
      investment: "R$ 1.200.000",
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Renovação completa das clínicas de ensino com cadeiras Premium X1 e X2 para formação de novos dentistas.",
      results: [
        "Modernização de 3 clínicas de ensino",
        "Melhoria na qualidade do ensino prático",
        "Redução de custos de manutenção em 30%"
      ],
      testimonial: {
        text: "Parceria fundamental para a excelência do ensino odontológico. Equipamentos ideais para formação acadêmica.",
        author: "Prof. Dr. Roberto Lima",
        role: "Coordenador do Curso"
      }
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Nosso <span className="text-[#2da487]">Portfólio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Conheça os projetos que transformaram consultórios e clínicas em todo o . 
              Casos de sucesso que demonstram nossa expertise e qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2da487]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">200+</div>
              <div className="text-lg text-green-100">Projetos Realizados</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">1500+</div>
              <div className="text-lg text-green-100">Equipamentos Instalados</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">26</div>
              <div className="text-lg text-green-100">Estados Atendidos</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg text-green-100">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Filter className="w-5 h-5 text-gray-600" />
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#2da487] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={portfolioRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Image */}
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#2da487] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.clientType}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  
                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.equipments} equipamentos</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.investment}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Resultados Alcançados:</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <div className="w-2 h-2 bg-[#2da487] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 italic mb-4">"{project.testimonial.text}"</p>
                    <div className="flex items-center">
                      <div>
                        <div className="font-semibold text-gray-900">{project.testimonial.author}</div>
                        <div className="text-sm text-gray-600">{project.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2da487] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Quer fazer parte dos nossos casos de sucesso?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Entre em contato conosco e descubra como podemos transformar seu consultório.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511934576390?text=Olá! Gostaria de solicitar um orçamento para cadeiras odontológicas."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2da487] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Solicitar Orçamento
            </a>
            <a
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#2da487] transition-colors"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
    