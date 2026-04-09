import { useState } from 'react'
import { ExternalLink, Github, Search } from 'lucide-react'

const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration and real-time inventory',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization platform for business intelligence',
    tags: ['React', 'D3.js', 'PostgreSQL', 'WebSocket'],
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'Intelligent content creation tool powered by machine learning',
    tags: ['React', 'Python', 'OpenAI', 'FastAPI'],
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1677442d019cecf8b13f1553f8ca306d912058fef?w=500&h=300&fit=crop',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Social Networking App',
    description: 'Scalable social platform with real-time messaging and notifications',
    tags: ['React Native', 'Firebase', 'Node.js', 'Redis'],
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1611141409921-7e7ee96d641d?w=500&h=300&fit=crop',
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Mobile Banking App',
    description: 'Secure mobile application with real-time transaction updates',
    tags: ['React Native', 'Node.js', 'PostgreSQL'],
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=300&fit=crop',
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud infrastructure with automated deployment pipeline',
    tags: ['AWS', 'Docker', 'Kubernetes'],
    category: 'DevOps',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop',
    link: '#',
    github: '#',
  },
]

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(PROJECTS.map(p => p.category))]

  const filteredProjects = PROJECTS.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16 animate-fadeInUp">
        <h1 className="text-5xl font-display font-bold mb-4">
          <span className="gradient-text">Featured Projects</span>
        </h1>
        <p className="text-xl text-gray-600">Showcasing our latest work and innovations</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-12 space-y-6">
        <div className="relative">
          <Search className="absolute left-4 top-4 text-gray-400" size={24} />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-primary transition-all"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="card overflow-hidden group hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fadeInUp"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="relative mb-6 overflow-hidden rounded-lg aspect-video bg-gray-200">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                <a href={project.link} className="btn-primary hover:scale-110 transition-transform">
                  <ExternalLink size={20} />
                </a>
                <a href={project.github} className="btn-secondary hover:scale-110 transition-transform">
                  <Github size={20} />
                </a>
              </div>
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-secondary transition-colors">
                {project.category}
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-blue-100 text-primary rounded-full text-xs font-semibold hover:bg-blue-200 transition-colors cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No projects found. Try adjusting your search.</p>
        </div>
      )}

      {/* CTA */}
      <div className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center">
        <h2 className="text-4xl font-display font-bold mb-4">Have a Project in Mind?</h2>
        <p className="text-lg mb-6">Let's discuss how we can help you build something amazing</p>
        <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105">
          Start a Project
        </button>
      </div>
    </section>
  )
}
