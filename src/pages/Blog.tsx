
    import React from 'react'
import {Calendar, User, ArrowRight} from 'lucide-react'

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Como Escolher a Cadeira Odontológica Ideal para Seu Consultório',
      excerpt: 'Guia completo com os principais fatores a considerar na hora de investir em uma nova cadeira odontológica.',
      author: 'Dr. Carlos Silva',
      date: '15 de Janeiro, 2024',
      image: 'https://images.pexels.com/photos/6812433/pexels-photo-6812433.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Equipamentos'
    },
    {
      id: 2,
      title: 'Tendências em Design de Consultórios Odontológicos para 2024',
      excerpt: 'Descubra as últimas tendências em design e ergonomia para criar um ambiente moderno e acolhedor.',
      author: 'Arq. Ana Costa',
      date: '10 de Janeiro, 2024',
      image: 'https://images.pexels.com/photos/6812522/pexels-photo-6812522.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Design'
    },
    {
      id: 3,
      title: 'Manutenção Preventiva: Prolongando a Vida Útil dos Equipamentos',
      excerpt: 'Dicas essenciais para manter seus equipamentos odontológicos sempre em perfeito funcionamento.',
      author: 'Téc. Roberto Lima',
      date: '5 de Janeiro, 2024',
      image: 'https://images.pexels.com/photos/6812584/pexels-photo-6812584.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Manutenção'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog HM Restaurações
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Conteúdo especializado sobre equipamentos odontológicos, tendências e dicas práticas
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    <span>Ler mais</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
    