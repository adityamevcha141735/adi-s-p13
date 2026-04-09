import { Award, Code, Zap, Globe, Users, TrendingUp } from 'lucide-react'

const SERVICES = [
  {
    id: 1,
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices',
  },
  {
    id: 2,
    icon: Zap,
    title: 'Performance',
    description: 'Lightning-fast sites optimized for speed and user experience',
  },
  {
    id: 3,
    icon: Globe,
    title: 'Digital Strategy',
    description: 'Strategic guidance for your digital transformation journey',
  },
  {
    id: 4,
    icon: Users,
    title: 'Consultation',
    description: 'Expert advice on technology stack and implementation',
  },
  {
    id: 5,
    icon: TrendingUp,
    title: 'Growth Hacking',
    description: 'Data-driven strategies to scale your business exponentially',
  },
  {
    id: 6,
    icon: Award,
    title: 'Quality Assurance',
    description: 'Rigorous testing to ensure excellence at every step',
  },
]

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
          Our <span className="gradient-text">Services</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive solutions for your digital success
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => {
          const Icon = service.icon
          return (
            <div
              key={service.id}
              className="card group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <Icon className="text-primary group-hover:text-secondary transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{service.description}</p>
              <div className="mt-6 h-1 bg-gradient-to-r from-primary to-secondary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </div>
          )
        })}
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-12 text-white text-center">
        <h2 className="text-4xl font-display font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-lg mb-6 opacity-90">Let's discuss which service fits your needs best</p>
        <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105">
          Schedule a Consultation
        </button>
      </div>
    </section>
  )
}
