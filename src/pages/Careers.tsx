
    import React from 'react'
import {MapPin, Clock, DollarSign, Users, Target, Heart} from 'lucide-react'

const Careers = () => {
  const jobs = [
    {
      id: 1,
      title: 'Técnico em Equipamentos Odontológicos',
      location: 'São Paulo - SP',
      type: 'Tempo Integral',
      salary: 'R$ 3.500 - R$ 5.000',
      description: 'Responsável pela instalação, manutenção e reparo de cadeiras odontológicas e equipamentos relacionados.'
    },
    {
      id: 2,
      title: 'Consultor de Vendas',
      location: 'Rio de Janeiro - RJ',
      type: 'Tempo Integral',
      salary: 'R$ 4.000 - R$ 8.000 + Comissões',
      description: 'Atendimento e consultoria a clientes, apresentação de produtos e fechamento de vendas.'
    },
    {
      id: 3,
      title: 'Engenheiro de Produto',
      location: 'São Paulo - SP',
      type: 'Tempo Integral',
      salary: 'R$ 8.000 - R$ 12.000',
      description: 'Desenvolvimento e aprimoramento de produtos, análise técnica e inovação.'
    }
  ]

  const benefits = [
    {
      icon: Heart,
      title: 'Plano de Saúde',
      description: 'Cobertura completa para você e sua família'
    },
    {
      icon: Target,
      title: 'Participação nos Lucros',
      description: 'Bonificação anual baseada nos resultados da empresa'
    },
    {
      icon: Users,
      title: 'Ambiente Colaborativo',
      description: 'Equipe unida e focada no crescimento conjunto'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trabalhe Conosco
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Faça parte de uma equipe que está transformando a odontologia eira
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossa Cultura
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Na HM Restaurações , acreditamos que nossos colaboradores são nosso maior ativo. 
              Investimos no crescimento profissional e pessoal de cada membro da nossa equipe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vagas Abertas
            </h2>
            <p className="text-lg text-gray-600">
              Confira as oportunidades disponíveis e candidate-se
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {job.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600">
                      {job.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <button className="w-full lg:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                      Candidatar-se
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Não encontrou a vaga ideal?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Envie seu currículo para nosso banco de talentos. Entraremos em contato quando surgir uma oportunidade que combine com seu perfil.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Enviar Currículo
          </button>
        </div>
      </section>
    </div>
  )
}

export default Careers
    