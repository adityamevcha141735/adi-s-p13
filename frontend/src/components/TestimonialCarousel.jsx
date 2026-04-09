import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    text: 'Outstanding work! The portfolio transformed our digital presence completely. Highly professional and responsive.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mike Chen',
    role: 'Founder, InnovateLabs',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    text: 'Best team to work with. They understood our vision and delivered beyond expectations. Truly talented!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Marketing Director',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    text: 'Fantastic results! The platform runs smoothly and looks absolutely stunning. Great attention to detail.',
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((currentIndex + 1) % TESTIMONIALS.length)
  const prev = () => setCurrentIndex((currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  const testimonial = TESTIMONIALS[currentIndex]

  return (
    <div className="relative">
      <div className="card text-center">
        <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-lg text-gray-700 mb-4 italic">"{testimonial.text}"</p>
        <p className="font-bold text-dark">{testimonial.name}</p>
        <p className="text-sm text-gray-600">{testimonial.role}</p>
      </div>

      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-3 bg-primary text-white rounded-full hover:bg-blue-700 transition-all"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-3 bg-primary text-white rounded-full hover:bg-blue-700 transition-all"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentIndex ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
