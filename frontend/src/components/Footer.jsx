import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-16 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold gradient-text mb-4">Portfolio</h3>
            <p className="text-gray-400 text-sm">Building exceptional digital experiences</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-secondary transition-colors transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors transform hover:scale-110">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors transform hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Solutions</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/services" className="hover:text-secondary transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Consultation</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Growth Hacking</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Analytics</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-secondary transition-colors">Blog</Link></li>
              <li><Link to="/testimonials" className="hover:text-secondary transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get latest updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-700 rounded-l text-white focus:outline-none text-sm"
              />
              <button className="bg-primary px-4 py-2 rounded-r hover:bg-blue-700 transition-colors font-semibold text-sm">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
