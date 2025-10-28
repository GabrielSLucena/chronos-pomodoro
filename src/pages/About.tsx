
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Eye, Heart} from 'lucide-react'
import { useEffect } from 'react'

const About = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2da487]/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Sobre a <span className="text-[#2da487]">HM Restaurações </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Há mais de 14 anos restaurando cadeiras e equipamentos odontológicos, visando qualidade, durabilidade e segurança.
              Atuando também na customização dos equipamentos conforme a necessidade do cliente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section ref={valuesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#2da487] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Nossa missão é oferecer soluções completas em restauração e renovação de cadeiras odontológicas, 
                garantindo qualidade técnica, conforto e estética em cada detalhe.
                Combinamos pintura profissional, tapeçaria moderna, manutenção hidráulica, elétrica e eletrônica para prolongar a 
                vida útil dos equipamentos e proporcionar ao dentista uma experiência prática e confiável.
                Queremos que cada consultório reflita o melhor da odontologia: tecnologia, higiene e bem-estar 
                — tanto para o profissional como para o paciente
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#2da487] rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser reconhecida como a principal referência em equipamentos odontológicos 
                no Brasil, liderando a inovação tecnológica e estabelecendo novos padrões 
                de qualidade e atendimento no setor.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#2da487] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossos Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Qualidade em cada detalhe</li>
                <li>• Inovação constante</li>
                <li>• Atendimento humanizado</li>
                <li>• Responsabilidade social</li>
                <li>• Transparência nas relações</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company History 
      <section ref={historyRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={historyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa História</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma trajetória de sucesso construída com dedicação, inovação e compromisso 
              com a excelência no atendimento ao setor odontológico eiro.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[#2da487]"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={historyInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-[#2da487] mb-2">{item.year}</div>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#2da487] rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>*/}

      {/* Team Section
      <section ref={teamRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa Equipe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profissionais especializados e comprometidos em oferecer as melhores 
              soluções para o setor odontológico.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-[#2da487]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#2da487] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Prêmios e Reconhecimentos</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nossa excelência reconhecida pelos principais órgãos do setor odontológico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-[#2da487] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="text-2xl font-bold text-[#2da487] mb-2">{award.year}</div>
                <h3 className="text-white font-semibold mb-2">{award.title}</h3>
                <p className="text-gray-400 text-sm">{award.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-20 bg-[#2da487]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">14+</div>
              <div className="text-lg text-green-100">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">100+</div>
              <div className="text-lg text-green-100">Clientes Atendidos</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">10+</div>
              <div className="text-lg text-green-100">Modelos Disponíveis</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg text-green-100">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
