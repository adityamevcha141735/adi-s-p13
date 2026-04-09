import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Globe, Rocket, Star, TrendingUp, Code, Briefcase } from 'lucide-react'
import TestimonialCarousel from '../components/TestimonialCarousel'
import Counter from '../components/Counter'

export default function Home() {
  return (
    <div className="space-y-20 py-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-6 mb-12 animate-fadeInUp">
          <h1 className="text-6xl md:text-7xl font-display font-bold">
            <span className="gradient-text">Digital Solutions</span>
            <br />
            for Modern Business
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafting beautiful, high-performance web experiences with cutting-edge technology and innovative design
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/projects" className="btn-primary flex items-center gap-2 hover:scale-105 transform transition-transform">
              View Projects <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn-secondary flex items-center gap-2 hover:scale-105 transform transition-transform">
              Get in Touch <Rocket size={20} />
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: Zap, title: 'Lightning Fast', desc: 'Optimized performance for instant loading' },
            { icon: Globe, title: 'Global Scale', desc: 'Deploy worldwide with confidence' },
            { icon: Rocket, title: 'Modern Stack', desc: 'Built with latest technologies' },
          ].map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="card text-center group hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 bg-blue-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg">{feature.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <Counter end={150} label="Projects Completed" />
            <Counter end={98} label="Client Satisfaction" />
            <Counter end={50} label="Team Members" />
            <Counter end={15} label="Years Experience" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-display font-bold mb-4 text-center">
          Our <span className="gradient-text">Services</span>
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Comprehensive solutions to drive your digital transformation
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: Code, title: 'Web Development', desc: 'Custom web applications' },
            { icon: TrendingUp, title: 'Growth Hacking', desc: 'Scale your business' },
            { icon: Briefcase, title: 'Consultation', desc: 'Expert guidance' },
          ].map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index}
                className="card group hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <Icon className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            )
          })}
        </div>
        <div className="text-center">
          <Link to="/services" className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-transform">
            View All Services <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-display font-bold mb-12 text-center">
          What Our Clients <span className="gradient-text">Say</span>
        </h2>
        <TestimonialCarousel />
        <div className="text-center mt-8">
          <Link to="/testimonials" className="text-primary font-bold hover:text-secondary transition-colors">
            Read more testimonials →
          </Link>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-display font-bold mb-4 text-center">
          Latest from Our <span className="gradient-text">Blog</span>
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Stay updated with insights and tips from our experts
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'The Future of Web Development', date: 'Apr 5, 2026' },
            { title: 'Why Performance Matters for SEO', date: 'Apr 3, 2026' },
            { title: 'Building Scalable Applications', date: 'Mar 28, 2026' },
          ].map((post, index) => (
            <div key={index} className="card group hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-primary to-secondary rounded-full mb-4"></div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.date}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/blog" className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-transform">
            Read All Articles <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary via-secondary to-accent py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-display font-bold text-white mb-6">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create something extraordinary together
          </p>
          <Link to="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100 inline-flex items-center gap-2 hover:scale-105 transform transition-transform">
            Start Your Project Today <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
